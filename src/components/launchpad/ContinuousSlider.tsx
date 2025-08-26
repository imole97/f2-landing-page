'use client'
import { successStories } from "@/lib/constant";
import React, { useEffect, useRef, useState } from "react";
import CustomImage from "../ui/CustomImages";
import Link from "next/link";
import Container from "../layout/Container";

const ContinuousSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [clickedCard, setClickedCard] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);

  // Duplicate stories for seamless loop
  const duplicatedStories = [
    ...successStories,
    ...successStories,
    ...successStories,
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = 580; // w-580px
    const totalWidth = successStories.length * cardWidth;

    const scroll = () => {
      if (!isPaused && !clickedCard) {
        const currentScrollLeft = scrollContainer.scrollLeft;
        const newScrollLeft = currentScrollLeft + 2; // Adjust speed here

        // Reset position for seamless loop
        if (newScrollLeft >= totalWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = newScrollLeft;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, clickedCard]);

  const handleCardHover = (isHovering: boolean) => {
    setIsPaused(isHovering);
  };

  const handleCardClick = (cardId: number) => {
    setClickedCard(cardId === clickedCard ? null : cardId);
  };

  useEffect(() => {
    if (clickedCard) {
      const timer = setTimeout(() => {
        setClickedCard(null);
      }, 3000); // Resume after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [clickedCard]);

  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      <Container className="">
        <h4 className="text-4xl font-medium mb-8 text-center">
          Some Of Our Success Stories:
        </h4>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scrollbar-hide"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedStories.map((story, index) => (
            <div
              key={`${story.id}-${index}`}
              className={`bg-[#0D102F] border-[#EBECF9] border shadow-[0px_27px_24px_0px_#11111108] text-white rounded-lg p-6 w-[580px] flex-shrink-0 cursor-pointer transition-transform duration-200 ${
                clickedCard === story.id ? "ring-4 ring-yellow-400" : ""
              }`}
              onMouseEnter={() => handleCardHover(true)}
              onMouseLeave={() => handleCardHover(false)}
              onClick={() => handleCardClick(story.id)}
            >
              <div className="flex flex-col gap-3 mb-4">
                <CustomImage
                  src={story.img}
                  alt={story.company}
                  className={`${story.aspect} w-fit h-[64px]`}
                />
                <div>
                  {story.website && (
                    <Link
                      className="text-xl"
                      href={`https://${story.website}`}
                      target="_blank"
                    >
                      {story.website}
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-xl leading-relaxed ">{story.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ContinuousSlider;
