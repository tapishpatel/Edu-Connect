import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { lessonId: string } }
) {
  try {
    // In a real app, this would serve actual lesson content
    // For demo purposes, we'll return a mock response
    const mockContent = `Lesson Content

This is a demo download for lesson ${params.lessonId}.

In a real application, this would contain:
- Video file (MP4)
- PDF materials
- Quiz questions
- Reading materials
- Additional resources

The actual content would depend on the lesson type:
- Video lessons: MP4 video files
- Quiz lessons: PDF with questions and answers
- Reading lessons: PDF or text documents

This is a placeholder for demonstration purposes.
`

    return new NextResponse(mockContent, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="lesson-${params.lessonId}-content.txt"`,
      },
    })
  } catch (error) {
    console.error("Download error:", error)
    return NextResponse.json({ message: "Download failed" }, { status: 500 })
  }
}
