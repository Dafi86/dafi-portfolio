"use client";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";

import {
  FaGithub,
  FaArrowRight,
  FaCode,
  FaShieldAlt,
  FaServer,
} from "react-icons/fa";

import { Cpu, Layers } from "lucide-react";

// ======================================================
// TYPING TEXT
// ======================================================

const roles = [
  "AI-Powered Frontend Engineer",
  "Modern Web Developer",
  "UI/UX Designer",
  "Cyber Security Enthusiast",
  "Network & System Engineer",
];

function TypingText() {
  const [text, setText] = useState("");

  const [index, setIndex] = useState(0);

  const [subIndex, setSubIndex] = useState(0);

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(
      () => {
        setText(current.substring(0, subIndex));

        if (!deleting && subIndex < current.length) {
          setSubIndex((prev) => prev + 1);
        } else if (deleting && subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else if (subIndex === current.length) {
          setDeleting(true);

          setTimeout(() => {}, 1200);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);

          setIndex((prev) => (prev + 1) % roles.length);
        }
      },
      deleting ? 40 : 85,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <div className="mt-7 flex items-center text-2xl font-medium text-white/80 md:text-3xl">
      <span>{text}</span>

      <span className="ml-1 animate-pulse text-cyan-400">|</span>
    </div>
  );
}

// ======================================================
// ANIMATION
// ======================================================

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// ======================================================
// FLOATING CARD
// ======================================================

function FloatingCard({
  icon,
  label,
  position,
}: {
  icon: React.ReactNode;

  label: string;

  position: string;
}) {
  return (
    <motion.div
      animate={{
        y: [-4, 4, -4],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${position} hidden lg:flex items-center gap-3 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-white">{label}</p>

        <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">
          AI TOOL
        </p>
      </div>
    </motion.div>
  );
}

// ======================================================
// STATS CARD
// ======================================================

function StatsCard({
  number,
  label,
  icon,
}: {
  number: string;

  label: string;

  icon: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
          {icon}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">{number}</h3>

          <p className="text-sm text-white/40">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ======================================================
// HERO
// ======================================================

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        <motion.div
          animate={{
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[-20%] h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[140px]"
        />

        <motion.div
          animate={{
            opacity: [0.1, 0.16, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-20%] right-[-10%] h-[650px] w-[650px] rounded-full bg-blue-500/10 blur-[140px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 md:px-10 lg:px-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              <span className="text-[11px] font-semibold tracking-[0.25em] text-cyan-400">
                AVAILABLE FOR FREELANCE & COLLABORATION
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-black leading-[1] md:text-6xl lg:text-7xl"
            >
              <span className="text-white">Ahmad Dafi</span>

              <br />

              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zidni Alfarisi
              </span>
            </motion.h1>

            <TypingText />

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/55"
            >
              Informatics Engineering student from Lamongan focused on
              AI-powered web experiences, modern frontend engineering,
              networking, cybersecurity, and premium digital product design.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-4 font-semibold text-white shadow-[0_0_35px_rgba(6,182,212,0.2)]"
              >
                Explore Projects
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="https://github.com/Dafi86"
                target="_blank"
                whileHover={{
                  scale: 1.02,
                }}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-white backdrop-blur-xl"
              >
                <FaGithub />
                GitHub
              </motion.a>
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 grid gap-4 sm:grid-cols-2"
            >
              <StatsCard
                number="15+"
                label="Creative Projects"
                icon={<FaCode className="h-5 w-5" />}
              />

              <StatsCard
                number="5+"
                label="Leadership Experience"
                icon={<Layers className="h-5 w-5" />}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative flex h-[560px] w-[360px] items-center justify-center md:w-[470px]">
              {/* GLOW */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[120px]" />

              {/* MAIN CARD */}
              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="relative h-[500px] w-[320px] overflow-visible rounded-[38px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl md:w-[380px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.06] to-transparent" />

                {/* PROFILE */}
                <div className="absolute inset-0 p-6">
                  <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-white/10 bg-slate-900">
                    <img
                      src="/profile.png"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />

                    {/* ONLINE */}
                    <div className="absolute left-4 top-4 z-30 rounded-2xl border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-xl">
                      <div className="flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-cyan-400" />

                        <span className="text-[10px] tracking-wide text-white/70">
                          Dappii_
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FLOATING BADGES */}
                <FloatingCard
                  icon="🤖"
                  label="ChatGPT"
                  position="top-[38%] -left-4"
                />

                <FloatingCard
                  icon="✨"
                  label="Gemini AI"
                  position="top-[12%] -right-2"
                />

                <FloatingCard
                  icon="🧠"
                  label="Claude AI"
                  position="bottom-[28%] -left-3"
                />

                <FloatingCard
                  icon="⚡"
                  label="Blackbox AI"
                  position="-bottom-3 right-[18%]"
                />

                <FloatingCard
                  icon="🔍"
                  label="Perplexity AI"
                  position="top-[42%] -right-6"
                />

                <FloatingCard
                  icon="🚀"
                  label="Notion AI"
                  position="bottom-[12%] left-[8%]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
