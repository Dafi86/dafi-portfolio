export const dynamic = "force-dynamic";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PortfolioTabs from "@/components/sections/PortfolioTabs";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import MobileDock from "@/components/layout/MobileDock";

/* =========================
    BASE URL
========================= */
const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_BASE_URL;

/* =========================
    GET PROJECTS
========================= */
async function getProjects() {
  try {
    const res = await fetch(`${baseUrl}/api/projects`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("FAILED PROJECT FETCH");

      return [];
    }

    return res.json();
  } catch (error) {
    console.log("PROJECT ERROR:", error);

    return [];
  }
}

/* =========================
    GET CERTIFICATES
========================= */
async function getCertificates() {
  try {
    const res = await fetch(`${baseUrl}/api/certificates`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("FAILED CERTIFICATE FETCH");

      return [];
    }

    return res.json();
  } catch (error) {
    console.log("CERTIFICATE ERROR:", error);

    return [];
  }
}

export default async function Home() {
  const projects = await getProjects();

  const certificates = await getCertificates();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B1120] text-white">
      {/* BACKGROUND */}
      <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute right-[-200px] top-[300px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl" />

      <div className="absolute bottom-[-200px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <Hero />

        <About />

        <PortfolioTabs
          projects={projects || []}
          certificates={certificates || []}
        />

        <Experience />

        <Contact />

        <Footer />

        <MobileDock />
      </div>
    </main>
  );
}
