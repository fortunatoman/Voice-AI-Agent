"use client";
import React, { useState } from "react";
import { X, Play, CheckCircle2, AlertCircle, User } from "lucide-react";
import Image from "next/image";
import Switch from "../ui/switch";
interface Agent {
  name: string;
  status: string;
  prompt: string;
  aiModel: string;
  lastActive: string;
}

interface AgentDetailsProps {
  agent: Agent;
  onClose: () => void;
}

const recentCalls = [
  { time: "11:28 AM", duration: "3m 12s", direction: "Outbound", result: "Success", phone: "(647) 124-4568", transcript: "View" },
  { time: "11:28 AM", duration: "3m 12s", direction: "Inbound", result: "Failed", phone: "(647) 124-4568", transcript: "View" },
  { time: "11:28 AM", duration: "3m 12s", direction: "Inbound", result: "Failed", phone: "(647) 124-4568", transcript: "View" },
  { time: "11:28 AM", duration: "3m 12s", direction: "Outbound", result: "Success", phone: "(647) 124-4568", transcript: "View" },
  { time: "11:28 AM", duration: "3m 12s", direction: "Inbound", result: "Failed", phone: "(647) 124-4568", transcript: "View" },
];

const AgentDetails: React.FC<AgentDetailsProps> = ({ agent, onClose }) => {
  const [checked, setChecked] = useState(false)
  return (
    <div className=" flex items-center justify-center bg-red-100 bg-opacity-30 text-black">
      <div className="bg-white rounded-2xl shadow-2xl w-full p-8 relative">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
          <div className="p-2 rounded-full lg:hidden flex gap-4">
            <span>On/Off agent</span>
            <Switch className={`${checked ? "bg-green-500" : "bg-gray-200"
              }`} checked={checked} onChange={() => setChecked(!checked)} />
          </div>


          <div
            className="absolute top-4 right-4 p-2 rounded-full flex gap-4 hidden lg:flex"
          >
            <span>On/Off agent</span>
            <Switch className={`${checked ? "bg-green-500" : "bg-gray-200"
              }`} checked={checked} onChange={() => setChecked(!checked)} />
          </div>
        </div>
        {/* Basic Information */}
        <div className="flex gap-8 mb-8 lg:flex-row flex-col">
          {/* Avatar and Plan */}
          <div className="flex lg:flex-col justify-between items-center min-w-[120px]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center text-4xl font-bold text-purple-600 mb-2">
                <Image src="/avatar.png" width={100} height={100} className="rounded-full" alt="avatar" />
              </div>
              <span className="bg-purple-200 text-purple-700 text-xs px-3 py-1 rounded-full mb-1">Pro Plan</span>
            </div>
            <div className=" lg:hidden">
              <div className="text-gray-500 text-xs">Agent Name</div>
              <div className="font-semibold text-lg flex items-center gap-2">
                {agent.name}
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* Info and Stats */}
            <div className="flex w-full grid grid-cols-2 gap-6 ">
              <div className="lg:block hidden">
                <div className="text-gray-500 text-xs">Agent Name</div>
                <div className="font-semibold text-lg flex items-center gap-2">
                  {agent.name}
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
              </div>

              {/* Right side controls */}
              <div className="hidden lg:flex flex-col items-end gap-2 min-w-[280px] ">
                <div className="flex  w-full justify-start items-center gap-2 text-xs text-gray-500 mb-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 inline-block" />
                  Last active: 1h ago
                </div>
                <div className="flex gap-2 mb-2 w-full">
                  <button className="w-full bg-indigo-500 text-white px-4 py-2 rounded-xl font-semibold">Force stop</button>
                  <button className="w-full border px-4 py-2 rounded-xl font-semibold">More Action</button>
                </div>
                <button className="w-full flex items-center justify-center gap-4 border px-4 py-2 rounded-xl font-semibold">
                  Play last call <Play className="w-4 h-4" />
                </button>
              </div>



            </div>

            {/* Right side controls in mobile*/}
            <div className="flex lg:hidden flex-col items-end gap-2 min-w-[280px] ">
              <div className="flex  w-full justify-start items-center gap-2 text-xs text-gray-500 mb-2">
                <span className="h-2 w-2 rounded-full bg-green-500 inline-block" />
                Last active: 1h ago
              </div>
              <div className="flex gap-2 mb-2 w-full">
                <button className="w-full bg-indigo-500 text-white px-4 py-2 rounded-xl font-semibold">Force stop</button>
                <button className="w-full border px-4 py-2 rounded-xl font-semibold">More Action</button>
              </div>
              <button className="w-full flex items-center justify-center gap-4 border px-4 py-2 rounded-xl font-semibold">
                Play last call <Play className="w-4 h-4" />
              </button>
            </div>

            <div className="w-full grid lg:grid-cols-4 grid-cols-2 justify-between gap-1 mt-6 mb-6">
              <div className="w-full flex flex-col gap-4">
                <div className="text-gray-500 text-xs">Avg. call duration</div>
                <div className="font-semibold">2m 15s</div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div className="text-gray-500 text-xs">Status</div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 inline-block" />
                  <span className="text-green-700 font-medium">Active</span>
                </div>
              </div>

              <div className="w-full flex flex-col gap-4">
                <div className="text-gray-500 text-xs">Current prompt</div>
                <div className="font-semibold">Appointment Reminder</div>
              </div>

              <div className="w-full flex flex-col gap-4">
                <div className="text-gray-500 text-xs">AI Model</div>
                <div className="font-semibold">GPT-4o</div>
              </div>
            </div>



            <div className="flex gap-4 lg:flex-row flex-col">
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 h-full">
                <div className="border-2 border-dotted flex flex-col justify-between items-between p-3 rounded-xl">
                  <div className="text-gray-500 text-md">Total calls today</div>
                  <div className="flex items-center gap-2 justify-between">
                    <span className="text-green-500 text-md">↑ +12%</span>
                    <span className="font-semibold text-red-500 bg-red-100 pr-4 pl-4 pt-1 pb-1 rounded-xl">521</span>
                  </div>
                </div>

                <div className="border-2 border-dotted flex flex-col justify-between items-between p-3 rounded-xl">
                  <div className="text-gray-500 text-md">Avg.Response Time</div>
                  <div className="flex items-center gap-2 justify-between">
                    <span className="text-green-500 text-md">↑ +12%</span>
                    <span className="font-semibold text-red-500 bg-red-100 pr-4 pl-4 pt-1 pb-1 rounded-xl">1</span>
                  </div>
                </div>

                <div className="border-2 border-dotted flex flex-col justify-between items-between p-3 rounded-xl">
                  <div className="text-gray-500 text-md">Total calls this week</div>
                  <div className="flex items-center gap-2 justify-between">
                    <span className="text-red-500 text-md">↓ -12%</span>
                    <span className="font-semibold text-purple-500 bg-purple-100 pr-4 pl-4 pt-1 pb-1 rounded-xl">521</span>
                  </div>
                </div>

                <div className="border-2 border-dotted flex flex-col justify-between items-between p-3 rounded-xl">
                  <div className="text-gray-500 text-md">Missed calls count</div>
                  <div className="flex items-center gap-2 justify-between">
                    <span className="text-red-500 text-md">↓ -12%</span>
                    <span className="font-semibold text-purple-500 bg-purple-100 pr-4 pl-4 pt-1 pb-1 rounded-xl">10</span>
                  </div>
                </div>
              </div>


              <div className="flex border border-dotted w-full justify-between items-center p-8">
                <div className="flex flex-col gap-4 w-full">
                  <div className="text-gray-500 text-xs">Success vs Failure rate</div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="w-[10px] h-[10px] bg-green-500"></div>
                    <span className="text-xs ">Success (94%)</span>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="w-[10px] h-[10px] bg-red-500"></div>
                    <span className="text-xs ">Failed (6%)</span>
                  </div>

                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-40 h-8 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-8 bg-green-400" style={{ width: "94%" }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-24 h-8 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-8 bg-red-400" style={{ width: "6%" }} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>
        {/* Prompt and Model */}
        <div className="flex gap-8 mb-8">


        </div>
        {/* Recent Calls */}
        <div className="bg-[#fafbfc] rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4">Recent Calls</h3>
          <table className="min-w-full text-sm mb-2">
            <thead>
              <tr className="text-gray-500 text-xs uppercase border-b">
                <th className="py-2 px-3 text-left">IME</th>
                <th className="py-2 px-3 text-left">Duration</th>
                <th className="py-2 px-3 text-left">Direction</th>
                <th className="py-2 px-3 text-left">Result</th>
                <th className="py-2 px-3 text-left">Phone</th>
                <th className="py-2 px-3 text-left">Transcript</th>
              </tr>
            </thead>
            <tbody>
              {recentCalls.map((call, idx) => (
                <tr key={idx} className="border-b last:border-b-0">
                  <td className="py-2 px-3">{call.time}</td>
                  <td className="py-2 px-3">{call.duration}</td>
                  <td className="py-2 px-3 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${call.direction === "Outbound" ? "bg-blue-500" : "bg-gray-700"}`} />
                    {call.direction}
                  </td>
                  <td className="py-2 px-3">
                    {call.result === "Success" ? (
                      <span className="text-green-600 font-semibold">Success</span>
                    ) : (
                      <span className="text-red-500 font-semibold">Failed</span>
                    )}
                  </td>
                  <td className="py-2 px-3">{call.phone}</td>
                  <td className="py-2 px-3 flex items-center gap-2">
                    <span className="text-gray-700"><AlertCircle className="w-4 h-4 inline-block mr-1" />View</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-xs text-gray-500 mt-2">Showing Last 5 of 210 calls</div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails; 