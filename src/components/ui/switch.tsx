"use client";
import React from "react";

export default function Switch({ checked = false, onChange, className = "" }: { checked?: boolean; onChange?: (v: boolean) => void; className?: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className={`w-10 h-6 rounded-full transition-colors duration-200 focus:outline-none flex items-center px-0.5 ${
        checked ? "bg-[#4746fa]" : "bg-gray-200"
      } ${className}`}
    >
      <span
        className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
          checked ? "translate-x-4" : ""
        }`}
      />
    </button>
  );
}
