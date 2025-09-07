import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 212 555 0123',
      action: 'Ara'
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'dr.aysedemir@email.com',
      action: 'Mail Gönder'
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Acıbadem Hastanesi, Kardiyoloji Bölümü\nKadıköy, İstanbul',
      action: 'Harita'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cuma: 09:00 - 18:00\nCumartesi: 09:00 - 13:00',
      action: 'Randevu Al'
    }
  ];

  return (
    <section className="section-medical bg-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-primary-light text-primary font-medium rounded-full mb-4">
            İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Benimle İletişime Geçin
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sağlığınızla ilgili sorularınız için benimle iletişime geçebilir, 
            randevu talep edebilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-medical hover:border-primary/30">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                    <p className="text-muted-foreground whitespace-pre-line mb-3">{info.content}</p>
                    <Button variant="outline" size="sm" className="btn-medical-secondary">
                      {info.action}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="card-medical animate-fade-up">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Mesaj Gönder</h3>
              <p className="text-muted-foreground">
                Sorularınızı bana iletin, en kısa sürede size dönüş yapacağım.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Ad Soyad</Label>
                  <Input 
                    id="name" 
                    placeholder="Adınız ve soyadınız"
                    className="rounded-xl border-border focus:border-primary transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">Telefon</Label>
                  <Input 
                    id="phone" 
                    placeholder="Telefon numaranız"
                    className="rounded-xl border-border focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">E-posta</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="E-posta adresiniz"
                  className="rounded-xl border-border focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">Mesajınız</Label>
                <Textarea 
                  id="message" 
                  placeholder="Mesajınızı buraya yazın..."
                  rows={6}
                  className="rounded-xl border-border focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              <Button className="btn-medical w-full">
                <MessageCircle className="w-5 h-5 mr-2" />
                Mesaj Gönder
              </Button>
            </form>
          </Card>
        </div>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button className="btn-medical rounded-full w-14 h-14 shadow-glow animate-bounce">
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;