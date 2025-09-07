import { 
  Building, 
  Home, 
  Palette, 
  Box, 
  Ruler, 
  FileText,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "Yapı Tasarımı",
      description: "Konut, villa ve ticari yapılar için kapsamlı mimari tasarım hizmetleri.",
      features: [
        "Konsept tasarım geliştirme",
        "Teknik çizim ve detaylandırma", 
        "Yapı ruhsatı süreç yönetimi",
        "Şantiye takip ve denetim"
      ],
      price: "₺150-300/m²",
      duration: "2-6 ay",
      popular: true
    },
    {
      icon: Home,
      title: "İç Mekan Tasarımı",
      description: "Yaşam ve çalışma alanlarınız için işlevsel ve estetik iç mekan çözümleri.",
      features: [
        "Mobilya ve dekorasyon seçimi",
        "Renk paleti ve malzeme önerileri",
        "Aydınlatma tasarımı",
        "3D görselleştirme ve sunum"
      ],
      price: "₺80-150/m²",
      duration: "1-3 ay",
      popular: false
    },
    {
      icon: Box,
      title: "3D Görselleştirme",
      description: "Projelerinizi gerçeğe en yakın şekilde görselleştirme ve sunum hizmetleri.",
      features: [
        "Fotorealistik render görüntüleri",
        "360° panoramik görüntüler",
        "Animasyon ve sanal tur",
        "VR (Sanal Gerçeklik) deneyimi"
      ],
      price: "₺2.000-5.000/görsel",
      duration: "1-2 hafta",
      popular: false
    },
    {
      icon: Ruler,
      title: "Konsept Geliştirme",
      description: "İhtiyaçlarınıza özel yaratıcı konsept tasarım ve planlama danışmanlığı.",
      features: [
        "Mekân analizi ve programlama",
        "Fonksiyonel plan geliştirme",
        "Tasarım konsepti oluşturma",
        "Sunum ve görselleştirme"
      ],
      price: "₺5.000-15.000",
      duration: "2-4 hafta",
      popular: false
    },
    {
      icon: FileText,
      title: "Proje Yönetimi",
      description: "Tasarımdan uygulamaya kadar tüm süreçlerin profesyonel koordinasyonu.",
      features: [
        "Zaman çizelgesi oluşturma",
        "Tedarikçi koordinasyonu",
        "Kalite kontrol ve takip",
        "Bütçe yönetimi danışmanlığı"
      ],
      price: "Proje bazında",
      duration: "Proje süresince",
      popular: false
    },
    {
      icon: Palette,
      title: "Renovasyon Danışmanlığı",
      description: "Mevcut yapıların yenilenmesi ve modern ihtiyaçlara uyarlanması.",
      features: [
        "Mevcut durum analizi",
        "Renovasyon plan önerileri",
        "Malzeme ve teknik çözümler",
        "Maliyet optimizasyonu"
      ],
      price: "₺100-200/m²",
      duration: "1-4 ay",
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "İlk Görüşme",
      description: "İhtiyaçlarınızı dinliyor, projenizin gereksinimlerini belirliyoruz."
    },
    {
      step: "02", 
      title: "Konsept Geliştirme",
      description: "Yaratıcı fikirler geliştiriyor, ilk tasarım önerilerini sunuyoruz."
    },
    {
      step: "03",
      title: "Tasarım & Görselleştirme",
      description: "Detaylı tasarımlar yapıyor, 3D görsellerle projenizi canlandırıyoruz."
    },
    {
      step: "04",
      title: "Uygulama & Takip",
      description: "Projenin hayata geçirilmesini sağlıyor, kalite kontrolünü yapıyoruz."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Hizmetlerim</h2>
          <p className="section-subtitle mx-auto">
            Mimari tasarımdan uygulamaya kadar geniş bir yelpazede profesyonel hizmetler sunuyorum. 
            Her proje için kişiselleştirilmiş çözümler üretiyorum.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-card shadow-soft hover:shadow-strong transition-elegant border-border relative overflow-hidden group ${
                service.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Popüler
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="font-display text-xl text-foreground">
                  {service.title}
                </CardTitle>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Duration */}
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-body text-sm">Fiyat</span>
                    </div>
                    <span className="font-display font-semibold text-foreground text-sm">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="font-body text-sm">Süre</span>
                    </div>
                    <span className="font-body text-sm text-muted-foreground">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                >
                  Detaylı Bilgi Al
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-section rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Çalışma Sürecim
            </h3>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Her projeyi titizlikle planlıyor, adım adım ilerleyerek en iyi sonuçları elde ediyorum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0"></div>
                )}
                
                {/* Step circle */}
                <div className="relative z-10 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-semibold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                
                {/* Content */}
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
            Projenizi Konuşalım
          </h3>
          <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            Hayalinizdeki projeyi gerçeğe dönüştürmek için bir araya gelelim. 
            Ücretsiz danışmanlık için iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-medium">
              Ücretsiz Danışmanlık
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              WhatsApp ile İletişim
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;