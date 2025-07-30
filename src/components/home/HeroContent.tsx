import React from "react";
import Container from "../layout/Container";
import CustomImage from "../ui/CustomImages";

const HeroContent = () => {
  return (
    <>
      <Container className="z-20 top-[152px] lg:top-[240px] right-[2.5%] left-[2.5%] absolute ">
        <div className="flex flex-col">
          <div className="bg-[#FFBB00] w-fit rounded-full px-4 py-[6px] sm:text-xl text-[#0D102F] font-medium lg:py-2 ">
            Venture Studio
          </div>
          <div className="max-w-[850px] font-bold mt-4 lg:leading-24 text-[40px] lg:text-[83px]">
         
              Building and Backing Africa&#39;s Next AI-First Startups from 0 -
              1 in partnership with brazen entrepreneurs
      
          </div>
        </div>
      </Container>
      <div className="absolute right-[2.5%] top-[790px]">
        <CustomImage
          alt="vsf-trusted"
          className="aspect-[142/80] w-auto h-[clamp(80px,4vw,80px)] rounded-[8px]"
          src="/images/vsf-trusted.png"
          imgClassname="rounded-[8px]"
        />
      </div>
    </>
  );
};

export default HeroContent;
