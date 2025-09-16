import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, phone, password, otp, method, userType } = await request.json()

    if (method === "email") {
      // Verify email and password against database
      // const user = await verifyEmailPassword(email, password, userType)

      // For development, accept any email/password combination
      if (email && password) {
        const mockToken = `jwt_token_${email}_${userType}`
        return NextResponse.json({
          token: mockToken,
          user: { email, userType },
        })
      }
    }

    if (method === "phone") {
      // Verify phone OTP
      // const isValidOTP = await verifyPhoneOTP(phone, otp)

      // For development, accept any 6-digit OTP
      if (phone && otp && otp.length === 6) {
        const mockToken = `jwt_token_${phone}_${userType}`
        return NextResponse.json({
          token: mockToken,
          user: { phone, userType },
        })
      }
    }

    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ message: "Login failed" }, { status: 500 })
  }
}
