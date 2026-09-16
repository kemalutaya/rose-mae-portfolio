import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";

export function FaqSection() {
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-xl border border-line bg-surface px-5 py-4 open:border-line-strong"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
            {faq.question}
            <ChevronDown
              className="size-4 shrink-0 text-ink-subtle transition-transform group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
