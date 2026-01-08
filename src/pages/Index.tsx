import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import MethodSection from "@/components/MethodSection";
import TrainingSection from "@/components/TrainingSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LogosSection />
      <MethodSection />
      <TrainingSection />
      <ComparisonSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
