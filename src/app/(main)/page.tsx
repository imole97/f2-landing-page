"use client";
import ContinuousScroll from "@/components/ContinuousScroll";
import AsSeenOn from "@/components/home/AsSeenOn";
import AwardRecognition from "@/components/home/AwardRecognition";
import BookSession from "@/components/home/BookSession";
import ClientPortfolio from "@/components/home/ClientPortfolio";
import HeroSection from "@/components/home/HeroSection";
import JoinCommunity from "@/components/home/JoinCommunity";
import Newsletter from "@/components/home/Newsletter";
import OurTeam from "@/components/home/OurTeam";
import Partners from "@/components/home/Partners";
import Portfolio from "@/components/home/Portfolio";
import PortfolioInvestors from "@/components/home/PortfolioInvestors";
import Statistics from "@/components/home/Statistics";
import Testimonial from "@/components/home/Testimonial";
import WhyWeExist from "@/components/home/WhyWeExist";
import WhyWeStandout from "@/components/home/WhyWeStandout";
// Page-level animations removed; we'll animate inside components instead
import Faq from "@/components/home/FAQ";
import DownloadModal from "@/components/modals/DownloadModal";
import { useEffect, useState } from "react";
export default function Home() {
  const [showdownload, setShowdownload] = useState(false);
  useEffect(() => {
    setShowdownload(true);
  }, []);
  return (
    <>
      <HeroSection />
      <div className="bg-[#0D102F]  border-t-2 border-[#FFBB00] w-full">
        <ContinuousScroll
          speed={50}
          pauseOnHover
          items={[
            "We are enabling founders to build boldy; build better and build for tomorrow.",
          ]}
        />
      </div>
      <Statistics />
      <WhyWeExist />
      <Portfolio />
      <ClientPortfolio />
      <WhyWeStandout />
      <Newsletter />
      <JoinCommunity />
      <OurTeam />
      <BookSession />
      <AsSeenOn />
      <Partners />
      <PortfolioInvestors />
      <AwardRecognition />
      <Testimonial />
      <Faq />
      {showdownload ? (
        <DownloadModal
          isOpen={showdownload}
          onClose={() => setShowdownload(false)}
        />
      ) : null}
    </>
  );
}
