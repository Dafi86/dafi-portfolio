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

export default function PortfolioTabs({ projects, certificates }: any) {
  const [activeTab, setActiveTab] = useState("projects");

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

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

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#020617] px-4 py-20 md:px-6"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_35%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]" />

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
          {/* PROJECTS */}
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {projects
                ?.filter(
                  (project: any) =>
                    project?.title && project?.description && project?.image,
                )
                .map((project: any, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                    }}
                    className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={project.image || "/no-image.png"}
                        alt={project.title}
                        className="h-[220px] w-full object-cover transition duration-700 hover:scale-105"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/60">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies?.map(
                          (tech: string, i: number) => (
                            <span
                              key={i}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                            >
                              {tech}
                            </span>
                          ),
                        )}
                      </div>

                      <div className="mt-6 flex gap-3">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
                        >
                          Open Project
                        </button>

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-[48px] w-[48px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {certificates
                ?.filter(
                  (certificate: any) =>
                    certificate?.title && certificate?.image,
                )
                .map((certificate: any, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedCertificate(certificate)}
                    className="cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
                  >
                    <img
                      src={certificate.image || "/no-image.png"}
                      alt={certificate.title}
                      className="h-[240px] w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="p-5">
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

          {/* TECH */}
          {activeTab === "tech" && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6"
            >
              {techs.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 text-center"
                >
                  <div className="mb-4 flex justify-center text-4xl text-cyan-400">
                    {tech.icon}
                  </div>

                  <h3 className="text-sm text-white">{tech.name}</h3>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-3 py-6 backdrop-blur-md"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 50,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-[#07111F] shadow-[0_20px_100px_rgba(0,0,0,0.7)]"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:bg-red-500"
              >
                <FaTimes />
              </button>

              {/* IMAGE */}
              <div className="relative bg-black">
                <Zoom>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="
                h-auto
                max-h-[220px]
                w-full
                object-cover

                sm:max-h-[320px]
                md:max-h-[420px]
              "
                  />
                </Zoom>

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="max-h-[45vh] overflow-y-auto p-5 md:p-8">
                <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-cyan-300">
                  Featured Project
                </div>

                <h2 className="text-2xl font-bold text-white md:text-4xl">
                  {selectedProject.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/60 md:text-base md:leading-8">
                  {selectedProject.description}
                </p>

                {/* TECH */}
                <div className="mt-6 flex flex-wrap gap-2">
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

                {/* BUTTONS */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03]"
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
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-3 py-6 backdrop-blur-md"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 50,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-[#07111F] shadow-[0_20px_100px_rgba(0,0,0,0.7)]"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:bg-red-500"
              >
                <FaTimes />
              </button>

              <div className="p-4 md:p-6">
                {/* IMAGE */}
                <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black">
                  <Zoom>
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className="
                  h-auto
                  max-h-[260px]
                  w-full
                  object-contain

                  sm:max-h-[420px]
                  md:max-h-[650px]
                "
                    />
                  </Zoom>
                </div>

                {/* INFO */}
                <div className="mt-6">
                  <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-cyan-300">
                    Certificate
                  </div>

                  <h2 className="text-2xl font-bold text-white md:text-3xl">
                    {selectedCertificate.title}
                  </h2>

                  <p className="mt-3 text-sm text-white/60 md:text-base">
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
