import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "./StatCard";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const stats = [
    { value: "+20", label: "anos de mercado" },
    { value: "+400", label: "softwares acelerados" },
    { value: "+730M", label: "em receita gerada" },
  ];

  return (
    <section className="hero-gradient min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl animate-subtle-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl animate-subtle-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 opacity-0 animate-fade-up"
              style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-subtle-pulse" />
              <span className="text-sm font-medium text-primary">
                O maior ecossistema de vendas para SaaS
              </span>
            </div>

            {/* Headline */}
            <div 
              className="space-y-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Acelere as Vendas do seu{" "}
                <span className="text-gradient">SaaS</span>
                {" "}e Domine o Mercado
              </h1>
            </div>

            {/* Description */}
            <p 
              className="text-lg text-muted-foreground leading-relaxed max-w-xl opacity-0 animate-fade-up"
              style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
            >
              Geramos demanda qualificada para empresas de software B2B com uma metodologia validada em mais de{" "}
              <strong className="text-foreground">400 projetos</strong> e{" "}
              <strong className="text-foreground">20 anos</strong> de experiência.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  delay={500 + index * 100}
                />
              ))}
            </div>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
            >
              <Button variant="hero" size="xl" className="group">
                Quero Acelerar Meu SaaS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Ver como funciona
              </Button>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="lg:pl-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
