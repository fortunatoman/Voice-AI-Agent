import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ResetPasswordEmail() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex">
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

      {/* Right Panel - Reset Form */}
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-[#212123] text-3xl font-semibold">Reset Your password</h2>
            <p className="text-[#4f4f54] text-base">Don't worry, we'll help you get back in.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#212123] text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                className="h-12 px-4 border border-[#d5d7da] rounded-xl bg-[#ffffff] text-[#212123] placeholder:text-[#a4a7ae] focus:border-[#2d68fe] focus:ring-1 focus:ring-[#2d68fe]"
              />
            </div>

            <Button className="w-full h-12 bg-[#2d68fe] hover:bg-[#4a48ff] text-white font-medium rounded-xl transition-colors">
              Send Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
