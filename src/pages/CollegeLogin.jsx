import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { colleges } from "../data/colleges";
import { useParams } from "react-router-dom";

export default function CollegeLogin() {
  // simulate route param: /login/:collegeId
  const { collegeId } = useParams();

  const college = colleges[collegeId];

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE — College Branding */}
      <div className="hidden md:flex flex-col justify-center items-center bg-[#083164] text-white px-12 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />

        <div className="relative z-10 max-w-md text-center">
          {/* Logo */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-[#083164] text-2xl font-bold">
            {college.logoText}
          </div>

          {/* College Name */}
          <h1 className="text-2xl font-semibold leading-snug">
            {college.name}
          </h1>

          <p className="mt-2 text-sm text-blue-100">{college.tagline}</p>

          <div className="mt-10">
            <h2 className="text-3xl font-serif font-bold">
              Trainer Feedback System
            </h2>
            <p className="mt-4 text-blue-100 text-sm leading-relaxed">
              Access your institution dashboard to view analytics, manage
              feedback cycles, and drive continuous improvement in training
              excellence.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — Login Form */}
      <div className="flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-serif font-bold text-slate-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Sign in to access your {college.shortName} dashboard
          </p>

          {/* FORM */}
          <div className="mt-8 space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="you@institution.edu"
                  className="w-full rounded-lg border pl-10 pr-4 py-2.5 text-sm focus:border-[#083164] focus:ring-[#083164]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-lg border pl-10 pr-10 py-2.5 text-sm focus:border-[#083164] focus:ring-[#083164]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign In */}
            <button className="w-full rounded-lg bg-[#083164] py-3 text-sm font-medium text-white hover:bg-[#06284f] transition">
              Sign In
            </button>
          </div>

          {/* Footer note */}
          <p className="mt-6 text-xs text-slate-500 text-center">
            This login is restricted to college administrators only.
          </p>
        </div>
      </div>
    </div>
  );
}
