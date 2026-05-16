import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Footer from "./components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Growth Lab | AI-Powered Pinterest Automation & Web Solutions",
    template: "%s | AI Growth Lab",
  },
  description:
    "Scale your e-commerce brand globally. Our advanced V-4 Multi-Source Engine automates Pinterest workflows with AI SEO metadata, motion analysis video scheduling, and custom full-stack web architectures.",
  keywords: [
    "AI Growth Lab",
    "Pinterest Automation Software",
    "V-4 Multi-Source Engine",
    "Pinterest SEO US Market",
    "Full-Stack Web Solutions",
    "AI Marketing Automation",
    "E-commerce Growth Hack",
    "Automated Pin Scheduler",
  ],
  metadataBase: new URL("https://ai-growth-lab-with-sadaf.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Growth Lab | Next-Gen Brand Automation Pipelines",
    description:
      "Deploy our V-4 Elite Engine featuring advanced video motion analysis, native metadata generation, and automated SEO ranking optimization. Engineered for high-ticket scaling.",
    url: "https://ai-growth-lab-with-sadaf.vercel.app",
    siteName: "AI Growth Lab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Growth Lab V-4 Automation Control Panel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Growth Lab | V-4 Multi-Source Automation Engine",
    description:
      "High-performance full-stack systems and secure agentic Pinterest workflows that scale visibility natively.",
    images: ["/og-image.png"], // Synchronized extensions to match OG payload safely
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Strongly typed structured data for SEO schemas
interface ProviderAddress {
  "@type": "PostalAddress";
  addressLocality: string;
  addressCountry: string;
}

interface ProviderProfile {
  "@type": "LocalBusiness";
  name: string;
  address: ProviderAddress;
}

interface ServiceOffer {
  "@type": "Offer";
  priceCurrency: string;
}

interface ServiceSchema {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  provider: ProviderProfile;
  areaServed: string[];
  offers: ServiceOffer;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Strict structural typing for JSON-LD object to avoid any injection/type errors
  const jsonLd: ServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Growth Lab - Core Automation & Web Ecosystems",
    description:
      "Elite enterprise systems offering end-to-end full-stack modern web solutions and automated Pinterest growth loops fueled by the V-4 multi-source execution engine.",
    provider: {
      "@type": "LocalBusiness",
      name: "AI Growth Lab",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressCountry: "PK",
      },
    },
    areaServed: ["US", "PK", "Global"],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
    },
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#1a1a1a]">
        {/* Google Analytics Setup */}
        {GA_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_ID} />}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
