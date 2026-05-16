"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const tiers = [
  {
    title: "V-4 Starter: Presence",
    price: "299",
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
    waMessage:
      "Hi Sadaf, I'm interested in the V-4 Starter Plan ($299/month).",
  },

  {
    title: "V-4 Growth: Intelligence",
    price: "599",
    badge: "Most Popular",
    description:
      "Ideal for scaling brands that want traffic + consistency.",
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
    price: "999",
    badge: "For Serious Brands",
    description:
      "Advanced DFY Pinterest scaling system for aggressive growth.",
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
    waMessage:
      "Hi Sadaf, I want the V-4 Elite Dominance Plan ($999/month).",
  },
];

const ServiceTiers = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-5 text-white leading-tight">
          Choose Your{" "}
          <span className="text-ruby-red">Pinterest Growth System</span>
        </h2>

        <p className="text-pink-mist/70 text-lg max-w-3xl mx-auto leading-relaxed">
          Strategic Pinterest growth powered by AI-assisted workflows,
          SEO optimization, and high-converting visual content.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-3xl overflow-hidden backdrop-blur-xl p-8 flex flex-col border transition-all duration-300 ${
              tier.highlight
                ? "border-ruby-red bg-white/[0.04] shadow-[0_0_40px_rgba(255,0,76,0.15)] md:-translate-y-3"
                : "border-white/10 bg-white/[0.02] hover:border-white/20"
            }`}
          >
            {/* BADGE */}
            <div className="mb-6">
              <span
                className={`inline-block px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.18em] font-semibold ${
                  tier.highlight
                    ? "bg-ruby-red text-white"
                    : "bg-white/10 text-white/70"
                }`}
              >
                {tier.badge}
              </span>
            </div>

            {/* TITLE */}
            <h3
              className={`text-2xl font-bold mb-3 ${
                tier.highlight ? "text-white" : "text-white/90"
              }`}
            >
              {tier.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-pink-mist/60 leading-relaxed mb-8">
              {tier.description}
            </p>

            {/* PRICE */}
            <div className="mb-8 flex items-end gap-1">
              <span className="text-5xl font-black text-white">
                ${tier.price}
              </span>

              <span className="text-white/50 text-sm mb-1">
                /month
              </span>
            </div>

            {/* FEATURES */}
            <ul className="space-y-4 mb-10 flex-grow">
              {tier.features.map((feature, fIndex) => (
                <li
                  key={fIndex}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-ruby-red shrink-0 mt-[1px]" />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href={`https://wa.me/923402195735?text=${encodeURIComponent(
                tier.waMessage,
              )}`}
              target="_blank"
              className={`w-full py-4 rounded-full text-center uppercase tracking-[0.18em] text-sm font-semibold transition-all duration-300 ${
                tier.highlight
                  ? "bg-ruby-red text-white hover:opacity-90 shadow-[0_0_25px_rgba(255,0,76,0.25)]"
                  : "border border-white/15 text-white hover:bg-white/5"
              }`}
            >
              {tier.buttonText}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceTiers;