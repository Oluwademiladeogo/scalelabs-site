import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";

import ROICalculator from "@/components/ROICalculator";
import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import DemoSection from "@/components/DemoSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />

        <ROICalculator />
        <SocialProofSection />
        <PricingSection />
        <DemoSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
