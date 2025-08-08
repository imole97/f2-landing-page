import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import React, { useState } from 'react';
import CustomImage from '../ui/CustomImages';
import { Download } from 'lucide-react';
import { useRouter } from 'next/navigation';
type TProps = {
    onClose: () => void;
    isOpen:boolean
}
const FileDownloadedModal = () => {
 const {push} = useRouter()
useBodyScrollLock(true)


  return (
    <div className="fixed inset-0 overflow-y-auto bg-black opacity-95 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 text-center shadow-xl">
        <div className='flex justify-center'>

                
        </div>
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-[#040404] mb-2 ">
          Thank You For<br />
          Downloading The F2<br />
          Insight Report
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8 text-base">
          Check your downloads file.
        </p>

        {/* Done Button */}
        <button
        onClick={()=> push("/")}
          className=" bg-yellow-400 w-fit hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default FileDownloadedModal