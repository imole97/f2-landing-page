"use client";

import Image, { type ImageProps, type StaticImageData } from "next/image";
import React, { useState, useCallback, forwardRef } from "react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

// Define a more comprehensive type for image sources that matches Next.js exactly
type ImageSource = ImageProps['src'];

interface CustomImageProps extends Omit<ImageProps, 'onLoadingComplete' | 'onError'> {
  fallbackSrc?: ImageSource;
  skeletonClassName?: string;
  showSkeleton?: boolean;
  onLoadingComplete?: (result: { img: HTMLImageElement; naturalWidth: number; naturalHeight: number }) => void;
  onError?: (error: Event) => void;
  imgClassname?: string;
}

const CustomImage = forwardRef<HTMLImageElement, CustomImageProps>(({
  alt = "image",
  className,
  fallbackSrc = "/item.png",
  skeletonClassName,
  imgClassname,
  showSkeleton = true,
  onLoadingComplete,
  onError,
  src,
  ...otherProps
}, ref) => {
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [currentSrc, setCurrentSrc] = useState<ImageSource>(src);

  const handleLoadingComplete = useCallback((event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = event.currentTarget;
    // Check if image loaded successfully
    if (!img || img.naturalWidth === 0 || img.naturalHeight === 0) {
      setImageState('error');
      if (fallbackSrc && currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
        return;
      }
    } else {
      setImageState('loaded');
      onLoadingComplete?.({ 
        img, 
        naturalWidth: img.naturalWidth, 
        naturalHeight: img.naturalHeight 
      });
    }
  }, [fallbackSrc, currentSrc, onLoadingComplete]);

  const handleError = useCallback((event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageState('error');
    
    // Try fallback if not already using it and fallback exists
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setImageState('loading'); // Reset to loading state for fallback
    }
    
    onError?.(event.nativeEvent);
  }, [fallbackSrc, currentSrc, onError]);

  const isLoading = imageState === 'loading';
  const isLoaded = imageState === 'loaded';

  return (
    <div className={cn("relative",className)}>
      <Image
        ref={ref}
        fill
        src={currentSrc}
        alt={alt}
        className={clsx(
          "transition-opacity object-cover duration-300 ease-in-out",
          imgClassname,
          {
            "opacity-0": isLoading,
            "opacity-100": isLoaded,
          }
        )}
        onLoad={handleLoadingComplete}
        onError={handleError}
        {...otherProps}
      />
      
      {/* Skeleton Loader */}
      {showSkeleton && isLoading && (
        <div
          className={clsx(
            "absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700",
            "before:absolute before:inset-0 before:-translate-x-full",
            "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
            "before:animate-[shimmer_2s_infinite] overflow-hidden",
            skeletonClassName
          )}
          aria-label="Loading image..."
        />
      )}
    </div>
  );
});

CustomImage.displayName = "CustomImage";

export default CustomImage;