import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    id: "diagnostico",
    label: "Diagnóstico e Estratégia",
    content: "Conteúdo de Diagnóstico e Estratégia será inserido aqui.",
  },
  {
    id: "demanda",
    label: "Geração de Demanda",
    content: "Conteúdo de Geração de Demanda será inserido aqui.",
  },
  {
    id: "otimizacao",
    label: "Otimização da Máquina de Vendas",
    content: "Conteúdo de Otimização da Máquina de Vendas será inserido aqui.",
  },
  {
    id: "retencao",
    label: "Retenção e Expansão (LTV)",
    content: "Conteúdo de Retenção e Expansão (LTV) será inserido aqui.",
  },
];

const MethodSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            O Método Acelera SaaS
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Um funil de transformação validado em mais de 400 projetos SaaS
          </p>
        </motion.div>

        {/* Tabs Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-6"
        >
          {/* Tab Buttons - Lateral on desktop, stacked on mobile */}
          <div className="flex flex-col gap-3 lg:w-72 shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-6 py-4 rounded-2xl border transition-all duration-300 ${
                  activeTab === tab.id
                    ? "border-white/30 bg-[#0707ed]/40 backdrop-blur-[35px] text-foreground"
                    : "border-white/10 bg-transparent text-muted-foreground hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Box - Same style as LogosSection */}
          <div className="flex-1 rounded-3xl border border-white/10 backdrop-blur-[35px] p-8 md:p-12 min-h-[300px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {activeContent?.label}
              </h3>
              <p className="text-muted-foreground text-lg">
                {activeContent?.content}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
