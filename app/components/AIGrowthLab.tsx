import React from "react";
import {
  Terminal,
  Cpu,
  Share2,
  ArrowRight,
  Zap,
  ShieldCheck,
  Layers,
  Code2,
  Database,
  Bot,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function AIGrowthLab() {
  const services = [
    {
      title: "Full-Stack Web Solutions",
      description:
        "High-performance, custom web applications tailored to your business infrastructure.",
      icon: <Terminal className="w-6 h-6 text-white" />,
    },
    {
      title: "SyncVantage Automation Engine",
      description:
        "Autonomous inbound lead management and real-time cross-platform data synchronization pipelines.",
      icon: <Cpu className="w-6 h-6 text-white" />,
    },
    {
      title: "Pinterest Automation",
      description:
        "AI-powered post scheduling, SEO optimization, and workflow automation to capture organic traffic.",
      icon: <Share2 className="w-6 h-6 text-white" />,
    },
  ];

  const features = [
    {
      title: "Edge Performance",
      desc: "Sub-millisecond latency architectures built on modern framework layers.",
      icon: <Zap className="w-5 h-5 text-white" />,
    },
    {
      title: "Secure Pipelines",
      desc: "End-to-end encrypted data streams protecting vital business lead flows.",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
    },
    {
      title: "Scalable Logic",
      desc: "Cloud-native infrastructure designed to expand as your operation scales.",
      icon: <Layers className="w-5 h-5 text-white" />,
    },
  ];

  const technologies = [
    { name: "Next.js 15", icon: <Code2 className="w-4 h-4 text-zinc-400" /> },
    {
      name: "FastAPI / Python",
      icon: <Bot className="w-4 h-4 text-zinc-400" />,
    },
    {
      name: "PostgreSQL",
      icon: <Database className="w-4 h-4 text-zinc-400" />,
    },
    {
      name: "AI Agent Frameworks",
      icon: <Cpu className="w-4 h-4 text-zinc-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center relative">
        {/* Subtle Cyber Glow background effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-75 h-75 bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 bg-zinc-950 text-xs text-zinc-400 mb-6 tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          System Status: Operational
        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 uppercase leading-tight">
          B2B Business Solutions <br />
          <span className="text-zinc-500">& AI Automation</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          We architect elite B2B infrastructure, autonomous operation pipelines,
          and intelligent AI automation systems engineered to scale complex
          enterprise workflows.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="#services"
            className="w-full sm:w-auto bg-white text-black font-semibold px-8 py-3.5 text-sm hover:bg-zinc-200 transition-all text-center uppercase tracking-wider"
          >
            Explore Solutions
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto border border-zinc-800 bg-zinc-950 text-zinc-300 font-semibold px-8 py-3.5 text-sm hover:border-zinc-500 hover:text-white transition-all text-center uppercase tracking-wider flex items-center justify-center gap-2"
          >
            Initiate Pipeline <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-950/50 py-6 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mask-edges">

          <span className="text-xs uppercase tracking-widest text-zinc-600 whitespace-nowrap z-10">
            {`// INTEGRATION ECOSYSTEM:`}
          </span>


          <div className="w-full overflow-hidden">
            <div className="flex justify-center items-center gap-8 md:gap-16 animate-swing whitespace-nowrap w-max mx-auto">
              {technologies.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-all duration-300 cursor-default shrink-0 group"
                >
                  <div className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <span className="text-xs tracking-wider">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  
      <section
        id="services"
        className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20"
      >
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
            {`// OUR CAPABILITIES`}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            Architectural Offerings
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-zinc-900 bg-zinc-950/30 p-8 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group relative overflow-hidden"
            >
              <div>
                <div className="mb-6 p-2.5 w-fit border border-zinc-800 bg-zinc-950 group-hover:border-zinc-400 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight uppercase">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="mt-10 pt-4 border-t border-zinc-900 flex items-center justify-between group-hover:border-zinc-800 transition-all">
                <span className="text-xs uppercase tracking-wider text-zinc-500 group-hover:text-white transition-all">
                  Deploy System
                </span>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-all transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PERFORMANCE & ARCHITECTURE (Why Choose Us) */}
      <section className="bg-zinc-950 border-t border-zinc-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                {`// CORE METRICS`}
              </p>
              <h2 className="text-3xl font-bold tracking-tight uppercase mb-6">
                Engineered for absolute efficiency
              </h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                We remove manual bottlenecks and slow architecture layers to
                guarantee maximum execution speed for B2B automation systems and
                agentic data routing.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feat, i) => (
                <div key={i} className="border border-zinc-900 p-6 bg-black">
                  <div className="mb-4 text-zinc-400">{feat.icon}</div>
                  <h4 className="text-md font-bold uppercase mb-2 tracking-tight">
                    {feat.title}
                  </h4>
                  <p className="text-zinc-500 text-xs font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEDICATED CTA / PIPELINE REQUEST SECTION */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-28 text-center scroll-mt-20"
      >
        <div className="border border-zinc-800 bg-zinc-950/40 p-8 md:p-16 relative overflow-hidden">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
            {`// INTERFACES CLOSED TO PUBLIC`}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">
            Ready to integrate?
          </h2>
          <p className="text-zinc-400 text-sm md:text-md max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Submit your parameters to our strategic AI automation pipeline. Our
            engineering desk reviews enterprise B2B layouts within 24 standard
            operational hours.
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
            <div className="relative w-full">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="email"
                placeholder="Secure Email Address"
                className="w-full bg-black border border-zinc-800 text-zinc-200 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>
            <button className="w-full sm:w-auto bg-white text-black font-bold px-6 py-3 text-sm uppercase tracking-wider hover:bg-zinc-200 transition-all shrink-0">
              Request Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
