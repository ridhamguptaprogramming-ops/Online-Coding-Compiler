"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient, isSupabaseConfigured } from "../lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";
import { Code2, LogOut, Menu, Trophy, User as UserIcon, X, Zap } from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isSupabaseConfigured()) return;

    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    if (!isSupabaseConfigured()) return;

    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080b12]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight" onClick={() => setMenuOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-400/15 text-indigo-300 ring-1 ring-indigo-300/20">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="text-lg">Code<span className="text-indigo-300">Arena</span></span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            { href: "/problems", label: "Problems" },
            { href: "/compiler", label: "Compiler" },
            { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
          ].map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${active ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
                {Icon && <Icon className="h-4 w-4" />}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link href="/dashboard" className="btn-secondary hidden text-xs !px-3 !py-2 sm:inline-flex">
                <UserIcon className="h-3.5 w-3.5" />
                {user.email?.split("@")[0]}
              </Link>
              <button onClick={signOut} aria-label="Log out" className="btn-secondary !px-3 !py-2">
                <LogOut className="h-3.5 w-3.5" />
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden text-sm text-slate-300 transition hover:text-white sm:block">
                Log in
              </Link>
              <Link href="/signup" className="btn-primary !px-3 !py-2 text-xs">
                <Zap className="h-3.5 w-3.5" /> Sign up
              </Link>
            </>
          )}
          <button className="btn-secondary !px-2.5 md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div className={`${menuOpen ? "block" : "hidden"} border-t border-white/10 px-4 py-3 md:hidden`}>
        <div className="mx-auto grid max-w-7xl gap-1">
          {[
            { href: "/problems", label: "Problems" },
            { href: "/compiler", label: "Compiler" },
            { href: "/leaderboard", label: "Leaderboard" },
            { href: user ? "/dashboard" : "/login", label: user ? "Profile" : "Log in" },
          ].map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{item.label}</Link>)}
        </div>
      </div>
    </header>
  );
}
