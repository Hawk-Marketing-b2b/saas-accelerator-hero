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
      {/* SERVICES SLIDER */}
      <section id="servicos" className="relative px-6 py-24 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground mb-6">
              Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold heading-gradient mb-4">
              Tudo que seu SaaS precisa para crescer
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Do marketing à automação — soluções integradas para acelerar suas vendas B2B.
            </p>
          </div>

          {/* Slider */}
          {(() => {
            const services = [
              {
                icon: TrendingUp,
                title: "Inbound Marketing",
                desc: "Atraia leads qualificados com estratégias de conteúdo, SEO e nutrição que geram demanda previsível para o seu SaaS.",
                href: "/inbound-marketing",
              },
              {
                icon: Target,
                title: "Performance",
                desc: "Campanhas de mídia paga otimizadas para CAC baixo e alto retorno. Google, Meta e LinkedIn com foco em resultado B2B.",
                href: "/performance",
              },
              {
                icon: Monitor,
                title: "Web Design",
                desc: "Sites e landing pages de alta conversão, pensados para o mercado SaaS. Design que vende, não só impressiona.",
                href: "/web-design",
              },
              {
                icon: Users,
                title: "Vendas",
                desc: "Estruture seu processo comercial com metodologia, playbooks e treinamento para fechar mais contratos recorrentes.",
                href: "/vendas",
              },
              {
                icon: Briefcase,
                title: "Comercial",
                desc: "Construção e gestão de times de vendas, SDR e CS para empresas SaaS que querem escalar com previsibilidade.",
                href: "/comercial",
              },
              {
                icon: Zap,
                title: "IA e Automação",
                desc: "Automatize processos, qualifique leads e escale operações com inteligência artificial aplicada ao contexto B2B SaaS.",
                href: "/ia-e-automacao",
              },
            ];

            const [active, setActive] = React.useState(0);

            const prev = () => setActive((i) => (i === 0 ? services.length - 1 : i - 1));
            const next = () => setActive((i) => (i === services.length - 1 ? 0 : i + 1));

            const getIndex = (offset: number) =>
              (active + offset + services.length) % services.length;

            return (
              <div className="relative flex items-center justify-center gap-4">
                {/* Left arrow */}
                <button
                  onClick={prev}
                  className="shrink-0 z-10 grid size-12 place-items-center rounded-full border border-border/60 bg-card/60 text-muted-foreground backdrop-blur transition-all duration-200 hover:border-primary/60 hover:text-foreground hover:scale-110"
                >
                  <ChevronLeft className="size-5" />
                </button>

                {/* Cards */}
                <div className="flex items-center gap-4 w-full max-w-4xl py-4">
                  {[-1, 0, 1].map((offset) => {
                    const s = services[getIndex(offset)];
                    const isCenter = offset === 0;
                    const Icon = s.icon;
                    return (
                      <a
                        key={getIndex(offset)}
                        href={s.href}
                        className={`flex-1 min-w-0 card-glass rounded-2xl p-7 flex flex-col gap-4 transition-all duration-500 cursor-pointer
                          ${isCenter
                            ? "scale-105 border-primary/40 shadow-[0_4px_40px_-4px_hsl(283_76%_54%_/_0.35)] opacity-100"
                            : "scale-95 opacity-50 hover:opacity-70"
                          }`}
                      >
                        <div className={`grid size-12 place-items-center rounded-xl transition-all duration-300
                          ${isCenter ? "bg-gradient-button shadow-button" : "bg-muted/60"}`}>
                          <Icon className={`size-5 ${isCenter ? "text-primary-foreground" : "text-muted-foreground"}`} />
                        </div>
                        <div>
                          <h3 className={`font-display text-lg font-semibold mb-2 ${isCenter ? "text-foreground" : "text-muted-foreground"}`}>
                            {s.title}
                          </h3>
                          <p className={`text-sm leading-relaxed ${isCenter ? "text-muted-foreground" : "text-muted-foreground/50"}`}>
                            {s.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Right arrow */}
                <button
                  onClick={next}
                  className="shrink-0 z-10 grid size-12 place-items-center rounded-full border border-border/60 bg-card/60 text-muted-foreground backdrop-blur transition-all duration-200 hover:border-primary/60 hover:text-foreground hover:scale-110"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            );
          })()}
        </div>
      </section>
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
