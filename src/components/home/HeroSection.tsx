import React from 'react'
import Container from '../layout/Container'
import CustomImage from '../ui/CustomImages'
import HeroContent from './HeroContent'

const HeroSection = () => {
  return (
      <section className='relative'>
          <CustomImage className='w-full aspect-[1440/930] h-[930px]' src="/images/hero-img.jpg" alt="hero-images"/>
      <div className="bg-[#000000CC]  absolute inset-0"></div>
      
      <HeroContent/>
    </section>
  )
}

export default HeroSection