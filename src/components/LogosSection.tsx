import { motion } from "framer-motion";

const LogosSection = () => {
  // Placeholder logos - these would be replaced with actual client logos
  const logos = [
    "Logo 1",
    "Logo 2", 
    "Logo 3",
    "Logo 4",
    "Logo 5",
    "Logo 6",
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/10 backdrop-blur-[35px] p-8 md:p-12 overflow-hidden"
        >
          {/* Radial gradient background */}
          <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_-50%,#6366f136_40%,transparent_100%)]" />
          
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              +400 empresas SaaS
            </h2>
            <p className="text-muted-foreground text-lg">
              que já aceleraram seu crescimento com nossa metodologia
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center h-12 px-4 text-muted-foreground/50 font-medium"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogosSection;
