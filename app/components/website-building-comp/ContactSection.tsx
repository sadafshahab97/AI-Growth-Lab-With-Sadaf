"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, CheckCircle2 } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

export const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const ContactSection = () => {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const NOTIFICATION_EMAIL = "theaigrowthlabwithsadaf@gmail.com";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const rawData = Object.fromEntries(formData.entries());

    const fullName =
      `${rawData.first_name || ""} ${rawData.last_name || ""}`.trim();

    const payload = {
      name: fullName || "Anonymous Lead",
      email: rawData.email,
      phone: rawData.phone || "Not Provided", 
      message: rawData.message,
      source: "AI Growth Lab Website",
      custom_fields: {
        website: rawData.website || "Not Provided", 
      },
    };

    try {
      // 3. Centralized automation backend engine par direct secure hit
      const response = await fetch("http://127.0.0.1:8000/api/v1/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "sk_live_TcQTA_P111eceUchwFZRKK3frNkHmIf6RWNfILZWYgU", // Secure Server-level API Key
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Automation Sync Error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="px-6 lg:px-10 py-24 lg:py-32 bg-[#1a1a1a] flex-1 shrink-0 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[48px_48px]"></div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-action mb-4">
              Contact Us
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-slate-500">
              Get a free, no-obligation proposal tailored to your specific
              goals.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-[#1a1a1a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Left Side Info */}
            <div className="lg:w-5/12 bg-linear-to-br from-[#121212] to-[#1a1a1a] p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1a1a1a]/5 rounded-tl-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">{`Let's Talk.`}</h3>
                <p className="text-slate-300 text-base mb-10 leading-relaxed">
                  Leave your details below, and our team will get back to you
                  with a comprehensive professional proposal within 24 hours.
                </p>

                <div className="space-y-6">
                  <Link
                    href={`mailto:${NOTIFICATION_EMAIL}`}
                    className="flex items-center gap-4 text-slate-200 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 bg-red-600/20 group-hover:bg-red-600 rounded-full flex items-center justify-center shrink-0 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold tracking-wider text-slate-400">
                        Email Us
                      </p>
                      <p className="font-medium text-base">
                        {NOTIFICATION_EMAIL}
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="tel:+923473562371"
                    className="flex items-center gap-4 text-slate-200 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 bg-red-600/20 group-hover:bg-red-600 rounded-full flex items-center justify-center shrink-0 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold tracking-wider text-slate-400">
                        Call Us
                      </p>
                      <p className="font-medium text-base">+92 347 3562371</p>
                    </div>
                  </Link>
                  <Link
                    href="https://www.facebook.com/automatewithsadaf/"
                    target="_blank"
                    className="flex items-center gap-4 text-slate-200 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 bg-red-600/20 group-hover:bg-red-600 rounded-full flex items-center justify-center shrink-0 transition-colors">
                      <FaFacebook className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold tracking-wider text-slate-400">
                        Follow Us
                      </p>
                      <p className="font-medium text-base">Facebook Page</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-slate-300">
                  Trusted by over 500+ small businesses from around the world.
                </p>
              </div>
            </div>

            {/* Right Side UI Form */}
            <div className="lg:w-7/12 p-10 md:p-14 bg-[#1a1a1a]">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400">
                    Thank you. We will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-action text-sm font-bold uppercase tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-slate-200 mb-2 uppercase tracking-widest">
                        First Name
                      </label>
                      <input
                        name="first_name"
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-[#121212] text-sm rounded-xl border border-white/10 focus:border-action outline-none transition-all text-white"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-200 mb-2 uppercase tracking-widest">
                        Last Name
                      </label>
                      <input
                        name="last_name"
                        type="text"
                        className="w-full px-4 py-3 bg-[#121212] text-sm rounded-xl border border-white/10 focus:border-action outline-none transition-all text-white"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-200 mb-2 uppercase tracking-widest">
                      Business Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-[#121212] text-sm rounded-xl border border-white/10 focus:border-action outline-none transition-all text-white"
                      placeholder="john@yourbusiness.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-200 mb-2 uppercase tracking-widest">
                      Phone Number (Optional)
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 bg-[#121212] text-sm rounded-xl border border-white/10 focus:border-action outline-none transition-all text-white"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-200 mb-2 uppercase tracking-widest">
                      Website URL (Optional)
                    </label>
                    <input
                      name="website"
                      type="url"
                      className="w-full px-4 py-3 bg-[#121212] text-sm rounded-xl border border-white/10 focus:border-action outline-none transition-all text-white"
                      placeholder="https://www.yoursite.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-200 mb-2 uppercase tracking-widest">
                      How can we help? *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-[#121212] text-sm rounded-xl border border-white/10 focus:border-action outline-none transition-all resize-none text-white"
                      placeholder="Tell us briefly about your business and goals..."
                    ></textarea>
                  </div>

                  <motion.button
                    key="submit-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === "sending"}
                    type="submit"
                    className="w-full bg-linear-to-r from-action to-red-600 text-white text-sm font-bold py-4 px-6 rounded-xl transition-all shadow-lg uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending"
                      ? "Sending Request..."
                      : "Submit Request Form"}
                  </motion.button>

                  {status === "error" && (
                    <p className="text-red-500 text-xs text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
