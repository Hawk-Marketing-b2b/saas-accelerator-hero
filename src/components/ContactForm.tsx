import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    site: "",
    segmento: "",
    receita: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onSuccess?.();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="nome"
        placeholder="Nome*"
        required
        value={formData.nome}
        onChange={handleChange}
        className={inputClasses}
      />

      <input
        type="email"
        name="email"
        placeholder="Email corporativo*"
        required
        value={formData.email}
        onChange={handleChange}
        className={inputClasses}
      />

      <input
        type="tel"
        name="whatsapp"
        placeholder="WhatsApp*"
        required
        value={formData.whatsapp}
        onChange={handleChange}
        className={inputClasses}
      />

      <input
        type="url"
        name="site"
        placeholder="Site da empresa*"
        required
        value={formData.site}
        onChange={handleChange}
        className={inputClasses}
      />

      <div className="relative">
        <select
          name="segmento"
          required
          value={formData.segmento}
          onChange={handleChange}
          className={`${inputClasses} appearance-none`}
        >
          <option value="" disabled className="text-muted-foreground">Qual é o segmento do seu SaaS?*</option>
          <option value="erp">ERP / Gestão</option>
          <option value="crm">CRM / Vendas</option>
          <option value="marketing">Marketing / Automação</option>
          <option value="rh">RH / Gestão de Pessoas</option>
          <option value="financeiro">Financeiro / Contábil</option>
          <option value="outros">Outros</option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      </div>

      <div className="relative">
        <select
          name="receita"
          required
          value={formData.receita}
          onChange={handleChange}
          className={`${inputClasses} appearance-none`}
        >
          <option value="" disabled className="text-muted-foreground">Qual sua receita recorrente mensal?*</option>
          <option value="ate-50k">Até R$ 50mil</option>
          <option value="50k-200k">R$ 50mil - R$ 200mil</option>
          <option value="200k-500k">R$ 200mil - R$ 500mil</option>
          <option value="500k-1m">R$ 500mil - R$ 1 milhão</option>
          <option value="acima-1m">Acima de R$ 1 milhão</option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      </div>

      <Button type="submit" variant="hero" size="lg" className="w-full mt-6">
        Falar com Especialista
      </Button>
    </form>
  );
};

export default ContactForm;
