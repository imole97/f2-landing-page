"use client";
import { cn } from "@/lib/utils";
import React from "react";
import CustomImage from "./ui/CustomImages";
type TProps = {
  items: string[] | Array<Record<string, string>>;
  className?: string;
  pauseOnHover?: boolean;
  speed: number;
  itemClassName?: string;
  imageClassName?: string;
};
const ContinuousScroll: React.FC<TProps> = ({
  items,
  className,
  imageClassName,
  itemClassName,
  speed,
  pauseOnHover,
}) => {
  const duplicatedItems =
    items.length === 1
      ? Array(8).fill(items[0]).flat() // Repeat single item 8 times
      : [...items, ...items,...items];
  console.log({ duplicatedItems });
  return (
    <>
     <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .scrolling-wrapper {
          display: inline-flex;
          white-space: nowrap;
          will-change: transform;
        }

        .animate-scroll {
          animation: scroll linear infinite;
        }

        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className={cn(`relative py-4 w-full overflow-hidden `, className)}>
        <div
         className={cn(
        'inline-flex animate-scroll',
        pauseOnHover ? 'group-hover:paused' : ''
      )}
      style={{
        animationDuration: `${(duplicatedItems.length * 300) / speed}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationName: 'scroll',
      }}
        >
          {duplicatedItems?.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex-shrink-0 mx-2 flex items-center justify-center",
                itemClassName
              )}
            >
              {items.length > 1 ? (
                <CustomImage
                  className={cn(`${item.aspect}`, imageClassName)}
                  alt="scroll-item"
                  src={item?.img || "/images/f2-logo.png"}
                />
              ) : (
                <p className="text-4xl lg:text-5xl"> {item}</p>
              )}
            </div>
          ))}
        </div>
        {/* <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div> */}
      </div>
    </>
  );
};

export default ContinuousScroll;
