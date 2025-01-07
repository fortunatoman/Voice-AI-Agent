"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(true)

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Blue Gradient with Branding */}
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

            {/* Right Side - Login Form */}
            <div className="flex-1 bg-[#ffffff] p-12 flex items-center justify-center">
                <div className="w-full max-w-md space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-[#212123]">Sign in to your Account</h2>
                        <p className="text-[#4f4f54]">Sign in to your account</p>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-[#212123] font-medium">
                                Email Address
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email address"
                                className="h-12 rounded-xl border-[#d5d7da] bg-[#ffffff] text-[#212123] placeholder:text-[#a4a7ae]"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-[#212123] font-medium">
                                Password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••••••"
                                    className="h-12 rounded-xl border-[#d5d7da] bg-[#ffffff] text-[#212123] placeholder:text-[#a4a7ae] pr-12"
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 h-auto p-0 hover:bg-transparent"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4 text-[#4f4f54]" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-[#4f4f54]" />
                                    )}
                                </Button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="remember"
                                    checked={rememberMe}
                                    onCheckedChange={() => {
                                        setRememberMe(!rememberMe)
                                    }}
                                    className="border-[#4a48ff] data-[state=checked]:bg-[#4a48ff] data-[state=checked]:border-[#4a48ff]"
                                />
                                <Label htmlFor="remember" className="text-[#212123] font-medium">
                                    Remember me
                                </Label>
                            </div>
                            <Link href="/reset-password-email" className="text-[#4a48ff] font-medium hover:underline">
                                Forget Password
                            </Link>
                        </div>

                        {/* Sign In Button */}
                        <Button className="w-full rounded-xl h-12 bg-[#4a48ff] hover:bg-[#2b3674] text-white font-medium">Sign in</Button>

                        {/* Continue with Google */}
                        <Button
                            variant="outline"
                            className="w-full rounded-xl h-12 border-[#d5d7da] text-[#212123] font-medium hover:bg-[#ffffff] bg-transparent"
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

                        {/* Sign Up Link */}
                        <p className="text-center text-[#4f4f54]">
                            {"Don't have an Account? "}
                            <Link href="/signup" className="text-[#ff472e] font-medium hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
