import { nav, profile } from "@/content/site";

/** Sticky, minimal anchor nav. No client JS — just in-page links. */
export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="font-serif text-base font-medium tracking-tight text-foreground"
        >
          {profile.name}
        </a>
        <ul className="hidden items-center gap-6 sm:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
