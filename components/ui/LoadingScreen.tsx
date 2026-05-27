"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#020617]"
        >
          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_35%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />

          {/* GLOW */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
          />

          {/* NOISE */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* CONTENT */}
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            {/* SMALL TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mb-6 flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 backdrop-blur-xl"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              <span className="text-[11px] uppercase tracking-[0.35em] text-cyan-300">
                Premium Portfolio
              </span>
            </motion.div>

            {/* NAME */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="text-center text-5xl font-black tracking-tight text-white md:text-7xl"
            >
              Ahmad Dafi
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Zidni Alfarisi
              </span>
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
                duration: 1,
              }}
              className="mt-8 max-w-2xl text-sm leading-8 text-white/45 md:text-base"
            >
              Informatics Student • Fullstack Developer • Cyber Security
              Enthusiast • Networking Engineer
            </motion.p>

            {/* TECH STACK */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
              }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "MongoDB",
                "Cyber Security",
                "Networking",
              ].map((item, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/60 backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* LOADING BAR */}
            <div className="mt-14 h-[3px] w-[260px] overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full w-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />
            </div>

            {/* LOADING TEXT */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
              }}
              className="mt-5 text-xs uppercase tracking-[0.35em] text-white/30"
            >
              Initializing Experience
            </motion.p>

            {/* DOTS */}
            <div className="mt-7 flex gap-3">
              {[1, 2, 3].map((dot) => (
                <motion.div
                  key={dot}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: dot * 0.2,
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-cyan-400"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
