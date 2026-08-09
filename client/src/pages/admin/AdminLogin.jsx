import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authService } from "../../services/authService";
import { Lock, Mail, ShieldCheck, ArrowRight, AlertCircle, Sparkles } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const from = location.state?.from?.pathname || "/admin";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await authService.login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2E3192]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00AEEF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl z-10 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex mb-2">
            <img src="/logoOnly.png" alt="Saipal Logo" className="w-16 h-16 object-contain" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Saipal Academy CMS
          </h1>
          <p className="text-xs text-slate-400">
            Authorized Administrator Access Only
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-rose-950/50 border border-rose-800/60 p-3.5 rounded-2xl text-xs text-rose-200 flex items-center gap-2">
            <AlertCircle size={16} className="text-rose-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-3.5 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition"
                placeholder="Email Address"
                required
              />
            </div>

          <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-3.5 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition"
                placeholder="Password"
                required
              />
            </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#2E3192] to-[#00AEEF] hover:opacity-95 text-white font-bold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign In to Admin Portal</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2">
          <a
            href="/"
            className="text-xs text-slate-500 hover:text-slate-300 transition underline"
          >
            ← Back to Live Website
          </a>
        </div>
      </div>
    </div>
  );
}
