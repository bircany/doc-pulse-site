import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: 'Eğitim',
      content: 'İstanbul Üniversitesi Tıp Fakültesi mezunu, Kardiyoloji uzmanlığı'
    },
    {
      icon: Award,
      title: 'Sertifikalar',
      content: 'Avrupa Kardiyoloji Derneği sertifikası ve uluslararası akreditasyonlar'
    },
    {
      icon: BookOpen,
      title: 'Yayınlar',
      content: '50+ bilimsel makale ve kardiyoloji alanında yayımlanmış kitap'
    },
    {
      icon: Users,
      title: 'Deneyim',
      content: '15 yıllık kardiyoloji pratiği, 1000+ başarılı hasta tedavisi'
    }
  ];

  return (
    <section className="section-medical">
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
              </p>
            </div>
          </div>

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
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{achievement.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;