import React from "react";
import Container from "../layout/Container";
import CustomImage from "../ui/CustomImages";
const clientImages = [
    { img: "/images/pentrar-logo.png", aspect: "aspect-[232/64]"},
  {img:"/images/aavenu-logo.png",aspect: "aspect-[324/64]"},
  {img:"/images/prepify-logo.png",aspect: "aspect-[183/64]"},

  {img:"/images/tolex.png",aspect: "aspect-[200/64]"},
];
const ClientPortfolio = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex pt-16 justify-center">
          <div id="client-portfolio" className="bg-[#FFBB00]  justify-center py-2 px-4 rounded-full text-[#040404] font-medium">
            Clients’ Portfolio
          </div>
        </div>
        <div className="pt-3 pb-10">
          <h4 className="text-[#040404] text-2xl  font-medium leading-[120%] text-center">
            End - To - End
          </h4>
          <h4 className="text-[#040404] text-2xl  font-medium  leading-[120%] text-center">
            Venture Creation Service
          </h4>
              </div>
              <div className="flex w-full pb-10 gap-16 justify-center min-w-0 overflow-x-auto items-center">
                  {
                      clientImages.map(image => (
                          <CustomImage  key={image.img} className={`${image.aspect} flex-1 !object-contain w-full`} alt="client-image" src={image.img}/>
                      ))
                  }
              </div>

              <div className="flex gap-6 w-full">
                  <CustomImage alt="f2-exec" imgClassname="rounded-[12px]" className="aspect-[542/520] w-[40%]" src="/images/f2-guys.jpg"/>
                  <CustomImage alt="f2-squad" imgClassname="rounded-[12px]" className="aspect-[734/519] w-[60%]" src="/images/f2-squad.jpg"/>
              </div>
      </Container>
    </div>
  );
};

export default ClientPortfolio;
