import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Search, MessageSquare, TrendingUp, TrendingDown } from "lucide-react"

const students = [
  {
    id: "1",
    name: "Alex Kumar",
    email: "alex.kumar@email.com",
    progress: 92,
    lastActive: "2 hours ago",
    status: "Excellent",
    trend: "up",
    assignments: "8/8",
    grade: "A",
  },
  {
    id: "2",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    progress: 78,
    lastActive: "1 day ago",
    status: "Good",
    trend: "up",
    assignments: "7/8",
    grade: "B+",
  },
  {
    id: "3",
    name: "Raj Patel",
    email: "raj.patel@email.com",
    progress: 45,
    lastActive: "3 days ago",
    status: "Needs Help",
    trend: "down",
    assignments: "4/8",
    grade: "C",
  },
]

interface StudentListProps {
  courseId: string
}

export function StudentList({ courseId }: StudentListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Good":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Needs Help":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Students ({students.length})</CardTitle>
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search students..." className="pl-10" />
          </div>
          <Button variant="outline" className="bg-transparent">
            Export List
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {students.map((student) => (
            <div key={student.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h4 className="font-medium">{student.name}</h4>
                  <p className="text-sm text-muted-foreground">{student.email}</p>
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Progress</div>
                  <div className="font-medium">{student.progress}%</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Assignments</div>
                  <div className="font-medium">{student.assignments}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Grade</div>
                  <div className="font-medium">{student.grade}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Last Active</div>
                  <div className="font-medium">{student.lastActive}</div>
                </div>
              </div>

              <div className="space-y-2">
                <Progress value={student.progress} className="h-2" />
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="bg-transparent">
                  View Profile
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent">
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
