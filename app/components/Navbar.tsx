"use client";
import {
  Menu,
  X,
  ChevronDown,
  Laptop,
  Pin,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Tracks current page automatically

  // Proposal Modal States
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [requirement, setRequirement] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      name: "Full-Stack Web Solutions",
      description:
        "High-performance, custom web applications tailored to your business.",
      href: "/website-building",
      icon: <Laptop className="w-5 h-5 text-action" />,
    },
    {
      name: "Pinterest Automation",
      description:
        "AI-powered post scheduling, SEO optimization, and workflow automation.",
      href: "/",
      icon: <Pin className="w-5 h-5 text-action" />,
    },
  ];

  const handleProposalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          businessName,
          requirement,
          pageSource: pathname || "Home Page",
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          closeProposalModal();
        }, 2000);
      }
    } catch (err) {
      console.error("Proposal system failure:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeProposalModal = () => {
    setIsProposalOpen(false);
    setName("");
    setEmail("");
    setBusinessName("");
    setRequirement("");
    setSubmitSuccess(false);
    setEmailError(false);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full h-20 flex items-center transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#1a1a1a]/90 backdrop-blur-md border-white/10 shadow-xl"
            : "bg-[#1a1a1a] border-transparent"
        }`}
      >
        <div className="w-full px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-16 h-16 bg-[#121212] border border-white/10 rounded-full flex items-center justify-center overflow-hidden group-hover:border-action transition-all duration-300 relative">
                <Image
                  src="/ai_growth_lab_logo.png"
                  alt="AI Growth Lab Logo"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <span className="font-bold text-xl tracking-tight text-white uppercase group-hover:text-slate-200 transition-colors">
                AI Growth <span className="text-action">Lab</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {/* Services Dropdown */}
              <div
                className="relative p-2 cursor-pointer group"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-1">
                  Services
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180 text-action" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-[#121212] border border-white/10 rounded-2xl p-4 shadow-2xl z-50 backdrop-blur-xl"
                    >
                      <div className="space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group/item"
                          >
                            <div className="p-2 bg-[#1a1a1a] rounded-lg border border-white/5 group-hover/item:border-action/30 group-hover/item:bg-action/10 transition-colors">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-white group-hover/item:text-action transition-colors">
                                {service.name}
                              </h4>
                              <p className="text-xs text-slate-500 mt-1 line-clamp-2 font-medium">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Get Proposal Button Desktop */}
              <button
                onClick={() => setIsProposalOpen(true)}
                className="bg-action hover:bg-action-hover text-white px-6 py-3 rounded-xl text-xs font-black shadow-lg shadow-red-500/20 transition-all uppercase tracking-widest cursor-pointer"
              >
                Get Free Proposal
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-[#1a1a1a] border-b border-white/10 px-6 py-8 flex flex-col gap-5 shadow-2xl md:hidden z-50 overflow-y-auto max-h-[calc(100vh-5rem)]"
            >
              <div className="space-y-2">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between text-sm font-bold text-slate-300 uppercase tracking-widest hover:text-white py-2"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180 text-action" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 border-l border-white/10 space-y-3"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="flex items-center gap-3 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                        >
                          {service.icon}
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Get Proposal Button Mobile */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsProposalOpen(true);
                }}
                className="bg-action text-white py-4 rounded-xl text-center text-xs font-black uppercase tracking-widest mt-2 cursor-pointer"
              >
                Get Free Proposal
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* GLOBAL PROPOSAL MODAL POPUP */}
      <AnimatePresence>
        {isProposalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={!isSubmitting ? closeProposalModal : undefined}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white my-8 max-h-[90vh] overflow-y-auto"
            >
              {!isSubmitting && (
                <button
                  onClick={closeProposalModal}
                  className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {submitSuccess ? (
                <div className="text-center py-12 flex flex-col items-center justify-center">
                  <CheckCircle className="w-16 h-16 text-action animate-bounce mb-4" />
                  <h3 className="text-xl font-bold">
                    Proposal Request Dispatched!
                  </h3>
                  <p className="text-sm text-slate-400 mt-2">
                    Our technical strategists will review your project
                    parameters shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleProposalSubmit}>
                  <div className="mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-action">
                      Growth Request Pipeline
                    </span>
                    <h3 className="text-xl font-bold mt-1">
                      Request Free Strategic Proposal
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Provide framework fields to receive comprehensive
                      architecture layouts.
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          disabled={isSubmitting}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-action/50 transition-colors"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Email Address *
                          </label>
                          {emailError && (
                            <span className="text-[10px] text-red-500">
                              Invalid Email
                            </span>
                          )}
                        </div>
                        <input
                          type="email"
                          required
                          disabled={isSubmitting}
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailError) setEmailError(false);
                          }}
                          placeholder="name@company.com"
                          className={`w-full bg-white/3 border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors ${
                            emailError
                              ? "border-red-500"
                              : "border-white/10 focus:border-action/50"
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Business Name / Brand (Optional)
                      </label>
                      <input
                        type="text"
                        disabled={isSubmitting}
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Luxury On Budget"
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-action/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Project Requirements / Core Objectives *
                      </label>
                      <textarea
                        required
                        rows={4}
                        disabled={isSubmitting}
                        value={requirement}
                        onChange={(e) => setRequirement(e.target.value)}
                        placeholder="Tell us about your brand, target metrics, or automation scale objectives..."
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-action/50 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-action hover:bg-action-hover text-white py-3.5 rounded-xl text-center uppercase tracking-wider text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />{" "}
                        Transmitting Pipeline...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" /> Submit Proposal Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
