import { User, AlertTriangle, Calendar, Users, Filter, MoreHorizontal, Search, Copy } from "lucide-react";

export default function AuditLogs() {
    const summaryCards = [
        { icon: <User className="w-6 h-6 text-indigo-500" />, label: "Total admin logins", value: "142" },
        { icon: <AlertTriangle className="w-6 h-6 text-indigo-500" />, label: "Failed login attempts", value: "14" },
        { icon: <Calendar className="w-6 h-6 text-indigo-500" />, label: "Plan changes", value: "231" },
        { icon: <Users className="w-6 h-6 text-indigo-500" />, label: "Impersonation sessions", value: "21 (active)" },
    ];

    const mockLogs = [
        {
            time: "Jun 30, 2025 10:55 AM",
            admin: "Julio Caesar",
            action: "Logged In",
            details: "Success",
            ip: "192.168.0.19",
        },
        {
            time: "Jun 30, 2025 10:55 AM",
            admin: "Julio Caesar",
            action: "Failed Logged In",
            details: "Wrong Password",
            ip: "192.168.0.19",
        },
        {
            time: "Jun 30, 2025 10:55 AM",
            admin: "Dev Kooper",
            action: "Plan updated",
            details: (
                <>
                    User Dev Kooper: Pro plan <a href="mailto:devkooper@gmail.com" className="text-indigo-600 underline">Devkooper@Gmail.Com</a>
                </>
            ),
            ip: "192.168.0.19",
        },
        {
            time: "Jun 30, 2025 10:55 AM",
            admin: "Julio Caesar",
            action: "Logged In",
            details: "Success",
            ip: "192.168.0.19",
        },
        {
            time: "Jun 30, 2025 10:55 AM",
            admin: "Dev Kooper",
            action: "Impersonation started",
            details: (
                <>
                    Impersonated user: <a href="mailto:julioceasar@gmail.com" className="text-indigo-600 underline">Julioceasar@Gmail.Com</a>
                </>
            ),
            ip: "192.168.0.19",
        },
        {
            time: "Jun 30, 2025 10:55 AM",
            admin: "Julio Caesar",
            action: "Logged In",
            details: "Success",
            ip: "192.168.0.19",
        },
        {
            time: "Jun 30, 2025 10:55 AM",
            admin: "Dev Kooper",
            action: "Plan updated",
            details: (
                <>
                    User Dev Kooper: Pro plan <a href="mailto:devkooper@gmail.com" className="text-indigo-600 underline">Devkooper@Gmail.Com</a>
                </>
            ),
            ip: "192.168.0.19",
        },
    ];


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
            {/* Audit logs data */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Audit logs data</h2>
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
                                <th className="py-3 px-4 text-left">Time Stamp</th>
                                <th className="py-3 px-4 text-left">Admin</th>
                                <th className="py-3 px-4 text-left">Action Type</th>
                                <th className="py-3 px-4 text-left">Details</th>
                                <th className="py-3 px-4 text-left">IP Address</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockLogs.map((row, i) => (
                                <tr key={i} className="border-b last:border-b-0 hover:bg-gray-50">
                                    <td className="py-3 px-4">{row.time}</td>
                                    <td className="py-3 px-4">{row.admin}</td>
                                    <td className="py-3 px-4">{row.action}</td>
                                    <td className="py-3 px-4">{row.details}</td>
                                    <td className="py-3 px-4">{row.ip}</td>
                                    <td className="py-3 px-4 flex gap-2 items-center">
                                        <button className="p-1 hover:bg-gray-100 rounded" title="Copy">
                                            <Copy className="w-4 h-4" />
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