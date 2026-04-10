import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";

const Stats = dynamic(() =>
  import("@/components/sections/Stats").then((m) => ({ default: m.Stats }))
);
const Services = dynamic(() =>
  import("@/components/sections/Services").then((m) => ({ default: m.Services }))
);
const Work = dynamic(() =>
  import("@/components/sections/Work").then((m) => ({ default: m.Work }))
);
const Process = dynamic(() =>
  import("@/components/sections/Process").then((m) => ({ default: m.Process }))
);
const Team = dynamic(() =>
  import("@/components/sections/Team").then((m) => ({ default: m.Team }))
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);
const BlogPreview = dynamic(() =>
  import("@/components/sections/BlogPreview").then((m) => ({
    default: m.BlogPreview,
  }))
);
const CTA = dynamic(() =>
  import("@/components/sections/CTA").then((m) => ({ default: m.CTA }))
);

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Stats />
      <Services />
      <Work />
      <Process />
      <Team />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </>
  );
}
