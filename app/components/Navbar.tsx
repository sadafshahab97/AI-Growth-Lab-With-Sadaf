"use client";
import { Menu, X, ChevronDown, Laptop, Pin } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const navLinks = [
  //   { name: "About Us", href: "#why-us" },
  //   { name: "Process", href: "#process" },
  //   { name: "Packages", href: "#pricing" },
  //   { name: "Contact Us", href: "#contact" },
  // ];

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

  return (
    <nav
      className={`sticky top-0 z-100 w-full h-20 flex items-center transition-all duration-300 border-b ${
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
            {/* Services Dropdown Trigger */}
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

              {/* Dropdown Menu */}
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

            {/* Other Links */}
            {/* {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))} */}

            <Link
              href="#contact"
              className="bg-action hover:bg-action-hover text-white px-6 py-3 rounded-xl text-xs font-black shadow-lg shadow-red-500/20 transition-all uppercase tracking-widest"
            >
              Get Free Proposal
            </Link>
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
            {/* Mobile Services Accordion */}
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

            {/* Other Mobile Links */}
            {/* {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-300 uppercase tracking-widest hover:text-white py-2"
              >
                {link.name}
              </Link>
            ))} */}

            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-action text-white py-4 rounded-xl text-center text-xs font-black uppercase tracking-widest mt-2"
            >
              Get Free Proposal
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
