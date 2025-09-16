import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  try {
    const { email, phone, otp, type } = await request.json()

    const c = cookies()
    const key = email ? "otp_email" : "otp_phone"
    const stored = c.get(key)?.value

    if (!stored) {
      return NextResponse.json({ message: "OTP not found or expired" }, { status: 400 })
    }

    try {
      const payload = JSON.parse(stored)
      const matchesTarget = email ? payload.email === email : payload.phone === phone
      const matchesOtp = payload.otp === otp

      if (matchesTarget && matchesOtp) {
        // Clear cookie after successful verification
        c.set(key, "", { httpOnly: true, maxAge: 0, path: "/" })
        return NextResponse.json({ message: "OTP verified successfully", verified: true })
      }

      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 })
    } catch {
      return NextResponse.json({ message: "Invalid OTP state" }, { status: 400 })
    }
  } catch (error) {
    console.error("Verify OTP error:", error)
    return NextResponse.json({ message: "OTP verification failed" }, { status: 500 })
  }
}
