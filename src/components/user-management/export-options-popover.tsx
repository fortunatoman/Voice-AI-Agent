import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const exportOptions = [
    {
        label: "Export csv",
        value: "csv",
        icon: (
            <img src={"/csv.svg"} alt="csv" className="w-5 h-5" />
    ),
    },
    {
        label: "Export pdf",
        value: "pdf",
        icon: (
            <img src={"/pdf.svg"} alt="pdf" className="w-5 h-5" />
        ),
    },
    {
        label: "Export in excel",
        value: "excel",
        icon: (
            <img src={"/excel.svg"} alt="excel" className="w-5 h-5" />
        ),
    },
];

export default function ExportOptionsPopover() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("excel");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="rounded-xl px-4 py-2 h-auto border-d5d7da text-414651 bg-transparent"
                >
                    Export
                    <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="p-0 bg-white rounded-xl shadow-lg w-56">
                <div className="py-2">
                    {exportOptions.map(option => (
                        <button
                            key={option.value}
                            className={`flex items-center w-full px-4 py-3 text-left hover:bg-gray-100 focus:bg-gray-100 transition-colors ${selected === option.value ? 'bg-gray-50' : ''}`}
                            onClick={() => { setSelected(option.value); setOpen(false); }}
                        >
                            <span className="mr-3">{option.icon}</span>
                            <span className="flex-1 text-base text-gray-900">{option.label}</span>
                            {selected === option.value && <Check className="w-5 h-5 text-green-600 ml-2" />}
                        </button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}
