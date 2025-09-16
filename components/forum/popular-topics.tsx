import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, MessageSquare } from "lucide-react"

const popularTopics = [
  {
    id: "1",
    title: "JavaScript fundamentals",
    posts: 45,
    trend: "up",
  },
  {
    id: "2",
    title: "Database design patterns",
    posts: 38,
    trend: "up",
  },
  {
    id: "3",
    title: "Study tips for exams",
    posts: 32,
    trend: "up",
  },
  {
    id: "4",
    title: "Career guidance",
    posts: 28,
    trend: "stable",
  },
  {
    id: "5",
    title: "Programming best practices",
    posts: 25,
    trend: "up",
  },
]

const onlineUsers = [
  { name: "Alex Kumar", status: "online" },
  { name: "Priya Sharma", status: "online" },
  { name: "Dr. Sarah Johnson", status: "online" },
  { name: "Raj Patel", status: "away" },
  { name: "Maya Singh", status: "online" },
]

export function PopularTopics() {
  return (
    <div className="space-y-6">
      {/* Popular Topics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5" />
            Popular Topics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {popularTopics.map((topic) => (
              <div
                key={topic.id}
                className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-md cursor-pointer"
              >
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{topic.title}</h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MessageSquare className="h-3 w-3" />
                    {topic.posts} posts
                  </div>
                </div>
                {topic.trend === "up" && <TrendingUp className="h-4 w-4 text-green-600" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Online Users */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Online Now</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {onlineUsers.map((user, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${user.status === "online" ? "bg-green-500" : "bg-yellow-500"}`}
                ></div>
                <span className="text-sm">{user.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Forum Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Forum Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Total Topics</span>
              <span className="font-medium">216</span>
            </div>
            <div className="flex justify-between">
              <span>Total Posts</span>
              <span className="font-medium">1,131</span>
            </div>
            <div className="flex justify-between">
              <span>Active Members</span>
              <span className="font-medium">89</span>
            </div>
            <div className="flex justify-between">
              <span>Online Now</span>
              <span className="font-medium">12</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
