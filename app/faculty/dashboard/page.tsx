import { Navigation } from "@/components/navigation"
import { FacultyStats } from "@/components/faculty/faculty-stats"
import { MyCourses } from "@/components/faculty/my-courses"
import { StudentProgress } from "@/components/faculty/student-progress"
import { RecentActivity } from "@/components/faculty/recent-activity"
import { QuickActions } from "@/components/faculty/quick-actions"
import { UpcomingSessions } from "@/components/faculty/upcoming-sessions"
import { CourseAnalytics } from "@/components/faculty/course-analytics"

export default function FacultyDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Faculty Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Welcome back, Dr. Sarah Johnson! Manage your courses and students.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <FacultyStats />
            <MyCourses />
            <StudentProgress />
            <RecentActivity />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <QuickActions />
            <UpcomingSessions />
            <CourseAnalytics />
          </div>
        </div>
      </main>
    </div>
  )
}
