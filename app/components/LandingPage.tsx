"use client";
import dynamic from "next/dynamic";
import HeroSection from "./HeroSection";
import ServiceTiers from "./ServiceTiers";
import ProcessSection from "./ProcessSection";
import FinalConversion from "./FinalConversion";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import CustomSolution from "./CustomSolution";
import FloatingButton from "./FloatingButton";

const ProofSection = dynamic(() => import("./ProofSection"), {
  ssr: false,
  loading: () => <div className="h=-100 bg-black" />, // Loading state
});

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cinematic-black text-white relative  overflow-x-hidden">
      {/* Background Grid Overlay */}
      <div className="fixed inset-0 bg-cyber-grid z-0 opacity-40 pointer-events-none" />

      {/* Content Wrapper - ensures content stays above grid */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* The Proof Section (Now with No-SSR fix) */}
        <ProofSection />

        {/* Service Tiers */}
        <ServiceTiers />

        {/* The Process Section */}
        <ProcessSection />

        {/* Custom Solution*/}
        <CustomSolution />

        {/* FAQ*/}
        <FAQ />

        {/* Testimonials*/}
        <Testimonials />

        {/* Final Conversion */}
        <FinalConversion />
      </main>

      {/* UI Elements - Always top layer */}
      <FloatingButton />
    </div>
  );
}
