'use client'
import Container from '@/components/layout/Container';
import FileDownloadedModal from '@/components/modals/FileDownloadedModal';
import CustomImage from '@/components/ui/CustomImages';
import React, { useEffect } from 'react'

const Download = () => {
     useEffect(() => {
    const downloadPdf = () => {
      const link = document.createElement('a');
      link.href = `https://drive.google.com/uc?export=download&id=1m2TFLj2smaGvs8RpA-jcAVfucaD-oGFh`;
      link.download = 'file.pdf'; // Specify the file name for the downloaded file
      link.click();
    };

    downloadPdf();
  }, []);
  return (
    <section className='bg-[#0D102F]'>

    <Container className='flex justify-center pt-30 pb-10 '>
      <CustomImage
          className="aspect-[652/671] h-[652px] "
          src="/images/venture-book.png"
          alt="book"
          imgClassname="rounded-[20px]"
          />
          <FileDownloadedModal/>
    </Container>
          </section>
  )
}

export default Download
