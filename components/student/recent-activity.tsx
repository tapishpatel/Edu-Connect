import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Play, Download, MessageSquare, Award } from "lucide-react"

const activities = [
  {
    type: "lesson_completed",
    title: "Completed: Hardware Components",
    course: "Computer Fundamentals",
    time: "2 hours ago",
    icon: CheckCircle,
    color: "text-green-600",
  },
  {
    type: "assignment_submitted",
    title: "Submitted: Marketing Plan Assignment",
    course: "Digital Marketing Basics",
    time: "1 day ago",
    icon: MessageSquare,
    color: "text-blue-600",
  },
  {
    type: "certificate_earned",
    title: "Earned Certificate: Basic Accounting",
    course: "Basic Accounting",
    time: "3 days ago",
    icon: Award,
    color: "text-yellow-600",
  },
  {
    type: "content_downloaded",
    title: "Downloaded: Offline Materials",
    course: "English Communication",
    time: "5 days ago",
    icon: Download,
    color: "text-purple-600",
  },
  {
    type: "lesson_started",
    title: "Started: Grammar Fundamentals",
    course: "English Communication",
    time: "1 week ago",
    icon: Play,
    color: "text-orange-600",
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
