import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, ArrowRight, Shield, Globe, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#498ace" }}>
      <Navigation />

      <main>
        <HeroSection />
        <FeaturesSection />

        {/* Government Initiative Banner */}
        <section className="py-8 bg-primary/5 border-y border-primary/10">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-serif font-bold text-primary">Government of India Initiative</h3>
                  <p className="text-sm text-muted-foreground">Part of Digital India - Empowering Rural Education</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Digital India</Badge>
                <Badge variant="secondary">Skill India</Badge>
                <Badge variant="secondary">Make in India</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Impact Across India</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transforming rural education through accessible digital learning solutions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground font-medium">Colleges Connected</div>
                <div className="text-xs text-muted-foreground">Across 28 States</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-secondary">25K+</div>
                <div className="text-muted-foreground font-medium">Students Enrolled</div>
                <div className="text-xs text-muted-foreground">Active Learners</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">1.2K+</div>
                <div className="text-muted-foreground font-medium">Expert Faculty</div>
                <div className="text-xs text-muted-foreground">Certified Instructors</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-secondary">95%</div>
                <div className="text-muted-foreground font-medium">Success Rate</div>
                <div className="text-xs text-muted-foreground">Course Completion</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Quick Access Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-muted/30 to-muted/60">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="government-badge mb-4">Quick Access Portals</Badge>
              <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl text-balance text-primary mb-4">
                Start Your Learning Journey
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl text-pretty">
                Access world-class education designed for rural connectivity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20 bg-card/80 backdrop-blur">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="font-serif text-xl">Browse Courses</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    100+ Programs
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Explore AICTE-approved diploma courses optimized for low-bandwidth learning
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all bg-transparent"
                    asChild
                  >
                    <Link href="/courses">
                      View Courses
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-secondary/20 bg-card/80 backdrop-blur">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                    <Users className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="font-serif text-xl">Student Portal</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    Dashboard
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Access your personalized dashboard, assignments, and progress tracking
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-all bg-transparent"
                    asChild
                  >
                    <Link href="/auth/login">
                      Student Login
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20 bg-card/80 backdrop-blur">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Award className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="font-serif text-xl">Faculty Portal</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    Teaching Tools
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Manage classes, Track Student progress, and access teaching resources
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all bg-transparent"
                    asChild
                  >
                    <Link href="/auth/login">
                      Faculty Login
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features Highlight */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Why Choose EduConnect?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built specifically for rural India's connectivity challenges
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg">Low Bandwidth Optimized</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Works seamlessly on 2G/3G networks with adaptive streaming and offline content
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif font-semibold text-lg">Government Certified</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AICTE-approved curriculum aligned with national education standards
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg">Rural Focused</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Designed specifically for diploma colleges in rural and semi-urban areas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <Badge className="government-badge">Join the Digital Revolution</Badge>
              <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl text-balance text-primary">
                Ready to Transform Education?
              </h2>
              <p className="text-muted-foreground md:text-xl text-pretty leading-relaxed">
                Join thousands of students and educators already part of India's largest rural education network. Start
                your digital learning journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/auth/register">Get Started Free</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                No setup fees • Government supported • Available in multiple languages
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
