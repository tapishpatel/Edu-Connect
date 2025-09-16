"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, Volume2, VolumeX, Maximize, Users, Wifi, Download } from "lucide-react"

export function LiveSession() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [quality, setQuality] = useState("Low (360p)")
  const [isLive, setIsLive] = useState(true)

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              Computer Hardware Basics
              {isLive && <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">LIVE</Badge>}
            </CardTitle>
            <p className="text-sm text-muted-foreground">Dr. Sarah Johnson • Computer Fundamentals</p>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="text-sm">89 students</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Video Player */}
        <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <div className="text-6xl">📹</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Live Session</h3>
                <p className="text-sm opacity-80">{isLive ? "Session is live" : "Session will start soon"}</p>
              </div>
            </div>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:bg-white/20"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <span className="text-xs">{isLive ? "LIVE" : "00:00 / 45:30"}</span>
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  className="bg-black/50 text-white text-xs border border-white/20 rounded px-2 py-1"
                >
                  <option>Low (360p)</option>
                  <option>Medium (480p)</option>
                  <option>High (720p)</option>
                  <option>Audio Only</option>
                </select>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {!isLive && (
              <div className="mt-2">
                <Progress value={35} className="h-1" />
              </div>
            )}
          </div>
        </div>

        {/* Session Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Wifi className="h-4 w-4 text-green-600" />
                <div>
                  <div className="text-sm font-medium">Connection</div>
                  <div className="text-xs text-muted-foreground">Good (2.1 Mbps)</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4 text-blue-600" />
                <div>
                  <div className="text-sm font-medium">Data Usage</div>
                  <div className="text-xs text-muted-foreground">45 MB used</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-600" />
                <div>
                  <div className="text-sm font-medium">Participants</div>
                  <div className="text-xs text-muted-foreground">89 active</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Session Actions */}
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="bg-transparent">
            Raise Hand
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent">
            Share Screen
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent">
            Record Session
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent">
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
