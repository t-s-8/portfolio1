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
        title="Learning never stops."
        description="Every year added another layer to my journey as a developer."
      />

      <div className="mt-24">

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