import { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Sadaf Automation | AI-Powered Pinterest Growth Engine",
  description:
    "Scale your e-commerce sales with agentic workflows. We use V-2 Engine technology for human-mimicking Pinterest automation and SEO optimization.",
  keywords: [
    "Pinterest Automation",
    "AI Marketing",
    "E-commerce Growth",
    "Sadaf Developer",
    "Pinterest SEO",
    "Agentic Workflows",
  ],
  authors: [{ name: "Sadaf Developer" }],
  openGraph: {
    title: "Sadaf Automation | High-Conversion Pinterest AI",
    description:
      "Automate your Pinterest growth with our V-2 Analytical Engine. +999% reach in 6 weeks.",
    url: "https://sadaf-pin-ai-automation.vercel.app",
    siteName: "Sadaf Automation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sadaf Automation Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadaf Automation | Pinterest V-2 Engine",
    description: "AI-driven Pinterest automation for US-based brands.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return <LandingPage />;
};

export default page;
