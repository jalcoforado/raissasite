/**
 * Hero Section — Clean, professional, welcoming
 * Design: Modern layout with warm tones, no excessive decoration
 */
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-20 bg-warm relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/50 to-transparent pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-stone-100">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-sm text-stone-600 font-medium">
                Terapia Cognitivo Comportamental
              </span>
            </div>

            <h1 className="font-serif-display text-4xl md:text-5xl lg:text-[3.5rem] text-stone-800 leading-[1.15]">
              Cuidado especializado para crianças e adolescentes
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed max-w-lg">
              Psicóloga infantojuvenil com abordagem baseada em evidências. 
              Ajudo famílias a fortalecer vínculos e promover o desenvolvimento 
              emocional saudável.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-stone-800 hover:bg-stone-900 text-white rounded-lg px-7 py-6 text-base shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
                  Agendar consulta
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-stone-200 text-stone-700 hover:bg-stone-50 rounded-lg px-7 py-6 text-base transition-all duration-200"
              >
                <a href="#servicos">
                  Conheça os serviços
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4 text-sm text-stone-500">
              <span className="font-semibold text-stone-700">CRP 11/19565</span>
              <div className="w-px h-4 bg-stone-200" />
              <span>Presencial e online</span>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-stone-200/50">
              <img
                src="/manus-storage/hero-banner_c3d8f0d4.png"
                alt="Consultório de psicologia infantojuvenil"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-600 text-lg">✓</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-800">Especialista em TCC</p>
                  <p className="text-xs text-stone-500">Infantojuvenil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
