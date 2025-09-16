import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Download, HardDrive, Wifi, Trash2 } from "lucide-react"

const offlineContent = [
  {
    title: "Computer Fundamentals - Week 1-3",
    size: "245 MB",
    downloaded: 100,
    course: "Computer Fundamentals",
  },
  {
    title: "Digital Marketing - Videos",
    size: "180 MB",
    downloaded: 75,
    course: "Digital Marketing Basics",
  },
  {
    title: "English Communication - Audio",
    size: "95 MB",
    downloaded: 100,
    course: "English Communication",
  },
]

export function OfflineContent() {
  const totalStorage = 520
  const usedStorage = 420

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="h-5 w-5" />
          Offline Content
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Storage Usage */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1">
              <HardDrive className="h-4 w-4" />
              Storage Used
            </span>
            <span>
              {usedStorage}MB / {totalStorage}MB
            </span>
          </div>
          <Progress value={(usedStorage / totalStorage) * 100} className="h-2" />
        </div>

        {/* Downloaded Content */}
        <div className="space-y-3">
          {offlineContent.map((content, index) => (
            <div key={index} className="border rounded-lg p-3 space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{content.title}</h4>
                  <p className="text-xs text-muted-foreground">{content.course}</p>
                </div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Downloaded</span>
                  <span>{content.size}</span>
                </div>
                <Progress value={content.downloaded} className="h-1" />
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full bg-transparent">
          <Wifi className="h-4 w-4 mr-2" />
          Manage Downloads
        </Button>
      </CardContent>
    </Card>
  )
}
