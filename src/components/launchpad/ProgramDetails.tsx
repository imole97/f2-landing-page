import Container from "@/components/layout/Container";
import React from "react";
import { programDetails } from "@/lib/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Light grid background utility using inline style to avoid adding global CSS
const GridCard: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => {
  //   const bg = {
  //     backgroundImage:
  //       "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
  //     backgroundSize: "32px 32px",
  //   } as React.CSSProperties;
  return (
    <div
      className={cn(`rounded-2xl bg-[#E9F8F3] p-8`, className)}
      //   style={bg}
    >
      {children}
    </div>
  );
};

const ProgramDetails = () => {
  return (
    <section className="bg-white py-10 text-[#040404]">
      <Container>
        <h2 className="text-center text-3xl md:text-5xl font-bold">
          Program Details
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Left column */}
          {/* <div className="space-y-6"> */}
          <GridCard className="md:row-star-1 md:place-content-center md:col-start-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {programDetails.title}
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {programDetails.summary}
            </p>
          </GridCard>

          <GridCard className="md:row-start-2 md:place-content-center  md:col-start-1">
            <p className="text-gray-800 font-medium mb-2">
              {programDetails.investmentLabel}
            </p>
            <p className="text-4xl min-[900px]:text-5xl font-bold">
              {programDetails.investment}
            </p>
          </GridCard>
          {/* </div> */}

          {/* Right column */}
          <div className="bg-[#FFF3D6] md:col-start-2 md:row-span-2 md:col-span-2 rounded-2xl p-8 md:p-10  border border-[#FFF8E5]">
            <h4 className="text-2xl md:text-3xl font-semibold mb-4">
              {programDetails.whatYouGetTitle}
            </h4>
            <ul className="list-disc pl-5 font-medium text-gray-800">
              {programDetails.features.map((feat) => (
                <li key={feat} className="text-base md:text-lg leading-relaxed">
                  {feat}
                </li>
              ))}
            </ul>

            <Link
              href="/launchpad/apply"
              className="mt-8 w-full rounded-full bg-black text-white px-8 py-4 font-semibold flex items-center justify-center gap-2"
            >
              {programDetails.cta.label}
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProgramDetails;
