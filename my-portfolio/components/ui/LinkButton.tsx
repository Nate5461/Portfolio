import type { ReactNode } from "react";

export function isReadyLink(href?: string): href is string {
  if (!href) return false;
  const v = href.trim();
  return v.length > 0 && !/^todo/i.test(v);
}

type Variant = "solid" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  solid:
    "bg-foreground text-background border border-foreground hover:opacity-90",
  outline:
    "border border-border text-foreground hover:border-foreground/40 hover:bg-foreground/[0.03]",
  ghost: "text-accent-ink hover:underline underline-offset-4",
};

export function LinkButton({
  href,
  children,
  variant = "outline",
  icon,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}) {
  if (!isReadyLink(href)) return null;

  const external = /^https?:\/\//.test(href);
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
