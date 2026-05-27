import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import LoadingScreen from "@/components/ui/LoadingScreen";
import SmoothScroll from "@/components/providers/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dafi-portfolio.vercel.app"),

  title: {
    default: "Ahmad Dafi Zidni Alfarisi",
    template: "%s | Ahmad Dafi",
  },

  description:
    "Portfolio modern Ahmad Dafi Zidni Alfarisi — Informatics Engineering Student, Frontend Developer, UI/UX Enthusiast, Networking & Cyber Security Learner from Lamongan.",

  keywords: [
    "Ahmad Dafi",
    "Ahmad Dafi Zidni Alfarisi",
    "Portfolio",
    "Frontend Developer",
    "UI UX Designer",
    "Cyber Security",
    "Networking",
    "Next.js Developer",
    "Tailwind CSS",
    "TypeScript",
    "Creative Developer",
    "Mahasiswa Teknik Informatika",
    "Universitas Trunojoyo Madura",
  ],

  authors: [
    {
      name: "Ahmad Dafi Zidni Alfarisi",
      url: "https://github.com/Dafi86",
    },
  ],

  creator: "Ahmad Dafi Zidni Alfarisi",

  applicationName: "Ahmad Dafi Portfolio",

  category: "technology",

  openGraph: {
    title: "Ahmad Dafi Zidni Alfarisi | Portfolio",

    description:
      "Modern & premium portfolio showcasing web development, UI/UX, networking, and cyber security experience.",

    url: "https://your-portfolio.vercel.app",

    siteName: "Ahmad Dafi Portfolio",

    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Ahmad Dafi Portfolio Preview",
      },
    ],

    locale: "id_ID",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Ahmad Dafi Zidni Alfarisi | Portfolio",

    description:
      "Premium futuristic portfolio built with Next.js, Tailwind CSS, and Framer Motion.",

    creator: "@dappiii_99x",

    images: ["/preview.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-[#020617] text-white antialiased">
        {/* MAIN BACKGROUND */}
        <div className="fixed inset-0 -z-50 bg-[#020617]" />

        {/* GRID */}
        <div className="pointer-events-none fixed inset-0 -z-40 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* CYAN GLOW */}
        <div className="pointer-events-none fixed left-[-10%] top-[-10%] -z-30 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* BLUE GLOW */}
        <div className="pointer-events-none fixed bottom-[-10%] right-[-10%] -z-30 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* NOISE */}
        <div className="pointer-events-none fixed inset-0 -z-20 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* CONTENT */}
        <SmoothScroll>
          <main className="relative z-10">{children}</main>
        </SmoothScroll>

        {/* LOADING */}
        <LoadingScreen />
      </body>
    </html>
  );
}
