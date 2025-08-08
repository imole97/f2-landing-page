import React from "react";
import Container from "./Container";
import CustomImage from "../ui/CustomImages";
import Link from "next/link";
const socials = [
  "/images/facebook.png",
  "/images/insta.png",
  "/images/linkedin.png",
  "/images/x.png",
  "/images/tiktok.png",
  "/images/youtube.png",
];
const Footer = () => {
  return (
    <div className="bg-[#0D102F] py-10">
      <Container>
        <div className="relative w-full  bg-[#33CCCC] py-17 rounded-[20px]">
          <div className="flex gap-4 text-center text-[#040404] w-full mx-auto max-w-[596px] flex-col">
            <p className="text-5xl md:text-6xl  font-medium">
              Ready to make your dream a reality?
            </p>
            <p className="text-xl">
              FirstFounders is the venture studio and ecosystem collective built
              to support your entrepreneurial journey. We turn audacious dreams
              into thriving ventures, one bold step at a time.
            </p>
            <div>
              <Link target="_blank" href="https://calendly.com/thefirstfounders/60min"  className="bg-[#FFBB00]  font-medium  py-3 px-4 w-fit text-[#0D102F] rounded-full ">
                Get Started Now
              </Link>
            </div>
          </div>
          {/* <div className="absolute z-30 top-0 -left-[556px]"> */}

          {/* <CustomImage alt="left-ellipse" imgClassname="object-contain" className="aspect-[200/200]" src="/images/left-ellipse.png"/> */}
          {/* </div> */}
          {/* <div className="absolute right-10">

          <CustomImage alt="right-ellipse" className="aspect-[925/925]" src="/images/right-ellipse.png"/>
          </div> */}
        </div>
        <div className="grid md:grid-cols-4 lg:grid-cols-6  py-16 gap-10 lg:gap-[100px]">
          <div className="flex lg:col-span-2 flex-col">
            <CustomImage
              className="aspect-[179/40] w-[179px]"
              alt="f2-logo"
              src="/images/f2-logo.png"
              quality={100}
              loading="eager"
              priority
            />
            <p>
              African AI-First Venture Studio Building and Backing Early-Stage
              Startups In Africa
            </p>
          </div>
          <div className="flex gap-4 flex-col">
            <p className="font-medium text-xl">Support</p>
            <p>FAQs</p>
            <Link  href="/about">About Us</Link>
          </div>
          <div className="flex gap-4 flex-col">
            <p className="font-medium text-xl">Resources</p>
            <Link href="/insights">Insights</Link>
            <p>Community</p>
          </div>
          <div className="flex gap-4 flex-col">
            <p className="font-medium text-xl">Company</p>
            <p>Newsroom</p>
            <Link target="_blank" href="https://calendly.com/thefirstfounders/60min">Contact Us</Link>
          </div>
          <div className="flex w-fit gap-4 flex-col">
            <p className="font-medium text-xl">Stay Connected</p>
            <div className="grid gap-2 grid-cols-3">
              {socials.map((item) => (
                <CustomImage
                  key={item}
                  alt="socials"
                  className="aspect-[24/24] w-[24px] h-[24px]"
                  src={item}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">

        Copyright © FirstFounders 2025
        </div>
      </Container>
    </div>
  );
};

export default Footer;
