export default function GroupCard({ id, name, memberCount, lastActivity, balance }) {
  const isPositive = balance >= 0;

  return (
    <a
      href={`/groups/${id}`}
      className="block bg-white border border-stone-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-stone-900 font-medium">{name}</h3>
          <p className="mt-1 text-xs text-stone-500">{memberCount} members</p>
        </div>
        <div className="flex -space-x-2">
          {["bg-emerald-700", "bg-amber-500", "bg-emerald-900"].map((c, i) => (
            <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white`} />
          ))}
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
        <span className="text-xs text-stone-400">{lastActivity}</span>
        <span className={`text-sm font-medium ${isPositive ? "text-emerald-700" : "text-amber-600"}`}>
          {isPositive ? "+ " : "− "}Rs {Math.abs(balance).toLocaleString()}
        </span>
      </div>
    </a>
  );
}
