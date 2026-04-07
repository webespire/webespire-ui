import Image from 'next/image';
import HeroSection from '@/components/home/hero-section';
import Footer from '@/components/footer';
import { AboutSection, ServicesSection } from '@/components/home/services-section';
import IndustryServeSection from '@/components/home/industryServe-section';
import TechnoCraftingSection from '@/components/home/technoCrafting-section';
import CaseStudySection from '@/components/home/caseStudy-section';
import DevelopmentSection from '@/components/home/development-section';
import ExploreOffshoreSection from '@/components/home/exploreOffshore-section';
import AskQuestion from '@/components/home/askQuestion-section';
import GetInTouchSection from '@/components/home/getInTouch-section';
import { infoData } from '@/lib/homePageData';



export default function Home() {
  return (
    <main className="mx-auto space-y-10">
      {/* hero section */}
      <HeroSection />

      {/* services and solution section */}
      <ServicesSection children={<div className="flex items-stretch mb-10 rounded-lg overflow-hidden gap-1">
        <div className="bg-primary px-4 py-3 flex items-center justify-center">
          <Image
            src="/setting-icon.svg"
            alt=""
            aria-hidden="true"
            width={22}
            height={22}
          />
        </div>
        <h2 className="bg-primary text-white text-sm sm:text-base md:text-lg font-semibold px-6 py-3 border-l border-white/20 flex items-center">
          Our Offshore Services/Solutions
        </h2>
      </div>} data={infoData} />
      <AboutSection />

      {/* Industries serve today section */}
      <IndustryServeSection />

      {/* Technology Crafting Section */}
      <TechnoCraftingSection />

      {/* Case Study Section */}
      <CaseStudySection />

      {/* Development Process */}
      <DevelopmentSection />

      {/* Explore Latest Offshore */}
      <ExploreOffshoreSection />

      {/* Frequently Asked Questions */}
      <AskQuestion />

      {/* Get in Touch */}
      <GetInTouchSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
