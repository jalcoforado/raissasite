/**
 * Family Section — Focus on family involvement
 * Design: Cream bg with gingham, scrapbook page feel
 */
import { Button } from "@/components/ui/button";

export default function FamilySection() {
  return (
    <section id="familia" className="py-20 bg-[#FBF7F0] relative overflow-hidden">
      <div className="absolute inset-0 bg-gingham opacity-25" />
      <div className="absolute inset-0 bg-linen" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-block px-5 py-1.5 bg-white border-2 border-dashed border-[#D4919A]/40 rounded-full">
              <span className="text-xs font-medium text-[#D4919A] uppercase tracking-[0.15em]">
                Família
              </span>
            </div>
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#6B5E5E] leading-tight">
              O cuidado que envolve toda a família
            </h2>
            <p className="text-[#6B5E5E]/80 leading-relaxed">
              A família é parte fundamental do processo terapêutico. Através da 
              orientação parental, ajudo pais e cuidadores a compreenderem melhor 
              o comportamento de seus filhos, desenvolvendo estratégias práticas 
              para o dia a dia.
            </p>
            <p className="text-[#6B5E5E]/80 leading-relaxed">
              Juntos, construímos um ambiente familiar mais harmonioso, onde cada 
              membro se sente ouvido, respeitado e amado.
            </p>

            {/* Tags — like fabric labels sewn on */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["Comunicação", "Limites saudáveis", "Vínculo afetivo", "Rotina"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white rounded-full text-xs font-medium text-[#6B5E5E] border-2 border-dashed border-[#D4919A]/25 shadow-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[#8EB4D7] hover:bg-[#7aa3c6] text-white rounded-full px-8 py-6 text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] border border-[#8EB4D7]/60 mt-4"
            >
              <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20orienta%C3%A7%C3%A3o%20parental." target="_blank" rel="noopener noreferrer">
                Saiba mais sobre orientação parental
              </a>
            </Button>
          </div>

          {/* Right: Image with stitched frame */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-3 border-2 border-dashed border-[#8EB4D7]/30 rounded-2xl" />
            <img
              src="/manus-storage/family-illustration_1869c1b5.png"
              alt="Família unida em atividade"
              className="relative z-10 w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
