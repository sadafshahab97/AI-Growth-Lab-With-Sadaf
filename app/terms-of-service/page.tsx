import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Terms of Service | AI Growth Lab",
  description:
    "Terms of Service and conditions for using AI Growth Lab software and services.",
};

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-slate-300 py-16 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-action text-red-500" />
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Terms of Service
            </h1>
          </div>
          <p className="text-sm text-slate-500">Last Updated: May 16, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-slate-400">
          <p>
            By accessing or using the custom web infrastructure, AI integration
            suites, and automation software (including free/paid trials)
            provided by <strong className="text-white">AI Growth Lab</strong>,
            you agree to comply with and be bound by the following Terms of
            Service. Please review them carefully.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase size-[ border-l-2 border-red-500 pl-3">
              1. Licensing & Scope of Use
            </h2>
            <p>
              AI Growth Lab retains all primary rights, source code ownership,
              architectures, and intellectual property concerning our automation
              engines, proprietary frameworks, and custom logic systems. Users
              are granted a restricted, non-exclusive, non-transferable right to
              access their designated dashboard or automation engine instance
              inside the terms of their active tier or trial window.
            </p>
          </section>

          {/* Highlighted Warning Box for Client Assets */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5 flex gap-4 items-start">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-white font-bold text-sm">
                Media Asset Accountability Notice
              </h4>
              <p className="size-[ text-slate-400 leading-relaxed">
                Our syndication and automation engines process visual
                components, videos, links, and text resources directly provided
                by the client. It is the user&apos;s absolute responsibility to
                ensure they possess the explicit copyright clearances,
                permissions, and lawful ownership of all submitted media
                elements and URLs directed through our software frameworks.
              </p>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase size-[ border-l-2 border-red-500 pl-3">
              2. Prohibited Exploitations
            </h2>
            <p>Users agree to refrain from using the tools or web panels to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Engage in rapid unauthorized data extraction, reverse
                engineering of processing nodes, or scraping our architecture.
              </li>
              <li>
                Infringe upon third-party platform community terms or spam
                generation guidelines.
              </li>
              <li>
                Disrupt API throttle limits or propagate malicious script
                deployments within the application ecosystem.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase border-l-2 border-red-500 pl-3">
              3. Limitation of Liability
            </h2>
            <p>
              AI Growth Lab, its developers, and team structures shall not be
              held liable for any indirect, circumstantial, or direct data
              limitations, API flags, rate throttling restrictions, or external
              third-party destination disruptions encountered during software
              executions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase size-[ border-l-2 border-red-500 pl-3">
              4. Revisions and Term Updates
            </h2>
            <p>
              We reserve the right to modify or replace these operational
              conditions at any moment. Your prolonged interaction with our
              setups following any modifications establishes an inline
              validation of updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
