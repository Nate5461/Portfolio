import { projects } from "@/content/site";
import { Section } from "./ui/Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="projects" eyebrow="More work" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
