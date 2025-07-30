'use client'
import React, { useState } from "react";
import CustomImage from "../ui/CustomImages";
import Link from "next/link";
import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import Container from "./Container";
import { Icon } from "@iconify/react/dist/iconify.js";
const navHeaders = [
  { title: "About", hasDropdown: false, route: "#about" },
  { title: "Studio", hasDropdown: false, route: "#studio" },
  {
    title: "Portfolio",
    hasDropdown: true,
    route: "",
    subMenu: [
      { title: "Porfolio Companies", route: "#portfolio-companies" },
      { title: "Clients' Portfolio", route: "#client-portfolio" },
    ],
  },
  {
    title: "Program",
    hasDropdown: true,
    route: "",
    subMenu: [
      { title: "F2-Venture Studio Program", route: "" },
      { title: "F2-Venture Acceleration Program", route: "" },
    ],
  },
  {
    title: "Collective",
    hasDropdown: true,
    route: "",
    subMenu: [
      { title: " F2Nation", route: "" },
      { title: "African Ecosystem Mixer", route: "" },
      { title: "Unibuilder", route: "" },
      { title: "F2 Academy", route: "" },
    ],
  },
  {
    title: "Insights",
    hasDropdown: true,
    route: "",
    subMenu: [
      { title: "F2 Insights", route: "" },
      { title: "F2 Whitepapers", route: "" },
      { title: "Build Boldly", route: "" },
    ],
  },
  {
    title: "SubUnits",
    hasDropdown: true,
    route: "",
    subMenu: [
      { title: "F2 Republic", route: "" },
      { title: "F2Bank", route: "" },
    ],
  },
];
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const renderNav = (navItem: {
    title: string;
    route: string;
    hasDropdown: boolean;
    subMenu?: {
      title: string;
      route: string;
    }[];
  }) => {
    if (navItem.hasDropdown) {
      return (
        <Popover key={navItem.title}>
          {({ open }) => (
            <>
          <PopoverButton className="border-none flex items-center font-medium cursor-pointer outline-none">
            
                {navItem.title}
            <span
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              >
                <Icon
                  icon="line-md:chevron-small-down"
                  width="20"
                  height="20"
                />
              </span>
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom start"
            className="bg-white mt-10 w-[180px] text-[14px] gap-2 font-medium text-[#040404] rounded-lg  flex flex-col p-1 transition origin-top duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
          >
            {navItem.subMenu?.map((item) => (
              <CloseButton
                key={item.title}
                as={Link}
                href={item.route}
                className="text-left"
              >
                {item.title}
              </CloseButton>
            ))}
          </PopoverPanel>
            </>
          )}
        </Popover>
      );
    } else {
      return (
        <Link key={navItem.title}  className="font-medium shrink" href={navItem.route}>
          {navItem.title}
        </Link>
      );
    }
  };

  return (
    
      <div className="relative z-50">
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-[#FFFFFF1A] backdrop-blur-xl px-6 md:px-10 py-3 md:py-0 w-[95%] max-w-[1300px] h-[72px] md:h-[80px] rounded-full flex justify-between items-center">
        <CustomImage
          className="aspect-[179/40] h-[clamp(25px,4vw,40px)] w-auto"
          alt="f2-logo"
          src="/images/f2-logo.png"
          quality={100}
          loading="eager"
          priority
        />

        <nav className="hidden lg:flex gap-6 items-center">
          {navHeaders.map((header) => renderNav(header))}
        </nav>

        <button
          type="button"
          className="hidden lg:flex bg-white rounded-full py-2 px-4 text-black font-bold gap-2 items-center shadow-sm"
        >
          <span>Build Now</span>
          <CustomImage
            alt="build-now"
            className="aspect-[44/44] h-[44px] w-[44px]"
            priority
            src="/images/build-now.png"
          />
        </button>

        <div className="lg:hidden">
          <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#33CCCC]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

       {isMobileMenuOpen && (
        <div className="lg:hidden z-10 absolute top-[100px] left-0 right-0 bg-white text-black py-6 px-4 space-y-4 rounded-md shadow-lg">
          {navHeaders.map((item) => (
            <div key={item.title}>
              {item.hasDropdown ? (
                <Popover>
                  {({ open }) => (
                    <>
                  <PopoverButton className=" flex items-center justify-between w-full text-left font-semibold">
                    {item.title}
                    <span
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              >
                <Icon
                  icon="line-md:chevron-small-down"
                  width="20"
                  height="20"
                />
              </span>
                  </PopoverButton>
                  <PopoverPanel className="bg-gray-100 mt-2 rounded-lg p-2 text-sm">
                    {item.subMenu?.map((sub) => (
                      <CloseButton
                        key={sub.title}
                        onClick={() => setIsMobileMenuOpen(false)}
                        as={Link}
                        href={sub.route}
                        className="block py-1 px-2 hover:bg-gray-200 rounded"
                      >
                        {sub.title}
                      </CloseButton>
                    ))}
                  </PopoverPanel>
                    </>
                  )}
                </Popover>
              ) : (
                <Link
                  href={item.route || "/"}
                  className="block font-semibold py-1"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
