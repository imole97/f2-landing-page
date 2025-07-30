import React from 'react'
import ContinuousScroll from '../ContinuousScroll'
const images = [
  {
    img: "/images/her-startup.png",
    aspect:"aspect-[145/64]"
  },
  {
    img: "/images/khalil.jpg",
    aspect:"aspect-[152/64]"
  },
  {
    img: "/images/nubia.png",
    aspect:"aspect-[312/64]"
  },
  {
    img: "/images/54co.jpg",
    aspect:"aspect-[177/64]"
  },
  {
    img: "/images/tomorrow.png",
    aspect:"aspect-[257/64]"
  },
  {
    img: "/images/impact.png",
    aspect:"aspect-[170/64]"
  },
]
const PortfolioInvestors = () => {
  return (
  <div className='bg-white py-10 w-full'>
          <h4 className='text-3xl text-center text-[#040404] mb-5 lg:text-5xl font-medium '>Portfolio Investors</h4>
          <ContinuousScroll speed={100} imageClassName='h-[64px] w-full'  pauseOnHover items={images} />
    </div>
  )
}

export default PortfolioInvestors