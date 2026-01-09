import { useState } from "react";
import { Menu, X, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hakkımda", href: "#about" },
    { name: "Projeler", href: "#projects" },
    { name: "CV", href: "#cv" },
    { name: "Hizmetler", href: "#services" },
    { name: "İletişim", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
            <span className="font-display text-2xl font-semibold text-foreground">
              Mimar
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-elegant"
              >
                {item.name}
              </a>
            ))}
            {/* Desktop Navigation Link Container */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card shadow-medium rounded-lg mt-2 p-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block font-body text-muted-foreground hover:text-foreground transition-elegant"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;