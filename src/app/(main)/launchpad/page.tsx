import ContinuousSlider from "@/components/launchpad/ContinuousSlider";
import VentureLabModules from "@/components/launchpad/VentureLabModules";
import ProgramDetails from "@/components/launchpad/ProgramDetails";
import ProgramSchedule from "@/components/launchpad/ProgramSchedule";
import LeapCTA from "@/components/launchpad/LeapCTA";
import Container from "@/components/layout/Container";
import CustomImage from "@/components/ui/CustomImages";
import { expertiseExtra, forWho, offering } from "@/lib/constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

const LaunchPad = () => {
  return (
    <>
      <section className="bg-[#0D102F] text-white py-40">
        <Container className="">
          <h2 className="text-4xl max-w-[800px] mx-auto md:text-6xl text-center font-bold mb-5">
            Launch Your Venture with the FirstFounders Venture Launchpad
            (F2-LaunchPad)
          </h2>
          <div className="max-w-[800px] space-y-5 bg-[#33CCCC] text-[#0D102F] font-medium p-5 rounded-3xl mx-auto mt-6">
            <p className="text-center text-xl">
              <span className="font-bold">
                Ready to build a high-growth venture?
              </span>{" "}
              The FirstFounders Venture Launchpad (F2-Launchpad) is a
              specialized, results-driven program designed to transform the
              ideas of aspiring founders, corporate innovators, SME leaders, and
              tech entrepreneurs into successful ventures
            </p>
            <p className="text-center text-xl">
              Leveraging our proven venture studio playbook, we guide a select
              group of participants through a structured journey, from initial
              clarity to scalable growth. This isn't just a program; it's a
              partnership. We become your partner for growth from day one,
              providing the hands-on support and capital efficiency of a venture
              studio.
            </p>
          </div>
          <div className="flex gap-10 my-10 items-center justify-center">
            <Link
              target="_blank"
              href="https://calendly.com/thefirstfounders/60min"
              className="bg-[#FFBB00] text-[#0D102F] font-bold items-center py-3.5 px-5 w-fit rounded-full flex gap-2"
            >
              <span>Book A Clarity Session</span>
            </Link>
            <Link
              href="/download"
              className="bg-[#FFFFFF] text-[#0D102F] font-bold items-center py-3.5 px-5 w-fit rounded-full flex gap-2"
            >
              <span>Download Program Booklet</span>
            </Link>
          </div>
          <CustomImage
            src="/images/launchpad.jpg"
            alt="Launchpad"
            imgClassname="rounded-[20px]"
            className="aspect-[1040/520] mx-auto max-w-[1042px]"
          />
        </Container>
      </section>
      <section className="bg-white py-10 text-[#040404]">
        <h4 className="font-medium max-w-[1300px] mx-auto text-center text-xl sm:text-4xl md:text-3xl lg:text-5xl">
          Who is it for?
        </h4>
        <Container className="grid grid-cols-1 py-10 gap-6 sm:grid-cols-2">
          {forWho.map((item) => (
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
      <section className="bg-[#0D102F]">
        <Container className="rounded-[20px] py-10 text-[#040404]">
          <div className="text-white space-y-3">
            <h4 className="font-medium  max-w-[1300px] mx-auto text-center text-xl sm:text-4xl md:text-3xl lg:text-5xl">
              What We Offer
            </h4>
            <p className="max-w-[1060px] text-xl text-center mx-auto w-full">
              We believe in a hands-on approach that goes beyond traditional
              mentorship. We're in the entire building process with you,
              providing the operational muscle and strategic guidance you need
              to succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 mt-6 gap-6 sm:grid-cols-2">
            {offering.map((item) => (
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
          </div>
        </Container>
      </section>
      <section className="bg-white py-20 text-[#040404]">
        <h4 className="text-center font-medium text-3xl">What To Expect</h4>
        <p className="text-center max-w-[800px] mx-auto text-base md:text-lg text-gray-600 mt-2">
          The F2-Launchpad is a comprehensive program designed for serious
          individuals committed to building successful ventures.
        </p>
        <Container className="">
          <div className="grid grid-cols-1 py-10 gap-6 md:grid-cols-2">
            {expertiseExtra.map((item) => (
              <div
                key={item.label}
                className={`bg-[#EBFAFA] ${item.style} last:flex-col  flex flex-col md:flex-row gap-10 p-10 rounded-lg`}
              >
                <div className="">
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
          </div>
        </Container>
      </section>

      {/* <section className="bg-white w-full py-20 text-[#040404]">
        <h4 className="text-center text-4xl font-medium mb-12">
          Choose the Program That Fits Your Needs
        </h4>
        <Container className="">
          <div className="flex max-[855px]:flex-col w-full flex-row gap-6">
            {tiers.map((tier, index) => (
              <div
                key={tier.id}
                className={`relative bg-white w-full h-fit p-5 md:p-10 rounded-2xl shadow-lg ${
                  tier.isRecommended
                    ? "bg-yellow-50 border-2 border-yellow-200 min-[855px]:transform min-[855px]:scale-105"
                    : "border border-gray-200"
                }`}
              >
             
                {tier.isRecommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <span className="text-lg">🎉</span>
                      <span>Recommended</span>
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {tier.title}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {tier.price}
                    </span>
                    <span className="text-gray-600 ml-2 text-base">
                      {tier.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <button className="w-full bg-black text-white py-4 px-6 rounded-full font-semibold text-base hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    {tier.buttonText}
                    <span className="text-lg">→</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section> */}
      {/* <section className="bg-white py-10 text-[#040404]">
        <h4 className="text-center text-4xl font-medium mb-12">
          Our Cohort Schedule
        </h4>
        <Container className="">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {cohorts.map((cohort, index) => (
              <div
                key={cohort.id}
                className={`${cohort.backgroundColor} rounded-3xl p-12 w-full text-left`}
              >
                <h3 className="text-3xl md:text-4xl font-medium text-black mb-4">
                  {cohort.title}
                </h3>

                <p className="text-lg md:text-xl text-gray-800 mb-8 font-medium">
                  {cohort.period}
                </p>

                <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-800 transition-colors flex items-center gap-2">
                  {cohort.buttonText}
                  <span className="text-lg">→</span>
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section> */}
      <section className="bg-white text-[#040404]">
        <ContinuousSlider />
      </section>
      {/* Venture Lab Program Modules Section */}
      <VentureLabModules />
      {/* Program Details Section */}
      <ProgramDetails />

      {/* Program Schedule Section */}
      <ProgramSchedule />
      {/* Ready to take the leap CTA */}
      <LeapCTA />
    </>
  );
};

export default LaunchPad;
