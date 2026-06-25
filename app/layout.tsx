import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Numo — Product Design Studio",
  description:
    "We help companies ideate, design and prototype digital products, from concept to navigable prototype. UX/UI design studio focused on results.",
  keywords: [
    "product design",
    "UX design",
    "UI design",
    "design studio",
    "prototyping",
    "web design",
    "design system",
    "SaaS design",
    "interface design",
  ],
  authors: [{ name: "Numo" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://designwithnumo.com",
    siteName: "Numo",
    title: "Numo — Product Design Studio",
    description:
      "Product design that gives shape to your idea. From concept to navigable prototype.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Numo — Product Design Studio",
    description:
      "Product design that gives shape to your idea. From concept to navigable prototype.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Numo",
  url: "https://designwithnumo.com",
  description:
    "Product design studio specializing in UX/UI, prototyping, and design systems for digital products.",
  email: "hello@designwithnumo.com",
  areaServed: "Worldwide",
  inLanguage: "en",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Design Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design and Websites" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strategy and Structure" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Prototyping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design System" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Identity and Branding" } },
    ],
  },
  sameAs: [
    "https://instagram.com/designwithnumo",
    "https://www.linkedin.com/company/designwithnumo/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://designwithnumo.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
