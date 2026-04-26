import { GraduationCap, Sparkles } from "lucide-react";

const items = [
  "Admissions Open 2026",
  "NEET · JEE · KCET",
  "State Rank #6 — Chethana 594/600",
  "10+ Campuses Across India",
  "3,000+ Students",
  "PU Integrated · Long Term · Foundation",
];

export function Marquee() {
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden bg-navy/[0.03] border-y border-border py-4">
      <div className="marquee-track gap-12 items-center text-navy font-display font-semibold text-base whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-4 px-4">
            <Sparkles className="w-4 h-4 text-magenta opacity-70" />
            <span>{t}</span>
            <GraduationCap className="w-5 h-5 text-magenta opacity-50" />
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
}
