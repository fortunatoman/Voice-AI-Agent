"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Copy,
  MoreHorizontal,
  ArrowLeft,
  ArrowRight,
  Info,
  ArrowUpDown,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Check } from "lucide-react";
import FilterDropdown from "./filter-dropdown"
import ExportOptionsPopover from "./export-options-popover"
// Dummy data for the table
const users = [
  {
    id: "1",
    name: "Dev Kooper",
    email: "devkooper@example.com",
    phone: "(647) 1255 125",
    plan: "Pro",
    usageTier: "medium",
    status: "Active",
    signupDate: "12 Apr, 2025",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    name: "Dev Kooper",
    email: "devkooper@example.com",
    phone: "(647) 1255 125",
    plan: "Enterprise",
    usageTier: "medium",
    status: "cancelled",
    signupDate: "12 Apr, 2025",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "3",
    name: "Dev Kooper",
    email: "devkooper@example.com",
    phone: "(647) 1255 125",
    plan: "Pro",
    usageTier: "medium",
    status: "Inactive",
    signupDate: "12 Apr, 2025",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    name: "Dev Kooper",
    email: "devkooper@example.com",
    phone: "(647) 1255 125",
    plan: "Basic",
    usageTier: "medium",
    status: "cancelled",
    signupDate: "12 Apr, 2025",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "5",
    name: "Dev Kooper",
    email: "devkooper@example.com",
    phone: "(647) 1255 125",
    plan: "Pro",
    usageTier: "medium",
    status: "Inactive",
    signupDate: "12 Apr, 2025",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "6",
    name: "Dev Kooper",
    email: "devkooper@example.com",
    phone: "(647) 1255 125",
    plan: "Enterprise",
    usageTier: "medium",
    status: "cancelled",
    signupDate: "12 Apr, 2025",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "7",
    name: "Dev Kooper",
    email: "devkooper@example.com",
    phone: "(647) 1255 125",
    plan: "Pro",
    usageTier: "medium",
    status: "Inactive",
    signupDate: "12 Apr, 2025",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "8",
    name: "Dev Kooper",
    email: "devkooper@example.com",
    phone: "(647) 1255 125",
    plan: "Pro",
    usageTier: "medium",
    status: "Inactive",
    signupDate: "12 Apr, 2025",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "9",
    name: "Dev Kooper",
    email: "devkooper@example.com",
    phone: "(647) 1255 125",
    plan: "Enterprise",
    usageTier: "medium",
    status: "cancelled",
    signupDate: "12 Apr, 2025",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export default function UserManagement() {
  const [currentPage, setCurrentPage] = useState(1)
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const router = useRouter();
  const totalPages = 10 // Example total pages

  const getPlanBadgeClass = (plan: string) => {
    switch (plan) {
      case "Pro":
        return "bg-badge-pro-bg text-badge-pro-text rounded-xl"
      case "Enterprise":
        return "bg-badge-enterprise-bg text-badge-enterprise-text rounded-xl"
      case "Basic":
        return "bg-badge-basic-bg text-badge-basic-text rounded-xl"
      default:
        return ""
    }
  }

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-badge-active-bg text-badge-active-text rounded-xl"
      case "cancelled":
        return "bg-badge-cancelled-bg text-badge-cancelled-text rounded-xl"
      case "Inactive":
        return "bg-badge-inactive-bg text-badge-inactive-text rounded-xl"
      default:
        return ""
    }
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 m-10">
      <div className="w-full bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-text-dark">Users Data</h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <div className="relative flex-1 w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-xl bg-light-gray-bg border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-text-dark"
            />
          </div>
          <Button className="bg-primary-blue text-white rounded-xl px-6 py-2 h-auto">
            <Search className="h-5 w-5" />
          </Button>
          <div className="flex gap-3 ml-auto">
          <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="rounded-xl px-4 py-2 h-auto border-d5d7da text-414651 bg-transparent">
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="p-0 bg-white rounded-xl shadow-lg w-64">
                <FilterDropdown />
              </PopoverContent>
            </Popover>
            <ExportOptionsPopover />
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <Table>
            <TableHeader className="bg-table-header-bg">
              <TableRow className="border-b border-gray-200">
                <TableHead className="px-4 py-3 text-left text-sm font-semibold text-text-dark">Name</TableHead>
                <TableHead className="px-4 py-3 text-left text-sm font-semibold text-text-dark">Email</TableHead>
                <TableHead className="px-4 py-3 text-left text-sm font-semibold text-text-dark">Phone</TableHead>
                <TableHead className="px-4 py-3 text-left text-sm font-semibold text-text-dark">
                  <div className="flex items-center gap-1">
                    Plan
                    <ArrowUpDown className="h-4 w-4 text-gray-500" />
                  </div>
                </TableHead>
                <TableHead className="px-4 py-3 text-left text-sm font-semibold text-text-dark">Usage tier</TableHead>
                <TableHead className="px-4 py-3 text-left text-sm font-semibold text-text-dark">Status</TableHead>
                <TableHead className="px-4 py-3 text-left text-sm font-semibold text-text-dark">
                  <div className="flex items-center gap-1">
                    Signup date
                    <ArrowUpDown className="h-4 w-4 text-gray-500" />
                  </div>
                </TableHead>
                <TableHead className="px-4 py-3 text-left text-sm font-semibold text-text-dark">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={user.id}
                  className={cn("border-b border-gray-200", index % 2 === 1 ? "bg-table-row-hover" : "")}
                >
                  <TableCell className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-text-dark">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-text-dark">{user.email}</TableCell>
                  <TableCell className="px-4 py-3 text-text-dark">{user.phone}</TableCell>
                  <TableCell className="px-4 py-3">
                    <Badge className={cn("rounded-md px-3 py-1 text-xs font-medium", getPlanBadgeClass(user.plan))}>
                      {user.plan}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-text-dark">{user.usageTier}</TableCell>
                  <TableCell className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Badge
                        className={cn("rounded-md px-3 py-1 text-xs font-medium", getStatusBadgeClass(user.status))}
                      >
                        {user.status}
                      </Badge>
                      {(user.status === "Active" || user.status === "Inactive") && (
                        <Info className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-text-dark">{user.signupDate}</TableCell>
                  <TableCell className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-gray-500 hover:bg-gray-200"
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy</span>
                      </Button>
                      <Popover open={openPopover === user.id} onOpenChange={open => setOpenPopover(open ? user.id : null)}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-full text-gray-500 hover:bg-gray-200"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">More actions</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="p-0 bg-white rounded-xl shadow-lg w-40">
                          <Button
                            variant="ghost"
                            className="w-full flex items-center justify-between px-3 py-2 text-gray-900 hover:bg-gray-100"
                            onClick={() => { setOpenPopover(null); router.push('/user-management/user'); }}
                          >
                            <span className="flex items-center">
                              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-2"><circle cx="12" cy="8" r="4" stroke="#888" strokeWidth="2"/><path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#888" strokeWidth="2"/></svg>
                              View User
                            </span>
                            <Check className="w-4 h-4 text-purple-500" />
                          </Button>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between mt-6">
          <Button variant="outline" className="rounded-xl px-4 py-2 h-auto border-d5d7da text-414651 bg-transparent">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <div className="flex gap-2">
            {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
              <Button
                key={index}
                variant="ghost"
                className={cn(
                  "rounded-xl h-9 w-9 text-text-dark",
                  page === currentPage && "bg-primary-blue text-white hover:bg-primary-blue hover:text-white",
                  page === "..." && "pointer-events-none",
                )}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button variant="outline" className="rounded-xl px-4 py-2 h-auto border-d5d7da text-414651 bg-transparent">
            Next
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
