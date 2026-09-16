"use client";

import { Download, Sparkles } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { openRecruiterChat } from "@/lib/chat-events";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-slate-100"
        >
          {profile.name.replace(" M.", "")}
        </a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-slate-400 transition-colors hover:bg-slate-800/60 hover:text-slate-100"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={openRecruiterChat}
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-slate-400 transition-colors hover:bg-slate-800/60 hover:text-slate-100"
          >
            <Sparkles className="size-3.5" aria-hidden />
            AI Assistant
          </button>
        </nav>

        <a
          href={profile.resume}
          download
          className="shiny ml-auto inline-flex h-9 items-center gap-2 rounded-lg bg-accent px-3.5 text-sm font-medium text-slate-950 transition-colors hover:bg-cyan-300 lg:ml-0"
        >
          <Download className="size-4" aria-hidden />
          <span className="hidden sm:inline">Download Resume (PDF)</span>
          <span className="sm:hidden">Resume</span>
        </a>
      </div>
    </header>
  );
}
