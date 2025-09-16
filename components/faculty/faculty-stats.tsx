import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, MessageSquare, TrendingUp } from "lucide-react"

export function FacultyStats() {
  const stats = [
    {
      title: "Total Students",
      value: "156",
      icon: Users,
      color: "text-blue-600",
      change: "+12 this month",
    },
    {
      title: "Active Courses",
      value: "3",
      icon: BookOpen,
      color: "text-green-600",
      change: "2 in progress",
    },
    {
      title: "Messages",
      value: "24",
      icon: MessageSquare,
      color: "text-purple-600",
      change: "8 unread",
    },
    {
      title: "Avg. Completion",
      value: "87%",
      icon: TrendingUp,
      color: "text-orange-600",
      change: "+5% vs last month",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Teaching Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center space-y-2">
                <Icon className={`h-8 w-8 mx-auto ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm font-medium">{stat.title}</div>
                <div className="text-xs text-muted-foreground">{stat.change}</div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
