/**
 * Pro Section — Services for psychologists
 * Design: Professional, distinct from family sections
 */
import { Users, GraduationCap, BookOpen, Calendar, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const proServices = [
  {
    icon: Users,
    title: "Supervisão Individual",
    description: "Acompanhamento personalizado para aprimorar sua prática clínica com crianças e adolescentes.",
    price: "R$ 100/hora",
  },
  {
    icon: GraduationCap,
    title: "Supervisão em Grupo",
    description: "Encontros em grupo para troca de experiências, discussão de casos e aprendizado coletivo.",
    price: "Consulte valores",
  },
  {
    icon: MessageCircle,
    title: "Mentoria",
    description: "Programa para psicólogos que desejam se especializar em atendimento infantojuvenil com TCC.",
    price: "Consulte",
  },
  {
    icon: Sparkles,
    title: "Comunidade",
    description: "Espaço exclusivo de networking, troca de materiais e apoio entre psicólogos infantojuvenis.",
    price: null,
  },
  {
    icon: BookOpen,
    title: "Materiais e Aulas Gratuitas",
    description: "Conteúdos gratuitos: aulas, PDFs, técnicas adaptadas e recursos para o consultório.",
    price: "Gratuito",
  },
  {
    icon: Calendar,
    title: "Workshop",
    description: "Workshops práticos e imersivos sobre temas da psicologia infantojuvenil.",
    price: "Em breve",
  },
];

export default function ProSection() {
  return (
    <section id="para-psicologos" className="py-20 bg-stone-800 text-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium text-stone-400 uppercase tracking-wider">
            Para Psicólogos
          </span>
          <h2 className="font-serif-display text-3xl md:text-4xl text-white leading-tight mt-3 mb-4">
            Cresça na sua prática clínica
          </h2>
          <p className="text-stone-300 leading-relaxed">
            Supervisão, mentoria e recursos para psicólogos que desejam se 
            aprofundar no atendimento infantojuvenil com base na TCC.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {proServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-stone-700/50 backdrop-blur-sm rounded-xl p-6 border border-stone-600/50 hover:border-stone-500 hover:bg-stone-700/80 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-stone-600/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-stone-500/50 transition-colors">
                  <Icon size={20} className="text-stone-300" />
                </div>
                <h3 className="font-semibold text-white text-base mb-2">{service.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed mb-4">{service.description}</p>
                {service.price && (
                  <span className="inline-block px-3 py-1 bg-stone-600/50 rounded-md text-xs font-medium text-stone-300">
                    {service.price}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-stone-100 text-stone-800 rounded-lg px-7 py-6 text-base shadow-lg transition-all duration-200 hover:scale-[1.02]"
            >
              <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Sou%20psic%C3%B3logo(a)%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20supervis%C3%A3o." target="_blank" rel="noopener noreferrer">
                Quero saber mais sobre supervisão
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-stone-500 text-white hover:bg-stone-700 rounded-lg px-7 py-6 text-base transition-all duration-200"
            >
              <a href="https://www.instagram.com/raissalcoforado" target="_blank" rel="noopener noreferrer">
                Acompanhe no Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
