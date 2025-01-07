import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"

export default function Component() {
    const usageData = [
        { day: "Mon", high: 13, medium: 4, light: 7 }, // Total 24 hours
        { day: "Tue", high: 7, medium: 7, light: 10 },
        { day: "Wed", high: 5, medium: 6, light: 13 },
        { day: "Thu", high: 4, medium: 3, light: 17 },
        { day: "Fri", high: 11, medium: 6, light: 7 },
        { day: "Sat", high: 9, medium: 7, light: 8 },
        { day: "Sun", high: 13, medium: 3, light: 8 },
    ]

    const timeLabels = ["00:00", "06:00", "12:00", "18:00", "24:00"]
    const hourUnitHeight = 10 // 10px per hour, so 240px total chart height

    return (
        <Card className="w-full max-w-2xl rounded-xl shadow-lg bg-[#ffffff]">
            <CardHeader className="flex flex-row items-center justify-between p-6 pb-4">
                <CardTitle className="text-2xl font-bold text-[#1c1c1e]">Heatmap Usage</CardTitle>
                <MoreHorizontal className="h-6 w-6 text-[#1c1c1e]" />
            </CardHeader>
            <CardContent className="p-6 pt-0">
                <div className="flex items-center gap-4 mb-6 text-sm text-[#1c1c1e]">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#4a48ff]" />
                        High usage
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#c7c6ff]" />
                        Medium usage
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#e4e4ff]" />
                        Light usage
                    </div>
                </div>

                <div className="flex" style={{ height: `${24 * hourUnitHeight}px` }}>
                    {/* Y-axis labels */}
                    <div className="flex flex-col justify-between pr-4 text-sm text-[#1c1c1e] h-full w-[60px] flex-shrink-0">
                        {timeLabels.map((label, index) => (
                            <div
                                key={label}
                                className="relative flex items-center justify-end"
                                style={{
                                    height: index === timeLabels.length - 1 ? "0px" : `${6 * hourUnitHeight}px`,
                                    marginBottom: index === timeLabels.length - 1 ? "-0.5em" : "0", // Adjust 24:00 label position
                                }}
                            >
                                {label}
                            </div>
                        ))}
                    </div>

                    {/* Main chart area: grid, bars, and X-axis labels */}
                    <div className="flex-1 flex flex-col">
                        {/* Chart grid and bars container */}
                        <div className="relative flex-1">
                            {/* Horizontal grid lines */}
                            {timeLabels.map((_, index) => (
                                <div
                                    key={`h-grid-${index}`}
                                    className="absolute left-0 right-0 border-t border-dashed border-[#e1e3ea]"
                                    style={{
                                        top: `${index * 6 * hourUnitHeight}px`,
                                        zIndex: 0,
                                    }}
                                />
                            ))}

                            {/* Vertical grid lines and bars */}
                            <div className="grid grid-cols-7 gap-x-4 h-full">
                                {usageData.map((data, index) => (
                                    <div key={data.day} className="flex flex-col items-center justify-end h-full relative">
                                        {/* Vertical dashed line for this column */}
                                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l border-dashed border-[#e1e3ea]" />
                                        {/* Stacked bars */}
                                        <div className="flex flex-col-reverse w-8 rounded-t-full overflow-hidden z-10">
                                            {data.high > 0 && (
                                                <div className="bg-[#4a48ff] w-full" style={{ height: `${data.high * hourUnitHeight}px` }} />
                                            )}
                                            {data.medium > 0 && (
                                                <div className="bg-[#c7c6ff] w-full" style={{ height: `${data.medium * hourUnitHeight}px` }} />
                                            )}
                                            {data.light > 0 && (
                                                <div className="bg-[#e4e4ff] w-full" style={{ height: `${data.light * hourUnitHeight}px` }} />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* X-axis labels */}
                        <div className="grid grid-cols-7 gap-x-4 mt-2 text-sm text-[#1c1c1e]">
                            {usageData.map((data) => (
                                <div key={data.day} className="text-center">
                                    {data.day}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
