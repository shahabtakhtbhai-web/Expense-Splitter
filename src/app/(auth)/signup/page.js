"use client";
import Navbar from "@/components/Navbar";
import { Mail, Lock, User, ArrowRight, Receipt } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    console.log("User data saved to localStorage:", formData);
  };

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <Navbar />
      <div className="flex-1 min-h-0 w-full bg-stone-50 flex items-stretch overflow-hidden">
        <div className="flex-1 flex items-center justify-center px-6 overflow-hidden">
          <div className="w-full max-w-sm">
            {/* Mobile-only brand mark */}
            <div className="lg:hidden flex items-center gap-2 text-emerald-800 mb-6">
              <Receipt className="w-5 h-5" strokeWidth={1.75} />
              <span className="text-sm tracking-widest uppercase">Ledger</span>
            </div>

            <h2 className="font-serif text-3xl text-emerald-950">
              Create your account
            </h2>
            <p className="mt-2 text-stone-500 text-sm">
              Already splitting bills with us?{" "}
              <a
                href="/login"
                className="text-emerald-800 underline underline-offset-2 decoration-amber-400 decoration-2 hover:text-emerald-900"
              >
                Log in
              </a>
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-wide text-stone-500 mb-1.5"
                >
                  Full name
                </label>
                <div className="relative">
                  <User
                    className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                    strokeWidth={1.75}
                  />
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Shahab ud din"
                    autoComplete="none"
                    className="w-full rounded-lg border border-stone-200 bg-white pl-10 pr-3.5 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-wide text-stone-500 mb-1.5"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail
                    className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                    strokeWidth={1.75}
                  />
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    autoComplete="none"
                    placeholder="scca@example.com"
                    className="w-full rounded-lg border border-stone-200 bg-white pl-10 pr-3.5 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-medium uppercase tracking-wide text-stone-500 mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                    strokeWidth={1.75}
                  />
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                    placeholder="At least 6 characters"
                    className="w-full rounded-lg border border-stone-200 bg-white pl-10 pr-3.5 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-medium uppercase tracking-wide text-stone-500 mb-1.5"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <Lock
                    className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                    strokeWidth={1.75}
                  />
                  <input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    name="confirmPassword"
                    placeholder="Re-enter password"
                    className="w-full rounded-lg border border-stone-200 bg-white pl-10 pr-3.5 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 transition-colors"
                  />
                </div>
              </div>

              {/* Error placeholder — wire up conditionally in your logic */}
              {/* <p className="text-sm text-red-600">Passwords do not match</p> */}

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-stone-50 text-sm font-medium py-3 mt-2 transition-colors"
              >
                Create account
                <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
              </button>
            </form>

            <p className="mt-4 text-xs text-stone-400 leading-relaxed">
              By signing up you agree to split bills honestly with your friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}