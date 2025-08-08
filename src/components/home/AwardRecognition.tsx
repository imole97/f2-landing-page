import React from 'react'
import ContinuousScroll from '../ContinuousScroll'
const images = [
  {
    img: "/images/top100.png",
    aspect:"aspect-[400/252]"
  },
  {
    img: "/images/top10.png",
    aspect:"aspect-[400/252]"
  },
  {
    img: "/images/builder-award.png",
    aspect:"aspect-[400/252]"
  },
  {
    img: "/images/top-ceo.png",
    aspect:"aspect-[400/205]"
  },
  {
    img: "/images/lbs.png",
    aspect:"aspect-[400/252]"
  },
  {
    img: "/images/gen-award.png",
    aspect:"aspect-[400/252]"
  },
  {
    img: "/images/top100.png",
    aspect:"aspect-[400/252]"
  },
  {
    img: "/images/top10.png",
    aspect:"aspect-[400/252]"
  },
  {
    img: "/images/builder-award.png",
    aspect:"aspect-[400/252]"
  },
  {
    img: "/images/top-ceo.png",
    aspect:"aspect-[400/205]"
  },
  {
    img: "/images/lbs.png",
    aspect:"aspect-[400/252]"
  },
  {
    img: "/images/gen-award.png",
    aspect:"aspect-[400/252]"
  },
]
const AwardRecognition = () => {
  return (
  <div className='bg-[#0D102F] py-10 w-full'>
          <h4 className='text-3xl text-center text-white mb-5 lg:text-5xl font-medium '>Awards & Recognition</h4>
          <ContinuousScroll speed={100} imageClassName='h-[64px] w-full'  pauseOnHover items={images} />
    </div>
  )
}

export default AwardRecognition