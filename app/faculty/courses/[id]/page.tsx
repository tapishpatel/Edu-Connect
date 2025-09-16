import { Navigation } from "@/components/navigation"
import { CourseOverview } from "@/components/faculty/course-overview"
import { StudentList } from "@/components/faculty/student-list"
import { CourseContent } from "@/components/faculty/course-content"
import { CourseSettings } from "@/components/faculty/course-settings"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock course data
const getCourseById = (id: string) => {
  const courses = {
    "1": {
      id: "1",
      title: "Computer Fundamentals",
      description: "Comprehensive introduction to computer systems and programming",
      students: 89,
      progress: 75,
      status: "Active",
      startDate: "2024-01-15",
      endDate: "2024-04-15",
      thumbnail: "/computer-fundamentals-course.jpg",
    },
  }

  return courses[id as keyof typeof courses] || null
}

interface FacultyCoursePageProps {
  params: { id: string }
}

export default function FacultyCoursePage({ params }: FacultyCoursePageProps) {
  const course = getCourseById(params.id)

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">{course.title}</h1>
          <p className="text-muted-foreground text-lg">Manage your course content, students, and analytics</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <CourseOverview course={course} />
          </TabsContent>

          <TabsContent value="students">
            <StudentList courseId={course.id} />
          </TabsContent>

          <TabsContent value="content">
            <CourseContent courseId={course.id} />
          </TabsContent>

          <TabsContent value="settings">
            <CourseSettings course={course} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
