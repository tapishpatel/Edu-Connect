import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Upload, MessageSquare, Calendar, BarChart3, Settings } from "lucide-react"

const quickActions = [
  {
    title: "Create Assignment",
    description: "Add new assignment",
    icon: Plus,
    href: "/faculty/assignments/create",
    color: "text-blue-600",
  },
  {
    title: "Upload Material",
    description: "Add course content",
    icon: Upload,
    href: "/faculty/materials/upload",
    color: "text-green-600",
  },
  {
    title: "Message Students",
    description: "Send announcements",
    icon: MessageSquare,
    href: "/faculty/messages",
    color: "text-purple-600",
  },
  {
    title: "Schedule Session",
    description: "Plan live classes",
    icon: Calendar,
    href: "/faculty/sessions/schedule",
    color: "text-orange-600",
  },
  {
    title: "View Analytics",
    description: "Course insights",
    icon: BarChart3,
    href: "/faculty/analytics",
    color: "text-red-600",
  },
  {
    title: "Course Settings",
    description: "Manage courses",
    icon: Settings,
    href: "/faculty/settings",
    color: "text-gray-600",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Button
                key={index}
                variant="outline"
                asChild
                className="h-auto p-3 flex flex-col items-center gap-2 bg-transparent hover:bg-muted/50"
              >
                <Link href={action.href}>
                  <Icon className={`h-6 w-6 ${action.color}`} />
                  <div className="text-center">
                    <div className="text-xs font-medium">{action.title}</div>
                    <div className="text-xs text-muted-foreground">{action.description}</div>
                  </div>
                </Link>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
