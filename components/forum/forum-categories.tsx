import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, BookOpen, HelpCircle, Lightbulb, Code } from "lucide-react"

const categories = [
  {
    id: "general",
    name: "General Discussion",
    description: "General topics and course-related discussions",
    icon: MessageSquare,
    topics: 45,
    posts: 234,
    color: "text-blue-600",
  },
  {
    id: "help",
    name: "Help & Support",
    description: "Get help with technical issues and course content",
    icon: HelpCircle,
    topics: 28,
    posts: 156,
    color: "text-green-600",
  },
  {
    id: "programming",
    name: "Programming",
    description: "Code discussions, debugging, and programming tips",
    icon: Code,
    topics: 67,
    posts: 389,
    color: "text-purple-600",
  },
  {
    id: "study-groups",
    name: "Study Groups",
    description: "Form study groups and collaborate with peers",
    icon: Users,
    topics: 23,
    posts: 98,
    color: "text-orange-600",
  },
  {
    id: "resources",
    name: "Resources & Materials",
    description: "Share and discover learning resources",
    icon: BookOpen,
    topics: 34,
    posts: 167,
    color: "text-red-600",
  },
  {
    id: "tips",
    name: "Tips & Tricks",
    description: "Share learning tips and productivity hacks",
    icon: Lightbulb,
    topics: 19,
    posts: 87,
    color: "text-yellow-600",
  },
]

export function ForumCategories() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Forum Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start gap-3">
                  <Icon className={`h-6 w-6 ${category.color} mt-1`} />
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{category.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>{category.topics} topics</span>
                      <span>{category.posts} posts</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
