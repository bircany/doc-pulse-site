import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımda', path: '/hakkimda' },
    { name: 'Uzmanlık Alanları', path: '/uzmanlik' },
    { name: 'CV & Deneyim', path: '/cv' },
  ];

  const services = [
    'Kardiyoloji Muayenesi',
    'EKG & Ekokardiografi',
    'Stres Testi',
    'Holter Monitörü',
    'Hipertansiyon Takibi',
    'Koruyucu Kardiyoloji'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="font-merriweather">
                <span className="text-lg font-bold">Dr. Ayşe Demir</span>
                <p className="text-sm text-accent-foreground/80 -mt-1">Kardiyoloji Uzmanı</p>
              </div>
            </div>
            <p className="text-accent-foreground/80 mb-6 leading-relaxed">
              15 yıllık deneyimi ile kalp sağlığınız için güvenilir çözümler sunuyorum. 
              Modern tıp ve kişiselleştirilmiş tedavi yaklaşımları.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="text-accent-foreground/80 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hizmetlerim</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-accent-foreground/80 flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-accent-foreground/80">+90 212 555 0123</p>
                  <p className="text-sm text-accent-foreground/60">Pazartesi - Cuma: 09:00-18:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-accent-foreground/80">dr.aysedemir@email.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-accent-foreground/80">Acıbadem Hastanesi</p>
                  <p className="text-sm text-accent-foreground/60">Kardiyoloji Bölümü, Kadıköy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-accent-foreground/60 text-sm">
              © 2024 Dr. Ayşe Demir. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors duration-300">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors duration-300">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;