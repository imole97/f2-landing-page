"use client";
import type { Metadata } from "next";
import "../globals.css";
import { satoshi } from "@/config/font";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import DownloadModal from "@/components/modals/DownloadModal";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showdownload,setShowdownload] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      // // Update active section based on scroll posi
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
setShowdownload(true)
  },[])
  return (
    <main className="">
      <Header />
      {children}
      <Footer />
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-b from-[#FFBB00] to-[#c8ab5b] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <Icon icon="line-md:chevron-up" width="24" height="24" />
        </button>
      )}
      {showdownload ? <DownloadModal isOpen={ showdownload} onClose={()=>setShowdownload(false)} />:null}
    </main>
  );
}
