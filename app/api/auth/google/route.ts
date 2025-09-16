import { type NextRequest, NextResponse } from "next/server"
import { OAuth2Client } from "google-auth-library"

const resolveClientId = () => process.env.GOOGLE_CLIENT_ID || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

export async function POST(request: NextRequest) {
  try {
    const { credential, userType } = await request.json()

    const clientId = resolveClientId()
    if (!clientId) {
      return NextResponse.json({ message: "Server is missing GOOGLE_CLIENT_ID" }, { status: 500 })
    }
    if (!credential) {
      return NextResponse.json({ message: "Missing Google credential" }, { status: 400 })
    }

    const client = new OAuth2Client(clientId)

    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: clientId,
    })

    const payload = ticket.getPayload()
    if (!payload) {
      return NextResponse.json({ message: "Invalid Google token payload" }, { status: 401 })
    }

    const { email, name, picture, sub: googleId } = payload

    // For now, returning a mock response
    const mockToken = `jwt_token_${googleId}_${userType}`

    return NextResponse.json({
      token: mockToken,
      user: {
        id: googleId,
        email,
        name,
        picture,
        userType,
      },
    })
  } catch (error: any) {
    console.error("Google auth error:", error?.message || error)
    const message =
      error?.message?.includes("Wrong recipient") || error?.message?.includes("audience")
        ? "Google client ID mismatch. Check GOOGLE_CLIENT_ID."
        : "Authentication failed"
    const status = message.includes("mismatch") ? 401 : 500
    return NextResponse.json({ message }, { status })
  }
}
