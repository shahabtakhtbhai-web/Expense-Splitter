import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5">
          Built for friends, roommates &amp; trips
        </span>

        <h1 className="mt-6 font-serif text-4xl sm:text-5xl leading-[1.1] text-emerald-950">
          Split bills without the awkward math.
        </h1>

        <p className="mt-5 text-stone-600 text-base leading-relaxed max-w-md">
          Log shared expenses, see who owes what in real time, and settle up with a
          single tap — no spreadsheets, no chasing friends for money.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-stone-50 text-sm font-medium px-6 py-3.5 transition-colors"
          >
            Get started free
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 hover:border-emerald-700 text-stone-700 hover:text-emerald-900 text-sm font-medium px-6 py-3.5 transition-colors"
          >
            See how it works
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-2">
            {["bg-emerald-700", "bg-amber-500", "bg-emerald-900", "bg-stone-400"].map((c, i) => (
              <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-stone-50`} />
            ))}
          </div>
          <div className="text-sm text-stone-500">
            <span className="text-stone-800 font-medium">10,000+ groups</span> already splitting fairly
          </div>
        </div>
      </div>

      {/* Hero visual — receipt tally card, matches brand motif */}
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-amber-100 blur-2xl" />
        <div className="absolute -bottom-8 -right-4 w-32 h-32 rounded-full bg-emerald-100 blur-2xl" />

        <div className="relative bg-emerald-950 text-stone-50 rounded-2xl shadow-xl shadow-emerald-950/10 px-7 py-7 max-w-sm mx-auto">
          <div className="flex items-center justify-between text-xs uppercase tracking-wider text-emerald-300 pb-3 border-b border-dashed border-emerald-700">
            <span>Goa trip</span>
            <span>4 people</span>
          </div>
          <ul className="mt-3 space-y-2.5 text-sm text-emerald-100">
            <li className="flex justify-between">
              <span>Hotel — paid by Ali</span>
              <span className="text-stone-50">Rs 2,000</span>
            </li>
            <li className="flex justify-between">
              <span>Dinner — paid by Sara</span>
              <span className="text-stone-50">Rs 1,200</span>
            </li>
            <li className="flex justify-between">
              <span>Fuel — paid by Ahmed</span>
              <span className="text-stone-50">Rs 800</span>
            </li>
          </ul>
          <div className="mt-4 pt-3 border-t border-emerald-700 flex justify-between items-baseline">
            <span className="text-xs uppercase tracking-wider text-emerald-300">Your share</span>
            <span className="font-serif text-xl text-amber-400">Rs 1,000</span>
          </div>
        </div>

        <div className="relative bg-white border border-stone-200 rounded-xl shadow-md px-5 py-4 max-w-xs mx-auto mt-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-700" strokeWidth={1.75} />
          </div>
          <p className="text-sm text-stone-600">
            <span className="text-stone-900 font-medium">Bilal</span> settled up with Ali — Rs 1,000
          </p>
        </div>
      </div>
    </section>
  );
}
