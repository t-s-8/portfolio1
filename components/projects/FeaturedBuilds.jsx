"use client";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import ProjectShowcase from "./ProjectShowcase";
import projects from "./projectsData";

export default function FeaturedBuilds() {
  return (
    <Section id="projects">

      <SectionTitle
        eyebrow="FEATURED BUILDS"
        title="Software with purpose."
        description="A selection of projects that reflect how I approach engineering, design, and problem-solving."
      />

      <div className="mt-24 space-y-16">

        {projects.map((project) => (
          <ProjectShowcase
            key={project.title}
            {...project}
          />
        ))}

      </div>

    </Section>
  );
}