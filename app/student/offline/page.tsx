import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Download, HardDrive, Wifi, Trash2, Pause } from "lucide-react"

const availableDownloads = [
  {
    id: "1",
    title: "Computer Fundamentals - Week 4-6",
    course: "Computer Fundamentals",
    size: "320 MB",
    type: "Video Lectures",
    quality: "Low (360p)",
    isDownloading: false,
    isDownloaded: false,
  },
  {
    id: "2",
    title: "Digital Marketing - Case Studies",
    course: "Digital Marketing Basics",
    size: "150 MB",
    type: "PDF Materials",
    quality: "Standard",
    isDownloading: true,
    downloadProgress: 45,
    isDownloaded: false,
  },
  {
    id: "3",
    title: "English Communication - Audio Lessons",
    course: "English Communication",
    size: "85 MB",
    type: "Audio Files",
    quality: "Standard",
    isDownloading: false,
    isDownloaded: true,
  },
]

export default function OfflineContentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Offline Content</h1>
          <p className="text-muted-foreground text-lg">Download course materials for offline study</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Storage Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5" />
                  Storage Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Used Storage</span>
                    <span className="font-medium">420 MB / 1 GB</span>
                  </div>
                  <Progress value={42} className="h-3" />
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-medium">Videos</div>
                      <div className="text-muted-foreground">280 MB</div>
                    </div>
                    <div>
                      <div className="font-medium">Audio</div>
                      <div className="text-muted-foreground">95 MB</div>
                    </div>
                    <div>
                      <div className="font-medium">Documents</div>
                      <div className="text-muted-foreground">45 MB</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Available Downloads */}
            <Card>
              <CardHeader>
                <CardTitle>Available for Download</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableDownloads.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.course}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {item.type}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {item.size}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {item.quality}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {item.isDownloaded ? (
                            <>
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Downloaded
                              </Badge>
                              <Button variant="outline" size="sm" className="bg-transparent">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </>
                          ) : item.isDownloading ? (
                            <div className="flex items-center gap-2">
                              <div className="w-24">
                                <Progress value={item.downloadProgress} className="h-2" />
                              </div>
                              <Button variant="outline" size="sm" className="bg-transparent">
                                <Pause className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>

                      {item.isDownloading && (
                        <div className="mt-3 text-sm text-muted-foreground">
                          Downloading... {item.downloadProgress}% complete
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Connection Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-green-600" />
                  Connection Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Network</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Connected
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Speed</span>
                    <span className="text-sm font-medium">2.1 Mbps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Usage</span>
                    <span className="text-sm font-medium">45 MB today</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Download Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Video Quality</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm">
                    <option>Low (360p) - Data Saver</option>
                    <option>Medium (480p)</option>
                    <option>High (720p)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Auto-Download</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm">
                    <option>WiFi Only</option>
                    <option>WiFi + Mobile Data</option>
                    <option>Never</option>
                  </select>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Save Settings
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Data Saving Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                    Download during off-peak hours for better speeds
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                    Use low quality for mobile data connections
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                    Delete old content to free up space
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
