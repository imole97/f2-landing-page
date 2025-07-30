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
    "/images/.png",
]
const AsSeenOn = () => {
  return (
      <div className='bg-white w-full py-10'>
          <h4 className='text-3xl text-center text-[#040404] lg:text-5xl font-medium '>As Seen On</h4>
          <ContinuousScroll speed={200} className='aspect-[304/54] w-full' pauseOnHover items={images} />
    </div>
  )
}

export default AsSeenOn