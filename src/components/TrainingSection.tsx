import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Heart, BookOpen, Award, Zap, BarChart3, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import ShinyButton from "./ui/shiny-button";

const commercialFeatures = [
  "Script de vendas estratégico",
  "Técnicas de negociação SaaS",
  "Gestão de pipeline e forecast",
  "Qualificação de leads (BANT/SPIN)",
];

const csFeatures = [
  "Onboarding de clientes",
  "Health Score e alertas",
  "Estratégias de upsell/cross-sell",
  "Redução de churn",
];

const stats = [
  { icon: BookOpen, value: "400+ projetos", label: "Metodologia própria" },
  { icon: Award, value: "Incluída", label: "Certificação" },
  { icon: Zap, value: "90 dias", label: "Resultados em" },
  { icon: BarChart3, value: "+45% conversão", label: "Aumento médio" },
];

const TrainingSection = () => {
  const [isCommercialDialogOpen, setIsCommercialDialogOpen] = useState(false);
  const [isCsDialogOpen, setIsCsDialogOpen] = useState(false);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Gradient Background with Blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0707ed]/10 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0707ed]/20 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0707ed]/30 bg-[#0707ed]/10 mb-6">
            <Target className="w-4 h-4 text-[#0707ed]" />
            <span className="text-sm text-[#0707ed]">Capacitação de Equipes</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Treinamento{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0707ed] to-purple-500">
              Comercial & CS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme seu time em uma máquina de vendas e retenção com nossa metodologia validada
          </p>
        </motion.div>

        {/* Training Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {/* Commercial Training Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0707ed]/15 border border-[#0707ed]/30 flex items-center justify-center">
                <Target className="w-5 h-5 text-[#0707ed]" />
              </div>
              <div>
                <span className="text-xs text-[#0707ed] uppercase tracking-wider font-medium">
                  Para Times de Vendas
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  Treinamento Comercial
                </h3>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Capacitamos seu time comercial com técnicas avançadas de vendas consultivas específicas para software B2B.
            </p>

            <ul className="space-y-3 mb-6">
              {commercialFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#0707ed]" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <ShinyButton onClick={() => setIsCommercialDialogOpen(true)} className="w-full">
              Aumente a sua conversão
              <ArrowRight className="w-5 h-5 ml-2" />
            </ShinyButton>
          </div>

          {/* CS Training Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
                <Heart className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <span className="text-xs text-purple-400 uppercase tracking-wider font-medium">
                  Customer Success
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  Treinamento CS
                </h3>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Transformamos seu time de CS em especialistas em retenção e expansão de receita.
            </p>

            <ul className="space-y-3 mb-6">
              {csFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <ShinyButton onClick={() => setIsCsDialogOpen(true)} className="w-full">
              Aumente o seu LTV
              <ArrowRight className="w-5 h-5 ml-2" />
            </ShinyButton>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-5 h-5 text-[#0707ed]" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Commercial Dialog */}
      <Dialog open={isCommercialDialogOpen} onOpenChange={setIsCommercialDialogOpen}>
        <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-lg border-white/10">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground">
              Treinamento Comercial
            </DialogTitle>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsCommercialDialogOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* CS Dialog */}
      <Dialog open={isCsDialogOpen} onOpenChange={setIsCsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-lg border-white/10">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground">
              Treinamento CS
            </DialogTitle>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsCsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TrainingSection;