/**
 * Testimonials Section — Depoimentos de pais
 * Placeholder slots ready to be filled with real testimonials
 */
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  relation: string;
  filled: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Em breve, este espaço será preenchido com o relato de uma família que passou pelo processo terapêutico.",
    author: "Nome do responsável",
    relation: "Mãe/Pai de paciente",
    filled: false,
  },
  {
    id: 2,
    text: "Em breve, este espaço será preenchido com o relato de uma família que passou pelo processo terapêutico.",
    author: "Nome do responsável",
    relation: "Mãe/Pai de paciente",
    filled: false,
  },
  {
    id: 3,
    text: "Em breve, este espaço será preenchido com o relato de uma família que passou pelo processo terapêutico.",
    author: "Nome do responsável",
    relation: "Mãe/Pai de paciente",
    filled: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-blue-50/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="font-script text-2xl text-[#5B8DB8] mb-2">Depoimentos</p>
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
            O que dizem as famílias
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto">
            A confiança das famílias é o que nos move. Em breve, compartilharemos
            aqui relatos de pais sobre a experiência terapêutica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`relative bg-white rounded-2xl p-6 shadow-sm border transition-all duration-300 ${
                testimonial.filled
                  ? "border-blue-100 hover:shadow-md hover:border-blue-200"
                  : "border-dashed border-blue-200/70 opacity-75 hover:opacity-100"
              }`}
            >
              {/* Quote icon */}
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Quote size={18} className="text-[#5B8DB8]" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={testimonial.filled ? "text-amber-400 fill-amber-400" : "text-blue-200 fill-blue-100"}
                  />
                ))}
              </div>

              {/* Text */}
              <p className={`text-sm leading-relaxed mb-5 ${
                testimonial.filled ? "text-slate-600" : "text-slate-400 italic"
              }`}>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-blue-50 pt-4">
                <p className={`font-medium text-sm ${
                  testimonial.filled ? "text-slate-800" : "text-slate-400"
                }`}>
                  {testimonial.author}
                </p>
                <p className={`text-xs ${
                  testimonial.filled ? "text-slate-500" : "text-slate-300"
                }`}>
                  {testimonial.relation}
                </p>
              </div>

              {/* Placeholder badge */}
              {!testimonial.filled && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-blue-50 text-[#5B8DB8] text-[10px] font-medium rounded-full">
                    Em breve
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-400 text-sm">
            Os depoimentos são compartilhados com autorização expressa das famílias.
          </p>
        </div>
      </div>
    </section>
  );
}
