import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { GridBackground } from "./GridBackground";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  breadcrumb?: { label: string; to?: string }[];
}

export function PageHero({ eyebrow, title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-background">
      <GridBackground variant="soft" />

      <div className="relative z-10 container mx-auto px-5 text-center">
        {breadcrumb && (
          <nav className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-6">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3 h-3 opacity-40" />}
                {b.to ? (
                  <Link to={b.to} className="hover:text-magenta transition">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-card text-foreground/70 text-xs uppercase tracking-[0.25em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-magenta" />
            {eyebrow}
          </div>
        )}

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-foreground max-w-5xl mx-auto">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
