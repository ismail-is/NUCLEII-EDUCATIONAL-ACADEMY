import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Check, Facebook, Instagram } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Nucleii Educational Academy" },
      { name: "description", content: "Reach out to Nucleii — call +91 95387 24158 or email info@nucleii.in for admissions and enquiries." },
      { property: "og:title", content: "Contact Nucleii Educational Academy" },
      { property: "og:description", content: "Connect with us to secure your future." },
    ],
  }),
  component: ContactPage,
});

const courses = ["I PU", "II PU", "Long Term Coaching", "Foundation Course", "Tuitions", "Crash Course"];

function ContactPage() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Get In Touch"
        title={<>Let's start your <span className="text-gradient-pink italic">journey</span>.</>}
        description="Kindly call us on the numbers below to connect with us — we'd be happy to share more details on your requirement."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      {/* Contact info cards */}
      <section className="relative pb-12">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Phone, label: "Mobile", value: "+91 95387 24158", href: "tel:+919538724158" },
              { icon: Phone, label: "Landline", value: "080-66468966", href: "tel:08066468966" },
              { icon: Mail, label: "Email", value: "info@nucleii.in", href: "mailto:info@nucleii.in" },
            ].map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-2xl bg-white border border-border shadow-card hover:shadow-soft overflow-hidden transition-shadow"
              >
                <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-magenta-soft group-hover:bg-magenta/15 blur-3xl transition" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand grid place-items-center shadow-card">
                    <c.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-[0.3em] text-magenta font-semibold">{c.label}</div>
                  <div className="mt-2 font-display text-2xl font-bold text-foreground group-hover:text-magenta transition-colors">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Address */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pink opacity-30 mask-radial -z-10" />
        <div className="container mx-auto px-5 grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-white border border-border shadow-card"
          >
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">Enquiry</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Tell us about <span className="text-gradient-pink italic">you</span>.
            </h2>
            <p className="mt-3 text-muted-foreground">Fill the form — we'll revert to you with more details on your requirement.</p>

            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 4000);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" placeholder="Your name" required />
                <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." required />
              </div>
              <Field label="Email" name="email" type="email" placeholder="you@email.com" required />

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Course</label>
                <select
                  name="course"
                  required
                  className="mt-2 w-full px-4 py-3.5 rounded-xl bg-secondary border border-border focus:border-magenta focus:bg-white outline-none transition-colors text-foreground"
                  defaultValue=""
                >
                  <option value="" disabled>Select a course</option>
                  {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us a bit more..."
                  className="mt-2 w-full px-4 py-3.5 rounded-xl bg-secondary border border-border focus:border-magenta focus:bg-white outline-none transition-colors text-foreground resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-[1.03] transition-transform disabled:opacity-80"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4" /> Submitted — we'll be in touch
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="p-8 rounded-3xl bg-gradient-brand text-white shadow-glow">
              <MapPin className="w-7 h-7" />
              <div className="mt-5 text-xs uppercase tracking-[0.3em] opacity-70 font-semibold">Visit Us</div>
              <div className="mt-2 font-display text-2xl font-bold leading-tight">
                NUCLEII EDUCATIONAL ACADEMY PVT LTD
              </div>
              <p className="mt-4 text-white/85 leading-relaxed">
                2nd Floor, Deepak Arcade, No. 1, Kalkere Main Rd, opposite Prestige Gulmohar Apartments,
                Dodda Kempaiah Layout, Horamavu, Bengaluru, Karnataka 560043
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="text-3xl font-display font-bold">4.7</div>
                <div className="text-sm opacity-80">Google Rating · 58 reviews</div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-border shadow-card aspect-square bg-white">
              <iframe
                title="Nucleii Academy Location"
                src="https://www.google.com/maps?q=Deepak+Arcade,+Horamavu,+Bengaluru&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border shadow-card flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Follow Us</div>
                <div className="mt-1 font-medium text-foreground">@nucleiieducationalacademy</div>
              </div>
              <div className="flex items-center gap-2">
                <a href="https://www.facebook.com/nucleii.educational.3" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 grid place-items-center rounded-full border border-border hover:bg-gradient-brand hover:text-white hover:border-transparent transition">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/nucleiieducationalacademy/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 grid place-items-center rounded-full border border-border hover:bg-gradient-brand hover:text-white hover:border-transparent transition">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full px-4 py-3.5 rounded-xl bg-secondary border border-border focus:border-magenta focus:bg-white outline-none transition-colors text-foreground placeholder:text-muted-foreground/60"
      />
    </div>
  );
}
