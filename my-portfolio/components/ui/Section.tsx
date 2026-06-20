import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-border py-16 sm:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-3xl px-6">
        <header className="mb-8">
          {eyebrow && (
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-ink">
              {eyebrow}
            </p>
          )}
          <h2
            id={headingId}
            className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          >
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
