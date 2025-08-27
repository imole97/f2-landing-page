import ContinuousScroll from "@/components/ContinuousScroll";
import Container from "@/components/layout/Container";
import CustomImage from "@/components/ui/CustomImages";
import { whyUniBuilder } from "@/lib/constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

const Unibuilder = () => {
  return (
    <>
      <section className="bg-[#0D102F] text-white py-40 ">
        <Container>
          <div className="max-w-[880px] mx-auto">
            <h3 className="text-4xl md:text-7xl text-center font-bold">
              <span className="text-[#33CCCC]">Join UniBuilder:</span>{" "}
              Incubation Program for Tertiary Students!
            </h3>
            <p className="text-xl text-center mt-5">
              Are you an undergraduate in a university, polytechnic, or college
              of education with strong technical skills and an innovative idea?
              UniBuilder is here to help you turn your idea into a thriving
              startup.
            </p>
            <div className="flex justify-center mt-5">
              <Link
                target="_blank"
                href="https://bit.ly/unibuilderbridgeforbillions"
                className="bg-[#FFBB00] text-[#0D102F] font-bold mt-10 items-center py-3.5 px-5 w-fit rounded-full flex gap-2"
              >
                <span>Apply Now</span>
                <Icon
                  icon="material-symbols:arrow-forward-rounded"
                  width="16"
                  height="16"
                />
              </Link>
            </div>
            <div className="flex flex-col text-2xl gap-2 justify-center mt-10 items-center md:flex-row">
              <p>Our Partners:</p>
              <CustomImage
                src="/images/bridge.png"
                alt="bridge-for-billions-image"
                className="aspect-[212/42] max-w-[212px] h-[42px] md:aspect-[313/64] md:max-w-[313px] md:h-[64px]"
              />
            </div>
            <div className="mt-10 ">
              <CustomImage
                src="/images/uni-builder.jpg"
                alt="bridge-for-billions-image"
                imgClassname="rounded-[20px]"
                className="aspect-[1280/520] w-full h-full"
              />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <div className="bg-[#33CCCC] text-[#0D102F] border-t-2 border-[#FFBB00] w-full">
          <ContinuousScroll
            speed={50}
            pauseOnHover
            items={["Application Deadline: 10th September 2025", "."]}
          />
        </div>
      </section>
      <section className="bg-white py-10 text-[#040404]">
        <h4 className="font-bold max-w-[1300px] mx-auto text-center text-xl sm:text-4xl md:text-3xl lg:text-5xl">
          Why Join UniBuilder?
        </h4>
        <Container className="grid grid-cols-1 py-10 gap-6 sm:grid-cols-2">
          {whyUniBuilder.map((item) => (
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
                <p className="text-2xl">{item.content}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>
      <section className="bg-white py-10">
        <Container>
          <div className="bg-[#0D102F] grid gap-15 lg:grid-cols-2 rounded-[60px] p-10">
            <CustomImage
              imgClassname="rounded-[20px]"
              src="/images/group-uni.jpg"
              alt="group-uni"
              className="aspect-[548/473]"
            />
            <div className="flex min-w-0 text-base sm:text-xl md:text-3xl font-medium space-y-5 text-white flex-col">
              <p className="text-2xl md:text-5xl font-bold">
                Who Should Apply?
              </p>

              <ul className="list-disc font-normal list-inside">
                <li>Undergraduates with a strong technical background.</li>
                <li>
                  Innovators building early-stage, Africa-focused solutions.
                </li>
              </ul>
              <p className="mt-10 font-normal">
                Don’t wait—your future startup begins here.
              </p>
              <div className="">
                <Link
                  target="_blank"
                  href="https://bit.ly/unibuilderbridgeforbillions"
                  className="bg-[#FFBB00] text-lg font-bold items-center py-3.5 px-5 w-fit text-[#0D102F] rounded-full flex gap-2"
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
          </div>
        </Container>
      </section>
      <section className="bg-white py-10">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="text-[#040404] space-y-8">
            <h3 className="font-bold text-5xl md:text-6xl">
              Want to Give Back? Become a Mentor
            </h3>
            <p className="text-3xl">
              Are you an experienced operator, entrepreneur, or industry
              professional passionate about guiding the next generation of
              African founders? Join UniBuilder as a mentor and help shape
              innovative solutions.
            </p>
            <div className="">
              <Link
                target="_blank"
                href="https://bit.ly/unibuilderbridgeforbillions"
                className="bg-[#FFBB00] text-lg font-bold items-center py-3.5 px-5 w-fit text-[#0D102F] rounded-full flex gap-2"
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
          <CustomImage
            imgClassname="rounded-[20px]"
            src="/images/mentor.jpg"
            alt="mentor"
            className="aspect-[630/502]"
          />
        </Container>
      </section>
    </>
  );
};

export default Unibuilder;
