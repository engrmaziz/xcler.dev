import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { TechStack } from "@/components/sections/TechStack";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Work />
      <Process />
      <Team />
      <Testimonials />
      <TechStack />
      <BlogPreview />
      <CTA />
    </>
  );
}
