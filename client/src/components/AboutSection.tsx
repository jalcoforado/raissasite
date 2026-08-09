/**
 * About Section — Professional bio with real photo
 */
import { Award, BookOpen, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/manus-storage/raissa-photo_6d3c1d4a.jpeg"
                alt="Raíssa Alcoforado - Psicóloga Infantojuvenil"
                className="w-full object-cover aspect-[3/4]"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <Award size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-800">CRP 11/19565</p>
                  <p className="text-xs text-stone-500">Especialista TCC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">
              Sobre mim
            </span>
            <h2 className="font-serif-display text-3xl md:text-4xl text-stone-800 leading-tight">
              Cuidar de crianças e adolescentes é cuidar do futuro
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Sou Raíssa Alcoforado, psicóloga infantojuvenil apaixonada por 
              ajudar crianças, adolescentes e suas famílias a construírem relações mais 
              saudáveis e emocionalmente seguras. Minha abordagem é baseada na Terapia 
              Cognitivo Comportamental (TCC), que oferece ferramentas práticas e 
              cientificamente comprovadas.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Acredito que cada criança e adolescente é único e merece um espaço 
              seguro para expressar seus sentimentos, aprender a lidar com suas 
              emoções e desenvolver habilidades que os acompanharão por toda a vida.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                  <BookOpen size={18} className="text-stone-700" />
                </div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Especialista</p>
                  <p className="text-xs text-stone-500">em TCC Infantojuvenil</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                  <Users size={18} className="text-stone-700" />
                </div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Famílias</p>
                  <p className="text-xs text-stone-500">Atendimento integral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
