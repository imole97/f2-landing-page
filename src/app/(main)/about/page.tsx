"use client";
import { Butterfly } from "@/components/icons";
import Container from "@/components/layout/Container";
import CustomImage from "@/components/ui/CustomImages";
import React from "react";

const values = [
  {
    title: "Expertise:",
    description: "Leveraging deep co-creation and proprietary playbooks.",
  },
  {
    title: "Innovation:",
    description:
      "Driving market transformation with cutting-edge AI solutions.",
  },
  {
    title: "Impact:",
    description: "Generating positive social and economic change.",
  },
  {
    title: "Community:",
    description: "Fostering a supportive ecosystem for collective growth.",
  },
  {
    title: "Partnership:",
    description: "Cultivating strategic relationships for venture success.",
  },
  {
    title: "Resilience:",
    description: "Building ventures that endure and thrive.",
  },
  {
    title: "Founder-First:",
    description: "Providing unparalleled, hands-on support to entrepreneurs.",
  },
];

const timelineData = [
  {
    year: "2006",
    image: "/images/paper.jpg",
    content:
      "Our journey began in 2006 with a spark—a young David Lanre Messan, barely 22, witnessing the untapped potential in his local community. He launched Green Yaggy, igniting the entrepreneurial spirit in over 1,500 young people. But witnessing their ventures falter due to lack of capital and operational know-how fueled a deeper mission.",
  },
  {
    year: "2015",
    content:
      "This led to Infinite Impact, an idea and strategy company dedicated to solving the riddle of startup failure. Working with over 250 SMEs, we learned firsthand the power of hands-on guidance. And then, an incubation company—Trogguerban—which birthed a successful mobility company called 'Trubiker.' This experience culminated in the birth of FirstFounders—a venture studio built on a simple, powerful vision: to raise entrepreneurs, especially within underserved communities across Africa, and empower them to build companies, create wealth, and generate jobs that truly make a difference.",
  },
  {
    year: "2020",
    content:
      "We understood that early-stage founders needed more than just advice; they needed a partner to walk alongside them. FirstFounders, also known as 'F2,' officially began its mission in Lagos, Nigeria, in March 2020. Starting with technology services, we quickly evolved into building and investing in startups. Today, we've grown into a pioneering venture studio and ecosystem collective with venture-building solutions tailored to every founder's unique needs, now also registered in Delaware, USA. Our core passion remains the same: to back entrepreneurs to build boldly, build better, and build for tomorrow.",
  },
];

const About = () => {
  return (
    <>
      <section className="bg-[#0D102F] text-center py-40">
        {/* <div className=" max-w-[1400px] mx-auto"></div> */}
        <p className="text-lg font-bold">F2 Story</p>
        <h4 className="text-3xl px-[5%] mx-auto font-bold max-w-[850px] lg:text-7xl">
          Born from a Desire to See Others Rise.
        </h4>
        <div className="pl-[5%] overflow-x-auto w-full flex mt-12 gap-6">
          <div className="w-[65%]">
            <CustomImage
              alt="hero-image"
              imgClassname="rounded-[20px]"
              src="/images/aboutHero1.jpg"
              priority
              className="aspect-[497/500] h-[500px] w-full"
            />
          </div>
          <div className="w-full">
            <CustomImage
              alt="hero-image"
              imgClassname="rounded-s-[20px] "
              src="/images/aboutHero2.jpg"
              priority
              className="aspect-[888/500] h-[500px] w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-[5%] bg-white">
        <Container>
          <div className="relative">
            {/* Timeline line - positioned to align with butterfly icons */}
            <div className="absolute left-[100px] h-full top-0 bottom-0 border-l border-dashed border-[#0D102F]"></div>

            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div
                  key={item.year}
                  className="relative flex items-start gap-8"
                >
                  {/* Year */}
                  <div className="text-[#0D102F] text-xl md:text-2xl font-semibold w-[60px] text-right">
                    {item.year}
                  </div>

                  {/* Butterfly icon - positioned to align with the timeline */}
                  <div className="relative z-10 flex-shrink-0">
                    <Butterfly />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-[#33CCCC33] p-8 rounded-[20px]">
                      {item.image && (
                        <div className="mb-6">
                          <CustomImage
                            src={item.image}
                            alt={item.year + " Image"}
                            imgClassname="rounded-xl"
                            className="aspect-[280/280] max-w-[280px]"
                          />
                        </div>
                      )}
                      <p className="text-[#040404] text-base md:text-lg leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-900 z-50 text-white mt-20 p-8 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <CustomImage
                alt="f2-image"
                className="aspect-[48/48] max-w-[48px] h-[48px]"
                src="/images/f2.png"
              />
              <h2 className="text-3xl text-[#33CCCC] font-semibold">
                About Us
              </h2>
            </div>
            <p className="text-base md:text-3xl leading-relaxed mb-4">
              FirstFounders (F2), also known as F2, is a pioneering AI-first
              venture studio and dynamic ecosystem collective dedicated to
              systematically building and backing the next generation of
              high-growth AI ventures across Africa. We are the architects of
              tomorrow&apos;s ventures, committed to democratizing
              entrepreneurship, driving corporate innovation, and
              institutionalizing venture building on the continent.
            </p>
            <p className="text-base md:text-3xl leading-relaxed">
              At F2, we believe that the raw, fiery energy of an idea, when
              nurtured with the right expertise and resources, can transform
              into a flourishing enterprise. We are the launchpad for audacious
              founders, providing the comprehensive support needed to navigate
              the journey from initial concept to a scaled, acquirable product.
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-white px-[5%] py-10">
        <Container>
          <div className="flex gap-12 flex-col lg:flex-row ">
            <CustomImage
              alt="value-image"
              src="/images/value-img.jpg"
              imgClassname="rounded-[20px]"
              className="aspect-[536/520] h-[536px]"
            />

            <div className="flex-1">
              <div className="mb-8 text-[#040404]">
                <h2 className="text-3xl font-bold">Core Values:</h2>
                <p className="text-3xl font-medium">
                  Our operations and culture are deeply rooted in:
                </p>
              </div>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={value.title} className="group text-[#040404]">
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className=" leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white px-[5%] py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Brand Promise */}
            <div className="bg-[#EBFAFA] h-fit p-8 rounded-2xl">
              <h2 className="text-base md:text-3xl mb-2 font-bold text-[#040404]">
                Brand Promise:
              </h2>
              <div className="space-y-4 text-base text-[#040404] md:text-3xl leading-relaxed">
                <p>
                  From &#39;Idea&#39; to &#39;Scaled, Acquirable Product&#39;,
                  F2 consistently delivers a comprehensive, hands-on
                  venture-building experience that transforms early-stage ideas
                  into de-risked, high-growth, and investment-ready companies
                  with strong potential for significant returns.
                </p>
                <p>
                  We are the partner that enables founders to{" "}
                  <strong>Build Boldly</strong>, <strong>Build Better</strong>,
                  and <strong>Build for Tomorrow</strong>.
                </p>
              </div>
            </div>

            {/* Right side - Impact & Ambition */}
            <div>
              <h2 className="text-base md:text-3xl mb-6 font-bold text-[#040404]">
                Our Impact & Ambition
              </h2>
              <div className="space-y-6 text-[#040404] text-base md:text-3xl leading-relaxed">
                <p>
                  With a track record of <strong>6 portfolio startups</strong>{" "}
                  averaging <strong>6.5x MOIC</strong>, FirstFounders is more
                  than just building companies; we&#39;re building a movement.
                  We are committed to driving innovation and economic growth
                  across Africa, empowering entrepreneurs to build successful
                  and sustainable businesses that improve lives and contribute
                  to a better planet.
                </p>

                <p>
                  We aim to deliver strong returns to our investors through
                  strategic, hands-on, and impactful investments, while
                  simultaneously fostering a collaborative ecosystem that
                  promotes knowledge sharing and growth.
                </p>

                <p>
                  <strong>FirstFounders (F2)</strong> is committed to
                  transforming the entrepreneurial landscape, enabling the bold
                  ideas of today to become the defining ventures of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
