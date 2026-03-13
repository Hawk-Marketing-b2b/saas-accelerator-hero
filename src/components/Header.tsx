import { useState, useEffect } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import logoAceleraSaas from "@/assets/logo-acelera-saas.png";

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Método", href: "#metodo" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-sm" : ""}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logoAceleraSaas} alt="Acelera SaaS" className="h-14 lg:h-16 w-auto" />
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <ShinyButton className="hidden sm:flex" onClick={() => setIsDialogOpen(true)}>
            Falar com Especialista
          </ShinyButton>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Fale com um Especialista</DialogTitle>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
