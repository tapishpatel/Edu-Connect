"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getDemoCourseById } from "@/lib/demo-courses"
import { notFound } from "next/navigation"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface EnrollPageProps {
  params: { id: string }
}

export default function EnrollPage({ params }: EnrollPageProps) {
  const course = getDemoCourseById(params.id)
  const [isEnrolled, setIsEnrolled] = useState(false)
  
  if (!course) return notFound()

  const handleEnrollment = () => {
    setIsEnrolled(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Enroll in {course.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isEnrolled ? (
              // Enrollment Form
              <div>
                <p className="text-muted-foreground">Enrollment is free for demo courses.</p>
                <div className="flex gap-2">
                  <Button onClick={handleEnrollment}>
                    Confirm Enrollment
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent">
                    <Link href={`/courses/${course.id}`}>Cancel</Link>
                  </Button>
                </div>
              </div>
            ) : (
              // Success Message
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600">Successfully Enrolled!</h3>
                <p className="text-muted-foreground">
                  You have been enrolled in <strong>{course.title}</strong>. You can now access all course materials and start learning.
                </p>
                <div className="flex gap-2 justify-center">
                  <Button asChild>
                    <Link href={`/courses/${course.id}`}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Course
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent">
                    <Link href="/student/dashboard">Go to Dashboard</Link>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}


