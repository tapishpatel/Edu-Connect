import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Globe, BookOpen, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="government-badge mb-4">Government of India Initiative</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">About EduConnect</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A flagship digital education initiative by the Government of India, designed to bridge the digital divide
            and provide quality education to rural diploma colleges across the nation.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl font-serif">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To democratize quality education by providing accessible, low-bandwidth virtual classroom solutions that
                empower rural diploma colleges and their students with modern learning technologies, regardless of their
                geographical location or connectivity constraints.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20">
            <CardHeader>
              <Globe className="h-12 w-12 text-secondary mb-4" />
              <CardTitle className="text-2xl font-serif">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To create an inclusive digital education ecosystem where every student in rural India has access to
                world-class educational resources, interactive learning experiences, and opportunities for skill
                development that prepare them for the digital economy.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-primary">Platform Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif">Low Bandwidth Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specially designed for 2G/3G networks with adaptive streaming and offline content capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle className="font-serif">Comprehensive Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Aligned with AICTE guidelines and industry standards for diploma-level technical education.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="font-serif">Expert Faculty Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access to qualified instructors and industry experts from across the country.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Government Initiatives */}
        <section className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-8 text-primary">
            Supporting National Initiatives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Badge variant="secondary" className="mb-2">
                Digital India
              </Badge>
              <p className="text-sm text-muted-foreground">Advancing digital literacy and infrastructure</p>
            </div>
            <div className="text-center">
              <Badge variant="secondary" className="mb-2">
                Skill India
              </Badge>
              <p className="text-sm text-muted-foreground">Building industry-relevant skills</p>
            </div>
            <div className="text-center">
              <Badge variant="secondary" className="mb-2">
                Make in India
              </Badge>
              <p className="text-sm text-muted-foreground">Supporting manufacturing and innovation</p>
            </div>
            <div className="text-center">
              <Badge variant="secondary" className="mb-2">
                Atmanirbhar Bharat
              </Badge>
              <p className="text-sm text-muted-foreground">Promoting self-reliance through education</p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-12 text-primary">Impact Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Colleges Connected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">25,000+</div>
              <div className="text-muted-foreground">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-muted-foreground">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">28</div>
              <div className="text-muted-foreground">States Covered</div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif text-primary">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              For institutional partnerships, technical support, or general inquiries
            </p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> support@educonnect.gov.in
              </p>
              <p>
                <strong>Helpline:</strong> 1800-XXX-XXXX (Toll Free)
              </p>
              <p>
                <strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM IST
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-16">
        <div className="container px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Government of India - Ministry of Education. All rights reserved.</p>
            <p className="mt-2 text-sm">Part of Digital India Initiative</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
