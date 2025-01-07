"use client";
import React from "react";
import { ChevronDown, FileText, Trash2 } from "lucide-react";
import NavBar from "@/components/navbar";
import Headers from "@/components/header";

const files = [
  { name: "product_faq.pdf", date: "Jun 22, 2025", status: "Pending" },
  { name: "product_faq.pdf", date: "Jun 22, 2025", status: "Pending" },
  { name: "image_1245.jpeg", date: "Jun 22, 2025", status: "Completed" },
  { name: "product_faq.pdf", date: "Jun 22, 2025", status: "Pending" },
  { name: "image_1245.jpeg", date: "Jun 22, 2025", status: "Completed" },
];

const statusBadge = (status: string) => {
  if (status === "Pending") return "bg-yellow-100 text-yellow-600";
  if (status === "Completed") return "bg-green-100 text-green-600";
  return "bg-gray-100 text-gray-600";
};

export default function EditPromptPage() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-[#e9eaeb] flex flex-col">
        <NavBar />
      </div>
      <div className="w-full">
        <Headers />
        <div className="p-8 text-black">
          {/* Edit Prompt Section */}
          <div className="bg-white rounded-xl shadow p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Edit Prompt</h2>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-600">Pending</span>
            </div>
            <div className="mb-2 font-medium">Prompt Text</div>
            <textarea
              className="w-full min-h-[80px] border border-gray-200 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-[#fafbfc]"
              defaultValue={"Follow up with customer if no reply within 3 days."}
            />
            <div className="text-xs text-gray-400 mt-2">Last updated Jun 25, 2025 10:24 AM</div>
            <div className="flex gap-2 mt-6 justify-end">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl font-semibold flex items-center gap-2">
                <Trash2 className="w-4 h-4" /> Delete prompt
              </button>
              <button className="border px-6 py-2 rounded-xl font-semibold flex items-center gap-2">
                Change status <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Files uploaded by user */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-bold mb-4">Files uploaded by user</h3>
            <table className="min-w-full text-sm mb-2">
              <thead>
                <tr className="text-gray-500 text-xs uppercase border-b">
                  <th className="py-2 px-3 text-left">File Name</th>
                  <th className="py-2 px-3 text-left">Uploaded On</th>
                  <th className="py-2 px-3 text-left">Status</th>
                  <th className="py-2 px-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, idx) => (
                  <tr key={idx} className="border-b last:border-b-0">
                    <td className="py-2 px-3 font-medium text-gray-800 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400" /> {file.name}
                    </td>
                    <td className="py-2 px-3">{file.date}</td>
                    <td className="py-2 px-3">
                      <span className={`px-3 py-1 rounded-full w-[80px] text-xs font-semibold ${statusBadge(file.status)} flex items-center gap-1`}>
                        {file.status}
                        <ChevronDown className="w-4 h-4 inline-block ml-1" />
                      </span>
                    </td>
                    <td className="py-2 px-3">
                      <button className="flex items-center gap-1 text-indigo-600 font-medium hover:underline">
                        <FileText className="w-4 h-4" /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 