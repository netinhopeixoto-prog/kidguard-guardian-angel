import { Shield, Users, CheckCircle, Star } from "lucide-react";

const ProofSection = () => {
  const proofs = [
    {
      icon: Users,
      number: "50.000+",
      text: "Famílias protegidas"
    },
    {
      icon: CheckCircle, 
      number: "97%",
      text: "Taxa de eficácia"
    },
    {
      icon: Shield,
      number: "24/7",
      text: "Proteção contínua"
    }
  ];

  const testimonials = [
    {
      name: "Renata M.",
      role: "Mãe de adolescente",
      content: "Hoje tenho mais tranquilidade sabendo o que meu filho acessa online. Descobri coisas que me deixaram em choque.",
      rating: 5
    },
    {
      name: "João S.", 
      role: "Pai de duas crianças",
      content: "Meu filho quase foi abordado por estranhos na internet. Essa ferramenta me alertou a tempo. Salvou minha família.",
      rating: 5
    },
    {
      name: "Carla L.",
      role: "Mãe de 9 anos",
      content: "Não conseguia mais dormir pensando nos perigos online. Agora tenho controle total e minha filha está segura.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6">
              ✅ PROVAS DE EFICÁCIA
            </h2>
            <p className="text-xl text-accent-foreground/90 font-medium">
              Reconhecido como a solução essencial para segurança digital infantil
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {proofs.map((proof, index) => (
              <div key={index} className="text-center bg-accent-foreground/10 p-8 rounded-lg border-2 border-accent-foreground/20">
                <div className="mx-auto w-16 h-16 bg-accent-foreground rounded-full flex items-center justify-center mb-4">
                  <proof.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent-foreground mb-2">
                  {proof.number}
                </div>
                <p className="text-accent-foreground/80 font-medium">
                  {proof.text}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border-2 border-accent shadow-accent">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-accent">{testimonial.name}</div>
                  <div className="text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-destructive/20 border-2 border-destructive rounded-lg p-6 inline-block">
              <p className="text-destructive font-bold text-lg">
                ⚠️ NÃO ESPERE UMA TRAGÉDIA ACONTECER
              </p>
              <p className="text-foreground mt-2">
                Cada minuto sem proteção é um risco desnecessário
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;