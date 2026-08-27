import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-emerald-950">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-50">
          Ready to stop chasing your friends for money?
        </h2>
        <p className="mt-4 text-emerald-200 max-w-md mx-auto">
          It takes two minutes to set up your first group.
        </p>
        <a
          href="/signup"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-emerald-950 text-sm font-medium px-7 py-3.5 transition-colors"
        >
          Create your free account
          <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
        </a>
      </div>
    </section>
  );
}
