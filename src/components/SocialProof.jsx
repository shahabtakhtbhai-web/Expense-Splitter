export default function SocialProof() {
  const stats = [
    { value: "50k+", label: "Expenses split" },
    { value: "10k+", label: "Active groups" },
    { value: "4.9/5", label: "Average rating" },
  ];

  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-3 gap-6 text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div className="font-serif text-2xl sm:text-3xl text-emerald-950">{value}</div>
            <div className="text-xs sm:text-sm text-stone-500 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
