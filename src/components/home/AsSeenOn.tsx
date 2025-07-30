import React from 'react'
import ContinuousScroll from '../ContinuousScroll'
const images=[
    "/images/tech-econ.png",
    "/images/havard.png",
    "/images/business-day.png",
    "/images/firstbase.png",
    "/images/startup-studio.png",
    "/images/technext.png",
    "/images/condia.png",
    "/images/machine-lab.png",
    "/images/top-ten.jpg",
    "/images/thisday.png",
    "/images/techcabal.png",
    "/images/studio.jpg",
  
]
const AsSeenOn = () => {
  return (
      <div className='bg-white w-full py-10'>
          <h4 className='text-3xl text-center text-[#040404] lg:text-5xl font-medium '>As Seen On</h4>
          <ContinuousScroll speed={200} imageClassName='aspect-[304/54] flex-1 !object-contain w-full' pauseOnHover items={images} />
    </div>
  )
}

export default AsSeenOn