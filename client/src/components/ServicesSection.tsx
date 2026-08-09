/**
 * Services Section — Clean grid of services
 */
import { Brain, Users, TrendingUp, AlertCircle, Heart, Handshake } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Psicoterapia Infantojuvenil",
    description: "Atendimento individual para crianças e adolescentes com base na TCC, adaptado à faixa etária.",
  },
  {
    icon: Users,
    title: "Orientação Parental",
    description: "Sessões com pais e cuidadores para desenvolver estratégias de comunicação e limites saudáveis.",
  },
  {
    icon: TrendingUp,
    title: "Desenvolvimento Contínuo",
    description: "Acompanhamento do desenvolvimento emocional e cognitivo em cada fase da infância e adolescência.",
  },
  {
    icon: AlertCircle,
    title: "Dificuldades Comportamentais",
    description: "Avaliação e intervenção em comportamentos desafiadores, birras, oposição e dificuldades escolares.",
  },
  {
    icon: Heart,
    title: "Saúde Emocional",
    description: "Trabalho com ansiedade, medos, tristeza, autoestima e regulação emocional.",
  },
  {
    icon: Handshake,
    title: "Relacionamentos Saudáveis",
    description: "Fortalecimento de habilidades sociais, empatia e construção de vínculos seguros.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-sand">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="font-serif-display text-3xl md:text-4xl text-stone-800 leading-tight mt-3 mb-4">
            Como posso ajudar sua família
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Ofereço um espaço seguro e acolhedor para crianças e adolescentes 
            desenvolverem suas potencialidades com apoio profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:border-stone-200 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 bg-stone-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-stone-100 transition-colors">
                  <Icon size={20} className="text-stone-700" />
                </div>
                <h3 className="font-semibold text-stone-800 text-base mb-2">{service.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
