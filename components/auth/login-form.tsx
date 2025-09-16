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
import { Eye, EyeOff, Loader2, User, GraduationCap, Mail, Phone, Chrome } from "lucide-react"

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    otp: "",
    rememberMe: false,
    userType: "student" as "student" | "faculty",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email")
  const router = useRouter()

  const handleGoogleLogin = async () => {
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
          text: "continue_with",
        })
        window.google.accounts.id.prompt()
      } else {
        setError("Google services not loaded. Please refresh and try again.")
      }
    } catch (err) {
      setError("Google login failed. Please try again.")
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
        setError(data.message || "Google login failed")
      }
    } catch (err) {
      setError("Google login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendOTP = async () => {
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
          type: "login",
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setOtpSent(true)
        setError("")
      } else {
        setError(data.message || "Failed to send OTP. Please try again.")
      }
    } catch (err) {
      setError("Failed to send OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const endpoint = "/api/auth/login"
      const body: any = {
        userType: formData.userType,
      }

      if (loginMethod === "email") {
        if (!formData.email || !formData.password) {
          setError("Please fill in all required fields")
          setIsLoading(false)
          return
        }
        body.email = formData.email
        body.password = formData.password
        body.method = "email"
      } else {
        if (!formData.phone || !formData.otp || !otpSent) {
          setError("Please enter phone number and verify OTP")
          setIsLoading(false)
          return
        }
        body.phone = formData.phone
        body.otp = formData.otp
        body.method = "phone"
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem("authToken", data.token)
        if (formData.rememberMe) {
          localStorage.setItem("rememberUser", "true")
        }

        if (formData.userType === "student") {
          router.push("/student/dashboard")
        } else {
          router.push("/faculty/dashboard")
        }
      } else {
        setError(data.message || "Login failed. Please check your credentials.")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
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
        onClick={handleGoogleLogin}
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
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <Tabs value={loginMethod} onValueChange={(value) => setLoginMethod(value as "email" | "phone")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email
          </TabsTrigger>
          <TabsTrigger value="phone" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Phone
          </TabsTrigger>
        </TabsList>

        <TabsContent value="email" className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked as boolean })}
              />
              <Label htmlFor="remember" className="text-sm">
                Remember me
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In with Email"
              )}
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="phone" className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            {!otpSent ? (
              <Button type="button" className="w-full" onClick={handleSendOTP} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending OTP...
                  </>
                ) : (
                  "Send OTP"
                )}
              </Button>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={formData.otp}
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                    maxLength={6}
                    required
                  />
                  <p className="text-xs text-muted-foreground">OTP sent to {formData.phone}</p>
                </div>

                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSendOTP}
                    disabled={isLoading}
                    className="flex-1 bg-transparent"
                  >
                    Resend OTP
                  </Button>
                  <Button type="submit" className="flex-1" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      "Verify & Sign In"
                    )}
                  </Button>
                </div>
              </>
            )}
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}
