import { fuh } from "@/content/site";
import { Section } from "./ui/Section";
import { ArchDiagram } from "./ui/ArchDiagram";

export function FUH() {
  return (
    <Section id="fuh" eyebrow="Case study — FUH" title={fuh.heading}>
      <p className="text-lg leading-relaxed text-muted text-pretty">
        {fuh.intro}
      </p>

      <div className="mt-12 space-y-14">
        {fuh.cases.map((c) => (
          <article key={c.name}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground">
                {c.name}
              </h3>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent-ink">
                {c.kicker}
              </span>
            </div>

            <p className="mt-3 text-muted text-pretty">{c.summary}</p>

            <div className="mt-6">
              <ArchDiagram variant={c.diagram} />
            </div>

            <dl className="mt-6 space-y-3">
              {c.patterns.map((p) => (
                <div key={p.title} className="sm:flex sm:gap-4">
                  <dt className="font-medium text-foreground sm:w-48 sm:shrink-0">
                    {p.title}
                  </dt>
                  <dd className="mt-1 text-muted text-pretty sm:mt-0">
                    {p.detail}
                  </dd>
                </div>
              ))}
            </dl>

            {c.outcomes && c.outcomes.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.outcomes.map((o) => (
                  <li
                    key={o}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-foreground"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
