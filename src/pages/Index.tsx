import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import AllClientsSection from "@/components/AllClientsSection";
import StatsSection from "@/components/StatsSection";
import MethodSection from "@/components/MethodSection";
import TrainingSection from "@/components/TrainingSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LogosSection />
      <AllClientsSection />
      <StatsSection />
      <MethodSection />
      <TrainingSection />
      <ComparisonSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
