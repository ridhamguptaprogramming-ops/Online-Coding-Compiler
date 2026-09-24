import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "CodeArena — Online Compiler & Assessment Platform",
  description: "Write, compile, execute, and submit code across a range of languages.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: { background: "#161b22", color: "#e6edf3", border: "1px solid #30363d" },
          }}
        />
      </body>
    </html>
  );
}
