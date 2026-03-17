import { HeroSection } from "@/components/HeroSection";
import { TopicsSection } from "@/components/TopicsSection";
import { BioSection } from "@/components/BioSection";
import { InstagramSection } from "@/components/InstagramSection";
import { FooterCTA } from "@/components/FooterCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <TopicsSection />
      <BioSection />
      <InstagramSection />
      <FooterCTA />
    </main>
  );
};

export default Index;
