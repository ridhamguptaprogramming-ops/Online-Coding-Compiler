"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "../../lib/supabase/client";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    setSubmitted(true);
  };

  const handleGoogleSignup = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center py-16 px-4">
        <div className="card w-full max-w-sm p-6 text-center">
          <h1 className="text-xl font-semibold mb-2">Check your inbox</h1>
          <p className="text-sm text-muted">
            We sent a confirmation link to <span className="text-gray-200">{email}</span>. Click it to activate your account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-16 px-4">
      <div className="card w-full max-w-sm p-6">
        <h1 className="text-xl font-semibold mb-1">Create your account</h1>
        <p className="text-sm text-muted mb-6">Start solving problems in minutes.</p>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-xs text-muted mb-1">Name</label>
            <input
              required
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ada Lovelace"
            />
          </div>
          <div>
            <label className="block text-xs text-muted mb-1">Email</label>
            <input
              type="email"
              required
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs text-muted mb-1">Password</label>
            <input
              type="password"
              required
              minLength={6}
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
            />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? "Creating account…" : "Sign up"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-5">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <button onClick={handleGoogleSignup} className="btn-secondary w-full">
          Continue with Google
        </button>

        <p className="text-sm text-muted mt-6 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
