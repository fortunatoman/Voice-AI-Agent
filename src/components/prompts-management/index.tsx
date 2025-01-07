"use client";
import React from "react";
import { FileText, Flag, Upload, Folder, Filter, MoreHorizontal, Search, Edit2 } from "lucide-react";
const summaryCards = [
    { icon: <FileText className="w-6 h-6 text-indigo-500" />, label: "Total prompts", value: "85" },
    { icon: <Flag className="w-6 h-6 text-indigo-500" />, label: "Flagged content", value: "102" },
    { icon: <Upload className="w-6 h-6 text-indigo-500" />, label: "Total uploaded files", value: "12" },
    { icon: <Folder className="w-6 h-6 text-indigo-500" />, label: "Total in use", value: "1,256" },
];

const statusBadge = (status: string) => {
    if (status === "Used") return "bg-green-100 text-green-600";
    if (status === "Not in Use") return "bg-blue-100 text-blue-600";
    if (status === "By Agent") return "bg-indigo-100 text-indigo-600";
    if (status === "Auto-Flagged") return "bg-red-100 text-red-500";
    if (status === "By User") return "bg-yellow-100 text-yellow-600";
    return "bg-gray-100 text-gray-600";
};

const mockPrompts = [
    { user: "Julio Caesar", prompt: "Follow up with customer if he hasn't returned any calls.", submitted: "Aug 17, 2025", status: "Used" },
    { user: "Sam Sulek Junior", prompt: "Follow up with customer if he hasn't returned any calls.", submitted: "Aug 17, 2025", status: "Not in Use" },
    { user: "Sam Sulek Junior", prompt: "Follow up with customer if he hasn't returned any calls.", submitted: "Aug 17, 2025", status: "By Agent" },
    { user: "Dev Kooper", prompt: "Follow up with customer if he hasn't returned any calls.", submitted: "Aug 17, 2025", status: "Auto-Flagged" },
    { user: "Dev Kooper", prompt: "Follow up with customer if he hasn't returned any calls.", submitted: "Aug 17, 2025", status: "Auto-Flagged" },
    { user: "Julio Caesar", prompt: "Follow up with customer if he hasn't returned any calls.", submitted: "Aug 17, 2025", status: "Used" },
    { user: "Dev Kooper", prompt: "Follow up with customer if he hasn't returned any calls.", submitted: "Aug 17, 2025", status: "Auto-Flagged" },
    { user: "Dev Kooper", prompt: "Follow up with customer if he hasn't returned any calls.", submitted: "Aug 17, 2025", status: "Auto-Flagged" },
    { user: "Sam Sulek Junior", prompt: "Follow up with customer if he hasn't returned any calls.", submitted: "Aug 17, 2025", status: "By User" },
];



export default function PromptsManagement() {
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
            {/* Prompts Data Table */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Prompts Data</h2>
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
                                <th className="py-3 px-4 text-left">Prompt</th>
                                <th className="py-3 px-4 text-left">Submitted On</th>
                                <th className="py-3 px-4 text-left">Status</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockPrompts.map((row, i) => (
                                <tr key={i} className="border-b last:border-b-0 hover:bg-gray-50">
                                    <td className="py-3 px-4 font-medium text-gray-800">{row.user}</td>
                                    <td className="py-3 px-4 relative group">
                                        <span className="truncate max-w-xs block">{row.prompt}</span>
                                        <span className="hidden group-hover:block absolute left-0 top-8 z-10 bg-white rounded-xl shadow-lg border px-4 py-2 text-sm w-72">
                                            {row.prompt}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">{row.submitted}</td>
                                    <td className="py-3 px-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge(row.status)}`}>{row.status}</span>
                                    </td>
                                    <td className="py-3 px-4 flex gap-2 items-center">
                                        <button className="flex items-center gap-1 text-indigo-600 font-medium hover:underline">
                                            <Edit2 className="w-4 h-4" /> Edit
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