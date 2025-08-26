"use client";
import React from "react";
import Container from "../layout/Container";
import CustomImage from "../ui/CustomImages";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
const content = [
  {
    img: "/images/book.png",
    aspect: "aspect-[447/364] -rotate-[20deg] h-[320px]",
    header: "Download Insight Reports",
    url: "/insights",
    action: "Download",
  },
  {
    img: "/images/discuss.jpg",
    aspect: "aspect-[499/333] h-[320px]",
    header: "Subscribe to our Newsletter",
    url: "/insights",
    action: "Subscribe",
  },
];
const Newsletter = () => {
  const { push } = useRouter();
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-col gap-10 justify-center sm:flex-row">
          {content.map((item) => (
            <div
              key={item.header}
              className="rounded-[20px]  min-w-0 flex-1 first:bg-[#EBECF9] bg-[#EBFAFA] p-10"
            >
              <div className="bg-white p-2 rounded-3xl overflow-hidden flex justify-center h-[200px]">
                <CustomImage
                  alt="img"
                  src={item.img}
                  imgClassname=" rounded-2xl"
                  className={`${item.aspect} object-top w-full`}
                />
              </div>
              <div className="space-y-6 pt-6">
                <p className="font-medium text-3xl sm:text-4xl max-w-[260px] sm:max-w-[330px] text-[#040404] ">
                  {item.header}
                </p>
                <button
                  onClick={() => push("/insights")}
                  className="bg-[#040404] flex gap-2 items-center rounded-full px-6 py-2"
                >
                  <span>{item.action}</span>
                  <Icon
                    icon="material-symbols:arrow-forward-rounded"
                    width="16"
                    height="16"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
