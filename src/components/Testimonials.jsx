import { Star } from "lucide-react";

const testimonials = [
  { name: "Sara K.", role: "Roommate group of 4", quote: "We used to argue about rent and groceries every month. Now it just shows up settled." },
  { name: "Ahmed R.", role: "Trip organizer", quote: "Split our whole Goa trip in minutes. Nobody had to do mental math at the table." },
  { name: "Bilal M.", role: "Office lunch club", quote: "The settle-up suggestion is genius — it cuts our transfers down to almost nothing." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
      <div className="max-w-xl">
        <span className="text-xs uppercase tracking-widest text-amber-600">Testimonials</span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-emerald-950">
          Friend groups love a clean ledger.
        </h2>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {testimonials.map(({ name, role, quote }) => (
          <div key={name} className="bg-white border border-stone-200 rounded-xl p-6">
            <div className="flex gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-4 text-sm text-stone-600 leading-relaxed">"{quote}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 text-sm font-medium">
                {name.charAt(0)}
              </div>
              <div>
                <div className="text-sm text-stone-900 font-medium">{name}</div>
                <div className="text-xs text-stone-500">{role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
