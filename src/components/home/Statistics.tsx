"use client";
import React from "react";
import Container from "../layout/Container";
import CustomImage from "../ui/CustomImages";
const statImages = [
  "/images/stat 1.png",
  "/images/stat 2.png",
  "/images/stat 3.png",
  "/images/stat 4.png",
];
const stats = [
  { number: "6", label: "Portfolio Startups", color: "bg-teal-400" },
  { number: "$1M+", label: "Invested", color: "bg-yellow-400" },
  { number: "6.5x", label: "MOIC", color: "bg-teal-400" },
  { number: "50%", label: "YOY Growth", color: "bg-yellow-400" },
  { number: "60+", label: "Job Created", color: "bg-yellow-400" },
];
const Statistics = () => {
  return (
    <div id="about" className="bg-white py-10">
      <Container className="flex flex-col">
        <div className="flex flex-col gap-5 lg:flex-row">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative  flex-1">
              {/* Background colored card with fixed positioning */}
              <div
                className={`absolute -top-2 left-0 right-0 h-[173px] ${stat.color} rounded-2xl`}
              ></div>

              {/* Main content card */}
              <div className="relative bg-[#0D102F] text-white rounded-2xl px-8 py-12 h-[173px] flex flex-col justify-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="py-10 flex flex-col xl:gap-12 xl:flex-row items-center">
          <div className="xl:max-w-[626px]">
            <h2 className="text-3xl text-[#040404] mb-6 leading-tight">
              <span className="font-bold">FirstFounders (F2)</span> is an
              AI-first venture studio and dynamic ecosystem collective building,
              funding and scaling the transformative ideas of visionary African
              entrepreneurs into high-value, acquirable AI-driven ventures
              across key sectors like fintech, consumer and entertainment.
            </h2>

            <p className="text-3xl text-[#040404] leading-relaxed mb-8">
              We are the architects of{" "}
              <span className="font-bold">
                &quot;tomorrow&#39;s ventures&quot;
              </span>{" "}
              dedicated to democratizing entrepreneurship, institutionalizing
              venture building and driving corporate innovation on the
              continent.
            </p>
          </div>

          <div className="relative w-full">
            <CustomImage
              src="/images/f2-guys.jpg"
              alt="F2 Team"
              imgClassname="rounded-xl"
              className="aspect-[626/520] xl:aspect-[626/450] h-auto w-full"
            />
            <div className="absolute bottom-4 w-[61px] left-4">
              <CustomImage
                alt="f2-image"
                className="aspect-[61/61] lg:aspect-[98/96]"
                src="/images/f2.png"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
