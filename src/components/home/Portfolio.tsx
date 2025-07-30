import React from "react";
import Container from "../layout/Container";
import CustomImage from "../ui/CustomImages";
import Link from "next/link";
const portfolio = [
  {
    userImg: "/images/payafta-user.png",
    logo: "/images/payafta-logo.png",
    appName: "PayAfta",
    appUrl: "www.getpayafta.com",
    appDescription: "AI-Powered digital escrow platform",
  },
  {
    userImg: "/images/pocker-user.png",
    logo: "/images/pocket-logo.png",
    appName: "PocketLawyers",
    appUrl: "www.pocketlawyers.io",
    appDescription:
      "AI-powered productivity and communication tool for Lawyers",
  },
  {
    userImg: "/images/idx-user.png",
    logo: "/images/idx-logo.png",
    appName: "IDx",
    appUrl: "www.useidx.com",
    appDescription: "A Reusable Digital Identity Platform",
  },
  {
    userImg: "/images/fleek-user.png",
    logo: "/images/fleek-logo.png",
    appName: "FleekStar",
    appUrl: "www.fleekstar.com",
    appDescription: "AI-powered social marketing platform ",
  },
  {
    userImg: "/images/korin-user.png",
    logo: "/images/korin-logo.png",
    appName: "Korin AI",
    appUrl: "www.usekorinai.com",
    appDescription: "Africa's first AI Music Lab",
  },
  {
    userImg: "/images/zuri-user.png",
    logo: "/images/zuri-logo.png",
    appName: "Zurri AI",
    appUrl: null,
    appDescription: "An AI agents and models market place",
  },
];
const Portfolio = () => {
  return (
    <div className="bg-[#0D102F] py-10">
      <Container className="">
        <div className="flex justify-center">

      <div id="portfolio-companies" className="bg-[#FFBB00]  justify-center py-2 px-4 rounded-full text-[#040404] font-medium">
      
        Portfolio Companies
      </div>
        </div>
      <h4 className="max-w-[580px] text-5xl mx-auto font-medium mt-3 mb-18 leading-[120%] text-center">
        Backing Africa&#39;s Next Generation Of Builders
      </h4>
      <div className="flex flex-col sm:grid-cols-2 sm:grid gap-5 lg:grid-cols-3">
        {portfolio.map((item) => (
          <div 
          key={item.appName} 
          className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
              {/* User Image Section */}
              <div className="bg-[#EBFAFA] h-[200px] flex  justify-center overflow-hidden">
                <CustomImage
                  alt={item.appName}
                  src={item.userImg}
                  quality={100}
                  className="aspect-[245/368] h-[320px] w-auto"
                  />
              </div>
              
              {/* Content Section */}
              <div className="p-5 text-left">
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <CustomImage
                      alt={`${item.appName} logo`}
                      src={item.logo}
                      className="aspect-[52/52] w-full h-[52px]"
                      />
                  </div>
                  
                  {/* App Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#040404] font-semibold text-lg mb-1">
                      {item.appName}
                    </h3>
                    
                    {item.appUrl && (
                      <Link 
                      target="_blank" 
                      className="text-[#29A3A3] text-sm hover:underline block mb-2" 
                      href={`https://${item.appUrl}`}
                      >
                        {item.appUrl}
                      </Link>
                    )}
                    
                    <p className="text-[#666666] text-sm leading-relaxed">
                      {item.appDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </Container>
        </div>
  );
};

export default Portfolio;
