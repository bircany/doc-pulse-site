import { ArrowRight, Download, Eye, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";
import portraitImage from "@/assets/architect-portrait.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden pt-16">
      {/* Background architectural elements */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroImage}
          alt="Mimari arka plan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">İstanbul, Türkiye</span>
              </div>

              <h1 className="hero-title text-foreground">
                Mimari Tasarımda
                <span className="block text-secondary">Yenilikçi Yaklaşım</span>
              </h1>

              <p className="hero-subtitle max-w-lg">
                Modern mimari çözümler ile yaşam alanlarınızı tasarlıyor,
                işlevsellik ve estetiği mükemmel şekilde harmanlıyorum.
              </p>
            </div>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-3">
              {["İç Mekan Tasarımı", "Yapı Tasarımı", "3D Görselleştirme"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-body font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/Mehmet-Yilmaz-CV.pdf" download="Mehmet-Yilmaz-CV.pdf">
                <Button variant="outline" size="lg" className="shadow-soft">
                  <Download className="w-5 h-5 mr-2" />
                  CV İndir
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="font-display text-2xl font-semibold text-foreground">50+</div>
                <div className="font-body text-sm text-muted-foreground">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-semibold text-foreground">8</div>
                <div className="font-body text-sm text-muted-foreground">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-semibold text-foreground">95%</div>
                <div className="font-body text-sm text-muted-foreground">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>

          {/* Right content - Portrait */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <div className="w-full max-w-lg mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-strong bg-gradient-card">
                  <img
                    src={portraitImage}
                    alt="Mimar Portresi"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating info card */}
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-medium border border-border">
                  <div className="text-left">
                    <div className="font-display text-lg font-semibold text-foreground">
                      Mehmet Yılmaz
                    </div>
                    <div className="font-body text-muted-foreground text-sm">
                      Mimar & İç Mimar
                    </div>
                    <div className="font-body text-xs text-muted-foreground mt-1">
                      İTÜ Mimarlık Fakültesi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-muted to-transparent rounded-full"></div>
      </div>
    </section >
  );
};

export default HeroSection;