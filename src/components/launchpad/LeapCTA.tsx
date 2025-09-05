import Container from "@/components/layout/Container";
import CustomImage from "@/components/ui/CustomImages";
import Link from "next/link";
import React from "react";

const LeapCTA = () => {
  return (
    <section className="bg-white py-16 w-full text-white">
      <Container>
        <div className="relative rounded-[28px] w-full p-2 bg-[#EDEBFF]">
          {/* Inner rounded image frame */}
          <div className="relative w-full rounded-[24px] overflow-hidden">
            {/* Background image */}
            <CustomImage
              src="/images/conf.jpg"
              alt="Ready to take the leap"
              className="aspect-[380/497] sm:aspect-[1100/420] w-full"
              imgClassname="rounded-[24px]"
              priority
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />

            {/* Content */}
            <div className="absolute w-full inset-0 flex flex-col items-center justify-center px-6 sm:px-10 gap-6 text-center">
              <h2 className="text-3xl sm:text-5xl font-bold max-w-[620px] leading-tight">
                Ready to
                <br />
                take the leap?
              </h2>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link
                  href="https://calendly.com/thefirstfounders/60min"
                  target="_blank"
                  className="bg-[#FFBB00] text-[#0D102F] font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-[0_2px_0_rgba(0,0,0,0.2)]"
                >
                  Book Clarity Session
                </Link>
                <Link
                  href="#apply"
                  className="bg-white/90 text-[#0D102F] font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LeapCTA;
