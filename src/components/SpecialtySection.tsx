import { Heart, Activity, Stethoscope, Shield, Zap, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const SpecialtySection = () => {
  const specialties = [
    {
      icon: Heart,
      title: 'Kalp Hastalıkları',
      description: 'Koroner arter hastalığı, kalp yetmezliği ve ritim bozukluklarının tanı ve tedavisi',
      features: ['EKG', 'Ekokardiografi', 'Stres Testi']
    },
    {
      icon: Activity,
      title: 'Kardiyovasküler Risk',
      description: 'Kalp-damar hastalıkları risk değerlendirmesi ve koruyucu tedavi yaklaşımları',
      features: ['Risk Analizi', 'Yaşam Tarzı Danışmanlığı', 'İlaç Optimizasyonu']
    },
    {
      icon: Stethoscope,
      title: 'Hipertansiyon',
      description: 'Yüksek tansiyon hastalığının kapsamlı yönetimi ve komplikasyon önleme',
      features: ['24 Saat Holter', 'Diyet Planlaması', 'İlaç Tedavisi']
    },
    {
      icon: Shield,
      title: 'Koruyucu Kardiyoloji',
      description: 'Kalp hastalıklarından korunma stratejileri ve erken tanı yöntemleri',
      features: ['Check-up', 'Beslenme Danışmanlığı', 'Egzersiz Programı']
    },
    {
      icon: Zap,
      title: 'Acil Kardiyoloji',
      description: 'Kalp krizi, ani gelişen göğüs ağrısı ve acil kardiyovasküler durumlar',
      features: ['24/7 Erişim', 'Hızlı Tanı', 'Acil Müdahale']
    },
    {
      icon: Users,
      title: 'Aile Danışmanlığı',
      description: 'Kalıtsal kalp hastalıkları danışmanlığı ve aile tarama programları',
      features: ['Genetik Danışmanlık', 'Aile Taraması', 'Risk Değerlendirme']
    }
  ];

  return (
    <section className="section-medical bg-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-primary-light text-primary font-medium rounded-full mb-4">
            Uzmanlık Alanlarım
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Kapsamlı Kardiyoloji Hizmetleri
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern tıp teknolojisi ve deneyimli yaklaşımla kalp sağlığınız için 
            en iyi hizmeti sunmaktayım.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card 
              key={index} 
              className="card-medical group hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <specialty.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{specialty.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{specialty.description}</p>
              </div>

              <div className="space-y-2">
                {specialty.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtySection;