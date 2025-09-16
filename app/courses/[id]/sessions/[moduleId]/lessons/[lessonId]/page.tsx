"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"
import { getDemoCourseById } from "@/lib/demo-courses"
import { notFound } from "next/navigation"
import { Download, Share2, Copy, Facebook, Twitter, Linkedin, Mail, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useState } from "react"

interface LessonPageProps {
  params: { id: string; moduleId: string; lessonId: string }
}

export default function LessonPage({ params }: LessonPageProps) {
  const { toast } = useToast()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const course = getDemoCourseById(params.id)
  if (!course) return notFound()
  const module = course.modules.find((m) => m.id === params.moduleId)
  if (!module) return notFound()
  const lesson = module.lessons.find((l) => l.id === params.lessonId)
  if (!lesson) return notFound()

  const handleShare = (platform: string) => {
    const url = `${window.location.origin}/courses/${params.id}/sessions/${params.moduleId}/lessons/${params.lessonId}`
    const title = `${course.title} - ${lesson.title}`

    switch (platform) {
      case 'copy':
        navigator.clipboard.writeText(url)
        toast({
          title: "Link copied!",
          description: "Lesson link has been copied to clipboard.",
        })
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this lesson: ${url}`)}`)
        break
    }
  }

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const link = document.createElement('a')
      link.href = `/api/lessons/${params.lessonId}/download`
      link.download = `${lesson.title}-${lesson.type}.${lesson.type === 'video' ? 'mp4' : lesson.type === 'quiz' ? 'pdf' : 'pdf'}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      toast({
        title: "Download started!",
        description: "Lesson content is being downloaded.",
      })
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container px-4 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{course.title}</h1>
            <p className="text-muted-foreground">{module.title}</p>
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleShare('copy')}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Link
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('facebook')}>
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('twitter')}>
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('linkedin')}>
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('email')}>
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              <Download className="h-4 w-4 mr-2" />
              {isDownloading ? "Downloading..." : "Download"}
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{lesson.title}</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{lesson.duration}</span>
                <span>•</span>
                <span className="capitalize">{lesson.type}</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center relative">
              {lesson.type === "video" ? (
                <div className="text-center text-white">
                  <div className="mb-4">
                    {isPlaying ? (
                      <Pause className="h-16 w-16 mx-auto" />
                    ) : (
                      <Play className="h-16 w-16 mx-auto" />
                    )}
                  </div>
                  <p className="text-lg font-semibold mb-2">
                    {isPlaying ? "Video Playing" : "Click to Play"}
                  </p>
                  <p className="text-sm text-gray-300">Duration: {lesson.duration}</p>
                </div>
              ) : lesson.type === "quiz" ? (
                <div className="text-center text-white">
                  <div className="h-16 w-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">?</span>
                  </div>
                  <p className="text-lg font-semibold">Interactive Quiz</p>
                  <p className="text-sm text-gray-300">Duration: {lesson.duration}</p>
                </div>
              ) : (
                <div className="text-center text-white">
                  <div className="h-16 w-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📖</span>
                  </div>
                  <p className="text-lg font-semibold">Reading Material</p>
                  <p className="text-sm text-gray-300">Duration: {lesson.duration}</p>
                </div>
              )}
              
              {/* Video Controls Overlay */}
              {lesson.type === "video" && (
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant={isMuted ? "destructive" : "secondary"}
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm">00:00 / {lesson.duration}</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Lesson Type: {lesson.type}</span>
              <span>Duration: {lesson.duration}</span>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}


