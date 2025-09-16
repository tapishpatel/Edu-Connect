import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, Download, CheckCircle } from "lucide-react"

const enrolledCourses = [
  {
    id: "1",
    title: "Computer Fundamentals",
    instructor: "Dr. Sarah Johnson",
    progress: 75,
    nextLesson: "Operating Systems Basics",
    timeLeft: "2 weeks",
    thumbnail: "/computer-fundamentals-course.jpg",
    isOfflineAvailable: true,
    status: "In Progress",
  },
  {
    id: "2",
    title: "Digital Marketing Basics",
    instructor: "Prof. Michael Chen",
    progress: 45,
    nextLesson: "Social Media Strategy",
    timeLeft: "4 weeks",
    thumbnail: "/digital-marketing-course.png",
    isOfflineAvailable: true,
    status: "In Progress",
  },
  {
    id: "3",
    title: "Basic Accounting",
    instructor: "Dr. Priya Sharma",
    progress: 100,
    nextLesson: "Course Completed",
    timeLeft: "Completed",
    thumbnail: "/accounting-course.png",
    isOfflineAvailable: true,
    status: "Completed",
  },
  {
    id: "4",
    title: "English Communication",
    instructor: "Ms. Lisa Anderson",
    progress: 20,
    nextLesson: "Grammar Fundamentals",
    timeLeft: "6 weeks",
    thumbnail: "/english-communication-course.jpg",
    isOfflineAvailable: false,
    status: "In Progress",
  },
]

export function EnrolledCourses() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>My Courses</CardTitle>
        <Button variant="outline" size="sm" asChild className="bg-transparent">
          <Link href="/courses">Browse More</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row gap-4">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full sm:w-20 h-20 object-cover rounded-md"
                  loading="lazy"
                />

                <div className="flex-1 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h4 className="font-semibold">{course.title}</h4>
                    <Badge
                      variant={course.status === "Completed" ? "default" : "secondary"}
                      className={
                        course.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : ""
                      }
                    >
                      {course.status === "Completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {course.status}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="text-sm text-muted-foreground">
                      {course.status === "Completed" ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Course Completed
                        </span>
                      ) : (
                        <span>Next: {course.nextLesson}</span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {course.isOfflineAvailable && (
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Download className="h-4 w-4 mr-1" />
                          Offline
                        </Button>
                      )}
                      <Button size="sm" asChild>
                        <Link href={`/courses/${course.id}`}>
                          <Play className="h-4 w-4 mr-1" />
                          {course.status === "Completed" ? "Review" : "Continue"}
                        </Link>
                      </Button>
                    </div>
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
