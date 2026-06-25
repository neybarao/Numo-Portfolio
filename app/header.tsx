"use client";

import { useState } from "react";
import { MobileNav } from "./mobile-nav";
import { NumoLogo } from "./numo-logo";

const navLinks = [
  { id: "services", label: "Services" },
  { id: "why", label: "Why Numo" },
  { id: "how-we-work", label: "How we work" },
  { id: "experience", label: "Experience" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__blur" aria-hidden="true">
        <span /><span /><span /><span /><span /><span /><span />
      </div>
      <div className="header__inner">
        <a
          href="#"
          className="header__logo"
          aria-label="Numo — back to top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <NumoLogo />
        </a>

        <nav className="header__nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="header__link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="header__cta"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contact");
          }}
        >
          Get in touch
        </a>

        <button
          className="header__burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
