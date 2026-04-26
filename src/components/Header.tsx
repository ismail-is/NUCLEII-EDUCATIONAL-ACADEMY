import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/nucleii-logo.png";

const links = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Courses", to: "/courses" as const },
  { label: "Results", to: "/results" as const },
  { label: "Media", to: "/media" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/85 backdrop-blur-xl border-b border-border"
          : "py-5 bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-magenta/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <img src={logo} alt="Nucleii Educational Academy" className="relative h-10 w-auto" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-bold tracking-tight text-lg text-navy">NUCLEII</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Medical · IIT-JEE · Foundation
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group"
              activeProps={{ className: "text-magenta font-semibold" }}
            >
              {l.label}
              <span className="absolute left-4 right-4 bottom-1 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform bg-magenta" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919538724158"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-brand text-white text-sm font-semibold shadow-card hover:shadow-glow hover:scale-105 transition"
          >
            <Phone className="w-4 h-4" /> Admissions
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-border text-foreground bg-white"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-5 rounded-2xl bg-white border border-border shadow-card p-4 flex flex-col">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition"
              activeProps={{ className: "text-magenta bg-magenta-soft font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
