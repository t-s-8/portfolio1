import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Story from "@/components/story/Story";
import Specifications from "@/components/specs/Specifications";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Story />
      <Specifications />
    </main>
  );
}