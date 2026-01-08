import { motion } from "framer-motion";

const MethodSection = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            O Método Acelera SaaS
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Um funil de transformação validado em mais de 400 projetos SaaS
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
