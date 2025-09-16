import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react"

export function StudentStats() {
  const stats = [
    {
      title: "Courses Enrolled",
      value: "4",
      icon: BookOpen,
      color: "text-blue-600",
    },
    {
      title: "Hours Studied",
      value: "24.5",
      icon: Clock,
      color: "text-green-600",
    },
    {
      title: "Certificates Earned",
      value: "2",
      icon: Award,
      color: "text-yellow-600",
    },
    {
      title: "Overall Progress",
      value: "68%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <Icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
              </div>
            )
          })}
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Overall Progress</span>
            <span>68%</span>
          </div>
          <Progress value={68} className="h-2" />
          <p className="text-xs text-muted-foreground">
            You're doing great! Keep up the momentum to reach your learning goals.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
