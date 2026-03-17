import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";

export const FooterCTA = () => (
  <section className="px-6 py-28 relative noise-overlay overflow-hidden">
    {/* Gradient divider */}
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg, transparent, hsl(280 80% 55% / 0.3), hsl(330 85% 60% / 0.3), transparent)" }}
    />

    {/* Background orbs */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl"
      style={{ background: "radial-gradient(circle, hsl(280 80% 55% / 0.1) 0%, transparent 60%)" }}
    />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto text-center relative z-10"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="glass-card rounded-3xl p-12 md:p-16 glow-purple"
      >
        <span className="font-mono text-accent uppercase tracking-widest text-xs mb-6 block">
          Última chance
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-4 text-balance">
          Não fique <span className="gradient-text">de fora.</span>
        </h2>
        <p className="text-muted-foreground mb-10 text-lg max-w-md mx-auto">
          As vagas são limitadas. Garanta seu lugar agora no grupo VIP do WhatsApp.
        </p>
        <WhatsAppButton />
      </motion.div>
    </motion.div>

    <div className="max-w-5xl mx-auto mt-20 pt-8 text-center relative z-10">
      <div
        className="h-px mb-8"
        style={{ background: "linear-gradient(90deg, transparent, hsl(270 12% 22%), transparent)" }}
      />
      <p className="text-muted-foreground text-xs font-mono tracking-wider">
        © {new Date().getFullYear()} • Reunião com Empresários
      </p>
    </div>
  </section>
);
