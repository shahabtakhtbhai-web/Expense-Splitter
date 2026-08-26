"use client";
import { Mail, Lock, ArrowRight, Receipt } from "lucide-react";
import {useState} from "react";

const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            if (parsedUserData.email === loginData.email && parsedUserData.password === loginData.password) {
                console.log('Login successful');
                // Redirect to dashboard or home page
            }
            else {
                console.log('Invalid email or password');
                // Show error message to user
            }
        } else {
            console.log('No user data found. Please sign up first.');
            // Show error message to user
        }
    }
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        {/* Mobile-only brand mark */}
        <div className="lg:hidden flex items-center gap-2 text-emerald-800 mb-8">
          <Receipt className="w-5 h-5" strokeWidth={1.75} />
          <span className="text-sm tracking-widest uppercase">Ledger</span>
        </div>

        <h2 className="font-serif text-3xl text-emerald-950">Welcome back</h2>
        <p className="mt-2 text-stone-500 text-sm">
          New to splitting bills with us?{" "}
          <a href="/signup" className="text-emerald-800 underline underline-offset-2 decoration-amber-400 decoration-2 hover:text-emerald-900">
            Sign up
          </a>
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wide text-stone-500 mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" strokeWidth={1.75} />
              <input
                id="email"
                type="email"
                value={loginData.email}
                onChange={handleChange}
                name="email"
                autoComplete="none"
                placeholder="ali@example.com"
                className="w-full rounded-lg border border-stone-200 bg-white pl-10 pr-3.5 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="password" className="block text-xs font-medium uppercase tracking-wide text-stone-500">
                Password
              </label>
              <a href="#" className="text-xs text-emerald-800 hover:text-emerald-900">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" strokeWidth={1.75} />
              <input
                id="password"
                type="password"
                onChange={handleChange}
                value={loginData.password}
                name="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-stone-200 bg-white pl-10 pr-3.5 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 transition-colors"
              />
            </div>
          </div>

          {/* Error placeholder — wire up conditionally in your logic */}
          {/* <p className="text-sm text-red-600">Invalid email or password</p> */}

          <button
            type="submit"
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-stone-50 text-sm font-medium py-3 mt-2 transition-colors"
          >
            Log in
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </form>

        <p className="mt-6 text-xs text-stone-400 leading-relaxed">
          By logging in you agree to split bills honestly with your friends.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;