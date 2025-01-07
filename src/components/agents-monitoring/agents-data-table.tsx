"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Filter, Ellipsis, Copy } from "lucide-react";
import DateRangeDropdown from "../user-management/user/date-range-dropdown";

const mockAgents = [
  {
    name: "Agent_Ray",
    status: "Active",
    prompt: "Appointment...",
    aiModel: "GPT-4o",
    lastActive: "11:48 AM",
  },
  {
    name: "Agent_Ben",
    status: "Idle",
    prompt: "Appointment...",
    aiModel: "GPT-4o",
    lastActive: "11:48 AM",
  },
  {
    name: "Agent_Sam",
    status: "Stopped",
    prompt: "Appointment...",
    aiModel: "GPT-4o",
    lastActive: "11:48 AM",
  },
];

type Status = "Active" | "Idle" | "Stopped";

const statusColors: Record<Status, string> = {
  Active: "bg-green-100 text-green-600",
  Idle: "bg-yellow-100 text-yellow-600",
  Stopped: "bg-red-100 text-red-500",
};

const menuOptions = [
  "View details",
  "Force stop",
  "Reset agent training",
  "Flag as suspicious",
  "View prompt",
];

const AgentsDataTable = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  // Date range dropdown state
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedRange, setSelectedRange] = useState("Today");

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        openMenuIndex !== null &&
        menuRefs.current[openMenuIndex] &&
        !menuRefs.current[openMenuIndex]?.contains(event.target as Node)
      ) {
        setOpenMenuIndex(null);
      }
    }
    if (openMenuIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenuIndex]);

  const handleMenuClick = (option: string, agent: any) => {
    if (option === "View details") {
      setOpenMenuIndex(null);
      router.push("/agents-monitoring/user");
    } else {
      setOpenMenuIndex(null);
      // handle other actions here
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 min-h-[600px] text-black">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-[#f6f6f6]"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
        <div className="flex gap-2 relative">
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2 border rounded-xl bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              onClick={() => setShowFilterDropdown((v) => !v)}
            >
              Filter <Filter className="w-4 h-4" />
            </button>
            <DateRangeDropdown
              open={showFilterDropdown}
              onClose={() => setShowFilterDropdown(false)}
              onSelect={option => setSelectedRange(option)}
            />
          </div>
          <button className="px-4 py-2 border rounded-xl bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
            Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500 text-xs uppercase border-b">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Prompt</th>
              <th className="py-3 px-4 text-left">AI Model</th>
              <th className="py-3 px-4 text-left">Calls Today</th>
              <th className="py-3 px-4 text-left relative group">
                Success
                <span className="ml-1 cursor-pointer text-xs text-gray-400 group-hover:underline" title="% of calls completed without transfer or disconnected">&#9432;</span>
              </th>
              <th className="py-3 px-4 text-left relative group">
                Failures
                <span className="ml-1 cursor-pointer text-xs text-gray-400 group-hover:underline" title="Number of failed calls">&#9432;</span>
              </th>
              <th className="py-3 px-4 text-left">Last Active</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, i) => {
              const agent = mockAgents[i % mockAgents.length];
              return (
                <tr key={i} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{agent.name}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[agent.status as Status]}`}>{agent.status}</span>
                  </td>
                  <td className="py-3 px-4">{agent.prompt}</td>
                  <td className="py-3 px-4">{agent.aiModel}</td>
                  <td className="py-3 px-4">82</td>
                  <td className="py-3 px-4">94%</td>
                  <td className="py-3 px-4">3</td>
                  <td className="py-3 px-4">{agent.lastActive}</td>
                  <td className="py-3 px-4 flex gap-2 items-center relative">
                    <button
                      className="p-1 hover:bg-gray-100 rounded"
                      title="Copy"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      className="p-1 hover:bg-gray-100 rounded"
                      title="More"
                      onClick={() => setOpenMenuIndex(openMenuIndex === i ? null : i)}
                    >
                      <Ellipsis className="w-4 h-4" />
                    </button>
                    {openMenuIndex === i && (
                      <div
                        ref={el => {
                          menuRefs.current[i] = el;
                        }}
                        className="absolute right-0 top-8 z-10 bg-white rounded-xl shadow-lg border py-2 w-56 min-w-max"
                      >
                        {menuOptions.map(option => (
                          <button
                            key={option}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
                            onClick={() => handleMenuClick(option, agent)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
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
  );
};

export default AgentsDataTable; 