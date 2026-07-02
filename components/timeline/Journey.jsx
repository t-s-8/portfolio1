"use client";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "./TimelineItem";
import journey from "./journeyData";

export default function Journey() {
  return (
    <Section id="journey">
        <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[150px]" />

      <SectionTitle
        eyebrow="MY JOURNEY"
        title="Building one project at a time."
       description="Every project, challenge and milestone has helped shape the developer I'm becoming."
      />

      <div className="mx-auto mt-24 max-w-4xl">
      {journey.map((item, index) => (
        <TimelineItem
         key={item.year + item.title}
          {...item}
           isLast={index === journey.length - 1}
       />
       ))}
         </div>

    </Section>
  );
}