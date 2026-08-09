/**
 * Pro Section — Services for psychologists with blue accent
 */
import { Users, GraduationCap, BookOpen, Calendar, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const proServices = [
  { icon: Users, title: "Supervisão Individual", description: "Acompanhamento personalizado para aprimorar sua prática clínica com crianças e adolescentes.", price: "R$ 100/hora" },
  { icon: GraduationCap, title: "Supervisão em Grupo", description: "Encontros em grupo para troca de experiências, discussão de casos e aprendizado coletivo.", price: "Consulte valores" },
  { icon: MessageCircle, title: "Mentoria", description: "Programa para psicólogos que desejam se especializar em atendimento infantojuvenil com TCC.", price: "Consulte" },
  { icon: Sparkles, title: "Comunidade", description: "Espaço exclusivo de networking, troca de materiais e apoio entre psicólogos infantojuvenis.", price: null },
  { icon: BookOpen, title: "Materiais e Aulas Gratuitas", description: "Conteúdos gratuitos: aulas, PDFs, técnicas adaptadas e recursos para o consultório.", price: "Gratuito" },
  { icon: Calendar, title: "Workshop", description: "Workshops práticos e imersivos sobre temas da psicologia infantojuvenil.", price: "Em breve" },
];

export default function ProSection() {
  return (
    <section id="para-psicologos" className="py-20 bg-[#3D6B8E] text-white relative overflow-hidden">
      {/* Subtle gingham overlay */}
      <div className="absolute inset-0 opacity-5 bg-gingham pointer-events-none" />
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-script text-2xl text-blue-200 mb-2">Para Psicólogos</p>
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Cresça na sua prática clínica
          </h2>
          <p className="text-blue-100 leading-relaxed">
            Supervisão, mentoria e recursos para psicólogos que desejam se 
            aprofundar no atendimento infantojuvenil com base na TCC.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {proServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 hover:border-white/30 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon size={20} className="text-blue-200" />
                </div>
                <h3 className="font-semibold text-white text-base mb-2">{service.title}</h3>
                <p className="text-sm text-blue-100/80 leading-relaxed mb-4">{service.description}</p>
                {service.price && (
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-blue-100">
                    {service.price}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-blue-50 text-[#3D6B8E] rounded-full px-8 py-6 text-base shadow-lg transition-all duration-200 hover:scale-[1.02]"
            >
              <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Sou%20psic%C3%B3logo(a)%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20supervis%C3%A3o." target="_blank" rel="noopener noreferrer">
                Quero saber mais sobre supervisão
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base transition-all duration-200"
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
