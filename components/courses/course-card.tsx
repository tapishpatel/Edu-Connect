import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Clock, Download, Wifi, WifiOff, Share2 } from "lucide-react"

interface Course {
  id: string
  title: string
  instructor: string
  duration: string
  level: string
  category: string
  enrolledStudents: number
  rating: number
  thumbnail: string
  description: string
  isOfflineAvailable: boolean
  dataUsage: "Low" | "Medium" | "High"
}

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const getDataUsageColor = (usage: string) => {
    switch (usage) {
      case "Low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "High":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? `${window.location.origin}/courses/${course.id}` : ''
    const shareData = {
      title: course.title,
      text: course.description,
      url,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else if (navigator.clipboard && url) {
        await navigator.clipboard.writeText(url)
        alert("Course link copied to clipboard")
      } else {
        window.open(url, "_blank")
      }
    } catch {
      // user canceled or unsupported; ignore
    }
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={course.thumbnail || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-48 object-cover rounded-t-lg"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement
              if (img.src.indexOf("/placeholder.svg") === -1) {
                img.src = "/placeholder.svg"
              }
            }}
          />
          <div className="absolute top-2 right-2 flex gap-2">
            {course.isOfflineAvailable && (
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                <Download className="h-3 w-3 mr-1" />
                Offline
              </Badge>
            )}
          </div>
          <div className="absolute bottom-2 left-2">
            <Badge className={getDataUsageColor(course.dataUsage)}>
              {course.dataUsage === "Low" ? (
                <Wifi className="h-3 w-3 mr-1" />
              ) : course.dataUsage === "High" ? (
                <WifiOff className="h-3 w-3 mr-1" />
              ) : (
                <Wifi className="h-3 w-3 mr-1" />
              )}
              {course.dataUsage} Data
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <Badge variant="outline" className="text-xs">
              {course.category}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {course.level}
            </Badge>
          </div>

          <h3 className="font-semibold text-lg leading-tight line-clamp-2">{course.title}</h3>

          <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>

          <div className="text-sm text-muted-foreground">
            <p>Instructor: {course.instructor}</p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{course.enrolledStudents}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex gap-2 w-full">
          <Button asChild className="flex-1">
            <Link href={`/courses/${course.id}`}>View Course</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="bg-transparent">
            <Link href={`/courses/${course.id}/enroll`}>Enroll</Link>
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent" onClick={handleShare} aria-label="Share course">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
