import { motion } from "framer-motion";
import palestrante from "@/assets/palestrante.jpg";
import { Award, Briefcase, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "R$1bi+", label: "Em receita gerada" },
  { icon: Briefcase, value: "20", label: "Anos de experiência" },
  { icon: Award, value: "500+", label: "Empresas atendidas" },
];

export const BioSection = () => (
  <section className="px-6 py-28 relative noise-overlay">
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg, transparent, hsl(280 80% 55% / 0.3), hsl(330 85% 60% / 0.3), transparent)" }}
    />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto relative z-10"
    >
      <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
        <div className="relative mx-auto md:mx-0">
          <div
            className="absolute -inset-4 rounded-full blur-xl opacity-50"
            style={{ background: "linear-gradient(135deg, hsl(280 80% 55% / 0.3), hsl(330 85% 60% / 0.2))" }}
          />
          <img
            src={palestrante}
            alt="Rhulian Marcus"
            className="relative w-40 h-40 rounded-full object-cover object-top"
            style={{
              filter: "contrast(1.1) brightness(0.9)",
              outline: "2px solid hsl(280 80% 55% / 0.4)",
              outlineOffset: "4px",
            }}
          />
        </div>

        <div>
          <span className="font-mono text-accent uppercase tracking-widest text-xs flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-accent" />
            Sobre o palestrante
          </span>
          <h3 className="text-foreground font-extrabold text-3xl mb-4">Rhulian Marcus</h3>
          <p className="text-muted-foreground leading-relaxed text-pretty text-lg mb-8">
            Com 20 anos de experiência em Marketing e Vendas Digitais, Rhulian Marcus é especialista em Growth Marketing B2B e fundador da <span className="text-foreground font-semibold">Hawk Marketing</span> — aceleradora com atuação no Brasil e nos EUA. Já ajudou empresas como <span className="text-foreground font-semibold">Bauducco, Danone, Unimed e Bionexo</span> a gerarem mais de R$1 bilhão em receita. Publicitário formado pela ESPM, com especialização na Miami Ad School, é referência em geração de demanda, integração entre Marketing e Vendas e estruturação de máquinas comerciais. Atuou também como CMO da fintech <span className="text-foreground font-semibold">Gloopay</span>, acelerada pela Cielo Pay e Grupo Boticário.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-4 text-center">
                <s.icon className="text-primary mx-auto mb-2" size={18} />
                <p className="text-foreground font-bold text-xl">{s.value}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
