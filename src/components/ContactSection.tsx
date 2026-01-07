import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Mesajınız Gönderildi!",
      description: "En kısa sürede size dönüş yapacağım.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+90 532 123 45 67",
      description: "Pazartesi - Cuma: 09:00 - 18:00"
    },
    {
      icon: Mail,
      title: "E-posta",
      value: "mehmet@yilmazmimar.com",
      description: "24 saat içinde yanıt veriyorum"
    },
    {
      icon: MapPin,
      title: "Ofis",
      value: "Levent, İstanbul",
      description: "Randevu ile ziyaret edilebilir"
    }
  ];

  const workingHours = [
    { day: "Pazartesi - Cuma", hours: "09:00 - 18:00" },
    { day: "Cumartesi", hours: "10:00 - 15:00" },
    { day: "Pazar", hours: "Kapalı" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">İletişim</h2>
          <p className="section-subtitle mx-auto">
            Projeniz hakkında konuşmak için benimle iletişime geçin. Size en uygun çözümü birlikte bulalım.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card shadow-medium border-border">
              <CardHeader>
                <CardTitle className="font-display text-xl text-foreground">
                  Proje Danışmanlığı Talep Edin
                </CardTitle>
                <p className="font-body text-muted-foreground">
                  Projeniz hakkında detaylı bilgi verin, size özel bir çözüm önerisi hazırlayayım.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-body text-sm font-medium">
                        Ad Soyad *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Adınız ve soyadınız"
                        required
                        className="font-body"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body text-sm font-medium">
                        E-posta *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ornek@email.com"
                        required
                        className="font-body"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-body text-sm font-medium">
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+90 5XX XXX XX XX"
                        className="font-body"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="font-body text-sm font-medium">
                        Proje Türü
                      </Label>
                      <Input
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        placeholder="Villa, Daire, Ofis vb."
                        className="font-body"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-body text-sm font-medium">
                      Proje Detayları *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Projeniz hakkında detay verin: konum, metrekare, bütçe aralığı, özel istekleriniz..."
                      rows={5}
                      required
                      className="font-body resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-medium">
                    <Send className="w-4 h-4 mr-2" />
                    Mesajı Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Working Hours */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="font-display text-lg text-foreground">
                  İletişim Bilgileri
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display font-semibold text-foreground text-sm">
                        {info.title}
                      </h3>
                      <p className="font-body text-foreground font-medium">
                        {info.value}
                      </p>
                      <p className="font-body text-muted-foreground text-xs mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="bg-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="font-display text-lg text-foreground flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Çalışma Saatleri
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-body text-muted-foreground text-sm">
                      {schedule.day}
                    </span>
                    <span className="font-body font-medium text-foreground text-sm">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-primary text-primary-foreground shadow-medium">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <MessageCircle className="w-12 h-12 mx-auto" />
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">
                      Hızlı İletişim
                    </h3>
                    <p className="font-body text-sm text-primary-foreground/80 mb-4">
                      WhatsApp üzerinden anında ulaşın
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      WhatsApp'tan Yaz
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <Card className="bg-card shadow-soft border-border overflow-hidden">
            <div className="aspect-video w-full h-[400px] bg-muted relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12035.753386629!2d29.00654055531478!3d41.0770380879008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab63f62c0bda5%3A0x280436893608149e!2sLevent%2C%20Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1709907106362!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                title="Ofis Konumu"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;