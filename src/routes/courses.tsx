import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap, BookOpen, Atom, Beaker,
  Users, FileCheck, Brain, MessageCircle, ClipboardList, BarChart3, FlaskConical,
  ArrowRight, Globe, UserCheck, Sparkles,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Nucleii Educational Academy" },
      { name: "description", content: "Long Term, PU Integrated, Foundation & Tuition coaching for NEET, IIT-JEE, KVPY, NTSE and Olympiads." },
      { property: "og:title", content: "Our Courses — Nucleii" },
      { property: "og:description", content: "Programmes designed to build strong fundamentals and crack competitive exams." },
    ],
  }),
  component: CoursesPage,
});

const features = [
  { icon: Users, title: "Best Academic Team" },
  { icon: BookOpen, title: "Quality Content" },
  { icon: MessageCircle, title: "Doubt Solving Classes" },
  { icon: Brain, title: "Academic Mentorship" },
  { icon: ClipboardList, title: "Weekend & Cumulative Exams" },
  { icon: BarChart3, title: "Exam Analysis" },
  { icon: FlaskConical, title: "Academic Research & Development" },
  { icon: FileCheck, title: "Personalised Tracking" },
];

const courses = [
  {
    icon: GraduationCap,
    title: "Long Term Coaching",
    desc: "NEET Repeaters Batch for II PU Passed Students. Strong fundamentals, complete syllabus coverage, regular tests and personalised mentoring.",
    tag: "NEET",
  },
  {
    icon: Atom,
    title: "PU Integrated Coaching",
    desc: "Regular coaching for PU Board + competitive exams like NEET, JEE & KCET — all in one integrated track without additional burden.",
    tag: "NEET · JEE · KCET",
  },
  {
    icon: BookOpen,
    title: "Foundation Course",
    desc: "Foundation classes for students of Class VIII to X. Concept-focused early preparation for NEET, JEE and Olympiads.",
    tag: "Class VIII–X",
  },
  {
    icon: Beaker,
    title: "Tuitions",
    desc: "Individual subject classes for students who have difficulties in particular subjects. Personalised one-on-one guidance.",
    tag: "All Subjects",
  },
];

const journey = [
  {
    icon: Globe,
    title: "Integrated Campus",
    desc: "Integrated coaching for Science with PU Board & competitive exams like NEET, JEE Mains & Advanced and KCET.",
  },
  {
    icon: Sparkles,
    title: "Online Education",
    desc: "Get top lecturers at your convenient time. Live classes, doubt clarifications and recorded lessons help you excel in academics.",
  },
  {
    icon: UserCheck,
    title: "Our Mentors",
    desc: "A mentor provides valuable insights and helps you navigate your educational and career path — career advancement, skill development, academic guidance.",
  },
];

function CoursesPage() {
  useReveal();
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="We Provide"
        title={<>Our Courses <span className="text-gradient-pink italic">Includes</span></>}
        description="A structured, student-focused academic system to build strong fundamentals and crack NEET, JEE, KCET and Olympiads."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Courses" }]}
      />

      {/* Includes grid */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-sm opacity-30 mask-radial -z-10" />
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                className="group p-6 rounded-2xl bg-white border border-border shadow-card hover:shadow-soft hover:border-magenta/40 transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-brand grid place-items-center shadow-card group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <div className="mt-4 font-display font-bold text-sm uppercase tracking-wider text-foreground">
                  {f.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pink opacity-30 mask-radial -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-magenta/8 blur-[140px] -z-10" />

        <div className="container mx-auto px-5">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">Our Courses</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight">
              Kind of Nucleii <span className="text-gradient-pink italic">Academics</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {courses.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 md:p-10 rounded-3xl bg-white border border-border shadow-card hover:shadow-soft overflow-hidden transition-shadow flex flex-col"
              >
                <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-magenta-soft group-hover:bg-magenta/15 blur-3xl transition-all duration-700" />
                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-brand grid place-items-center shadow-card">
                      <c.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-magenta font-semibold px-3 py-1 rounded-full border border-magenta/30 bg-magenta-soft">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl md:text-4xl font-bold tracking-tight group-hover:text-magenta transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-magenta transition-colors"
                  >
                    Enquiry Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey ahead */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-sm opacity-30 mask-radial -z-10" />
        <div className="container mx-auto px-5">
          <div className="reveal max-w-3xl mx-auto text-center mb-14">
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">To The Journey Ahead</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight">
              Gain Valuable <span className="text-gradient-pink italic">Knowledge</span> &amp; Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {journey.map((j, i) => (
              <motion.div
                key={j.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-border shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-pink grid place-items-center shadow-glow">
                  <j.icon className="w-6 h-6 text-white" />
                </div>
                <div className="mt-6 font-display text-2xl font-bold text-foreground">{j.title}</div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{j.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Two-column promise strip */}
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            <div className="reveal p-8 rounded-3xl bg-gradient-brand text-white shadow-glow">
              <div className="text-xs uppercase tracking-[0.3em] opacity-70 font-semibold">You Apply</div>
              <div className="mt-3 font-display text-3xl font-bold">Material provided by NUCLEII</div>
              <p className="mt-3 text-white/80">For Foundation Classes and Integrated Coaching.</p>
            </div>
            <div className="reveal p-8 rounded-3xl bg-gradient-pink text-white shadow-glow">
              <div className="text-xs uppercase tracking-[0.3em] opacity-70 font-semibold">We Connect</div>
              <div className="mt-3 font-display text-3xl font-bold">DPPs &amp; cumulative tests</div>
              <p className="mt-3 text-white/80">
                The academy &amp; faculty provide DPPs across all classes and subjects, and conduct
                cumulative tests for students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
