"use client";

import InsightReportForm from "@/components/form/InsightForm";
import DownloadModal from "@/components/modals/DownloadModal";
import CustomImage from "@/components/ui/CustomImages";
import Link from "next/link";
import React, { useState } from "react";

const Insights = () => {
  const [showForm, setShowForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className=" bg-[#0D102F] w-full py-[150px] px-[5%]">
      <div className="flex  max-w-[1440px] mx-auto flex-col gap-5 md:flex-row">
        <div className="w-full max-w-[600px] space-y-5">
          {/* <div className="px-4 py-1.5 w-fit rounded-full text-[#33CCCC] bg-[#33CCCC1A]">
              FirstFounders Insight Report
            </div> */}
          {showForm ? (
            <InsightReportForm />
          ) : (
            <>
              <p className="font-medium text-3xl sm:text-5xl  lg:text-7xl ">
                Catalyzing Africa’s Innovation Through{" "}
                <span className="text-[#FFBB00]">Venture Building</span>
              </p>
              <p className="text-lg lg:text-xl">
                Explore FirstFounders’ revolutionary approach to venture
                building in Nigeria, and discover how we’re paving the way for
                the next generation of n ventures across Africa.
              </p>
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="bg-[#FFBB00] font-semibold text-[#0D102F] px-10 py-4 rounded-full"
              >
                <span>Download Insight Report</span>
              </button>
            </>
          )}
        </div>

        <CustomImage
          className="aspect-[652/671] w-full"
          src="/images/venture-book.png"
          alt="book"
          imgClassname="rounded-[20px]"
        />
      </div>
    </section>
  );
};

export default Insights;
