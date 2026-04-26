import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Toppers } from "@/components/Toppers";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Courses } from "@/components/Courses";
import { Campuses } from "@/components/Campuses";
import { Gallery } from "@/components/Gallery";
import { AppSection } from "@/components/AppSection";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nucleii Educational Academy — NEET · JEE · KCET Coaching" },
      { name: "description", content: "India's leading NEET, IIT-JEE & KCET coaching academy. 10+ campuses, 3,000+ students, State Rank #6." },
      { property: "og:title", content: "Nucleii Educational Academy" },
      { property: "og:description", content: "Shape the future of every brilliant mind — NEET · JEE · KCET coaching across India." },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Toppers />
      <Stats />
      <Courses />
      <Campuses />
      <Gallery />
      <AppSection />
      <Footer />
    </main>
  );
}
