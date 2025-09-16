import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Video, MessageCircle, BarChart3, FileText, Clock, Shield, Globe } from "lucide-react"

const features = [
  {
    icon: Download,
    title: "Offline Access",
    description: "Download lectures and materials for offline study when internet is unavailable",
    badge: "Data Saver",
    color: "primary",
  },
  {
    icon: Video,
    title: "Adaptive Streaming",
    description: "Automatically adjusts video quality based on your connection speed",
    badge: "Smart Tech",
    color: "secondary",
  },
  {
    icon: MessageCircle,
    title: "Live Chat & Polls",
    description: "Interactive features to engage with instructors and classmates in real-time",
    badge: "Interactive",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor your learning progress with detailed analytics and reports",
    badge: "Analytics",
    color: "secondary",
  },
  {
    icon: FileText,
    title: "Digital Resources",
    description: "Access PDFs, handouts, and study materials optimized for mobile viewing",
    badge: "Mobile Ready",
    color: "primary",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Learn at your own pace with recorded lectures and flexible class timings",
    badge: "Self Paced",
    color: "secondary",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-muted/60">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge className="government-badge mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Government Certified Platform
          </Badge>
          <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance text-primary mb-6">
            Everything You Need to Learn
          </h2>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl text-pretty leading-relaxed">
            Our platform is built specifically for rural areas with limited connectivity and resources, ensuring quality
            education reaches every corner of India
          </p>
          <div className="flex justify-center items-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span>AICTE Approved</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-secondary" />
              <span>Government Backed</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isPrimary = feature.color === "primary"
            return (
              <Card
                key={index}
                className={`h-full hover:shadow-xl transition-all duration-300 group border-2 hover:border-${
                  isPrimary ? "primary" : "secondary"
                }/30 bg-card/80 backdrop-blur`}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-${
                      isPrimary ? "primary" : "secondary"
                    }/10 flex items-center justify-center mb-4 group-hover:bg-${
                      isPrimary ? "primary" : "secondary"
                    }/20 transition-colors`}
                  >
                    <Icon
                      className={`h-7 w-7 text-${
                        isPrimary ? "primary" : "secondary"
                      } group-hover:scale-110 transition-transform`}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Government Features */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-serif text-primary">Government Compliance</CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Certified
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Fully compliant with government education standards, data protection laws, and accessibility guidelines
                for inclusive learning.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 bg-secondary/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <CardTitle className="font-serif text-secondary">Multi-Language Support</CardTitle>
                  <Badge variant="outline" className="mt-1">
                    12+ Languages
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Available in multiple Indian languages to ensure education accessibility across diverse linguistic
                regions of rural India.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
