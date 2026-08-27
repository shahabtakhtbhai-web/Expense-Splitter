import { Receipt } from "lucide-react";

export default function ExpenseList({ expenses }) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl divide-y divide-stone-100">
      {expenses.map(({ id, title, paidBy, amount, date, splitAmong }) => (
        <div key={id} className="flex items-center gap-4 px-5 py-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
            <Receipt className="w-4.5 h-4.5 text-emerald-700" strokeWidth={1.75} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-stone-800 font-medium truncate">{title}</p>
            <p className="text-xs text-stone-500 mt-0.5">
              Paid by {paidBy} · split among {splitAmong} · {date}
            </p>
          </div>
          <span className="text-sm font-medium text-stone-900 shrink-0">Rs {amount.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}
