import { projects } from "../data";

export function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section-head reveal">
        <span className="section-index">01</span>
        <h2 id="work-title">Selected work</h2>
        <p>Two projects, both live. Every number below was measured, not estimated.</p>
      </div>

      <div className="projects">
        {projects.map((project) => (
          <article key={project.id} className="project reveal" aria-labelledby={`${project.id}-title`}>
            <div className="project-top">
              <div className="project-heading">
                <span className="project-index">{project.index}</span>
                <h3 id={`${project.id}-title`}>{project.title}</h3>
                <span className="project-kind">{project.kind}</span>
              </div>
              <span className="project-year">{project.year}</span>
            </div>

            <p className="project-stack">{project.stack}</p>
            <p className="project-summary">{project.summary}</p>

            <ul className="facts">
              {project.facts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>

            <ul className="metrics" aria-label={`${project.title} measurements`}>
              {project.metrics.map((metric) => (
                <li key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </li>
              ))}
            </ul>

            <div className="project-links">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  className={link.quiet ? "link-arrow quiet" : "link-arrow"}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="aside reveal">
        This page is the third one: React and TypeScript, built with Vite, no UI library and no
        runtime dependencies beyond React.
      </p>
    </section>
  );
}
