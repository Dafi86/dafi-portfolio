"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaShieldAlt,
  FaNetworkWired,
} from "react-icons/fa";

export default function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      username: "@dappiii_99x",
      href: "https://www.instagram.com/dappiii_99x?igsh=MWlpMmdycW9qcHB1Zw==",
      color: "hover:border-pink-400/30",
      icon: <FaInstagram className="text-3xl text-pink-400" />,
    },

    {
      name: "GitHub",
      username: "github.com/Dafi86",
      href: "https://github.com/Dafi86",
      color: "hover:border-cyan-400/30",
      icon: <FaGithub className="text-3xl text-cyan-400" />,
    },

    {
      name: "LinkedIn",
      username: "Ahmad Dafi Zidni Alfarisi",
      href: "https://www.linkedin.com/in/ahmad-dafi-zidni-alfarisi-0756723a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:border-blue-400/30",
      icon: <FaLinkedin className="text-3xl text-blue-400" />,
    },

    {
      name: "WhatsApp",
      username: "085704731040",
      href: "https://wa.me/6285704731040",
      color: "hover:border-green-400/30",
      icon: <FaWhatsapp className="text-3xl text-green-400" />,
    },
  ];

  const expertise = [
    "Full Stack Development",
    "Next.js Architecture",
    "Modern UI Engineering",
    "Computer Networking",
    "Cyber Security",
    "Database Engineering",
    "AI Productivity Tools",
    "System Design",
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020617] px-4 py-28 md:px-6"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_35%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
            Contact & Collaboration
          </p>

          <h2 className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Let’s Build Something
            <br />
            Extraordinary
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/50">
            Terbuka untuk freelance project, kolaborasi startup, pengembangan
            website modern, UI/UX engineering, networking infrastructure, hingga
            cybersecurity solutions.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_10px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
          >
            {/* GLOW */}
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2">
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                <span className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                  Available for Projects
                </span>
              </div>

              <h3 className="mt-8 text-4xl font-semibold leading-tight text-white">
                Digital Engineer with
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  Modern Vision
                </span>
              </h3>

              <p className="mt-6 max-w-2xl leading-8 text-white/55">
                Mahasiswa Teknik Informatika Universitas Trunojoyo Madura yang
                berfokus pada Full Stack Development, modern web architecture,
                networking systems, dan cybersecurity dengan pendekatan visual
                premium dan scalable system design.
              </p>

              {/* INFO */}
              <div className="mt-10 grid gap-5">
                <div className="rounded-3xl border border-white/10 bg-[#0f172acc] p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-400">
                      <FaEnvelope className="text-2xl" />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                        Email Address
                      </p>

                      <h4 className="mt-2 text-lg text-white">
                        240411100027@student.trunojoyo.ac.id
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#0f172acc] p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-400">
                      <FaWhatsapp className="text-2xl" />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                        WhatsApp
                      </p>

                      <h4 className="mt-2 text-lg text-white">
                        +62 857-0473-1040
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#0f172acc] p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-400">
                      <FaMapMarkerAlt className="text-2xl" />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                        Location
                      </p>

                      <h4 className="mt-2 text-lg text-white">
                        Lamongan, East Java, Indonesia
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* EXPERTISE */}
              <div className="mt-10">
                <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Core Expertise
                </p>

                <div className="flex flex-wrap gap-3">
                  {expertise.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="flex flex-col gap-8"
          >
            {/* SOCIAL MEDIA */}
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_10px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                Social Presence
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className={`group rounded-[2rem] border border-white/10 bg-[#0f172acc] p-6 transition duration-500 hover:-translate-y-2 ${social.color}`}
                  >
                    {social.icon}

                    <h4 className="mt-5 text-lg font-medium text-white">
                      {social.name}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      {social.username}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8 shadow-[0_10px_60px_rgba(0,255,255,0.08)] backdrop-blur-3xl">
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Professional Capability
                </p>

                <h3 className="mt-5 text-4xl font-semibold leading-tight text-white">
                  Full Stack Developer
                  <br />& Digital Infrastructure Engineer
                </h3>

                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-4 text-white/70">
                    <FaLaptopCode className="text-cyan-400" />

                    <span>Modern Web Development & Premium UI Engineering</span>
                  </div>

                  <div className="flex items-center gap-4 text-white/70">
                    <FaNetworkWired className="text-cyan-400" />

                    <span>Computer Networking & Infrastructure Management</span>
                  </div>

                  <div className="flex items-center gap-4 text-white/70">
                    <FaShieldAlt className="text-cyan-400" />

                    <span>Cyber Security Fundamentals & System Protection</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/6285704731040"
                  target="_blank"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
                >
                  Start Collaboration
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
