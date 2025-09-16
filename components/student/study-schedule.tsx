import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video } from "lucide-react"

const todaySchedule = [
  {
    time: "09:00 AM",
    title: "Computer Hardware Lecture",
    course: "Computer Fundamentals",
    type: "Live Session",
    duration: "60 min",
  },
  {
    time: "02:00 PM",
    title: "Marketing Strategy Review",
    course: "Digital Marketing Basics",
    type: "Study Time",
    duration: "45 min",
  },
  {
    time: "04:30 PM",
    title: "Grammar Practice",
    course: "English Communication",
    type: "Exercise",
    duration: "30 min",
  },
]

export function StudySchedule() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Today's Schedule
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {todaySchedule.map((item, index) => (
          <div key={index} className="border rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{item.time}</span>
              </div>
              <Badge variant={item.type === "Live Session" ? "default" : "secondary"} className="text-xs">
                {item.type === "Live Session" && <Video className="h-3 w-3 mr-1" />}
                {item.type}
              </Badge>
            </div>

            <div>
              <h4 className="font-medium text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.course}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{item.duration}</span>
              <Button size="sm" variant="outline" className="text-xs bg-transparent">
                {item.type === "Live Session" ? "Join" : "Start"}
              </Button>
            </div>
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
