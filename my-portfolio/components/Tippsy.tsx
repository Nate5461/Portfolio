import { Fragment, type ReactNode } from "react";
import { tippsy } from "@/content/site";
import { Section } from "./ui/Section";
import { LinkButton } from "./ui/LinkButton";
import { GitHubIcon, ArrowUpRightIcon } from "./icons";

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-10">
      <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent-ink">
        {label}
      </h3>
      {children}
    </div>
  );
}

const archNodes = ["iOS (Swift)", "Go REST API", "PostgreSQL"];

export function Tippsy() {
  return (
    <Section id="tippsy" eyebrow="Flagship — in active development" title="Tippsy">
      <p className="text-xl leading-relaxed text-foreground text-pretty">
        {tippsy.tagline}
      </p>
      <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
        {tippsy.status}
      </p>

      <Block label="The problem">
        <p className="text-lg leading-relaxed text-muted text-pretty">
          {tippsy.problem}
        </p>
      </Block>

      <Block label="Architecture">
        <div className="flex flex-col items-stretch gap-2 rounded-lg border border-border bg-surface p-4 sm:flex-row sm:items-center sm:p-5">
          {archNodes.map((node, i) => (
            <Fragment key={node}>
              <div className="flex flex-1 items-center justify-center rounded-md border border-border bg-background px-3 py-2 text-center font-mono text-xs text-foreground">
                {node}
              </div>
              {i < archNodes.length - 1 && (
                <span aria-hidden className="self-center text-subtle">
                  <span className="sm:hidden">↓</span>
                  <span className="hidden sm:inline">↔</span>
                </span>
              )}
            </Fragment>
          ))}
        </div>
        <p className="mt-3 text-sm text-subtle">
          Backend-only service, so the README is the demo — architecture, setup,
          and a diagram of it running.
        </p>
      </Block>

      <Block label="Why this stack">
        <dl className="space-y-4">
          {tippsy.whyStack.map((item) => (
            <div key={item.tech}>
              <dt className="font-medium text-foreground">{item.tech}</dt>
              <dd className="mt-1 text-muted text-pretty">{item.reason}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block label="Build log">
        <ul className="space-y-4">
          {tippsy.buildLog.map((entry) => (
            <li key={entry.title} className="border-l-2 border-border pl-4">
              <p className="font-medium text-foreground">{entry.title}</p>
              <p className="mt-1 text-muted text-pretty">{entry.detail}</p>
            </li>
          ))}
        </ul>
      </Block>

      {/*
        TODO: When the AI drink-recommendation feature ships, add an
        "AI recommendations" Block here and re-frame Tippsy as an AI project.
        Until then, ship the backend story truthfully — don't fake it.
      */}

      <div className="mt-10 flex flex-wrap gap-3">
        <LinkButton
          href={tippsy.links.github}
          variant="solid"
          icon={<GitHubIcon />}
        >
          View the code
        </LinkButton>
        <LinkButton href={tippsy.links.demo} icon={<ArrowUpRightIcon />}>
          Demo
        </LinkButton>
        <LinkButton href={tippsy.links.backend} icon={<ArrowUpRightIcon />}>
          Live backend
        </LinkButton>
      </div>
    </Section>
  );
}
