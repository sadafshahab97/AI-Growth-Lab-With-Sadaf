"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Star, Sparkles, Building, Check, X, Loader2 } from "lucide-react";

export const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const PricingSection = () => {
  const WHATSAPP_NUMBER = "923473562371";

  // Modal State Control
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Open modal and store selected pricing variables
  const openModal = (planName: string, price: string) => {
    setSelectedPlan({ name: planName, price });
    setIsModalOpen(true);
  };

  // Close modal and reset state
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Send Complete Lead Details to Internal Route Handler via SMTP
    try {
      await fetch("/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planName: selectedPlan.name,
          price: selectedPlan.price,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          userMessage: formData.message,
        }),
      });
    } catch (error) {
      console.error(
        "Nodemailer failed in background, launching fallback redirect...",
        error,
      );
    }

    setIsSubmitting(false);
    closeModal();

    // 2. Redirect User directly to WhatsApp with customized context message
    const whatsappText = `Hi! My name is *${formData.name}*.\nI am interested in the *${selectedPlan.name}* package (${selectedPlan.price}).\n\n*My Email:* ${formData.email}\n*My Phone:* ${formData.phone}\n*Message:* ${formData.message || "None"}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 px-6 lg:px-10 bg-[#121212] border-b border-white/10 shrink-0 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-red-100/30 blur-3xl"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-action/10 blur-3xl"></div>
      </div>
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-action mb-4">
              Packages
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-slate-500">
              Premium quality web development for global businesses.{" "}
              <span className="font-mono text-action bg-action/10 px-2 py-1 rounded">
                Starting from $199 / PKR 50k
              </span>
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 lg:items-center relative">
          {/* Essential Plan */}
          <FadeIn delay={0.1} className="h-full">
            <motion.div
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl border border-white/10 bg-[#1a1a1a] flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 relative group z-10 hover:z-20 h-full"
            >
              <div className="w-12 h-12 rounded-full bg-[#121212] flex items-center justify-center text-slate-500 mb-6 group-hover:bg-slate-100 transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Essential
              </span>
              <h4 className="text-2xl font-bold text-white mb-3">Startups</h4>
              <ul className="text-sm text-slate-500 mb-8 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-action" /> 5 Custom Pages
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-action" /> Responsive Design
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-action" /> WhatsApp Integration
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-action" /> Basic SEO
                </li>
              </ul>
              <div className="mt-auto mb-8">
                <div className="text-4xl font-black text-white tracking-tight">
                  <span className="text-lg text-slate-400 font-bold mr-1">
                    PKR
                  </span>
                  50k
                </div>
              </div>
              <button
                onClick={() => openModal("Essential Startups", "PKR 50k")}
                className="block w-full px-4 py-4 bg-[#121212] border border-white/10 hover:border-action hover:text-action hover:bg-red-500/10 transition-all text-slate-300 text-xs font-bold text-center rounded-xl tracking-wide uppercase"
              >
                Select Essential
              </button>
            </motion.div>
          </FadeIn>

          {/* Professional Plan */}
          <FadeIn delay={0.2} className="h-full">
            <motion.div
              whileHover={{ y: -12 }}
              className="p-8 lg:p-10 rounded-3xl border-2 border-action bg-[#1a1a1a] flex flex-col relative shadow-[0_30px_60px_-15px_rgba(230,0,35,0.3)] hover:shadow-[0_40px_70px_-15px_rgba(230,0,35,0.4)] transition-all duration-300 z-20 lg:-translate-y-8 h-full"
            >
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-linear-to-r from-action to-red-600 text-white text-xs font-bold rounded-full uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-red-500/20 whitespace-nowrap">
                <Sparkles className="w-4 h-4" /> Most Popular
              </span>
              <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center text-action mb-6 shadow-inner">
                <Star className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-action uppercase tracking-widest mb-2">
                Professional
              </span>
              <h4 className="text-2xl font-bold text-white mb-3">Growth</h4>
              <ul className="text-sm text-slate-300 mb-8 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-action" /> 15 Pages + Blog
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-action" /> Full CMS Integration
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-action" /> Advanced Google SEO
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-action" /> Speed Optimization
                </li>
              </ul>
              <div className="mt-auto mb-8">
                <div className="text-4xl font-black text-white tracking-tight">
                  <span className="text-lg text-slate-400 font-bold mr-1">
                    PKR
                  </span>
                  120k
                </div>
              </div>
              <button
                onClick={() => openModal("Professional Growth", "PKR 120k")}
                className="block w-full px-4 py-4 bg-action hover:bg-action-hover text-white text-xs font-bold text-center rounded-xl shadow-lg shadow-red-500/20 transition-all tracking-wide uppercase"
              >
                Select Professional
              </button>
            </motion.div>
          </FadeIn>

          {/* Enterprise Plan */}
          <FadeIn delay={0.3} className="h-full">
            <motion.div
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl border border-white/10 bg-linear-to-b from-navy to-[#0a1128] flex flex-col text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden z-10 hover:z-20 h-full"
            >
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a]/5 flex items-center justify-center text-slate-300 mb-6 relative z-10">
                <Building className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 relative z-10">
                Enterprise
              </span>
              <h4 className="text-2xl font-bold mb-3 relative z-10">
                E-commerce
              </h4>
              <ul className="text-sm text-slate-300 mb-8 space-y-2 relative z-10">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-action" /> Unlimited Products
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-action" /> Global Payment
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-action" /> Inventory Dashboard
                </li>
              </ul>
              <div className="mt-auto mb-8 relative z-10">
                <div className="text-4xl font-black text-action tracking-tight">
                  Custom
                </div>
              </div>
              <button
                onClick={() =>
                  openModal("Enterprise E-commerce", "Custom Quote")
                }
                className="block w-full px-4 py-4 bg-[#1a1a1a]/10 hover:bg-[#1a1a1a]/20 border border-white/5 transition-all text-white text-xs font-bold text-center rounded-xl tracking-wide uppercase backdrop-blur-sm relative z-10"
              >
                Get Custom Quote
              </button>
            </motion.div>
          </FadeIn>
        </div>
      </div>
      {/* Interactive Popup Overlay Modal */}\
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            {/* Backdrop Glow Click Blur Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Main Center Form Box (Mobile Responsive Upgrades Included) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-[95%] sm:w-full max-w-md bg-[#1a1a1a] border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl z-10 max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              {/* Decorative Accent Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-action" />

              {/* Top Close Button Row */}
              <div className="flex justify-between items-start mb-5 sm:mb-6">
                <div>
                  <span className="text-[10px] font-bold text-action uppercase tracking-widest">
                    Inquiry Details
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1 wrap-break-words">
                    {selectedPlan.name}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1.5 rounded-xl bg-white/5 text-slate-400 hover:text-white transition-colors ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Handling Fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 sm:py-3 bg-[#121212] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-action transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 sm:py-3 bg-[#121212] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-action transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2.5 sm:py-3 bg-[#121212] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-action transition-colors"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Message / Custom Request
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 sm:py-3 bg-[#121212] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-action transition-colors resize-none"
                    placeholder="Tell me more about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 sm:py-4 bg-action hover:bg-action-hover text-white text-sm font-bold rounded-xl transition-all tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-red-500/10 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Securing Lead Data...
                    </>
                  ) : (
                    "Confirm & Continue to WhatsApp"
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PricingSection;
