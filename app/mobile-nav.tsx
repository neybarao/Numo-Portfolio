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
