"use client";

import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { credentials, profile } from "@/lib/data";

/** lucide dropped brand marks; LinkedIn's glyph is inlined here. */
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.06A4.17 4.17 0 0 1 17.6 8.7c4 0 4.4 2.5 4.4 5.76V21h-4v-5.72c0-1.36-.03-3.11-1.9-3.11-1.9 0-2.2 1.48-2.2 3v5.83h-4V9Z" />
    </svg>
  );
}

export function ContactSection() {
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Role enquiry via portfolio",
  )}&body=${encodeURIComponent(`${message}\n\n— ${from}`)}`;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-3 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong"
        >
          <Mail className="size-4 shrink-0 text-brand" aria-hidden />
          <div className="min-w-0">
            <div className="text-[11px] tracking-wider text-ink-subtle uppercase">
              Email
            </div>
            <div className="truncate text-sm text-ink">{profile.email}</div>
          </div>
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong"
        >
          <LinkedinIcon className="size-4 shrink-0 text-brand" />
          <div className="min-w-0">
            <div className="text-[11px] tracking-wider text-ink-subtle uppercase">
              LinkedIn
            </div>
            <div className="truncate text-sm text-ink">
              {profile.linkedinLabel}
            </div>
          </div>
        </a>

        <div className="flex items-center gap-3 rounded-xl border border-line bg-surface p-4">
          <MapPin className="size-4 shrink-0 text-brand" aria-hidden />
          <div className="min-w-0">
            <div className="text-[11px] tracking-wider text-ink-subtle uppercase">
              Location
            </div>
            <div className="text-sm text-ink">
              {profile.location} · {profile.availability}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-4">
          <div className="text-[11px] tracking-wider text-ink-subtle uppercase">
            Credentials
          </div>
          <ul className="mt-2 space-y-1">
            {credentials.map((c) => (
              <li key={c.label} className="text-sm text-ink">
                {c.label}{" "}
                <span className="text-ink-subtle">— {c.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <form
        className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-5"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = mailto;
        }}
      >
        <label
          htmlFor="contact-from"
          className="text-[11px] tracking-wider text-ink-subtle uppercase"
        >
          Your name and company
        </label>
        <input
          id="contact-from"
          value={from}
          onChange={(e) => setFrom(e.currentTarget.value)}
          required
          placeholder="Jordan Reyes, Northside Family Practice"
          className="h-10 rounded-lg border border-line bg-canvas px-3 text-sm text-ink placeholder:text-ink-subtle"
        />

        <label
          htmlFor="contact-message"
          className="mt-2 text-[11px] tracking-wider text-ink-subtle uppercase"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          required
          rows={6}
          placeholder="We're hiring a remote eligibility and prior-auth specialist…"
          className="resize-y rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink placeholder:text-ink-subtle"
        />

        <Button type="submit" className="mt-2 self-start">
          Send message
        </Button>
        <p className="text-xs text-ink-subtle">
          Opens your email client with the message ready to send.
        </p>
      </form>
    </div>
  );
}
