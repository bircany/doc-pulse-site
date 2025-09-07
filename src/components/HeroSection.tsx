import { Calendar, Download, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import doctorHero from '@/assets/doctor-hero.jpg';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '1000+', label: 'Mutlu Hasta' },
    { icon: Award, value: '15+', label: 'Yıl Deneyim' },
    { icon: Clock, value: '24/7', label: 'Danışmanlık' },
  ];

  return (
    <section className="hero-gradient min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-fade-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-light text-primary font-medium rounded-full mb-4">
                Kardiyoloji Uzmanı
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Dr. Ayşe 
              <span className="text-primary block">Demir</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              15 yıllık deneyimi ile kalp sağlığınız için güvenilir çözümler sunuyorum. 
              Modern tıp anlayışı ve kişiselleştirilmiş tedavi yaklaşımları ile yanınızdayım.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-medical text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-3" />
                Randevu Al
              </Button>
              <Button variant="outline" className="btn-medical-secondary text-lg px-8 py-4">
                <Download className="w-5 h-5 mr-3" />
                CV İndir
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <Card className="relative overflow-hidden rounded-3xl shadow-glow">
                <img
                  src={doctorHero}
                  alt="Dr. Ayşe Demir - Kardiyoloji Uzmanı"
                  className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Güvenilir Sağlık Hizmeti</h3>
                    <p className="text-white/90">Modern tıp teknolojisi ile kalp sağlığınız güvende</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;