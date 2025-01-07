import React, { useRef, useEffect } from "react";

const options = [
  "Today",
  "Last 7 days",
  "Last 30 days",
  "Last 90 days"
];

interface DateRangeDropdownProps {
  open: boolean;
  onClose: () => void;
  onSelect: (option: string) => void;
  anchorEl?: HTMLElement | null;
}

const highlightClasses = [
  "border-t-2 border-yellow-600", // Today
  "", // Last 7 days
  "", // Last 30 days
  "border-b-2 border-indigo-600" // Last 90 days
];

export default function DateRangeDropdown({ open, onClose, onSelect }: DateRangeDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute z-50 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 text-black"
      style={{ minWidth: 180 }}
    >
      {options.map((option, idx) => (
        <div
          key={option}
          className={`px-5 py-3 cursor-pointer hover:bg-gray-100 text-base font-normal ${highlightClasses[idx]}`}
          onClick={() => {
            onSelect(option);
            onClose();
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );
} 