import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useReveal } from "@/hooks/useReveal";
import aboutHero from "@/assets/nucleii/about-hero.jpg";
import founder from "@/assets/nucleii/founder.jpg";
import rakeshKumarJha from "@/assets/nucleii/rakesh-kumar-jha.png";
import sivaKumar from "@/assets/nucleii/siva-kumar.png";
import nRaveendra from "@/assets/nucleii/n-raveendra.png";
import rasikaAnil from "@/assets/nucleii/rasika-anil.png";
import vinayReddy from "@/assets/nucleii/vinay-reddy.png";
import shaikBashaCard from "@/assets/nucleii/shaik-basha-card.png";
import venkataRangaReddy from "@/assets/nucleii/venkata-ranga-reddy.png";
import kamendraPathak from "@/assets/nucleii/kamendra-pathak.png";
import narasimhuluNaidu from "@/assets/nucleii/narasimhulu-naidu.png";
import eRambabu from "@/assets/nucleii/e-rambabu.png";
import { Users, GraduationCap, Award, Briefcase } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Nucleii Educational Academy" },
      {
        name: "description",
        content:
          "At Nucleii Educational Academy, we deliver high-quality coaching for NEET, IIT-JEE, KVPY, NTSE & Olympiads with personalised mentoring.",
      },
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

const facultyMembers = [
  {
    name: "Shaik Basha",
    role: "Chemistry Lecturer",
    qualification: "M.Sc., B.Ed.",
    experience: "14+ Years",
    image: shaikBashaCard,
    subject: "Chemistry",
    description:
      "Founder of Nucleii Educational Academy with extensive experience in Chemistry coaching.",
  },
  {
    name: "N Raveendra",
    role: "Mathematics Lecturer",
    qualification: "M.Sc, B.Ed",
    experience: "30+ Years",
    image: nRaveendra,
    subject: "Mathematics",
    description:
      "Veteran Mathematics educator with three decades of expertise in competitive coaching.",
  },
  {
    name: "Venkata Ranga Reddy",
    role: "Chemistry Lecturer",
    qualification: "M.Sc., B.Ed.",
    experience: "20+ Years",
    image: venkataRangaReddy,
    subject: "Chemistry",
    description: "Expert Chemistry faculty specializing in JEE and NEET preparation.",
  },
  {
    name: "Rakesh Kumar Jha",
    role: "Mathematics Lecturer",
    qualification: "M.Sc (Maths)",
    experience: "15+ Years",
    image: rakeshKumarJha,
    subject: "Mathematics",
    description: "Specializes in advanced Mathematics for engineering entrance exams.",
  },
  {
    name: "Kamendra Pathak",
    role: "Physics Lecturer",
    qualification: "B.Tech",
    experience: "15+ Years",
    image: kamendraPathak,
    subject: "Physics",
    description: "B.Tech expert focusing on conceptual Physics and problem-solving techniques.",
  },
  {
    name: "Siva Kumar",
    role: "Zoology Lecturer",
    qualification: "M.Sc-Zoology",
    experience: "12+ Years",
    image: sivaKumar,
    subject: "Biology",
    description: "Specialized Zoology educator for medical entrance aspirants.",
  },
  {
    name: "E Rambabu",
    role: "Physics Lecturer",
    qualification: "M.Tech",
    experience: "12+ Years",
    image: eRambabu,
    subject: "Physics",
    description: "M.Tech qualified Physics faculty with a strong academic background.",
  },
  {
    name: "Narasimhulu Naidu",
    role: "Chemistry Lecturer",
    qualification: "M.Sc (Organic Chemistry)",
    experience: "15+ Years",
    image: narasimhuluNaidu,
    subject: "Chemistry",
    description: "Expert in Organic Chemistry with over 15 years of teaching excellence.",
  },
  {
    name: "Rasika Anil",
    role: "Biology Lecturer",
    qualification: "Masters (Bioinformatics)",
    experience: "5+ Years",
    image: rasikaAnil,
    subject: "Biology",
    description: "Modern Biology educator with a focus on Bioinformatics and Environment Science.",
  },
  {
    name: "Vinay Reddy",
    role: "Physics Lecturer",
    qualification: "M.Sc",
    experience: "3+ Years",
    image: vinayReddy,
    subject: "Physics",
    description: "Dynamic Physics faculty dedicated to student success and concept clarity.",
  },
];

function AboutPage() {
  useReveal();
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Nurturing every <span className="text-gradient-pink italic">brilliant</span> mind.
          </>
        }
        description="A decade of training students for IIT-JEE, NEET, KVPY, NTSE and Olympiads — with a singular focus on holistic, future-ready education."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Hero image */}
      <section className="relative -mt-10 pb-8">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-soft border border-border bg-white aspect-[16/8]"
          >
            <img
              src={aboutHero}
              alt="Nucleii Academy"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-sm opacity-30 mask-radial -z-10" />
        <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
              Why Choose Us
            </span>
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
                serving the dual objective of excellence in Board Exams &amp; cracking competitive
                exams like IIT-JEE, NEET, KVPY, NTSE and many Olympiads — without any additional
                burden on students.
              </p>
              <p>
                With a focus on individualised learning and a supportive environment, we ensure each
                student receives personalised attention and develops their skills and knowledge
                effectively.
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
                <div className="mt-2 text-xs uppercase tracking-[0.25em] opacity-80">
                  Years Of Experience
                </div>
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
      <section className="relative py-16 md:py-24 overflow-hidden">
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
              <img
                src={founder}
                alt="S K Basha — Founder"
                className="w-full h-full object-auto "
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-soft border border-border">
              <div className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">
                Founder &amp; Lecturer
              </div>
              <div className="font-display text-2xl font-bold text-foreground mt-1">S K Basha</div>
              <div className="text-sm text-muted-foreground">M.Sc, B.Ed · Chemistry Faculty</div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 reveal">
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase">
              Founder's Message
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              "Every child is born <span className="text-gradient-pink italic">talented</span>."
            </h2>

            <div className="mt-8 relative">
              <Quote className="absolute -top-2 -left-2 w-10 h-10 text-magenta/15" />
              <div className="space-y-5 text-foreground/85 leading-relaxed pl-6 border-l-2 border-magenta/20">
                <p>
                  The very purpose of a good educational academy is to recognise and nurture the
                  hidden talents of a student and prepare them for future challenges with the
                  required academic and leadership skills. My experience of more than a decade in
                  training students for IIT-JEE, NEET, KVPY, NTSE and Olympiads has further
                  emboldened this belief.
                </p>
                <p>
                  My endeavour at NUCLEII is to nurture every child in a unique manner. As we know,
                  education is a long process — and in our present scenario, no one can imagine
                  education without knowledge of digital skills. Development in AI, Robotics,
                  medical techniques and genetic engineering is making the current workforce
                  redundant; only those who learn and train themselves with these technologies will
                  be able to continue forward.
                </p>
                <p>
                  At NUCLEII, we ensure that all students inculcate a rapid learning aptitude and a
                  competitive spirit from the very beginning. NUCLEII aims to provide holistic
                  education and a conducive atmosphere for emotional, spiritual, physical and
                  intellectual growth — along with the ability to conquer future challenges.
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

      {/* Our Faculty Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-pink opacity-[0.15] mask-radial -z-10" />
        <div className="container mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <span className="text-magenta text-xs font-semibold tracking-[0.3em] uppercase flex items-center justify-center gap-2">
              <Users className="w-4 h-4" /> Expert Educators
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Our <span className="text-gradient-pink italic">Expert</span> Faculty
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Learn from the best minds in the industry. Our faculty members are not just teachers,
              but mentors who guide students through every step of their academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-square bg-white shadow-soft border border-border group-hover:border-magenta/40 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                      {member.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-magenta-soft text-magenta text-[10px] font-bold uppercase tracking-wider">
                      {member.subject}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      <Briefcase className="w-3 h-3" /> {member.experience}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-magenta transition-colors">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-magenta/60" />
                    <span className="text-sm font-medium">{member.qualification}</span>
                  </div>
                  <p className="text-sm text-muted-foreground/80 mt-0.5">{member.role}</p>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Award className="w-5 h-5 text-white shadow-glow" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-navy to-navy-light text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-magenta/20 blur-[100px] rounded-full" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-center md:text-left">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Want to meet our expert faculty?
                </h3>
                <p className="text-white/70 text-lg">
                  Schedule a free counselling session or visit our campus to interact with our
                  educators and learn about our teaching methodology.
                </p>
              </div>
              <Link
                to="/contact"
                className="whitespace-nowrap px-8 py-4 rounded-full bg-white text-navy font-bold shadow-glow hover:bg-magenta hover:text-white transition-all duration-300 active:scale-95"
              >
                Book a Session
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
