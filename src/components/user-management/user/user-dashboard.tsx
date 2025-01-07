import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DonutChart } from "@/components/dashboard/donut-chart";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table";
import { Info } from "lucide-react";
import React from "react";

const planDetails = {
  plan: "Pro Plan",
  nextInvoiceDate: "Jul 16, 2025",
  status: "Active",
  paymentMethod: "**** 4562 VISA",
  nextInvoiceAmount: "$462.50",
  usedMins: 1200,
  availableMins: 714,
  usedPercent: 63,
  availablePercent: 37,
};

const usageSummary = {
  inbound: 3100,
  outbound: 2450,
  total: 3210,
  change: -11,
};

const recentCalls = [
  { date: "28 Jun. 14:12", type: "Outbound", duration: "3m 12s", result: "Missed" },
  { date: "28 Jun. 14:12", type: "Outbound", duration: "3m 12s", result: "Success" },
  { date: "28 Jun. 14:12", type: "Inbound", duration: "3m 12s", result: "Failed" },
  { date: "28 Jun. 14:12", type: "Outbound", duration: "3m 12s", result: "Success" },
  { date: "28 Jun. 14:12", type: "Outbound", duration: "3m 12s", result: "Success" },
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

export default function UserDashboard() {
  return (
    <div className="mt-8">
      {/* Top Cards */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Plan Details */}
        <Card className="flex-1 min-w-[320px] bg-white p-6 rounded-xl shadow-sm text-black">
          <CardHeader>
            <CardTitle>Plan Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between items-center">
                <span>Current Plan:</span>
                <Badge className="bg-violet-100 text-violet-700 px-3 py-1 rounded-lg">{planDetails.plan}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Next Invoice Date:</span>
                <span>{planDetails.nextInvoiceDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Status:</span>
                <Badge className="bg-green-100 text-green-700 px-3 py-1 rounded-lg">{planDetails.status}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Payment Method:</span>
                <span>{planDetails.paymentMethod}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Next Invoice Amount:</span>
                <span>{planDetails.nextInvoiceAmount}</span>
              </div>
            </div>
            {/* Quota Usage */}
            <div className="mt-6">
              <div className="text-xs mb-1 font-medium">Monthly Quota Usage:</div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-blue-200"
                  style={{ width: `${planDetails.usedPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-blue-900 font-medium">Used {planDetails.usedMins} mins ({planDetails.usedPercent}%)</span>
                <span className="text-gray-500">Available {planDetails.availableMins} mins ({planDetails.availablePercent}%)</span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Usage Summary */}
        <Card className="flex-1 min-w-[320px] bg-white p-6 rounded-xl shadow-sm text-black">
          <CardHeader>
            <CardTitle>Usage Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <DonutChart
                inbound={usageSummary.inbound}
                outbound={usageSummary.outbound}
                centerValue={usageSummary.total}
                centerLabel="Total minutes"
              />
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-600" />
                  <span>Inbound ({usageSummary.inbound})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-200" />
                  <span>Outbound ({usageSummary.outbound})</span>
                </div>
                <div className="mt-2">
                  <span className="text-xs text-red-500 bg-red-100 px-2 py-0.5 rounded">{usageSummary.change}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Recent Calls Table */}
      <div className="mt-8 text-black">
        <Card className="bg-white p-6 rounded-xl shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Calls</CardTitle>
            <Button variant="outline" size="sm">View More</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>DATE/TIME</TableHead>
                  <TableHead>TYPE</TableHead>
                  <TableHead>DURATION</TableHead>
                  <TableHead>RESULT</TableHead>
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
                    <TableCell>{call.duration}</TableCell>
                    <TableCell>
                      <span className={`px-3 py-1 rounded-lg font-medium text-xs ${resultColor[call.result as keyof typeof resultColor]}`}>{call.result}</span>
                    </TableCell>
                    <TableCell>
                      <Info className="w-4 h-4 text-gray-400" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableCaption className="text-xs text-gray-400 text-left">Showing Last 5 of 210 calls</TableCaption>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 