'use client'
import InsightReportForm from '@/components/form/InsightForm'
import Container from '@/components/layout/Container'
import React from 'react'

const Contact = () => {
  return (
      <Container className='bg-[#0D102F]  pt-36'>
          <div className='bg-[#F4F4F533] flex gap-10 items-center rounded-[30px] p-6'>
              <div className='space-y-5  w-full'>
                  <p className='text-5xl font-bold'>Let’s stay connected</p>
                  <p className='text-2xl'> Write a short paragraph for inquries about your product. Also inform about how long the users can expect before you reply</p>

              </div>
              <InsightReportForm className='w-full'/>
          </div>
    </Container>
  )
}

export default Contact