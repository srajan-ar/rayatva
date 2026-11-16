import Link from "next/link";
import { BRANDS } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero">
      <div className="w">
        <div>
          <span className="pill">
            <span className="dot" />
            Courses, live yoga and business growth
          </span>

          <h1>Grow your skills, wellness, and business with expert-led learning.</h1>

          <p className="lead">
            Learn practical skills, join live wellness sessions, and build a stronger business with a premium learning experience designed for clarity, confidence, and momentum.
          </p>

          <div className="hero-badges">
            <span>Business</span>
            <span>Creative</span>
            <span>Wellness</span>
            <span>Certificates</span>
          </div>

          <div className="row">
            <Link className="btn wh" href="/courses">Explore courses</Link>
            <Link className="tl" href="/#booking">Book a service</Link>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>5k+</strong>
              <span>learners</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>rating</span>
            </div>
            <div>
              <strong>120+</strong>
              <span>brand clients</span>
            </div>
          </div>

          <div className="trust">
            <div>
              <b>98%</b>
              <span>would recommend</span>
            </div>
            <div>
              <b>15+</b>
              <span>expert programs</span>
            </div>
            <div>
              <b>Live</b>
              <span>cohorts weekly</span>
            </div>
          </div>
        </div>

        <div className="stack" aria-hidden="true">
          <div className="gl l">
            <small>Featured cohort</small>
            <div className="pic">🧘</div>
            <b>Live Yoga + Focus Lab</b>
            <div className="mini-stat-row">
              <span>4.9 rating</span>
              <span>32 joined</span>
            </div>
          </div>

          <div className="gl">
            <b>Popular learning paths</b>
            <div className="chips">
              {[
                "Brand strategy",
                "Video editing",
                "Live yoga",
                "Marketing",
                "Websites",
                "Certificates",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="gl">
            <b>Learning momentum</b>
            <small style={{ float: "right" }}>+8.5%</small>
            <svg viewBox="0 0 300 90" width="100%" style={{ marginTop: 10 }}>
              <path d="M0 62 L40 52 L80 68 L120 30 L160 60 L200 38 L240 46 L300 22 L300 90 L0 90Z" fill="rgba(255,255,255,.16)" />
              <path d="M0 62 L40 52 L80 68 L120 30 L160 60 L200 38 L240 46 L300 22" fill="none" stroke="#fff" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Brands() {
  return (
    <div className="ob">
      <div className="marq">
        <h3>Brands we have worked for</h3>
        <div className="track">
          {[...BRANDS, ...BRANDS].map((brand, index) => (
            <span key={`${brand}-${index}`}>{brand}</span>
          ))}
        </div>
      </div>
      <p className="tagl">Courses, live classes and business services, all in one place</p>
    </div>
  );
}

export function About() {
  return (
    <div className="pull">
      <div className="sheet" id="about">
        <div className="ab">
          <div>
            <span className="eb">About us</span>
            <h2>We blend skill-building, wellness, and clear business strategy.</h2>
            <p className="lead">
              Rayatva is a learning and growth studio where people build stronger skills, healthier routines, and clearer brand presence. We teach, coach, and create with intention so growth feels sustainable instead of overwhelming.
            </p>
            <ul className="ck">
              <li>Industry-focused courses with certificates</li>
              <li>Live yoga sessions for focus and recovery</li>
              <li>Brand strategy, marketing and website systems for businesses</li>
            </ul>
            <Link className="btn" href="/#loc">Talk to us</Link>
          </div>

          <div className="big">
            <div>
              <b>R</b>
              Rayatva
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
