import type React from "react"

interface DonutChartProps {
  inbound: number
  outbound: number
  centerValue: number
  inboundColor?: string
  outboundColor?: string
  centerLabel?: string // Add this line
}

export const DonutChart: React.FC<DonutChartProps> = ({
  inbound,
  outbound,
  centerValue,
  inboundColor = "#4a48ff", // Figma color
  outboundColor = "#ececff", // Figma color
  centerLabel,
}) => {
  const total = inbound + outbound
  const inboundPercentage = total > 0 ? (inbound / total) * 100 : 0
  const outboundPercentage = total > 0 ? (outbound / total) * 100 : 0

  const radius = 70
  const strokeWidth = 20
  const circumference = 2 * Math.PI * radius

  const inboundDashoffset = circumference * (1 - inboundPercentage / 100)
  const outboundDashoffset = circumference * (1 - outboundPercentage / 100)

  return (
    <div className="relative flex items-center justify-center w-[180px] h-[180px]">
      <svg className="w-full h-full" viewBox="0 0 180 180">
        <circle
          className="transform -rotate-90 origin-center"
          cx="90"
          cy="90"
          r={radius}
          fill="transparent"
          stroke={outboundColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={inboundDashoffset} // Outbound segment starts after inbound
        />
        <circle
          className="transform -rotate-90 origin-center"
          cx="90"
          cy="90"
          r={radius}
          fill="transparent"
          stroke={inboundColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - inboundPercentage / 100)}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center w-full h-full top-0 left-0 text-center">
        <span className="text-3xl font-bold text-[#000000]">{centerValue}</span>
        {centerLabel && (
          <span className="text-xs text-gray-500 mt-1">{centerLabel}</span>
        )}
      </div>
    </div>
  )
}
