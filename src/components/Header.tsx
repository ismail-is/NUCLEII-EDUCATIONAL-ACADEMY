import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/nucleii-logo.png";
import { AppDownloadButton } from "./ui/AppDownloadButton";

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

  const isHome = location.pathname === "/";
  const showDarkHeader = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-2xl border-b border-border/50 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group relative">
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <div className="absolute -inset-2 rounded-full bg-magenta/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <img src={logo} alt="Nucleii Educational Academy" className="relative h-10 w-auto" />
          </motion.div>
        </Link>

        <nav
          className={`hidden lg:flex items-center gap-1 rounded-full p-1 border transition-all duration-500 ${
            showDarkHeader
              ? "bg-muted/40 border-border/60 shadow-sm"
              : "bg-white/5 backdrop-blur-md border-white/10"
          }`}
        >
          {links.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                  isActive
                    ? "text-magenta"
                    : showDarkHeader
                      ? "text-foreground/70 hover:text-navy"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 shadow-sm rounded-full -z-10 ${
                      showDarkHeader
                        ? "bg-white border border-border/40"
                        : "bg-white/10 backdrop-blur-md"
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 inline-block">
                  {l.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            href="tel:+919538724158"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy text-white text-sm font-semibold shadow-soft hover:shadow-glow transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Admissions</span>
          </motion.a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden w-11 h-11 grid place-items-center rounded-full border transition-all duration-300 ${
              showDarkHeader
                ? "border-border text-foreground bg-white shadow-sm"
                : "border-white/20 text-white bg-white/10 backdrop-blur-md"
            }`}
          >
            <motion.div
              initial={false}
              animate={open ? "open" : "closed"}
              className="relative w-5 h-5"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-5"
          >
            <motion.div
              className="rounded-2xl bg-white/95 backdrop-blur-2xl border border-border/50 shadow-2xl p-3 flex flex-col gap-1"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: {},
              }}
            >
              {links.map((l) => {
                const isActive = location.pathname === l.to;
                return (
                  <motion.div
                    key={l.to}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      to={l.to}
                      className={`px-5 py-3.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                        isActive
                          ? "text-magenta bg-magenta-soft/30"
                          : "text-foreground/70 hover:bg-secondary/50 hover:text-navy"
                      }`}
                    >
                      {l.label}
                      {isActive && <Sparkles className="w-4 h-4 text-magenta/40" />}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                className="mt-2 pt-2 border-t border-border/50"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href="tel:+919538724158"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-brand text-white font-semibold shadow-glow-sm"
                >
                  <Phone className="w-4 h-4" /> Call for Admission
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
