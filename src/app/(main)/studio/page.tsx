"use client";
import Container from "@/components/layout/Container";
import CustomImage from "@/components/ui/CustomImages";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";
const expertise = [
  {
    img: "/images/head-img.png",
    label: "Ideation",
    aspect: "aspect-[80/80]",
    content: "Sharpening your vision and validating your concepts.",
  },
  {
    img: "/images/prod-des.png",
    label: "Product Design & Engineering",
    aspect: "aspect-[80/75]",
    content: "Crafting user-centric and scalable products.",
  },
  {
    img: "/images/operation.png",
    label: "Operational Support",
    aspect: "aspect-[80/80]",
    content:
      "Handling the nuts and bolts to keep your venture running smoothly.",
  },
  {
    img: "/images/goto.png",
    aspect: "aspect-[80/80]",
    label: "Go-To-Market & User Acquisition",
    content: "Getting your product into the hands of your target audience.",
  },
  {
    img: "/images/talent.png",
    aspect: "aspect-[80/80]",
    label: "Talent & Hiring",
    content: "Talent & Hiring Building a strong and capable team.",
  },
  {
    img: "/images/screen-arrow.png",
    aspect: "aspect-[73.7/73.7]",
    label: "Strategy",
    content: "Defining your long-term vision and roadmap.",
  },
  {
    img: "/images/partner.png",
    aspect: "aspect-[80/80]",
    label: "Partnerships",
    content: "Connecting you with key players in the ecosystem.",
  },
  {
    img: "/images/contract.png",
    aspect: "aspect-[80/80]",
    label: "Finance & Legal",
    content:
      "Providing essential support for crucial aspects of your business.",
  },
];
const edge = [
  {
    img: "/images/scroll.png",
    aspect: "aspect-[73.75/73.75]",
    label: "Proven Track Record",
    content:
      "Launched 6 startups, invested over $1M, supported 20+ companies, and a thriving community of 1500+ founders.",
  },
  {
    img: "/images/ai.png",
    aspect: "aspect-[80/80]",
    label: "AI-First Focus",
    content:
      "Deep expertise in leveraging Artificial Intelligence to disrupt high-growth sectors.",
  },
  {
    img: "/images/think1.png",
    aspect: "aspect-[80/80]",
    label: "Idea to Exit Strategy",
    content:
      "We provide immersive learning, strategic visioning, targeted capital, robust business modeling, product expertise, and hands-on operations – all with early acquisition in mind.",
  },
  {
    img: "/images/partnership.png",
    aspect: "aspect-[73.75/73.75]",
    label: "Committed Partnership",
    content:
      "We're invested in your success, offering capital efficiency, operational excellence, and active risk mitigation.",
  },
];
const Studio = () => {
  return (
    <>
      <section className="bg-[#0D102F] text-center py-40">
        <div className="space-y-5">
          <p className="text-lg font-bold">FirstFounders Venture Studio</p>
          <h4 className="text-3xl px-[5%] mx-auto font-bold max-w-[1000px] lg:text-7xl">
             Build Boldly. Scale Fast. Exit Strong.
          </h4>
          <p className="text-lg mx-auto max-w-[826px]">
            Welcome to the FirstFounders Venture Studio: Where Bold Ideas Meet
            Unrivaled Execution. Your Ambitious AI Venture Starts Here.
          </p>
        </div>
      </section>
      <section className="bg-white py-10 text-[#040404]">
        <Container>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            We're not just investors; we're co-builders. At FirstFounders, we
            partner with visionary founders to create and scale impactful
            AI-first ventures targeting significant opportunities in Fintech,
            Consumer, and Entertainment. Our program is a potent blend of
            immersive learning, strategic visioning, targeted capital
            deployment, robust business modeling, deep product expertise, and
            hands-on operational experience—all designed to transform
            groundbreaking ideas into rapidly scaling ventures with a clear path
            to successful exit.
          </p>
        </Container>
      </section>
      <section className="bg-white py-10">
        <Container>
          <div className="bg-[#EBFAFA] p-3 rounded-xl flex flex-col gap-10 items-center md:flex-row">
            <div className="bg-[#0D102F] w-full  px-5 py-6 md:px-10 md:py-12 text-2xl sm:text-3xl md:text-5xl lg:text-7xl rounded-xl ">
              <p>
                Built By Builders,{" "}
                <span className="text-[#FFBB00]">For Builders.</span> Since
                2020.
              </p>
            </div>
            <div className="w-full text-xl md:text-2xl lg:text-3xl text-[#040404]">
              <p>
                Founded in Nigeria and Delaware, USA, FirstFounders is more than
                just a venture studio—we're your dedicated co-founding team from
                day one, committed to 'building for tomorrow' alongside
                audacious founders across Africa. We specialize in taking your
                venture from a mere idea to a market-ready reality, providing
                comprehensive, hands-on support every step of the way.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white py-10 text-[#040404]">
        <p className="font-medium max-w-[1300px] mx-auto text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl">
          Consider us your extended founding team, providing expertise in:
        </p>
        <Container className="grid grid-cols-1 py-10 gap-6 sm:grid-cols-2">
          {expertise.map((item, i) => (
            <div
              key={item.label}
              className="bg-[#EBFAFA] flex flex-col md:flex-row gap-10 p-10 rounded-lg"
            >
              <div className="flex-shrink-0">
                <CustomImage
                  src={item.img}
                  alt={item.label}
                  className={`${item.aspect} w-14 md:w-20`}
                />
              </div>
              <div>
                <h5 className="text-2xl font-bold">{item.label}</h5>
                <p className="text-lg">{item.content}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>
      <section className="py-10 bg-[#0D102F]">
        <h4 className="font-medium text-5xl lg:text-7xl text-center mb-10">
          Why We Exist
        </h4>
        <Container className="">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {edge.map((item, i) => (
              <div
                key={item.label}
                className="flex p-5 gap-3 lg:p-10  h-fit flex-col bg-[#FFFFFF1A] rounded-2xl"
              >
                <CustomImage
                  alt="reason-image"
                  className={`${item.aspect} w-14 md:w-20`}
                  src={item.img}
                />

                <h5 className="text-3xl font-bold">{item.label}</h5>
                <p className="text-2xl">{item.content}</p>
              </div>
            ))}
          </div>
          <CustomImage
            alt="multi-images"
            className="aspect-[1300/356] w-full my-18"
            src="/images/multi-images.png"
          />
        </Container>
      </section>
      <section className="bg-white py-20 text-[#040404]">
        <Container>
          <div className="bg-[#EBECF9] grid gap-15 lg:grid-cols-2 rounded-[60px] p-10">
            <div>
              <CustomImage
                imgClassname="rounded-[20px]"
                src="/images/boss.jpg"
                alt="ceo"
                className="aspect-[548/473]"
              />
            </div>
            <div className="flex min-w-0 space-y-5 flex-col">
              <p className="text-5xl lg:text-6xl font-bold text-[#040404]">
                Ready To Build Your Audacious AI-First Venture With Us?
              </p>
              <p className="text-xl text-[#040404]">
                Ready to build your audacious AI-first venture with us? From
                ideation to launch and growth, we provide end-to-end, hands-on
                venture building support to bring your bold AI or Startup vision
                to life.
              </p>
              <Link
                target="_blank"
                href="https://calendly.com/thefirstfounders/60min"
                className="bg-[#040404] font-bold mt-10 items-center py-3.5 px-5 w-fit text-white rounded-full flex gap-2"
              >
                <span>Apply Now</span>
                <Icon
                  icon="material-symbols:arrow-forward-rounded"
                  width="16"
                  height="16"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Studio;
