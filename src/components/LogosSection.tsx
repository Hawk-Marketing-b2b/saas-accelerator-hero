import { motion } from "framer-motion";
import rocketBg from "@/assets/rocket-bg.jpg";

const LogosSection = () => {
  // Placeholder logos - these would be replaced with actual client logos
  const logos = [
    "Logo 1",
    "Logo 2", 
    "Logo 3",
    "Logo 4",
    "Logo 5",
    "Logo 6",
    "Logo 7",
    "Logo 8",
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="pt-4 pb-16 px-4 bg-black">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl border border-white/10 backdrop-blur-[35px] p-16 md:p-20 lg:p-24 overflow-hidden"
        >
          {/* Rocket background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${rocketBg})` }}
          />
          
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              +400 empresas SaaS
            </h2>
            <p className="text-muted-foreground text-lg">
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
                  className="flex-shrink-0 flex items-center justify-center h-12 px-8 text-muted-foreground/50 font-medium whitespace-nowrap"
                >
                  {logo}
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
