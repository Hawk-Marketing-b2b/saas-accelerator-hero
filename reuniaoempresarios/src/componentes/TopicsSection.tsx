import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const topics: { icon: LucideIcon; title: string; desc: string; color: string }[] = [
  { icon: Target, title: "Estratégias de Crescimento", desc: "Métodos validados para escalar receita com previsibilidade.", color: "280 80% 55%" },
  { icon: TrendingUp, title: "Gestão Financeira", desc: "Como organizar as finanças do seu negócio para lucrar mais.", color: "330 85% 60%" },
  { icon: Users, title: "Liderança e Equipe", desc: "Construa um time que executa sem depender 100% de você.", color: "280 80% 55%" },
  { icon: Zap, title: "Mentalidade Empresarial", desc: "O mindset que separa empresários medianos dos excepcionais.", color: "330 85% 60%" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export const TopicsSection = () => (
  <section className="px-6 py-28 relative noise-overlay">
    {/* Ambient orb */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl"
      style={{ background: "radial-gradient(circle, hsl(280 80% 55% / 0.06) 0%, transparent 60%)" }}
    />

    <div className="max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="font-mono text-accent uppercase tracking-widest text-xs inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-px bg-accent" />
          Conteúdo da Live
          <span className="w-8 h-px bg-accent" />
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-balance">
          O que você vai <span className="gradient-text">aprender</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-5"
      >
        {topics.map((t, i) => (
          <motion.div
            key={t.title}
            variants={item}
            className="group glass-card hover:glass-card-hover rounded-xl p-7 transition-all duration-500 cursor-default"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, hsl(${t.color} / 0.2), hsl(${t.color} / 0.05))`,
              }}
            >
              <t.icon className="text-primary" size={22} style={i % 2 !== 0 ? { color: "hsl(330 85% 60%)" } : {}} />
            </div>
            <h3 className="text-foreground font-bold text-lg mb-2">{t.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
