import { Linkedin, Instagram, Youtube, Mail, MapPin } from "lucide-react";
import logoAceleraSaas from "@/assets/logo-acelera-saas.png";
import sedeImg from "@/assets/sede-uberlandia.jpg";

const Footer = () => {
  const quickLinks = [
    { label: "Método", href: "#metodo" },
    { label: "Treinamento", href: "#treinamento" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/acelerasaas/", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoAceleraSaas} alt="Acelera SaaS" className="h-24 w-auto" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
              Aceleramos o crescimento de empresas SaaS B2B com uma metodologia validada em mais de 400 projetos. Sua parceira estratégica para dominar o mercado.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 mb-5">
              <li>
                <a
                  href="mailto:contato@acelerasaas.com"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  contato@acelerasaas.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Complexo Vinhedos, Sala 1508<br />Uberlândia - MG, CEP 38411-159</span>
              </li>
            </ul>
            <p className="text-white/40 text-xs mb-1">Hawk Comunicacao LTDA</p>
            <p className="text-white/40 text-xs mb-4">CNPJ 19.247.670/0001-35</p>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img 
                src={sedeImg} 
                alt="Sede Acelera SaaS - Complexo Vinhedos, Uberlândia-MG" 
                className="w-full h-32 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Acelera SAAS. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
