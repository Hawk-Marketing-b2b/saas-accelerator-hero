import { motion } from "framer-motion";
import allClientsGrid from "@/assets/clients/all-clients-grid.png";

const AllClientsSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-10 md:mb-14">
            Alguns dos SaaS atendidos
          </h2>

          {/* Clients Grid Image */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white p-8 md:p-12">
            <img 
              src={allClientsGrid} 
              alt="Clientes SaaS atendidos: cVortex, Arco, SmartGo, Hakai, Bionexo, Nola, Recepção Inteligente, Jimmy Chat, Fretatech, Atomic Agro, aGrow, Fieldy, GEP Costdrivers, Ellevo, AtendeBot, Onlineclinic, MktZap, ISL Online, Doc24"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllClientsSection;
