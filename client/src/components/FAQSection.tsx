/**
 * FAQ Section — Perguntas Frequentes sobre terapia infantil
 */
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Como sei que meu filho precisa de acompanhamento psicológico?",
    answer: "Alguns sinais incluem mudanças bruscas de comportamento, dificuldades na escola, isolamento social, irritabilidade excessiva, medos intensos, dificuldade para dormir ou alterações no apetite. Se você percebe que algo não está bem e que a criança ou adolescente está sofrendo, uma avaliação pode ajudar a entender o que está acontecendo e qual o melhor caminho.",
  },
  {
    question: "Como funciona a primeira consulta?",
    answer: "A primeira sessão é uma conversa inicial com os pais ou responsáveis para entender a história da criança, as queixas principais e o contexto familiar. Depois, realizo sessões de avaliação com a criança/adolescente para conhecê-la melhor. Ao final, compartilho minhas observações e proponho um plano de acompanhamento personalizado.",
  },
  {
    question: "Quanto tempo dura o processo terapêutico?",
    answer: "Cada caso é único. Algumas demandas podem ser trabalhadas em poucos meses, enquanto outras necessitam de um acompanhamento mais prolongado. A duração depende da complexidade da situação, da frequência das sessões e da evolução da criança. Reavaliamos periodicamente os objetivos juntos.",
  },
  {
    question: "Os pais participam do processo?",
    answer: "Sim! A participação da família é fundamental. Realizo sessões de orientação parental para que os pais compreendam o que está acontecendo e saibam como apoiar o desenvolvimento do filho em casa. A terapia é mais eficaz quando família e terapeuta trabalham juntos.",
  },
  {
    question: "O que é a Terapia Cognitivo-Comportamental (TCC)?",
    answer: "A TCC é uma abordagem científica que trabalha a relação entre pensamentos, emoções e comportamentos. Com crianças e adolescentes, utilizo recursos lúdicos, jogos e atividades adaptadas à idade para ajudá-los a identificar e modificar padrões que causam sofrimento, desenvolvendo habilidades emocionais e sociais.",
  },
  {
    question: "O atendimento pode ser online?",
    answer: "Sim, ofereço atendimento tanto presencial (na Clínica Crescer, em Fortaleza) quanto online. O atendimento online funciona muito bem para adolescentes e para as sessões de orientação parental. Para crianças menores, o presencial costuma ser mais indicado, mas avaliamos caso a caso.",
  },
  {
    question: "Qual o valor e a frequência das sessões?",
    answer: "A consulta avulsa é R$250 e o pacote de 4 sessões sai por R$200 cada (R$800 total). A frequência recomendada é semanal, especialmente no início do processo. Conforme a evolução, podemos espaçar para quinzenal. Cada sessão dura aproximadamente 50 minutos.",
  },
  {
    question: "O que acontece na sessão com a criança?",
    answer: "As sessões são adaptadas à idade e ao perfil de cada criança. Utilizo jogos, brincadeiras, histórias, desenhos e atividades estruturadas da TCC. O objetivo é criar um espaço seguro onde a criança se sinta à vontade para se expressar e, ao mesmo tempo, desenvolver novas habilidades para lidar com suas dificuldades.",
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-blue-100 rounded-xl overflow-hidden transition-all duration-200 hover:border-blue-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-blue-50/30 transition-colors duration-200"
      >
        <span className="font-medium text-slate-800 pr-4">{item.question}</span>
        <ChevronDown
          size={20}
          className={`text-[#5B8DB8] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-5 text-slate-600 leading-relaxed text-sm">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <p className="font-script text-2xl text-[#5B8DB8] mb-2">Dúvidas</p>
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Tire suas principais dúvidas sobre o processo de terapia infantojuvenil.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-3">
            Ainda tem dúvidas? Fale comigo pelo WhatsApp!
          </p>
          <a
            href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5B8DB8] hover:bg-[#4A7CA7] text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Tirar dúvidas pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
