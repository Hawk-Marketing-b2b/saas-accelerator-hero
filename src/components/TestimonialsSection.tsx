import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A Acelera SAAS não apenas gerou leads qualificados, mas transformou completamente nossa operação de vendas. O treinamento do time e a implementação do CRM foram decisivos para nosso crescimento.",
    name: "Ricardo Mendes",
    role: "CEO, TechFlow Solutions",
    initials: "RM",
  },
  {
    quote: "Aumentamos nossa taxa de conversão em 45% em apenas 3 meses. A metodologia da Acelera SAAS é realmente diferente - eles entendem o mercado de SaaS como ninguém.",
    name: "Marina Costa",
    role: "Diretora de Vendas, DataSync Pro",
    initials: "MC",
  },
  {
    quote: "Procurávamos uma agência que entendesse SaaS. Encontramos muito mais: parceiros que realmente se importam com nosso crescimento e têm a expertise para entregar resultados.",
    name: "Felipe Santos",
    role: "Founder & CEO, CloudHub Brasil",
    initials: "FS",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0707ed]/10 to-black" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0707ed]/15 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0707ed]/30 bg-[#0707ed]/10 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-[#0707ed]">Depoimentos</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            O que nossos{" "}
            <span className="text-[#0707ed]">clientes</span>{" "}
            dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de empresas que aceleraram seu crescimento com nossa metodologia
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#0707ed]/40 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-foreground text-sm leading-relaxed mb-6 flex-1">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0707ed]/20 border border-[#0707ed]/30 flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#0707ed]">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
