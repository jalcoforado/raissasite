/**
 * Pro Section — Serviços para Psicólogos
 * Design: Distinct from the family section, uses deeper tones but keeps the handcrafted feel
 * Services: Supervisão, Mentoria, Comunidade, Materiais, Workshop
 */
import { Users, GraduationCap, BookOpen, Video, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const proServices = [
  {
    icon: Users,
    title: "Supervisão Individual",
    description: "Acompanhamento personalizado para aprimorar sua prática clínica com crianças e adolescentes. Discussão de casos, técnicas da TCC e manejo terapêutico.",
    price: "R$ 100/hora",
    color: "#D4919A",
  },
  {
    icon: GraduationCap,
    title: "Supervisão em Grupo",
    description: "Encontros em grupo para troca de experiências, discussão de casos e aprendizado coletivo entre profissionais da psicologia infantojuvenil.",
    price: "Consulte valores",
    color: "#8EB4D7",
  },
  {
    icon: MessageCircle,
    title: "Mentoria",
    description: "Programa de mentoria para psicólogos que desejam se especializar em atendimento infantojuvenil com abordagem TCC. Do início da carreira à consolidação.",
    price: "Consulte",
    color: "#A8C9A5",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Faça parte de uma comunidade exclusiva de psicólogos infantojuvenis. Networking, troca de materiais, apoio profissional e atualizações constantes.",
    price: null,
    color: "#C9A96E",
  },
  {
    icon: BookOpen,
    title: "Materiais e Aulas Gratuitas",
    description: "Acesse conteúdos gratuitos para aprimorar sua prática: aulas, PDFs, técnicas adaptadas e recursos para o consultório infantil.",
    price: "Gratuito",
    color: "#8EB4D7",
  },
  {
    icon: Calendar,
    title: "Workshop",
    description: "Workshops práticos e imersivos sobre temas específicos da psicologia infantojuvenil. Aprendizado intensivo com certificado.",
    price: "Em breve",
    color: "#D4919A",
  },
];

export default function ProSection() {
  return (
    <section id="para-psicologos" className="py-20 relative overflow-hidden">
      {/* Background — slightly different from family sections */}
      <div className="absolute inset-0 bg-[#F5F0E8]" />
      <div className="absolute inset-0 bg-linen" />
      <div className="absolute inset-0 bg-gingham opacity-10" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-5 py-1.5 bg-white/80 border-2 border-dashed border-[#C9A96E]/40 rounded-full mb-4">
            <span className="text-xs font-medium text-[#C9A96E] uppercase tracking-[0.15em]">
              Para Psicólogos
            </span>
          </div>
          <h2 className="font-serif-display text-3xl md:text-4xl text-[#6B5E5E] leading-tight mb-4">
            Cresça na sua prática clínica
          </h2>
          <p className="text-[#6B5E5E]/70 leading-relaxed">
            Ofereço supervisão, mentoria e recursos para psicólogos que desejam 
            se aprofundar no atendimento infantojuvenil com base na Terapia 
            Cognitivo Comportamental.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/90 rounded-2xl p-6 border-2 border-dashed border-[#6B5E5E]/10 hover:border-[#D4919A]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Stitched corner accent */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-dashed opacity-30" style={{ borderColor: service.color }} />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-dashed opacity-30" style={{ borderColor: service.color }} />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-dashed"
                  style={{ backgroundColor: `${service.color}10`, borderColor: `${service.color}40` }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-[#6B5E5E] text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-[#6B5E5E]/70 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Price tag — fabric label style */}
                {service.price && (
                  <div className="inline-flex items-center px-3 py-1.5 bg-[#FBF7F0] rounded-full border border-dashed" style={{ borderColor: `${service.color}30` }}>
                    <span className="text-xs font-semibold" style={{ color: service.color }}>
                      {service.price}
                    </span>
                  </div>
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
              className="bg-[#C9A96E] hover:bg-[#b8984f] text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Sou%20psic%C3%B3logo(a)%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20supervis%C3%A3o." target="_blank" rel="noopener noreferrer">
                Quero saber mais sobre supervisão
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-dashed border-[#C9A96E]/40 text-[#C9A96E] hover:bg-[#C9A96E]/10 rounded-full px-8 py-6 text-base transition-all duration-200"
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
