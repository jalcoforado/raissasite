/**
 * Footer — Handcrafted album closing page
 * Design: Cream bg with linen texture, stitched divider, centered brand
 */
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#FBF7F0] relative">
      <div className="absolute inset-0 bg-linen" />
      <div className="absolute inset-0 bg-gingham opacity-15" />
      
      {/* Top stitched border */}
      <div className="absolute top-0 left-0 right-0 h-px border-t-2 border-dashed border-[#D4919A]/20" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Logo with hoop effect */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-full border-2 border-[#C9A96E]/30" />
            <img
              src="/manus-storage/raissa-logo_e3b768df.jpeg"
              alt="Raíssa Alcoforado"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <p className="font-script text-xl text-[#D4919A]">Raíssa Alcoforado</p>
          <p className="text-xs text-[#6B5E5E]/60 tracking-wide">
            Psicóloga Infantojuvenil · Terapia Cognitivo Comportamental
          </p>

          {/* Decorative stitched divider */}
          <div className="flex items-center gap-2 py-2">
            <div className="w-8 h-px border-t border-dashed border-[#D4919A]/40" />
            <Heart size={10} className="text-[#D4919A]/50 fill-[#D4919A]/50" />
            <div className="w-8 h-px border-t border-dashed border-[#D4919A]/40" />
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#6B5E5E]/50">
            © {new Date().getFullYear()} Raíssa Alcoforado · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

