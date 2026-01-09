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
<<<<<<< HEAD
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 hover:text-primary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${isActive ? 'text-primary after:scale-x-100' : 'text-foreground'
                  }`
                }
=======
              <a
                key={item.name}
                href={item.href}
                className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-elegant"
>>>>>>> 21c663dc1710a4e7b652d80a279f430c23888687
              >
                {item.name}
              </a>
            ))}
<<<<<<< HEAD
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer">
              <Button className="btn-medical">
                <Calendar className="w-4 h-4 mr-2" />
                Randevu Al
              </Button>
            </a>
=======
            {/* Desktop Navigation Link Container */}
>>>>>>> 21c663dc1710a4e7b652d80a279f430c23888687
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
<<<<<<< HEAD
                  className={({ isActive }) =>
                    `font-medium py-2 px-4 rounded-lg transition-all duration-300 ${isActive
                      ? 'text-primary bg-primary-light'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                    }`
                  }
=======
>>>>>>> 21c663dc1710a4e7b652d80a279f430c23888687
                >
                  {item.name}
                </a>
              ))}
<<<<<<< HEAD
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="btn-medical justify-start w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Randevu Al
                  </Button>
                </a>
              </div>
=======
>>>>>>> 21c663dc1710a4e7b652d80a279f430c23888687
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;