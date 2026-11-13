export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink">
      <div>
        <p className="font-display text-4xl tracking-[0.18em]">ASIF</p>
        <div className="mt-4 h-px w-28 overflow-hidden bg-white/15">
          <div className="progress-bar h-full w-full bg-pink" />
        </div>
      </div>
    </div>
  );
}
