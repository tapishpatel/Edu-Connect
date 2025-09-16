import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Wifi, Smartphone, Users, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-government-education.jpg')] opacity-5" />

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-6 max-w-4xl">
            <Badge className="government-badge text-sm px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Government of India Initiative
            </Badge>

            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              <span className="text-primary">EduConnect</span>
              <br />
              <span className="text-foreground">Digital Classroom</span>
              <br />
              <span className="text-secondary">for Rural India</span>
            </h1>

            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl lg:text-2xl text-pretty leading-relaxed">
              Empowering rural diploma colleges with accessible, low-bandwidth virtual learning solutions. Quality
              education designed for India's connectivity challenges.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
                500+ Colleges Connected
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                25,000+ Students Active
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
                28 States Covered
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/courses">
                <Play className="mr-2 h-5 w-5" />
                Start Learning Now
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-6 bg-background/80 backdrop-blur border-2 hover:bg-primary/5 transition-all"
              asChild
            >
              <Link href="/interactive">
                Watch Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-5xl">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Wifi className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-primary">Low Bandwidth Optimized</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Works seamlessly on 2G/3G networks with adaptive streaming and smart data compression
                </p>
                <Badge variant="outline" className="mt-3">
                  2G Compatible
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-secondary">Mobile First Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Optimized for entry-level smartphones with intuitive touch interface and offline capabilities
                </p>
                <Badge variant="outline" className="mt-3">
                  Offline Ready
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-primary">Interactive Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Real-time collaboration with live chat, polls, quizzes, and virtual classroom sessions
                </p>
                <Badge variant="outline" className="mt-3">
                  Live Sessions
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="pt-8 border-t border-border/50 w-full max-w-4xl">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading educational institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-xs font-medium">Ministry of Education</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="text-xs font-medium">AICTE Approved</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="text-xs font-medium">Digital India</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="text-xs font-medium">Skill India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
