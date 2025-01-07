"use client";
import React from "react";
import { CheckCircle2, ChevronDown, Edit2 } from "lucide-react";
const users = [
    { name: "Dev Kooper", email: "devkooper@gmail.com", connected: "Aug 15, 2021", lastSync: "Jun 30 2025 10:47 AM", status: "Active" },
    { name: "Dev Kooper", email: "devkooper@gmail.com", connected: "Aug 15, 2021", lastSync: "Jun 30 2025 10:47 AM", status: "Active" },
    { name: "julio Caesar", email: "devkooper@gmail.com", connected: "Aug 15, 2021", lastSync: "Jun 30 2025 10:47 AM", status: "Inactive" },
    { name: "Dev Kooper", email: "devkooper@gmail.com", connected: "Aug 15, 2021", lastSync: "Jun 30 2025 10:47 AM", status: "Active" },
    { name: "julio Caesar", email: "devkooper@gmail.com", connected: "Aug 15, 2021", lastSync: "Jun 30 2025 10:47 AM", status: "Inactive" },
];

const statusDot = (status: string) => (
    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${status === "Active" ? "bg-green-500" : "bg-red-500"}`}></span>
);



export default function IntegrationService() {
    return (
        <div className="p-8 text-black">
            {/* Manage Integration Card */}
            <div className="bg-white rounded-xl shadow p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Manage Integration</h2>
                </div>
                <div className="flex items-center gap-8 mb-4">
                    <img src="/google.svg" alt="Google Calendar" className="w-28 h-28 rounded-xl border" />

                    <div className="w-full">
                        <div className="flex items-center gap-4 w-full">
                            <div className="w-full flex justify-between">
                                <div>
                                    <div className="text-sm text-gray-500">Service name</div>
                                    <div className="font-semibold flex items-center gap-1">Google Calendar <CheckCircle2 className="w-4 h-4 text-green-500" /></div>
                                </div>

                                <div className="hidden lg:flex gap-2 ml-auto">
                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold">Save changes</button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl font-semibold">Disconnect</button>
                                </div>


                            </div>
                        </div>

                        <div className="lg:flex gap-1 w-full max-w-[800px] justify-between items-center hidden ">
                            <div>
                                <div className="text-xs text-gray-500 mt-1">Connected users</div>
                                <span className="font-semibold text-black">118</span>
                            </div>

                            <div>
                                <div className="text-sm text-gray-500">Status</div>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-red-500 inline-block" />
                                    <span className="text-red-700 font-medium">Inactive</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 min-w-[140px]">
                                <div className="text-sm text-gray-500">Sync Interval</div>
                                <button className="flex items-center gap-2 border rounded-xl px-3 py-1 text-sm font-medium">
                                    Every 5 mins <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-1 min-w-[160px]">
                                <div className="text-sm text-gray-500">Settings</div>
                                <button className="flex items-center gap-2 text-indigo-600 font-medium hover:underline">
                                    <Edit2 className="w-4 h-4" /> Change API key
                                </button>
                            </div>

                        </div>
                    </div>


                </div>
                {/* mobile response */}
                <div className="lg:hidden grid grid-cols-2 gap-4 w-full">
                    <div>
                        <div className="text-xs text-gray-500 mt-1">Connected users</div>
                        <span className="font-semibold text-black">118</span>
                    </div>

                    <div>
                        <div className="text-sm text-gray-500">Status</div>
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-red-500 inline-block" />
                            <span className="text-red-700 font-medium">Inactive</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 min-w-[140px]">
                        <div className="text-sm text-gray-500">Sync Interval</div>
                        <button className="flex items-center gap-2 border rounded-xl px-3 py-1 text-sm font-medium">
                            Every 5 mins <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-1 min-w-[160px]">
                        <div className="text-sm text-gray-500">Settings</div>
                        <button className="flex items-center gap-2 text-indigo-600 font-medium hover:underline">
                            <Edit2 className="w-4 h-4" /> Change API key
                        </button>
                    </div>

                </div>

                <div className="flex lg:hidden flex-col gap-2 mt-5">
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold">Save changes</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl font-semibold">Disconnect</button>
                </div>


            </div>
            {/* Connected Users Table */}
            <div className="bg-white rounded-xl shadow p-6 overflow-x-auto whitespace-nowrap">
                <h3 className="text-lg font-bold mb-4">Connected Users</h3>
                <table className="min-w-full text-sm mb-2">
                    <thead>
                        <tr className="text-gray-500 text-xs uppercase border-b">
                            <th className="py-2 px-3 text-left">User Name</th>
                            <th className="py-2 px-3 text-left">Email</th>
                            <th className="py-2 px-3 text-left">Connected On</th>
                            <th className="py-2 px-3 text-left">Last Sync</th>
                            <th className="py-2 px-3 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => (
                            <tr key={idx} className="border-b last:border-b-0">
                                <td className="py-2 px-3 font-medium text-gray-800">{user.name}</td>
                                <td className="py-2 px-3 text-indigo-600 underline cursor-pointer">{user.email}</td>
                                <td className="py-2 px-3">{user.connected}</td>
                                <td className="py-2 px-3">{user.lastSync}</td>
                                <td className="py-2 px-3 flex items-center">
                                    {statusDot(user.status)}
                                    {user.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2">Showing Last 5 of 210 118 users</div>
            </div>
        </div>
    )
}