import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2, suffix: "", label: "States" },
  { value: 10, suffix: "+", label: "Institutions" },
  { value: 3000, suffix: "+", label: "Students" },
  { value: 95, suffix: "%", label: "Success Rate" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle grid + soft magenta wash */}
      <div className="absolute inset-0 bg-grid-pink opacity-50 mask-radial -z-10" />
      <div className="absolute inset-0 bg-gradient-soft -z-10" />

      <div className="container mx-auto px-5">
        <div className="reveal max-w-2xl">
          <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
            Our Impact
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight">
            Excellence, <span className="text-gradient-pink italic">measured</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal relative p-7 md:p-8 rounded-2xl bg-white border border-border shadow-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-display text-5xl md:text-7xl font-bold tracking-tight text-gradient-brand">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
