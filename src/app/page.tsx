import ContinuousScroll from "@/components/ContinuousScroll";
import BookSession from "@/components/home/BookSession";
import ClientPortfolio from "@/components/home/ClientPortfolio";
import FAQ from "@/components/home/FAQ";
import HeroSection from "@/components/home/HeroSection";
import JoinCommunity from "@/components/home/JoinCommunity";
import Newsletter from "@/components/home/Newsletter";
import OurTeam from "@/components/home/OurTeam";
import Portfolio from "@/components/home/Portfolio";
import Statistics from "@/components/home/Statistics";
import Testimonial from "@/components/home/Testimonial";
import WhyWeExist from "@/components/home/WhyWeExist";
import WhyWeStandout from "@/components/home/WhyWeStandout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="bg-[#0D102F]  border-t-2 border-[#FFBB00] w-full">
        <ContinuousScroll speed={200}  pauseOnHover items={["We are enabling founders to build boldy; build better and build for tomorrow."] } />
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
      <Testimonial />
      <FAQ/>
    </>
  );
}
