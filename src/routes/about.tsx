import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/useReveal";
import aboutHero from "@/assets/nucleii/about-hero.jpg";
import founder from "@/assets/nucleii/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Nucleii Educational Academy" },
      { name: "description", content: "At Nucleii Educational Academy, we deliver high-quality coaching for NEET, IIT-JEE, KVPY, NTSE & Olympiads with personalised mentoring." },
      { property: "og:title", content: "About Nucleii Educational Academy" },
      { property: "og:description", content: "Our story, mission and the founder behind Nucleii." },
    ],
  }),
  component: AboutPage,
});

const features = [
  "Best Academic Team",
  "Quality Content",
  "Academic Mentorship",
  "Doubt Solving Classes",
  "Weekend & Cumulative Exams",
  "Exam Analysis",
];

function AboutPage() {
  useReveal();
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Our Story"
        title={<>Nurturing every <span className="text-gradient-pink italic">brilliant</span> mind.</>}
        description="A decade of training students for IIT-JEE, NEET, KVPY, NTSE and Olympiads — with a singular focus on holistic, future-ready education."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Hero image */}
      <section className="relative -mt-10 pb-16">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-soft border border-border bg-white aspect-[16/8]"
          >
            <img src={aboutHero} alt="Nucleii Academy" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-sm opacity-30 mask-radial -z-10" />
        <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">Why Choose Us</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Why <span className="text-gradient-pink italic">Nucleii</span> Academy
            </h2>
            <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Nucleii Educational Academy Pvt Ltd, we are committed to providing high-quality
                education and guidance to students. With our experienced team of educators and a
                comprehensive curriculum, we strive to help our students reach their full potential.
              </p>
              <p>
                NUCLEII ACADEMY is a leading institute that gives you a fully customised programme
                serving the dual objective of excellence in Board Exams &amp; cracking competitive exams
                like IIT-JEE, NEET, KVPY, NTSE and many Olympiads — without any additional burden on students.
              </p>
              <p>
                With a focus on individualised learning and a supportive environment, we ensure each
                student receives personalised attention and develops their skills and knowledge effectively.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group p-6 rounded-2xl bg-white border border-border shadow-card hover:shadow-soft hover:border-magenta/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-magenta-soft grid place-items-center group-hover:bg-gradient-pink transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-magenta group-hover:text-white transition-colors" />
                </div>
                <div className="mt-4 font-display font-bold text-lg text-foreground">{f}</div>
              </motion.div>
            ))}

            <div className="sm:col-span-2 grid grid-cols-2 gap-4 mt-2">
              <div className="p-6 rounded-2xl bg-gradient-brand text-white shadow-glow">
                <div className="font-display text-5xl md:text-6xl font-bold">10+</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] opacity-80">Years Of Experience</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-pink text-white shadow-glow">
                <div className="font-display text-5xl md:text-6xl font-bold">3K+</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] opacity-80">Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-60 -z-10" />
        <div className="absolute inset-0 bg-grid-pink opacity-40 mask-radial -z-10" />

        <div className="container mx-auto px-5 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-6 bg-gradient-pink blur-3xl opacity-15 -z-10" />
            <div className="relative rounded-3xl overflow-hidden shadow-soft border border-border bg-white aspect-[4/5]">
              <img src={founder} alt="S K Basha — Founder" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-soft border border-border">
              <div className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Founder &amp; Lecturer</div>
              <div className="font-display text-2xl font-bold text-foreground mt-1">S K Basha</div>
              <div className="text-sm text-muted-foreground">M.Sc, B.Ed · Chemistry Faculty</div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 reveal">
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">Founder's Message</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              "Every child is born <span className="text-gradient-pink italic">talented</span>."
            </h2>

            <div className="mt-8 relative">
              <Quote className="absolute -top-2 -left-2 w-10 h-10 text-magenta/15" />
              <div className="space-y-5 text-foreground/85 leading-relaxed pl-6 border-l-2 border-magenta/20">
                <p>
                  The very purpose of a good educational academy is to recognise and nurture the hidden
                  talents of a student and prepare them for future challenges with the required academic
                  and leadership skills. My experience of more than a decade in training students for
                  IIT-JEE, NEET, KVPY, NTSE and Olympiads has further emboldened this belief.
                </p>
                <p>
                  My endeavour at NUCLEII is to nurture every child in a unique manner. As we know,
                  education is a long process — and in our present scenario, no one can imagine education
                  without knowledge of digital skills. Development in AI, Robotics, medical techniques and
                  genetic engineering is making the current workforce redundant; only those who learn and
                  train themselves with these technologies will be able to continue forward.
                </p>
                <p>
                  At NUCLEII, we ensure that all students inculcate a rapid learning aptitude and a
                  competitive spirit from the very beginning. NUCLEII aims to provide holistic education
                  and a conducive atmosphere for emotional, spiritual, physical and intellectual growth —
                  along with the ability to conquer future challenges.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
