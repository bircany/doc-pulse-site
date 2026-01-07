import { BookOpen, FileText, Calendar, Link as LinkIcon, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Publications = () => {
    const publications = [
        {
            id: 1,
            title: 'Kardiyovasküler Hastalıklarda Erken Tanı Yöntemleri ve Yapay Zeka Uygulamaları',
            journal: 'Türk Kardiyoloji Derneği Arşivi',
            year: '2023',
            type: 'Araştırma Makalesi',
            authors: 'Demir A, Yılmaz K, Öztürk M.',
            doi: '10.5555/tkda.2023.12345',
            abstract: 'Bu çalışmada, yapay zeka destekli EKG analizlerinin erken tanıdaki etkinliği 5000 hasta verisi üzerinde incelenmiştir. Sonuçlar, %94 hassasiyet ile...'
        },
        {
            id: 2,
            title: 'Hipertansiyon Tedavisinde Yeni Farmakolojik Yaklaşımlar: Sistematik Derleme',
            journal: 'Uluslararası Kardiyoloji Dergisi',
            year: '2022',
            type: 'Derleme',
            authors: 'Demir A, Smith J.D.',
            doi: '10.1016/j.ijcard.2022.05.012',
            abstract: 'Dirençli hipertansiyon yönetiminde yeni geliştirilen ajanların etkinliği ve güvenlik profilleri üzerine kapsamlı bir literatür taraması.'
        },
        {
            id: 3,
            title: 'Kalp Yetmezliğinde Biyobelirteçlerin Prognostik Değeri',
            journal: 'Anadolu Kardiyoloji Dergisi',
            year: '2021',
            type: 'Klinik Çalışma',
            authors: 'Demir A, Kaya B.',
            doi: '10.5152/akd.2021.56789',
            abstract: 'NT-proBNP ve Galectin-3 seviyelerinin 6 aylık rehospitalizasyon oranları ile ilişkisi prospektif olarak değerlendirilmiştir.'
        },
        {
            id: 4,
            title: 'Atriyal Fibrilasyon Ablasyonu Sonrası Rekürrens Prediktörleri',
            journal: 'Journal of Arrhythmia',
            year: '2020',
            type: 'Orijinal Araştırma',
            authors: 'Demir A, Johnson R, Williams T.',
            doi: '10.1002/joa3.12345',
            abstract: 'Kriyoablasyon uygulanan 200 hastanın 2 yıllık takibi sonucunda sol atriyum hacminin nüks üzerindeki etkisi.'
        },
        {
            id: 5,
            title: 'COVID-19 ve Miyokardit: Vaka Serisi Analizi',
            journal: 'Cardiology Journal',
            year: '2020',
            type: 'Vaka Raporu',
            authors: 'Demir A, Yıldız S.',
            doi: '10.5603/cj.2020.0099',
            abstract: 'COVID-19 enfeksiyonu seyri sırasında akut miyokardit gelişen 15 vakanın klinik özellikleri ve görüntüleme bulguları.'
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
                            Akademik Çalışmalar
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Yayınlar & Makaleler
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Kardiyoloji alanında literatüre katkı sağlayan bilimsel araştırmalarım ve yayınlarım.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button className="btn-medical">
                                <BookOpen className="w-5 h-5 mr-2" />
                                Google Scholar Profili
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-6 animate-fade-up">
                        {publications.map((pub) => (
                            <Card key={pub.id} className="card-medical hover:border-primary/40 group">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                                                {pub.type}
                                            </Badge>
                                            <span className="flex items-center text-sm text-muted-foreground">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {pub.year}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {pub.title}
                                        </h3>

                                        <p className="text-sm font-medium text-foreground/80 mb-3 italic">
                                            {pub.authors}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm text-primary font-medium mb-4">
                                            <BookOpen className="w-4 h-4" />
                                            {pub.journal}
                                        </div>

                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 border-l-2 border-primary/20 pl-4">
                                            {pub.abstract}
                                        </p>
                                    </div>

                                    <div className="flex md:flex-col gap-2 shrink-0">
                                        <Button variant="outline" size="sm" className="w-full md:w-auto">
                                            <LinkIcon className="w-4 h-4 mr-2" />
                                            Görüntüle
                                        </Button>
                                        <Button variant="outline" size="sm" className="w-full md:w-auto">
                                            <FileText className="w-4 h-4 mr-2" />
                                            Alıntıla
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Publications;
