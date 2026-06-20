import { profile } from "@/content/site";
import { LinkButton } from "./ui/LinkButton";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DocumentIcon,
} from "./icons";

/**
 * Hero/contact link row. Each button renders only when its URL is real, so
 * unfilled `TODO:` slots in content/site.ts simply don't appear.
 */
export function SocialLinks({
  variant = "outline",
}: {
  variant?: "outline" | "solid" | "ghost";
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <LinkButton href={profile.links.github} variant={variant} icon={<GitHubIcon />}>
        GitHub
      </LinkButton>
      <LinkButton
        href={profile.links.linkedin}
        variant={variant}
        icon={<LinkedInIcon />}
      >
        LinkedIn
      </LinkButton>
      <LinkButton
        href={profile.links.resume}
        variant={variant}
        icon={<DocumentIcon />}
      >
        Resume
      </LinkButton>
      <LinkButton
        href={`mailto:${profile.email}`}
        variant={variant}
        icon={<MailIcon />}
      >
        Email
      </LinkButton>
    </div>
  );
}
