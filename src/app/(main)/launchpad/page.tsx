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
          <h2 className="text-4xl md:text-7xl text-center font-bold mb-5">
            Launch Your Venture with the FirstFounders Venture Launchpad
            (F2-LaunchPad)
          </h2>
          <p className="text-center text-xl">
            Ready to build a high-growth venture? The FirstFounders Venture
            LaunchPad (F2-LaunchPad) is a{" "}
            <span className="font-bold">PAID venture-building program</span>{" "}
            where we build for you using our proven venture studio playbook,
            providing you end-to-end, hands-on venture-building support to bring
            your bold AI or startup idea to life.
          </p>
          <div className="flex justify-center my-10">
            <Link
              target="_blank"
              href="https://calendly.com/thefirstfounders/60min"
              className="bg-[#FFBB00] text-[#0D102F] font-bold mt-10 items-center py-3.5 px-5 w-fit rounded-full flex gap-2"
            >
              <span>Book A Clarity Session</span>
              <Icon
                icon="material-symbols:arrow-forward-rounded"
                width="16"
                height="16"
              />
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
      <section className="bg-white ">
        <Container className="bg-[#EBFAFA] rounded-[20px] p-6 text-[#040404]">
          <h4 className="text-4xl">
            This is a{" "}
            <span className="font-bold">PAID Venture-Building Program</span>{" "}
            designed for serious individuals committed to building successful
            ventures.
          </h4>
          <div className="bg-white mt-10 rounded-[20px] p-6">
            <p className="text-3xl font-medium">What We Offer</p>
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
