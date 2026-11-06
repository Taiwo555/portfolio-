import { profile } from "../data";
import type { Theme } from "../hooks/useTheme";

type Props = {
  active: string;
  theme: Theme;
  onToggle: () => void;
};

const links = [
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
];

export function Header({ active, theme, onToggle }: Props) {
  return (
    <header className="site-head">
      <a className="mark" href="#top" aria-label={`${profile.name} — home`}>
        <span className="mark-dot" aria-hidden="true" />
        <span>{profile.name}</span>
      </a>

      <nav aria-label="Sections">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            aria-current={active === link.id ? "true" : undefined}
            className={active === link.id ? "is-active" : undefined}
          >
            {link.label}
          </a>
        ))}

        <button
          className="theme"
          type="button"
          onClick={onToggle}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" />
          </svg>
          <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2Z" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
