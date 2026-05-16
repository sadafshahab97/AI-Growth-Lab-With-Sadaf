"use client";

import { useState } from "react";
import { CheckCircle2, X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Tier, tiers } from "../data";

const ServiceTiers = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);

  // Form Input States
  const [businessName, setBusinessName] = useState<string>("");
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [pinterestUrl, setPinterestUrl] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // States for Validation & Backend Loading Status
  const [emailError, setEmailError] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const openModal = (tier: Tier) => {
    setSelectedTier(tier);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedTier(null);
    setBusinessName("");
    setWebsiteUrl("");
    setPinterestUrl("");
    setEmail("");
    setPhone("");
    setEmailError(false);
    setIsSubmitting(false);
  };

  const handleSubmitPipeline = async () => {
    if (!selectedTier) return;

    // Strict Email Validation Regex Pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    setIsSubmitting(true);

    try {
      // 1. Dispatch Lead Payload directly to the api route
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tierTitle: selectedTier.title,
          tierPrice: selectedTier.price,
          businessName,
          email,
          websiteUrl,
          pinterestUrl,
          phone,
        }),
      });
    } catch (err) {
      console.error("Background routing execution error:", err);
    }

    // 2. Build structured text payload for WhatsApp client redirection
    let finalMessage = selectedTier.waMessage;
    if (businessName) finalMessage += `\n\n🔹 Business Name: ${businessName}`;
    if (email) finalMessage += `\n✉️ Email: ${email}`;
    if (websiteUrl) finalMessage += `\n🔗 Website/Store: ${websiteUrl}`;
    if (pinterestUrl) finalMessage += `\n📌 Pinterest Profile: ${pinterestUrl}`;
    if (phone) finalMessage += `\n📞 Phone/WhatsApp: ${phone}`;

    const encodedMessage = encodeURIComponent(finalMessage);
    window.open(`https://wa.me/923402195735?text=${encodedMessage}`, "_blank");

    closeModal();
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-5 text-white leading-tight">
          Choose Your{" "}
          <span className="text-ruby-red">Pinterest Growth System</span>
        </h2>
        <p className="text-pink-mist/70 text-lg max-w-3xl mx-auto leading-relaxed">
          Strategic Pinterest growth powered by AI-assisted workflows, SEO
          optimization, and high-converting visual content.
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
                ? "border-ruby-red bg-white/4shadow-[0_0_40px_rgba(255,0,76,0.15)] md:-translate-y-3"
                : "border-white/10 bg-white/2hover:border-white/20"
            }`}
          >
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

            <h3
              className={`text-2xl font-bold mb-3 ${tier.highlight ? "text-white" : "text-white/90"}`}
            >
              {tier.title}
            </h3>

            <p className="text-sm text-pink-mist/60 leading-relaxed mb-8">
              {tier.description}
            </p>

            <div className="mb-8 flex items-end gap-1">
              <span className="text-5xl font-black text-white">
                ${tier.price}
              </span>
              <span className="text-white/50 text-sm mb-1">/month</span>
            </div>

            <ul className="space-y-4 mb-10 grow">
              {tier.features.map((feature, fIndex) => (
                <li
                  key={fIndex}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-ruby-red shrink-0 mt-px" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => openModal(tier)}
              className={`w-full py-4 rounded-full text-center uppercase tracking-[0.18em] text-sm font-semibold transition-all duration-300 cursor-pointer ${
                tier.highlight
                  ? "bg-ruby-red text-white hover:opacity-90 shadow-[0_0_25px_rgba(255,0,76,0.25)]"
                  : "border border-white/15 text-white hover:bg-white/5"
              }`}
            >
              {tier.buttonText}
            </button>
          </motion.div>
        ))}
      </div>

      {/* POP-UP MODAL WINDOW */}
      <AnimatePresence>
        {isOpen && selectedTier && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Dark Overlay Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={!isSubmitting ? closeModal : undefined}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Main Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white my-8 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10"
            >
              {/* Close Button */}
              {!isSubmitting && (
                <button
                  onClick={closeModal}
                  className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {/* Info Segment */}
              <div className="mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-ruby-red">
                  Setup Active Framework
                </span>
                <h3 className="text-xl font-bold mt-1 text-white">
                  {selectedTier.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Starting price structure at ${selectedTier.price}/mo.
                </p>
              </div>

              {/* Forms / Inputs */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Luxury On Budget"
                      className="w-full bg-white/3border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-ruby-red/50 transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Email Address
                      </label>
                      {emailError && (
                        <span className="text-[10px] text-red-500 font-medium">
                          Required *
                        </span>
                      )}
                    </div>
                    <input
                      type="email"
                      disabled={isSubmitting}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError(false);
                      }}
                      placeholder="name@company.com"
                      className={`w-full bg-white/3border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors disabled:opacity-50 ${
                        emailError
                          ? "border-red-500 focus:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.1)]"
                          : "border-white/10 focus:border-ruby-red/50"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Pinterest Profile URL
                  </label>
                  <input
                    type="url"
                    disabled={isSubmitting}
                    value={pinterestUrl}
                    onChange={(e) => setPinterestUrl(e.target.value)}
                    placeholder="e.g. pinterest.com/yourprofile"
                    className="w-full bg-white/3border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-ruby-red/50 transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Website or Store URL (Optional)
                  </label>
                  <input
                    type="url"
                    disabled={isSubmitting}
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="e.g. www.luxuryonbudget.com"
                    className="w-full bg-white/3border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-ruby-red/50 transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Phone / Contact Number{" "}
                    <span className="text-[10px] text-slate-500 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    disabled={isSubmitting}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 (555) 000-0000"
                    className="w-full bg-white/3border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-ruby-red/50 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Confirm Submit CTA */}
              <button
                onClick={handleSubmitPipeline}
                disabled={isSubmitting}
                className="w-full bg-ruby-red hover:bg-opacity-90 text-white py-3.5 rounded-xl text-center uppercase tracking-wider text-xs font-bold transition-all shadow-lg shadow-red-500/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />{" "}
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" /> Proceed to WhatsApp
                  </>
                )}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceTiers;
