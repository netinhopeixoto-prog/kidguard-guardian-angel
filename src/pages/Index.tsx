import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CTASection from "@/components/CTASection";
import ProofSection from "@/components/ProofSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <CTASection />
      <ProofSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
