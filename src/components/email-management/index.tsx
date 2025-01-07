import { Search, Filter, Edit2 } from "lucide-react";
import Switch from "@/components/ui/switch";
const originalSections = [
    {
        title: "Reports & Digests",
        templates: [
            { name: "Weekly Summary Email", enabled: true }
        ]
    },
    {
        title: "System Updates",
        templates: [
            { name: "Subscription Renewal Reminder", enabled: true }
        ]
    },
    {
        title: "User Onboarding",
        templates: [
            { name: "Welcome Email", enabled: true },
            { name: "Email Verification", enabled: true },
            { name: "Getting started through guide", enabled: true }
        ]
    },
    {
        title: "Outbound Campaigns",
        templates: [
            { name: "Campaign Complete Summary", enabled: true }
        ]
    },
    {
        title: "Billing & Subscription",
        templates: [
            { name: "Invoice Email", enabled: true },
            { name: "Payment Failed Notice", enabled: true, link: true },
            { name: "Trial Expiration Reminder", enabled: true },
            { name: "Plan Upgrade Confirmation", enabled: true, link: true },
        ],
    },
    {
        title: "Usage Notifications",
        templates: [
            { name: "Usage Limit Warning", enabled: true },
            { name: "Overages Alert", enabled: true },
            { name: "Agent Offline Alert", enabled: true },
        ],
    },
    {
        title: "Security & Account",
        templates: [
            { name: "Password Reset", enabled: true },
            { name: "Email Change Confirmation", enabled: true },
            { name: "Suspicious Login Detected", enabled: true },
        ],
    },
    {
        title: "Security & Account",
        templates: [
            { name: "Password Reset", enabled: true },
            { name: "Email Change Confirmation", enabled: true },
            { name: "Suspicious Login Detected", enabled: true },
        ],
    },
    {
        title: "Support & Feedback",
        templates: [
            { name: "Ticket Received", enabled: true },
            { name: "Ticket Resolved", enabled: true },
            { name: "Ticket Request", enabled: true },
        ],
    },
    {
        title: "CallNotifications",
        templates: [
            { name: "Call Summary Email", enabled: true },
            { name: "Call Summary SMS", enabled: true },
            { name: "Missed Call Alert", enabled: true },
        ],
    },
];


export default function EmailManagement() {
    return (
        <div className="p-8 text-black">
            {/* Search and Filter */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl">
                <div className="flex items-center gap-2 w-80 ">
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
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
                    Filter <Filter className="w-4 h-4" />
                </button>
            </div>
            {/* Original Email Sections */}
            <div className="flex flex-col gap-6 mb-6">
                {originalSections.map((section) => (
                    <div key={section.title} className="bg-white rounded-xl shadow p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-bold">{section.title}</h2>
                            <button className="flex items-center gap-2 text-gray-700 font-medium hover:underline">
                                <Edit2 className="w-4 h-4" /> Edit Template
                            </button>
                        </div>
                        <div className="flex flex-col gap-2">
                            {section.templates.map((tpl) => (
                                <div key={tpl.name} className="flex items-center justify-between bg-[#fafbfc] rounded-xl px-4 py-3">
                                    <span>{tpl.name}</span>
                                    <Switch checked={tpl.enabled} onChange={() => { }} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}