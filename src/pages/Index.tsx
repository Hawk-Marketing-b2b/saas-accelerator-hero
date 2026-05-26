import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Monitor, Briefcase, Users, Zap, Target, TrendingUp, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
      <ServicesSection />
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
