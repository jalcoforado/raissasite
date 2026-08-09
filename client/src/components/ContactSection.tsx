/**
 * Contact Section — CTA with Rosa Antigo as primary action color
 * Design: White bg, handcrafted album page feel, stitched CTA card
 */
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-linen" />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-1.5 bg-[#FBF7F0] border-2 border-dashed border-[#D4919A]/40 rounded-full mb-4">
              <span className="text-xs font-medium text-[#D4919A] uppercase tracking-[0.15em]">
                Contato
              </span>
            </div>
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#6B5E5E] leading-tight">
              Vamos caminhar juntos?
            </h2>
            <p className="text-[#6B5E5E]/70 mt-4 max-w-lg mx-auto leading-relaxed">
              Se você sente que seu filho precisa de apoio emocional ou deseja 
              fortalecer a relação familiar, entre em contato. Será um prazer 
              acolher vocês.
            </p>
          </div>

          {/* Contact Cards — fabric label style */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-[#FBF7F0] rounded-xl border-2 border-dashed border-[#A8C9A5]/30 relative">
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#A8C9A5]/40" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#A8C9A5]/40" />
              <div className="w-12 h-12 bg-[#A8C9A5]/15 rounded-full flex items-center justify-center mx-auto mb-3 border border-dashed border-[#A8C9A5]/30">
                <MessageCircle size={20} className="text-[#A8C9A5]" />
              </div>
              <h3 className="font-semibold text-[#6B5E5E] text-sm mb-1">WhatsApp</h3>
              <p className="text-xs text-[#6B5E5E]/60">(85) 98117-3003</p>
            </div>
            <div className="text-center p-6 bg-[#FBF7F0] rounded-xl border-2 border-dashed border-[#D4919A]/30 relative">
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#D4919A]/40" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#D4919A]/40" />
              <div className="w-12 h-12 bg-[#D4919A]/15 rounded-full flex items-center justify-center mx-auto mb-3 border border-dashed border-[#D4919A]/30">
                <Clock size={20} className="text-[#D4919A]" />
              </div>
              <h3 className="font-semibold text-[#6B5E5E] text-sm mb-1">Horários</h3>
              <p className="text-xs text-[#6B5E5E]/60">Seg a Sex, 8h às 21h</p>
            </div>
            <div className="text-center p-6 bg-[#FBF7F0] rounded-xl border-2 border-dashed border-[#8EB4D7]/30 relative">
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#8EB4D7]/40" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#8EB4D7]/40" />
              <div className="w-12 h-12 bg-[#8EB4D7]/15 rounded-full flex items-center justify-center mx-auto mb-3 border border-dashed border-[#8EB4D7]/30">
                <Instagram size={20} className="text-[#8EB4D7]" />
              </div>
              <h3 className="font-semibold text-[#6B5E5E] text-sm mb-1">Instagram</h3>
              <p className="text-xs text-[#6B5E5E]/60">@raissalcoforado</p>
            </div>
          </div>

          {/* Main CTA — stitched album page */}
          <div className="text-center bg-[#FBF7F0] rounded-2xl p-10 border-2 border-dashed border-[#D4919A]/30 relative">
            {/* Corner stitches */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#D4919A]/40 rounded-tl" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#D4919A]/40 rounded-tr" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#D4919A]/40 rounded-bl" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#D4919A]/40 rounded-br" />
            
            <img
              src="/manus-storage/raissa-logo_e3b768df.jpeg"
              alt="Raíssa Alcoforado"
              className="w-20 h-20 rounded-full mx-auto mb-4 border-3 border-[#C9A96E]/40 shadow-md"
            />
            <p className="font-script text-2xl text-[#D4919A] mb-1">Raíssa Alcoforado</p>
            <p className="text-sm text-[#6B5E5E]/70 mb-6">
              Psicóloga Infantojuvenil · CRP 11/19565
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#D4919A] hover:bg-[#c07e87] text-white rounded-full px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] border border-[#D4919A]/60"
            >
              <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} className="mr-2" />
                Conversar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
