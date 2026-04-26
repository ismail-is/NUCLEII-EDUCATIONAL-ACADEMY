import { motion } from "framer-motion";
import { Atom, Beaker, BookOpen, GraduationCap, ArrowUpRight } from "lucide-react";

const courses = [
  {
    icon: GraduationCap,
    title: "Long Term Coaching",
    desc: "Built for NEET. Strong fundamentals, complete syllabus coverage, regular tests and personalised mentoring to drive top medical ranks.",
    tag: "NEET",
  },
  {
    icon: Atom,
    title: "PU Integrated",
    desc: "PU Board + NEET / IIT-JEE / KCET in a single integrated track. Excel in academics while staying ahead in entrance exams.",
    tag: "NEET · JEE · KCET",
  },
  {
    icon: BookOpen,
    title: "Foundation",
    desc: "Class VIII–X concept-focused learning. Builds lifelong fundamentals and early exposure to competitive exam patterns.",
    tag: "Class VIII–X",
  },
  {
    icon: Beaker,
    title: "Tuitions",
    desc: "Personalised, subject-wise coaching to overcome difficulty and strengthen concepts with focused, individual guidance.",
    tag: "All Subjects",
  },
];

export function Courses() {
  return (
    <section id="courses" className="relative py-16 md:py-24 overflow-hidden">
      {/* Light grid backdrop */}
      <div className="absolute inset-0 bg-grid-sm opacity-40 mask-radial -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-magenta/8 blur-[140px] -z-10" />

      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <div className="reveal">
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
              Programmes
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight">
              Kind of Nucleii <span className="text-gradient-pink italic pr-2">Academics</span>
            </h2>
          </div>
          <p className="reveal text-lg text-muted-foreground">
            A structured, student-focused academic system designed to build strong fundamentals,
            ensure consistent performance, and prepare students for NEET, JEE and KCET with expert
            guidance and regular assessments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {courses.map((c, i) => (
            <motion.a
              href="#contact"
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative p-8 md:p-10 rounded-3xl bg-white border border-border shadow-card hover:shadow-soft overflow-hidden cursor-pointer transition-shadow"
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
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-magenta transition-colors">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
