"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Zoom from "react-medium-image-zoom";

import "react-medium-image-zoom/dist/styles.css";

import {
  FaCode,
  FaCertificate,
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiCanva,
  SiReact,
  SiJavascript,
  SiPython,
  SiPhp,
  SiLinux,
} from "react-icons/si";

import { MdSecurity, MdRouter, MdVideoSettings } from "react-icons/md";

const tabs = [
  {
    id: "projects",
    label: "Projects",
    icon: <FaCode />,
  },

  {
    id: "certificates",
    label: "Certificates",
    icon: <FaCertificate />,
  },

  {
    id: "tech",
    label: "Tech Stack",
    icon: <SiReact />,
  },
];

const techs = [
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },

  {
    name: "React",
    icon: <SiReact />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },

  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },

  {
    name: "Python",
    icon: <SiPython />,
  },

  {
    name: "PHP",
    icon: <SiPhp />,
  },

  {
    name: "Figma",
    icon: <SiFigma />,
  },

  {
    name: "Canva",
    icon: <SiCanva />,
  },

  {
    name: "Video Editing",
    icon: <MdVideoSettings />,
  },

  {
    name: "Linux",
    icon: <SiLinux />,
  },

  {
    name: "Cyber Security",
    icon: <MdSecurity />,
  },

  {
    name: "Networking",
    icon: <MdRouter />,
  },
];

export default function PortfolioTabs({ projects, certificates }: any) {
  const [activeTab, setActiveTab] = useState("projects");

  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#020617] px-4 py-24 md:px-6"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_35%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
            Portfolio Showcase
          </p>

          <h2 className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Explore My Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/50">
            Explore my journey through projects, certifications, and technical
            expertise.
          </p>
        </div>

        {/* TABS */}
        <div className="mx-auto mb-16 flex w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-[0_0_50px_rgba(0,255,255,0.05)] backdrop-blur-3xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-1 items-center justify-center gap-3 rounded-[1.5rem] px-5 py-4 text-sm font-medium transition duration-300 md:text-base ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10 text-lg">{tab.icon}</span>

              <span className="relative z-10 hidden md:block">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          {/* PROJECTS */}
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.4,
              }}
              className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
              {projects?.map((project: any, index: number) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                  }}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-[0_10px_50px_rgba(0,0,0,0.45)] backdrop-blur-3xl transition duration-500 hover:border-cyan-400/30"
                >
                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
                  </div>

                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[250px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#02061780] to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="relative p-7">
                    <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-cyan-300">
                      Featured Project
                    </div>

                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 leading-7 text-white/55">
                      {project.description}
                    </p>

                    {/* TECH */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies?.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 backdrop-blur-xl"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-8 flex gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group/button flex flex-1 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-4 font-medium text-black transition duration-300 hover:scale-[1.02]"
                      >
                        <span>Open Project</span>

                        <FaExternalLinkAlt className="text-sm transition duration-300 group-hover/button:translate-x-1" />
                      </button>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* CERTIFICATES */}
          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.4,
              }}
              className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
              {certificates?.map((certificate: any, index: number) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                  }}
                  onClick={() => setSelectedCertificate(certificate)}
                  className="group cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_10px_50px_rgba(0,0,0,0.45)] backdrop-blur-3xl transition duration-500 hover:border-cyan-400/30"
                >
                  <div className="relative overflow-hidden rounded-[2rem]">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#02061780] to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                        Certificate
                      </div>

                      <h3 className="text-xl font-semibold text-white">
                        {certificate.title}
                      </h3>

                      <p className="mt-2 text-sm text-white/60">
                        {certificate.issuer}
                      </p>

                      <p className="mt-1 text-xs text-cyan-400">
                        {certificate.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* TECH STACK */}
          {activeTab === "tech" && (
            <motion.div
              key="tech"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.4,
              }}
              className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
            >
              {techs.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur-3xl transition duration-500 hover:border-cyan-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 mb-5 text-5xl text-cyan-400 transition duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>

                  <h3 className="relative z-10 text-sm font-medium text-white">
                    {tech.name}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1120]"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition hover:bg-red-500"
              >
                <FaTimes />
              </button>

              {/* IMAGE */}
              <div className="overflow-hidden">
                <Zoom>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-h-[500px] w-full object-cover"
                  />
                </Zoom>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white">
                  {selectedProject.title}
                </h2>

                <p className="mt-5 leading-8 text-white/60">
                  {selectedProject.description}
                </p>

                {/* TECH */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {selectedProject.technologies?.map(
                    (tech: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                {/* LINKS */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 font-medium text-black transition hover:scale-[1.02]"
                    >
                      Live Demo
                      <FaExternalLinkAlt />
                    </a>
                  )}

                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                    >
                      Github
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CERTIFICATE MODAL */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1120]"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition hover:bg-red-500"
              >
                <FaTimes />
              </button>

              {/* IMAGE */}
              <div className="p-6">
                <Zoom>
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="max-h-[700px] w-full rounded-[1.5rem] object-contain"
                  />
                </Zoom>

                {/* INFO */}
                <div className="mt-6">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedCertificate.title}
                  </h2>

                  <p className="mt-3 text-white/60">
                    {selectedCertificate.issuer}
                  </p>

                  <p className="mt-1 text-cyan-400">
                    {selectedCertificate.year}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
