import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | AI Growth Lab",
  description:
    "Privacy Policy and data protection guidelines for AI Growth Lab.",
};

const PrivacyPolicy = () => {
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
            <ShieldCheck className="w-8 h-8 text-action text-red-500" />
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Privacy Policy
            </h1>
          </div>
          <p className="text-sm text-slate-500">Effective Date: May 16, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-slate-400">
          <p>
            Welcome to <strong className="text-white">AI Growth Lab</strong>{" "}
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are highly
            committed to protecting your personal information and your right to
            privacy. This Privacy Policy governs the privacy practices of our
            website, applications, and custom automation services (collectively,
            &quot;Services&quot;).
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase bg-white/3 border-l-2 border-red-500 pl-3">
              1. Information We Collect
            </h2>
            <p>
              We collect personal information that you voluntarily provide to us
              when expressing interest in obtaining information about our
              products, workflows, or when starting a trial run. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-slate-200">Personal Data:</strong> Name,
                email address, contact number (including WhatsApp connection
                details), and business info.
              </li>
              <li>
                <strong className="text-slate-200">
                  Client Assets & Media:
                </strong>{" "}
                Visual assets, images, videos, target URLs, or metadata provided
                explicitly by you for automation distribution processing.
              </li>
              <li>
                <strong className="text-slate-200">Usage Data:</strong>{" "}
                Information automatically collected when navigating our
                platforms, such as IP addresses, browser specs, and system
                operational logs.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase bg-white/3 border-l-2 border-red-500 pl-3">
              2. How We Use Your Information
            </h2>
            <p>
              We process your data based on legitimate business interests, the
              fulfillment of our contract with you, and compliance with our
              legal obligations. We use the information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Operate, scale, maintain, and execute our automation engines and
                custom web applications.
              </li>
              <li>
                Facilitate continuous communication, manage trial pipelines, and
                render direct support via email and WhatsApp.
              </li>
              <li>
                Ensure system integrity, prevent fraudulent API usage, and
                safe-keep client dashboard parameters.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase bg-white/3 border-l-2 border-red-500 pl-3">
              3. Data Sharing and Protection
            </h2>
            <p>
              We respect your data privacy completely. We do not sell, rent,
              lease, or distribute your personal logs, assets, or target metrics
              to third parties. Data is shared strictly to perform active
              automation tasks or to fulfill legal mandates under applicable
              local regulations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase bg-white/3 border-l-2 border-red-500 pl-3">
              4. Security & Data Retention
            </h2>
            <p>
              We deploy standard security protocols to safeguard your
              credentials and automation assets. Your data remains on our secure
              infrastructure only for the duration necessary to satisfy the
              operations outlined in your active service package or until
              requested otherwise by the account controller.
            </p>
          </section>

          {/* Contact Box */}
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold mb-1">Have Questions?</h3>
              <p className="bg-white/3 text-slate-500">
                Our privacy team is here to help you with any queries.
              </p>
            </div>
            <Link
              href="mailto:theaigrowthlabwithsadaf@gmail.com"
              className="inline-flex items-center gap-2 bg-white/3 hover:bg-white hover:text-black text-white font-bold px-4 py-2.5 rounded-xl transition-all border border-white/10"
            >
              <Mail className="w-4 h-4" /> Email Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
