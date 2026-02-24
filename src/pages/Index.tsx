import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QualificationSection from "@/components/QualificationSection";
import AuthoritySection from "@/components/AuthoritySection";
import ProblemSection from "@/components/ProblemSection";
import OutcomeSection from "@/components/OutcomeSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyUsSection from "@/components/WhyUsSection";
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
      <HowItWorksSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
