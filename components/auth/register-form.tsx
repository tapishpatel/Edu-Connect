"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Loader2, User, GraduationCap, CheckCircle, Mail, Phone, Chrome } from "lucide-react"

export function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    emailOtp: "",
    phoneOtp: "",
    userType: "student" as "student" | "faculty",
    agreeToTerms: false,
    instituteCode: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [emailOtpSent, setEmailOtpSent] = useState(false)
  const [phoneOtpSent, setPhoneOtpSent] = useState(false)
  const [emailVerified, setEmailVerified] = useState(false)
  const [phoneVerified, setPhoneVerified] = useState(false)
  const [registrationMethod, setRegistrationMethod] = useState<"email" | "phone" | "both">("both")
  const router = useRouter()

  const handleGoogleRegister = async () => {
    setIsLoading(true)
    setError("")

    try {
      if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
        throw new Error("Missing NEXT_PUBLIC_GOOGLE_CLIENT_ID")
      }

      if (typeof window !== "undefined" && window.google) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: handleGoogleCallback,
        })

        const container = document.createElement("div")
        document.body.appendChild(container)
        window.google.accounts.id.renderButton(container, {
          theme: "filled_blue",
          size: "large",
          text: "signup_with",
        })
        window.google.accounts.id.prompt()
      } else {
        setError("Google services not loaded. Please refresh and try again.")
      }
    } catch (err) {
      setError("Google registration failed. Please try again.")
      setIsLoading(false)
    }
  }

  const handleGoogleCallback = async (response: any) => {
    try {
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          credential: response.credential,
          userType: formData.userType,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem("authToken", data.token)
        if (formData.userType === "student") {
          router.push("/student/dashboard")
        } else {
          router.push("/faculty/dashboard")
        }
      } else {
        setError(data.message || "Google registration failed")
      }
    } catch (err) {
      setError("Google registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendEmailOTP = async () => {
    if (!formData.email) {
      setError("Please enter your email address")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          type: "register",
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setEmailOtpSent(true)
        setError("")
      } else {
        setError(data.message || "Failed to send email OTP. Please try again.")
      }
    } catch (err) {
      setError("Failed to send email OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendPhoneOTP = async () => {
    if (!formData.phone) {
      setError("Please enter your phone number")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: formData.phone,
          type: "register",
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setPhoneOtpSent(true)
        setError("")
      } else {
        setError(data.message || "Failed to send phone OTP. Please try again.")
      }
    } catch (err) {
      setError("Failed to send phone OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyEmailOTP = async () => {
    if (!formData.emailOtp) {
      setError("Please enter the email OTP")
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.emailOtp,
          type: "email",
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setEmailVerified(true)
        setError("")
      } else {
        setError(data.message || "Invalid email OTP. Please try again.")
      }
    } catch (err) {
      setError("Invalid email OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyPhoneOTP = async () => {
    if (!formData.phoneOtp) {
      setError("Please enter the phone OTP")
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: formData.phone,
          otp: formData.phoneOtp,
          type: "phone",
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setPhoneVerified(true)
        setError("")
      } else {
        setError(data.message || "Invalid phone OTP. Please try again.")
      }
    } catch (err) {
      setError("Invalid phone OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName) {
      return "Please fill in your name"
    }

    if (registrationMethod === "email" || registrationMethod === "both") {
      if (!formData.email) return "Please enter your email"
      if (!emailVerified) return "Please verify your email address"
    }

    if (registrationMethod === "phone" || registrationMethod === "both") {
      if (!formData.phone) return "Please enter your phone number"
      if (!phoneVerified) return "Please verify your phone number"
    }

    if (!formData.password) return "Please enter a password"
    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match"
    }
    if (formData.password.length < 8) {
      return "Password must be at least 8 characters long"
    }
    if (!formData.agreeToTerms) {
      return "Please agree to the terms and conditions"
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      setIsLoading(false)
      return
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: registrationMethod === "phone" ? null : formData.email,
          phone: registrationMethod === "email" ? null : formData.phone,
          password: formData.password,
          userType: formData.userType,
          instituteCode: formData.userType === "faculty" ? formData.instituteCode : null,
          registrationMethod,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess(true)
        setTimeout(() => {
          router.push("/auth/login")
        }, 2000)
      } else {
        setError(data.message || "Registration failed. Please try again.")
      }
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center space-y-4">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
        <h3 className="text-lg font-semibold">Registration Successful!</h3>
        <p className="text-muted-foreground">Your account has been created. Redirecting to login...</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* User Type Selection */}
      <div className="space-y-2">
        <Label>I am a:</Label>
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant={formData.userType === "student" ? "default" : "outline"}
            onClick={() => setFormData({ ...formData, userType: "student" })}
            className="flex items-center gap-2"
          >
            <User className="h-4 w-4" />
            Student
          </Button>
          <Button
            type="button"
            variant={formData.userType === "faculty" ? "default" : "outline"}
            onClick={() => setFormData({ ...formData, userType: "faculty" })}
            className="flex items-center gap-2"
          >
            <GraduationCap className="h-4 w-4" />
            Faculty
          </Button>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full bg-transparent"
        onClick={handleGoogleRegister}
        disabled={isLoading}
      >
        <Chrome className="mr-2 h-4 w-4" />
        Continue with Google
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or register with</span>
        </div>
      </div>

      <Tabs
        value={registrationMethod}
        onValueChange={(value) => setRegistrationMethod(value as "email" | "phone" | "both")}
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="email" className="flex items-center gap-1">
            <Mail className="h-3 w-3" />
            Email
          </TabsTrigger>
          <TabsTrigger value="phone" className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            Phone
          </TabsTrigger>
          <TabsTrigger value="both" className="text-xs">
            Both
          </TabsTrigger>
        </TabsList>

        <TabsContent value="email" className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Email with OTP Verification */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={emailVerified}
                />
                {!emailVerified && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSendEmailOTP}
                    disabled={isLoading || !formData.email}
                  >
                    {emailOtpSent ? "Resend" : "Send OTP"}
                  </Button>
                )}
                {emailVerified && (
                  <Button type="button" variant="outline" disabled>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </Button>
                )}
              </div>
            </div>

            {emailOtpSent && !emailVerified && (
              <div className="space-y-2">
                <Label htmlFor="emailOtp">Email OTP</Label>
                <div className="flex gap-2">
                  <Input
                    id="emailOtp"
                    placeholder="Enter 6-digit OTP"
                    value={formData.emailOtp}
                    onChange={(e) => setFormData({ ...formData, emailOtp: e.target.value })}
                    maxLength={6}
                  />
                  <Button type="button" onClick={handleVerifyEmailOTP} disabled={isLoading || !formData.emailOtp}>
                    Verify
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">OTP sent to {formData.email}</p>
              </div>
            )}

            {/* Institute Code (for Faculty) */}
            {formData.userType === "faculty" && (
              <div className="space-y-2">
                <Label htmlFor="instituteCode">Institute Code</Label>
                <Input
                  id="instituteCode"
                  placeholder="Enter institute verification code"
                  value={formData.instituteCode}
                  onChange={(e) => setFormData({ ...formData, instituteCode: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Contact your institution administrator for the verification code
                </p>
              </div>
            )}

            {/* Password Fields */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                I agree to the{" "}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading || !emailVerified}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="phone" className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Phone with OTP Verification */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex gap-2">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  disabled={phoneVerified}
                />
                {!phoneVerified && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSendPhoneOTP}
                    disabled={isLoading || !formData.phone}
                  >
                    {phoneOtpSent ? "Resend" : "Send OTP"}
                  </Button>
                )}
                {phoneVerified && (
                  <Button type="button" variant="outline" disabled>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </Button>
                )}
              </div>
            </div>

            {phoneOtpSent && !phoneVerified && (
              <div className="space-y-2">
                <Label htmlFor="phoneOtp">Phone OTP</Label>
                <div className="flex gap-2">
                  <Input
                    id="phoneOtp"
                    placeholder="Enter 6-digit OTP"
                    value={formData.phoneOtp}
                    onChange={(e) => setFormData({ ...formData, phoneOtp: e.target.value })}
                    maxLength={6}
                  />
                  <Button type="button" onClick={handleVerifyPhoneOTP} disabled={isLoading || !formData.phoneOtp}>
                    Verify
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">OTP sent to {formData.phone}</p>
              </div>
            )}

            {/* Institute Code (for Faculty) */}
            {formData.userType === "faculty" && (
              <div className="space-y-2">
                <Label htmlFor="instituteCode">Institute Code</Label>
                <Input
                  id="instituteCode"
                  placeholder="Enter institute verification code"
                  value={formData.instituteCode}
                  onChange={(e) => setFormData({ ...formData, instituteCode: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Contact your institution administrator for the verification code
                </p>
              </div>
            )}

            {/* Password Fields */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                I agree to the{" "}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading || !phoneVerified}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="both" className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Email with OTP Verification */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={emailVerified}
                />
                {!emailVerified && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSendEmailOTP}
                    disabled={isLoading || !formData.email}
                  >
                    {emailOtpSent ? "Resend" : "Send OTP"}
                  </Button>
                )}
                {emailVerified && (
                  <Button type="button" variant="outline" disabled>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </Button>
                )}
              </div>
            </div>

            {emailOtpSent && !emailVerified && (
              <div className="space-y-2">
                <Label htmlFor="emailOtp">Email OTP</Label>
                <div className="flex gap-2">
                  <Input
                    id="emailOtp"
                    placeholder="Enter 6-digit OTP"
                    value={formData.emailOtp}
                    onChange={(e) => setFormData({ ...formData, emailOtp: e.target.value })}
                    maxLength={6}
                  />
                  <Button type="button" onClick={handleVerifyEmailOTP} disabled={isLoading || !formData.emailOtp}>
                    Verify
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">OTP sent to {formData.email}</p>
              </div>
            )}

            {/* Phone with OTP Verification */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex gap-2">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  disabled={phoneVerified}
                />
                {!phoneVerified && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSendPhoneOTP}
                    disabled={isLoading || !formData.phone}
                  >
                    {phoneOtpSent ? "Resend" : "Send OTP"}
                  </Button>
                )}
                {phoneVerified && (
                  <Button type="button" variant="outline" disabled>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </Button>
                )}
              </div>
            </div>

            {phoneOtpSent && !phoneVerified && (
              <div className="space-y-2">
                <Label htmlFor="phoneOtp">Phone OTP</Label>
                <div className="flex gap-2">
                  <Input
                    id="phoneOtp"
                    placeholder="Enter 6-digit OTP"
                    value={formData.phoneOtp}
                    onChange={(e) => setFormData({ ...formData, phoneOtp: e.target.value })}
                    maxLength={6}
                  />
                  <Button type="button" onClick={handleVerifyPhoneOTP} disabled={isLoading || !formData.phoneOtp}>
                    Verify
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">OTP sent to {formData.phone}</p>
              </div>
            )}

            {/* Institute Code (for Faculty) */}
            {formData.userType === "faculty" && (
              <div className="space-y-2">
                <Label htmlFor="instituteCode">Institute Code</Label>
                <Input
                  id="instituteCode"
                  placeholder="Enter institute verification code"
                  value={formData.instituteCode}
                  onChange={(e) => setFormData({ ...formData, instituteCode: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Contact your institution administrator for the verification code
                </p>
              </div>
            )}

            {/* Password Fields */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                I agree to the{" "}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading || !emailVerified || !phoneVerified}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}
