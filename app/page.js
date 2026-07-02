import Hero from "@/components/hero/Hero";
import Story from "@/components/about/About";
import Specifications from "@/components/specs/Specifications";
import FeaturedBuilds from "@/components/projects/FeaturedBuilds";
import Journey from "@/components/timeline/Journey";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

import FadeInSection from "@/components/shared/FadeInSection";
import About from "@/components/about/About";

export default function Home() {
  return (
    <>
      <Hero />

      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection>
        <Specifications />
      </FadeInSection>

      <FadeInSection>
        <FeaturedBuilds />
      </FadeInSection>

      <FadeInSection>
        <Journey />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>

      <Footer />
    </>
  );
}