/**
 * Approach Section — TCC methodology with handcrafted step cards
 * Design: White bg with linen texture, numbered steps as fabric patches
 */
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Acolhimento",
    description:
      "Primeiro encontro para conhecer a criança e a família, entender a demanda e criar um vínculo de confiança.",
    color: "#D4919A",
  },
  {
    number: "02",
    title: "Avaliação",
    description:
      "Identificação dos padrões de pensamento e comportamento através de atividades lúdicas e observação clínica.",
    color: "#8EB4D7",
  },
  {
    number: "03",
    title: "Intervenção",
    description:
      "Aplicação de técnicas da TCC adaptadas à idade, ensinando a criança a reconhecer e gerenciar suas emoções.",
    color: "#A8C9A5",
  },
  {
    number: "04",
    title: "Evolução",
    description:
      "Acompanhamento contínuo do progresso, com devolutivas aos pais e ajustes no plano terapêutico.",
    color: "#D4919A",
  },
];

export default function ApproachSection() {
  return (
    <section id="abordagem" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-linen" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="inline-block px-5 py-1.5 bg-[#FBF7F0] border-2 border-dashed border-[#A8C9A5]/40 rounded-full">
              <span className="text-xs font-medium text-[#A8C9A5] uppercase tracking-[0.15em]">
                Abordagem
              </span>
            </div>
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#6B5E5E] leading-tight">
              Terapia Cognitivo Comportamental para crianças
            </h2>
            <p className="text-[#6B5E5E]/80 leading-relaxed">
              A TCC é uma abordagem cientificamente comprovada que ajuda crianças 
              a entenderem a relação entre pensamentos, emoções e comportamentos. 
              De forma lúdica e adaptada à idade, trabalhamos juntos para 
              desenvolver habilidades que promovem bem-estar e autonomia.
            </p>

            {/* Benefits list with embroidery dots */}
            <div className="space-y-3 pt-2">
              {[
                "Baseada em evidências científicas",
                "Adaptada ao universo infantil",
                "Resultados observáveis em curto prazo",
                "Envolvimento ativo da família",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-dashed border-[#A8C9A5]/50 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#A8C9A5]" />
                  </div>
                  <span className="text-sm text-[#6B5E5E]/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Steps as fabric patches */}
          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-5 p-5 bg-[#FBF7F0] rounded-xl relative transition-all duration-300 hover:shadow-md"
                style={{
                  border: `2px dashed ${step.color}35`,
                }}
              >
                {/* Number badge */}
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-dashed"
                    style={{ borderColor: `${step.color}50`, backgroundColor: `${step.color}10` }}
                  >
                    <span className="font-serif-display text-sm font-bold" style={{ color: step.color }}>
                      {step.number}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#6B5E5E] mb-1">{step.title}</h3>
                  <p className="text-sm text-[#6B5E5E]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
