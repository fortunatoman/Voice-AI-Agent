"use client"

import { useState } from "react"

interface NavigationTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function NavigationTabs({ activeTab, setActiveTab }: NavigationTabsProps) {

  const tabs = ["Overview", "Calls Logs", "Recordings", "Transcripts"]

  return (
    <div className="bg-[#ffffff] w-full mt-6 p-6 rounded-xl shadow-sm">
      <div className="max-w-4xl">
        <nav className="border-b border-gray-200">
          <div className="overflow-x-auto whitespace-nowrap">
            <div className="flex gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 text-sm font-medium transition-colors duration-200 relative ${
                    activeTab === tab
                      ? "text-[#1c1c1e] border-b-2 border-[#1c1c1e]"
                      : "text-[#1f2937] hover:text-[#1c1c1e]"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1c1c1e]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
