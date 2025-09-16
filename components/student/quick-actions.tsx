import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageSquare, Download, Calendar, Settings, HelpCircle } from "lucide-react"

const quickActions = [
  {
    title: "Browse Courses",
    description: "Explore new courses",
    icon: BookOpen,
    href: "/courses",
    color: "text-blue-600",
  },
  {
    title: "Discussion Forum",
    description: "Join conversations",
    icon: MessageSquare,
    href: "/forum",
    color: "text-green-600",
  },
  {
    title: "Offline Content",
    description: "Manage downloads",
    icon: Download,
    href: "/student/offline",
    color: "text-purple-600",
  },
  {
    title: "Study Schedule",
    description: "Plan your learning",
    icon: Calendar,
    href: "/student/schedule",
    color: "text-orange-600",
  },
  {
    title: "Settings",
    description: "Account preferences",
    icon: Settings,
    href: "/student/settings",
    color: "text-gray-600",
  },
  {
    title: "Help & Support",
    description: "Get assistance",
    icon: HelpCircle,
    href: "/support",
    color: "text-red-600",
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
