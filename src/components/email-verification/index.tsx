"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function EmailVerification() {
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode]
      newCode[index] = value
      setVerificationCode(newCode)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      prevInput?.focus()
    }
  }

  return (
    <div className="min-h-screen bg-[#ffffff] flex">
      {/* Left Panel */}
      <div className="flex-1 bg-[#2d68fe] rounded-3xl m-4 p-12 flex flex-col justify-between text-white relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d68fe] via-[#4a48ff] to-[#2d68fe] opacity-90"></div>

        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 border-2 border-[#2d68fe] rounded-full"></div>
                <div className="absolute top-1 left-1 w-4 h-4 border border-[#2d68fe] rounded-full"></div>
                <div className="absolute top-2 left-2 w-2 h-2 bg-[#2d68fe] rounded-full"></div>
              </div>
            </div>
            <span className="text-2xl font-semibold">AssistMindAI</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-1 flex items-center">
          <h1 className="text-5xl font-bold leading-tight">Never Miss a Call. Never Lose a Lead. Powered by AI.</h1>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-[#000000] mb-4">Verify your Email</h2>

          <p className="text-[#4c4c6d] mb-8 leading-relaxed">
            We've sent a 6-digit verification code to [user@example.com]. Please enter the code below to continue.
          </p>

          {/* Verification Code Inputs */}
          <div className="flex gap-3 mb-6">
            {verificationCode.map((digit, index) => (
              <Input
                key={index}
                id={`code-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-14 h-14 text-center text-xl font-semibold border-2 border-[#bbc0c3] rounded-xl focus:border-[#2d68fe] focus:ring-0"
              />
            ))}
          </div>

          {/* Resend Code */}
          <p className="text-[#4c4c6d] mb-8">
            Didn't receive your code?{" "}
            <button className="text-[#2d68fe] font-medium hover:underline">Resend code</button>
          </p>

          {/* Verify Button */}
          <Button className="w-full h-14 bg-[#2d68fe] hover:bg-[#4a48ff] text-white font-semibold rounded-xl text-lg">
            Verify & continue
          </Button>
        </div>
      </div>
    </div>
  )
}
