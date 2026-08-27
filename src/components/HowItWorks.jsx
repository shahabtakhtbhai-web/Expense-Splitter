const steps = [
  { n: "01", title: "Create a group", desc: "Add a trip, a household, or any shared pot of expenses." },
  { n: "02", title: "Log expenses", desc: "Note who paid, how much, and who it should be split between." },
  { n: "03", title: "Settle up", desc: "See the simplest way to clear balances, and mark it done." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest text-amber-600">How it works</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-emerald-950">
            Settled in three steps.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-10 relative">
          <div className="hidden md:block absolute top-6 left-[16.5%] right-[16.5%] h-px bg-stone-200" />
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="relative">
              <div className="w-12 h-12 rounded-full bg-emerald-900 text-stone-50 font-serif text-sm flex items-center justify-center relative z-10">
                {n}
              </div>
              <h3 className="mt-5 text-stone-900 font-medium">{title}</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed max-w-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
