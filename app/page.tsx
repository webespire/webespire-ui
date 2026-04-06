import HeroSection from '@/components/home/hero-section';
import Footer from '@/components/footer';
import ServicesSection from '@/components/home/services-section';
import IndustryServeSection from '@/components/home/industryServe-section';
import TechnoCraftingSection from '@/components/home/technoCrafting-section';
import CaseStudySection from '@/components/home/caseStudy-section';
import DevelopmentSection from '@/components/home/development-section';
import ExploreOffshoreSection from '@/components/home/exploreOffshore-section';
import AskQuestion from '@/components/home/askQuestion-section';
import GetInTouchSection from '@/components/home/getInTouch-section';


export default function Home() {
  return (
    <main className="mx-auto space-y-10">
      {/* hero section */}
      <HeroSection />

      {/* services and solution section */}
      <ServicesSection />

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
