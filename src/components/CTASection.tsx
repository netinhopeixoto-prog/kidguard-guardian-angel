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
  title = "Existem maneiras mais inteligentes de cuidar do que nossos filhos acessam online.",
  description,
  buttonText = "👉 Quero conhecer agora"
}: CTASectionProps) => {
  const handleCTAClick = () => {
    window.open("https://checkout.perfectpay.com.br/pay/PPU38CNI74E?ref=PPA1JZZ8", "_blank");
  };

  return (
    <section className={`py-20 ${variant === 'primary' ? 'bg-primary' : 'bg-accent'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-full ${variant === 'primary' ? 'bg-white/10' : 'bg-white/20'}`}>
              <Lightbulb className={`h-12 w-12 ${variant === 'primary' ? 'text-white' : 'text-white'}`} />
            </div>
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-bold leading-tight ${variant === 'primary' ? 'text-white' : 'text-white'}`}>
            {title}
          </h2>
          
          {description && (
            <p className={`text-xl leading-relaxed ${variant === 'primary' ? 'text-white/90' : 'text-white/90'}`}>
              {description}
            </p>
          )}
          
          <div className="pt-8">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleCTAClick}
              className="text-xl px-12 py-8 h-auto group"
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