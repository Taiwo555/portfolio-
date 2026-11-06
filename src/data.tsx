import type { ReactNode } from "react";

export const profile = {
  name: "Taiwo Hunjunude",
  role: "Frontend developer",
  location: "Lagos, Nigeria",
  timezone: "WAT · UTC+1",
  email: "rolandhunjunude60@gmail.com",
  github: "https://github.com/Taiwo555",
  availability: "Open to remote frontend roles",
};

export const facts = [
  { label: "Based", value: "Lagos, Nigeria" },
  { label: "Overlap", value: "Full UK / EU" },
  { label: "Focus", value: "Data-heavy UI" },
  { label: "Stack", value: "React · TypeScript" },
];

export type Project = {
  id: string;
  index: string;
  stack: string;
  title: string;
  kind: string;
  year: string;
  summary: string;
  facts: ReactNode[];
  metrics: { value: string; label: string }[];
  links: { label: string; href: string; quiet?: boolean }[];
};

export const projects: Project[] = [
  {
    id: "binlens",
    index: "01",
    stack: "TypeScript · React · Vite · Web Workers",
    title: "binlens",
    kind: "Mach-O binary inspector",
    year: "2026",
    summary:
      "A browser tool for reading macOS and iOS executables. Drop a binary in and it shows the load commands, segments, linked libraries, code signature, entitlements, strings and raw bytes — parsed on your machine, nothing uploaded.",
    facts: [
      <>
        Wrote the parser from the format specification: roughly 1,250 lines of <code>DataView</code>{" "}
        reads, zero parsing dependencies.
      </>,
      <>
        Moved parsing into a Web Worker, so a 120&nbsp;MB binary resolves in about 800&nbsp;ms
        without freezing the interface.
      </>,
      <>
        Verified every field against Apple's own tools — <code>lipo</code>, <code>otool</code>,{" "}
        <code>codesign</code> — and covered the parser with fuzz tests over truncated and malformed
        input.
      </>,
    ],
    metrics: [
      { value: "55", label: "tests" },
      { value: "99.2%", label: "statements" },
      { value: "20,000+", label: "strings rendered" },
      { value: "0", label: "parsing deps" },
    ],
    links: [
      { label: "Open binlens", href: "https://binlens.netlify.app" },
      { label: "Source", href: "https://github.com/Taiwo555/binlens", quiet: true },
    ],
  },
  {
    id: "northbank",
    index: "02",
    stack: "Next.js · React · TypeScript · Static export",
    title: "Northbank",
    kind: "Personal banking interface",
    year: "2026",
    summary:
      "An account dashboard and transfer flow: balances, saved recipients, a review step, generated references and a searchable history. Modelled so the money logic is testable apart from the UI.",
    facts: [
      <>
        Built as a static export — files on a CDN, no backend to run, pay for or secure.
      </>,
      <>
        Validation lives in the store, not the form: every rule is enforced in one place and cannot
        be bypassed by another screen.
      </>,
      <>
        Found and fixed a transfer form that broke on phones after testing at 390, 560, 700, 900 and
        1440&nbsp;px — the amount field overflowed horizontally, which a payment form must never do.
      </>,
    ],
    metrics: [
      { value: "5", label: "breakpoints tested" },
      { value: "0", label: "backend services" },
      { value: "100%", label: "static build" },
      { value: "1", label: "author" },
    ],
    links: [
      { label: "Open Northbank", href: "https://northbanks.netlify.app" },
      { label: "Source", href: "https://github.com/Taiwo555/northbank", quiet: true },
    ],
  },
];

export const principles = [
  {
    title: "Measure, then claim",
    body: "Every number on this page comes from a test run or a stopwatch, not an estimate.",
  },
  {
    title: "One place for each rule",
    body: "Validation, formatting and state live where they can be tested, not inside a form.",
  },
  {
    title: "Say what it can't do",
    body: "Limits are written next to the features, instead of being discovered by a reviewer.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript (ES2023)", "HTML", "CSS"] },
  { group: "Frontend", items: ["React 19", "Next.js", "Vite", "Responsive layout", "Accessibility"] },
  {
    group: "Platform",
    items: ["Web Workers", "ArrayBuffer & DataView", "Virtualised lists", "Performance profiling"],
  },
  { group: "Testing", items: ["Node test runner", "Unit & integration", "Fuzzing", "Coverage"] },
  { group: "Tooling", items: ["Git", "GitHub Actions", "npm", "oxlint", "Netlify", "Vercel"] },
  { group: "Systems", items: ["Mach-O", "Code signing", "Entitlements", "Reading specifications"] },
];
