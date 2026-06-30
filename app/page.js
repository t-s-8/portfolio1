import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Story from "@/components/story/Story";
import Specifications from "@/components/specs/Specifications";
import FeaturedBuilds from "@/components/projects/FeaturedBuilds";
import Journey from "@/components/timeline/Journey";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <Story />

      <Specifications />

      <FeaturedBuilds />

      <Journey />

      <Contact />

      <Footer />

    </main>
  );
}