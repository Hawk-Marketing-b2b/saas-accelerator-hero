import { motion } from "framer-motion";
import allClientsGrid from "@/assets/clients/all-clients-grid-new.png";

const AllClientsSection = () => {
  return (
    <section className="py-4 md:py-6 px-4 bg-black">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Section Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center heading-gradient mb-4 md:mb-5">
            Alguns dos SaaS atendidos
          </h2>

          {/* Clients Grid Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src={allClientsGrid} 
              alt="Clientes SaaS atendidos: cVortex, Arco, SmartGo, Hakai, Bionexo, Nola, Recepção Inteligente, Jimmy Chat, Fretatech, Atomic Agro, aGrow, Fieldy, GEP Costdrivers, Ellevo, AtendeBot, Onlineclinic, MktZap, ISL Online, Doc24"
              className="w-full h-auto object-contain invert opacity-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllClientsSection;
