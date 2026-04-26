import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/nucleii-logo.png";
import { AppDownloadButton } from "./ui/AppDownloadButton";

export function Footer() {
  return (
    <footer className="relative bg-navy text-white pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.07] mask-radial" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-magenta/20 blur-[120px]" />
{/* hey */}
      <div className="relative container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-magenta font-semibold">
            Find Us
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1] tracking-tight">
            NUCLEII EDUCATIONAL <span className="text-gradient-pink italic pr-2">ACADEMY</span>
          </h2>
          <p className="mt-5 text-white/70">
            Leading the way in KCET and NEET excellence. Connect with us to secure your future.
          </p>
          <div className="mt-8 flex justify-center">
            <AppDownloadButton variant="outline" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16">
          {[
            {
              icon: MapPin,
              label: "Visit Us",
              lines: ["No. 1, Deepak Arcade, 2nd Floor", "Horamavu Main Road", "Bangalore 560043"],
            },
            { icon: Phone, label: "Call Experts", lines: ["+91 95387 24158", "080-66468966"] },
            { icon: Mail, label: "Email Us", lines: ["info@nucleii.in"] },
          ].map((c) => (
            <div
              key={c.label}
              className="p-7 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-pink grid place-items-center shadow-glow">
                <c.icon className="w-5 h-5 text-white" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-[0.3em] text-magenta font-semibold">
                {c.label}
              </div>
              <div className="mt-2 space-y-0.5 text-white/85 font-medium text-sm">
                {c.lines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 grid md:grid-cols-3 gap-6 items-center">
          <Link
            to="/"
            className="flex items-center gap-3 justify-self-center md:justify-self-start"
          >
            <img src={logo} alt="Nucleii" className="h-11 w-auto bg-white rounded-full p-1" />
            <div>
              <div className="font-display font-bold text-lg">NUCLEII</div>
              <div className="text-[10px] text-white/60 uppercase tracking-[0.2em]">
                Educational Academy
              </div>
            </div>
          </Link>
          <div className="text-center text-sm text-white/60">
            © 2026 Nucleii Educational Academy. All rights reserved.
          </div>
          <div className="flex items-center justify-center md:justify-end gap-3">
            <a
              href="https://www.facebook.com/nucleii.educational.3"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:bg-gradient-pink hover:border-transparent transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/nucleiieducationalacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:bg-gradient-pink hover:border-transparent transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
