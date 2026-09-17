"use client";

import { Check, Copy, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { DarkPanel } from "@/components/DarkPanel";
import { RadarPing } from "@/components/RadarPing";
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

type SendState = "idle" | "copied-and-opening" | "copy-failed-opening";

export function ContactSection() {
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [sendState, setSendState] = useState<SendState>("idle");
  const [copied, setCopied] = useState<boolean | null>(null);

  const ready = from.trim() !== "" && message.trim() !== "";

  const draft = `To: ${profile.email}\nSubject: Role enquiry via portfolio\n\n${message}\n\nFrom: ${from}`;
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Role enquiry via portfolio",
  )}&body=${encodeURIComponent(`${message}\n\nFrom: ${from}`)}`;

  async function openEmailApp() {
    // mailto: silently no-ops when no mail client is registered, with no
    // error to catch and no reliable way to detect the failure after the
    // fact (a deferred check loses the click's transient user-activation,
    // which breaks clipboard writes too). So the draft is copied
    // synchronously, inside the click itself, every time: a guaranteed
    // fallback rather than one detected after guessing mailto failed.
    try {
      await navigator.clipboard.writeText(draft);
      setSendState("copied-and-opening");
    } catch {
      setSendState("copy-failed-opening");
    }
    window.location.href = mailto;
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <DarkPanel>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <RadarPing />
            <div>
              <p className="text-[11px] tracking-wider text-teal-accent uppercase">
                Direct Line
              </p>
              <h3 className="mt-2 text-lg font-semibold text-on-panel">
                Immediately available. No notice period to work around.
              </h3>
            </div>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-teal-line bg-teal-panel-soft px-3 py-1.5 text-xs text-on-panel-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-teal-accent" />
            </span>
            Open to offers
          </span>
        </div>
      </DarkPanel>

      <div className="grid gap-8 md:grid-cols-2">
      <AnimatedGroup preset="slide" className="space-y-4">
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
                <span className="text-ink-subtle">· {c.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedGroup>

      <form
        className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-5"
        onSubmit={(e) => {
          e.preventDefault();
          openEmailApp();
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

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Button type="submit">
            {sendState !== "idle" ? (
              <Check className="size-4" aria-hidden />
            ) : null}
            Open in email app
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled={!ready}
            onClick={copyDraft}
          >
            {copied === true ? (
              <Check className="size-4" aria-hidden />
            ) : (
              <Copy className="size-4" aria-hidden />
            )}
            {copied === true ? "Copied" : "Copy message"}
          </Button>
        </div>

        <p aria-live="polite" className="text-xs text-ink-subtle">
          {sendState === "copied-and-opening"
            ? `Message copied and your mail app should be opening. If it doesn't, paste the message into an email to ${profile.email}.`
            : sendState === "copy-failed-opening"
              ? `Your mail app should be opening. If it doesn't, email ${profile.email} directly.`
              : copied === true
                ? `Message copied. Send it to ${profile.email} from wherever you read email.`
                : copied === false
                  ? `Copy failed. Email ${profile.email} directly.`
                  : `Copies the message and opens your mail app. No mail app? The message is already copied.`}
        </p>
      </form>
      </div>
    </div>
  );
}
