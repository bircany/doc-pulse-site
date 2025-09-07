import { useLocation, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Heart, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-soft flex items-center justify-center px-4">
      <Card className="card-medical max-w-md w-full text-center animate-fade-up">
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Heart className="w-10 h-10 text-primary-foreground" />
        </div>
        
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Sayfa Bulunamadı</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
          Ana sayfaya dönerek aradığınızı bulabilirsiniz.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="btn-medical">
            <NavLink to="/">
              <Home className="w-4 h-4 mr-2" />
              Ana Sayfa
            </NavLink>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()} className="btn-medical-secondary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Geri Dön
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
