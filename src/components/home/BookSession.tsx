import React from "react";
import Container from "../layout/Container";
import CustomImage from "../ui/CustomImages";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
const audiences: string[] = [
  "Busy professionals who want to build their own startup",
  "Corporate firms that want to build tech ventures",
  "SME leaders who want to transform their traditional business into a digital business",
  "Entrepreneurs who need our venture studio-styled support to build and scale their ventures",
];
const BookSession = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="bg-[#EBECF9] grid gap-15 lg:grid-cols-2 rounded-[60px] p-10">
          <CustomImage
            imgClassname="rounded-[20px]"
            src="/images/ceo-sitting.jpg"
            alt="ceo"
            className="aspect-[548/473]"
          />
          <div className="flex min-w-0 text-xl font-medium space-y-5 text-[#040404] flex-col">
            <p className="text-5xl font-bold text-[#040404]">
              F2 Venture LaunchPad
            </p>
            <p className="text-xl text-[#040404]">
              A <span className="font-bold">PAID venture-building program</span>{" "}
              where we build for you using our proven venture studio playbook,
              providing you end-to-end, hands-on venture-building support to
              bring your bold AI or startup idea to life. 
            </p>
            <p>Who is it for?</p>
            <ul className="list-disc list-inside">
              {audiences.map((item) => (
                <li key={item} className="">
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-5 md:flex-row">
              <Link
                target="_blank"
                href="https://calendly.com/thefirstfounders/60min"
                className="bg-[#040404] text-lg font-bold items-center py-3.5 px-5 w-fit text-white rounded-full flex gap-2"
              >
                <span>Book A Clarity Session</span>
                <Icon
                  icon="material-symbols:arrow-forward-rounded"
                  width="16"
                  height="16"
                />
              </Link>
              <Link
                href="/launchpad"
                className="bg-transparent border-[1.1px] border-[#666666] text-lg font-bold items-center py-3.5 px-5 w-fit rounded-full flex gap-2"
              >
                <span>Learn More</span>
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
    </div>
  );
};

export default BookSession;
