"use client"

import { ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Component() {
  const data = [
    { name: "Basic", value: 1200, color: "#c7c6ff" },
    { name: "Starter", value: 3100, color: "#c7c6ff" },
    { name: "Pro", value: 4500, color: "#4a48ff" },
    { name: "Enterprise", value: 2900, color: "#4a48ff" },
  ]

  const maxValue = 6000

  return (
    <div className="bg-[#ffffff] p-8 rounded-2xl shadow-sm border border-[#e9eaeb] max-w-4xl mt-6 mb-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1c1c1e] mb-2">Platform Usage</h1>
          <p className="text-[#4c4c6d] text-lg">Active Users</p>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-[#1c1c1e] border-[#e9eaeb] bg-transparent">
                Last 30 days
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Last 7 days</DropdownMenuItem>
              <DropdownMenuItem>Last 30 days</DropdownMenuItem>
              <DropdownMenuItem>Last 90 days</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="text-[#4c4c6d]">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[#c7c6ff]"></div>
          <span className="text-[#4c4c6d] text-sm">Starter</span>
        </div>
      </div>

      {/* Chart */}
      <div className="flex">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between h-80 text-[#4c4c6d] text-sm py-2 pr-4">
          <span>6000</span>
          <span>5000</span>
          <span>4000</span>
          <span>3000</span>
          <span>2000</span>
          <span>1000</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="flex-1 relative">
          <div className="h-80 border-l border-b border-[#e9eaeb] pl-8 pr-4 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-full border-t border-[#e9eaeb]" />
              ))}
            </div>

            {/* Bars container */}
            <div className="flex items-end justify-between gap-8 h-full relative z-10 pb-2 ">
              {data.map((item, index) => (
                <div key={item.name} className="flex flex-col items-center relative bg-red-100">
                  {/* Callout for Starter */}
                  {item.name === "Starter" && (
                    <div className="absolute -top-16 bg-white border border-[#e9eaeb] rounded-lg px-3 py-2 shadow-sm whitespace-nowrap">
                      <div className="text-[#1c1c1e] font-semibold text-sm">{item.value} users</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#e9eaeb]"></div>
                    </div>
                  )}

                  {/* Bar */}
                  <div
                    className="w-8 rounded-t-lg"
                    style={{
                      height: `${(item.value / maxValue) * 270}px`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between gap-8 pt-3 pl-8 pr-4 text-black">
            {data.map((item) => (
              <div key={item.name} className="w-8 text-center">
                <div className="mt-2 text-sm text-center">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
