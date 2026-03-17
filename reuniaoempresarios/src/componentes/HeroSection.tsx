import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import palestrante from "@/assets/palestrante.jpg";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const HeroSection = () => (
  <section className="min-h-svh flex flex-col justify-center px-6 py-[10vh] relative overflow-hidden noise-overlay">
    {/* Ambient orbs */}
    <div
      className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl"
      style={{
        background: "radial-gradient(circle, hsl(280 80% 55% / 0.12) 0%, transparent 60%)",
      }}
    />
    <div
      className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none blur-3xl"
      style={{
        background: "radial-gradient(circle, hsl(330 85% 60% / 0.08) 0%, transparent 60%)",
      }}
    />
    {/* Grid lines */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage: "linear-gradient(hsl(280 80% 55% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(280 80% 55% / 0.3) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 items-center w-full relative z-10">
      <div className="col-span-12 lg:col-span-7 z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="font-mono text-accent uppercase tracking-widest text-xs">
            Live Exclusiva • Reunião com Empresários
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter mb-6 text-balance leading-[0.92]"
        >
          Reunião
          <br />
          <span className="gradient-text">com Empresários.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 text-pretty leading-relaxed"
        >
          Uma aula prática e sem filtros sobre como escalar seu negócio.
          Garanta sua vaga e receba o material de apoio no WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <WhatsAppButton />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Vagas counter */}
            <div className="glass-card rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="flex flex-col items-center">
                <span className="text-foreground font-bold text-2xl font-mono">4</span>
                <span className="text-muted-foreground text-[10px] uppercase tracking-wider">restantes</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-foreground text-sm font-bold">26 de 30 vagas preenchidas</p>
                <div className="w-full bg-muted rounded-full h-1.5 mt-1.5">
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: "86.6%",
                      background: "linear-gradient(90deg, hsl(280 80% 55%), hsl(330 85% 60%))",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease }}
        className="col-span-12 lg:col-span-5 relative mt-16 lg:mt-0 flex justify-center lg:justify-end"
      >
        <div className="relative">
          {/* Glow behind image */}
          <div
            className="absolute -inset-8 rounded-2xl blur-2xl opacity-60"
            style={{
              background: "linear-gradient(135deg, hsl(280 80% 55% / 0.2), hsl(330 85% 60% / 0.15))",
            }}
          />
          {/* Image frame */}
          <div className="relative rounded-2xl overflow-hidden" style={{ outline: "1px solid hsl(280 80% 55% / 0.2)", outlineOffset: "-1px" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent z-10" />
            <img
              src={palestrante}
              alt="Rhulian - Palestrante da Live"
              className="w-full max-w-md lg:max-w-lg object-cover"
              style={{
                filter: "contrast(1.1) brightness(0.85) saturate(0.9)",
              }}
            />
          </div>
          {/* Floating badge - Gratuito */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease }}
            className="absolute -bottom-4 -left-4 glass-card rounded-xl px-5 py-3 z-20"
            style={{ border: "1px solid hsl(280 80% 55% / 0.3)" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="text-accent font-extrabold text-base uppercase tracking-wide">100% Gratuita</p>
                <p className="text-muted-foreground text-xs">Apenas 30 vagas • Não perca!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);
