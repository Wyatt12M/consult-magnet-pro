import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QualificationSection from "@/components/QualificationSection";
import AuthoritySection from "@/components/AuthoritySection";
import ProblemSection from "@/components/ProblemSection";
import OutcomeSection from "@/components/OutcomeSection";
import ResultsSection from "@/components/ResultsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import WhyUsSection from "@/components/WhyUsSection";
import FounderSection from "@/components/FounderSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QualificationSection />
      <AuthoritySection />
      <ProblemSection />
      <OutcomeSection />
      <ResultsSection />
      <HowItWorksSection />
      <FAQSection />
      <WhyUsSection />
      <FounderSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
