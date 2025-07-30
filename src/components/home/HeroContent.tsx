import React from "react";
import Container from "../layout/Container";
import CustomImage from "../ui/CustomImages";

const HeroContent = () => {
  return (
    <>
      <Container className="z-20 top-[152px] lg:top-[240px] right-[2.5%] left-[2.5%] absolute ">
        <div className="flex flex-col">
          <div className="bg-[#FFBB00] w-fit rounded-full px-4 py-[6px] text-xl text-[#0D102F] font-medium lg:py-2 lg:text-[14px]">
            Venture Studio
          </div>
          <div className="max-w-[822px] font-bold mt-4 lg:leading-24 text-[40px] lg:text-[83px]">
            <span>
              Building and Backing Africa&#39;s Next AI-First Startups from 0 -
              1 in partnership with brazen entrepreneurs
            </span>
          </div>
        </div>
      </Container>
      <div className="absolute right-[2.5%] top-[790px]">
        <CustomImage
          alt="vsf-trusted"
          className="aspect-[142/80] w-auto h-[clamp(80px,4vw,80px)] rounded-[8px]"
          src="/images/vsf-trusted.png"
        />
      </div>
    </>
  );
};

export default HeroContent;
