"use client";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { id: "services", label: "Services" },
  { id: "why", label: "Why Numo" },
  { id: "how-we-work", label: "How we work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Get in touch" },
];

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const handleClick = (sectionId: string) => {
    onClose();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`mobile-nav${isOpen ? " mobile-nav--open" : ""}`}>
      <button
        className="mobile-nav__close"
        aria-label="Close menu"
        onClick={onClose}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(link.id);
          }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
