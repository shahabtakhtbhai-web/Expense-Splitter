"use client";
import { useState } from "react";
import { Receipt, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b border-stone-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-emerald-900">
          <Receipt className="w-5 h-5" strokeWidth={1.75} />
          <a href="/"><span className="font-serif text-lg tracking-wide">Expense-Splitter</span></a>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-stone-600">
          <a href="/" className="hover:text-emerald-900 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-emerald-900 transition-colors">How it works</a>
          <a href="#testimonials" className="hover:text-emerald-900 transition-colors">Testimonials</a>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a href="/login" className="text-sm text-stone-600 hover:text-emerald-900 transition-colors">Log in</a>
          <a
            href="/signup"
            className="text-sm font-medium bg-emerald-900 hover:bg-emerald-800 text-stone-50 rounded-lg px-4 py-2.5 transition-colors"
          >
            Sign up free
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-stone-700"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 px-6 py-4 space-y-4 bg-stone-50">
          <a href="#features" className="block text-sm text-stone-600">Features</a>
          <a href="#how-it-works" className="block text-sm text-stone-600">How it works</a>
          <a href="#testimonials" className="block text-sm text-stone-600">Testimonials</a>
          <div className="pt-3 border-t border-stone-200 flex flex-col gap-3">
            <a href="/login" className="text-sm text-stone-600">Log in</a>
            <a href="/signup" className="text-sm font-medium bg-emerald-900 text-stone-50 rounded-lg px-4 py-2.5 text-center">
              Sign up free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
