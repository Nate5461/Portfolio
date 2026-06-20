import { profile } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-6 py-10 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">
          Built with Next.js &amp; Tailwind · deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
