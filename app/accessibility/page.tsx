import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accessibility, Eye, Ear, Hand, Brain, Phone } from "lucide-react"

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="government-badge mb-4">Inclusive Education</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Accessibility Statement</h1>
          <p className="text-lg text-muted-foreground">
            Committed to providing equal access to education for all learners
          </p>
        </div>

        {/* Commitment */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-primary flex items-center gap-2">
              <Accessibility className="h-6 w-6" />
              Our Accessibility Commitment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Government of India is committed to ensuring that the EduConnect platform is accessible to all users,
              including those with disabilities. We strive to comply with the Web Content Accessibility Guidelines
              (WCAG) 2.1 Level AA standards and the Rights of Persons with Disabilities Act, 2016.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that education is a fundamental right, and our platform is designed to be inclusive, ensuring
              that students and faculty with diverse abilities can fully participate in the digital learning experience.
            </p>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <Eye className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-xl font-serif">Visual Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>High contrast color schemes</li>
                <li>Scalable text up to 200% without loss of functionality</li>
                <li>Screen reader compatibility</li>
                <li>Alternative text for all images</li>
                <li>Keyboard navigation support</li>
                <li>Focus indicators for interactive elements</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Ear className="h-8 w-8 text-secondary mb-2" />
              <CardTitle className="text-xl font-serif">Audio Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Closed captions for all video content</li>
                <li>Audio transcripts available</li>
                <li>Visual indicators for audio alerts</li>
                <li>Adjustable audio playback speed</li>
                <li>Sign language interpretation (on request)</li>
                <li>Text-to-speech functionality</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Hand className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-xl font-serif">Motor Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Full keyboard navigation</li>
                <li>Adjustable time limits for interactions</li>
                <li>Large click targets (minimum 44px)</li>
                <li>Voice control compatibility</li>
                <li>Switch navigation support</li>
                <li>Customizable interface layouts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Brain className="h-8 w-8 text-secondary mb-2" />
              <CardTitle className="text-xl font-serif">Cognitive Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Clear and simple language</li>
                <li>Consistent navigation patterns</li>
                <li>Progress indicators and breadcrumbs</li>
                <li>Error prevention and clear error messages</li>
                <li>Distraction-free learning modes</li>
                <li>Customizable reading preferences</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Assistive Technologies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary">Supported Assistive Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              EduConnect is compatible with the following assistive technologies:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>JAWS (Job Access With Speech)</li>
                <li>NVDA (NonVisual Desktop Access)</li>
                <li>VoiceOver (macOS/iOS)</li>
                <li>TalkBack (Android)</li>
                <li>Dragon NaturallySpeaking</li>
              </ul>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Switch navigation devices</li>
                <li>Eye-tracking systems</li>
                <li>Magnification software</li>
                <li>Voice recognition software</li>
                <li>Alternative keyboards</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Settings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary">Accessibility Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Customize your learning experience with our accessibility options:
            </p>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Eye className="h-4 w-4 mr-2" />
                Adjust Visual Settings (Font Size, Contrast, Colors)
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Ear className="h-4 w-4 mr-2" />
                Configure Audio Preferences (Captions, Speed, Volume)
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Hand className="h-4 w-4 mr-2" />
                Customize Navigation (Keyboard Shortcuts, Click Targets)
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Brain className="h-4 w-4 mr-2" />
                Set Learning Preferences (Reading Mode, Distractions)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feedback and Support */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Accessibility Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you encounter any accessibility barriers or need assistance, please contact our dedicated accessibility
              support team:
            </p>
            <div className="space-y-2">
              <p>
                <strong>Accessibility Helpline:</strong> 1800-XXX-ACCESS (Toll Free)
              </p>
              <p>
                <strong>Email:</strong> accessibility@educonnect.gov.in
              </p>
              <p>
                <strong>Support Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM IST
              </p>
              <p>
                <strong>Response Time:</strong> Within 24 hours for accessibility issues
              </p>
            </div>
            <div className="mt-4 p-4 bg-secondary/10 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> We continuously work to improve accessibility. Your feedback helps us identify
                and address barriers to ensure an inclusive learning environment for all users.
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
          </div>
        </div>
      </footer>
    </div>
  )
}
