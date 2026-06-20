import { profile } from "@/content/site";
import { SocialLinks } from "./SocialLinks";

const hasValue = (s?: string) => !!s && !/^todo/i.test(s.trim());

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto w-full max-w-3xl px-6 pb-16 pt-20 sm:pb-24 sm:pt-28"
    >
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent-ink">
        {profile.name} · {profile.role}
      </p>

      <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground text-balance sm:text-6xl">
        {profile.positioning}
      </h1>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
        {hasValue(profile.location) && (
          <span className="inline-flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden
            >
              <path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {profile.location}
          </span>
        )}
        {profile.openToWork && (
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            Open to work
          </span>
        )}
      </div>

      <div className="mt-8">
        <SocialLinks />
      </div>
    </section>
  );
}
