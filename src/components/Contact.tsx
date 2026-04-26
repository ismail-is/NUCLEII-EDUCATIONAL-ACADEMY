import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/nucleii-logo.png";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container mx-auto px-5">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
            Find Us
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-7xl font-bold tracking-tight leading-[1]">
            Nucleii <span className="text-gradient-magenta italic">Educational</span><br /> Academy
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Leading the way in KCET and NEET excellence. Connect with us to secure your future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            {
              icon: MapPin,
              label: "Visit Us",
              lines: ["No. 1, Deepak Arcade, 2nd Floor", "Horamavu Main Road", "Bangalore 560043"],
            },
            {
              icon: Phone,
              label: "Call Experts",
              lines: ["+91 95387 24158", "080-66468966"],
              href: "tel:+919538724158",
            },
            {
              icon: Mail,
              label: "Email Us",
              lines: ["info@nucleii.in"],
              href: "mailto:info@nucleii.in",
            },
          ].map((c) => (
            <div
              key={c.label}
              className="reveal group relative p-8 rounded-3xl bg-card border border-border shadow-card overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-magenta/10 group-hover:bg-magenta/20 blur-3xl transition" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-magenta grid place-items-center shadow-glow">
                  <c.icon className="w-6 h-6 text-white" />
                </div>
                <div className="mt-6 text-xs uppercase tracking-[0.3em] text-magenta font-semibold">
                  {c.label}
                </div>
                <div className="mt-3 space-y-1 text-foreground/90 font-medium">
                  {c.lines.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-28 border-t border-border pt-12 pb-8">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Nucleii" className="h-12 w-auto" />
              <div>
                <div className="font-display font-bold text-xl">NUCLEII</div>
                <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                  Educational Academy
                </div>
              </div>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              © 2026 Nucleii Educational Academy. All rights reserved.
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <a
                href="https://www.facebook.com/nucleii.educational.3"
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 grid place-items-center rounded-full border border-border hover:bg-gradient-magenta hover:text-white hover:border-transparent transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/nucleiieducationalacademy/"
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 grid place-items-center rounded-full border border-border hover:bg-gradient-magenta hover:text-white hover:border-transparent transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
