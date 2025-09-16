import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, password, userType, instituteCode, registrationMethod } =
      await request.json()

    // Validate required fields
    if (!firstName || !lastName || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Check if user already exists
    // const existingUser = await checkUserExists(email, phone)

    // Create user in database
    // const user = await createUser({
    //   firstName,
    //   lastName,
    //   email,
    //   phone,
    //   password: await hashPassword(password),
    //   userType,
    //   instituteCode,
    //   registrationMethod
    // })

    console.log("User registration:", { firstName, lastName, email, phone, userType })

    return NextResponse.json({
      message: "Registration successful",
      user: { firstName, lastName, email, phone, userType },
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ message: "Registration failed" }, { status: 500 })
  }
}
