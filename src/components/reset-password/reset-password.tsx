"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"

export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    return (
        <div className="min-h-screen flex">
            {/* Left Side - Blue Gradient with Branding */}
            <div className="relative flex-1 flex flex-col video-bg">
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

            {/* Right Panel - Form */}
            <div className="flex-1 bg-white p-12 flex flex-col justify-center">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-[#212123]">Choose a new password</h2>
                        <p className="text-[#48484c] text-base">{"Don't worry, we'll help you get back in."}</p>
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                        {/* New Password Field */}
                        <div className="space-y-2">
                            <Label htmlFor="new-password" className="text-[#212123] font-medium">
                                Choose a new Password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="new-password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pr-10 h-12 border-[#d5d7da] bg-[#ffffff] text-[#212123] rounded-xl"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#48484c] hover:text-[#212123]"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="space-y-2">
                            <Label htmlFor="confirm-password" className="text-[#212123] font-medium">
                                Confirm Password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="confirm-password"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    className="pr-10 h-12 border-[#d5d7da] bg-[#ffffff] text-[#212123] rounded-xl"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#48484c] hover:text-[#212123]"
                                >
                                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Reset Button */}
                        <Button className="w-full h-12 bg-[#4a48ff] hover:bg-[#2d68fe] text-white font-medium rounded-xl">
                            Reset Password
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
