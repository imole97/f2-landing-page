import React from 'react'
import ContinuousScroll from '../ContinuousScroll'
const images=[
    {img:"/images/tech-econ.png",aspect:"aspect-[291/64]"},
    {img:"/images/havard.png",aspect:"aspect-[64/64]"},
   {img: "/images/business-day.png",aspect:"aspect-[304/64]"},
   {img: "/images/firstbase.png",aspect:"aspect-[247/64]"},
   {img: "/images/startup-studio.png",aspect:"aspect-[114/64]"},
   {img: "/images/technext.png",aspect:"aspect-[298/64]"},
   {img: "/images/condia.png",aspect:"aspect-[304/64]"},
    {img:"/images/machine-lab.png",aspect:"aspect-[313/64]"},
   {img: "/images/top-ten.jpg",aspect:"aspect-[64/64]"},
   {img: "/images/thisday.png",aspect:"aspect-[288/64]"},
   {img: "/images/techcabal.png",aspect:"aspect-[286/64]"},
   {img: "/images/studio.jpg",aspect:"aspect-[173/64]"},
  
]
const AsSeenOn = () => {
  return (
      <div className='bg-white w-full pt-20 pb-10'>
          <h4 className='text-3xl text-center text-[#040404] mb-5 lg:text-5xl font-medium '>As Seen On</h4>
          <ContinuousScroll speed={200} imageClassName='h-[64px] w-full'  pauseOnHover items={images} />
    </div>
  )
}

export default AsSeenOn