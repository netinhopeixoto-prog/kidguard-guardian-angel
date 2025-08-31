import { Globe, AlertTriangle, Heart } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Mundo Conectado</h3>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-destructive/10 rounded-full">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground">Informações e Distrações</h3>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-accent/10 rounded-full">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Cuidado Parental</h3>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed">
              Vivemos em um mundo conectado, cheio de informações e distrações 
              a apenas um clique de distância.
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              E, como pais, é natural querer estar um passo à frente para proteger 
              nossas crianças nesse ambiente.
            </p>
            
            <div className="bg-card rounded-xl p-8 shadow-soft border-l-4 border-primary">
              <p className="text-2xl font-semibold text-foreground">
                Mas como equilibrar liberdade, aprendizado e segurança?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;