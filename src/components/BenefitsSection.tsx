import { Users, Clock, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "🎯 PAIS INTELIGENTES",
      description: "Para pais que não esperam tragédias acontecerem para agir"
    },
    {
      icon: Clock,
      title: "⚡ PROTEÇÃO IMEDIATA",
      description: "Ative em minutos e durma tranquilo sabendo que seus filhos estão seguros"
    },
    {
      icon: Shield,
      title: "🚨 ACESSO URGENTE",
      description: "Cada hora sem proteção é uma oportunidade para predadores agirem"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              🛡️ ESCUDO DIGITAL EXCLUSIVO
            </h2>
            <p className="text-xl text-accent font-semibold">
              Sistema de controle parental utilizado por famílias que REALMENTE se importam com a segurança dos filhos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-8 bg-gradient-accent rounded-lg border-2 border-accent shadow-accent">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-accent-foreground rounded-full">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-accent-foreground mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-accent-foreground/90 font-medium">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-card border-2 border-destructive rounded-lg p-6 inline-block">
              <p className="text-destructive font-bold text-xl">
                ⏰ OFERTA LIMITADA
              </p>
              <p className="text-foreground mt-2">
                Apenas para os primeiros 1.000 pais responsáveis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;