import { Metadata } from "next";
import PinterestAutomation from "../components/PinterestAutomation";

export const metadata: Metadata = {
  title: "Pinterest Automation Engine | AI Growth Lab",
  description:
    "Scale your e-commerce sales and brand reach with AI Growth Lab's autonomous Pinterest engine. Human-mimicking workflows, scheduling, and advanced Pinterest SEO optimization.",
  keywords: [
    "AI Growth Lab",
    "Pinterest Automation",
    "Pinterest SEO",
    "E-commerce Growth Engine",
    "Autonomous Pin Scheduling",
    "Agentic Marketing Workflows",
    "AI Traffic Generation",
  ],
  authors: [{ name: "AI Growth Lab" }],
  openGraph: {
    title: "AI Growth Lab | High-Conversion Pinterest Automation",
    description:
      "Automate your brand's growth with our autonomous Pinterest engine. Optimize workflows, boost visibility, and scale traffic seamlessly.",
    url: "https://ai-growth-lab-with-sadaf.vercel.app/pinterest-automation",
    siteName: "AI Growth Lab",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Growth Lab Pinterest Automation Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return <PinterestAutomation />;
};

export default page;
