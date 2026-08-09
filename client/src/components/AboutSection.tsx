/**
 * About Section — Sobre a Raíssa
 * Design: White bg with linen texture, image with embroidery-hoop frame, stitched accents
 */
import { Award, BookOpen, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-linen" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with embroidery hoop frame */}
          <div className="relative">
            {/* Outer stitched frame */}
            <div className="absolute -inset-3 border-2 border-dashed border-[#D4919A]/30 rounded-2xl" />
            {/* Inner frame with slight offset for depth */}
            <div className="absolute -inset-1 border border-[#C9A96E]/20 rounded-xl" />
            <img
              src="/manus-storage/about-illustration_6c6a1f87.png"
              alt="Raíssa em sessão com criança"
              className="relative z-10 w-full rounded-xl shadow-lg"
            />
            {/* Floating badge — like a fabric tag */}
            <div className="absolute -bottom-5 -right-3 z-20 bg-white rounded-xl shadow-lg p-4 border-2 border-dashed border-[#A8C9A5]/30">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-[#A8C9A5]/15 rounded-full flex items-center justify-center border border-dashed border-[#A8C9A5]/30">
                  <Award size={16} className="text-[#A8C9A5]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#6B5E5E]">CRP 11/19565</p>
                  <p className="text-[10px] text-[#6B5E5E]/60">Especialista TCC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <div className="inline-block px-5 py-1.5 bg-[#FBF7F0] border-2 border-dashed border-[#8EB4D7]/40 rounded-full">
              <span className="text-xs font-medium text-[#8EB4D7] uppercase tracking-[0.15em]">
                Sobre Mim
              </span>
            </div>
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#6B5E5E] leading-tight">
              Cuidar de crianças é cuidar do futuro
            </h2>
            <p className="text-[#6B5E5E]/80 leading-relaxed">
              Sou Raíssa Alcoforado, psicóloga infantojuvenil apaixonada por 
              ajudar crianças e suas famílias a construírem relações mais saudáveis 
              e emocionalmente seguras. Minha abordagem é baseada na Terapia 
              Cognitivo Comportamental (TCC), que oferece ferramentas práticas e 
              cientificamente comprovadas para lidar com os desafios do 
              desenvolvimento infantil.
            </p>
            <p className="text-[#6B5E5E]/80 leading-relaxed">
              Acredito que cada criança é única e merece um espaço seguro para 
              expressar seus sentimentos, aprender a lidar com suas emoções e 
              desenvolver habilidades que a acompanharão por toda a vida.
            </p>

            {/* Stats — fabric label style */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 bg-[#FBF7F0] rounded-xl border border-dashed border-[#D4919A]/25">
                <div className="w-10 h-10 bg-[#D4919A]/10 rounded-full flex items-center justify-center flex-shrink-0 border border-dashed border-[#D4919A]/30">
                  <BookOpen size={16} className="text-[#D4919A]" />
                </div>
                <div>
                  <p className="font-semibold text-[#6B5E5E] text-sm">Especialista</p>
                  <p className="text-xs text-[#6B5E5E]/60">em TCC Infantil</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#FBF7F0] rounded-xl border border-dashed border-[#8EB4D7]/25">
                <div className="w-10 h-10 bg-[#8EB4D7]/10 rounded-full flex items-center justify-center flex-shrink-0 border border-dashed border-[#8EB4D7]/30">
                  <Users size={16} className="text-[#8EB4D7]" />
                </div>
                <div>
                  <p className="font-semibold text-[#6B5E5E] text-sm">Famílias</p>
                  <p className="text-xs text-[#6B5E5E]/60">Atendimento integral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
