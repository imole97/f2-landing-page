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
  // Duplicate the array *once* for seamless looping
  const duplicatedItems = [...items, ...items];

  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scrolling-wrapper {
          display: flex;
          white-space: nowrap;
        }

        .animate-scroll {
          animation: scroll linear infinite;
        }

        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className={cn("relative py-4 w-full overflow-hidden", className)}>
        <div
          className={cn(
            "scrolling-wrapper animate-scroll",
            pauseOnHover ? "pause-on-hover" : ""
          )}
          style={{
            animationDuration: `${(items.length * 300) / speed}s`,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex-shrink-0 mx-2 flex items-center justify-center",
                itemClassName
              )}
            >
              {typeof item === "string" ? (
                <p className="text-4xl lg:text-5xl">{item}</p>
              ) : (
                <CustomImage
                  className={cn(item.aspect || "", imageClassName)}
                  alt="scroll-item"
                  src={item.img || "/images/f2-logo.png"}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContinuousScroll;
