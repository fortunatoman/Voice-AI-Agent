import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FilterDropdown() {
  const [signupDate, setSignupDate] = useState("");
  const [planType, setPlanType] = useState("");
  const [teamMember, setTeamMember] = useState("");

  return (
    <div className="flex flex-col gap-3 p-4 w-64 text-black">
      <select
        className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue"
        value={signupDate}
        onChange={e => setSignupDate(e.target.value)}
      >
        <option value="">Signup date</option>
        <option value="newest">Today</option>
        <option value="newest">Last 7 days</option>
        <option value="newest">Last 30 days</option>
        <option value="oldest">Last 90 days</option>
      </select>
      <select
        className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue"
        value={planType}
        onChange={e => setPlanType(e.target.value)}
      >
        <option value="">Plan type</option>
        <option value="">Default</option>
        <option value="default">Pro</option>
        <option value="elite">Elite</option>
        <option value="business">Business</option>
      </select>
      <select
        className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue"
        value={teamMember}
        onChange={e => setTeamMember(e.target.value)}
      >
        <option value="">Select team member</option>
        <option value="dev">Normal Usage</option>
        <option value="dev">Medium usage</option>
        <option value="dev">Heavy usage</option>
        {/* Add more team members as needed */}
      </select>
      <Button className="mt-2 bg-primary-blue text-white rounded-xl">Apply</Button>
    </div>
  );
}