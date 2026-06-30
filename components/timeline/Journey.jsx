"use client";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "./TimelineItem";
import journey from "./journeyData";

export default function Journey() {
  return (
    <Section id="journey">

      <SectionTitle
        eyebrow="ENGINEERING JOURNEY"
        title="Always Learning."
        description="Every milestone reflects growth, curiosity, and the drive to build better software."
      />

      <div className="mt-20">

        {journey.map((item) => (
          <TimelineItem
            key={item.year}
            {...item}
          />
        ))}

      </div>

    </Section>
  );
}