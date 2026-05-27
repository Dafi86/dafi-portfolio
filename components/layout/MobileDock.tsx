"use client";

import { useEffect, useState } from "react";

import { Home, User, Briefcase, FolderKanban, Mail } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#",
    icon: <Home size={18} />,
  },

  {
    name: "About",
    href: "#about",
    icon: <User size={18} />,
  },

  {
    name: "Portfolio",
    href: "#portfolio",
    icon: <FolderKanban size={18} />,
  },

  {
    name: "Experience",
    href: "#experience",
    icon: <Briefcase size={18} />,
  },

  {
    name: "Contact",
    href: "#contact",
    icon: <Mail size={18} />,
  },
];

export default function MobileDock() {
  const [active, setActive] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        item.href === "#" ? document.body : document.querySelector(item.href),
      );

      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 140 && rect.bottom >= 140) {
            setActive(navItems[index].href);
          }
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-5 left-1/2 z-[999] w-[92%] max-w-[370px] -translate-x-1/2 md:hidden">
      {/* BLUR BACKGROUND */}
      <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-[#020617cc] shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl" />

      {/* GLOW */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5" />

      {/* BORDER LIGHT */}
      <div className="absolute inset-0 rounded-[2rem] border border-cyan-400/10" />

      {/* NAVIGATION */}
      <div className="relative flex items-center justify-between px-2 py-2">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`group relative flex min-w-[62px] flex-col items-center justify-center rounded-2xl px-3 py-2.5 transition-all duration-300 ${
              active === item.href
                ? "text-cyan-400"
                : "text-white/45 hover:text-white"
            }`}
          >
            {/* ACTIVE BACKGROUND */}
            {active === item.href && (
              <>
                <div className="absolute inset-0 rounded-2xl bg-cyan-400/10" />

                <div className="absolute inset-0 rounded-2xl border border-cyan-400/20" />

                <div className="absolute -top-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
              </>
            )}

            {/* ICON */}
            <div className="relative z-10 transition duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
              {item.icon}
            </div>

            {/* LABEL */}
            <span className="relative z-10 mt-1 text-[10px] font-medium tracking-wide">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
