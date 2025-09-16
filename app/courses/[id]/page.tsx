import { Navigation } from "@/components/navigation"
import { CourseDetails } from "@/components/courses/course-details"
import { CourseSidebar } from "@/components/courses/course-sidebar"
import { notFound } from "next/navigation"
import { getDemoCourseById } from "@/lib/demo-courses"

interface CoursePageProps {
  params: { id: string }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getDemoCourseById(params.id)

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CourseDetails course={course} />
          </div>
          <div className="lg:col-span-1">
            <CourseSidebar course={course} />
          </div>
        </div>
      </main>
    </div>
  )
}
