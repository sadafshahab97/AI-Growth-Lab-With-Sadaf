"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { PiPinterestLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#121212] text-white pt-16 pb-10 px-6 lg:px-10 shrink-0 ">
      <div className="w-full max-w-7xl mx-auto">
        {/* Top Segment: Interactive WhatsApp CTA Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 mb-12 border-b border-white/5 text-center md:text-left">
          <div className="text-slate-400 text-sm max-w-2xl">
            Need a high-volume custom plan, specialized AI automation, or
            agency-level enterprise solution? <br className="hidden md:block" />
            <span className="text-xs text-slate-500 block mt-1">
              Let’s engineer something tailored to your business goals.
            </span>
          </div>
          <Link
            href="https://wa.me/923473562371?text=Hi%20Sadaf,%20I'm%20interested%20in%20a%20custom%20high-volume%20automation%20plan%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-action hover:bg-action-hover text-white px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg shadow-red-500/10 flex items-center justify-center gap-2 shrink-0 hover:scale-[1.02]"
          >
            {`Let's Talk on WhatsApp`}
          </Link>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer w-fit">
              {/* Logo Container */}
              <div className="relative w-16 h-16 bg-action overflow-hidden flex items-center justify-center shadow-lg shadow-red-500/20 transition-transform group-hover:scale-105 rounded-full">
                <Image
                  src="/ai_growth_lab_logo.png"
                  alt="AI Growth Lab Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text */}
              <span className="font-bold text-xl tracking-tight text-white">
                AI Growth Lab
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              We empower small businesses with enterprise-grade web
              applications, AI integrations, and unparalleled support.
            </p>

            {/* Social Media Links (Merged from both versions) */}
            <div className="flex items-center gap-3.5 mt-6 text-slate-400">
              <Link
                href="https://www.linkedin.com/in/sadafshahab07/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] border border-white/5 rounded-full flex items-center justify-center hover:text-white hover:bg-action hover:border-transparent transition-all hover:scale-110"
              >
                <BsLinkedin className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.pinterest.com/sadafshahab97"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] border border-white/5 rounded-full flex items-center justify-center hover:text-white hover:bg-action hover:border-transparent transition-all hover:scale-110"
              >
                <PiPinterestLogo className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.twitter.com/sadafshahab97"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] border border-white/5 rounded-full flex items-center justify-center hover:text-white hover:bg-action hover:border-transparent transition-all hover:scale-110"
              >
                <BsTwitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links Column (Exactly 2 URLs) */}
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li>
                <Link
                  href="https://syncvantage-business-lead-automatio.vercel.app/"
                  target=""
                  className="hover:text-action transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-action group-hover:translate-x-1 transition-transform" />
                 Sync Vantage Business Lead Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/website-building"
                  className="hover:text-action transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-action group-hover:translate-x-1 transition-transform" />
                  Full-Stack Web Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/pinterest-automation"
                  className="hover:text-action transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-action group-hover:translate-x-1 transition-transform" />
                  Pinterest Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider text-slate-200">
              Services
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-action" /> Custom Web Design
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-action" /> AI Automation
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-action" /> E-commerce
                Solutions
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-action" /> SEO Optimization
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider text-slate-200">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 text-action shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <Link
                  href="mailto:theaigrowthlabwithsadaf@gmail.com"
                  className="break-all hover:text-white transition-colors"
                >
                  theaigrowthlabwithsadaf@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-action shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <Link
                  href="https://wa.me/923473562371"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  +92 347 3562371
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-3">
            <span>&copy; {new Date().getFullYear()} AI Growth Lab</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span>All rights reserved</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span className="text-white/20 font-medium tracking-normal normal-case">
              #SadafDeveloper
            </span>
          </div>

          <div className="flex gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <Link href="/privacy-policy" className="hover:text-action transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-action transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
