'use client'
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react'

const FAQ = () => {
    const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      question: "What is FirstFounders (F2)?",
      answer: "FirstFounders (F2) is an AI-first venture studio and ecosystem collective that builds and backs early-stage, high-growth AI ventures across Africa. We offer end-to-end support to transform innovative ideas into successful businesses."
    },
    {
      question: "What is F2's mission?",
      answer: "To build, fund, and scale the transformative ideas of visionary African entrepreneurs into high-value AI-driven assets, driving successful acquisitions and generating significant returns while democratizing entrepreneurship and institutionalizing venture building in Africa."
    },
    {
      question: "What is F2's vision?",
      answer: "To cultivate a new wave of African entrepreneurs capable of building globally impactful and highly valued ventures, thereby enriching lives and the planet."
    },
    {
      question: "What type of ventures does F2 focus on?",
      answer: "We primarily focus on AI-driven tech ventures within the Fintech, Consumer, and Entertainment sectors in Africa."
    },
    {
      question: "How does F2 support early-stage startups?",
      answer: "We offer comprehensive, hands-on venture building through our FirstFounders Venture Studio Program (F2VS Program), which includes idea validation in our Venture Lab, extensive development in our Venture Studio with dedicated teams, and strategic investment."
    }
  ];
  

    const toggleItem = (index: number): void => {
        const newOpenItems = new Set<number>(openItems);
        if (newOpenItems.has(index)) {
            newOpenItems.delete(index);
        } else {
            newOpenItems.add(index);
        }
        setOpenItems(newOpenItems);
    };

  return (
      <div id="faq" className='bg-white py-10'>
          <h5 className='font-medium text-4xl text-center my-5 max-w-[729px] leading-[120%] text-[#040404] mx-auto  lg:text-6xl'>Frequently Asked Questions</h5>
          <div className="max-w-[1140px] mx-auto p-6 bg-white">
      <div className="space-y-0">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <div className="py-6">
              {/* Question Row */}
              <div 
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-xl font-medium text-gray-900 pr-8 group-hover:text-gray-700 transition-colors">
                  {item.question}
                </h3>
                <button 
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                  aria-label={openItems.has(index) ? "Collapse answer" : "Expand answer"}
                >
                  {openItems.has(index) ? (
                    <Icon icon="material-symbols:add" width="24" height="24" />
                  ) : (
                    <Icon icon="line-md:minus" width="24" height="24" />
                  )}
                </button>
              </div>

              {/* Answer */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(index) 
                    ? 'max-h-96 opacity-100 mt-4' 
                    : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <div className="text-gray-600 leading-relaxed pr-8">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default FAQ