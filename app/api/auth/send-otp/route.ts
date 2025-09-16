import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

async function sendEmailViaResend(to: string, otp: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL
  if (!apiKey || !from) return false

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: "Your verification code",
        text: `Your verification code is ${otp}. It expires in 10 minutes.`,
      }),
    })
    return res.ok
  } catch (e) {
    return false
  }
}

async function sendSmsViaTwilio(to: string, otp: string): Promise<boolean> {
  const sid = process.env.TWILIO_ACCOUNT_SID
  const token = process.env.TWILIO_AUTH_TOKEN
  const from = process.env.TWILIO_FROM_PHONE
  if (!sid || !token || !from) return false

  const body = new URLSearchParams({
    From: from,
    To: to,
    Body: `Your verification code is ${otp}. It expires in 10 minutes.`,
  })

  try {
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    })
    return res.ok
  } catch (e) {
    return false
  }
}

function setOtpCookie(key: string, value: string) {
  const c = cookies()
  c.set(key, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 10,
    path: "/",
  })
}

export async function POST(request: NextRequest) {
  try {
    const { email, phone, type } = await request.json()

    if (email) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString()

      // Try to send email via Resend
      const sent = await sendEmailViaResend(email, otp)

      // Store OTP in cookie for verification (dev/demo)
      setOtpCookie("otp_email", JSON.stringify({ email, otp }))

      if (sent) {
        return NextResponse.json({ message: "OTP sent to email successfully" })
      } else {
        console.log(`Email OTP for ${email}: ${otp}`)
        return NextResponse.json({ message: "OTP sent to email (development mode)" })
      }
    }

    if (phone) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString()

      // Try to send SMS via Twilio
      const sent = await sendSmsViaTwilio(phone, otp)

      // Store OTP in cookie for verification (dev/demo)
      setOtpCookie("otp_phone", JSON.stringify({ phone, otp }))

      if (sent) {
        return NextResponse.json({ message: "OTP sent to phone successfully" })
      } else {
        console.log(`Phone OTP for ${phone}: ${otp}`)
        return NextResponse.json({ message: "OTP sent to phone (development mode)" })
      }
    }

    return NextResponse.json({ message: "Email or phone required" }, { status: 400 })
  } catch (error) {
    console.error("Send OTP error:", error)
    return NextResponse.json({ message: "Failed to send OTP" }, { status: 500 })
  }
}
