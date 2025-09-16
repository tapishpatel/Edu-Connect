"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { Star, Users, Clock, Download, Wifi, Globe, Subtitles, BookOpen, CheckCircle, Share2, Copy, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { useState } from "react"

interface CourseDetailsProps {
  course: any // In a real app, this would be a proper type
}

export function CourseDetails({ course }: CourseDetailsProps) {
  const { toast } = useToast()
  const [isDownloading, setIsDownloading] = useState(false)

  const handleShare = (platform: string) => {
    const url = `${window.location.origin}/courses/${course.id}`
    const title = course.title
    const description = course.description

    switch (platform) {
      case 'copy':
        navigator.clipboard.writeText(url)
        toast({
          title: "Link copied!",
          description: "Course link has been copied to clipboard.",
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
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\nView course: ${url}`)}`)
        break
    }
  }

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const link = document.createElement('a')
      link.href = `/api/courses/${course.id}/download`
      link.download = `${course.title}-materials.zip`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      toast({
        title: "Download started!",
        description: "Course materials are being downloaded.",
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
    <div className="space-y-6">
      {/* Course Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{course.category}</Badge>
          <Badge variant="secondary">{course.level}</Badge>
          {course.isOfflineAvailable && (
            <Badge className="bg-primary/10 text-primary">
              <Download className="h-3 w-3 mr-1" />
              Offline Available
            </Badge>
          )}
        </div>

        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
            <p className="text-lg text-muted-foreground mt-2">{course.description}</p>
          </div>
          <div className="flex gap-2 ml-4">
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
            {course.isOfflineAvailable && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                <Download className="h-4 w-4 mr-2" />
                {isDownloading ? "Downloading..." : "Download"}
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
            <span className="text-muted-foreground">({course.reviews} reviews)</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{course.enrolledStudents} students</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
        </div>
      </div>

      {/* Course Image */}
      <div className="relative">
        <img
          src={course.thumbnail || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-64 md:h-80 object-cover rounded-lg"
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement
            if (img.src.indexOf("/placeholder.svg") === -1) {
              img.src = "/placeholder.svg"
            }
          }}
        />
      </div>

      {/* Course Info */}
      <Card>
        <CardHeader>
          <CardTitle>Course Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Instructor: {course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Time commitment: {course.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Language: {course.language}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Wifi className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Data usage: {course.dataUsage}</span>
              </div>
              <div className="flex items-center gap-2">
                <Subtitles className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Subtitles: {course.subtitles.join(", ")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Prerequisites: {course.prerequisites}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Outcomes */}
      <Card>
        <CardHeader>
          <CardTitle>What You'll Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {course.learningOutcomes.map((outcome: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{outcome}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Course Modules */}
      <Card>
        <CardHeader>
          <CardTitle>Course Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {course.modules.map((module: any) => (
              <div key={module.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{module.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {module.lessons.length} lessons
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {module.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson.id} className="flex items-center justify-between text-sm">
                      <span>{lesson.title}</span>
                      <Link
                        className="text-primary hover:underline"
                        href={`/courses/${course.id}/sessions/${module.id}/lessons/${lesson.id}`}
                      >
                        Open
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Instructor Info */}
      <Card>
        <CardHeader>
          <CardTitle>About the Instructor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <h4 className="font-medium">{course.instructor}</h4>
            <p className="text-sm text-muted-foreground">{course.instructorBio}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
