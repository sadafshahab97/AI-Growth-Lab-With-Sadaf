import { Metadata } from "next";
import React from "react";
import WebsiteBuilding from "../components/website-building-comp/WebsiteBuilding";

export const metadata: Metadata = {
  title: "Full-Stack Web Solutions | AI Growth Lab",
  description:
    "Architecting high-performance, ultra-fast, and custom enterprise web applications. Engineered for seamless conversion, scalability, and modern business growth.",
  keywords: [
    "AI Growth Lab",
    "Website Building",
    "Full-Stack Web Solutions",
    "Enterprise Web Development",
    "Next.js Development",
    "Custom Web Applications",
    "High-Performance Frontend",
    "Scalable Software Architecture",
  ],
  authors: [{ name: "AI Growth Lab" }],
  openGraph: {
    title: "AI Growth Lab | Premium Full-Stack Web Solutions",
    description:
      "Deploy custom web applications engineered for speed, conversion, and ultimate scalability.",
    url: "https://ai-growth-lab-with-sadaf.vercel.app/website-building",
    siteName: "AI Growth Lab",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Growth Lab Web Solutions Framework",
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
  return <WebsiteBuilding />;
};

export default page;
