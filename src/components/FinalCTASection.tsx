import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Shield } from "lucide-react";

const FinalCTASection = () => {
  const handleCTAClick = () => {
    window.open("https://checkout.perfectpay.com.br/pay/PPU38CNI74E?ref=PPA1JZZ8", "_blank");
  };

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
              <Heart className="h-8 w-8 text-accent animate-pulse" />
              <span className="text-white font-semibold text-lg">Ato de Amor e Responsabilidade</span>
              <Shield className="h-8 w-8 text-accent animate-pulse delay-1000" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Proteger nossos filhos no ambiente digital é um{" "}
            <span className="text-accent">ato de amor e responsabilidade</span>
          </h2>
          
          <p className="text-2xl text-white/90 leading-relaxed">
            Dê o próximo passo agora.
          </p>
          
          <div className="pt-8">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleCTAClick}
              className="text-2xl px-16 py-10 h-auto group shadow-strong hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-all duration-500"
            >
              👉 Quero proteger minha família agora
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
          
          <div className="pt-8 text-white/70 text-sm">
            <p>✅ Acesso imediato • ✅ Seguro e confiável • ✅ Suporte dedicado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;