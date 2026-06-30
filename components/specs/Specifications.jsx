"use client";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import SpecCard from "./SpecCard";
import specs from "./specsData";

export default function Specifications() {
  return (
    <Section className="bg-black" id="specifications">

      <SectionTitle
        eyebrow="SPECIFICATIONS"
        title="Built for modern software."
        description="The technologies I use to design, build and deploy high-quality digital experiences."
      />

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {specs.map((spec) => (
          <SpecCard
            key={spec.title}
            {...spec}
          />
        ))}

      </div>

    </Section>
  );
}