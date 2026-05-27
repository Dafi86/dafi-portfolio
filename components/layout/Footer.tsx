"use client";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
  FaCode,
  FaShieldAlt,
  FaServer,
  FaBrain,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-4 py-16 md:px-6">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* RADIAL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_55%)]" />

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* TOP */}
        <div className="flex flex-col items-center text-center">
          {/* STATUS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2"
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Open For Collaboration
            </span>
          </motion.div>

          {/* NAME */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Ahmad Dafi
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Zidni Alfarisi
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="mt-8 max-w-3xl leading-8 text-white/55"
          >
            Informatics Engineering student focused on modern web engineering,
            UI/UX systems, cybersecurity, AI-powered workflow, and digital
            experiences with premium visual aesthetics.
          </motion.p>

          {/* BADGES */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <FaCode />
              Fullstack Web
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
              <FaShieldAlt />
              Cyber Security
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
              <FaServer />
              Network Engineer
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
              <FaBrain />
              AI Workflow
            </div>
          </motion.div>

          {/* LOCATION */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{
              once: true,
            }}
            className="mt-8 text-sm uppercase tracking-[0.3em] text-white/25"
          >
            Lamongan • East Java • Indonesia
          </motion.div>

          {/* QUOTE */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="mt-10 max-w-2xl italic text-white/30"
          >
            “Designing modern digital experiences through creativity,
            technology, and innovation.”
          </motion.p>
        </div>

        {/* LINE */}
        <div className="mx-auto my-16 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* SOCIAL */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="https://www.instagram.com/dappiii_99x?igsh=MWlpMmdycW9qcHB1Zw=="
            target="_blank"
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-xl text-white/60 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-pink-400"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/6285704731040"
            target="_blank"
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-xl text-white/60 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:bg-green-500/10 hover:text-green-400"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://github.com/Dafi86"
            target="_blank"
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-xl text-white/60 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ahmad-dafi-zidni-alfarisi-0756723a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-xl text-white/60 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* CONTACT INFO */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-white/40">
            240411100027@student.trunojoyo.ac.id
          </p>

          <p className="text-sm text-white/30">
            Available for freelance, collaboration, and creative digital
            projects.
          </p>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          {/* COPYRIGHT */}
          <div className="text-center md:text-left">
            <p className="text-sm text-white/35">
              © 2026 Ahmad Dafi Zidni Alfarisi. All rights reserved.
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/20">
              Crafted with Next.js • Tailwind CSS • TypeScript
            </p>
          </div>

          {/* BACK TO TOP */}
          <motion.a
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="#"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/60 backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            Back to Top
            <FaArrowUp className="transition duration-300 group-hover:-translate-y-1" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
