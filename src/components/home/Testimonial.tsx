"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import CustomImage from "../ui/CustomImages";
import Container from "../layout/Container";

const testimonials = [
  {
    id: 0,
    name: "Ngozi Nwabueze",
    role: "PocketLawyers",
    image: "",
    text: "FirstFounders has been fabulous! The team is young, dynamic and brilliant! They pointed my team and I to grey areas we didn't even think about and proffered solutions for them! It's been an enlightening journey and they made it easy! I definitely recommend them for your MVP build.",
    avatar: "NN",
  },
  {
    id: 1,
    name: "Adedapo Sodipo",
    role: "Syarpa (Founder/CEO)",
    image: "/images/sodipo.jpg",
    text: "Working with FirstFounders on my project, Syarpa has been one of the best supporting value that FirstFounders bring to the table especially with fundraising and startup advisory. Our relationship is consistent and continuous. Thank you for your great service. I highly recommend them!",
    avatar: "AS",
  },
  {
    id: 2,
    name: "Hakeem Onasanya",
    role: "Former Head, Startups - Lagos Innovates",
    image: "/images/hakeem.jpg",
    text: "Partnering with an organization that shares our passion for supporting the growth of startups is a wholesome one, and that is how we describe our partnership with FirstFounders. FirstFounders commitment to providing an enabling environment for early stage startups is highly commendable.",
    avatar: "HO",
  },
 
];
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canGoNext = currentIndex < testimonials.length+5 ;
  const canGoPrev = currentIndex > 0;

  const nextTestimonial = () => {
    if (canGoNext) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (canGoPrev) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-white py-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-5 mb-5">
          <div className="inline-flex rounded-full py-[10px] bg-[#F7F7F7] px-3 items-center gap-2 ">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-[#040404] font-medium text-sm tracking-wide">
              Testimonial
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#040404] leading-tight">
            Words From Founders & Partners
          </h2>
        </div>
      </div>

      {/* testimonial cards */}
      <Container className="relative">
          <div className="overflow-x-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100/3)}%)`,
                // width: `${(testimonials.length / 3) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl w-full p-8 shadow-sm border border-gray-100 flex-shrink-0"
                  // style={{ width: `${100/testimonials.length}%` }}
                >
                  <div className="mb-6">
                    <p className="text-[#333333] font-medium leading-relaxed text-base">
                      {testimonial.text}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {testimonial.image ? <CustomImage src={ testimonial.image} alt={testimonial.image} imgClassname="rounded-full" className="aspect-[48/48] w-[48px] h-[48px]" /> :
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    }
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </Container>
      
      {/* nav button */}
      <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={prevTestimonial}
            disabled={!canGoPrev}
            className={`w-20 h-14 rounded-[70px] border-2 flex items-center justify-center transition-all duration-200 ${
              canGoPrev 
                ? 'border-cyan-400 hover:border-cyan-400 hover:text-cyan-500 cursor-pointer' 
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Previous testimonial"
          >
         <Icon icon="material-symbols:arrow-left-alt-rounded" className={`${canGoPrev?"text-[#33CCCC]":"text-gray-300"}`} width="24" height="24" />
          </button>
          <button
            onClick={nextTestimonial}
            disabled={!canGoNext}
            className={`w-20 h-14 rounded-[70px] border-2 flex items-center justify-center transition-all duration-200 ${
              canGoNext 
                ? 'border-cyan-400 text-cyan-500  hover:text-white cursor-pointer' 
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Next testimonial"
          >
          <Icon icon="material-symbols:arrow-right-alt-rounded" className={`${canGoNext?"text-[#33CCCC]":"text-gray-300"}`} width="24" height="24" />
          </button>
        </div>
    </div>
  );
};

export default Testimonial;
