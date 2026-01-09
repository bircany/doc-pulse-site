import { Download, GraduationCap, Award, BookOpen, Briefcase, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CV = () => {
  const education = [
    {
      year: '2008-2014',
      title: 'Tıp Doktoru',
      institution: 'İstanbul Üniversitesi Tıp Fakültesi',
      description: 'Genel tıp eğitimi, mezuniyet derecesi: Yüksek Onur'
    },
    {
      year: '2014-2019',
      title: 'Kardiyoloji Uzmanlığı',
      institution: 'İstanbul Üniversitesi Kardiyoloji Anabilim Dalı',
      description: 'İnvaziv ve non-invaziv kardiyoloji uzmanlık eğitimi'
    },
    {
      year: '2019-2020',
      title: 'Fellowship',
      institution: 'Mayo Clinic, ABD',
      description: 'İleri kardiyovasküler görüntüleme ve müdahaleli kardiyoloji'
    }
  ];

  const experience = [
    {
      year: '2020-2024',
      title: 'Kardiyoloji Uzmanı',
      institution: 'Acıbadem Hastanesi',
      description: 'Elektrofizyoloji ve aritmia ünitesi sorumlusu'
    },
    {
      year: '2019-2020',
      title: 'Araştırma Görevlisi',
      institution: 'Mayo Clinic Kardiyoloji Bölümü',
      description: 'Kalp yetmezliği ve transplantasyon araştırmaları'
    },
    {
      year: '2014-2019',
      title: 'Asistan Doktor',
      institution: 'İstanbul Üniversitesi Tıp Fakültesi',
      description: 'Kardiyoloji uzmanlık eğitimi ve araştırma faaliyetleri'
    }
  ];

  const certifications = [
    'Avrupa Kardiyoloji Derneği (ESC) Üyeliği',
    'Amerikan Kalp Derneği (AHA) Sertifikası',
    'İleri Yaşam Desteği (ACLS) Sertifikası',
    'Transözofageal Ekokardiografi (TEE) Sertifikası',
    'Kardiyak Kateterizasyon Sertifikası',
    'Elektrofizyoloji Çalışma Sertifikası'
  ];

  const publications = [
    {
      title: 'Kardiyovasküler Hastalıklarda Erken Tanı Yöntemleri',
      journal: 'Türk Kardiyoloji Derneği Arşivi',
      year: '2023',
      type: 'Araştırma Makalesi'
    },
    {
      title: 'Hipertansiyon Tedavisinde Yeni Yaklaşımlar',
      journal: 'Uluslararası Kardiyoloji Dergisi',
      year: '2022',
      type: 'Derleme'
    },
    {
      title: 'Kalp Yetmezliğinde Risk Faktörleri',
      journal: 'Anadolu Kardiyoloji Dergisi',
      year: '2021',
      type: 'Araştırma Makalesi'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block px-4 py-2 bg-primary-light text-primary font-medium rounded-full mb-4">
              Özgeçmiş
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              CV & Deneyim
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              15 yıllık tıp ve kardiyoloji deneyimim, eğitimim ve profesyonel gelişimim
            </p>
            <Button className="btn-medical">
              <Download className="w-5 h-5 mr-2" />
              PDF Olarak İndir
            </Button>
          </div>

          {/* Education Section */}
          <Card className="card-medical mb-12 animate-fade-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Eğitim</h2>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/20 last:border-l-0">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-light text-primary text-sm font-medium rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-primary font-medium">{item.institution}</p>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Experience Section */}
          <Card className="card-medical mb-12 animate-fade-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Çalışma Deneyimi</h2>
            </div>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/20 last:border-l-0">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-light text-primary text-sm font-medium rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-primary font-medium">{item.institution}</p>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="card-medical mb-12 animate-fade-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Sertifikalar</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-muted rounded-xl">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Publications */}
          <Card className="card-medical animate-fade-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Seçili Yayınlar</h2>
            </div>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index}>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{pub.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="text-primary font-medium">{pub.journal}</span>
                      <span className="text-muted-foreground">{pub.year}</span>
                      <span className="px-2 py-1 bg-primary-light text-primary rounded-full text-xs">
                        {pub.type}
                      </span>
                    </div>
                  </div>
                  {index < publications.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CV;