"use client";

import { useChat } from "@ai-sdk/react";
import { MessageSquare, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { OPEN_RECRUITER_CHAT } from "@/lib/chat-events";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const SUGGESTIONS = [
  "Which insurance portals has she used?",
  "Is she HIPAA certified?",
  "Summarize her healthcare experience.",
];

export function RecruiterChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_RECRUITER_CHAT, onOpen);
    return () => window.removeEventListener(OPEN_RECRUITER_CHAT, onOpen);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, status]);

  const busy = status === "submitted" || status === "streaming";

  function submit(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="fixed right-4 bottom-4 z-50 inline-flex size-12 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/20 transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
      >
        {open ? (
          <X className="size-5" aria-hidden />
        ) : (
          <MessageSquare className="size-5" aria-hidden />
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="AI recruiter assistant"
          className="border-beam fixed right-4 bottom-20 z-50 flex max-h-[min(34rem,calc(100dvh-7rem))] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-2xl sm:right-6 sm:bottom-24 sm:w-96"
        >
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <Sparkles className="size-4 text-brand" aria-hidden />
            <span className="text-sm font-semibold text-ink">
              Ask about Rose Mae
            </span>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <>
                <Bubble role="assistant">
                  Ask me anything about Rose Mae&apos;s experience as a medical
                  virtual assistant, her certifications, or the systems she has
                  worked in.
                </Bubble>
                <div className="flex flex-col gap-1.5 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => submit(s)}
                      className="rounded-lg border border-line px-3 py-2 text-left text-xs text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </>
            )}

            {messages.map((message) => (
              <Bubble key={message.id} role={message.role}>
                {message.parts
                  .map((part) => (part.type === "text" ? part.text : ""))
                  .join("")}
              </Bubble>
            ))}

            {status === "submitted" && (
              <Bubble role="assistant">
                <span className="text-ink-subtle">Thinking…</span>
              </Bubble>
            )}

            {error && (
              <p className="rounded-lg border border-bad/30 bg-bad/8 px-3 py-2 text-xs text-bad">
                The assistant is unavailable right now. Email{" "}
                <a className="underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>{" "}
                instead.
              </p>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
            className="flex items-center gap-2 border-t border-line p-3"
          >
            <input
              id="recruiter-chat-input"
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
              placeholder="Ask a question…"
              className="h-9 min-w-0 flex-1 rounded-lg border border-line bg-canvas px-3 text-sm text-ink placeholder:text-ink-subtle"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send message"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand text-white transition-colors hover:bg-brand-hover disabled:opacity-40"
            >
              <Send className="size-4" aria-hidden />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function Bubble({
  role,
  children,
}: {
  role: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed",
        role === "user"
          ? "ml-auto bg-brand text-white"
          : "bg-canvas-alt text-ink",
      )}
    >
      {children}
    </div>
  );
}
