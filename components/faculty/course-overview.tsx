import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, TrendingUp, MessageSquare, Award } from "lucide-react"

interface CourseOverviewProps {
  course: any
}

export function CourseOverview({ course }: CourseOverviewProps) {
  const stats = [
    { label: "Total Students", value: course.students, icon: Users },
    { label: "Completion Rate", value: "78%", icon: Award },
    { label: "Avg. Progress", value: `${course.progress}%`, icon: TrendingUp },
    { label: "Active Discussions", value: "24", icon: MessageSquare },
  ]

  return (
    <div className="space-y-6">
      {/* Course Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Icon className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-3" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium">Students on Track</div>
                <div className="text-2xl font-bold text-green-600">67</div>
              </div>
              <div>
                <div className="font-medium">Need Attention</div>
                <div className="text-2xl font-bold text-red-600">22</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">15 assignments submitted</div>
                  <div className="text-xs text-muted-foreground">2 hours ago</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">New discussion started</div>
                  <div className="text-xs text-muted-foreground">4 hours ago</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Course material updated</div>
                  <div className="text-xs text-muted-foreground">1 day ago</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
