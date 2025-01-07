"use client"

import {
    Search,
    Bell,
    Moon,
    MoreHorizontal,
    TrendingUp,
    TrendingDown,
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
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React, { useState, useRef } from "react";

export default function Header() {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const handleMenuToggle = (index: number) => {
      setOpenMenuIndex(openMenuIndex === index ? null : index);
    };

    return (
        <header className="bg-white border-b border-[#e9eaeb] px-6 py-4 text-black">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6c6c75] w-4 h-4" />
                        <Input placeholder="Search" className="pl-10 w-80 bg-[#f5f5f5] border-0 rounded-xl" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <Moon className="w-5 h-5 text-[#6c6c75]" />
                    </Button>
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="w-8 h-8 text-[#6c6c75]" />
                        <div className="absolute top-1 right-1 w-[17px] h-[17px] rounded-3xl bg-[#4a48ff] text-white flex justify-center items-center">
                            2
                        </div>
                    </Button>
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="/avatar.png" />
                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>

    )
}