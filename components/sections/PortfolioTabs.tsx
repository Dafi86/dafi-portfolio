"use client";

import { useEffect, useState } from "react";

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
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "Video Editing", icon: <MdVideoSettings /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Cyber Security", icon: <MdSecurity /> },
  { name: "Networking", icon: <MdRouter /> },
];

export default function PortfolioTabs({
  projects = [],
  certificates = [],
}: any) {
  const [activeTab, setActiveTab] = useState("projects");

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  /* =========================
      LOCK BODY SCROLL
  ========================= */
  useEffect(() => {
    if (selectedProject || selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject, selectedCertificate]);

  /* =========================
      FILTER EMPTY DATA
  ========================= */
  const validProjects = projects.filter(
    (item: any) =>
      item?.title?.trim() && item?.description?.trim() && item?.image?.trim(),
  );

  const validCertificates = certificates.filter(
    (item: any) => item?.title?.trim() && item?.image?.trim(),
  );

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#020617] px-4 py-20 md:px-6"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_35%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-400 md:text-sm">
            Portfolio Showcase
          </p>

          <h2 className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-3xl font-bold text-transparent md:text-6xl">
            Explore My Work
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
            Explore my journey through projects, certifications, and technical
            expertise.
          </p>
        </div>

        {/* TABS */}
        <div className="mx-auto mb-12 flex w-full max-w-4xl rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-2 backdrop-blur-3xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-1 items-center justify-center gap-2 rounded-2xl px-3 py-3 text-xs font-medium transition md:text-base ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10 text-base md:text-lg">
                {tab.icon}
              </span>

              <span className="relative z-10 hidden sm:block">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          {/* =========================
              PROJECTS
          ========================= */}
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
              className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {validProjects.map((project: any, index: number) => (
                <motion.div
                  key={project._id || index}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-3xl"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                      Featured Project
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/60">
                      {project.description}
                    </p>

                    {/* TECHNOLOGIES */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies?.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-6 flex gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
                      >
                        Open Project
                      </button>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[48px] w-[48px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
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

          {/* =========================
              CERTIFICATES
          ========================= */}
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
              className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {validCertificates.map((certificate: any, index: number) => (
                <motion.div
                  key={certificate._id || index}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  onClick={() => setSelectedCertificate(certificate)}
                  className="group cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                  </div>

                  <div className="p-5">
                    <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                      Certificate
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {certificate.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/60">
                      {certificate.issuer}
                    </p>

                    <p className="mt-1 text-xs text-cyan-400">
                      {certificate.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* =========================
              TECH STACK
          ========================= */}
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
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6"
            >
              {techs.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="group rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-3xl transition duration-300 hover:border-cyan-400/30"
                >
                  <div className="mb-4 flex justify-center text-4xl text-cyan-400 transition duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>

                  <h3 className="text-sm text-white">{tech.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================
          PROJECT MODAL
      ========================= */}
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
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 40,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                y: 40,
              }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 260,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0B1120]"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition duration-300 hover:rotate-90 hover:bg-red-500"
              >
                <FaTimes />
              </button>

              {/* IMAGE */}
              <div className="overflow-hidden">
                <Zoom>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-h-[300px] w-full object-cover md:max-h-[450px]"
                  />
                </Zoom>
              </div>

              {/* CONTENT */}
              <div className="p-5 md:p-8">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  {selectedProject.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
                  {selectedProject.description}
                </p>

                {/* TECH */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedProject.technologies?.map(
                    (tech: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                {/* LINKS */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
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
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
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

      {/* =========================
          CERTIFICATE MODAL
      ========================= */}
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
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 40,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                y: 40,
              }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 260,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0B1120]"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition duration-300 hover:rotate-90 hover:bg-red-500"
              >
                <FaTimes />
              </button>

              <div className="p-4 md:p-6">
                <Zoom>
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="max-h-[500px] w-full rounded-[1.5rem] object-contain md:max-h-[700px]"
                  />
                </Zoom>

                <div className="mt-5">
                  <h2 className="text-xl font-bold text-white md:text-2xl">
                    {selectedCertificate.title}
                  </h2>

                  <p className="mt-2 text-sm text-white/60">
                    {selectedCertificate.issuer}
                  </p>

                  <p className="mt-1 text-sm text-cyan-400">
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
