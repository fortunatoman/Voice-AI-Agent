import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UpdateSuccess() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center space-y-8">
        {/* Success Badge */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-[#34c759] rounded-full flex items-center justify-center relative">
              {/* Star shape background */}
              <div
                className="absolute inset-0 bg-[#34c759]"
                style={{
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              ></div>
              {/* Checkmark */}
              <Check className="w-8 h-8 text-white relative z-10" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-[#000000] leading-tight">Your password has been updated!</h1>

        {/* Subtext */}
        <p className="text-lg text-[#181818] opacity-70">🎉 Password updated successfully. You can now sign in.</p>

        {/* Sign In Button */}
        <div className="pt-4">
          <Button
            className="w-full bg-[#2d68fe] hover:bg-[#2d68fe]/90 text-white font-semibold py-4 px-8 rounded-2xl text-lg h-14"
            size="lg"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  )
}
