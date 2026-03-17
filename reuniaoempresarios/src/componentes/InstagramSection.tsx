import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const INSTAGRAM_LINK = "https://www.instagram.com/rhulian";

export const InstagramSection = () => (
  <section className="px-6 py-20 relative noise-overlay">
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg, transparent, hsl(280 80% 55% / 0.3), hsl(330 85% 60% / 0.3), transparent)" }}
    />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto relative z-10"
    >
      <motion.a
        href={INSTAGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="group glass-card hover:glass-card-hover rounded-2xl p-8 md:p-10 flex items-center justify-between gap-6 transition-all duration-500 cursor-pointer block"
      >
        <div className="flex items-center gap-5">
          {/* Instagram icon */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: "linear-gradient(135deg, hsl(280 80% 55% / 0.25), hsl(330 85% 60% / 0.25))",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-accent">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
          <div>
            <p className="text-foreground font-bold text-lg md:text-xl">@rhulian</p>
            <p className="text-muted-foreground text-sm">Siga no Instagram para mais conteúdos exclusivos</p>
          </div>
        </div>

        <ArrowUpRight
          size={24}
          className="text-muted-foreground group-hover:text-accent transition-colors shrink-0"
        />
      </motion.a>
    </motion.div>
  </section>
);
