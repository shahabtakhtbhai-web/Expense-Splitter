import { ArrowUpRight, ArrowDownRight, CheckCircle2 } from "lucide-react";

const iconMap = {
  paid: { icon: ArrowUpRight, bg: "bg-emerald-50", color: "text-emerald-700" },
  owed: { icon: ArrowDownRight, bg: "bg-amber-50", color: "text-amber-600" },
  settled: { icon: CheckCircle2, bg: "bg-stone-100", color: "text-stone-600" },
};

export default function RecentActivity({ activities }) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl divide-y divide-stone-100">
      {activities.map(({ id, type, text, amount, time }) => {
        const { icon: Icon, bg, color } = iconMap[type];
        return (
          <div key={id} className="flex items-center gap-3 px-5 py-4">
            <div className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center shrink-0`}>
              <Icon className={`w-4 h-4 ${color}`} strokeWidth={1.75} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-stone-700 truncate">{text}</p>
              <p className="text-xs text-stone-400 mt-0.5">{time}</p>
            </div>
            {amount && <span className="text-sm font-medium text-stone-900 shrink-0">{amount}</span>}
          </div>
        );
      })}
    </div>
  );
}
