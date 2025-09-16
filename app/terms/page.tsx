import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, Shield } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container px-4">
        <Breadcrumbs />
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="government-badge mb-4">Government Policy</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">Last updated: January 2024</p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-primary flex items-center gap-2">
              <Scale className="h-6 w-6" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service govern your use of the EduConnect virtual classroom platform operated by the
              Government of India, Ministry of Education. By accessing or using our platform, you agree to be bound by
              these terms and all applicable laws and regulations.
            </p>
          </CardContent>
        </Card>

        {/* Platform Usage */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary">Platform Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Permitted Use</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Educational purposes in accordance with your institution's curriculum</li>
                <li>Accessing course materials, participating in discussions, and completing assignments</li>
                <li>Collaborating with fellow students and faculty members</li>
                <li>Using platform features for legitimate academic activities</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Prohibited Activities</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Sharing login credentials or allowing unauthorized access</li>
                <li>Uploading malicious software, viruses, or harmful content</li>
                <li>Harassment, discrimination, or inappropriate behavior toward other users</li>
                <li>Commercial use or redistribution of platform content without permission</li>
                <li>Attempting to breach platform security or access restricted areas</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary flex items-center gap-2">
              <Shield className="h-5 w-5" />
              User Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Provide accurate and up-to-date registration information</li>
              <li>Comply with your educational institution's academic integrity policies</li>
              <li>Respect intellectual property rights of course materials and content</li>
              <li>Report any security vulnerabilities or inappropriate content</li>
              <li>Use the platform in accordance with applicable laws and regulations</li>
            </ul>
          </CardContent>
        </Card>

        {/* Government Compliance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary">Government Compliance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This platform operates under the authority of the Government of India and is subject to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Information Technology Act, 2000 and its amendments</li>
              <li>Right to Information Act, 2005</li>
              <li>Personal Data Protection regulations</li>
              <li>Educational policies and guidelines issued by AICTE and UGC</li>
              <li>Digital India initiative compliance requirements</li>
            </ul>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary">Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Platform Content</h3>
              <p className="text-muted-foreground mb-2">
                All course materials, videos, documents, and platform features are owned by:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Government of India (platform and infrastructure)</li>
                <li>Respective educational institutions (course-specific content)</li>
                <li>Faculty members and content creators (original materials)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">User-Generated Content</h3>
              <p className="text-muted-foreground">
                By submitting content to the platform, you grant the Government of India a non-exclusive license to use,
                modify, and distribute your content for educational purposes within the platform.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary">Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Government of India provides this platform "as is" and makes no warranties regarding:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Continuous availability or uninterrupted access</li>
              <li>Accuracy or completeness of all content</li>
              <li>Compatibility with all devices or network conditions</li>
              <li>Third-party content or external links</li>
            </ul>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary">Account Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Government of India reserves the right to suspend or terminate accounts for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Violation of these Terms of Service</li>
              <li>Misuse of platform resources or features</li>
              <li>Completion of academic program or institutional withdrawal</li>
              <li>Security concerns or suspicious activities</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Questions About Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">For questions about these Terms of Service or legal matters:</p>
            <div className="space-y-2">
              <p>
                <strong>Legal Department:</strong> legal@educonnect.gov.in
              </p>
              <p>
                <strong>Postal Address:</strong> Ministry of Education, Shastri Bhawan, New Delhi - 110001
              </p>
              <p>
                <strong>Phone:</strong> 1800-XXX-XXXX (Legal Helpline)
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
