import React from 'react'
import ContinuousScroll from '../ContinuousScroll'
const images = [
  {
    img: "/images/morrow.jpg",
    aspect:"aspect-[147/64]"
  },
  {
    img: "/images/venture.jpg",
    aspect:"aspect-[152/64]"
  },
  {
    img: "/images/lsetf.jpg",
    aspect:"aspect-[197/64]"
  },
  {
    img: "/images/pawen.jpg",
    aspect:"aspect-[64/64]"
  },
  {
    img: "/images/remo.svg",
    aspect:"aspect-[141/64]"
  },
  {
    img: "/images/data-mellon.png",
    aspect:"aspect-[413/54]"
  },
]
const Partners = () => {
  return (
  <div className='bg-white w-full'>
          <h4 className='text-3xl text-center text-[#040404] mb-5 lg:text-5xl font-medium '>Partners</h4>
          <ContinuousScroll speed={200} imageClassName='h-[64px] w-full'  pauseOnHover items={images} />
    </div>
  )
}

export default Partners