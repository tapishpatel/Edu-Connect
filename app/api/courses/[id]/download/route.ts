import { NextRequest, NextResponse } from "next/server"
import { getDemoCourseById } from "@/lib/demo-courses"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const course = getDemoCourseById(params.id)
    
    if (!course) {
      return NextResponse.json({ message: "Course not found" }, { status: 404 })
    }

    // In a real app, this would generate and serve actual course materials
    // For demo purposes, we'll return a mock response
    const mockZipContent = `Course: ${course.title}
Instructor: ${course.instructor}
Duration: ${course.duration}
Description: ${course.description}

Modules:
${course.modules.map(module => 
  `- ${module.title} (${module.duration})
  ${module.lessons.map(lesson => `  - ${lesson.title} (${lesson.duration})`).join('\n')}`
).join('\n')}

This is a demo download. In a real application, this would contain:
- Video lectures
- PDF materials
- Assignment files
- Quiz questions
- Additional resources
`

    return new NextResponse(mockZipContent, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${course.title}-materials.zip"`,
      },
    })
  } catch (error) {
    console.error("Download error:", error)
    return NextResponse.json({ message: "Download failed" }, { status: 500 })
  }
}
