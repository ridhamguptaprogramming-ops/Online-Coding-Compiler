"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "../lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import { Code2, LogOut, Trophy, User as UserIcon } from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <header className="h-16 border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-7xl h-full px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Code2 className="h-6 w-6 text-primary" />
          CodeArena
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/problems" className="hover:text-white transition-colors">
            Problems
          </Link>
          <Link href="/leaderboard" className="hover:text-white transition-colors flex items-center gap-1">
            <Trophy className="h-4 w-4" /> Leaderboard
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link href="/dashboard" className="btn-secondary text-xs !px-3 !py-1.5">
                <UserIcon className="h-3.5 w-3.5" />
                {user.email?.split("@")[0]}
              </Link>
              <button onClick={signOut} className="btn-secondary text-xs !px-3 !py-1.5">
                <LogOut className="h-3.5 w-3.5" />
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn-secondary text-xs !px-3 !py-1.5">
                Log in
              </Link>
              <Link href="/signup" className="btn-primary text-xs !px-3 !py-1.5">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
