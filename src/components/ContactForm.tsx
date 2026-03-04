import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BLOCKED_DOMAINS = [
  "gmail.com", "yahoo.com", "yahoo.com.br", "hotmail.com", "hotmail.com.br",
  "outlook.com", "outlook.com.br", "live.com", "aol.com", "protonmail.com",
  "zoho.com", "mail.com", "gmx.com", "yandex.com", "tutanota.com",
  "fastmail.com", "uol.com.br", "bol.com.br", "terra.com.br", "ig.com.br",
  "globo.com", "r7.com", "zipmail.com.br",
];

const isBusinessEmail = (email: string): boolean => {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;
  // iCloud is allowed
  if (domain === "icloud.com") return true;
  return !BLOCKED_DOMAINS.includes(domain);
};

interface ContactFormProps {
  onSuccess?: () => void;
}

const WEBHOOK_URL = "https://n8n-n8n-start.t4r0vc.easypanel.host/webhook/site-acelera-saas";

const getUtmParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    utm_medium: params.get("utm_medium") || "",
  };
};

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    site: "",
    segmento: "",
    receita: "",
  });
  const [utmData, setUtmData] = useState({
    utm_source: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    utm_medium: "",
    referrer: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    setUtmData({
      ...getUtmParams(),
      referrer: document.referrer || "",
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isBusinessEmail(formData.email)) {
      setEmailError("Por favor, utilize um e-mail corporativo.");
      return;
    }
    setEmailError("");
    setIsLoading(true);

    try {
      const payload = new URLSearchParams({
        nome: formData.nome,
        email: formData.email,
        whatsapp: formData.whatsapp,
        site: formData.site,
        segmento: formData.segmento,
        receita: formData.receita,
        utm_source: utmData.utm_source,
        utm_campaign: utmData.utm_campaign,
        utm_content: utmData.utm_content,
        utm_term: utmData.utm_term,
        utm_medium: utmData.utm_medium,
        referrer: utmData.referrer,
        page_url: window.location.href,
        timestamp: new Date().toISOString(),
      });

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: "no-cors",
        body: payload.toString(),
      });

      toast({
        title: "Enviado com sucesso!",
        description: "Em breve um especialista entrará em contato.",
      });
      
      onSuccess?.();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
        type="text"
        name="site"
        placeholder="Site da empresa* (ex: empresa.com.br)"
        required
        pattern="^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)+$"
        title="Insira um domínio válido (ex: empresa.com.br, app.io, site.app)"
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

      <Button type="submit" variant="hero" size="lg" className="w-full mt-6" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Falar com Especialista"}
      </Button>
    </form>
  );
};

export default ContactForm;
