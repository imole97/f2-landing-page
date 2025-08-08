'use client'
import React, { useEffect } from 'react'

const Download = () => {
     useEffect(() => {
    const downloadPdf = () => {
      const link = document.createElement('a');
      link.href = `https://drive.google.com/uc?export=download&id=1Uggoj-AlJRDTHifJjqnug9tfTNXHkPQt`;
      link.download = 'file.pdf'; // Specify the file name for the downloaded file
      link.click();
    };

    downloadPdf();
  }, []);
  return (
    <div>Download</div>
  )
}

export default Download