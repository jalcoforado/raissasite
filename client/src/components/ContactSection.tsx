/**
 * Contact Section — Clean, professional contact info
 */
import { Phone, Clock, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-serif-display text-3xl md:text-4xl text-stone-800 leading-tight mt-3 mb-4">
            Vamos caminhar juntos?
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Se você sente que seu filho precisa de apoio emocional ou deseja 
            fortalecer a relação familiar, entre em contato. Será um prazer 
            conversar com você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          <div className="text-center p-6 bg-stone-50 rounded-xl">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Phone size={20} className="text-stone-700" />
            </div>
            <p className="font-semibold text-stone-800 text-sm">WhatsApp</p>
            <p className="text-sm text-stone-500 mt-1">(85) 98117-3003</p>
          </div>
          <div className="text-center p-6 bg-stone-50 rounded-xl">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Clock size={20} className="text-stone-700" />
            </div>
            <p className="font-semibold text-stone-800 text-sm">Horário</p>
            <p className="text-sm text-stone-500 mt-1">Seg a Sex, 8h às 21h</p>
          </div>
          <div className="text-center p-6 bg-stone-50 rounded-xl">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Instagram size={20} className="text-stone-700" />
            </div>
            <p className="font-semibold text-stone-800 text-sm">Instagram</p>
            <p className="text-sm text-stone-500 mt-1">@raissalcoforado</p>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-stone-800 hover:bg-stone-900 text-white rounded-lg px-8 py-6 text-base shadow-md hover:shadow-lg transition-all duration-200"
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
