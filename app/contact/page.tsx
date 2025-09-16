import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, HelpCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="government-badge mb-4">Government Support</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Contact & Support</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get assistance with technical issues, institutional partnerships, or general inquiries about the EduConnect
            platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Send us a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and our support team will get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name *</label>
                  <Input placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Institution/College</label>
                  <Input placeholder="Your institution name" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Subject *</label>
                <Input placeholder="Brief subject of your inquiry" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message *</label>
                <Textarea placeholder="Describe your inquiry or issue in detail..." className="min-h-[120px]" />
              </div>

              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium">Helpline (Toll Free)</p>
                    <p className="text-muted-foreground">1800-XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-muted-foreground">support@educonnect.gov.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium">Support Hours</p>
                    <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Address */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Office Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Ministry of Education</p>
                  <p className="text-muted-foreground">
                    Digital Education Division
                    <br />
                    Shastri Bhawan, New Delhi - 110001
                    <br />
                    India
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Support Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Support Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Technical Issues</Badge>
                  <span className="text-sm text-muted-foreground">Platform bugs, connectivity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Account Support</Badge>
                  <span className="text-sm text-muted-foreground">Login, registration, profiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Institutional Partnerships</Badge>
                  <span className="text-sm text-muted-foreground">College onboarding, agreements</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Training & Resources</Badge>
                  <span className="text-sm text-muted-foreground">Faculty training, documentation</span>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-destructive">Emergency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  For critical system outages or urgent technical issues affecting multiple institutions:
                </p>
                <p className="font-medium">Emergency Hotline: 1800-XXX-YYYY</p>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-16">
        <div className="container px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Government of India - Ministry of Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
