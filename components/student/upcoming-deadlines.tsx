import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, AlertTriangle, CheckSquare } from "lucide-react"

const deadlines = [
  {
    title: "Marketing Plan Assignment",
    course: "Digital Marketing Basics",
    dueDate: "Tomorrow",
    priority: "high",
    type: "Assignment",
  },
  {
    title: "Computer Hardware Quiz",
    course: "Computer Fundamentals",
    dueDate: "3 days",
    priority: "medium",
    type: "Quiz",
  },
  {
    title: "Grammar Exercise",
    course: "English Communication",
    dueDate: "1 week",
    priority: "low",
    type: "Exercise",
  },
  {
    title: "Final Project Submission",
    course: "Digital Marketing Basics",
    dueDate: "2 weeks",
    priority: "high",
    type: "Project",
  },
]

export function UpcomingDeadlines() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="h-3 w-3" />
      case "medium":
        return <Clock className="h-3 w-3" />
      case "low":
        return <CheckSquare className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Upcoming Deadlines
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {deadlines.map((deadline, index) => (
            <div key={index} className="border rounded-lg p-3 space-y-2">
              <div className="flex items-start justify-between">
                <h4 className="font-medium text-sm">{deadline.title}</h4>
                <Badge className={getPriorityColor(deadline.priority)}>
                  {getPriorityIcon(deadline.priority)}
                  <span className="ml-1 capitalize">{deadline.priority}</span>
                </Badge>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">{deadline.course}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Due in {deadline.dueDate}</span>
                  <Badge variant="outline" className="text-xs">
                    {deadline.type}
                  </Badge>
                </div>
              </div>

              <Button size="sm" variant="outline" className="w-full text-xs bg-transparent">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
