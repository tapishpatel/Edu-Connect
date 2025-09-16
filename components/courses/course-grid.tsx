"use client"

import { CourseCard } from "./course-card"
import { listDemoCourses, type DemoCourse } from "@/lib/demo-courses"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

interface CourseGridProps {
  filters?: string[]
  searchQuery?: string
  view?: "grid" | "list"
  pageSize?: number
}

export function CourseGrid({ filters = [], searchQuery = "", view = "grid", pageSize = 9 }: CourseGridProps) {
  const [sortBy, setSortBy] = useState("popular")
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  // Reset page on filter/search/sort changes and show skeleton briefly
  useEffect(() => {
    setPage(1)
  }, [filters, searchQuery, sortBy])

  useEffect(() => {
    setIsLoading(true)
    const t = setTimeout(() => setIsLoading(false), 350)
    return () => clearTimeout(t)
  }, [filters, searchQuery, sortBy, page, view])

  const filteredAndSortedCourses = useMemo(() => {
    let courses = listDemoCourses()

    // Apply search filter
    if (searchQuery) {
      courses = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Apply category/level filters
    if (filters.length > 0) {
      courses = courses.filter((course) => {
        return filters.some((filter) => {
          if (course.category === filter) return true
          if (course.level === filter) return true
          if (course.dataUsage === filter) return true
          if (filter === "Offline Available" && course.isOfflineAvailable) return true
          return false
        })
      })
    }

    // Apply sorting
    switch (sortBy) {
      case "rating":
        courses.sort((a, b) => b.rating - a.rating)
        break
      case "duration":
        courses.sort((a, b) => {
          const aWeeks = parseInt(a.duration.split(" ")[0])
          const bWeeks = parseInt(b.duration.split(" ")[0])
          return aWeeks - bWeeks
        })
        break
      case "level":
        const levelOrder = { Beginner: 1, Intermediate: 2, Advanced: 3 } as const
        courses.sort(
          (a, b) => levelOrder[a.level as keyof typeof levelOrder] - levelOrder[b.level as keyof typeof levelOrder]
        )
        break
      default: // popular
        courses.sort((a, b) => b.enrolledStudents - a.enrolledStudents)
    }

    return courses
  }, [filters, searchQuery, sortBy])

  const total = filteredAndSortedCourses.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const pageStart = (page - 1) * pageSize
  const pageEnd = pageStart + pageSize
  const pageItems = filteredAndSortedCourses.slice(pageStart, pageEnd)

  const goPrev = () => setPage((p) => Math.max(1, p - 1))
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1))

  const SkeletonCard = () => (
    <div className="h-full flex flex-col rounded-lg border border-border overflow-hidden animate-pulse">
      <div className="h-48 bg-muted" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-24 bg-muted rounded" />
        <div className="h-6 w-3/4 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-2/3 bg-muted rounded" />
      </div>
    </div>
  )

  const SkeletonRow = () => (
    <div className="flex gap-4 rounded-lg border border-border p-4 animate-pulse">
      <div className="h-24 w-40 bg-muted rounded" />
      <div className="flex-1 space-y-3">
        <div className="h-4 w-20 bg-muted rounded" />
        <div className="h-6 w-2/3 bg-muted rounded" />
        <div className="h-4 w-1/2 bg-muted rounded" />
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing {Math.min(total, pageEnd)} of {total} courses
        </p>
        <select
          aria-label="Sort courses"
          className="px-3 py-2 border border-border rounded-md bg-background text-sm"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="popular">Sort by: Popular</option>
          <option value="rating">Sort by: Rating</option>
          <option value="duration">Sort by: Duration</option>
          <option value="level">Sort by: Level</option>
        </select>
      </div>

      {/* Content */}
      {isLoading ? (
        view === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: pageSize }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {Array.from({ length: Math.min(pageSize, 6) }).map((_, i) => (
              <SkeletonRow key={i} />
            ))}
          </div>
        )
      ) : total === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No courses found matching your filters.</p>
        </div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pageItems.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {pageItems.map((course) => (
            <ListRow key={course.id} course={course} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {total > 0 && (
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" className="bg-transparent" onClick={goPrev} disabled={page <= 1}>
            Prev
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button variant="outline" className="bg-transparent" onClick={goNext} disabled={page >= totalPages}>
            Next
          </Button>
        </div>
      )}
    </div>
  )
}

function ListRow({ course }: { course: DemoCourse }) {
  return (
    <div className="flex gap-4 rounded-lg border border-border p-4">
      <img
        src={course.thumbnail || "/placeholder.svg"}
        alt={course.title}
        className="h-24 w-40 object-cover rounded"
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement
          if (img.src.indexOf("/placeholder.svg") === -1) img.src = "/placeholder.svg"
        }}
      />
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs text-muted-foreground">{course.category} • {course.level}</div>
            <h3 className="font-semibold text-lg leading-tight">{course.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <div>{course.duration}</div>
            <div>{course.rating} ★</div>
          </div>
        </div>
      </div>
    </div>
  )
}
