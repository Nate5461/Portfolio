import { skills } from "@/content/site";
import { Section } from "./ui/Section";
import { Badge } from "./ui/Badge";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills">
      <dl className="space-y-5">
        {skills.map((group) => (
          <div key={group.label} className="sm:flex sm:gap-6">
            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-subtle sm:w-40 sm:shrink-0 sm:pt-1.5">
              {group.label}
            </dt>
            <dd className="mt-2 flex flex-wrap gap-1.5 sm:mt-0">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
