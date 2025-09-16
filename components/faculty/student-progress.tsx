import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, MessageSquare } from "lucide-react"

const studentProgress = [
  {
    name: "Alex Kumar",
    course: "Computer Fundamentals",
    progress: 92,
    trend: "up",
    lastActive: "2 hours ago",
    status: "Excellent",
  },
  {
    name: "Priya Sharma",
    course: "Computer Fundamentals",
    progress: 78,
    trend: "up",
    lastActive: "1 day ago",
    status: "Good",
  },
  {
    name: "Raj Patel",
    course: "Advanced Programming",
    progress: 45,
    trend: "down",
    lastActive: "3 days ago",
    status: "Needs Help",
  },
  {
    name: "Maya Singh",
    course: "Advanced Programming",
    progress: 88,
    trend: "up",
    lastActive: "5 hours ago",
    status: "Excellent",
  },
  {
    name: "Arjun Reddy",
    course: "Computer Fundamentals",
    progress: 34,
    trend: "down",
    lastActive: "1 week ago",
    status: "At Risk",
  },
]

export function StudentProgress() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Good":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Needs Help":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "At Risk":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Student Progress</CardTitle>
        <Button variant="outline" size="sm" className="bg-transparent">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {studentProgress.map((student, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h4 className="font-medium">{student.name}</h4>
                  <p className="text-sm text-muted-foreground">{student.course}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
                  {student.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{student.progress}%</span>
                </div>
                <Progress value={student.progress} className="h-2" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Last active: {student.lastActive}</span>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Message
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
