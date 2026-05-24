export interface Tier {
  title: string;
  price: string;
  badge: string;
  description: string;
  features: string[];
  buttonText: string;
  highlight: boolean;
  waMessage: string;
}

export const tiers: Tier[] = [
  {
    title: "V-4 Starter: Presence",
    price: "229",
    badge: "Best For Beginners",
    description:
      "Perfect for small brands & creators starting Pinterest growth.",
    features: [
      "90 Optimized Pins (30-Day Scheduling)",
      "Pinterest SEO Setup",
      "Board & Keyword Optimization",
      "Brand Style Matching",
      "Regional Time-Zone Posting",
      "Weekly Growth Report",
      "Single Account Management",
    ],
    buttonText: "Start Growth",
    highlight: false,
    waMessage: "Hi Sadaf, I'm interested in the V-4 Starter Plan ($299/month).",
  },
  {
    title: "V-4 Growth: Intelligence",
    price: "349",
    badge: "Most Popular",
    description: "Ideal for scaling brands that want traffic + consistency.",
    features: [
      "150 SEO Optimized Pins",
      "50 Premium Video Pins (25 sec video)",
      "Pinterest Trend Research",
      "US/UK Audience Scheduling",
      "Automated UTM Tracking",
      "Competitor Research",
      "Bi-Weekly Performance Reports",
    ],
    buttonText: "Activate Engine",
    highlight: true,
    waMessage:
      "Hi Sadaf, I want the V-4 Growth Intelligence Plan ($599/month).",
  },
  {
    title: "V-4 Elite: Dominance",
    price: "699",
    badge: "For Serious Brands",
    description: "Advanced DFY Pinterest scaling system for aggressive growth.",
    features: [
      "250 High-Volume SEO Pins",
      "75 Premium Video Pins (25 sec video)",
      "Advanced Trend Hijacking",
      "Viral Content Optimization",
      "Custom Pinterest Strategy",
      "Priority DFY Support",
      "Deep Analytics Reports",
      "Dedicated Account Handling",
    ],
    buttonText: "Scale Brand",
    highlight: false,
    waMessage: "Hi Sadaf, I want the V-4 Elite Dominance Plan ($999/month).",
  },
];
