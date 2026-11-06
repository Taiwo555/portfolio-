import { principles, skills } from "../data";

export function Approach() {
  return (
    <section id="approach" className="section" aria-labelledby="approach-title">
      <div className="section-head reveal">
        <span className="section-index">02</span>
        <h2 id="approach-title">How I work</h2>
        <p>Three habits that explain the rest of this page.</p>
      </div>

      <div className="prose reveal">
        <p>
          I'm Taiwo, a frontend developer in Lagos. I like the part of a product where the data is
          awkward and the interface has to make it legible — file formats, ledgers, tables with too
          many columns.
        </p>
        <p>
          My habit is to check my work against something that doesn't share my assumptions. For
          binlens that meant Apple's own tooling, field by field. For Northbank it meant the browser
          at five widths. When I can't verify something, I say so on the page instead of hiding it.
        </p>
      </div>

      <ul className="principles">
        {principles.map((principle) => (
          <li key={principle.title} className="reveal">
            <span className="principle-mark" aria-hidden="true">
              →
            </span>
            <div>
              <strong>{principle.title}</strong>
              <p>{principle.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Skills() {
  return (
    <section id="toolbox" className="section" aria-labelledby="toolbox-title">
      <div className="section-head reveal">
        <span className="section-index">03</span>
        <h2 id="toolbox-title">Toolbox</h2>
        <p>What I reach for.</p>
      </div>

      <dl className="skills">
        {skills.map((group) => (
          <div key={group.group} className="reveal">
            <dt>{group.group}</dt>
            <dd>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
