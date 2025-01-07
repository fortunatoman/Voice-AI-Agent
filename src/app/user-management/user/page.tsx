"use client"
import React, { useState } from "react";
import { Bot, Menu } from "lucide-react";
import NavBar from "@/components/navbar";
import Header from "@/components/header";
import User from "@/components/user-management/user";

export default function Page() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Sidebar content as a variable to avoid duplication
    const sidebarContent = (
        <NavBar />
    );

    return (
        <div className="min-h-screen bg-[#f6f6f6] flex relative">
            {/* Hamburger button for mobile */}
            <button
                className="md:hidden absolute top-4 left-4 z-20 bg-white p-2 rounded shadow"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Sidebar for desktop */}
            <div className="hidden md:flex w-64 bg-white border-r border-[#e9eaeb] flex-col">
                {sidebarContent}
            </div>

            {/* Sidebar overlay for mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-30 flex">
                    <div className="w-64 bg-white border-r border-[#e9eaeb] flex flex-col h-full animate-slide-in-left">
                        {sidebarContent}
                    </div>
                    {/* Overlay background */}
                    <div
                        className="flex-1 bg-black/30"
                        onClick={() => setSidebarOpen(false)}
                    />
                </div>
            )}

            <div className="w-full">
                <Header />
                <User />
            </div>
        </div>
    )
}