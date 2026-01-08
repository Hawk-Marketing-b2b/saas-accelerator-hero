import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import MethodSection from "@/components/MethodSection";
import TrainingSection from "@/components/TrainingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LogosSection />
      <MethodSection />
      <TrainingSection />
    </div>
  );
};

export default Index;
