"use client";

import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { FaDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const navItems = [
  {
    name: "About",
    href: "#about",
  },

  {
    name: "Portfolio",
    href: "#portfolio",
  },

  {
    name: "Experience",
    href: "#experience",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  const [scrollProgress, setScrollProgress] = useState(0);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      /* NAVBAR BG */
      setScrolled(window.scrollY > 30);

      /* ACTIVE SECTION */
      const sections = navItems.map((item) =>
        document.querySelector(item.href),
      );

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(`#${section.id}`);
          }
        }
      });

      /* SCROLL PROGRESS */
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* SCROLL PROGRESS */}
      <div
        className="fixed left-0 top-0 z-[9999] h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAVBAR */}
      <header className="navbar-wrapper fixed top-0 z-[9999] w-full px-3 py-4 md:px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className={`glass-navbar navbar-container mx-auto flex max-w-7xl items-center justify-between rounded-[2rem] px-4 py-3 transition-all duration-500 md:px-6 ${
            scrolled
              ? "border-cyan-400/20 bg-[#020617]/80 shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
              : "border-white/10 bg-[#020617]/55"
          }`}
        >
          {/* LEFT */}
          <a href="#" className="flex items-center gap-4">
            {/* LOGO */}
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/10" />

              <span className="relative text-xl font-bold text-cyan-300">
                D
              </span>
            </div>

            {/* TEXT */}
            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold tracking-tight text-white">
                Ahmad Dafi Zidni Alfarisi
              </h1>

              <p className="mt-1 text-[11px] uppercase tracking-[0.35em] text-white/30">
                Informatics Engineering
              </p>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-white/55 hover:bg-white/5 hover:text-white"
                }`}
              >
                {activeSection === item.href && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-full border border-cyan-400/20 bg-cyan-400/10"
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* STATUS */}
            <div className="flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-3">
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

              <span className="text-sm text-emerald-300">Available</span>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Dafi86"
                target="_blank"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/50 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/dappiii_99x"
                target="_blank"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/50 transition duration-300 hover:border-pink-400/30 hover:text-pink-400"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/ahmad-dafi-zidni-alfarisi-0756723a5"
                target="_blank"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/50 transition duration-300 hover:border-blue-400/30 hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* CV */}
            <a
              href="/cv.pdf"
              download
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-medium text-black transition duration-300 hover:scale-105"
            >
              <FaDownload className="transition duration-300 group-hover:-translate-y-0.5" />
              Download CV
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition duration-300 hover:bg-white/10 lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="glass-navbar mx-auto mt-4 max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#020617]/90 p-6 lg:hidden"
            >
              {/* MENU */}
              <nav className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl px-5 py-4 text-sm font-medium transition duration-300 ${
                      activeSection === item.href
                        ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* SOCIAL */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://github.com/Dafi86"
                  target="_blank"
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/60"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.instagram.com/dappiii_99x"
                  target="_blank"
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/60"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/in/ahmad-dafi-zidni-alfarisi-0756723a5"
                  target="_blank"
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/60"
                >
                  <FaLinkedin />
                </a>
              </div>

              {/* CV */}
              <a href="../public/cv.pdf" download>
                <FaDownload className="transition duration-300 group-hover:translate-y-[2px]" />
                Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
