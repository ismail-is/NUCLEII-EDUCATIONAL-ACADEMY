/**
 * Animated grid background with floating brand-color blobs.
 * Sits behind the hero on a pure white canvas.
 */
export function GridBackground({ variant = "default" }: { variant?: "default" | "soft" }) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid mask-radial" />
      <div className="absolute inset-0 bg-grid-pink mask-radial opacity-60" />

      {/* Soft floating brand blobs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[420px] h-[420px] rounded-full bg-magenta/15 blur-[120px] animate-pulse-soft"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-[20%] right-[-10%] w-[480px] h-[480px] rounded-full bg-navy/10 blur-[140px] animate-pulse-soft"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-[-15%] left-[30%] w-[520px] h-[520px] rounded-full bg-magenta/10 blur-[160px] animate-pulse-soft"
        style={{ animationDelay: "3s" }}
      />

      {/* Subtle dotted ring decoration */}
      {variant === "default" && (
        <>
          <svg className="absolute top-1/4 right-10 w-72 h-72 opacity-30 animate-spin-slow" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.3"
              strokeDasharray="0.5 2" className="text-magenta" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.3"
              strokeDasharray="0.5 1.5" className="text-navy" />
          </svg>
        </>
      )}

      {/* Top to bottom soft fade for clean handoff */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
