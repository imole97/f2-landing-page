import React from 'react'
import Container from '../layout/Container'
import CustomImage from '../ui/CustomImages'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

const BookSession = () => {
  return (
      <div className='bg-white'>
          <Container>
              <div className='bg-[#EBECF9] grid gap-15 lg:grid-cols-2 rounded-[60px] p-10'>
                  <CustomImage imgClassname='rounded-[20px]' src="/images/ceo-sitting.jpg" alt="ceo" className='aspect-[548/473]'/>
               <div className="flex min-w-0 space-y-5 flex-col">
                          <p className="text-5xl lg:text-6xl font-bold text-[#040404]">Ready To Build Your Audacious AI-First Venture With Us?</p>
                          <p className="text-xl text-[#040404]">
                           Ready to build your audacious AI-first venture with us? From ideation to launch and growth, we provide end-to-end, hands-on venture building support to bring your bold AI or Startup vision to life.
                          </p>
                          <Link target='_blank' href="https://calendly.com/thefirstfounders/60min"  className="bg-[#040404] mt-10 items-center py-3.5 px-5 w-fit text-white rounded-full flex gap-2">
                            <span>Book A Clarity Session</span>
                            <Icon
                              icon="material-symbols:arrow-forward-rounded"
                              width="16"
                              height="16"
                            />
                          </Link>
                                </div>
              </div>
          </Container>
    </div>
  )
}

export default BookSession