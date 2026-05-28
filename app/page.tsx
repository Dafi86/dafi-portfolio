export const dynamic = "force-dynamic";
export const revalidate = 0;

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PortfolioTabs from "@/components/sections/PortfolioTabs";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import MobileDock from "@/components/layout/MobileDock";

async function getProjects() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      console.log("FAILED FETCH PROJECTS");

      return [];
    }

    const data = await res.json();

    console.log("PROJECTS:", data);

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.log("PROJECT ERROR:", error);

    return [];
  }
}

async function getCertificates() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/certificates`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      console.log("FAILED FETCH CERTIFICATES");

      return [];
    }

    const data = await res.json();

    console.log("CERTIFICATES:", data);

    return Array.isArray(data) ? data : [];
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

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <Hero />

        <About />

        <PortfolioTabs
          projects={Array.isArray(projects) ? projects : []}
          certificates={Array.isArray(certificates) ? certificates : []}
        />

        <Experience />

        <Contact />

        <Footer />

        <MobileDock />
      </div>
    </main>
  );
}
