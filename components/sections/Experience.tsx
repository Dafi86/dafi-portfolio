"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  FaUsers,
  FaBriefcase,
  FaGraduationCap,
  FaShieldAlt,
  FaMedal,
  FaUniversity,
  FaCrown,
  FaLaptopCode,
} from "react-icons/fa";

const tabs = [
  {
    id: "organization",
    label: "Organization",
    icon: <FaUsers />,
    color: "from-cyan-500/20 via-cyan-400/10 to-transparent border-cyan-400/20",
  },

  {
    id: "committee",
    label: "Committee",
    icon: <FaBriefcase />,
    color:
      "from-purple-500/20 via-fuchsia-400/10 to-transparent border-purple-400/20",
  },

  {
    id: "education",
    label: "Education",
    icon: <FaGraduationCap />,
    color:
      "from-emerald-500/20 via-green-400/10 to-transparent border-emerald-400/20",
  },
];

/* =========================================================
   ORGANIZATION
========================================================= */

const organizationData = [
  {
    year: "2026 - Present",
    title: "Vice Chairman",
    place: "UKM Pencak Silat Pagar Nusa UTM",
    description:
      "Dipercaya sebagai Wakil Ketua Umum organisasi untuk membantu mengelola koordinasi internal, pengembangan program kerja, kepemimpinan anggota, serta mendukung keberlangsungan kegiatan organisasi kampus.",
    achievement: "Leading organizational development & coordination",
    icon: <FaCrown />,
    status: "Active",
  },

  {
    year: "2026 - Present",
    title: "Kominfo Division Member",
    place: "Asrama Universitas Trunojoyo Madura",
    description:
      "Berperan dalam pengelolaan media informasi, dokumentasi digital, publikasi kegiatan asrama, serta mendukung pengembangan branding dan komunikasi digital organisasi.",
    achievement: "Managed publication & digital communication",
    icon: <FaShieldAlt />,
    status: "Active",
  },

  {
    year: "2023 - 2024",
    title: "Dormitory Chairman",
    place: "Pondok Pesantren Darut Tahfidz Al-Quran Anurain",
    description:
      "Memimpin dan mengkoordinasikan kegiatan asrama santri, membangun komunikasi antaranggota, menjaga kedisiplinan lingkungan, serta meningkatkan tanggung jawab dan kepemimpinan santri.",
    achievement: "Led dormitory management & student coordination",
    icon: <FaUsers />,
    status: "Completed",
  },

  {
    year: "2019 - 2020",
    title: "OSIS Chairman",
    place: "MTS Sunan Drajat Sugiwaras",
    description:
      "Memimpin organisasi siswa intra sekolah dalam menjalankan program kerja, mengelola kegiatan sekolah, serta menjadi penghubung komunikasi antara siswa dan pihak sekolah.",
    achievement: "Organized multiple school leadership programs",
    icon: <FaMedal />,
    status: "Completed",
  },
];

/* =========================================================
   COMMITTEE
========================================================= */

const committeeData = [
  {
    year: "2026",
    title: "Chief Executive",
    place: "Trunojoyo Cup 2026",
    description:
      "Memimpin pelaksanaan kegiatan kejuaraan Trunojoyo Cup 2026, mulai dari koordinasi panitia, pengelolaan teknis acara, hingga memastikan keberlangsungan event berjalan secara profesional dan terstruktur.",
    achievement: "Led large-scale university championship event",
    icon: <FaCrown />,
    status: "Active",
  },

  {
    year: "2025",
    title: "Chief Executive",
    place: "Dormitory Competition 2025",
    description:
      "Bertanggung jawab penuh dalam perencanaan, pengorganisasian, dan pelaksanaan kegiatan perlombaan asrama, termasuk koordinasi panitia dan pengelolaan kegiatan peserta.",
    achievement: "Successfully managed dormitory competition event",
    icon: <FaBriefcase />,
    status: "Completed",
  },

  {
    year: "2025",
    title: "Coordinator of PDD",
    place: "Trunojoyo Cup 2025",
    description:
      "Mengkoordinasikan divisi publikasi, dokumentasi, dan desain visual untuk kebutuhan media promosi, branding kegiatan, serta dokumentasi event kejuaraan kampus.",
    achievement: "Handled event branding & media publication",
    icon: <FaShieldAlt />,
    status: "Completed",
  },

  {
    year: "2024 - Present",
    title: "Various Event Committees",
    place: "Campus & Organization Activities",
    description:
      "Aktif terlibat dalam berbagai kepanitiaan kegiatan organisasi dan kampus pada bidang publikasi, dokumentasi, media kreatif, serta pengelolaan acara.",
    achievement: "Experienced in multi-event management",
    icon: <FaMedal />,
    status: "Ongoing",
  },
];

/* =========================================================
   EDUCATION
========================================================= */

const educationData = [
  {
    year: "2024 - Present",
    title: "Informatics Engineering",
    place: "Universitas Trunojoyo Madura",
    description:
      "Mahasiswa Teknik Informatika yang fokus mempelajari pengembangan website modern, software engineering, UI/UX design, networking, dan teknologi digital interaktif.",
    achievement: "Focused on modern web & software development",
    icon: <FaUniversity />,
    status: "Current",
  },

  {
    year: "2021 - 2024",
    title: "Computer & Network Engineering (TKJ)",
    place: "SMK Sunan Drajat Lamongan",
    description:
      "Mempelajari dasar jaringan komputer, administrasi sistem, troubleshooting perangkat keras, serta teknologi informasi modern. Selain itu juga mengikuti Axioo Class Program untuk meningkatkan kompetensi industri teknologi.",
    achievement: "Studied networking & Axioo industry program",
    icon: <FaLaptopCode />,
    status: "Graduated",
  },

  {
    year: "2021 - 2024",
    title: "Islamic Boarding School Student",
    place: "Pondok Pesantren Darut Tahfidz Al-Quran Anurain",
    description:
      "Mengembangkan karakter, kedisiplinan, kepemimpinan, komunikasi, serta tanggung jawab melalui lingkungan pendidikan pesantren dan tahfidz Al-Quran.",
    achievement: "Built discipline & leadership values",
    icon: <FaShieldAlt />,
    status: "Completed",
  },

  {
    year: "2018 - 2021",
    title: "Junior High School",
    place: "MTS Sunan Drajat Sugiwaras",
    description:
      "Aktif dalam organisasi sekolah dan mulai mengembangkan minat pada bidang teknologi, media digital, serta kepemimpinan siswa.",
    achievement: "Started leadership & technology journey",
    icon: <FaGraduationCap />,
    status: "Graduated",
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("organization");

  const getData = () => {
    switch (activeTab) {
      case "organization":
        return organizationData;

      case "committee":
        return committeeData;

      case "education":
        return educationData;

      default:
        return [];
    }
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#020617] px-4 py-28 md:px-6"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_35%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
            Experience Showcase
          </p>

          <h2 className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-4xl font-black text-transparent md:text-6xl">
            My Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/50">
            Perjalanan organisasi, kepanitiaan, dan pendidikan yang membentuk
            pengalaman saya dalam dunia teknologi, kreativitas, leadership,
            serta pengembangan digital modern.
          </p>

          {/* STATS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">5+</h3>

              <p className="text-sm text-white/50">Leadership Roles</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">10+</h3>

              <p className="text-sm text-white/50">Projects & Events</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white">3+</h3>

              <p className="text-sm text-white/50">Years Experience</p>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="mx-auto mb-20 flex w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 backdrop-blur-3xl">
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
                  layoutId="experienceTab"
                  className={`absolute inset-0 rounded-[1.5rem] bg-gradient-to-r ${tab.color}`}
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

        {/* TIMELINE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
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
            className="relative"
          >
            {/* LINE */}
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400/80 via-cyan-400/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-16">
              {getData().map((item, index) => (
                <motion.div
                  key={index}
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
                    delay: index * 0.1,
                  }}
                  className={`relative flex flex-col gap-6 md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* CARD */}
                  <div className="md:w-1/2">
                    <motion.div
                      whileHover={{
                        y: -10,
                        scale: 1.01,
                      }}
                      className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_10px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl transition duration-500 hover:border-cyan-400/30"
                    >
                      {/* TOP LINE */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

                      {/* GLOW */}
                      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                        <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
                      </div>

                      {/* HEADER */}
                      <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
                        <div className="flex gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-400">
                            {item.icon}
                          </div>

                          <div>
                            <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300">
                              {item.year}
                            </div>

                            <h3 className="text-2xl font-semibold text-white">
                              {item.title}
                            </h3>

                            <p className="mt-2 text-cyan-400">{item.place}</p>
                          </div>
                        </div>

                        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                          {item.status}
                        </span>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="relative z-10 leading-8 text-white/55">
                        {item.description}
                      </p>

                      {/* ACHIEVEMENT */}
                      <div className="relative z-10 mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 px-5 py-4 text-sm text-cyan-300">
                        ✨ {item.achievement}
                      </div>
                    </motion.div>
                  </div>

                  {/* DOT */}
                  <div className="absolute left-4 top-10 z-20 md:left-1/2">
                    <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-30" />

                    <div className="relative h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#020617] bg-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.9)]" />
                  </div>

                  {/* EMPTY */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
