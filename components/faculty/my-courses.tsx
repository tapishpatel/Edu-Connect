import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, MessageSquare, Settings, BarChart3, Calendar } from "lucide-react"

const myCourses = [
  {
    id: "1",
    title: "Computer Fundamentals",
    students: 89,
    progress: 75,
    status: "Active",
    nextSession: "Today, 2:00 PM",
    unreadMessages: 5,
    thumbnail: "/computer-fundamentals-course.jpg",
  },
  {
    id: "2",
    title: "Advanced Programming",
    students: 45,
    progress: 60,
    status: "Active",
    nextSession: "Tomorrow, 10:00 AM",
    unreadMessages: 2,
    thumbnail: "/web-development-course.png",
  },
  {
    id: "3",
    title: "Database Design",
    students: 22,
    progress: 100,
    status: "Completed",
    nextSession: "Course Ended",
    unreadMessages: 0,
    thumbnail: "/placeholder.svg?height=80&width=80&text=DB",
  },
]

export function MyCourses() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>My Courses</CardTitle>
        <Button variant="outline" size="sm" className="bg-transparent">
          Create Course
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {myCourses.map((course) => (
            <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row gap-4">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full sm:w-20 h-20 object-cover rounded-md"
                  loading="lazy"
                />

                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h4 className="font-semibold text-lg">{course.title}</h4>
                    <Badge
                      variant={course.status === "Active" ? "default" : "secondary"}
                      className={
                        course.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : ""
                      }
                    >
                      {course.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{course.nextSession}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Course Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" asChild>
                      <Link href={`/faculty/courses/${course.id}`}>
                        <BarChart3 className="h-4 w-4 mr-1" />
                        Analytics
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Messages {course.unreadMessages > 0 && `(${course.unreadMessages})`}
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Settings className="h-4 w-4 mr-1" />
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
