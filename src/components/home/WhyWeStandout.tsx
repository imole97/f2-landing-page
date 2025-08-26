import React from "react";
import CustomImage from "../ui/CustomImages";
import Container from "../layout/Container";
const items = [
  {
    img: "/images/monitor.png",
    title: "Industry Specialization",
    gridStyle: "col-span-2",
    content:
      "Our laser focus on AI-driven tech ventures in emerging markets allows for unparalleled expertise and network effects.",
  },
  {
    img: "/images/head-img.png",
    title: "Ground-Zero Idea-Stage Focus",
    gridStyle: "col-span-2",
    content:
      "We specialize in taking ambitious founders from the absolute idea stage to product-market fit, significantly de-risking ventures.",
  },
  {
    img: "/images/3profile.png",
    title: "Hands-On Venture Building Expertise",
    gridStyle: "col-span-2",
    content:
      "We are active co-builders, providing dedicated in-house teams and operational support that goes far beyond traditional mentorship or capital injection.",
  },
  {
    img: "/images/screen-arrow.png",
    title: "Proprietary Playbook & Repeatable Success",
    gridStyle: "col-start-2 col-span-2",
    content:
      "Our proven 'FirstFounders Venture Studio Playbook' drives higher success rates, evidenced by our 6.5x MOIC average and accelerated path to product-market fit.",
  },
  {
    img: "/images/computer.png",
    title: "Comprehensive Ecosystem",
    gridStyle: "col-span-2",
    content:
      "Our integrated ecosystem collective and subunits create a holistic support system fostering continuous learning, value creation and a powerful community.",
  },
  {
    img: "/images/resize.png",
    title: "Scalable Technology & Infrastructure",
    content:
      "Access to shared resources reduces costs and accelerates go-to-market.",
  },
];
const WhyWeStandout = () => {
  return (
    <div className="bg-white py-10">
      <Container>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-[#FFBB00]  justify-center py-2 px-4 rounded-full text-[#040404] font-medium">
              The F2 Advantage
            </div>
          </div>
          <h4 className="text-5xl font-medium text-[#040404] leading-[120%] text-center">
            Why We Stand Out
          </h4>
          <p className="text-2xl text-[#040404]">
            Our unique value proposition is built on distinct differentiators:
          </p>
        </div>
        <div className="grid md:grid-cols-3 mt-10 gap-5">
          {items.map((item) => (
            <div key={item.title} className={`space-y-4 p-5`}>
              <CustomImage
                alt="images"
                src={item.img}
                className="aspect-[80/80] h-[80px]"
              />
              <div>
                <p className="text-2xl font-bold text-[#040404]">
                  {item.title}
                </p>
                <p className="text-[#1A1A1A]">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyWeStandout;
