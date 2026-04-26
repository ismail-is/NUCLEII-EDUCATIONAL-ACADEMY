import { GraduationCap, Sparkles } from "lucide-react";

const items = [
  "Admissions Open 2026",
  "NEET · JEE · KCET",
  "State Rank #6 — Chethana 594/600",
  "10+ Campuses Across India",
  "3000+ Students",
];

export function Marquee() {
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden bg-gradient-aurora py-4 border-y border-white/10">
      <div className="marquee-track gap-12 items-center text-white font-display font-semibold text-lg whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-4 px-4">
            <Sparkles className="w-4 h-4 opacity-70" />
            <span>{t}</span>
            <GraduationCap className="w-5 h-5 opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}
