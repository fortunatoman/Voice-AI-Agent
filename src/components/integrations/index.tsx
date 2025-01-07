"use client"
import React from "react";
import { Zap, AlertTriangle, Timer, Server, Filter, MoreHorizontal, Search, FileText, RefreshCw, CircleCheck, Unplug, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
const summaryCards = [
    { icon: <CircleCheck className="w-6 h-6 text-indigo-500" />, label: "Active Integrations", value: "34" },
    { icon: <AlertTriangle className="w-6 h-6 text-indigo-500" />, label: "Failed Webhooks", value: "102" },
    { icon: <Timer className="w-6 h-6 text-indigo-500" />, label: "Average latency", value: "210 ms" },
    { icon: <Unplug className="w-6 h-6 text-indigo-500" />, label: "Total APIs", value: "3,215" },
];

const connectedServices = [
    { service: "Google Calendar", icon: "/google.svg", users: 118, status: "Active", lastSync: "Aug 17, 2025 10:25 AM", action: "Disconnect" },
    { service: "Calendly", icon: "/calendly.svg", users: 56, status: "Active", lastSync: "Jun 15, 2025 10:25 AM", action: "Disconnect" },
    { service: "Calendly", icon: "/calendly.svg", users: 56, status: "Inactive", lastSync: "Jun 15, 2025 10:25 AM", action: "Reconnect" },
];

const webhookRows = [
    { user: "Dev Kooper", datetime: "Jun 30, 025 10:47 AM", endpoint: "/api/V1/calendar/update", status: "Failed", duration: "125 ms", action: "Retry" },
    { user: "Dev Kooper", datetime: "Jun 30, 025 10:47 AM", endpoint: "/api/V1/calendar/update", status: "Failed", duration: "125 ms", action: "Retry" },
    { user: "Julio Caesar", datetime: "Jun 30, 025 10:47 AM", endpoint: "/api/V1/calendar/update", status: "Success", duration: "204 ms", action: "View" },
    { user: "Julio Caesar", datetime: "Jun 30, 025 10:47 AM", endpoint: "/api/V1/calendar/update", status: "Success", duration: "204 ms", action: "View" },
    { user: "Julio Caesar", datetime: "Jun 30, 025 10:47 AM", endpoint: "/api/V1/calendar/update", status: "Success", duration: "204 ms", action: "View" },
    { user: "Dev Kooper", datetime: "Jun 30, 025 10:47 AM", endpoint: "/api/V1/calendar/update", status: "Failed", duration: "125 ms", action: "Retry" },
    { user: "Julio Caesar", datetime: "Jun 30, 025 10:47 AM", endpoint: "/api/V1/calendar/update", status: "Success", duration: "204 ms", action: "View" },
    { user: "Dev Kooper", datetime: "Jun 30, 025 10:47 AM", endpoint: "/api/V1/calendar/update", status: "Failed", duration: "125 ms", action: "Retry" },
];

const statusBadge = (status: string) => {
    if (status === "Active") return "bg-green-100 text-green-600";
    if (status === "Inactive") return "bg-red-100 text-red-500";
    if (status === "Success") return "bg-green-100 text-green-600";
    if (status === "Failed") return "bg-red-100 text-red-500";
    return "bg-gray-100 text-gray-600";
};
export default function Integrations() {

    const router = useRouter();
    const [openPopoverIndex, setOpenPopoverIndex] = React.useState<number | null>(null);

    return (
        <div className="p-8 text-black">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {summaryCards.map((card, i) => (
                    <div key={i} className="bg-white rounded-xl shadow p-6 flex items-center justify-start gap-2">
                        <div className="mb-2 bg-purple-100 p-3 rounded-xl">{card.icon}</div>
                        <div>
                            <div className="text-xs text-gray-500 mb-1">{card.label}</div>
                            <div className="text-2xl font-bold">{card.value}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Connected Services */}
            <div className="bg-white rounded-xl shadow p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Connected Services</h2>
                <table className="min-w-full text-sm mb-2">
                    <thead>
                        <tr className="text-gray-500 text-xs uppercase border-b">
                            <th className="py-2 px-3 text-left">Service</th>
                            <th className="py-2 px-3 text-left">Connected Users</th>
                            <th className="py-2 px-3 text-left">Status</th>
                            <th className="py-2 px-3 text-left">Last Sync</th>
                            <th className="py-2 px-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {connectedServices.map((svc, idx) => (
                            <tr key={idx} className="border-b last:border-b-0">
                                <td className="py-2 px-3 font-medium text-gray-800 flex items-center gap-2">
                                    {/* Replace with <img src={svc.icon} ... /> if you have icons */}
                                    <img src={svc.icon} width={20} height={20} alt="icon"></img>
                                    {svc.service}
                                </td>
                                <td className="py-2 px-3">{svc.users}</td>
                                <td className="py-2 px-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge(svc.status)}`}>{svc.status}</span>
                                </td>
                                <td className="py-2 px-3">{svc.lastSync}</td>
                                <td className="py-2 px-3 flex gap-2 items-center relative">
                                    <button
                                        className="p-1 hover:bg-gray-100 rounded"
                                        title="More"
                                        onClick={() => setOpenPopoverIndex(openPopoverIndex === idx ? null : idx)}
                                    >
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                    {openPopoverIndex === idx && (
                                        <div className="absolute right-0 top-8 z-10 bg-white rounded-xl shadow-lg border py-2 w-48">
                                            <button
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                onClick={() => {
                                                    setOpenPopoverIndex(null);
                                                    router.push("/integrations/service");
                                                }}
                                            >
                                                Manage integration
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Webhook Monitoring */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Webhook Monitoring</h2>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 w-80">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-[#f6f6f6] w-full"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        </div>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl flex justify-center items-center w-[100px] h-[40px]">
                            <Search className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-xl bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
                            Filter <Filter className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 border rounded-xl bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
                            Export
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="text-gray-500 text-xs uppercase border-b">
                                <th className="py-3 px-4 text-left">User Name</th>
                                <th className="py-3 px-4 text-left">Date/Time</th>
                                <th className="py-3 px-4 text-left">Endpoint</th>
                                <th className="py-3 px-4 text-left">Status</th>
                                <th className="py-3 px-4 text-left">Duration</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {webhookRows.map((row, i) => (
                                <tr key={i} className="border-b last:border-b-0 hover:bg-gray-50">
                                    <td className="py-3 px-4 font-medium text-gray-800">{row.user}</td>
                                    <td className="py-3 px-4">{row.datetime}</td>
                                    <td className="py-3 px-4">{row.endpoint}</td>
                                    <td className="py-3 px-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge(row.status)}`}>{row.status}</span>
                                    </td>
                                    <td className="py-3 px-4">{row.duration}</td>
                                    <td className="py-3 px-4 flex gap-2 items-center">
                                        {row.status === "Failed" ? (
                                            <button className="flex items-center gap-1 text-red-500 font-medium hover:underline">
                                                <RefreshCw className="w-4 h-4" /> Retry
                                            </button>
                                        ) : (
                                            <button className="flex items-center gap-1 text-indigo-600 font-medium hover:underline">
                                                <FileText className="w-4 h-4" /> View
                                            </button>
                                        )}
                                        <button className="p-1 hover:bg-gray-100 rounded" title="More">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="flex flex-col items-center justify-between mt-6 gap-4 sm:flex-row">
                    <button className="px-4 py-2 border rounded-xl bg-white border-gray-200 text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
                        &larr; Previous
                    </button>

                    <div className="flex gap-2 overflow-x-auto max-w-full px-2">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <button
                                key={i}
                                className={`min-w-[2rem] h-8 rounded-xl flex items-center justify-center text-sm ${i === 0 ? "bg-indigo-100 text-indigo-600" : "bg-gray-100 text-gray-500"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <button className="px-4 py-2 border rounded-xl bg-white border-gray-200 text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
                        Next &rarr;
                    </button>
                </div>
            </div>
        </div>
    )
}