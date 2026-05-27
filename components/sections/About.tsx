"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const skills = [
  {
    name: "Frontend Engineering",
    value: "94%",
    width: "94%",
  },

  {
    name: "UI/UX & Digital Product Design",
    value: "90%",
    width: "90%",
  },

  {
    name: "Cyber Security & Networking",
    value: "84%",
    width: "84%",
  },

  {
    name: "Leadership & Team Management",
    value: "96%",
    width: "96%",
  },
];

const interests = [
  "Next.js Ecosystem",
  "Modern Frontend Architecture",
  "Cyber Security",
  "Computer Networking",
  "AI Productivity Tools",
  "UI/UX Research",
  "Creative Digital Branding",
  "Fullstack Web Development",
  "Technology Leadership",
  "Interactive Experience Design",
];

export default function About() {
  const profileImage =
    "https://res.cloudinary.com/dye7vauxw/image/upload/v1779786658/liq7ljyf83zczke6nmsf.png";

  return (
    <Reveal>
      <section
        id="about"
        className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_35%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_35%)]" />

        {/* GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mb-20 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
              About Me
            </p>

            <h2 className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
              Creative Technology Builder
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-white/50 md:text-base">
              Menggabungkan teknologi modern, desain interaktif, networking, dan
              cyber security untuk membangun pengalaman digital yang elegan,
              powerful, dan profesional.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
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
              className="rounded-[2rem] border border-white/10 bg-[#0f172acc] p-6 shadow-[0_10px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-8"
            >
              {/* PROFILE */}
              <div className="flex items-start gap-5">
                {/* PHOTO */}
                <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 shadow-[0_0_40px_rgba(0,255,255,0.15)]">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Ahmad Dafi"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-white/40">
                      No Image
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent" />
                </div>

                {/* INFO */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                    Ahmad Dafi Zidni Alfarisi
                  </h3>

                  <p className="mt-2 text-sm text-cyan-400 md:text-base">
                    Informatics Engineering Student
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs text-cyan-300">
                      Next.js Developer
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60">
                      Networking Engineer
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60">
                      UI/UX Designer
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60">
                      AI Productivity User
                    </span>
                  </div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-10 space-y-6">
                <p className="leading-8 text-white/60">
                  Saya merupakan mahasiswa Teknik Informatika Universitas
                  Trunojoyo Madura yang berasal dari Lamongan dan memiliki fokus
                  pada pengembangan website modern, frontend engineering,
                  networking, serta cyber security.
                </p>

                <p className="leading-8 text-white/60">
                  Berpengalaman membangun tampilan digital yang modern,
                  responsif, dan interaktif menggunakan teknologi seperti
                  Next.js, TypeScript, Tailwind CSS, serta integrasi backend dan
                  database modern.
                </p>

                <p className="leading-8 text-white/60">
                  Selain aktif di bidang teknologi, saya juga memiliki
                  pengalaman leadership dan organisasi sebagai Wakil Ketua Umum
                  UKM Pencak Silat Pagar Nusa UTM yang memperkuat kemampuan
                  komunikasi, teamwork, dan project management.
                </p>
              </div>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-cyan-400/20">
                  <h4 className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
                    10+
                  </h4>

                  <p className="mt-2 text-sm text-white/50">Premium Projects</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-cyan-400/20">
                  <h4 className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
                    5+
                  </h4>

                  <p className="mt-2 text-sm text-white/50">
                    Leadership Experiences
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="space-y-8"
            >
              {/* SKILLS */}
              <div className="rounded-[2rem] border border-white/10 bg-[#0f172acc] p-6 shadow-[0_10px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Professional Expertise</h3>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs text-cyan-300">
                    Advanced Skills
                  </span>
                </div>

                <div className="space-y-7">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="mb-3 flex items-center justify-between text-sm">
                        <span className="text-white/80">{skill.name}</span>

                        <span className="font-medium text-cyan-400">
                          {skill.value}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: skill.width,
                          }}
                          transition={{
                            duration: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* INTEREST */}
              <div className="rounded-[2rem] border border-white/10 bg-[#0f172acc] p-6 shadow-[0_10px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Tech Stack & Interests</h3>

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/50">
                    Innovation
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {interests.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
