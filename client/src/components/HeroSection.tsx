/**
 * Hero Section — Pastel gingham background, script + bold font mix
 */
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden bg-gingham min-h-[85vh] flex items-center">
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/30 to-pink-50/20 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-sm font-medium text-[#8EA0AD] uppercase tracking-widest">
              Terapia Cognitivo Comportamental
            </p>

            <h1 className="leading-tight">
              <span className="font-script text-5xl md:text-7xl text-[#8EA0AD] block">
                Psi. Raíssa Alcoforado
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Psicóloga infantojuvenil especializada em acolher famílias, 
              fortalecer vínculos e promover o desenvolvimento emocional saudável 
              de crianças e adolescentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Button
                asChild
                size="lg"
                className="bg-[#8EA0AD] hover:bg-[#7E98A9] text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
                  Agendar uma conversa
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#8EA0AD]/30 text-[#8EA0AD] hover:bg-[#8EA0AD]/5 rounded-full px-8 py-6 text-base transition-all duration-200"
              >
                <a href="#servicos">Conheça os serviços</a>
              </Button>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start pt-2 text-sm text-slate-500">
              <span className="font-semibold text-slate-700">CRP 11/19565</span>
              <span className="w-1 h-1 bg-[#8EA0AD] rounded-full" />
              <span>Presencial e online</span>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Decorative circle behind photo */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-100/50 to-pink-100/30 blur-sm" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/manus-storage/raissa-photo_6d3c1d4a.jpeg"
                  alt="Raíssa Alcoforado - Psicóloga Infantojuvenil"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative star */}
              <div className="absolute -top-2 -right-2 text-3xl">⭐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
