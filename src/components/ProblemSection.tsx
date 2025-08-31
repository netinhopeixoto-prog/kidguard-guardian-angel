import { Globe, AlertTriangle, Heart } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-destructive/20 rounded-full border-2 border-destructive">
                <Globe className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="font-bold text-destructive text-xl">PREDADORES ONLINE</h3>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-destructive/20 rounded-full border-2 border-destructive">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="font-bold text-destructive text-xl">CONTEÚDOS IMPRÓPRIOS</h3>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-destructive/20 rounded-full border-2 border-destructive">
                <Heart className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="font-bold text-destructive text-xl">ADULTIZAÇÃO PRECOCE</h3>
            </div>
          </div>
          
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              <span className="text-destructive font-bold">ATENÇÃO PAIS:</span> Enquanto você lê isso, <span className="text-accent font-semibold">milhares de crianças estão sendo expostas a conteúdos sexualizados, pedófilos e predadores online</span>.
            </p>
            
            <div className="bg-gradient-accent p-8 rounded-lg border-2 border-accent shadow-accent">
              <p className="text-2xl md:text-3xl font-bold text-accent-foreground text-center">
                ⚠️ Você sabe REALMENTE o que seu filho acessa quando está "só brincando" no celular?
              </p>
            </div>
            
            <div className="bg-card border-2 border-destructive rounded-lg p-6">
              <p className="text-lg text-foreground">
                <span className="text-destructive font-bold">FATOS ALARMANTES:</span><br/>
                • 1 em cada 7 crianças recebe abordagens sexuais online<br/>
                • 89% dos menores são expostos a pornografia antes dos 16 anos<br/>
                • Predadores levam apenas 3 minutos para iniciar uma conversa inadequada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;