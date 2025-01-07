import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, MoreVertical, CreditCard, UserCog, Bell, Clock } from "lucide-react"

export default function ImportantAlert() {
  const alerts = [
    {
      id: 1,
      count: 5,
      title: "Failed Webhooks Count",
      time: "Last 24h",
      icon: AlertTriangle,
      iconBg: "#ffeaea",
      iconColor: "#ef4444",
    },
    {
      id: 2,
      count: 54,
      title: "Agent Timeouts",
      time: "Last 24h",
      icon: AlertTriangle,
      iconBg: "#fff1da",
      iconColor: "#f59e0b",
    },
    {
      id: 3,
      count: 3,
      title: "Payment Failures",
      time: "Last 7d",
      icon: CreditCard,
      iconBg: "#ffeaea",
      iconColor: "#ef4444",
    },
    {
      id: 4,
      count: 2,
      title: "Suspicious login attempts",
      time: "Last 24h",
      icon: UserCog, // Placeholder for incognito hat
      iconBg: "#eeeeff",
      iconColor: "#4a48ff",
    },
    {
      id: 5,
      count: 5,
      title: "Expiring Trials (Basic)",
      time: "Next 7 days",
      icon: Bell,
      iconBg: "#fff1da",
      iconColor: "#f59e0b",
    },
    {
      id: 6,
      count: 10,
      title: "Expiring Trials (Pro)",
      time: "Next 7 days",
      icon: Bell,
      iconBg: "#fff1da",
      iconColor: "#f59e0b",
    },
    {
      id: 7,
      count: 0,
      title: "Service downtime",
      time: "Last 24h",
      icon: Clock,
      iconBg: "#eeeeff",
      iconColor: "#1d4ed8",
    },
  ]

  return (
    <div className=" w-full mt-5 min-w-[400px] mt-5 lg:mt-0">
      <Card className="w-full rounded-2xl shadow-lg bg-[#ffffff]">
        <CardHeader className="flex flex-row items-center justify-between px-6 py-4">
          <CardTitle className="text-xl font-semibold text-[#000000]">Important Alerts</CardTitle>
          <Button variant="ghost" size="icon" className="text-[#4f4f54]">
            <MoreVertical className="h-5 w-5" />
            <span className="sr-only">More options</span>
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          {alerts.map((alert, index) => (
            <div
              key={alert.id}
              className={`flex items-center justify-between px-6 py-4 ${
                index < alerts.length - 1 ? "border-b border-[#e9eaeb]" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-[#1c1c1e] w-10 text-center">{alert.count}</div>
                <div>
                  <div className="text-base font-medium text-[#212123]">{alert.title}</div>
                  <div className="text-sm text-[#4f4f54]">{alert.time}</div>
                </div>
              </div>
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full"
                style={{ backgroundColor: alert.iconBg }}
              >
                <alert.icon className="h-5 w-5" style={{ color: alert.iconColor }} />
              </div>
            </div>
          ))}
          <div className="p-4 text-center">
            <Button variant="link" className="text-[#4a48ff] font-medium text-base">
              View all
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
