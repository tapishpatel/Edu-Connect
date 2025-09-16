import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Government Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <div>
                <div className="font-serif font-bold text-primary text-lg">EduConnect</div>
                <div className="text-sm text-muted-foreground">Government of India</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering rural education through accessible digital learning solutions under the Digital India
              initiative.
            </p>
            <Badge className="government-badge">Ministry of Education</Badge>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/interactive"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Live Sessions
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Discussion Forum
                </Link>
              </li>
              <li>
                <Link
                  href="/student/dashboard"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Student Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty/dashboard"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Faculty Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Government Pages */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-4">Government</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Initiative
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://digitalindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Digital India
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                1800-XXX-XXXX (Toll Free)
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                support@educonnect.gov.in
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  Ministry of Education
                  <br />
                  New Delhi - 110001
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; 2024 Government of India - Ministry of Education. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Part of Digital India Initiative | Developed for rural diploma colleges
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Support
              </Link>
              <Link
                href="/accessibility"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Accessibility
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
