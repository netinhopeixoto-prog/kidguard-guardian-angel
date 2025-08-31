import { Check, Users, Clock, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Focado em pais responsáveis",
      description: "Desenvolvido especificamente para famílias que valorizam a segurança digital"
    },
    {
      icon: Clock,
      title: "Simples e prático",
      description: "Interface intuitiva que não requer conhecimento técnico avançado"
    },
    {
      icon: Shield,
      title: "Acesso imediato e exclusivo",
      description: "Comece a proteger sua família agora mesmo, sem complicações"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Conteúdo criado especialmente para famílias
            </h2>
            <p className="text-xl text-muted-foreground">
              Este é um conteúdo criado especialmente para famílias que valorizam 
              segurança digital e querem oferecer um ambiente mais saudável para seus filhos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <h3 className="font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;