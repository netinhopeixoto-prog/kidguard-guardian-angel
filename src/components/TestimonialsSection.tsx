import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Renata",
      role: "mãe de um adolescente",
      content: "Agora me sinto mais tranquila acompanhando o que meu filho faz online.",
      rating: 5
    },
    {
      name: "Carlos",
      role: "pai de duas crianças",
      content: "Uma ferramenta que todo pai e mãe deveria conhecer.",
      rating: 5
    },
    {
      name: "Juliana",
      role: "mãe de 9 anos",
      content: "Ajuda a ter mais clareza e controle no dia a dia.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que outros pais estão dizendo
            </h2>
            <p className="text-xl text-muted-foreground">
              Depoimentos reais de famílias que já experimentaram a tranquilidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <Quote className="h-8 w-8 text-primary/30" />
                  </div>
                  
                  <p className="text-foreground text-lg leading-relaxed text-center italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <p className="font-semibold text-foreground">— {testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;