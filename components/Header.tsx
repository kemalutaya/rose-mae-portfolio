import { Download } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight text-white">
          {profile.name.replace(" M.", "")}
        </a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.resume}
          download
          className="shiny ml-auto inline-flex h-9 items-center gap-2 rounded-lg border border-white/15 bg-brand px-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover lg:ml-0"
        >
          <Download className="size-4" aria-hidden />
          <span className="hidden sm:inline">Download Resume (PDF)</span>
          <span className="sm:hidden">Resume</span>
        </a>
      </div>
    </header>
  );
}
