"use client";
import React from "react";

import { CreditCard, DollarSign, Clock, Calendar, Filter, MoreHorizontal, Search, Users, RotateCw, RefreshCw, Bot } from "lucide-react";

const summaryCards = [
    { icon: <Users className="w-6 h-6 text-indigo-500" />, label: "Active Subscriptions", value: "1,254" },
    { icon: <DollarSign className="w-6 h-6 text-indigo-500" />, label: "Revenue (this month)", value: "$12,450" },
    { icon: <RotateCw className="w-6 h-6 text-indigo-500" />, label: "Upcoming renewals", value: "74" },
    { icon: <Bot className="w-6 h-6 text-indigo-500" />, label: "Trials Expiring", value: "102" },
];

const plans = [
    { name: "Pro", color: "bg-pink-100 text-pink-600" },
    { name: "Basic", color: "bg-blue-100 text-blue-600" },
    { name: "Enterprise", color: "bg-green-100 text-green-600" },
];

const mockSubscriptions = [
    { user: "Julio Caesar", plan: "Pro", status: "Active", lastBilled: "Jun 25, 2025", nextBilling: "Aug 17, 2025", trialEnd: "-", amount: "$566" },
    { user: "Julio Caesar", plan: "Basic", status: "Active", lastBilled: "Jun 25, 2025", nextBilling: "Aug 17, 2025", trialEnd: "-", amount: "$566" },
    { user: "Julio Caesar", plan: "Pro", status: "Active", lastBilled: "Jun 25, 2025", nextBilling: "Aug 17, 2025", trialEnd: "-", amount: "$566" },
    { user: "Julio Caesar", plan: "Enterprise", status: "Inactive", lastBilled: "Jun 25, 2025", nextBilling: "Aug 17, 2025", trialEnd: "Aug 25, 2025", amount: "$1000" },
    { user: "Julio Caesar", plan: "Enterprise", status: "Inactive", lastBilled: "Jun 25, 2025", nextBilling: "Aug 17, 2025", trialEnd: "Aug 25, 2025", amount: "$1000" },
    { user: "Julio Caesar", plan: "Pro", status: "Inactive", lastBilled: "Jun 25, 2025", nextBilling: "Aug 17, 2025", trialEnd: "-", amount: "$1000" },
    { user: "Julio Caesar", plan: "Pro", status: "Inactive", lastBilled: "Jun 25, 2025", nextBilling: "Aug 17, 2025", trialEnd: "-", amount: "$1000" },
    { user: "Julio Caesar", plan: "Enterprise", status: "Inactive", lastBilled: "Jun 25, 2025", nextBilling: "Aug 17, 2025", trialEnd: "Aug 25, 2025", amount: "$1000" },
    { user: "Julio Caesar", plan: "Enterprise", status: "Inactive", lastBilled: "Jun 25, 2025", nextBilling: "Aug 17, 2025", trialEnd: "Aug 25, 2025", amount: "$1000" },
];

const planColor = (plan: string) => {
    if (plan === "Pro") return "bg-pink-100 text-pink-600";
    if (plan === "Basic") return "bg-blue-100 text-blue-600";
    if (plan === "Enterprise") return "bg-green-100 text-green-600";
    return "bg-gray-100 text-gray-600";
};

const statusDot = (status: string) => (
    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${status === "Active" ? "bg-green-500" : "bg-red-500"}`}></span>
);



export default function SubscriptionManagement() {
    return (
        <div className="p-8 text-black">
            <h1 className="text-3xl font-bold mb-6 text-text-dark">Agents Data</h1>
            <div className="min-h-screen bg-[#f6f6f6] p-8">
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
                {/* Subscriptions Data Table */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-6">Subscriptions Data</h2>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 w-80">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-[#f6f6f6] w-full"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            </div>
                            <button className="bg-indigo-500 pr-8 pl-8 pt-3 pb-3 rounded-xl hover:bg-indigo-600 text-white px-4 py-2 rounded-xl flex items-center justify-center">
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
                                    <th className="py-3 px-4 text-left">Plan</th>
                                    <th className="py-3 px-4 text-left">Status</th>
                                    <th className="py-3 px-4 text-left">Last Billed</th>
                                    <th className="py-3 px-4 text-left">Next Billing</th>
                                    <th className="py-3 px-4 text-left">Trial End</th>
                                    <th className="py-3 px-4 text-left">Amount</th>
                                    <th className="py-3 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockSubscriptions.map((sub, i) => (
                                    <tr key={i} className="border-b last:border-b-0 hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-800">{sub.user}</td>
                                        <td className="py-3 px-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${planColor(sub.plan)}`}>{sub.plan}</span>
                                        </td>
                                        <td className="py-3 px-4 flex items-center">
                                            {statusDot(sub.status)}
                                            {sub.status}
                                        </td>
                                        <td className="py-3 px-4">{sub.lastBilled}</td>
                                        <td className="py-3 px-4">{sub.nextBilling}</td>
                                        <td className="py-3 px-4">{sub.trialEnd}</td>
                                        <td className="py-3 px-4">{sub.amount}</td>
                                        <td className="py-3 px-4">
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
        </div>
    )
}