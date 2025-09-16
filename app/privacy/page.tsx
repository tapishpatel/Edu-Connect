import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="government-badge mb-4">Government Policy</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">Last updated: January 2024</p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-primary flex items-center gap-2">
              <Shield className="h-6 w-6" />
              Our Commitment to Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The Government of India is committed to protecting the privacy and security of users of the EduConnect
              platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you use our virtual classroom platform. This policy is in compliance with the Information Technology Act,
              2000 and the Personal Data Protection Bill.
            </p>
          </CardContent>
        </Card>

        {/* Information Collection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary">Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Personal Information</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Name, email address, and contact information</li>
                <li>Educational institution and academic details</li>
                <li>Student/Faculty identification numbers</li>
                <li>Profile photographs (optional)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Usage Information</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Course enrollment and progress data</li>
                <li>Platform usage statistics and learning analytics</li>
                <li>Device information and network connectivity data</li>
                <li>Session logs and interaction patterns</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary flex items-center gap-2">
              <Eye className="h-5 w-5" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide and maintain the virtual classroom platform</li>
              <li>Facilitate course enrollment and academic progress tracking</li>
              <li>Enable communication between students and faculty</li>
              <li>Generate educational analytics and institutional reports</li>
              <li>Improve platform performance and user experience</li>
              <li>Ensure platform security and prevent unauthorized access</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Data Security Measures
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We implement robust security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>End-to-end encryption for all data transmission</li>
              <li>Secure data centers with 24/7 monitoring</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Multi-factor authentication for sensitive accounts</li>
              <li>Data backup and disaster recovery procedures</li>
              <li>Compliance with government cybersecurity guidelines</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary">Information Sharing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We do not sell, trade, or rent your personal information. We may share information only in the following
              circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>With your educational institution for academic purposes</li>
              <li>With government agencies as required by law</li>
              <li>For platform maintenance and technical support</li>
              <li>In anonymized form for research and policy development</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>
          </CardContent>
        </Card>

        {/* User Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary">Your Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <strong>Access:</strong> Request access to your personal information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and data
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing activities
              </li>
              <li>
                <strong>Withdrawal:</strong> Withdraw consent for optional data processing
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-primary flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Contact for Privacy Concerns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              For questions about this Privacy Policy or to exercise your rights:
            </p>
            <div className="space-y-2">
              <p>
                <strong>Data Protection Officer:</strong> privacy@educonnect.gov.in
              </p>
              <p>
                <strong>Postal Address:</strong> Ministry of Education, Shastri Bhawan, New Delhi - 110001
              </p>
              <p>
                <strong>Phone:</strong> 1800-XXX-XXXX (Privacy Helpline)
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
