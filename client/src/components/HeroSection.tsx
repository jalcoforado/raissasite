/**
 * Hero Section — Main banner with castle illustration
 * Design: Cream linen bg with gingham, handcrafted feel, embroidered badge
 */
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 min-h-[90vh] flex items-center overflow-hidden bg-[#FBF7F0]">
      {/* Layered textile backgrounds */}
      <div className="absolute inset-0 bg-gingham opacity-35" />
      <div className="absolute inset-0 bg-linen" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Embroidered badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 rounded-full px-5 py-2.5 border-2 border-dashed border-[#D4919A]/30 shadow-sm">
              <Heart size={14} className="text-[#D4919A] fill-[#D4919A]" />
              <span className="text-xs font-medium text-[#6B5E5E] tracking-wide">
                Terapia Cognitivo Comportamental
              </span>
            </div>

            <h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-[#D4919A] leading-tight">
              Raíssa Alcoforado
            </h1>

            <p className="font-serif-display text-xl md:text-2xl text-[#6B5E5E] leading-relaxed italic">
              "Cada criança merece ser ouvida com carinho e ciência"
            </p>

            <p className="text-[#6B5E5E]/80 text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
              Psicóloga infantojuvenil especializada em acolher famílias, 
              fortalecer vínculos e promover o desenvolvimento emocional saudável 
              de crianças e adolescentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#D4919A] hover:bg-[#c07e87] text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] border border-[#D4919A]/60"
              >
                <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20meu%20filho." target="_blank" rel="noopener noreferrer">
                  Vamos conversar sobre o seu filho?
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-dashed border-[#8EB4D7]/50 text-[#8EB4D7] hover:bg-[#8EB4D7]/10 rounded-full px-8 py-6 text-base transition-all duration-200"
              >
                <a href="#servicos">Conheça os Serviços</a>
              </Button>
            </div>
          </div>

          {/* Right: Hero Illustration in embroidery-hoop style frame */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Decorative soft glows */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#8EB4D7]/8 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#D4919A]/8 rounded-full blur-3xl" />
              
              {/* Stitched frame around image */}
              <div className="absolute -inset-4 border-2 border-dashed border-[#C9A96E]/30 rounded-3xl" />
              <div className="absolute -inset-2 border border-[#D4919A]/15 rounded-2xl" />
              
              <img
                src="/manus-storage/hero-banner_c2faccb0.png"
                alt="Ilustração de castelo encantado com flores"
                className="relative z-10 w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
