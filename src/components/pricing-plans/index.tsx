"use client";
import React from "react";

import { Search, Filter, MoreHorizontal, MoreVertical, CheckCircle2, XCircle, Plus } from "lucide-react";
const planRows = [
    {
        name: "Basic",
        price: "$149/mo",
        minutes: "200 mins",
        overage: "$0.10/min",
        trial: "7 days",
        outbound: false,
        users: "14,520",
        status: "Active",
    },
    {
        name: "Pro",
        price: "$149/mo",
        minutes: "200 mins",
        overage: "$0.10/min",
        trial: "7 days",
        outbound: true,
        users: "14,520",
        status: "Active",
    },
    {
        name: "Enterprise",
        price: "$149/mo",
        minutes: "200 mins",
        overage: "$0.10/min",
        trial: "7 days",
        outbound: true,
        users: "14,520",
        status: "Active",
    },
];

const planBadge = (plan: string) => {
    if (plan === "Pro") return "bg-pink-100 text-pink-600";
    if (plan === "Basic") return "bg-blue-100 text-blue-600";
    if (plan === "Enterprise") return "bg-green-100 text-green-600";
    return "bg-gray-100 text-gray-600";
};

const statusDot = (status: string) => (
    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${status === "Active" ? "bg-green-500" : "bg-red-500"}`}></span>
);

const userRows = [
    {
        name: "Dev Kooper",
        email: "devkooper...",
        phone: "(647) 1255 125",
        plan: "Enterprise",
        usage: "medium",
        signup: "12 Apr., 2025",
    },
    {
        name: "Dev Kooper",
        email: "devkooper...",
        phone: "(647) 1255 125",
        plan: "Pro",
        usage: "medium",
        signup: "12 Apr., 2025",
    },
    {
        name: "Dev Kooper",
        email: "devkooper...",
        phone: "(647) 1255 125",
        plan: "Enterprise",
        usage: "medium",
        signup: "12 Apr., 2025",
    },
    {
        name: "Dev Kooper",
        email: "devkooper...",
        phone: "(647) 1255 125",
        plan: "Pro",
        usage: "medium",
        signup: "12 Apr., 2025",
    },
    {
        name: "Dev Kooper",
        email: "devkooper...",
        phone: "(647) 1255 125",
        plan: "Enterprise",
        usage: "medium",
        signup: "12 Apr., 2025",
    },
    {
        name: "Dev Kooper",
        email: "devkooper...",
        phone: "(647) 1255 125",
        plan: "Basic",
        usage: "medium",
        signup: "12 Apr., 2025",
    },
];


export default function PricingPlans() {
    return (
        <div className="p-8 text-black">
            {/* All plans data */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">All plans data</h2>
                    <div className="flex gap-2">
                        <button className="w-full min-w-[200px] px-4 py-2 border rounded-xl bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
                            Export
                        </button>
                        <button className="flex w-full min-w-[200px] items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600">
                            <Plus className="w-4 h-4" /> Add New Plan
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-2 w-80 mb-6">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search by IP address..."
                            className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-[#f6f6f6] w-full"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl flex justify-center items-center w-[100px] h-[40px]">
                        <Search className="w-4 h-4" />
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="text-gray-500 text-xs uppercase border-b">
                                <th className="py-3 px-4 text-left">Plan Name</th>
                                <th className="py-3 px-4 text-left">Price (Monthly)</th>
                                <th className="py-3 px-4 text-left">Minutes</th>
                                <th className="py-3 px-4 text-left">Overage Rate</th>
                                <th className="py-3 px-4 text-left">Trial</th>
                                <th className="py-3 px-4 text-left">Outbound</th>
                                <th className="py-3 px-4 text-left">Users</th>
                                <th className="py-3 px-4 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {planRows.map((row, i) => (
                                <tr key={i} className="border-b last:border-b-0 hover:bg-gray-50">
                                    <td className="py-3 px-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${planBadge(row.name)}`}>{row.name}</span>
                                    </td>
                                    <td className="py-3 px-4">{row.price}</td>
                                    <td className="py-3 px-4">{row.minutes}</td>
                                    <td className="py-3 px-4">{row.overage}</td>
                                    <td className="py-3 px-4">{row.trial}</td>
                                    <td className="py-3 px-4">
                                        {row.outbound ? (
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                                        ) : (
                                            <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                                        )}
                                    </td>
                                    <td className="py-3 px-4">{row.users}</td>
                                    <td className="py-3 px-4 flex items-center gap-4">
                                        <div>
                                            {statusDot(row.status)}
                                            <span className="text-green-700 font-medium">{row.status}</span>
                                        </div>
                                        <button className="p-1 hover:bg-gray-100 rounded" title="More">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Users plan data */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Users plan data</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="text-gray-500 text-xs uppercase border-b">
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">Phone</th>
                                <th className="py-3 px-4 text-left">Plan</th>
                                <th className="py-3 px-4 text-left">Usage Tier</th>
                                <th className="py-3 px-4 text-left">Signup Date</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userRows.map((row, i) => (
                                <tr key={i} className="border-b last:border-b-0 hover:bg-gray-50">
                                    <td className="py-3 px-4 font-medium text-gray-800 flex items-center gap-2">
                                        <img src="/avatar.png" width={30} height={30} className="rounded-full" alt="avatar" />
                                        {row.name}
                                    </td>
                                    <td className="py-3 px-4">{row.email}</td>
                                    <td className="py-3 px-4">{row.phone}</td>
                                    <td className="py-3 px-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${planBadge(row.plan)}`}>{row.plan}</span>
                                    </td>
                                    <td className="py-3 px-4">{row.usage}</td>
                                    <td className="py-3 px-4">{row.signup}</td>
                                    <td className="py-3 px-4 flex gap-2 items-center">
                                        <button className="p-1 hover:bg-gray-100 rounded" title="Copy">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </button>
                                        <button className="p-1 hover:bg-gray-100 rounded" title="More">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-xs text-gray-500 mt-2">Showing Last 5 of 210 118 users</div>
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