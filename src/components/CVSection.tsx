import { Download, GraduationCap, Briefcase, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CVSection = () => {
  const education = [
    {
      degree: "Mimarlık Lisans",
      school: "İstanbul Teknik Üniversitesi",
      period: "2012 - 2016",
      gpa: "3.42/4.00",
      thesis: "Sürdürülebilir Konut Tasarımında Yenilikçi Yaklaşımlar"
    },
    {
      degree: "İç Mimarlık Sertifikası",
      school: "Mimar Sinan Güzel Sanatlar Üniversitesi",
      period: "2017",
      description: "İç mekan tasarımı ve dekorasyon alanında uzmanlaşma"
    }
  ];

  const experience = [
    {
      position: "Kurucu Mimar",
      company: "Yılmaz Mimarlık",
      period: "2024 - Devam ediyor",
      location: "İstanbul",
      achievements: [
        "Kendi mimarlık ofisini kurma ve yönetme",
        "15+ büyük ölçekli proje tamamlama",
        "Müşteri memnuniyet oranı %95",
        "Sürdürülebilir tasarım danışmanlığı"
      ]
    },
    {
      position: "Kıdemli Proje Mimarı",
      company: "Metropol Tasarım",
      period: "2020 - 2024",
      location: "İstanbul",
      achievements: [
        "25+ konut ve ticari proje yönetimi",
        "Tasarım ekibi liderliği (8 kişi)",
        "BIM ve 3D modelleme uzmanlığı",
        "Müşteri ilişkileri koordinasyonu"
      ]
    },
    {
      position: "Mimar",
      company: "Arkitera Stüdyo",
      period: "2018 - 2020",
      location: "İstanbul",
      achievements: [
        "İç mekan tasarımı projeleri",
        "3D görselleştirme ve sunum hazırlama",
        "Teknik çizim ve detay geliştirme",
        "Şantiye takip ve uygulama kontrolü"
      ]
    },
    {
      position: "Stajyer Mimar",
      company: "Çelik Yapı A.Ş.",
      period: "2016 - 2018",
      location: "İstanbul",
      achievements: [
        "Büyük ölçekli projeler için teknik destek",
        "AutoCAD ve Revit kullanımında uzmanlaşma",
        "Proje geliştirme süreçlerini öğrenme",
        "Sektörel deneyim kazanma"
      ]
    }
  ];

  const certifications = [
    {
      name: "LEED Green Associate",
      issuer: "U.S. Green Building Council",
      year: "2022",
      description: "Sürdürülebilir yeşil bina tasarımı sertifikası"
    },
    {
      name: "Autodesk Revit Professional",
      issuer: "Autodesk",
      year: "2021",
      description: "BIM ve 3D modelleme uzman sertifikası"
    },
    {
      name: "Project Management",
      issuer: "PMI Turkey",
      year: "2020",
      description: "Proje yönetimi temel seviye sertifikası"
    },
    {
      name: "İç Mimarlık Uzmanı",
      issuer: "İç Mimarlar Odası",
      year: "2019",
      description: "İç mekan tasarımı uzmanlık belgesi"
    }
  ];

  const skills = {
    "Tasarım Yazılımları": ["AutoCAD", "Revit", "SketchUp", "3ds Max", "V-Ray", "Photoshop", "Illustrator"],
    "Teknik Beceriler": ["BIM Modelleme", "3D Görselleştirme", "Teknik Çizim", "Proje Yönetimi"],
    "Uzmanlık Alanları": ["Sürdürülebilir Tasarım", "İç Mekan Tasarımı", "Konut Projeleri", "Ticari Projeler"],
    "Diller": ["Türkçe (Ana dil)", "İngilizce (İleri)", "Almanca (Orta)"]
  };

  return (
    <section id="cv" className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">CV & Deneyim</h2>
          <p className="section-subtitle mx-auto">
            Eğitim geçmişim, iş deneyimlerim ve profesyonel gelişim yolculuğum hakkında detaylı bilgiler.
          </p>
          <Button size="lg" className="mt-6 shadow-medium">
            <Download className="w-5 h-5 mr-2" />
            CV'mi PDF Olarak İndir
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Skills & Certifications */}
          <div className="space-y-8">
            {/* Skills */}
            <Card className="bg-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Yetenekler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-display font-semibold text-foreground mb-3 text-sm">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Sertifikalar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-display font-semibold text-foreground text-sm">
                          {cert.name}
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          {cert.year}
                        </Badge>
                      </div>
                      <p className="font-body text-muted-foreground text-xs mb-1">
                        {cert.issuer}
                      </p>
                      <p className="font-body text-muted-foreground text-xs">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Education & Experience */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <Card className="bg-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                  Eğitim
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6 relative">
                      <div className="absolute -left-2 top-2 w-4 h-4 bg-primary rounded-full"></div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <Badge variant="secondary">
                          {edu.period}
                        </Badge>
                      </div>
                      <p className="font-body text-muted-foreground mb-2">
                        {edu.school}
                      </p>
                      {edu.gpa && (
                        <p className="font-body text-sm text-muted-foreground mb-2">
                          GPA: {edu.gpa}
                        </p>
                      )}
                      {edu.thesis && (
                        <p className="font-body text-sm text-muted-foreground">
                          Tez: {edu.thesis}
                        </p>
                      )}
                      {edu.description && (
                        <p className="font-body text-sm text-muted-foreground">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-primary" />
                  İş Deneyimi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {experience.map((exp, index) => (
                    <AccordionItem key={index} value={`exp-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex justify-between items-start w-full mr-4">
                          <div>
                            <h3 className="font-display text-lg font-semibold text-foreground">
                              {exp.position}
                            </h3>
                            <p className="font-body text-muted-foreground">
                              {exp.company} • {exp.location}
                            </p>
                          </div>
                          <Badge variant="secondary" className="ml-4">
                            {exp.period}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-4 space-y-2">
                          <h4 className="font-display font-semibold text-foreground text-sm mb-3">
                            Başarılar & Sorumluluklar:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="font-body text-muted-foreground text-sm flex items-start">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;