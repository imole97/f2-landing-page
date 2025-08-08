import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import React, { useState } from 'react';
import CustomImage from '../ui/CustomImages';
type TProps = {
    onClose: () => void;
    isOpen:boolean
}
const ThankYouModal:React.FC<TProps> = ({onClose,isOpen}) => {
 
useBodyScrollLock(isOpen)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 text-center shadow-xl">
        <div className='flex justify-center'>

<CustomImage alt="mail" src="/images/mail.png" className='aspect-[160/160] h-[160px]'/>
        </div>
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-[#040404] mb-2 ">
          Thank You For<br />
          Downloading The F2<br />
          Insight Report
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8 text-base">
          Check your mail for your download
        </p>

        {/* Done Button */}
        <button
          onClick={onClose}
          className=" bg-yellow-400 w-fit hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal