"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { Play, Download, Share2, Bookmark, Users, Award, Copy, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { useState } from "react"

interface CourseSidebarProps {
  course: any // In a real app, this would be a proper type
}

export function CourseSidebar({ course }: CourseSidebarProps) {
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
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real app, this would trigger actual file download
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
      {/* Enrollment Card */}
      <Card>
        <CardHeader>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">{course.price}</div>
            <Badge variant="secondary" className="mb-4">
              Limited Time Offer
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild className="w-full" size="lg">
            <Link href={`/courses/${course.id}/enroll`}>
              <Play className="h-4 w-4 mr-2" />
              Enroll Now
            </Link>
          </Button>

          {course.isOfflineAvailable ? (
            <Button 
              variant="outline" 
              className="w-full bg-transparent"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              <Download className="h-4 w-4 mr-2" />
              {isDownloading ? "Downloading..." : "Download for Offline"}
            </Button>
          ) : (
            <Button variant="outline" className="w-full bg-transparent" disabled>
              <Download className="h-4 w-4 mr-2" />
              Download for Offline
            </Button>
          )}

          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Share2 className="h-4 w-4 mr-1" />
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
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              <Bookmark className="h-4 w-4 mr-1" />
              Save
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Course Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Course Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Students Enrolled</span>
            </div>
            <span className="font-medium">{course.enrolledStudents}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Completion Rate</span>
            </div>
            <span className="font-medium">87%</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Offline Downloads</span>
            </div>
            <span className="font-medium">156</span>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Course Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              Lifetime access to course materials
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              Mobile-optimized content
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              Downloadable resources
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              Certificate of completion
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              Community discussion forum
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Related Courses */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Related Courses</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="border rounded-lg p-3">
            <h4 className="font-medium text-sm mb-1">Web Development Intro</h4>
            <p className="text-xs text-muted-foreground mb-2">Build your first websites</p>
            <Badge variant="outline" className="text-xs">
              Intermediate
            </Badge>
          </div>
          <div className="border rounded-lg p-3">
            <h4 className="font-medium text-sm mb-1">Digital Marketing Basics</h4>
            <p className="text-xs text-muted-foreground mb-2">Master digital marketing</p>
            <Badge variant="outline" className="text-xs">
              Beginner
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
