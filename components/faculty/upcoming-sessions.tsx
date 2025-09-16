import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Video, Clock, Users, Calendar } from "lucide-react"

const upcomingSessions = [
  {
    title: "Computer Hardware Basics",
    course: "Computer Fundamentals",
    time: "Today, 2:00 PM",
    duration: "60 min",
    students: 89,
    type: "Live Lecture",
    status: "Starting Soon",
  },
  {
    title: "Programming Lab Session",
    course: "Advanced Programming",
    time: "Tomorrow, 10:00 AM",
    duration: "90 min",
    students: 45,
    type: "Interactive Lab",
    status: "Scheduled",
  },
  {
    title: "Q&A Session",
    course: "Computer Fundamentals",
    time: "Friday, 3:00 PM",
    duration: "45 min",
    students: 89,
    type: "Discussion",
    status: "Scheduled",
  },
]

export function UpcomingSessions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Upcoming Sessions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingSessions.map((session, index) => (
          <div key={index} className="border rounded-lg p-3 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-sm">{session.title}</h4>
                <p className="text-xs text-muted-foreground">{session.course}</p>
              </div>
              <Badge
                variant={session.status === "Starting Soon" ? "default" : "secondary"}
                className={
                  session.status === "Starting Soon"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : ""
                }
              >
                {session.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {session.time}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {session.students} students
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                <Video className="h-3 w-3 mr-1" />
                {session.type}
              </Badge>
              <span className="text-xs text-muted-foreground">{session.duration}</span>
            </div>

            <Button size="sm" className="w-full" variant={session.status === "Starting Soon" ? "default" : "outline"}>
              {session.status === "Starting Soon" ? "Start Session" : "View Details"}
            </Button>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <Calendar className="h-4 w-4 mr-2" />
          View Full Schedule
        </Button>
      </CardContent>
    </Card>
  )
}
