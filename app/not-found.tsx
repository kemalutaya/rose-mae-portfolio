import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <p className="font-mono text-sm text-brand">404</p>
      <h1 className="text-2xl font-semibold text-ink">Page not found</h1>
      <p className="max-w-sm text-sm text-ink-muted">
        This page doesn&apos;t exist. Rose Mae&apos;s portfolio is a single page.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover"
      >
        Back to portfolio
      </Link>
    </main>
  );
}
