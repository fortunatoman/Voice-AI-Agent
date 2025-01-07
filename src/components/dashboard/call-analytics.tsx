"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MoreHorizontal } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
  { date: "Apr 1", value: 0 },
  { date: "Apr 2", value: 50 },
  { date: "Apr 3", value: 80 },
  { date: "Apr 4", value: 120 },
  { date: "Apr 5", value: 140 },
  { date: "Apr 6", value: 130 },
  { date: "Apr 7", value: 150 },
  { date: "Apr 8", value: 200 },
  { date: "Apr 9", value: 280 },
  { date: "Apr 10", value: 300 },
  { date: "Apr 11", value: 320 },
  { date: "Apr 12", value: 280 },
  { date: "Apr 13", value: 250 },
  { date: "Apr 14", value: 220 },
  { date: "Apr 15", value: 240 },
  { date: "Apr 16", value: 280 },
  { date: "Apr 17", value: 320 },
  { date: "Apr 18", value: 380 },
  { date: "Apr 19", value: 420 },
  { date: "Apr 20", value: 450 },
  { date: "Apr 21", value: 480 },
  { date: "Apr 22", value: 460 },
  { date: "Apr 23", value: 440 },
  { date: "Apr 24", value: 420 },
  { date: "Apr 25", value: 450 },
  { date: "Apr 26", value: 480 },
  { date: "Apr 27", value: 460 },
  { date: "Apr 28", value: 440 },
  { date: "Apr 29", value: 420 },
  { date: "Apr 30", value: 400 },
]

export default function CallAnalytics() {
  const [activeTab, setActiveTab] = useState("Inbound")

  return (
    <div className="g-[#f5f5f5] lg:pt-6 lg:pr-6 lg:pb-6 shadow-sm" >
      <Card className="max-w-6xl mx-auto bg-[#ffffff] border-0 shadow-sm rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-8 pb-6">
          <h1 className="text-3xl font-semibold text-[#1c1c1e]">Call Analytics</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#f6f6f6] rounded-xl px-4 py-2">
              <span className="text-[#1c1c1e] font-medium">May</span>
              <Calendar className="w-4 h-4 text-[#4a48ff]" />
            </div>
            <Button variant="ghost" size="icon" className="rounded-xl">
              <MoreHorizontal className="w-5 h-5 text-[#1c1c1e]" />
            </Button>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="px-8 pb-8">
          <div className="flex gap-2">
            {["Inbound", "Outbound", "Combined"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-4 rounded-2xl font-medium transition-all duration-200 ${
                  activeTab === tab ? "bg-[#f6f6f6] text-[#1c1c1e]" : "text-[#38383c] hover:bg-[#f6f6f6]/50"
                }`}
              >
                {activeTab === tab && (
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-12 h-6 bg-[#4a48ff] rounded-full flex items-center justify-end pr-1">
                      <div className="w-5 h-5 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                )}
                <span className="block">{tab}</span>
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#4a48ff] rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="px-8 pb-8">
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4a48ff" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#4a48ff" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e1e3ea" strokeOpacity={0.5} />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#38383c", fontSize: 12 }}
                  interval="preserveStartEnd"
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#38383c", fontSize: 12 }}
                  domain={[0, 500]}
                  ticks={[0, 100, 200, 300, 400, 500]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f6f6f7ff",
                    border: "none",
                    borderRadius: "12px",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                  formatter={(value) => [`${value}`, ""]}
                  labelStyle={{ display: "none" }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#4a48ff"
                  strokeWidth={3}
                  fill="url(#colorGradient)"
                  dot={false}
                  activeDot={{
                    r: 6,
                    fill: "#4a48ff",
                    stroke: "#ffffff",
                    strokeWidth: 3,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </div>
  )
}
