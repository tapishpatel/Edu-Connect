import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  HelpCircle,
  Search,
  BookOpen,
  Video,
  MessageCircle,
  Phone,
  Mail,
  Download,
  Users,
  Settings,
  Wifi,
  Smartphone,
  FileText,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

const supportCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics of using EduConnect platform",
    articles: 12,
    color: "primary",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides for all features",
    articles: 8,
    color: "secondary",
  },
  {
    icon: Settings,
    title: "Technical Support",
    description: "Troubleshoot technical issues and connectivity",
    articles: 15,
    color: "primary",
  },
  {
    icon: Users,
    title: "For Faculty",
    description: "Teaching tools and classroom management guides",
    articles: 10,
    color: "secondary",
  },
  {
    icon: Smartphone,
    title: "Mobile App Help",
    description: "Using EduConnect on mobile devices",
    articles: 6,
    color: "primary",
  },
  {
    icon: Wifi,
    title: "Connectivity Issues",
    description: "Solutions for low bandwidth and network problems",
    articles: 9,
    color: "secondary",
  },
]

const faqs = [
  {
    question: "How do I access courses offline?",
    answer:
      "You can download course materials and videos when you have a good internet connection. Go to your course page, click on the download icon next to each lesson, and select the quality that suits your device storage. Downloaded content will be available in the 'Offline Content' section of your dashboard.",
  },
  {
    question: "What internet speed do I need for live sessions?",
    answer:
      "EduConnect works with connections as slow as 2G (64 kbps). For live video sessions, we recommend at least 256 kbps for basic quality. The platform automatically adjusts video quality based on your connection speed to ensure smooth learning experience.",
  },
  {
    question: "How do I register my college with EduConnect?",
    answer:
      "College registration is handled by our institutional partnerships team. Contact our support team at support@educonnect.gov.in with your college details, AICTE code, and principal's authorization letter. Our team will guide you through the onboarding process.",
  },
  {
    question: "Can I use EduConnect on my basic smartphone?",
    answer:
      "Yes! EduConnect is designed to work on entry-level Android smartphones with as little as 1GB RAM. The app is optimized for older devices and includes a lite mode for phones with limited storage and processing power.",
  },
  {
    question: "What languages are supported on the platform?",
    answer:
      "EduConnect supports 12 Indian languages including Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, and Assamese. You can change the language from your profile settings.",
  },
  {
    question: "How do I get technical support during classes?",
    answer:
      "During live classes, use the 'Help' button in the session interface for immediate assistance. For urgent technical issues, call our 24/7 emergency helpline at 1800-XXX-YYYY. You can also use the live chat feature available in your dashboard.",
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container px-4">
        <Breadcrumbs />
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="government-badge mb-4">
            <HelpCircle className="h-4 w-4 mr-2" />
            Government Support Center
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Help & Support</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get help with using EduConnect platform, troubleshoot issues, and access learning resources
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search for help articles, tutorials, or FAQs..." className="pl-10 pr-4 py-6 text-lg" />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">Search</Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
            <CardHeader className="text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-serif">Emergency Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">24/7 helpline for urgent technical issues</p>
              <Button className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Call 1800-XXX-YYYY
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all cursor-pointer">
            <CardHeader className="text-center">
              <MessageCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
              <CardTitle className="font-serif">Live Chat</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Chat with our support team in real-time</p>
              <Button variant="outline" className="w-full bg-transparent">
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-serif">Email Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Send detailed queries via email</p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Support Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-primary">Browse Help Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCategories.map((category, index) => {
              const Icon = category.icon
              const isPrimary = category.color === "primary"
              return (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-all cursor-pointer border-2 hover:border-${
                    isPrimary ? "primary" : "secondary"
                  }/30 group`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full bg-${
                          isPrimary ? "primary" : "secondary"
                        }/10 flex items-center justify-center group-hover:bg-${
                          isPrimary ? "primary" : "secondary"
                        }/20 transition-colors`}
                      >
                        <Icon className={`h-6 w-6 text-${isPrimary ? "primary" : "secondary"}`} />
                      </div>
                      <div>
                        <CardTitle className="font-serif">{category.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {category.articles} articles
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to the most common questions about EduConnect platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-primary">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  Download Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">User Manual (PDF)</span>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Mobile App Guide</span>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Faculty Handbook</span>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <FileText className="h-5 w-5 text-secondary" />
                  Government Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/accessibility"
                  className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                >
                  <span>Accessibility Guidelines</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <Link
                  href="/privacy"
                  className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                >
                  <span>Privacy Policy</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <a
                  href="https://digitalindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                >
                  <span>Digital India Initiative</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Support */}
        <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif text-primary">Still Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Our support team is available to help you with any questions or technical issues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Support Team
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent" asChild>
                <Link href="/about">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Learn More About EduConnect
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
