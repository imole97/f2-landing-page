import React from "react";
import Container from "../layout/Container";
import CustomImage from "../ui/CustomImages";
import Link from "next/link";
const team = [
  {
    img: "/images/ceo.jpg",
    name: "David Lanre Messan",

    title: "CEO | Founder",
    twitter: "https://x.com/lanremessan",
    aspect: "aspect-[414/440]",
    linkedIn: "https://www.linkedin.com/in/lanremessan",
  },
  {
    img: "/images/cmo.jpg",
    name: "Samuel Kemeshi",
    title: "Chief Marketing Officer",
    twitter: "https://x.com/blahk_sam?s=21&t=6DJ0FnZr30uZdS4Om6rLPg",
    aspect: "aspect-[414/498]",
    linkedIn: "https://www.linkedin.com/in/samuel-kemeshi-610669144/",
  },
  {
    img: "/images/coo.jpg",
    name: "Jubril Oguntade",
    title: "Chief Operations Officer",
    twitter: "https://twitter.com/olajidejubril_",
    aspect: "aspect-[415/440]",
    linkedIn: "https://www.linkedin.com/in/olajide-jubril-oguntade",
  },
  {
    img: "/images/coms.jpg",
    name: "Mary Okon",
    title: "Head Communication | Business Development",
    twitter: "",
    aspect: "aspect-[415/440]",
    linkedIn: "https://www.linkedin.com/in/maryjosephokon",
  },
  {
    img: "/images/director.jpg",
    name: "Dada Morakinyo IbukunOluwa ",
    title: "Venture Studio Director",
    twitter: "https://twitter.com/iamibukunoluwa",
    aspect: "aspect-[414/440]",
    linkedIn: "https://www.linkedin.com/in/iamibukunoluwa",
  },
  {
    img: "/images/coms-dir.png",
    name: "Fuhab Bakare",
    title: "Community Director",
    twitter: "https://x.com/fuhaddd",
    aspect: "aspect-[412/440]",
    linkedIn: "https://www.linkedin.com/in/fuhadbakare",
  },
];
const OurTeam = () => {
  return (
    <div className="bg-white py-15">
      <Container>
        <div className="flex justify-center">
          <div className="bg-[#FFBB00] shadow-lg justify-center py-2 px-4 rounded-full text-[#040404] font-medium">
            Our Team
          </div>
        </div>
        <h4 className="max-w-[700px] text-[#040404] text-3xl mx-auto font-medium mt-3 mb-18 leading-[120%] text-center">
          An amazing team of venture builders and seasoned experts supporting
          founders to build for tomorrow
        </h4>
        <div className="grid sm:grid-cols-2 gap-6 md:grid-cols-3">
          {team.map((item) => (
            <div
              key={item.name}
              className="rounded-[20px] relative  overflow-hidden"
            >
              <CustomImage
                imgClassname="object-top"
                alt={item.name}
                className={`aspect-[415/440] w-full h-full `}
                src={item.img}
              />
              <div className="absolute bottom-[20px] left-2 right-2   z-10 bg-[#0D102F] rounded-[20px] p-5">
                <p className="font-bold text-lg lg:text-xl">{item.name}</p>
                <p>{item.title}</p>
              </div>
              <div className="flex z-10 flex-col absolute right-2 top-2 gap-2">
               { item?.linkedIn?<Link target="_blank" href={item.linkedIn}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_224_1781)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.7344 0.666016C23.3528 0.666016 24.6666 1.97992 24.6666 3.59823V21.7338C24.6666 23.3521 23.3527 24.666 21.7344 24.666H3.59884C1.98053 24.666 0.666626 23.3521 0.666626 21.7338V3.59823C0.666626 1.97992 1.98049 0.666016 3.59884 0.666016L21.7344 0.666016ZM8.18824 20.5072V9.92669H4.67074V20.5072H8.18824ZM20.8698 20.5072V14.4397C20.8698 11.1897 19.1345 9.67788 16.8206 9.67788C14.9548 9.67788 14.119 10.704 13.6511 11.4247V9.92669H10.1345C10.1811 10.9195 10.1345 20.5072 10.1345 20.5072H13.651V14.5983C13.651 14.282 13.6738 13.9659 13.767 13.7398C14.0208 13.1081 14.5998 12.4538 15.5714 12.4538C16.8434 12.4538 17.353 13.4245 17.353 14.8462V20.5072H20.8698ZM6.45325 4.82486C5.24978 4.82486 4.4635 5.61606 4.4635 6.65308C4.4635 7.6683 5.22588 8.4813 6.4067 8.4813H6.42939C7.65588 8.4813 8.41933 7.6683 8.41933 6.65308C8.3966 5.61752 7.65803 4.82711 6.45325 4.82486Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_224_1781">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.666626 0.666016)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>:null}
               {item.twitter? <Link target="_blank" href={item?.twitter}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_224_1783)">
                      <path
                        d="M13.4692 12.2564L18.8701 19.9815H16.6536L12.2463 13.6778V13.6774L11.5993 12.752L6.45093 5.3877H8.66746L12.8222 11.331L13.4692 12.2564Z"
                        fill="white"
                      />
                      <path
                        d="M22.0734 0.666016H3.25988C1.8277 0.666016 0.666626 1.82709 0.666626 3.25927V22.0728C0.666626 23.5049 1.8277 24.666 3.25988 24.666H22.0734C23.5056 24.666 24.6666 23.5049 24.6666 22.0728V3.25927C24.6666 1.82709 23.5056 0.666016 22.0734 0.666016ZM15.9746 21.0185L11.5147 14.5277L5.93098 21.0185H4.48785L10.874 13.5955L4.48785 4.30122H9.35866L13.5818 10.4475L18.8693 4.30122H20.3124L14.2228 11.38H14.2224L20.8454 21.0185H15.9746Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_224_1783">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.666626 0.666016)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>:null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;
