import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Heart, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımda', path: '/hakkimda' },
    { name: 'Uzmanlık Alanları', path: '/uzmanlik' },
    { name: 'CV & Deneyim', path: '/cv' },
    { name: 'Yayınlar', path: '/yayinlar' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="font-merriweather">
              <span className="text-lg font-bold text-foreground">Dr. Ayşe Demir</span>
              <p className="text-sm text-muted-foreground -mt-1">Kardiyoloji Uzmanı</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 hover:text-primary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isActive ? 'text-primary after:scale-x-100' : 'text-foreground'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary">
              <Download className="w-4 h-4 mr-2" />
              CV İndir
            </Button>
            <Button className="btn-medical">
              <Calendar className="w-4 h-4 mr-2" />
              Randevu Al
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-primary bg-primary-light'
                        : 'text-foreground hover:text-primary hover:bg-muted'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  CV İndir
                </Button>
                <Button className="btn-medical justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Randevu Al
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;