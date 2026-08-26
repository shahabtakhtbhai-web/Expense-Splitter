import { Receipt } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-emerald-900">
          <Receipt className="w-5 h-5" strokeWidth={1.75} />
          <span className="font-serif text-lg">Ledger</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-stone-500">
          <a href="#features" className="hover:text-emerald-900">Features</a>
          <a href="#how-it-works" className="hover:text-emerald-900">How it works</a>
          <a href="/login" className="hover:text-emerald-900">Log in</a>
        </div>
        <div className="text-xs text-stone-400">© 2026 Ledger. All rights reserved.</div>
      </div>
    </footer>
  );
}
