import { GraduationCap, Award, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const timeline = [
    {
      year: "2024",
      title: "Kıdemli Mimar",
      company: "Yılmaz Mimarlık",
      description: "Kendi mimarlık ofisimi kurarak büyük ölçekli projelere odaklandım."
    },
    {
      year: "2020-2024",
      title: "Proje Mimarı",
      company: "Metropol Tasarım",
      description: "Konut ve ticari projelerde tasarım ekibini yönettim."
    },
    {
      year: "2018-2020",
      title: "Mimar",
      company: "Arkitera Stüdyo",
      description: "İç mekan tasarımı ve 3D görselleştirme alanında uzmanlaştım."
    },
    {
      year: "2016",
      title: "Mezuniyet",
      company: "İTÜ Mimarlık",
      description: "Mimarlık lisans eğitimimi başarıyla tamamladım."
    }
  ];

  const expertise = [
    {
      icon: Target,
      title: "Konsept Geliştirme",
      description: "Müşteri ihtiyaçlarını analiz ederek özgün tasarım konseptleri oluşturuyorum."
    },
    {
      icon: Users,
      title: "Proje Yönetimi", 
      description: "Tasarımdan uygulamaya kadar tüm süreçleri koordine ediyorum."
    },
    {
      icon: Award,
      title: "Sürdürülebilirlik",
      description: "Çevre dostu ve enerji verimli tasarım çözümleri üretiyorum."
    },
    {
      icon: GraduationCap,
      title: "Yenilikçi Yaklaşım",
      description: "Teknoloji ve geleneksel mimariyi harmanlayan çözümler sunuyorum."
    }
  ];

  return (
<<<<<<< HEAD
    <section className="section-medical py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-primary-light text-primary font-medium rounded-full mb-6">
              Hakkımda
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Kalp Sağlığınız İçin
              <span className="text-primary block">Güvenilir Partner</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                15 yıllık kardiyoloji deneyimi ile hastalarıma en iyi sağlık hizmetini
                sunmak için çalışıyorum. İstanbul Üniversitesi Tıp Fakültesi'nden mezun
                olduktan sonra kardiyoloji uzmanlık eğitimimi tamamladım.
              </p>
              <p>
                Modern tıp teknolojisi ile geleneksel hasta bakım anlayışını birleştirerek,
                her hastam için kişiselleştirilmiş tedavi planları geliştiriyorum.
                Preventif kardiyoloji konusunda uzmanlaşmış olup, hastalıkların
                erken tanısı ve önlenmesi konularında aktif olarak çalışmaktayım.
              </p>
              <p>
                Avrupa Kardiyoloji Derneği üyesi olarak, sürekli eğitim ve gelişim
                ilkesi ile en güncel tedavi yöntemlerini hastalarıma sunuyorum.
=======
    <section id="about" className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Hakkımda</h2>
          <p className="section-subtitle mx-auto">
            Mimari tasarımda yaratıcılık ve işlevselliği bir araya getiren bir mimar olarak, 
            her projede özenle çalışıyor ve müşteri memnuniyetini ön planda tutuyorum.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Biography */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="font-body text-muted-foreground leading-relaxed">
                2016 yılında İstanbul Teknik Üniversitesi Mimarlık Fakültesi'nden mezun olduktan sonra, 
                mimari tasarım alanında kendimi sürekli geliştirmeye odaklandım. Modern yaşam tarzlarına 
                uygun, işlevsel ve estetik çözümler üretmeyi hedefliyorum.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                8 yıllık deneyimim boyunca konut, ofis ve ticari projelerde çalışarak geniş bir portföy 
                oluşturdum. Sürdürülebilir mimari ve çevre dostu tasarım çözümleri konularında uzmanlaştım.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Müşterilerimin hayallerini gerçeğe dönüştürürken, hem fonksiyonel hem de görsel olarak 
                etkileyici alanlar yaratmayı amaçlıyorum. Her proje benim için yeni bir hikaye ve 
                yaratıcılık fırsatıdır.
>>>>>>> 21c663dc1710a4e7b652d80a279f430c23888687
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <Card key={index} className="bg-card shadow-soft border-border hover:shadow-medium transition-elegant">
                  <CardContent className="p-6">
                    <item.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="card-medical text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-primary-foreground" />
=======
          {/* Right: Timeline */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Kariyer Yolculuğum
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-3 top-8 w-0.5 h-16 bg-border"></div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-soft"></div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-display text-lg font-semibold text-primary">
                        {item.year}
                      </span>
                      <span className="font-body text-sm text-muted-foreground">
                        {item.company}
                      </span>
                    </div>
                    <h4 className="font-display text-xl font-medium text-foreground">
                      {item.title}
                    </h4>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
>>>>>>> 21c663dc1710a4e7b652d80a279f430c23888687
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;