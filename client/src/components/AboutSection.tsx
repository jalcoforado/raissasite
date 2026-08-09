/**
 * About Section — Bio with pastel blue accents
 */
import { Award, BookOpen, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-[#F5EDE7]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-blue-50 max-w-md">
              <img
                src="/manus-storage/raissa-photo_6d3c1d4a.jpeg"
                alt="Raíssa Alcoforado - Psicóloga Infantojuvenil"
                className="w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <p className="font-script text-2xl text-[#8EA0AD]">Sobre mim</p>
            <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
              Cuidar de crianças e adolescentes é cuidar do futuro
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Sou <strong>Raíssa Alcoforado</strong>, psicóloga infantojuvenil apaixonada por 
              ajudar crianças, adolescentes e suas famílias a construírem relações mais 
              saudáveis e emocionalmente seguras. Minha abordagem é baseada na Terapia 
              Cognitivo Comportamental (TCC), que oferece ferramentas práticas e 
              cientificamente comprovadas.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Meu trabalho busca oferecer um espaço seguro de escuta, acolhimento e 
              desenvolvimento emocional. Acredito que cada criança e adolescente é único 
              e merece ser ouvido com carinho e ciência.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                  <BookOpen size={18} className="text-[#8EA0AD]" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Especialista</p>
                  <p className="text-xs text-slate-500">em TCC Infantojuvenil</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-pink-50/50 rounded-xl border border-pink-100/50">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                  <Users size={18} className="text-[#D4919A]" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Famílias</p>
                  <p className="text-xs text-slate-500">Atendimento integral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
