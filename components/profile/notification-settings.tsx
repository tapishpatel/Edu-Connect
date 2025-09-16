"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Mail, Smartphone, MessageSquare } from "lucide-react"

export function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: {
      courseUpdates: true,
      assignments: true,
      messages: true,
      announcements: false,
      marketing: false,
    },
    push: {
      courseUpdates: true,
      assignments: true,
      messages: false,
      liveClasses: true,
      reminders: true,
    },
    sms: {
      assignments: false,
      emergencyOnly: true,
    },
  })

  const updateNotification = (category: keyof typeof notifications, key: string, value: boolean) => {
    setNotifications((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value,
      },
    }))
  }

  return (
    <div className="space-y-6">
      {/* Email Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Email Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Course Updates</p>
              <p className="text-sm text-muted-foreground">New lessons, materials, and course changes</p>
            </div>
            <Switch
              checked={notifications.email.courseUpdates}
              onCheckedChange={(value) => updateNotification("email", "courseUpdates", value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Assignment Reminders</p>
              <p className="text-sm text-muted-foreground">Due dates and submission reminders</p>
            </div>
            <Switch
              checked={notifications.email.assignments}
              onCheckedChange={(value) => updateNotification("email", "assignments", value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Messages</p>
              <p className="text-sm text-muted-foreground">Direct messages from instructors and students</p>
            </div>
            <Switch
              checked={notifications.email.messages}
              onCheckedChange={(value) => updateNotification("email", "messages", value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Announcements</p>
              <p className="text-sm text-muted-foreground">Important announcements and news</p>
            </div>
            <Switch
              checked={notifications.email.announcements}
              onCheckedChange={(value) => updateNotification("email", "announcements", value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Marketing</p>
              <p className="text-sm text-muted-foreground">New courses and promotional content</p>
            </div>
            <Switch
              checked={notifications.email.marketing}
              onCheckedChange={(value) => updateNotification("email", "marketing", value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Push Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5" />
            Push Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Course Updates</p>
              <p className="text-sm text-muted-foreground">Instant notifications for course changes</p>
            </div>
            <Switch
              checked={notifications.push.courseUpdates}
              onCheckedChange={(value) => updateNotification("push", "courseUpdates", value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Assignment Deadlines</p>
              <p className="text-sm text-muted-foreground">Reminders before due dates</p>
            </div>
            <Switch
              checked={notifications.push.assignments}
              onCheckedChange={(value) => updateNotification("push", "assignments", value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Messages</p>
              <p className="text-sm text-muted-foreground">New chat messages and replies</p>
            </div>
            <Switch
              checked={notifications.push.messages}
              onCheckedChange={(value) => updateNotification("push", "messages", value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Live Classes</p>
              <p className="text-sm text-muted-foreground">When live sessions are starting</p>
            </div>
            <Switch
              checked={notifications.push.liveClasses}
              onCheckedChange={(value) => updateNotification("push", "liveClasses", value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Study Reminders</p>
              <p className="text-sm text-muted-foreground">Daily study schedule reminders</p>
            </div>
            <Switch
              checked={notifications.push.reminders}
              onCheckedChange={(value) => updateNotification("push", "reminders", value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* SMS Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            SMS Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Assignment Deadlines</p>
              <p className="text-sm text-muted-foreground">SMS reminders for important deadlines</p>
            </div>
            <Switch
              checked={notifications.sms.assignments}
              onCheckedChange={(value) => updateNotification("sms", "assignments", value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Emergency Only</p>
              <p className="text-sm text-muted-foreground">Critical system alerts and security notifications</p>
            </div>
            <Switch
              checked={notifications.sms.emergencyOnly}
              onCheckedChange={(value) => updateNotification("sms", "emergencyOnly", value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Button className="w-full">Save Notification Preferences</Button>
    </div>
  )
}
