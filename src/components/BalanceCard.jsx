import { TrendingUp, TrendingDown, Scale } from "lucide-react";

const toneStyles = {
  positive: {
    icon: TrendingUp,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    amountColor: "text-emerald-800",
  },
  negative: {
    icon: TrendingDown,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    amountColor: "text-amber-700",
  },
  neutral: {
    icon: Scale,
    iconBg: "bg-stone-100",
    iconColor: "text-stone-600",
    amountColor: "text-stone-900",
  },
};

export default function BalanceCard({ title, amount, subtext, tone = "neutral" }) {
  const { icon: Icon, iconBg, iconColor, amountColor } = toneStyles[tone];

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-stone-500 font-medium">{title}</span>
        <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}>
          <Icon className={`w-4 h-4 ${iconColor}`} strokeWidth={1.75} />
        </div>
      </div>
      <div className={`mt-3 font-serif text-2xl ${amountColor}`}>{amount}</div>
      {subtext && <div className="mt-1 text-xs text-stone-400">{subtext}</div>}
    </div>
  );
}
