import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight } from "lucide-react";

interface CTASectionProps {
  variant?: 'primary' | 'secondary';
  title?: string;
  description?: string;
  buttonText?: string;
}

const CTASection = ({ 
  variant = 'primary',
  title = "🛡️ Existe uma forma COMPROVADA de proteger seus filhos dos perigos online",
  description = "Mais de 50.000 famílias já descobriram como criar um escudo digital eficaz. Não deixe seus filhos vulneráveis nem mais um dia.",
  buttonText = "🚨 QUERO PROTEGER AGORA"
}: CTASectionProps) => {
  const handleCTAClick = () => {
    window.open("https://checkout.perfectpay.com.br/pay/PPU38CNI74E?ref=PPA1JZZ8", "_blank");
  };

  return (
    <section className={`py-20 ${variant === 'primary' ? 'bg-gradient-accent' : 'bg-gradient-accent'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-accent-foreground/20 border-2 border-accent-foreground shadow-accent">
              <Lightbulb className="h-12 w-12 text-accent-foreground" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-accent-foreground">
            {title}
          </h2>
          
          {description && (
            <p className="text-xl leading-relaxed text-accent-foreground/90 font-medium">
              {description}
            </p>
          )}
          
          <div className="pt-8">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleCTAClick}
              className="text-xl px-12 py-8 h-auto group animate-pulse"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;