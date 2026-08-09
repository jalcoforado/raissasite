/**
 * Contact Section — Clean contact with blue accents
 */
import { Phone, Clock, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-script text-2xl text-[#5B8DB8] mb-2">Contato</p>
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
            Vamos caminhar juntos?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Agende uma conversa e conheça como a psicoterapia pode auxiliar 
            no desenvolvimento emocional do seu filho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          <div className="text-center p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Phone size={20} className="text-[#5B8DB8]" />
            </div>
            <p className="font-semibold text-slate-800 text-sm">WhatsApp</p>
            <p className="text-sm text-slate-500 mt-1">(85) 98117-3003</p>
          </div>
          <div className="text-center p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Clock size={20} className="text-[#5B8DB8]" />
            </div>
            <p className="font-semibold text-slate-800 text-sm">Horário</p>
            <p className="text-sm text-slate-500 mt-1">Seg a Sex, 8h às 21h</p>
          </div>
          <div className="text-center p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Instagram size={20} className="text-[#5B8DB8]" />
            </div>
            <p className="font-semibold text-slate-800 text-sm">Instagram</p>
            <a href="https://www.instagram.com/raissaalcoforado" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5B8DB8] mt-1 hover:underline inline-block">@raissaalcoforado</a>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#5B8DB8] hover:bg-[#4A7CA7] text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
              Conversar pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
        {/* Address */}
        <div className="text-center mb-8 p-6 bg-blue-50/40 rounded-2xl border border-blue-100/50 max-w-md mx-auto">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
            <MapPin size={20} className="text-[#5B8DB8]" />
          </div>
          <p className="font-semibold text-slate-800 text-sm">Local de Atendimento</p>
          <p className="text-sm text-slate-500 mt-1">Clínica Crescer – Unidade Cambeba</p>
          <p className="text-sm text-slate-500">Av. Viena Weyne, 680 – Cambeba</p>
        </div>
