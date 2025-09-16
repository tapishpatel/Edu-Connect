"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { listDemoCourses } from "@/lib/demo-courses"
import { useState } from "react"
import { 
  Play, 
  Pause, 
  Users, 
  Clock, 
  Calendar, 
  Video, 
  Mic, 
  MicOff, 
  Camera, 
  CameraOff, 
  MessageSquare, 
  Share2, 
  Settings,
  Plus,
  Edit,
  Trash2,
  CheckCircle
} from "lucide-react"

export default function DemoSessionPage() {
  const [isLive, setIsLive] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [sessionTitle, setSessionTitle] = useState("Computer Fundamentals - Introduction")
  const [sessionDescription, setSessionDescription] = useState("Introduction to basic computer concepts and hardware components")
  const [selectedCourse, setSelectedCourse] = useState("1")
  const [participants, setParticipants] = useState(12)
  const [sessionDuration, setSessionDuration] = useState("60")
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "Dr. Sarah Johnson", message: "Welcome everyone! Let's start with the basics.", time: "10:00 AM" },
    { id: 2, user: "Student 1", message: "Good morning, Professor!", time: "10:01 AM" },
    { id: 3, user: "Student 2", message: "Excited to learn about computers!", time: "10:02 AM" }
  ])
  const [newMessage, setNewMessage] = useState("")

  const courses = listDemoCourses()

  const handleStartSession = () => {
    setIsLive(true)
  }

  const handleEndSession = () => {
    setIsLive(false)
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, {
        id: chatMessages.length + 1,
        user: "You",
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container px-4 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Demo Session</h1>
            <p className="text-muted-foreground">Create and manage live demo sessions for students</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="bg-transparent">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" className="bg-transparent">
              <Share2 className="h-4 w-4 mr-2" />
              Share Session
            </Button>
          </div>
        </div>

        <Tabs defaultValue="live" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="live">Live Session</TabsTrigger>
            <TabsTrigger value="create">Create Session</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="live" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Video Area */}
              <div className="lg:col-span-2 space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        {isLive ? (
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                            Live Session
                          </div>
                        ) : (
                          "Session Preview"
                        )}
                      </CardTitle>
                      <Badge variant={isLive ? "destructive" : "secondary"}>
                        {isLive ? "Live" : "Offline"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-black rounded-lg flex items-center justify-center relative">
                      {isLive ? (
                        <div className="text-center text-white">
                          <Video className="h-16 w-16 mx-auto mb-4" />
                          <p className="text-lg font-semibold">Live Video Stream</p>
                          <p className="text-sm text-gray-300">Session in progress</p>
                        </div>
                      ) : (
                        <div className="text-center text-gray-400">
                          <Play className="h-16 w-16 mx-auto mb-4" />
                          <p className="text-lg font-semibold">Click Start to begin session</p>
                        </div>
                      )}
                      
                      {/* Video Controls Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant={isMuted ? "destructive" : "secondary"}
                            onClick={() => setIsMuted(!isMuted)}
                          >
                            {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                          </Button>
                          <Button
                            size="sm"
                            variant={isVideoOn ? "secondary" : "destructive"}
                            onClick={() => setIsVideoOn(!isVideoOn)}
                          >
                            {isVideoOn ? <Camera className="h-4 w-4" /> : <CameraOff className="h-4 w-4" />}
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant={isLive ? "destructive" : "default"}
                            onClick={isLive ? handleEndSession : handleStartSession}
                          >
                            {isLive ? (
                              <>
                                <Pause className="h-4 w-4 mr-2" />
                                End Session
                              </>
                            ) : (
                              <>
                                <Play className="h-4 w-4 mr-2" />
                                Start Session
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Session Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Session Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{participants} participants</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{sessionDuration} minutes</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Session Title</h4>
                      <p className="text-sm text-muted-foreground">{sessionTitle}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description</h4>
                      <p className="text-sm text-muted-foreground">{sessionDescription}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Chat Sidebar */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Live Chat
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="h-64 overflow-y-auto space-y-2">
                      {chatMessages.map((msg) => (
                        <div key={msg.id} className="text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{msg.user}</span>
                            <span className="text-xs text-muted-foreground">{msg.time}</span>
                          </div>
                          <p className="text-muted-foreground mt-1">{msg.message}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button size="sm" onClick={handleSendMessage}>
                        Send
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Participants */}
                <Card>
                  <CardHeader>
                    <CardTitle>Participants ({participants})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {Array.from({ length: participants }, (_, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <Users className="h-4 w-4" />
                          </div>
                          <span>Student {i + 1}</span>
                          {i < 3 && <Badge variant="secondary" className="text-xs">Online</Badge>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="create" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Demo Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Session Title</Label>
                    <Input
                      id="title"
                      value={sessionTitle}
                      onChange={(e) => setSessionTitle(e.target.value)}
                      placeholder="Enter session title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Select Course</Label>
                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={sessionDescription}
                    onChange={(e) => setSessionDescription(e.target.value)}
                    placeholder="Describe what this session will cover"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input
                      id="duration"
                      type="number"
                      value={sessionDuration}
                      onChange={(e) => setSessionDuration(e.target.value)}
                      placeholder="60"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxParticipants">Max Participants</Label>
                    <Input
                      id="maxParticipants"
                      type="number"
                      value={participants}
                      onChange={(e) => setParticipants(parseInt(e.target.value) || 0)}
                      placeholder="50"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Session
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Computer Fundamentals - Module 1", date: "2024-01-15", time: "10:00 AM", status: "upcoming" },
                    { title: "Digital Marketing Basics", date: "2024-01-16", time: "2:00 PM", status: "upcoming" },
                    { title: "Web Development Intro", date: "2024-01-14", time: "9:00 AM", status: "completed" }
                  ].map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{session.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          {session.date} at {session.time}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={session.status === "completed" ? "secondary" : "default"}>
                          {session.status}
                        </Badge>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Session History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Computer Fundamentals - Introduction", date: "2024-01-10", duration: "45 min", participants: 12, status: "completed" },
                    { title: "Digital Marketing Basics", date: "2024-01-08", duration: "60 min", participants: 8, status: "completed" },
                    { title: "Web Development Intro", date: "2024-01-05", duration: "30 min", participants: 15, status: "completed" }
                  ].map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{session.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {session.date} • {session.duration} • {session.participants} participants
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {session.status}
                        </Badge>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


