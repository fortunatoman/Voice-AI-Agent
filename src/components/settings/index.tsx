"use client";
import { ChevronDown, Edit2 } from "lucide-react";
import React, { useState } from "react";
import Switch from "@/components/ui/switch";

export default function Settings() {
    const [callRecordingDefault, setCallRecordingDefault] = useState(false);
    const [allowAIFallbackToDefaultPrompt, setAllowAIFallbackToDefaultPrompt] = useState(false);
    return (
        <div className="p-8 text-black">
            {/* AI defaults */}
            <div className="bg-white rounded-xl shadow p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">AI defaults</h2>
                <div className="divide-y divide-gray-100">
                    <div className="flex items-center justify-between py-4">
                        <span>Default AI Model</span>
                        <button className="flex items-center gap-2 border rounded-xl px-3 py-1 text-sm font-medium">
                            GPT 4-o <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <span>Max. Call duration</span>
                        <button className="flex items-center gap-2 border rounded-xl px-3 py-1 text-sm font-medium">
                            5 mins <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <span>Default voice language</span>
                        <span className="flex items-center gap-2">
                            English (US)
                            <Edit2 className="w-4 h-4 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
            {/* System Preferences */}
            <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold mb-6">System Preferences</h2>
                <div className="divide-y divide-gray-100">
                    <div className="flex items-center justify-between py-4">
                        <span>Call Recording Default</span>
                        <Switch className="" checked={callRecordingDefault} onChange={() => { setCallRecordingDefault(!callRecordingDefault) }} />
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <span>Allow AI fallback to default prompt</span>
                        <Switch checked={allowAIFallbackToDefaultPrompt} onChange={() => { setAllowAIFallbackToDefaultPrompt(!allowAIFallbackToDefaultPrompt) }} />
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <span>Preferred voice provider</span>
                        <button className="flex items-center gap-2 border rounded-xl px-3 py-1 text-sm font-medium">
                            Google <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <span>Global timeout for AI response</span>
                        <button className="flex items-center gap-2 border rounded-xl px-3 py-1 text-sm font-medium">
                            5 sec <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <span>Default call handoff action</span>
                        <button className="flex items-center gap-2 border rounded-xl px-3 py-1 text-sm font-medium">
                            Voicemail <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}