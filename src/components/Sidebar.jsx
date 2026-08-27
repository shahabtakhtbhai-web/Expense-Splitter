import { Receipt, LayoutDashboard, Users, User, LogOut, Plus } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Users, label: "Groups", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <aside className="hidden lg:flex w-64 shrink-0 h-screen sticky top-0 bg-emerald-950 text-stone-50 flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 px-6 h-16 border-b border-emerald-900">
          <Receipt className="w-5 h-5 text-amber-400" strokeWidth={1.75} />
          <span className="font-serif text-lg tracking-wide">Expense Splitter</span>
        </div>

        <nav className="px-4 mt-6 space-y-1">
          {navItems.map(({ icon: Icon, label, active }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-emerald-900 text-stone-50"
                  : "text-emerald-200 hover:bg-emerald-900/60 hover:text-stone-50"
              }`}
            >
              <Icon className="w-4.5 h-4.5" strokeWidth={1.75} />
              {label}
            </a>
          ))}
        </nav>

        <div className="px-4 mt-6">
          <a
            href="/groups/new"
            className="flex items-center justify-center gap-2 w-full rounded-lg bg-amber-400 hover:bg-amber-300 text-emerald-950 text-sm font-medium py-2.5 transition-colors"
          >
            <Plus className="w-4 h-4" strokeWidth={2} />
            New group
          </a>
        </div>
      </div>

      <div className="px-4 pb-6 pt-4 border-t border-emerald-900">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-emerald-800 flex items-center justify-center text-sm font-medium shrink-0">
            SD
          </div>
          <div className="min-w-0">
            <div className="text-sm text-stone-50 truncate">Shahab ud din</div>
            <div className="text-xs text-emerald-300 truncate">shahab@example.com</div>
          </div>
          <button className="ml-auto text-emerald-300 hover:text-stone-50" aria-label="Log out">
            <LogOut className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </aside>
  );
}
