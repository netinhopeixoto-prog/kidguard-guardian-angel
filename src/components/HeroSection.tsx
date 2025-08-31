import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-protection.jpg";

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open("https://checkout.perfectpay.com.br/pay/PPU38CNI74E?ref=PPA1JZZ8", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <Shield className="h-8 w-8 text-destructive animate-pulse" />
              <span className="text-destructive font-bold text-lg">PROTEÇÃO URGENTE</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              🚨 Proteja seus filhos dos <span className="text-destructive">perigos ocultos</span> da internet
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              <span className="text-destructive font-bold">Predadores online, conteúdos impróprios e ameaças reais</span> estão a um clique dos seus filhos. <br/>
              <span className="text-foreground font-semibold">Você tem o controle para protegê-los AGORA.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleCTAClick}
                className="text-xl px-8 py-6 h-auto group animate-pulse"
              >
                🛡️ PROTEGER MINHA FAMÍLIA AGORA
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 h-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Ver os perigos que você não conhece
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Proteção digital para famílias" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-full shadow-medium animate-pulse">
              <Shield className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-3 rounded-full shadow-medium animate-pulse delay-1000">
              <span className="text-sm font-bold">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;