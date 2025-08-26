import React from "react";
import Container from "../layout/Container";
import CustomImage from "../ui/CustomImages";
const reason = [
  {
    img: "/images/rocket.png",
    title: "Democratize Entrepreneurship",
    content: "Making the path to building a business accessible to everyone.",
  },
  {
    img: "/images/refactoring 1.png",
    title: "Drive Corporate Innovation",
    content:
      "Fostering the creation of ground breaking solutions for corporate growth.",
  },
  {
    img: "/images/creative 1.png",
    title: "Institutionalize Venture Building",
    content:
      "Providing a structured and supportive framework for turning ideas into successful ventures.",
  },

];
const WhyWeExist = () => {
  return (
    <div className="bg-[rgb(13,16,47)]  py-10">
      <Container>
        <h4 className="font-medium text-5xl lg:text-7xl text-center mb-10">
          Why We Exist
        </h4>
        <section className="flex flex-col gap-6 md:flex-row">
          {reason.map((item) => (
            <div key={item.title} className=" flex-1 min-w-0 relative">
              <div
              // className={`absolute -top-2 left-0 right-0 h-[362px] bg-[#FFBB00] rounded-2xl`}
              ></div>
              <div className="flex p-5 gap-3 lg:p-10  h-auto xl:h-[362px] relative flex-col bg-[#FFFFFF1A] rounded-2xl">
                <CustomImage
                  alt="reason-image"
                  className="aspect-[73/73] h-auto w-[73px]"
                  src={item.img}
                />

                <h5 className="text-3xl flex-1 font-medium">{item.title}</h5>
                <p className="text-2xl flex-1">{item.content}</p>
              </div>
            </div>
          ))}
        </section>
        <CustomImage
          alt="multi-images"
          className="aspect-[1300/356] w-full my-18"
          src="/images/multi-images.png"
        />
      </Container>
    </div>
  );
};

export default WhyWeExist;
