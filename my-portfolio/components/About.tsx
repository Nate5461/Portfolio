import { about } from "@/content/site";
import { Section } from "./ui/Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Hi, I'm Nate.">
      <div className="space-y-4 text-lg leading-relaxed text-muted text-pretty">
        {about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </Section>
  );
}
