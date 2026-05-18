import { TrendingUp, Target, Monitor, Users, Briefcase, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Inbound Marketing",
    description:
      "Atraia leads qualificados com estratégias de conteúdo, SEO e nutrição que geram demanda previsível para o seu SaaS.",
  },
  {
    icon: Target,
    title: "Performance",
    description:
      "Campanhas de mídia paga otimizadas para CAC baixo e alto retorno. Google, Meta e LinkedIn com foco em resultado B2B.",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Sites e landing pages de alta conversão, pensados para o mercado SaaS. Design que vende, não só impressiona.",
  },
  {
    icon: Users,
    title: "Vendas",
    description:
      "Estruture seu processo comercial com metodologia, playbooks e treinamento para fechar mais contratos recorrentes.",
  },
  {
    icon: Briefcase,
    title: "Comercial",
    description:
      "Construção e gestão de times de vendas, SDR e CS para empresas SaaS que querem escalar com previsibilidade.",
  },
  {
    icon: Zap,
    title: "IA e Automação",
    description:
      "Automatize processos, qualifique leads e escale operações com inteligência artificial aplicada ao contexto B2B SaaS.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(283_76%_54%_/_0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm">
            <span className="text-sm text-muted-foreground">Nossos Serviços</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold heading-gradient mb-4">
          Tudo que seu SaaS precisa para crescer
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mb-16 mx-auto">
          Do marketing à automação — soluções integradas para acelerar suas vendas B2B.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-glass rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 hover:shadow-[0_4px_24px_-4px_hsl(283_76%_54%_/_0.2)] transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-auto ml-auto" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
