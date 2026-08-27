export default function GroupBalances({ yourBalance, members }) {
  const isPositive = yourBalance >= 0;

  return (
    <div className="space-y-4">
      {/* Your balance in this group */}
      <div className="bg-emerald-950 text-stone-50 rounded-xl p-5">
        <span className="text-xs uppercase tracking-wide text-emerald-300">Your balance</span>
        <div className={`mt-2 font-serif text-3xl ${isPositive ? "text-amber-400" : "text-stone-50"}`}>
          {isPositive ? "+ " : "− "}Rs {Math.abs(yourBalance).toLocaleString()}
        </div>
        <p className="mt-1 text-sm text-emerald-200">
          {isPositive ? "You are owed overall in this group" : "You owe overall in this group"}
        </p>
      </div>

      {/* Per-member balances */}
      <div className="bg-white border border-stone-200 rounded-xl p-5">
        <h3 className="text-sm font-medium text-stone-800">Member balances</h3>
        <ul className="mt-4 space-y-3">
          {members.map(({ id, name, balance }) => {
            const positive = balance >= 0;
            return (
              <li key={id} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-medium text-emerald-800">
                    {name.charAt(0)}
                  </div>
                  <span className="text-sm text-stone-700">{name}</span>
                </div>
                <span className={`text-sm font-medium ${positive ? "text-emerald-700" : "text-amber-600"}`}>
                  {positive ? "+ " : "− "}Rs {Math.abs(balance).toLocaleString()}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
