import { Metadata } from "next";
import AIGrowthLab from "./components/AIGrowthLab";

export const metadata: Metadata = {
  title: "AI Growth Lab | Next-Gen Digital Infrastructure & Automation",
  description:
    "We build high-performance web systems, autonomous inbound lead pipelines, and AI-driven growth engines to scale your enterprise workflows.",
  keywords: [
    "AI Growth Lab",
    "Digital Infrastructure",
    "SyncVantage Automation Engine",
    "Full-Stack Web Solutions",
    "Pinterest Automation",
    "B2B Lead Pipelines",
    "Autonomous Workflows",
    "Data Synchronization",
  ],
  authors: [{ name: "AI Growth Lab Engineering" }],
  openGraph: {
    title: "AI Growth Lab | Autonomous Digital Infrastructure",
    description:
      "Scale your workflows with high-performance web solutions, real-time data sync, and AI-driven automation pipelines.",
    url: "https://ai-growth-lab-with-sadaf.vercel.app/",
    siteName: "AI Growth Lab",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "AI Growth Lab Infrastructure Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Growth Lab | Next-Gen Automation Engines",
    description:
      "Autonomous data routing, custom web solutions, and AI-driven scale engines.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return <AIGrowthLab />;
};

export default page;
