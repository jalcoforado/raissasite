/**
 * Services Section — Scrapbook-style patches with embroidered icons
 * Design: Cream bg with linen texture, cards as fabric swatches with stitched borders
 */
import { Brain, Heart, Users, Sprout, MessageCircleHeart, Puzzle } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Psicoterapia Infantojuvenil",
    description:
      "Atendimento individual para crianças e adolescentes com base na TCC, trabalhando emoções, pensamentos e comportamentos de forma lúdica e acolhedora.",
    color: "#D4919A",
  },
  {
    icon: Users,
    title: "Orientação Parental",
    description:
      "Sessões com pais e cuidadores para desenvolver estratégias eficazes de comunicação, limites saudáveis e fortalecimento do vínculo familiar.",
    color: "#8EB4D7",
  },
  {
    icon: Sprout,
    title: "Desenvolvimento Contínuo",
    description:
      "Acompanhamento do desenvolvimento emocional e cognitivo da criança, identificando potencialidades e oferecendo suporte em cada fase.",
    color: "#A8C9A5",
  },
  {
    icon: Puzzle,
    title: "Dificuldades Comportamentais",
    description:
      "Avaliação e intervenção em comportamentos desafiadores como agressividade, birras, dificuldade de socialização e problemas escolares.",
    color: "#D4919A",
  },
  {
    icon: Heart,
    title: "Saúde Emocional",
    description:
      "Trabalho com ansiedade, medos, tristeza e autoestima, ajudando a criança a desenvolver resiliência e inteligência emocional.",
    color: "#8EB4D7",
  },
  {
    icon: MessageCircleHeart,
    title: "Relacionamentos Saudáveis",
    description:
      "Fortalecimento das habilidades sociais e emocionais para que a criança construa vínculos positivos com família, amigos e escola.",
    color: "#A8C9A5",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-[#FBF7F0] relative">
      {/* Linen texture overlay */}
      <div className="absolute inset-0 bg-linen" />
      <div className="absolute inset-0 bg-gingham opacity-20" />
      
      <div className="container relative z-10">
        {/* Section Header — like a scrapbook label */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-5 py-1.5 bg-white border-2 border-dashed border-[#8EB4D7]/40 rounded-full mb-4">
            <span className="text-xs font-medium text-[#8EB4D7] uppercase tracking-[0.15em]">
              Serviços
            </span>
          </div>
          <h2 className="font-serif-display text-3xl md:text-4xl text-[#6B5E5E] leading-tight">
            Como posso ajudar sua família
          </h2>
          <p className="text-[#6B5E5E]/70 mt-4 leading-relaxed">
            Ofereço um espaço seguro e acolhedor onde crianças podem crescer 
            emocionalmente e famílias podem se fortalecer juntas.
          </p>
        </div>

        {/* Services Grid — fabric patch cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              style={{
                border: `2px dashed ${service.color}40`,
                boxShadow: `4px 4px 0px 0px ${service.color}15`,
              }}
            >
              {/* Corner stitch marks */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 rounded-tl-sm" style={{ borderColor: `${service.color}50` }} />
              <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 rounded-tr-sm" style={{ borderColor: `${service.color}50` }} />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 rounded-bl-sm" style={{ borderColor: `${service.color}50` }} />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 rounded-br-sm" style={{ borderColor: `${service.color}50` }} />
              
              {/* Icon badge — embroidered circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 border-2 border-dashed"
                style={{ 
                  backgroundColor: `${service.color}10`,
                  borderColor: `${service.color}40`,
                }}
              >
                <service.icon size={24} style={{ color: service.color }} />
              </div>
              
              <h3 className="font-semibold text-[#6B5E5E] text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[#6B5E5E]/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
