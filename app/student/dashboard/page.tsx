import { Navigation } from "@/components/navigation"
import { StudentStats } from "@/components/student/student-stats"
import { EnrolledCourses } from "@/components/student/enrolled-courses"
import { RecentActivity } from "@/components/student/recent-activity"
import { UpcomingDeadlines } from "@/components/student/upcoming-deadlines"
import { QuickActions } from "@/components/student/quick-actions"
import { OfflineContent } from "@/components/student/offline-content"
import { StudySchedule } from "@/components/student/study-schedule"

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Student Dashboard</h1>
          <p className="text-muted-foreground text-lg">Welcome back, Alex! Continue your learning journey.</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <StudentStats />
            <EnrolledCourses />
            <RecentActivity />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <QuickActions />
            <UpcomingDeadlines />
            <OfflineContent />
            <StudySchedule />
          </div>
        </div>
      </main>
    </div>
  )
}
