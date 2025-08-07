import CustomImage from "@/components/ui/CustomImages";
import Link from "next/link";
import React from "react";

const Insights = () => {
  return (
    <>
      <header className="bg-white flex items-center justify-between py-4 px-8">
        <Link href="/">
        <CustomImage
          className="aspect-[179/40] h-[clamp(25px,4vw,40px)] w-auto"
          alt="f2-logo"
          src="/images/logo2.png"
          quality={100}
          loading="eager"
          priority
          />
          </Link>
        <button className="bg-[#33CCCC] text-[#0D102F] font-semibold px-10 py-4 rounded-full">
          <span>Download Insight Report</span>
        </button>
      </header>
      <section className="mx-auto max-w-[1440px] bg-[#0D102F]  pt-10 h-full pl-[5%] pr-[2%]">
        <div className="flex flex-col gap-5 items-center md:flex-row">
          <div className=" max-w-[628px] space-y-5">
            <div className="px-4 py-1.5 w-fit rounded-full text-[#33CCCC] bg-[#33CCCC1A]">
              FirstFounders Insight Report
            </div>
            <p className="font-medium text-3xl sm:text-5xl  lg:text-7xl ">
              Transforming Africa’s Future: The Strategic Blueprint to
              Innovation
            </p>
            <p className="text-lg lg:text-xl">
              Explore FirstFounders’ revolutionary approach to venture building
              in Nigeria, and discover how we’re paving the way for the next
              generation of AI-driven ventures across Africa.
            </p>
            <button className="bg-[#33CCCC] font-semibold text-[#0D102F] px-10 py-4 rounded-full">
              <span>Download Insight Report</span>
            </button>
          </div>
        
            <CustomImage
              className="aspect-[652/783] lg:w-[652px] w-full"
              src="/images/book-insight.png"
              alt="book"
            />
     
        </div>
      </section>
    </>
  );
};

export default Insights;
