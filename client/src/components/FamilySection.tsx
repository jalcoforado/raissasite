/**
 * Family Section — Parental guidance with gingham bg
 */
import { Button } from "@/components/ui/button";

export default function FamilySection() {
  return (
    <section id="familia" className="py-20 bg-gingham-light relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-white/60 pointer-events-none" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="font-script text-2xl text-[#D4919A]">Família</p>
            <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
              O cuidado que envolve toda a família
            </h2>
            <p className="text-slate-600 leading-relaxed">
              A família é parte fundamental do processo terapêutico. Através da 
              orientação parental, ajudo pais e cuidadores a compreenderem melhor 
              o comportamento de seus filhos, desenvolvendo estratégias práticas 
              para o dia a dia.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Juntos, construímos um ambiente familiar mais harmonioso, onde cada 
              membro se sente ouvido, respeitado e acolhido.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Comunicação", "Limites saudáveis", "Vínculo afetivo", "Rotina", "Autonomia"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white rounded-full text-sm text-slate-600 border border-blue-100 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            <Button
              asChild
              className="bg-[#8EA0AD] hover:bg-[#7E98A9] text-white rounded-full px-6 shadow-sm mt-4"
            >
              <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20orienta%C3%A7%C3%A3o%20parental." target="_blank" rel="noopener noreferrer">
                Saiba mais sobre orientação parental
              </a>
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-blue-50">
            <img
              src="/manus-storage/family-illustration_e5e7e3a4.png"
              alt="Família em sessão de orientação"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
