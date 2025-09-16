import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageSquare, Upload, Users, AlertTriangle } from "lucide-react"

const activities = [
  {
    type: "assignment_submitted",
    title: "New Assignment Submission",
    description: "Alex Kumar submitted 'Hardware Components Essay'",
    course: "Computer Fundamentals",
    time: "30 minutes ago",
    icon: CheckCircle,
    color: "text-green-600",
  },
  {
    type: "question_asked",
    title: "Student Question",
    description: "Priya Sharma asked about database normalization",
    course: "Advanced Programming",
    time: "2 hours ago",
    icon: MessageSquare,
    color: "text-blue-600",
  },
  {
    type: "material_uploaded",
    title: "Course Material Updated",
    description: "You uploaded 'Week 5 Lecture Notes'",
    course: "Computer Fundamentals",
    time: "1 day ago",
    icon: Upload,
    color: "text-purple-600",
  },
  {
    type: "student_enrolled",
    title: "New Student Enrollment",
    description: "Maya Singh enrolled in your course",
    course: "Advanced Programming",
    time: "2 days ago",
    icon: Users,
    color: "text-orange-600",
  },
  {
    type: "deadline_approaching",
    title: "Assignment Deadline",
    description: "Programming Project due in 2 days",
    course: "Advanced Programming",
    time: "3 days ago",
    icon: AlertTriangle,
    color: "text-red-600",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-b-0">
                <Icon className={`h-5 w-5 mt-0.5 ${activity.color}`} />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <Badge variant="outline" className="text-xs w-fit">
                      {activity.course}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
