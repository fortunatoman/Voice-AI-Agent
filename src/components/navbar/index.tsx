"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Search,
    Bell,
    Moon,
    MoreHorizontal,
    TrendingUp,
    TrendingDown,
    User,
    Users,
    Bot,
    DollarSign,
    Clock,
    ChevronDown,
    AlertTriangle,
    AlertCircle,
    CreditCard,
    Shield,
    Lock,
    Eye,
    MessageCircleMore,
    LayoutGrid,
    CalendarCheck,
    Network,
    WalletMinimal,
    Mail,
    Settings,
    NotebookText,
    FileSearch
} from "lucide-react"
import { useRouter, usePathname } from "next/navigation";
export default function NavBar() {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <div>
            <div className="p-6">
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" width={200} height={30} />
                </div>
            </div>

            <nav className="flex-1 px-4">
                <div className="space-y-1">
                    <div className="text-xs font-medium text-[#6c6c75] mb-3 px-2">Operations</div>
                    <Button variant="ghost" className={`w-full justify-start rounded-xl ${pathname.includes("/dashboard") ? "bg-[#4a48ff] text-white hover:bg-[#3b3acc]" : "text-[#4b5563] hover:bg-[#f5f5f5]"}`}
                        onClick={() => router.push('/dashboard')}>
                        <LayoutGrid className="w-4 h-4 mr-3" />
                        Dashboard
                    </Button>
                    <Button variant="ghost" className={`w-full justify-start rounded-xl  ${pathname.includes("/user-management") ? "bg-[#4a48ff] text-white hover:bg-[#3b3acc]" : "text-[#4b5563] hover:bg-[#f5f5f5]"}`}
                        onClick={() => router.push('/user-management')}>
                        <User className="w-4 h-4 mr-3" />
                        User Management
                    </Button>
                    <Button variant="ghost" className={`w-full justify-start rounded-xl  ${pathname.includes("/agents-monitoring") ? "bg-[#4a48ff] text-white hover:bg-[#3b3acc]" : "text-[#4b5563] hover:bg-[#f5f5f5]"}`}
                        onClick={() => router.push('/agents-monitoring')}>
                        <Users className="w-4 h-4 mr-3" />
                        Agents Monitoring
                    </Button>
                    <Button variant="ghost" className={`w-full justify-start rounded-xl  ${pathname.includes("/subscription-management") ? "bg-[#4a48ff] text-white hover:bg-[#3b3acc]" : "text-[#4b5563] hover:bg-[#f5f5f5]"}`}
                        onClick={() => router.push('/subscription-management')}>
                        <CalendarCheck className="w-4 h-4 mr-3" />
                        Subscription Management
                    </Button>
                    <Button variant="ghost" className={`w-full justify-start rounded-xl ${pathname.includes("/prompts-management") ? "bg-[#4a48ff] text-white hover:bg-[#3b3acc]" : "text-[#4b5563] hover:bg-[#f5f5f5]"}`}
                        onClick={() => router.push('/prompts-management')}>
                        <MessageCircleMore className="w-4 h-4 mr-3" />
                        Prompts Management
                    </Button>

                    <div className="text-xs font-medium text-[#6c6c75] mb-3 px-2 mt-6">Configurations</div>
                    <Button variant="ghost" className={`w-full justify-start rounded-xl  ${pathname.includes("/integrations") ? "bg-[#4a48ff] text-white hover:bg-[#3b3acc]" : "text-[#4b5563] hover:bg-[#f5f5f5]"}`}
                        onClick={() => router.push('/integrations')}>
                        <Network className="w-4 h-4 mr-3" />
                        Integrations
                    </Button>
                    <Button variant="ghost" className={`w-full justify-start rounded-xl  ${pathname.includes("/pricing-plans") ? "bg-[#4a48ff] text-white hover:bg-[#3b3acc]" : "text-[#4b5563] hover:bg-[#f5f5f5]"}`}
                        onClick={() => router.push('/pricing-plans')}>
                        <WalletMinimal className="w-4 h-4 mr-3" />
                        Pricing Plans
                    </Button>
                    <Button variant="ghost" className={`w-full justify-start rounded-xl  ${pathname.includes("/email-management") ? "bg-[#4a48ff] text-white hover:bg-[#3b3acc]" : "text-[#4b5563] hover:bg-[#f5f5f5]"}`}
                        onClick={() => router.push('/email-management')}>
                        <Mail className="w-4 h-4 mr-3" />
                        Email Management
                    </Button>
                    <Button variant="ghost" className={`w-full justify-start rounded-xl ${pathname.includes("/settings") ? "bg-[#4a48ff] text-white hover:bg-[#3b3acc]" : "text-[#4b5563] hover:bg-[#f5f5f5]"}`}
                        onClick={() => router.push('/settings')}>
                        <Settings className="w-4 h-4 mr-3" />
                        Settings
                    </Button>

                    <div className="text-xs font-medium text-[#6c6c75] mb-3 px-2 mt-6">Security</div>
                    <Button variant="ghost" className={`w-full justify-start rounded-xl ${pathname.includes("/audit-logs") ? "bg-[#4a48ff] text-white hover:bg-[#3b3acc]" : "text-[#4b5563] hover:bg-[#f5f5f5]"}`}
                        onClick={() => router.push('/audit-logs')}>
                        <FileSearch className="w-4 h-4 mr-3" />
                        Audit Logs
                    </Button>
                </div>
            </nav>
        </div>
    )
}