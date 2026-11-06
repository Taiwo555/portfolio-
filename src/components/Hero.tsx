import { facts, profile } from "../data";

export function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow reveal">
        <span className="dot-live" aria-hidden="true" />
        {profile.role} — {profile.location}
      </p>

      <h1 className="reveal">
        I make heavy data <em>feel light.</em>
      </h1>

      <p className="lede reveal">
        I build interfaces for data-heavy products, and write the layer underneath when it doesn't
        exist. A Mach-O binary parser that runs entirely in the browser. A banking interface that
        ships as static files.
      </p>

      <div className="hero-actions reveal">
        <a className="btn" href="#work">
          See the work
        </a>
        <a className="btn btn-quiet" href="./cv.pdf" download>
          Download CV <span aria-hidden="true">↓</span>
        </a>
      </div>

      <dl className="factbar reveal" aria-label="At a glance">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
