import React, { useState } from "react";
import CustomImage from "../ui/CustomImages";
import { X } from "lucide-react";
import InsightReportForm from "../form/InsightForm";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import Link from "next/link";
import { useRouter } from "next/navigation";

type TProps = {
  onClose: () => void;
  isOpen: boolean;
};
const DownloadModal: React.FC<TProps> = ({ isOpen, onClose }) => {
const {push} = useRouter()
useBodyScrollLock(isOpen)
  if (!isOpen) return null;
  return (
    <div className="fixed  overflow-y-auto w-full  inset-0 bg-black/50 bg-opacity-50  p-4 z-50">
      <section className="mx-auto relative rounded-[80px] mt-[10%]  p-4 max-w-[1236px] bg-[#0D102F]  pt-10 pl-[3%]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 z-10"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        <div className={`flex flex-col w-full gap-5 items-center md:flex-row`}>
          <div className="w-full space-y-5">
            {/* <div className="px-4 py-1.5 w-fit rounded-full text-[#33CCCC] bg-[#33CCCC1A]">
              FirstFounders Insight Report
            </div> */}
           
                <p className="font-medium text-3xl sm:text-5xl lg:text-6xl ">
                  Download the F2 Insight Report Catalyzing Africa&apos;s
                  Innovation
                </p>
                <p className="text-lg lg:text-xl">
                  Explore FirstFounders’ revolutionary approach to venture
                  building in Nigeria, and discover how we’re paving the way for
                  the next generation of AI-driven ventures across Africa.
                </p>
            <div className="mt-4">
              
          <button
                onClick={() => {
                  push("/insights")
                  onClose()
           }}
          
              className="bg-[#FFBB00] font-semibold text-[#0D102F] px-10 py-4 rounded-full"
            >
              <span>Download Insight Report</span>
            </button>
          </div>
          </div>

          <CustomImage
            className="aspect-[568/460]  w-full"
            src="/images/venture-book.png"
            alt="book"
            imgClassname="rounded-[20px]"
          />
        </div>
      </section>
    </div>
  );
};

export default DownloadModal;
