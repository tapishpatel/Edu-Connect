"use client"

import { Navigation } from "@/components/navigation"
import { CourseGrid } from "@/components/courses/course-grid"
import { CourseFilters } from "@/components/courses/course-filters"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Plus, X } from "lucide-react"
import { useState, useMemo } from "react"
import Link from "next/link"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [view, setView] = useState<"grid" | "list">("grid")

  const quickCategories = useMemo(
    () => [
      { title: "Category", options: ["Computer Science", "Business", "Finance", "Language", "Mathematics", "Engineering"] },
      { title: "Level", options: ["Beginner", "Intermediate", "Advanced"] },
      { title: "Features", options: ["Offline Available", "Live Sessions", "Certificates", "Assignments"] },
    ],
    []
  )

  const toggleQuickFilter = (value: string) => {
    setSelectedFilters((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const clearAll = () => {
    setSelectedFilters([])
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container px-4 py-8">
        {/* Banner */}
        <section className="mb-8">
          <div className="rounded-xl bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Browse Courses</h1>
                <p className="opacity-90">Discover courses designed for low-bandwidth learning</p>
              </div>
              {selectedFilters.length > 0 && (
                <Button variant="outline" className="bg-transparent" onClick={clearAll}>
                  <X className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Search and Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search courses..." 
              className="pl-10 bg-background" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button 
              variant={view === "grid" ? "default" : "outline"}
              className="bg-transparent data-[state=on]:bg-primary"
              onClick={() => setView("grid")}
            >
              Grid
            </Button>
            <Button 
              variant={view === "list" ? "default" : "outline"}
              className="bg-transparent data-[state=on]:bg-primary"
              onClick={() => setView("list")}
            >
              List
            </Button>
            <Button 
              variant="outline" 
              className="sm:w-auto bg-transparent"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button asChild>
              <Link href="/courses/demo-session">
                <Plus className="h-4 w-4 mr-2" />
                Demo Session
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="space-y-3 mb-8">
          {quickCategories.map((group) => (
            <div key={group.title} className="flex items-start gap-3 overflow-x-auto">
              <span className="shrink-0 mt-1 text-sm text-muted-foreground w-24">{group.title}</span>
              <div className="flex gap-2">
                {group.options.map((opt) => {
                  const active = selectedFilters.includes(opt)
                  return (
                    <Badge
                      key={opt}
                      variant={active ? "default" : "outline"}
                      className={`${active ? "bg-primary text-primary-foreground" : ""} cursor-pointer select-none`}
                      onClick={() => toggleQuickFilter(opt)}
                    >
                      {opt}
                    </Badge>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <CourseFilters onFiltersChange={setSelectedFilters} />
          </div>

          {/* Course Grid */}
          <div className="lg:col-span-3">
            <CourseGrid filters={selectedFilters} searchQuery={searchQuery} view={view} />
          </div>
        </div>
      </main>
    </div>
  )
}
