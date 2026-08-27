import DashboardLayout from "@/components/DashboardLayout";
import GroupHeader from "@/components/GroupHeader";
import ExpenseList from "@/components/ExpenseList";
import GroupBalances from "@/components/GroupBalances";

// Dummy data — replace with a real fetch using params.id
const group = {
  name: "Goa Trip",
  memberCount: 4,
  yourBalance: 1000,
};

const expenses = [
  { id: 1, title: "Hotel booking", paidBy: "Ali", amount: 2000, date: "Aug 20", splitAmong: "4 people" },
  { id: 2, title: "Dinner at beach shack", paidBy: "Sara", amount: 1200, date: "Aug 21", splitAmong: "4 people" },
  { id: 3, title: "Petrol", paidBy: "Ahmed", amount: 800, date: "Aug 21", splitAmong: "4 people" },
  { id: 4, title: "Breakfast", paidBy: "Bilal", amount: 600, date: "Aug 22", splitAmong: "4 people" },
];

const members = [
  { id: 1, name: "Ali", balance: 1000 },
  { id: 2, name: "Sara", balance: 200 },
  { id: 3, name: "Ahmed", balance: -200 },
  { id: 4, name: "Bilal", balance: -1000 },
];

export default function GroupPage({ params }) {
  // params.id is available here once you wire up a real fetch
  return (
    <DashboardLayout>
      <GroupHeader name={group.name} memberCount={group.memberCount} />

      <div className="mt-8 grid lg:grid-cols-3 gap-6 pb-10">
        <div className="lg:col-span-2">
          <h2 className="font-serif text-xl text-emerald-950 mb-4">Expenses</h2>
          <ExpenseList expenses={expenses} />
        </div>

        <div>
          <h2 className="font-serif text-xl text-emerald-950 mb-4">Balances</h2>
          <GroupBalances yourBalance={group.yourBalance} members={members} />
        </div>
      </div>
    </DashboardLayout>
  );
}
