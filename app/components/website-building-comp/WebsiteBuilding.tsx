"use client";
import React from "react";
import { motion } from "motion/react";
import {
  Search,
  Headset,
  CheckCircle,
  Layout,
  ArrowRight,
  Zap,
  Sparkles,
} from "lucide-react";
import PricingSection, { FadeIn } from "./PricingPackages";
import ContactSection from "./ContactSection";

export default function WebsiteBuilding() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]  text-white antialiased selection:bg-action selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-linear-to-br from-[#1a1a1a] to-[#121212] border-b border-white/10 flex items-center shrink-0">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]"></div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-action rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-20 w-120 h-120 bg-red-500 rounded-full blur-3xl pointer-events-none"
        />

        <div className="w-full px-6 lg:px-10 text-left relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="max-w-3xl"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 20 },
                },
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
            >
              Give Your Business the <br className="hidden md:block" />
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-transparent bg-clip-text bg-linear-to-r from-action via-red-500 to-red-400 bg-size-[200%_auto]"
              >
                AI Growth
              </motion.span>{" "}
              It Deserves.
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 20 },
                },
              }}
              className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl"
            >
              We leverage AI and modern web technologies to build fast,
              easily-managed platforms that turn visitors into loyal customers.
              Ready to grow?
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 20 },
                },
              }}
              className="flex flex-col md:flex-row items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="group w-full md:w-auto bg-[#121212] text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg hover:shadow-xl hover:bg-opacity-90 flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                Get My Free Proposal{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#process"
                className="w-full md:w-auto bg-[#1a1a1a] border-2 border-white/10 hover:border-white/20 hover:bg-[#121212] hover:text-white text-slate-300 px-8 py-4 rounded-md font-bold transition-all flex items-center justify-center uppercase tracking-wide"
              >
                See Our Process
              </motion.a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: 0.8, duration: 1 },
                },
              }}
              className="mt-12 flex flex-wrap items-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-action" /> No Complex
                Jargon
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-action" /> SEO-Optimized
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-action" /> AI-Powered
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="why-us"
        className="px-6 lg:px-10 py-20 lg:py-32 bg-[#121212] border-b border-white/10 shrink-0 relative overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-red-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1">
              <FadeIn>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-action mb-4">
                  About Us
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  We Bridge the Gap Between Technology & Growth
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Most small businesses struggle with complicated tech and
                  outdated websites that fail to convert visitors into
                  customers. We believe that professional, AI-powered web
                  solutions {`shouldn't be`} reserved only for enterprises.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "AI-Driven Insights & Workflows",
                    "Performance First Architecture",
                    "Mobile-Centric Responsive Designs",
                    "Ongoing Technical Partnerships",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-action shrink-0 shadow-sm">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-slate-200 font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#121212] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:bg-[#222] uppercase tracking-wide text-sm mt-4 group"
                >
                  Work With Us{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </FadeIn>
            </div>

            <div className="flex-1 w-full relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                <FadeIn delay={0.2} className="mt-0 sm:mt-12">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-[#1a1a1a] p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white/10 flex flex-col items-center text-center h-full"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-action flex items-center justify-center mb-6 shadow-inner">
                      <Search className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      SEO Dominance
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      We build with search algorithms in mind to guarantee high
                      visibility.
                    </p>
                  </motion.div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-[#1a1a1a] p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white/10 flex flex-col items-center text-center h-full"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-action flex items-center justify-center mb-6 shadow-inner">
                      <Layout className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      Stunning UI/UX
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Intuitive interfaces that capture attention and drive
                      conversions.
                    </p>
                  </motion.div>
                </FadeIn>
                <FadeIn delay={0.4} className="mt-0 sm:-mt-12">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-[#1a1a1a] p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white/10 flex flex-col items-center text-center h-full"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-action flex items-center justify-center mb-6 shadow-inner">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      Lightning Fast
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Optimized performance that drastically reduces bounce
                      rates.
                    </p>
                  </motion.div>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-[#1a1a1a] p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white/10 flex flex-col items-center text-center h-full"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-action flex items-center justify-center mb-6 shadow-inner">
                      <Headset className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      24/7 Support
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Dedicated maintenance so you never have to worry about
                      tech.
                    </p>
                  </motion.div>
                </FadeIn>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-linear-to-tr from-sky-200/40 to-indigo-200/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-20 lg:py-32 bg-[#121212] relative overflow-hidden shrink-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[48px_48px]"></div>

        {/* Animated background glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-10 h-10 bg-action/20 rounded-full blur-[100px] pointer-events-none"
        />

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-action mb-4">
                Our Proven Process
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How We Bring Your Vision To Life
              </h2>
              <p className="text-lg text-slate-300">
                A streamlined, transparent framework designed to launch
                perfectly optimized websites in record time.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative mt-16">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-10 left-20 right-20 h-0.5 bg-linear-to-r from-white/10 via-action/50 to-white/10 shadow-[0_0_15px_rgba(230,0,35,0.5)]"></div>

            {[
              {
                num: "01",
                title: "Discovery",
                desc: "We deep-dive into your brand, target audience, and business goals to formulate a winning digital roadmap.",
                icon: <Search className="w-6 h-6" />,
              },
              {
                num: "02",
                title: "Development",
                desc: "Our team crafts modern UI/UX designs and builds scalable, SEO-friendly architectures using cutting-edge tech.",
                icon: <Layout className="w-6 h-6" />,
              },
              {
                num: "03",
                title: "Launch",
                desc: "We rigorously test, deploy your app, and provide ongoing analytics and support to ensure continuous scaling.",
                icon: <Sparkles className="w-6 h-6" />,
              },
            ].map((step, i) => (
              <FadeIn
                key={i}
                delay={0.2 + i * 0.1}
                className="relative mt-8 md:mt-0"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-[#1a1a1a]/5 backdrop-blur-sm border border-white/10 p-8 pt-12 rounded-3xl h-full flex flex-col group relative text-center hover:bg-[#1a1a1a]/10 transition-colors duration-300 shadow-xl shadow-black/50"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#1a1a1a]/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150 pointer-events-none"></div>
                  </div>

                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#121212] border-4 border-white/10 flex items-center justify-center text-action z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-action/50 group-hover:shadow-[0_0_30px_rgba(230,0,35,0.4)] transition-all duration-300 cursor-pointer bg-linear-to-br from-[#121212] to-[#1a1a1a] group-hover:-translate-y-2">
                    <span className="absolute -top-2 -right-2 text-[10px] font-black text-white/40 bg-[#222] px-2 py-1 rounded-full">
                      {step.num}
                    </span>
                    {step.icon}
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-4 mt-6 relative z-10">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed relative z-10">
                    {step.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <PricingSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
