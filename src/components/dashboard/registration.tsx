import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

interface Registration {
  id: number
  name: string
  avatar: string
  signupDate: string
  email: string
  plan: "Basic" | "Enterprise" | "Pro"
}

const registrations: Registration[] = [
  {
    id: 1,
    name: "Dev Kooper",
    avatar: "/placeholder.svg?height=32&width=32",
    signupDate: "12 Apr, 2025",
    email: "devkooper@gmail.com",
    plan: "Basic",
  },
  {
    id: 2,
    name: "Dev Kooper",
    avatar: "/placeholder.svg?height=32&width=32",
    signupDate: "12 Apr, 2025",
    email: "devkooper@gmail.com",
    plan: "Enterprise",
  },
  {
    id: 3,
    name: "Dev Kooper",
    avatar: "/placeholder.svg?height=32&width=32",
    signupDate: "12 Apr, 2025",
    email: "devkooper@gmail.com",
    plan: "Pro",
  },
  {
    id: 4,
    name: "Dev Kooper",
    avatar: "/placeholder.svg?height=32&width=32",
    signupDate: "12 Apr, 2025",
    email: "devkooper@gmail.com",
    plan: "Enterprise",
  },
  {
    id: 5,
    name: "Dev Kooper",
    avatar: "/placeholder.svg?height=32&width=32",
    signupDate: "12 Apr, 2025",
    email: "devkooper@gmail.com",
    plan: "Pro",
  },
]

export default function RecentRegistrationsCard() {
  return (
    <Card className="w-full rounded-xl shadow-lg bg-[#ffffff]">
      <CardHeader className="flex flex-row items-center justify-between p-6 pb-4">
        <CardTitle className="text-2xl font-semibold text-[#000000]">Recent Registrations</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-5 w-5 text-[#979797]" />
          <span className="sr-only">More options</span>
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#f1f1f4] border-b border-gray-200">
              <TableHead className="text-[#4b5563] font-medium text-sm pl-6 py-3">Name</TableHead>
              <TableHead className="text-[#4b5563] font-medium text-sm py-3">Signup date</TableHead>
              <TableHead className="text-[#4b5563] font-medium text-sm py-3">Email</TableHead>
              <TableHead className="text-[#4b5563] font-medium text-sm py-3">Plan</TableHead>
              <TableHead className="text-[#4b5563] font-medium text-sm pr-6 py-3 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registrations.map((registration) => (
              <TableRow key={registration.id} className="border-b border-gray-100 last:border-b-0">
                <TableCell className="flex items-center gap-3 py-4 pl-6">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={registration.avatar || "/placeholder.svg"} alt={registration.name} />
                    <AvatarFallback>
                      {registration.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-[#1c1c1e] font-medium text-sm">{registration.name}</span>
                </TableCell>
                <TableCell className="text-[#979797] text-sm py-4">{registration.signupDate}</TableCell>
                <TableCell className="text-[#1c1c1e] text-sm py-4">{registration.email}</TableCell>
                <TableCell className="py-4">
                  {registration.plan === "Basic" && (
                    <Badge className="bg-[#ededff] text-[#1d4ed8] rounded-full px-3 py-1 text-xs font-medium">
                      Basic
                    </Badge>
                  )}
                  {registration.plan === "Enterprise" && (
                    <Badge className="bg-[#f0ffd6] text-[#537617] rounded-full px-3 py-1 text-xs font-medium">
                      Enterprise
                    </Badge>
                  )}
                  {registration.plan === "Pro" && (
                    <Badge className="bg-[#ffdbfd] text-[#b661b1] rounded-full px-3 py-1 text-xs font-medium">
                      Pro
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right pr-6 py-4">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-5 w-5 text-[#979797]" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
