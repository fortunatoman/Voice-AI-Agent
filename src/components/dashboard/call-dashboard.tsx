import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"
import { DonutChart } from "./donut-chart"

export default function CallDashboardCard() {
  const inboundCalls = 3100
  const outboundCalls = 2145
  const currentCalls = 231 // This is the number displayed in the center of the donut chart

  return (
    <Card className="w-full rounded-xl shadow-lg overflow-hidden bg-[#ffffff]">
      <CardHeader className="flex flex-row items-center justify-between p-6 pb-4">
        <CardTitle className="text-xl font-semibold text-[#1c1c1e]">Inbound/Outbound Calls</CardTitle>
        <MoreHorizontal className="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-6 pt-0">
        <DonutChart
          inbound={inboundCalls}
          outbound={outboundCalls}
          centerValue={currentCalls}
          inboundColor="#4a48ff"
          outboundColor="#ececff"
        />
        <div className="mt-6 space-y-2 w-full px-4">
          <div className="flex items-center gap-2 text-base text-[#000000]">
            <span className="w-3 h-3 rounded-full bg-[#4a48ff]" />
            Inbound ({inboundCalls.toLocaleString()})
          </div>
          <div className="flex items-center gap-2 text-base text-[#000000]">
            <span className="w-3 h-3 rounded-full bg-[#ececff]" />
            Outbound ({outboundCalls.toLocaleString()})
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
