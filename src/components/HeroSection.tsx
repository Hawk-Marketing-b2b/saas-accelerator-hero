import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import StatCard from "./StatCard";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const stats = [
    { value: "+20", label: "anos de mercado" },
    { value: "+400", label: "softwares acelerados" },
    { value: "+730M", label: "em receita gerada" },
  ];

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/8 blur-3xl animate-subtle-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl animate-subtle-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-subtle-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm opacity-0 animate-fade-up"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <span className="text-sm font-medium text-muted-foreground">
              O maior ecossistema de vendas para SaaS
            </span>
            <Button variant="ghost" size="sm" className="h-7 px-3 text-xs font-semibold bg-background/80 hover:bg-background text-foreground rounded-full">
              Saiba mais →
            </Button>
          </div>

          {/* Headline */}
          <div 
            className="space-y-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
              Acelere as Vendas do seu{" "}
              <span className="text-gradient">SaaS</span>
            </h1>
            <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground/90">
              e Domine o Mercado
            </p>
          </div>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            Geramos demanda qualificada para empresas de software B2B com uma metodologia validada em mais de{" "}
            <strong className="text-foreground">400 projetos</strong> e{" "}
            <strong className="text-foreground">20 anos</strong> de experiência.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => setIsFormOpen(true)}
            >
              Quero Acelerar Meu SaaS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Ver como funciona
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
          >
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={600 + index * 100}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border/50 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-bold text-center">
              Fale com um Especialista
            </DialogTitle>
            <p className="text-muted-foreground text-sm text-center">
              Receba um diagnóstico estratégico gratuito
            </p>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsFormOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
