"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CheckCircle, ChevronDown, Info, Pencil, ArrowUp, ArrowDown, Search, SlidersHorizontal, ChevronDownCircle, RecycleIcon, PlayCircle } from "lucide-react"
import Profile from "./profile"
import NavigationTabs from "./navigation-tabs"
import UserDashboard from "./user-dashboard"
import React, { useState } from "react";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import DateRangeDropdown from "./date-range-dropdown";

function FullTranscriptView({ onBack }: { onBack: () => void }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [activeTab, setActiveTab] = useState<'transcript' | 'summary'>('transcript');
  // Placeholder data for the transcript
  const transcript = [
    { sender: "AI Agent", text: "Lorem ipsum dolor sit amet consectetur. Dolor ac pharetra velit eu libero in. Justo lectus volutpat id donec. Vel eget ut nulla est. Sit enim faucibus ac donec mattis a ultricies lobortis duis.", avatar: "B", isUser: false },
    { sender: "Ben", text: "Lorem ipsum dolor sit amet consectetur. Dolor ac pharetra velit eu libero in. Justo lectus volutpat id donec.", avatar: "/avatar-ben.png", isUser: true },
    { sender: "AI Agent", text: "Lorem ipsum dolor sit amet consectetur. Dolor ac pharetra velit eu libero in. Justo lectus volutpat", avatar: "B", isUser: false },
    { sender: "Ben", text: "Lorem ipsum dolor", avatar: "/avatar-ben.png", isUser: true },
  ];
  return (
    <div className="bg-[#fafbfc] rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-black">
          <Button variant="ghost" size="icon" onClick={onBack}>{"<"}</Button>
          <input className="bg-[#f4f4f5] rounded-xl px-4 py-2 text-sm w-64 border" placeholder="Search for keywords" />
          <Button className="ml-2 w-[90px]  bg-[#4a48ff] text-white rounded-xl px-4 py-2">🔍</Button>
        </div>
        <div className="flex gap-2">
          <AlertDialog open={openDelete} onOpenChange={setOpenDelete}>
            <AlertDialogTrigger asChild>
              <Button className="w-[150px] bg-red-500 hover:bg-red-300 hover:text-black text-white rounded-xl px-6 py-2" onClick={() => setOpenDelete(true)}>Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white text-black">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl font-bold">Delete User</AlertDialogTitle>
              </AlertDialogHeader>
              <div className="flex flex-col items-center my-4">
                <div className="bg-red-100 rounded-full p-4 mb-4">
                  <RecycleIcon className='text-red'/>
                </div>
                <div className="text-center text-base mb-6">Are you sure you want to delete this user, all data will be lost.</div>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel className="rounded-md px-8 py-2">Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-red-500 text-white rounded-md px-8 py-2">Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button className="w-[150px] hover:bg-purple-300 bg-[#4a48ff] hover:text-black text-white rounded-xl px-6 py-2">Download</Button>
        </div>
      </div>
      {/* Call Details */}
      <div className="flex gap-24 mb-4 text-sm w-full">
        <div><div className="font-semibold text-gray-500">Call ID:</div><div className="text-black">#778999</div></div>
        <div><div className="font-semibold text-gray-500">Phone number</div><div className="text-black">(647) 1255 125</div></div>
        <div><div className="font-semibold text-gray-500">Date & Time:</div><div className="text-black">2025-06-30 11:22 AM</div></div>
        <div><div className="font-semibold text-gray-500">Direction:</div><div className="flex items-center gap-1 text-black"><span className="inline-block w-3 h-3 rounded-full bg-blue-600" /> Outbound</div></div>
        <div><div className="font-semibold text-gray-500">Duration:</div><div className="text-black">4m 30s</div></div>
      </div>
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <Button
          className={`font-semibold rounded-t-lg px-8 py-2 shadow-none ${activeTab === 'transcript' ? 'bg-[#ececff] text-[#4a48ff]' : 'bg-transparent text-gray-400'}`}
          onClick={() => setActiveTab('transcript')}
        >
          Transcript
        </Button>
        <Button
          className={`font-semibold rounded-t-lg px-8 py-2 shadow-none ${activeTab === 'summary' ? 'bg-[#ececff] text-[#4a48ff]' : 'bg-transparent text-gray-400'}`}
          onClick={() => setActiveTab('summary')}
        >
          Summary
        </Button>
      </div>
      {/* Content */}
      {activeTab === 'transcript' && (
        <div className="flex flex-col gap-6">
          {transcript.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
              {!msg.isUser && (
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold text-lg">B</div>
                    <div className="bg-[#f4f4f5] rounded-xl px-6 py-4 text-black max-w-xl">{msg.text}</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">AI Agent</div>
                </div>
              )}
              {msg.isUser && (
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#4a48ff] text-white rounded-xl px-6 py-4 max-w-xl">{msg.text}</div>
                    <img src="/avatar-ben.png" alt="Ben" className="w-10 h-10 rounded-full object-cover" />
                  </div>
                  <div className="text-xs text-gray-500 mt-1 mr-2">Ben</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {activeTab === 'summary' && (
        <div className="bg-white rounded-2xl p-8 shadow text-black">
          <div className="text-2xl font-bold mb-4">Lorem Ipsum</div>
          <div className="space-y-6 text-base">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function User() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [showTranscript, setShowTranscript] = useState(false);
  // Date range dropdown state for each tab
  const [showFilterDropdown, setShowFilterDropdown] = useState({
    calls: false,
    recordings: false,
    transcripts: false,
  });
  const [selectedRange, setSelectedRange] = useState({
    calls: "Today",
    recordings: "Today",
    transcripts: "Today",
  });
  const recentCalls = [
    { date: "28 Jun, 14:12", type: "Outbound", phone: "(647) 124-4568", duration: "3m 12s", result: "Missed" },
    { date: "28 Jun, 14:12", type: "Outbound", phone: "(647) 124-4568", duration: "3m 12s", result: "Missed" },
    { date: "28 Jun, 14:12", type: "Outbound", phone: "(647) 124-4568", duration: "3m 12s", result: "Missed" },
    { date: "28 Jun, 14:12", type: "Inbound", phone: "(647) 124-4568", duration: "3m 12s", result: "Success" },
    { date: "28 Jun, 14:12", type: "Outbound", phone: "(647) 124-4568", duration: "3m 12s", result: "Missed" },
    { date: "28 Jun, 14:12", type: "Outbound", phone: "(647) 124-4568", duration: "3m 12s", result: "Missed" },
    { date: "28 Jun, 14:12", type: "Inbound", phone: "(647) 124-4568", duration: "3m 12s", result: "Failed" },
    { date: "28 Jun, 14:12", type: "Outbound", phone: "(647) 124-4568", duration: "3m 12s", result: "Missed" },
    { date: "28 Jun, 14:12", type: "Inbound", phone: "(647) 124-4568", duration: "3m 12s", result: "Missed" },
    { date: "28 Jun, 14:12", type: "Outbound", phone: "(647) 124-4568", duration: "3m 12s", result: "Failed" },
  ];
  const resultColor = {
    Missed: "bg-yellow-100 text-yellow-700",
    Success: "bg-green-100 text-green-700",
    Failed: "bg-red-100 text-red-700",
  };
  const typeIcon = {
    Outbound: <span className="inline-block w-3 h-3 rounded-full bg-blue-600 mr-2 align-middle" />,
    Inbound: <span className="inline-block w-3 h-3 rounded-full bg-gray-400 mr-2 align-middle" />,
  };
  return (
    <div className="p-6 rounded-xl shadow-sm mx-auto m-8 ml-8 mr-8">
      <h2 className="text-2xl font-bold mb-6 text-black">Basic Information</h2>
      {/* Left Column: Avatar and Status */}
      {!(activeTab === "Transcripts" && showTranscript) && <Profile />}
      {!(activeTab === "Transcripts" && showTranscript) && <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />}
      {/* Dashboard Section */}
      {activeTab === "Overview" && <UserDashboard />}
      {activeTab === "Calls Logs" && (
        <div className="mt-8 text-black">
          <Card className="bg-white p-6 rounded-xl shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
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
              <div className="flex gap-4 relative">
                <div className="relative">
                  <Button variant="outline" size="sm" className="rounded-xl w-[150px] flex justify-between" onClick={() => setShowFilterDropdown(s => ({...s, calls: !s.calls}))}>
                    Filter
                    <SlidersHorizontal className="w-5 h-5" />
                  </Button>
                  <DateRangeDropdown
                    open={showFilterDropdown.calls}
                    onClose={() => setShowFilterDropdown(s => ({...s, calls: false}))}
                    onSelect={option => setSelectedRange(s => ({...s, calls: option}))}
                  />
                </div>
                <Button variant="outline" size="sm" className="rounded-xl w-[150px] flex justify-between">
                  All Logs
                  <ChevronDown className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>DATE/TIME</TableHead>
                    <TableHead>TYPE</TableHead>
                    <TableHead>PHONE</TableHead>
                    <TableHead>DURATION</TableHead>
                    <TableHead>RESULT</TableHead>
                    <TableHead>RECORDING</TableHead>
                    <TableHead>TRANSCRIPT</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCalls.map((call, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{call.date}</TableCell>
                      <TableCell>
                        <span className="flex items-center">
                          {typeIcon[call.type as keyof typeof typeIcon]}
                          {call.type}
                        </span>
                      </TableCell>
                      <TableCell>{call.phone}</TableCell>
                      <TableCell>{call.duration}</TableCell>
                      <TableCell>
                        <span className={`px-3 py-1 rounded-xl font-medium text-xs ${resultColor[call.result as keyof typeof resultColor]}`}>{call.result}</span>
                      </TableCell>
                      <TableCell>
                        {/* Recording: show Listen button or disabled if failed */}
                        {call.result === "Failed" ? (
                          <span className="text-gray-400 flex items-center gap-1"><PlayCircle className="w-4 h-4" /> Listen</span>
                        ) : (
                          <Button variant="ghost" size="sm" className="flex items-center gap-1"><PlayCircle className="w-4 h-4" /> Listen</Button>
                        )}
                      </TableCell>
                      <TableCell>
                        {/* Transcript: show View button or disabled if failed */}
                        {call.result === "Failed" ? (
                          <span className="text-gray-400 flex items-center gap-1"><Info className="w-4 h-4" /> View</span>
                        ) : (
                          <Button variant="ghost" size="sm" className="flex items-center gap-1"><Info className="w-4 h-4" /> View</Button>
                        )}
                      </TableCell>
                      <TableCell>
                        {/* Action menu placeholder */}
                        <Button variant="ghost" size="icon"><span className="sr-only">More</span>⋮</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableCaption className="text-xs text-gray-400 text-left">Showing 5 - 10 entries</TableCaption>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
      {activeTab === "Recordings" && (
        <div className="mt-8 text-black">
          <Card className="bg-white p-6 rounded-xl shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
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
              <div className="flex gap-4 relative">
                <div className="relative">
                  <Button variant="outline" size="sm" className="rounded-xl w-[150px] flex justify-between" onClick={() => setShowFilterDropdown(s => ({...s, recordings: !s.recordings}))}>
                    Filter
                    <SlidersHorizontal className="w-5 h-5" />
                  </Button>
                  <DateRangeDropdown
                    open={showFilterDropdown.recordings}
                    onClose={() => setShowFilterDropdown(s => ({...s, recordings: false}))}
                    onSelect={option => setSelectedRange(s => ({...s, recordings: option}))}
                  />
                </div>
                <Button variant="outline" size="sm" className="rounded-xl w-[150px] flex justify-between">
                  All Logs
                  <ChevronDown className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>DATE/TIME</TableHead>
                    <TableHead>TYPE</TableHead>
                    <TableHead>PHONE</TableHead>
                    <TableHead>DURATION</TableHead>
                    <TableHead>RECORDING</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCalls.slice(0, 7).map((call, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{call.date}</TableCell>
                      <TableCell>
                        <span className="flex items-center">
                          {typeIcon[call.type as keyof typeof typeIcon]}
                          {call.type}
                        </span>
                      </TableCell>
                      <TableCell>{"(647) 1255 125"}</TableCell>
                      <TableCell>{call.duration}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1"><PlayCircle className="w-4 h-4" /> Listen</Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon"><span className="sr-only">More</span>⋮</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableCaption className="text-xs text-gray-400 text-left">Showing 5 - 10 entries</TableCaption>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
      {activeTab === "Transcripts" && !showTranscript && (
        <div className="mt-8 text-black">
          <Card className="bg-white p-6 rounded-xl shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
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
              <div className="flex gap-4 relative">
                <div className="relative">
                  <Button variant="outline" size="sm" className="rounded-xl w-[150px] flex justify-between" onClick={() => setShowFilterDropdown(s => ({...s, transcripts: !s.transcripts}))}>
                    Filter
                    <SlidersHorizontal className="w-5 h-5" />
                  </Button>
                  <DateRangeDropdown
                    open={showFilterDropdown.transcripts}
                    onClose={() => setShowFilterDropdown(s => ({...s, transcripts: false}))}
                    onSelect={option => setSelectedRange(s => ({...s, transcripts: option}))}
                  />
                </div>
                <Button variant="outline" size="sm" className="rounded-xl w-[150px] flex justify-between">
                  All Logs
                  <ChevronDown className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>CALL ID</TableHead>
                    <TableHead>DATE/TIME</TableHead>
                    <TableHead>TYPE</TableHead>
                    <TableHead>PHONE</TableHead>
                    <TableHead>DURATION</TableHead>
                    <TableHead>SNIPPET</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCalls.slice(0, 7).map((call, idx) => (
                    <TableRow key={idx}>
                      <TableCell>#778999</TableCell>
                      <TableCell>{call.date}</TableCell>
                      <TableCell>
                        <span className="flex items-center">
                          {typeIcon[call.type as keyof typeof typeIcon]}
                          {call.type}
                        </span>
                      </TableCell>
                      <TableCell>{"(647) 1255 125"}</TableCell>
                      <TableCell>{call.duration}</TableCell>
                      <TableCell>
                        <span className="truncate max-w-[180px] inline-block align-middle">"Hi Ravi, thanks for..."</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="ml-2 align-middle"><span className="sr-only">More</span>⋮</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start" className="bg-white text-black">
                            <DropdownMenuItem onSelect={() => setShowTranscript(true)}>View full transcript</DropdownMenuItem>
                            <DropdownMenuItem>Download transcript</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableCaption className="text-xs text-gray-400 text-left">Showing 5 - 10 entries</TableCaption>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
      {activeTab === "Transcripts" && showTranscript && (
        <FullTranscriptView onBack={() => setShowTranscript(false)} />
      )}
    </div>
  )
}
