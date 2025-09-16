"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Users, MessageSquare } from "lucide-react"

const chatMessages = [
  {
    id: "1",
    user: "Alex Kumar",
    message: "Great explanation of CPU architecture!",
    time: "2 min ago",
    type: "student",
  },
  {
    id: "2",
    user: "Dr. Sarah Johnson",
    message: "Thank you Alex! Any questions about the memory hierarchy?",
    time: "1 min ago",
    type: "instructor",
  },
  {
    id: "3",
    user: "Priya Sharma",
    message: "Can you explain cache memory in more detail?",
    time: "30 sec ago",
    type: "student",
  },
  {
    id: "4",
    user: "System",
    message: "Raj Patel joined the session",
    time: "10 sec ago",
    type: "system",
  },
]

export function ChatPanel() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState(chatMessages)

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        user: "You",
        message: message.trim(),
        time: "now",
        type: "student" as const,
      }
      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  const getUserBadgeColor = (type: string) => {
    switch (type) {
      case "instructor":
        return "bg-primary text-primary-foreground"
      case "student":
        return "bg-secondary text-secondary-foreground"
      case "system":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <Card className="h-[500px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MessageSquare className="h-5 w-5" />
          Live Chat
          <Badge variant="outline" className="ml-auto">
            <Users className="h-3 w-3 mr-1" />
            89
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge className={getUserBadgeColor(msg.type)} variant="secondary">
                  {msg.user}
                </Badge>
                <span className="text-xs text-muted-foreground">{msg.time}</span>
              </div>
              <p className="text-sm pl-2 border-l-2 border-muted">{msg.message}</p>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
            />
            <Button size="sm" onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Be respectful and stay on topic</p>
        </div>
      </CardContent>
    </Card>
  )
}
