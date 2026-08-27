import DashboardLayout from "@/components/DashboardLayout";
import BalanceCard from "@/components/BalanceCard";
import GroupCard from "@/components/GroupCard";
import RecentActivity from "@/components/RecentActivity";
import { Plus } from "lucide-react";

// Dummy data — replace with real API calls
const groups = [
  { id: 1, name: "Goa Trip", memberCount: 4, lastActivity: "2 days ago", balance: 1000 },
  { id: 2, name: "Flat 3B Roommates", memberCount: 3, lastActivity: "5 hours ago", balance: -450 },
  { id: 3, name: "Office Lunch Club", memberCount: 6, lastActivity: "1 day ago", balance: 220 },
  { id: 4, name: "Weekend BBQ", memberCount: 5, lastActivity: "1 week ago", balance: 0 },
];

const activities = [
  { id: 1, type: "paid", text: "Ali added 'Hotel booking' in Goa Trip", amount: "Rs 2,000", time: "2 hours ago" },
  { id: 2, type: "owed", text: "You owe Sara for 'Dinner' in Goa Trip", amount: "Rs 300", time: "5 hours ago" },
  { id: 3, type: "settled", text: "Bilal settled up with you", amount: "Rs 1,000", time: "1 day ago" },
  { id: 4, type: "paid", text: "Ahmed added 'Groceries' in Flat 3B", amount: "Rs 1,500", time: "2 days ago" },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl text-emerald-950">Welcome back, Shahab</h1>
          <p className="mt-1 text-sm text-stone-500">Here's what's happening across your groups.</p>
        </div>
        <a
          href="/groups/new"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-stone-50 text-sm font-medium px-5 py-2.5 transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" strokeWidth={2} />
          New group
        </a>
      </div>

      {/* Balance summary */}
      <div className="mt-8 grid sm:grid-cols-3 gap-4">
        <BalanceCard title="You are owed" amount="Rs 1,220" subtext="Across 2 groups" tone="positive" />
        <BalanceCard title="You owe" amount="Rs 450" subtext="Across 1 group" tone="negative" />
        <BalanceCard title="Net balance" amount="Rs 770" subtext="You're in the green" tone="neutral" />
      </div>

      {/* Groups */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl text-emerald-950">Your groups</h2>
          <a href="#" className="text-sm text-emerald-800 hover:text-emerald-900">
            View all
          </a>
        </div>
        <div className="mt-4 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {groups.map((group) => (
            <GroupCard key={group.id} {...group} />
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="mt-10 pb-10">
        <h2 className="font-serif text-xl text-emerald-950">Recent activity</h2>
        <div className="mt-4">
          <RecentActivity activities={activities} />
        </div>
      </div>
    </DashboardLayout>
  );
}
