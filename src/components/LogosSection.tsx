import { motion } from "framer-motion";
import rocketBg from "@/assets/rocket-bg.jpg";

// Import client logos
import logoHakai from "@/assets/clients/logo-hakai.png";
import logoFretatech from "@/assets/clients/fretatech.webp";
import logoIslonline from "@/assets/clients/islonline.png";
import logoDoc24 from "@/assets/clients/doc24.png";
import logoBionexo from "@/assets/clients/bionexo.png";
import logoCostdrivers from "@/assets/clients/costdrivers.png";
import logoAgrow from "@/assets/clients/agrow.png";
import logoNola from "@/assets/clients/nola.png";
import logoCvortex from "@/assets/clients/cvortex.webp";
import logoMktzap from "@/assets/clients/mktzap.png";

const LogosSection = () => {
  const logos = [
    { src: logoHakai, alt: "Hakai" },
    { src: logoFretatech, alt: "Fretatech" },
    { src: logoIslonline, alt: "ISL Online" },
    { src: logoDoc24, alt: "Doc24" },
    { src: logoBionexo, alt: "Bionexo" },
    { src: logoCostdrivers, alt: "Costdrivers" },
    { src: logoAgrow, alt: "aGrow" },
    { src: logoNola, alt: "Nola" },
    { src: logoCvortex, alt: "cVortex" },
    { src: logoMktzap, alt: "MktZap" },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="pt-4 pb-[30px] md:pb-16 px-4 bg-black">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl border border-white/10 backdrop-blur-[35px] p-8 md:p-16 lg:p-24 overflow-hidden"
        >
          {/* Rocket background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${rocketBg})` }}
          />
          
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              +400 empresas SaaS
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg">
              que já aceleraram seu crescimento com nossa metodologia
            </p>
          </div>

          {/* Infinite carousel */}
          <div className="relative z-10 overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-scroll">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center h-12 px-10"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="h-6 md:h-7 max-w-[100px] md:max-w-[120px] w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogosSection;
