import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics"; // Import the component

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sadaf Automation | AI-Powered Pinterest Growth Engine",
    template: "%s | Sadaf Automation",
  },
  description:
    "Scale your e-commerce sales with human-mimicking AI agents. Our V-2 Engine automates Pinterest workflows with SEO-optimized content and 99% safety.",
  keywords: [
    "Pinterest Automation",
    "AI Marketing Agency",
    "E-commerce Growth AI",
    "Sadaf Developer",
    "Automated Social Media Marketing",
    "Pinterest SEO US Market",
  ],
  metadataBase: new URL("https://sadaf-pin-ai-automation.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sadaf Automation | Next-Gen Pinterest Growth",
    description:
      "Our V-2 Engine grew beta accounts by +999% in 6 weeks. High-conversion AI automation for jewelry and e-commerce brands.",
    url: "https://sadaf-pin-ai-automation.vercel.app",
    siteName: "Sadaf Automation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sadaf Automation V-2 Engine Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadaf Automation | Pinterest V-2 Engine",
    description:
      "Agentic Pinterest workflows that speak your brand's language.",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sadaf Automation - Pinterest AI Growth Engine",
    description:
      "Professional Pinterest automation using AI/ML agentic workflows for e-commerce brands.",
    provider: {
      "@type": "LocalBusiness",
      name: "Sadaf-Automation",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressCountry: "PK",
      },
    },
    areaServed: "US",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "200.00",
    },
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Analytics - Sirf tab load hoga agar ID available ho */}
        {GA_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_ID} />}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
