import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Clock, Award } from "lucide-react"

export function CourseAnalytics() {
  const analytics = [
    {
      metric: "Engagement Rate",
      value: "87%",
      change: "+5%",
      trend: "up",
    },
    {
      metric: "Completion Rate",
      value: "78%",
      change: "+12%",
      trend: "up",
    },
    {
      metric: "Avg. Study Time",
      value: "4.2h/week",
      change: "-0.3h",
      trend: "down",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Course Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {analytics.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{item.metric}</span>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold">{item.value}</span>
                <span className={`text-xs ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {item.change}
                </span>
              </div>
            </div>
            <Progress value={Number.parseInt(item.value)} className="h-2" />
          </div>
        ))}

        <div className="pt-4 border-t space-y-3">
          <h4 className="font-medium text-sm">This Week</h4>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <Users className="h-4 w-4 mx-auto mb-1 text-blue-600" />
              <div className="text-xs font-medium">124</div>
              <div className="text-xs text-muted-foreground">Active</div>
            </div>
            <div>
              <Clock className="h-4 w-4 mx-auto mb-1 text-green-600" />
              <div className="text-xs font-medium">18h</div>
              <div className="text-xs text-muted-foreground">Taught</div>
            </div>
            <div>
              <Award className="h-4 w-4 mx-auto mb-1 text-yellow-600" />
              <div className="text-xs font-medium">12</div>
              <div className="text-xs text-muted-foreground">Completed</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
