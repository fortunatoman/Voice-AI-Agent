import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronDown, MoreHorizontal } from "lucide-react"

export default function SystemHealth() {
  return (
    <div className="w-full ">
      <Card className="rounded-xl shadow-lg bg-[#ffffff] p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#000000]">System Health</h2>
            <div className="flex items-center gap-2 text-[#4c4c6d]">
              <CheckCircle2 className="w-5 h-5 text-[#34c759]" />
              <span className="text-sm">All systems operational</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-1 text-[#4c4c6d] border-[#e1e3ea] bg-transparent"
                >
                  Last 30 days
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                <DropdownMenuItem>Last 90 days</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="text-[#4c4c6d]">
              <MoreHorizontal className="w-5 h-5" />
              <span className="sr-only">More options</span>
            </Button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#000000]">99.8%</div>
            <div className="text-sm text-[#4c4c6d]">Uptime last 24h</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#000000]">245ms</div>
            <div className="text-sm text-[#4c4c6d]">Average latency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#000000]">468ms</div>
            <div className="text-sm text-[#4c4c6d]">Peak latency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#000000]">120ms</div>
            <div className="text-sm text-[#4c4c6d]">Database query time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#000000]">251ms</div>
            <div className="text-sm text-[#4c4c6d]">Avg. latency (7d)</div>
          </div>
        </div>

        {/* Chart */}
        <div className="relative h-[300px] w-full">
          <svg viewBox="0 0 850 300" preserveAspectRatio="none" className="w-full h-full">
            {/* Y-axis grid lines and labels */}
            <line x1="50" y1="0" x2="850" y2="0" stroke="#e1e3ea" strokeDasharray="2 2" />
            <text x="40" y="10" textAnchor="end" fill="#4c4c6d" fontSize="14">
              2000
            </text>
            <line x1="50" y1="150" x2="850" y2="150" stroke="#e1e3ea" strokeDasharray="2 2" />
            <text x="40" y="160" textAnchor="end" fill="#4c4c6d" fontSize="14">
              1000
            </text>
            <line x1="50" y1="300" x2="850" y2="300" stroke="#e1e3ea" strokeDasharray="2 2" />
            <text x="40" y="290" textAnchor="end" fill="#4c4c6d" fontSize="14">
              0
            </text>

            {/* Vertical grid lines */}
            <line x1="150" y1="0" x2="150" y2="300" stroke="#e1e3ea" strokeDasharray="2 2" />
            <line x1="250" y1="0" x2="250" y2="300" stroke="#e1e3ea" strokeDasharray="2 2" />
            <line x1="350" y1="0" x2="350" y2="300" stroke="#e1e3ea" strokeDasharray="2 2" />
            <line x1="450" y1="0" x2="450" y2="300" stroke="#e1e3ea" strokeDasharray="2 2" />
            <line x1="550" y1="0" x2="550" y2="300" stroke="#e1e3ea" strokeDasharray="2 2" />
            <line x1="650" y1="0" x2="650" y2="300" stroke="#e1e3ea" strokeDasharray="2 2" />
            <line x1="750" y1="0" x2="750" y2="300" stroke="#e1e3ea" strokeDasharray="2 2" />

            {/* 1500ms threshold line */}
            <line x1="50" y1="75" x2="850" y2="75" stroke="#000000" strokeDasharray="4 4" />
            <text x="800" y="65" fill="#ef4444" fontSize="14" fontWeight="bold">
              1500ms
            </text>

            {/* Chart area fill */}
            <polygon
              points="50,300 50,290 150,190 250,250 350,150 450,50 550,200 650,100 750,180 850,290 850,300"
              fill="#4a48ff"
              fillOpacity="0.1"
            />

            {/* Chart line */}
            <path
              d="M50,290 L150,190 L250,250 L350,150 L450,50 L550,200 L650,100 L750,180 L850,290"
              fill="none"
              stroke="#4a48ff"
              strokeWidth="2"
            />
          </svg>
        </div>
      </Card>
    </div>
  )
}
