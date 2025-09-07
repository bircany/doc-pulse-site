import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section - Coming soon */}
      <section id="about" className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Hakkımda</h2>
          <p className="section-subtitle mx-auto">
            Mimari tasarımda 8 yıllık deneyimim ile modern ve işlevsel yaşam alanları yaratıyorum.
          </p>
        </div>
      </section>
      
      {/* Projects Section - Coming soon */}
      <section id="projects" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Projeler</h2>
          <p className="section-subtitle mx-auto">
            Tamamladığım projeler ve tasarım portföyüm.
          </p>
        </div>
      </section>
      
      {/* CV Section - Coming soon */}
      <section id="cv" className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">CV & Deneyim</h2>
          <p className="section-subtitle mx-auto">
            Eğitim geçmişim, iş deneyimlerim ve sertifikalarım.
          </p>
        </div>
      </section>
      
      {/* Services Section - Coming soon */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Hizmetler</h2>
          <p className="section-subtitle mx-auto">
            Sunduğum profesyonel mimarlık ve tasarım hizmetleri.
          </p>
        </div>
      </section>
      
      {/* Contact Section - Coming soon */}
      <section id="contact" className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">İletişim</h2>
          <p className="section-subtitle mx-auto">
            Projeleriniz için benimle iletişime geçin.
          </p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-display text-xl font-semibold mb-4">Mimar Portfolio</div>
          <p className="font-body text-sm text-background/70">
            © 2024 Mehmet Yılmaz. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;