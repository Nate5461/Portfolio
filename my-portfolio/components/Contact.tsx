import { profile } from "@/content/site";
import { Section } from "./ui/Section";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <p className="max-w-xl text-lg leading-relaxed text-muted text-pretty">
        {profile.openToWork
          ? "I enjoy working on a full stack with an emphasis on AI and am open to new opportunities. I'm happy to talk through any of the work above, the fastest way to reach me is by email:"
          : "I'm happy to talk through any of the work above — the fastest way to reach me is by email."}
      </p>
      <p className="mt-4">
        <a
          href={`mailto:${profile.email}`}
          className="font-serif text-xl text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-ink"
        >
          {profile.email}
        </a>
      </p>
      <div className="mt-8">
        <SocialLinks variant="outline" />
      </div>
    </Section>
  );
}
