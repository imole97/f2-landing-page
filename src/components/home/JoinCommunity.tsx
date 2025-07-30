import React from "react";
import Container from "../layout/Container";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomImage from "../ui/CustomImages";
const community = [
  {
    img: "/images/community1.jpg",
    content:
      "As part of our venture building commitment, F2Nation is the ecosystem where your entrepreneurial journey takes flight. Connect with fellow founders, access vital resources for building and scaling, and tap into a network of experienced mentors. ",
  },
  {
    img: "/images/community2.jpg",
    content:
      "We're fostering collaboration to provide the exact venture-building support you need to transform your ideas into impactful realities, driving the future of African innovation.",
  },
];
const JoinCommunity = () => {
  return (
    <div className="bg-white py-10">
      <Container>
        <div className="bg-[#0D102F] w-full px-12 py-16 grid  xl:grid-cols-3 gap-5 rounded-[20px]">
          <div className="flex min-w-0 space-y-5 flex-col">
            <p className="text-5xl lg:text-6xl font-medium">
              Join Our Community
            </p>
            <p className="text-xl">
              Building Better Ventures, Together: Welcome to F2Nation.
            </p>
            <button className="bg-[#FFBB00] items-center py-3.5 px-10 w-fit text-[#0D102F] rounded-full flex gap-2">
              <span>Join Now</span>
              <Icon
                icon="material-symbols:arrow-forward-rounded"
                width="16"
                height="16"
              />
            </button>
          </div>
          {community.map((item) => (
            <div key={item.img} className="relative">
              <CustomImage
                alt="community-img"
                src={item.img}
                imgClassname="rounded-md"
                className="aspect-[406/310] h-auto w-auto"
              />
              <div className="bg-[#0D102F] opacity-50 absolute inset-0"></div>
              <div className="left-0 bottom-[8px] text-[9px] sm:text-sm md:text-base lg:text-xl mx-2 z-30 bg-[#5F5F5F33] h-fit backdrop-blur-xl px-3 py-2 right-0 absolute  rounded-lg ">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default JoinCommunity;
