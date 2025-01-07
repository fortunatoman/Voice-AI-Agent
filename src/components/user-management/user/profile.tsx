import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CheckCircle, ChevronDown, Info, Pencil, ArrowUp, ArrowDown } from "lucide-react"

export default function Profile() {
    return (
        <div className="flex bg-white p-6 rounded-xl shadow-sm flex-col lg:flex-row ">
            <div className="flex flex-col items-start lg:items-center gap-4 pr-10">
                <div className="relative">
                    <Avatar className="w-32 h-32 border-4 border-[#8b5cf6]">
                        <AvatarImage src="/avatar.png" alt="Dev Kooper" />
                        <AvatarFallback>DK</AvatarFallback>
                    </Avatar>
                    <Badge className="absolute w-[80px] flex justify-center items-center bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#f6e9ff] text-[#8b5cf6] px-3 py-1 rounded-full text-xs font-medium">
                        Pro Plan
                    </Badge>
                </div>
                <Badge className="mt-4 bg-[#d5fff1] text-[#10b981] px-3 py-1 rounded-md text-sm font-medium">
                    Active User
                </Badge>
            </div>
            <div className="w-full flex flex-col gap-10">
                <div className="flex justify-between flex-col-reverse lg:flex-row">
                    <div className="">
                        <p className="text-lg text-gray-900">Name</p>
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold text-black">Dev Kooper</p>
                            <CheckCircle className="w-4 h-4 text-[#10b981]" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-end items-start lg:items-center gap-3">
                        <span className="w-full text-sm text-gray-700 whitespace-nowrap" >Last active: 1h ago </span>
                        <Button className="bg-[#8b5cf6] hover:bg-[#7f56d9] text-white px-4 py-2 rounded-xl w-full">
                            Impersonate user
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full border-[#d8d8d8] text-gray-900 px-4 py-2 rounded-xl flex items-center gap-1 bg-transparent"
                                >
                                    More Action
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-white w-56 max-h-60 text-black overflow-y-auto">
                                <DropdownMenuItem>Delete User</DropdownMenuItem>
                                <DropdownMenuItem>Deactivate user</DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span className="flex items-center justify-between w-full">
                                        Reset password
                                        <span className="text-[#8b5cf6] ml-2">✓</span>
                                    </span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span className="flex items-center">
                                        Assign plan
                                        {/* Optionally, add an input or submenu here if needed */}
                                    </span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <div className="flex justify-between flex-col lg:flex-row">
                    <div>
                        <p className="text-sm text-gray-900">Email ID</p>
                        <p className="text-lg font-semibold text-black">devkooper@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-900">Assigned Phone Number</p>
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold text-black">(647) 1255 125</p>
                            <Pencil className="w-4 h-4 text-gray-700" />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-gray-900">
                            Usage Tier{" "}
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Info className="w-3 h-3 inline-block text-gray-700 cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent className="w-64 text-sm p-3 bg-white rounded-md shadow-lg">
                                    Tier reflects weekly call activity. Light: under 200 mins, Medium: 200-1000 mins, Heavy: over 1000
                                    mins.
                                </PopoverContent>
                            </Popover>
                        </p>
                        <p className="text-lg font-semibold text-black">Medium</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-900">Sign Up date</p>
                        <p className="text-lg font-semibold text-black">Mar 12, 2025</p>
                    </div>
                </div>

                {/* Right Column: Usage and Actions */}

                {/* Usage Statistics Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <Card className="p-4 border border-dashed border-[#c7c7cc] rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-sm text-gray-900">Total Calls</p>
                            <Badge className="bg-[#fee4e2] text-[#ef4444] px-3 py-1 rounded-xl text-base font-semibold">521</Badge>
                        </div>
                        <div className="flex items-center gap-1 text-[#10b981] text-sm font-medium">
                            <ArrowUp className="w-4 h-4" />
                            <span>+12% this week</span>
                        </div>
                    </Card>
                    <Card className="p-4 border border-dashed border-[#c7c7cc] rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-sm text-gray-900">Total Minutes Used</p>
                            <Badge className="bg-[#f6e9ff] text-[#8b5cf6] px-3 py-1 rounded-xl text-base font-semibold">1,250</Badge>
                        </div>
                        <div className="flex items-center gap-1 text-[#ef4444] text-sm font-medium">
                            <ArrowDown className="w-4 h-4" />
                            <span>-12% this week</span>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}