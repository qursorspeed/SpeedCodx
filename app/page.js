import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";

import WhyChoose from "@/components/WhyChoose";
import Team from "@/components/Team";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Process />

      <WhyChoose />
      <Team />
      <CallToAction />
    </main>
  );
}
