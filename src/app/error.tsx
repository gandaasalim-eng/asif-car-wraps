"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink px-5 py-32">
      <div className="mx-auto max-w-xl">
        <p className="font-grotesk text-[11px] uppercase tracking-[0.28em] text-pink">Something interrupted the page</p>
        <h1 className="mt-4 font-display text-5xl uppercase">Try that again.</h1>
        <p className="mt-4 text-muted">
          The page did not finish loading. You can retry, or reach the studio directly from the contact page.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex min-h-11 items-center bg-pink px-6 font-grotesk text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
        >
          Retry
        </button>
      </div>
    </section>
  );
}
