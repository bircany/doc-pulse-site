import { useState } from "react";
import { ExternalLink, Calendar, MapPin, Users, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import projectVilla from "@/assets/project-villa.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectApartment from "@/assets/project-apartment.jpg";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", "Konut", "Ticari", "İç Mekan"];

  const projects = [
    {
      id: 1,
      title: "Modern Villa Tasarımı",
      category: "Konut",
      location: "Bodrum, Muğla",
      year: "2024",
      client: "Özel Müşteri",
      image: projectVilla,
      description: "600m² alana sahip modern villa projesi. Doğal malzemeler ve büyük cam yüzeylerle tasarlandı.",
      tags: ["Villa", "Modern", "Sürdürülebilir"],
      area: "600m²",
      budget: "₺2.5M - ₺3M"
    },
    {
      id: 2,
      title: "Kurumsal Ofis İç Mekanı",
      category: "Ticari",
      location: "Maslak, İstanbul",
      year: "2023",
      client: "Tech Şirketi",
      image: projectOffice,
      description: "Açık ofis konsepti ile çalışan verimliliğini artıran modern iş mekanı tasarımı.",
      tags: ["Ofis", "Açık Alan", "Modern"],
      area: "850m²",
      budget: "₺1.2M - ₺1.5M"
    },
    {
      id: 3,
      title: "Minimalist Daire Projesi",
      category: "İç Mekan",
      location: "Nişantaşı, İstanbul",
      year: "2023",
      client: "Genç Çift",
      image: projectApartment,
      description: "120m² dairede minimalist yaklaşımla fonksiyonel ve şık yaşam alanı oluşturuldu.",
      tags: ["Daire", "Minimalist", "Fonksiyonel"],
      area: "120m²",
      budget: "₺400K - ₺500K"
    }
  ];

  const filteredProjects = selectedCategory === "Tümü"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Projeler & Portfolio</h2>
          <p className="section-subtitle mx-auto">
            Tamamladığım projeler ve tasarım çalışmalarım. Her proje özgün bir hikaye ve yaratıcı çözümler içerir.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-elegant"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group bg-card shadow-soft hover:shadow-strong transition-elegant border-border overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                {/* Overlay Info */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 text-foreground">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Title & Category */}
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-body">{project.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="font-body">{project.client}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-body">{project.area} • {project.budget}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                {/* CTA */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Detayları Gör
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-display text-2xl">{project.title}</DialogTitle>
                      <DialogDescription>
                        {project.category} - {project.location}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      {/* Image */}
                      <div className="rounded-lg overflow-hidden h-64 w-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="font-semibold text-sm">Müşteri</p>
                          <p className="text-sm text-muted-foreground">{project.client}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-sm">Yıl</p>
                          <p className="text-sm text-muted-foreground">{project.year}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-sm">Alan</p>
                          <p className="text-sm text-muted-foreground">{project.area}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-sm">Bütçe</p>
                          <p className="text-sm text-muted-foreground">{project.budget}</p>
                        </div>
                      </div>

                      {/* Full Description */}
                      <div className="space-y-2">
                        <p className="font-semibold text-sm">Proje Hakkında</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description} Bu proje, modern mimari pratiklerin en güncel örneklerinden biri olarak tasarlanmıştır.
                          Kullanıcı ihtiyaçları ve çevresel faktörler gözetilerek, sürdürülebilir ve estetik bir yaşam alanı oluşturulması hedeflenmiştir.
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}

      </div>
    </section>
  );
};

export default ProjectsSection;