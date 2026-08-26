import { PieChart, Users, Wallet, Smartphone } from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Smart splitting",
    desc: "Split equally, by percentage, or custom amounts — the app does the math.",
  },
  {
    icon: Users,
    title: "Group balances",
    desc: "See exactly who owes whom, updated the moment an expense is added.",
  },
  {
    icon: Wallet,
    title: "One-tap settle up",
    desc: "Clear balances with the fewest possible transactions between friends.",
  },
  {
    icon: Smartphone,
    title: "Works everywhere",
    desc: "Add an expense from your phone the second the bill lands on the table.",
  },
];

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
      <div className="max-w-xl">
        <span className="text-xs uppercase tracking-widest text-amber-600">Features</span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-emerald-950">
          Everything you need, nothing you don't.
        </h2>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white border border-stone-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-sm transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
              <Icon className="w-5 h-5 text-emerald-800" strokeWidth={1.75} />
            </div>
            <h3 className="mt-4 text-stone-900 font-medium">{title}</h3>
            <p className="mt-2 text-sm text-stone-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
