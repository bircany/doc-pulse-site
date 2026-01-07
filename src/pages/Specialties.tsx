import Navigation from '@/components/Navigation';
import SpecialtySection from '@/components/SpecialtySection';
import Footer from '@/components/Footer';

const Specialties = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <div className="pt-20">
                <SpecialtySection />
            </div>
            <Footer />
        </div>
    );
};

export default Specialties;
