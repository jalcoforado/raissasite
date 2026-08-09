/**
 * Services Section — Cards with pastel blue/pink accents on gingham bg
 */
import { Brain, Users, TrendingUp, AlertCircle, Heart, Handshake } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Psicoterapia Infantojuvenil",
    description: "Atendimento individual para crianças e adolescentes com base na TCC, adaptado à faixa etária.",
    accent: "blue",
  },
  {
    icon: Users,
    title: "Orientação Parental",
    description: "Sessões com pais e cuidadores para desenvolver estratégias de comunicação e limites saudáveis.",
    accent: "pink",
  },
  {
    icon: TrendingUp,
    title: "Desenvolvimento Contínuo",
    description: "Acompanhamento do desenvolvimento emocional e cognitivo em cada fase da infância e adolescência.",
    accent: "blue",
  },
  {
    icon: AlertCircle,
    title: "Dificuldades Comportamentais",
    description: "Avaliação e intervenção em comportamentos desafiadores, birras, oposição e dificuldades escolares.",
    accent: "pink",
  },
  {
    icon: Heart,
    title: "Saúde Emocional",
    description: "Trabalho com ansiedade, medos, tristeza, autoestima e regulação emocional.",
    accent: "blue",
  },
  {
    icon: Handshake,
    title: "Relacionamentos Saudáveis",
    description: "Fortalecimento de habilidades sociais, empatia e construção de vínculos seguros.",
    accent: "pink",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-gingham-light relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-blue-50/30 pointer-events-none" />
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-script text-2xl text-[#8EA0AD] mb-2">Serviços</p>
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
            Como posso ajudar sua família
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Ofereço um espaço seguro e acolhedor para crianças e adolescentes 
            desenvolverem suas potencialidades com apoio profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isBlue = service.accent === "blue";
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-blue-50 hover:shadow-md hover:border-blue-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  isBlue ? "bg-blue-50 group-hover:bg-blue-100" : "bg-pink-50 group-hover:bg-pink-100"
                }`}>
                  <Icon size={22} className={isBlue ? "text-[#8EA0AD]" : "text-[#D4919A]"} />
                </div>
                <h3 className="font-semibold text-slate-800 text-base mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
