"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CallAnalytcis from "./call-analytics"
import PlatformUsage from "./platform-usage"
import RecentRegistrationsCard from "./registration"
import NavBar from "../navbar"
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
    SlidersHorizontal
} from "lucide-react"
import SystemHealth from "./system-health"
import ImportantAlert from "./import-alerts"
import { DonutChart } from "./donut-chart"
import CallDashboardCard from "./call-dashboard"
import HeatmapUsage from "./heatmap-usage"
import Header from "../header"

export default function Dashboard() {


    return (
        <div className="min-h-screen bg-[#f6f6f6] flex">
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                {/* Dashboard Content */}
                <main className="flex-1 p-6 space-y-6">
                    {/* Welcome Section */}
                    <div className="flex lg:flex-row flex-col items-center justify-between">
                        <h1 className="text-2xl font-semibold text-[#1c1c1e]">Welcome back, Alex! 👋</h1>
                        <div className="flex items-center gap-2 bg-white rounded-xl p-2">
                            <Button variant="default" size="sm" className="text-[#4b5563] bg-transparent rounded-xl bg-gray-100">
                                Daily
                            </Button>
                            <Button variant="default" size="sm" className="text-[#4b5563] bg-transparent rounded-xl bg-gray-100">
                                Weekly
                            </Button>
                            <Button variant="default" size="sm" className="text-[#4b5563] bg-transparent rounded-xl bg-gray-100">
                                Monthly
                            </Button>
                            <Button variant="default" size="sm" className="text-[#4b5563] bg-transparent rounded-xl bg-gray-100">
                                <SlidersHorizontal className="w-4 h-4 mr-2" />
                                Custom
                            </Button>
                        </div>
                    </div>

                    {/* Metrics Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <Card className="flex justify-center items-center bg-white border-[#e9eaeb] rounded-xl">
                            <CardContent className="flex p-6 justify-between gap-5">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-[#efeeff] rounded-xl flex items-center justify-center">
                                        <Users className="w-5 h-5 text-[#4a48ff]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#6c6c75] mb-1">Users</p>
                                        <p className="text-2xl font-semibold text-[#1c1c1e]">1,254</p>
                                    </div>
                                </div>
                                <div className="flex items-end mt-2">
                                    <TrendingUp className="w-4 h-4 text-[#09ac47] mr-1" />
                                    <span className="text-sm text-[#09ac47]">+12%</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="flex justify-center items-center bg-white border-[#e9eaeb] rounded-xl">
                            <CardContent className="flex p-6 justify-between gap-5">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-[#efeeff] rounded-xl flex items-center justify-center">
                                        <Users className="w-5 h-5 text-[#4a48ff]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#6c6c75] mb-1">Active Agents</p>
                                        <p className="text-2xl font-semibold text-[#1c1c1e]">860</p>
                                    </div>
                                </div>
                                <div className="flex items-end mt-2">
                                    <TrendingDown className="w-4 h-4 text-[#ef4444] mr-1" />
                                    <span className="text-sm text-[#ef4444]">-11%</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="flex justify-center items-center bg-white border-[#e9eaeb] rounded-xl">
                            <CardContent className="flex p-6 justify-between gap-5">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-[#efeeff] rounded-xl flex items-center justify-center">
                                        <DollarSign className="w-5 h-5 text-[#4a48ff]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#6c6c75] mb-1">Revenue MTD</p>
                                        <p className="text-2xl font-semibold text-[#1c1c1e]">$849.45</p>
                                    </div>
                                </div>
                                <div className="flex items-end mt-2">
                                    <TrendingUp className="w-4 h-4 text-[#09ac47] mr-1" />
                                    <span className="text-sm text-[#09ac47]">+6.8%</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="flex justify-center items-center bg-white border-[#e9eaeb] rounded-xl">
                            <CardContent className="flex p-6 justify-between gap-5">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-[#efeeff] rounded-xl flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#4a48ff]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#6c6c75] mb-1">Minutes used</p>
                                        <p className="text-2xl font-semibold text-[#1c1c1e]">241 mins</p>
                                    </div>
                                </div>
                                <div className="flex items-end mt-2">
                                    <TrendingUp className="w-4 h-4 text-[#09ac47] mr-1" />
                                    <span className="text-sm text-[#09ac47]">+18.2%</span>
                                </div>
                            </CardContent>
                        </Card>

                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-[100%]">
                        {/* Call Analytics */}
                        <CallAnalytcis />
                        {/* Platform Usage */}
                        <PlatformUsage />
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full grid grid-cols-1 md:grid-rows-2 gap-6">
                            {/* Recent Registrations */}
                            <RecentRegistrationsCard />
                            {/* Important Alerts */}
                            <SystemHealth />
                        </div>
                        <div className="lg:ml-5">
                            <ImportantAlert />
                        </div>
                    </div>

                    {/* Inbound/Outbound Calls */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        <CallDashboardCard />
                        <HeatmapUsage />
                    </div>
                </main>
            </div>
        </div>
    )
}
