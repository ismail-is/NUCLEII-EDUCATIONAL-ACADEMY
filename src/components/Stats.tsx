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
    <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-magenta/20 blur-[140px]" />
      <div className="relative container mx-auto px-5">
        <div className="reveal max-w-2xl">
          <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
            Our Impact
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight">
            Excellence, <span className="text-gradient-magenta italic">measured</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal relative p-6 md:p-8 rounded-2xl glass border border-white/10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-display text-5xl md:text-7xl font-bold tracking-tight text-gradient-magenta">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.25em] text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
