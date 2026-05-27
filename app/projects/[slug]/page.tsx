// import Link from "next/link";

// import Navbar from "@/components/layout/Navbar";

// import Footer from "@/components/layout/Footer";

// const projects = [
//   {
//     slug: "portfolio-website",

//     title: "Portfolio Website",

//     description:
//       "Modern cyberpunk portfolio website with premium animations and responsive design.",

//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

//     technologies: ["Next.js", "Tailwind", "Framer Motion"],

//     github: "https://github.com/",

//     live: "https://example.com",
//   },

//   {
//     slug: "network-monitoring-app",

//     title: "Network Monitoring App",

//     description:
//       "Realtime network monitoring dashboard with cybersecurity analytics.",

//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475",

//     technologies: ["React", "Node.js", "MongoDB"],

//     github: "https://github.com/",

//     live: "https://example.com",
//   },

//   {
//     slug: "cyber-security-platform",

//     title: "Cyber Security Platform",

//     description:
//       "Security dashboard for monitoring vulnerabilities and penetration testing.",

//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",

//     technologies: ["Python", "Linux", "Security"],

//     github: "https://github.com/",

//     live: "https://example.com",
//   },
// ];

// export default async function ProjectDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   const project = projects.find((item) => item.slug === slug);

//   if (!project) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-[#020617] text-white">
//         <h1 className="text-3xl font-bold">Project not found</h1>
//       </div>
//     );
//   }

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
//       {/* NAVBAR */}
//       <Navbar />

//       {/* BACKGROUND */}
//       <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

//       <div className="absolute right-[-200px] top-[250px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl" />

//       <div className="absolute bottom-[-200px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

//       {/* NOISE */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

//       {/* CONTENT */}
//       <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 md:px-6">
//         {/* TOP */}
//         <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
//           {/* BACK */}
//           <Link
//             href="/"
//             className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
//           >
//             <span className="transition duration-300 group-hover:-translate-x-1">
//               ←
//             </span>
//             Back to Home
//           </Link>

//           {/* BADGE */}
//           <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
//             Featured Project
//           </div>
//         </div>

//         {/* HERO IMAGE */}
//         <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
//           {/* GLOW */}
//           <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
//             <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
//           </div>

//           {/* IMAGE */}
//           <img
//             src={project.image}
//             alt={project.title}
//             className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[550px]"
//           />

//           {/* OVERLAY */}
//           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#02061780] to-transparent" />

//           {/* TITLE */}
//           <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
//             <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-7xl">
//               {project.title}
//             </h1>

//             <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 md:text-lg">
//               {project.description}
//             </p>
//           </div>
//         </div>

//         {/* CONTENT */}
//         <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_0.7fr]">
//           {/* LEFT */}
//           <div>
//             {/* ABOUT */}
//             <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl">
//               <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
//                 About Project
//               </p>

//               <h2 className="text-3xl font-semibold text-white">
//                 Building modern digital experiences
//               </h2>

//               <p className="mt-6 leading-8 text-white/60">
//                 This project was designed with a strong focus on modern UI/UX,
//                 smooth animations, responsive layouts, and clean performance.
//                 The interface combines premium visuals with functional design to
//                 create a professional experience across all devices.
//               </p>

//               <p className="mt-5 leading-8 text-white/60">
//                 The development process focused on scalability, maintainability,
//                 and elegant interaction design using modern frontend
//                 technologies.
//               </p>
//             </div>

//             {/* TECH STACK */}
//             <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl">
//               <p className="mb-6 text-sm uppercase tracking-[0.3em] text-cyan-400">
//                 Technologies
//               </p>

//               <div className="flex flex-wrap gap-3">
//                 {project.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="space-y-8">
//             {/* ACTION CARD */}
//             <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl">
//               <p className="mb-6 text-sm uppercase tracking-[0.3em] text-cyan-400">
//                 Project Links
//               </p>

//               <div className="space-y-4">
//                 <Link
//                   href={project.live}
//                   target="_blank"
//                   className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-5 font-medium text-black transition duration-300 hover:scale-[1.02]"
//                 >
//                   <span>Live Preview</span>

//                   <span>↗</span>
//                 </Link>

//                 <Link
//                   href={project.github}
//                   target="_blank"
//                   className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 font-medium text-white transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
//                 >
//                   <span>Github Repository</span>

//                   <span>↗</span>
//                 </Link>
//               </div>
//             </div>

//             {/* INFO */}
//             <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl">
//               <p className="mb-6 text-sm uppercase tracking-[0.3em] text-cyan-400">
//                 Information
//               </p>

//               <div className="space-y-5">
//                 <div>
//                   <p className="text-sm text-white/40">Category</p>

//                   <p className="mt-1 text-white">Web Development</p>
//                 </div>

//                 <div>
//                   <p className="text-sm text-white/40">Status</p>

//                   <p className="mt-1 text-green-400">Completed</p>
//                 </div>

//                 <div>
//                   <p className="text-sm text-white/40">Year</p>

//                   <p className="mt-1 text-white">2026</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <Footer />
//     </main>
//   );
// }
