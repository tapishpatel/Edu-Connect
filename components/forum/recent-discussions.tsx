import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, ThumbsUp, Clock } from "lucide-react"

const discussions = [
  {
    id: "1",
    title: "How to optimize code for better performance?",
    author: "Alex Kumar",
    category: "Programming",
    replies: 12,
    likes: 8,
    lastActivity: "2 hours ago",
    isAnswered: true,
  },
  {
    id: "2",
    title: "Study group for Computer Fundamentals - Week 5",
    author: "Priya Sharma",
    category: "Study Groups",
    replies: 6,
    likes: 15,
    lastActivity: "4 hours ago",
    isAnswered: false,
  },
  {
    id: "3",
    title: "Best resources for learning database design?",
    author: "Raj Patel",
    category: "Resources & Materials",
    replies: 9,
    likes: 12,
    lastActivity: "1 day ago",
    isAnswered: true,
  },
  {
    id: "4",
    title: "Having trouble with assignment submission",
    author: "Maya Singh",
    category: "Help & Support",
    replies: 3,
    likes: 2,
    lastActivity: "1 day ago",
    isAnswered: false,
  },
  {
    id: "5",
    title: "Tips for effective note-taking during lectures",
    author: "Arjun Reddy",
    category: "Tips & Tricks",
    replies: 18,
    likes: 25,
    lastActivity: "2 days ago",
    isAnswered: false,
  },
]

export function RecentDiscussions() {
  const getCategoryColor = (category: string) => {
    const colors = {
      Programming: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Study Groups": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Resources & Materials": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "Help & Support": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Tips & Tricks": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Discussions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-medium text-sm leading-tight flex-1">
                    {discussion.title}
                    {discussion.isAnswered && (
                      <Badge className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                        Answered
                      </Badge>
                    )}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs">
                      {discussion.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">{discussion.author}</span>
                  <Badge className={getCategoryColor(discussion.category)} variant="secondary">
                    {discussion.category}
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      {discussion.replies} replies
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" />
                      {discussion.likes} likes
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {discussion.lastActivity}
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
