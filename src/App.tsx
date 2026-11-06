import { Contact, Footer } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Approach, Skills } from "./components/Sections";
import { Work } from "./components/Work";
import { useActiveSection, useReveal } from "./hooks/useScroll";
import { useTheme } from "./hooks/useTheme";

const SECTIONS = ["work", "approach", "toolbox", "contact"] as const;

export default function App() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection(SECTIONS);

  useReveal();

  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>

      <Header active={active} theme={theme} onToggle={toggle} />

      <main>
        <Hero />
        <Work />
        <Approach />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
