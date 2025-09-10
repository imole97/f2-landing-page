"use client";
import Container from "@/components/layout/Container";
import FileDownloadedModal from "@/components/modals/FileDownloadedModal";
import CustomImage from "@/components/ui/CustomImages";
import React, { useEffect } from "react";

const Download = () => {
  useEffect(() => {
    // Prefer same-origin download via API to avoid cross-origin and mobile issues
    const url = "/api/download-pdf";

    // 1) Try opening in a new tab (often required by iOS Safari)
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();

    // 2) Fallback: hidden iframe triggers download without navigation
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;
    document.body.appendChild(iframe);

    // Cleanup
    const cleanup = () => {
      setTimeout(() => {
        try {
          document.body.removeChild(iframe);
        } catch {}
      }, 5000);
    };
    cleanup();
  }, []);
  return (
    <section className="bg-[#0D102F]">
      <Container className="flex justify-center pt-30 pb-10 ">
        <CustomImage
          className="aspect-[652/671] h-[652px] "
          src="/images/venture-book.png"
          alt="book"
          imgClassname="rounded-[20px]"
        />
        <FileDownloadedModal />
      </Container>
    </section>
  );
};

export default Download;
