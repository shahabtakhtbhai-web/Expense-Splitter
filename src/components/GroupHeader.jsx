import { ArrowLeft, Plus, Wallet } from "lucide-react";

export default function GroupHeader({ name, memberCount }) {
  return (
    <div>
      <a href="/dashboard" className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-emerald-900">
        <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
        Back to dashboard
      </a>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {["bg-emerald-700", "bg-amber-500", "bg-emerald-900", "bg-stone-400"].map((c, i) => (
              <div key={i} className={`w-10 h-10 rounded-full ${c} border-2 border-stone-50`} />
            ))}
          </div>
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl text-emerald-950">{name}</h1>
            <p className="text-sm text-stone-500">{memberCount} members</p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button className="inline-flex items-center gap-2 rounded-lg border border-stone-300 hover:border-emerald-700 text-stone-700 hover:text-emerald-900 text-sm font-medium px-4 py-2.5 transition-colors">
            <Wallet className="w-4 h-4" strokeWidth={1.75} />
            Settle up
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-stone-50 text-sm font-medium px-4 py-2.5 transition-colors">
            <Plus className="w-4 h-4" strokeWidth={2} />
            Add expense
          </button>
        </div>
      </div>
    </div>
  );
}
