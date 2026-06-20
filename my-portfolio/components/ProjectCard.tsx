import type { ReactNode } from "react";
import type { Project } from "@/content/site";
import { Badge } from "./ui/Badge";
import { LinkButton } from "./ui/LinkButton";
import { GitHubIcon, ArrowUpRightIcon } from "./icons";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
        {label}
      </span>
      <p className="mt-1 text-sm leading-relaxed text-muted text-pretty">
        {children}
      </p>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6">
      <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-accent-ink">{project.tagline}</p>

      <div className="mt-5 space-y-4">
        <Field label="Problem">{project.problem}</Field>
        <Field label="My role">{project.role}</Field>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>

      <ul className="mt-5 space-y-1.5">
        {project.outcomes.map((o) => (
          <li key={o} className="flex gap-2 text-sm text-foreground">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span className="text-pretty">{o}</span>
          </li>
        ))}
      </ul>

      {/* Links render only when a real URL exists (no dead links). */}
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        <LinkButton href={project.links.github} icon={<GitHubIcon />}>
          Code
        </LinkButton>
        <LinkButton href={project.links.live} icon={<ArrowUpRightIcon />}>
          Live demo
        </LinkButton>
        <LinkButton href={project.links.demo} icon={<ArrowUpRightIcon />}>
          Demo video
        </LinkButton>
      </div>
    </article>
  );
}
