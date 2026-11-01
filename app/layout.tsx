import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Caveat, Manrope } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["700", "800", "900"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-body", display: "swap" });
const hand = Caveat({ subsets: ["latin"], weight: ["600"], variable: "--font-hand", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Gourav Murmu, Risk Analyst & Builder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#F3DFA8" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/gourav.webp`,
  jobTitle: "Analyst, Legal Entity Risk Reporting",
  worksFor: { "@type": "Organization", name: "JPMorganChase" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Malaviya National Institute of Technology Jaipur" },
  email: `mailto:${site.email}`,
  sameAs: [site.links.github, site.links.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="sr-only z-[100] rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
