import { profile } from "../data";

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="section-head reveal">
        <span className="section-index">04</span>
        <h2 id="contact-title">Contact</h2>
        <p>Hiring, or you have a project you want professional hands on.</p>
      </div>

      <div className="contact-body reveal">
        <a className="mail" href={`mailto:${profile.email}`}>
          {profile.email}
          <span aria-hidden="true">↗</span>
        </a>

        <div className="contact-meta">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            github.com/Taiwo555
          </a>
          <span>
            {profile.location} · {profile.timezone}
          </span>
          <span className="contact-status">
            <span className="dot-live" aria-hidden="true" />
            {profile.availability}
          </span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-foot">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
