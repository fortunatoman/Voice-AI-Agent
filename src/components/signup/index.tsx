"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Blue Gradient */}
      <div className="relative flex-1 hidden lg:flex flex-col video-bg ">
        {/* Logo */}
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="background.mp4" type="video/mp4" />
        </video>

        {/* Main Heading */}
        <div className="flex-1 p-12 flex flex-col justify-between rounded-r-3xl z-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo_sign.svg" width={150} height={40} alt="logo" />
          </div>

          {/* Main Heading */}
          <div className="flex-1 flex items-center">
            <h1 className="text-white text-5xl font-bold leading-tight">
              Never Miss a Call. Never Lose a Lead. Powered by AI.
            </h1>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-12">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-[#1c1c1e]">Create your Account</h2>
            <p className="text-[#4f4f54]">Create your admin account to manage everything</p>
          </div>

          <form className="space-y-4">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-[#1c1c1e] font-medium">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="First name"
                  className="border-[#d5d7da] focus:border-[#4a48ff] focus:ring-[#4a48ff] rounded-xl text-black"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-[#1c1c1e] font-medium">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Last name"
                  className="border-[#d5d7da] focus:border-[#4a48ff] focus:ring-[#4a48ff] rounded-xl text-black"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#1c1c1e] font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                className="border-[#d5d7da] focus:border-[#4a48ff] focus:ring-[#4a48ff] rounded-xl text-black"
              />
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="company" className="text-[#1c1c1e] font-medium">
                Company name
              </Label>
              <Input
                id="company"
                placeholder="Company name"
                className="border-[#d5d7da] focus:border-[#4a48ff] focus:ring-[#4a48ff] rounded-xl text-black"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#1c1c1e] font-medium">
                Phone number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Phone number"
                className="border-[#d5d7da] focus:border-[#4a48ff] focus:ring-[#4a48ff] rounded-xl text-black"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#1c1c1e] font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  className="border-[#d5d7da] focus:border-[#4a48ff] focus:ring-[#4a48ff] pr-10 rounded-xl text-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4f4f54] hover:text-[#1c1c1e]"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Terms and Privacy */}
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" className="mt-1" />
              <Label htmlFor="terms" className="text-sm text-[#4f4f54] leading-relaxed">
                By signing up, I agree to the{" "}
                <Link href="#" className="text-[#4a48ff] hover:underline">
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-[#4a48ff] hover:underline">
                  Terms of service
                </Link>
              </Label>
            </div>

            {/* Sign Up Button */}
            <Button className="w-full bg-[#4a48ff] hover:bg-[#2d68fe] text-white font-medium py-3 rounded-xl">Sign up</Button>

            {/* Continue with Google */}
            <Button
              variant="outline"
              className="w-full border-[#d5d7da] text-[#1c1c1e] font-medium py-3 bg-transparent rounded-xl"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            {/* Sign In Link */}
            <p className="text-center text-[#4f4f54]">
              Already have an Account?{" "}
              <Link href="/signin" className="text-[#ff472e] hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
