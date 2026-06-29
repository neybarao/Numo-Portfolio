import { Animations } from "./animations";
import { LoadingScreen } from "./loading-screen";
import { ConsentBanner } from "./consent-banner";
import { Header } from "./header";

const services = [
  {
    number: "01",
    name: "Web design and websites",
    description:
      "When your site doesn’t communicate value. We design and deliver digital experiences, from concept to live site.",
    tags: ["Institutional sites", "Landing pages", "One-pages"],
  },
  {
    number: "02",
    name: "Product design",
    description:
      "When you have a product idea and need to give it shape. We design the interface and experience for SaaS, apps and platforms.",
    tags: ["SaaS", "Apps", "Platforms"],
  },
  {
    number: "03",
    name: "Strategy and structure",
    description:
      "When there’s no clarity on what to do. We structure the product, organize information architecture and define priorities.",
    tags: ["New products", "Redesign", "Diagnosis"],
  },
  {
    number: "04",
    name: "Prototyping",
    description:
      "When you need to see and test before investing in development. Navigable prototypes that validate the idea with real users.",
    tags: ["Proof of concept", "Validation", "Pitch"],
  },
  {
    number: "05",
    name: "Design system",
    description:
      "When the product grows without consistency. We structure systems that standardize decisions and prepare the product to scale.",
    tags: ["SaaS", "Platforms", "Apps"],
  },
  {
    number: "06",
    name: "Identity and branding",
    description:
      "When the product needs an identity that matches its ambition. Brand as a system that sustains growth.",
    tags: ["Identity", "Guidelines", "Application"],
  },
];

const methods = [
  {
    title: "Fixed scope",
    tagline: "When the scope is clear from the start.",
    intro:
      "There’s a defined problem, a clear deliverable and a timeline that makes sense. We agree on what will be done, by when and for how much.",
    bullets: [
      "Detailed proposal with scope, timeline and investment",
      "Defined milestones and checkpoints",
      "Final delivery with everything documented",
    ],
    fit: "Best for: specific projects like a website, a product redesign or a design system with a clear brief.",
  },
  {
    title: "Open scope",
    tagline: "A clear need, but not all the answers.",
    intro:
      "You know you need design help, but the scope might shift as you learn more. We work in cycles, adjusting priorities as we go.",
    bullets: [
      "Weekly or biweekly cycles with clear outputs",
      "Flexibility to reprioritize between cycles",
      "Ongoing collaboration with regular check-ins",
    ],
    fit: "Best for: evolving products, early-stage startups, or when the roadmap is still forming.",
  },
  {
    title: "Team extension",
    tagline: "A design team at your disposal.",
    intro:
      "Your team needs more design capacity without the overhead of hiring. We embed into your workflow and operate as part of your squad.",
    bullets: [
      "Dedicated designer(s) integrated into your team",
      "Follows your processes, tools and rituals",
      "Scales up or down as needed",
    ],
    fit: "Best for: companies with ongoing design needs that want quality without the hiring cycle.",
  },
];

const marqueeKeywords = [
  "Product design",
  "Prototyping",
  "Web design",
  "Design system",
  "Strategy",
  "Interface",
  "Identity",
];

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">
        <img
          src="/hero-bg.png"
          alt=""
          className="hero__img"
          aria-hidden="true"
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="t-display reveal">
            Product design that gives shape to your idea
          </h1>
        </div>
        <div className="hero__bottom">
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Start a project
            </a>
            <a href="#how-we-work" className="btn btn--outline">
              See how we work
            </a>
          </div>
          <div className="hero__services" aria-hidden="true">
            <span className="hero__services-num">01/</span>
            <span>Product Design</span>
            <span>Prototyping</span>
            <span>Strategy</span>
          </div>
        </div>
      </section>

      {/* ── 2. Statement ────────────────────────────────────── */}
      <section className="statement" aria-label="Statement">
        <div className="statement__inner">
          <div className="statement__left">
            <h2 className="t-headline reveal">
              Strategic vision, sharp execution and total focus on the
              experience.
            </h2>
          </div>
          <div className="statement__right reveal">
            <p>
              We work with companies that want to create, evolve or unblock a
              digital product. From the first idea to the prototype that gives
              confidence to invest.
            </p>
            <p>
              We don&apos;t promise shortcuts. We understand the business
              problem before designing any screen, and we deliver design your
              team can carry forward independently.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Marquee ──────────────────────────────────────── */}
      <div className="marquee-wrap">
      <div className="marquee" aria-label="Keywords">
        <div className="marquee__track">
          {[...marqueeKeywords, ...marqueeKeywords].map((kw, i) => (
            <span key={i}>
              <span className="marquee__word">{kw}</span>
              <span className="marquee__sep" aria-hidden="true">
                *
              </span>
            </span>
          ))}
        </div>
      </div>
      </div>

      {/* ── 4. Portfolio Cards ──────────────────────────────── */}
      <section className="portfolio" aria-label="Portfolio">
        <div className="portfolio__grid">
          <div className="portfolio__card reveal" style={{ backgroundColor: "#1a1a1a" }}>
            <span className="portfolio__tag">Interface</span>
          </div>
          <div className="portfolio__card reveal" style={{ backgroundColor: "#151515" }}>
            <span className="portfolio__tag">Product</span>
          </div>
          <div className="portfolio__card reveal" style={{ backgroundColor: "#111111" }}>
            <span className="portfolio__tag">Identity</span>
          </div>
        </div>
      </section>

      {/* ── 5. Why choose us ────────────────────────────────── */}
      <section className="why" id="why" aria-label="Why choose us">
        <div className="section__inner">
          <span className="label reveal">Why choose us</span>
          <h2 className="t-headline reveal">When Numo makes sense.</h2>
          <p className="lead reveal">
            Create, evolve or unblock a digital product. When that becomes a
            problem, Numo makes sense. Simple as that.
          </p>

          <div className="why__cards">
            {/* Time */}
            <div className="why__card reveal stagger-1">
              <div className="why__icon" aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 12v8l5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Time</h3>
              <p>
                Your team is great, but short on time. It makes sense when
                there&apos;s no room in the schedule to evolve the product with
                consistency.
              </p>
            </div>

            {/* Cost */}
            <div className="why__card reveal stagger-2">
              <div className="why__icon" aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="6"
                    fill="currentColor"
                    opacity="0.2"
                  />
                  <circle cx="20" cy="20" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3>Cost</h3>
              <p>
                Lacking agility and precision? It makes sense when what costs
                the most is delay, rework and decisions without clarity.
              </p>
            </div>

            {/* Delivery */}
            <div className="why__card reveal stagger-3">
              <div className="why__icon" aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8"
                    y="8"
                    width="24"
                    height="24"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M14 20l4 4 8-8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Delivery</h3>
              <p>
                Feel like deliveries could be better? It makes sense when you
                need well-thought-out design, from brief to final interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Services ─────────────────────────────────────── */}
      <section className="services" id="services" aria-label="Services">
        <div className="section__inner">
          <span className="label reveal">Services — what we do</span>
          <h2 className="t-headline reveal">What we do.</h2>
          <p className="lead reveal">
            Six design fronts that cover the lifecycle of a digital product,
            from idea to prototype. Hire the front you&apos;re missing or the
            complete package.
          </p>

          <div className="services__list">
            {services.map((svc, i) => (
              <div className={`service-row reveal stagger-${i + 1}`} key={svc.number}>
                <span className="service-row__number">{svc.number}</span>
                <div className="service-row__left">
                  <h3 className="service-row__name">{svc.name}</h3>
                  <div className="service-row__tags">
                    {svc.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="service-row__desc">{svc.description}</p>
              </div>
            ))}
          </div>

          <div className="services__cta reveal">
            <a href="#contact" className="btn btn--dark">
              I want to talk about my project
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. Break ────────────────────────────────────────── */}
      <div className="break-section" aria-label="Quote">
        <div className="break-section__bg" />
        <blockquote className="break-section__quote reveal">
          <p>
            &ldquo;Good design is not how it looks. It&apos;s how it works when
            someone needs to decide.&rdquo;
          </p>
        </blockquote>
      </div>

      {/* ── 8. How we work ──────────────────────────────────── */}
      <section id="how-we-work" aria-label="How we work">
        <div className="section__inner">
          <span className="label reveal">
            How we work — three formats
          </span>
          <h2 className="t-headline reveal">
            Clear method, adapted to your context.
          </h2>
          <p className="lead reveal">
            Less formula. More situational awareness. There&apos;s no single way
            to work. There&apos;s the right way for your business context.
          </p>

          <div className="methods__grid">
            {methods.map((m, i) => (
              <div className={`method-card reveal stagger-${i + 1}`} key={m.title}>
                <h3 className="method-card__title">{m.title}</h3>
                <p className="method-card__tagline">{m.tagline}</p>
                <p className="method-card__intro">{m.intro}</p>
                <ul className="method-card__bullets">
                  {m.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="method-card__fit">{m.fit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Case study ───────────────────────────────────── */}
      <section
        className="case-study"
        id="experience"
        aria-label="Experience"
      >
        <div className="section__inner">
          <span className="label reveal">
            Experience — a project, told up close
          </span>
          <h2 className="t-headline reveal">
            We don&apos;t have volume. We have depth.
          </h2>
          <p className="lead reveal">
            Each project receives full attention. This is the kind of work we
            deliver.
          </p>

          <div className="case-study__grid">
            <div className="case-study__image reveal">
              <div
                className="case-study__placeholder"
                style={{ backgroundColor: "#141414" }}
              />
            </div>
            <div className="case-study__details reveal">
              <h3 className="case-study__client">
                Norvex Logistics — B2B Platform
              </h3>

              <div className="case-study__field">
                <h4>Challenge</h4>
                <p>
                  Norvex needed to replace an outdated internal tool used by
                  logistics operators with a modern, scalable B2B platform that
                  could handle complex workflows.
                </p>
              </div>

              <div className="case-study__field">
                <h4>What we did</h4>
                <p>
                  We mapped the entire operation, restructured information
                  architecture, designed the full interface and delivered a
                  navigable prototype that guided the engineering team through
                  development.
                </p>
              </div>

              <div className="case-study__field">
                <h4>Result</h4>
                <p>
                  A clear, usable platform that reduced operator training time
                  by 60% and gave the leadership team confidence to invest in
                  the next phase.
                </p>
              </div>

              <blockquote className="case-study__quote">
                <p>
                  &ldquo;Numo didn&apos;t just design screens. They understood
                  our operation and turned complexity into clarity.&rdquo;
                </p>
                <cite>Pedro Almeida, COO at Norvex</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. CTA Section ──────────────────────────────────── */}
      <section
        className="cta-section"
        id="contact"
        aria-label="Contact"
      >
        <div className="section__inner">
          <span className="label reveal">
            Let&apos;s talk — no commitment
          </span>
          <h2 className="t-headline reveal">Ready for the first step?</h2>
          <p className="lead reveal">
            You don&apos;t need to have everything figured out. Tell us
            what&apos;s stuck and we&apos;ll unstick it together.
          </p>

          <div className="cta-section__pillars reveal">
            <div className="cta-section__pillar">
              <h3>Response within 24h</h3>
              <p>
                We reply fast. You&apos;ll hear from us within one business day
                with clear next steps.
              </p>
            </div>
            <div className="cta-section__pillar">
              <h3>Clear next steps</h3>
              <p>
                After our first conversation, you&apos;ll know exactly what the
                process looks like and what to expect.
              </p>
            </div>
            <div className="cta-section__pillar">
              <h3>No commitment on the call</h3>
              <p>
                The first conversation is free and without obligation. We&apos;re
                here to listen and understand your challenge.
              </p>
            </div>
          </div>

          <div className="cta-section__links reveal">
            <a
              href="mailto:hello@designwithnumo.com"
              className="cta-section__link"
            >
              hello@designwithnumo.com
            </a>
          </div>
        </div>
      </section>

      {/* ── 12. Footer ──────────────────────────────────────── */}
      <footer className="footer" aria-label="Footer">
        <div className="footer__inner">
          <div className="footer__top">
            <p className="footer__tagline">
              Design that gives shape to your idea.
            </p>
          </div>

          <div className="footer__columns">
            <div className="footer__col">
              <h4>Studio</h4>
              <nav className="footer__nav">
                <a href="#services">Services</a>
                <a href="#why">Why Numo</a>
                <a href="#how-we-work">How we work</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <div className="footer__col">
              <h4>Contact</h4>
              <a href="mailto:hello@designwithnumo.com">
                hello@designwithnumo.com
              </a>
              <a
                href="https://designwithnumo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                designwithnumo.com
              </a>
            </div>

            <div className="footer__col">
              <h4>Location</h4>
              <p>Remote — serves everywhere</p>
            </div>
          </div>

          <div className="footer__bar">
            <p>&copy; Numo — 2026</p>
          </div>
        </div>
      </footer>

      {/* ── Client components ───────────────────────────────── */}
      <Animations />
      <LoadingScreen />
      <ConsentBanner />
    </>
  );
}
