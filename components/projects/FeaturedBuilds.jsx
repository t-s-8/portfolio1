"use client";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import ProjectShowcase from "./ProjectShowcase";
import projects from "../../data/projects";

export default function FeaturedBuilds() {
  return (
    <Section id="projects">

      <SectionTitle
        eyebrow="FEATURED BUILDS"
        title="Software with purpose."
        description="A selection of projects that reflect how I approach engineering, design, and problem-solving."
      />

      <div className="mt-24 space-y-32">
        {projects.map((project, index) => (
         <ProjectShowcase
          key={project.title}
              {...project}
             reverse={index % 2 === 1}
           />
          ))}
       </div>

    </Section>
  );
}