
export type NavItem = { label: string; href: string };

export type LinkSet = {
  github?: string;
  live?: string;
  /** TestFlight link or a short screen-recording. */
  demo?: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  /** Make individual contribution explicit, especially on team projects. */
  role: string;
  stack: string[];
  /** Quantified where possible — numbers signal you measure your work. */
  outcomes: string[];
  links: LinkSet;
};

export type SkillGroup = { label: string; items: string[] };

export type CaseStudy = {
  name: string;
  kicker: string;
  summary: string;
  /** Architectural patterns, told without exposing anything proprietary. */
  patterns: { title: string; detail: string }[];
  outcomes?: string[];
  diagram: "emma" | "intake";
};

// ---------------------------------------------------------------------------

export const profile = {
  name: "Nathan Bissett",
  role: "Software Engineer",
  // Hero statement — leads with breadth, which is the actual hook for a junior.
  positioning:
    "I build software end-to-end — from real-time backends and production AI to cloud and iOS.",
  location: "TODO: City, Country (or 'Remote')",
  openToWork: true,
  email: "nathanbissett906@gmail.com",
  links: {
    github: "https://github.com/Nate5461",
    linkedin: "https://www.linkedin.com/in/nathan-bissett-96389629b",
    resume: "/resume.pdf",
  },
};

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Tippsy", href: "#tippsy" },
  { label: "Case Study", href: "#fuh" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about: string[] = [
  "I'm a software engineer with about a year of professional experience spanning an unusually wide stack for a junior — real-time backend systems, production AI/LLM services, cloud, full-stack web, iOS, and embedded/IoT.",
  "Most recently at FUH I worked on the architecture behind Emma, a real-time presence and calling system, and an AI clinical-intake service that turns conversation into validated structured data.", // TODO: confirm your exact role/title at FUH.
  "I like owning problems end-to-end — from sensors and embedded firmware, up through distributed backends, to the screen in someone's hand.",
  "Right now I'm building Tippsy, a Go + Postgres + iOS app, and I'm open to software roles.",
];

/** Tippsy */
export const tippsy = {
  name: "Tippsy",
  tagline: "A drink-discovery app, built start to finish.", // TODO: confirm the exact product pitch.
  status: "In active development — shipping to TestFlight.",
  problem:
    "Finding a drink you'll actually enjoy means wading through generic lists that ignore your taste. Tippsy is a mobile app for discovering drinks tailored to you — built start to finish, from the native iOS client down to the API and database.", // TODO: tighten to the real product story.
  architecture: "Native iOS app (Swift) ↔ Go REST API ↔ PostgreSQL.",
  whyStack: [
    {
      tech: "Go",
      reason:
        "A simple, statically-typed API with first-class concurrency and a tiny deployment footprint — easy to reason about and cheap to run on a free tier.",
    },
    {
      tech: "PostgreSQL",
      reason:
        "Drinks, ingredients, users and preferences are inherently relational; Postgres gives strong consistency and mature tooling for query-driven features.",
    },
    {
      tech: "iOS (Swift)",
      reason:
        "A native client for a fast, platform-native feel — and since I build iOS, the whole stack stays first-party and end-to-end mine.",
    },
  ],
  
  buildLog: [
    {
      title: "REST over GraphQL",
      detail:
        "The data model is straightforward, so REST keeps the iOS client simple and the API easy to cache and reason about.",
    },
    {
      title: "Relational model first",
      detail:
        "Modeled drinks/ingredients/preferences in Postgres up front so filtering and recommendations stay query-driven rather than bolted on.",
    },
    {
      title: "Testable service boundaries",
      detail:
        "Separated HTTP handlers from the data store so the API can be tested without a live database.",
    },
    // TODO: add 1–2 real decisions from your commit history.
  ],
  links: {
    github: "https://github.com/Nate5461/tippsy",
    demo: undefined, // TODO: TestFlight link or 30s screen recording (renders when set)
    backend: undefined, // TODO: deployed backend URL on a free tier (renders when set)
  } as LinkSet & { backend?: string },
};

/** FUH — the punch-above-weight piece. NDA-safe, pattern-level only. */
export const fuh = {
  heading: "Systems work at FUH",
  intro:
    "My strongest work is under NDA, so I can't share the code. What I can share is how the systems were designed — the patterns, the trade-offs, and my role. No proprietary code, no client or business specifics.",
  roleNote: "TODO: your role/title and scope on this work.",
  cases: [
    {
      name: "Emma",
      kicker: "Real-time presence & calling",
      summary:
        "A real-time presence and calling system for connected devices. I worked on how devices announce availability and how calls route reliably across unreliable networks.",
      diagram: "emma",
      patterns: [
        {
          title: "Presence model",
          detail:
            "Devices publish heartbeats and status to a presence service; stale presence expires on a TTL, so the system fails toward 'unavailable' instead of ringing a dead endpoint.",
        },
        {
          title: "MQTT over TLS",
          detail:
            "Low-latency pub/sub messaging between devices and backend over an encrypted transport, with topic-scoped authorization per device.",
        },
        {
          title: "Call state machine",
          detail:
            "The call lifecycle (idle → ringing → connected → ended/failed) is modeled as an explicit state machine, so every transition is observable and recoverable.",
        },
        {
          title: "Multi-device fallback",
          detail:
            "A logical user can own several devices; routing tries them in priority order and degrades gracefully when one is unreachable.",
        },
      ],
      outcomes: [
        "~99% reliability during early rollout",
      ],
    },
    {
      name: "AI clinical-intake service",
      kicker: "Production LLM pipeline",
      summary:
        "A service that turns a freeform patient conversation into validated, structured data for downstream systems — a production LLM pipeline with safety rails.",
      diagram: "intake",
      patterns: [
        {
          title: "Conversation → structured output",
          detail:
            "A transcript is passed through an LLM extraction step that emits structured output conforming to a strict, typed schema.",
        },
        {
          title: "Schema validation",
          detail:
            "Every model response is validated against the schema; invalid or missing fields are rejected or re-prompted rather than passed downstream.",
        },
        {
          title: "Model fallback",
          detail:
            "A primary model with automatic fallback to a secondary on error, timeout, or low confidence, so the service degrades instead of failing.",
        },
        {
          title: "Audit logging",
          detail:
            "Every request, response, and decision is logged for traceability and review — essential in a clinical context.",
        },
      ],
    },
  ] satisfies CaseStudy[],
};

export const projects: Project[] = [
  {
    slug: "lolabees",
    name: "LolaBees",
    tagline: "Hardware + cloud for healthier hives.",
    problem:
      "Beekeepers lose hives to conditions they can't see until it's too late — by the time a colony shows visible trouble, the loss is often already underway.",
    // TODO: sharpen YOUR specific individual contribution (e.g. "owned the
    role:
      "Led a team of 4, owning the end-to-end system design across the sensor hardware and the cloud dashboard.",
    // TODO: add the language + cloud provider you actually used.
    stack: ["Embedded / IoT", "Sensors + firmware", "Cloud dashboard"],
    outcomes: [
      "2nd place out of 13 teams",
      "~40% reduction in hive loss",
      "Real hardware feeding a live cloud dashboard",
    ],
    links: {
      github: "https://github.com/Nate5461/LolaBees",
    },
  },
  {
    slug: "cheer",
    name: "Cheer",
    tagline: "Accessible, deployed full-stack web app.",
    // TODO: add the one-line product purpose (what Cheer does + who it's for).
    problem:
      "My cleanest academic full-stack build — an end-to-end web app taken from zero to a live, authenticated, accessible deployment.",
    role:
      "Built the full stack — React/Next front end, authentication, and a GCP deployment — with WCAG-compliant accessibility throughout.",
    stack: ["React / Next.js", "Google Cloud", "Auth", "WCAG / a11y"],
    outcomes: [
      "Cleanest academic full-stack build",
      "WCAG-accessible by design",
      // TODO: add a metric if you have one.
    ],
    links: {
      github: "https://github.com/Nate5461/cheer",
      live: undefined, // not live yet — renders only once a real URL exists
      demo: undefined, // TODO: optional screen recording if you record one
    },
  },
];

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Go", "Swift", "TypeScript", "Python"] },
  {
    label: "Backend & infra",
    items: ["PostgreSQL", "MQTT", "REST APIs", "Google Cloud", "Vercel"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind", "WCAG / a11y"],
  },
  { label: "Mobile & embedded", items: ["iOS (Swift)", "Embedded / IoT"] },
];
