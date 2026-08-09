/**
 * Approach Section — TCC methodology explained clearly
 */
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Acolhimento",
    description: "Primeiro encontro para conhecer a criança/adolescente e sua família, criando um vínculo de confiança.",
  },
  {
    number: "02",
    title: "Avaliação",
    description: "Identificação de padrões de pensamento e comportamento através de atividades adaptadas à idade.",
  },
  {
    number: "03",
    title: "Intervenção",
    description: "Aplicação de técnicas da TCC de forma lúdica para crianças e dialogada para adolescentes.",
  },
  {
    number: "04",
    title: "Evolução",
    description: "Acompanhamento contínuo com devolutivas regulares aos pais e ajustes no plano terapêutico.",
  },
];

const benefits = [
  "Abordagem cientificamente comprovada",
  "Adaptada ao universo infantojuvenil",
  "Resultados observáveis em curto prazo",
  "Família envolvida ativamente no processo",
  "Técnicas práticas para o dia a dia",
];

export default function ApproachSection() {
  return (
    <section id="abordagem" className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">
              Abordagem
            </span>
            <h2 className="font-serif-display text-3xl md:text-4xl text-stone-800 leading-tight">
              Terapia Cognitivo Comportamental
            </h2>
            <p className="text-stone-600 leading-relaxed">
              A TCC é uma abordagem cientificamente comprovada que ajuda crianças 
              e adolescentes a entenderem a relação entre pensamentos, emoções e 
              comportamentos. É adaptada de forma lúdica para os pequenos e 
              dialogada para os adolescentes, com resultados práticos e mensuráveis.
            </p>
            <div className="space-y-3 pt-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                  <span className="text-stone-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-100 hover:bg-stone-100/50 transition-colors"
              >
                <span className="text-2xl font-bold text-stone-300 font-serif-display flex-shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
