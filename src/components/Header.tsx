import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { label: "Método", href: "#metodo" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">A</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-foreground text-sm">Acelera</span>
              <span className="font-display font-semibold text-primary text-sm">SaaS</span>
            </div>
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
          <Button variant="hero" size="default" className="hidden sm:flex">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
