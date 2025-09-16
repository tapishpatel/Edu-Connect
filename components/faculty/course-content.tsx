import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Video, Download, Edit, Trash2 } from "lucide-react"

const courseContent = [
  {
    id: "1",
    title: "Week 1: Introduction to Computers",
    type: "Video Lecture",
    size: "245 MB",
    downloads: 89,
    uploadDate: "2024-01-15",
    status: "Published",
  },
  {
    id: "2",
    title: "Hardware Components Guide",
    type: "PDF Document",
    size: "12 MB",
    downloads: 76,
    uploadDate: "2024-01-18",
    status: "Published",
  },
  {
    id: "3",
    title: "Week 2: Operating Systems",
    type: "Video Lecture",
    size: "320 MB",
    downloads: 45,
    uploadDate: "2024-01-22",
    status: "Draft",
  },
]

interface CourseContentProps {
  courseId: string
}

export function CourseContent({ courseId }: CourseContentProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Video Lecture":
        return <Video className="h-4 w-4" />
      case "PDF Document":
        return <FileText className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Course Materials</CardTitle>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload Content
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courseContent.map((content) => (
              <div key={content.id} className="border rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-start gap-3">
                    {getTypeIcon(content.type)}
                    <div className="flex-1">
                      <h4 className="font-medium">{content.title}</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {content.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {content.size}
                        </Badge>
                        <Badge variant={content.status === "Published" ? "default" : "secondary"} className="text-xs">
                          {content.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Uploaded: {content.uploadDate} • {content.downloads} downloads
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
