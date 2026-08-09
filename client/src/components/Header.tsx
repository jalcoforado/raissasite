/**
 * Header — Handcrafted embroidery-hoop brand anchor
 * Design: White bg with subtle linen texture, logo as embroidery hoop, organic nav
 */
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Abordagem", href: "#abordagem" },
    { label: "Família", href: "#familia" },
    { label: "Para Psicólogos", href: "#para-psicologos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F0E6D8]"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo as embroidery hoop */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Hoop ring effect */}
            <div className="absolute -inset-1 rounded-full border-2 border-[#C9A96E]/40 group-hover:border-[#C9A96E]/60 transition-colors duration-300" />
            <img
              src="/manus-storage/raissa-logo_e3b768df.jpeg"
              alt="Raíssa Alcoforado - Psicóloga Infantojuvenil"
              className="h-14 w-14 rounded-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-script text-2xl text-[#D4919A] block leading-tight group-hover:text-[#c07e87] transition-colors duration-200">
              Raíssa Alcoforado
            </span>
            <span className="text-[10px] text-[#8EB4D7] tracking-[0.2em] uppercase font-medium">
              Psicóloga Infantojuvenil
            </span>
          </div>
        </a>

        {/* Desktop Nav — styled like fabric labels */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-[#6B5E5E] hover:text-[#D4919A] transition-colors duration-200 group/nav"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#D4919A] group-hover/nav:w-3/4 transition-all duration-300" style={{ borderRadius: "1px" }} />
            </a>
          ))}
          <Button
            asChild
            className="ml-4 bg-[#D4919A] hover:bg-[#c07e87] text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] border border-[#D4919A]/50"
          >
            <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[#6B5E5E] hover:text-[#D4919A] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white/98 backdrop-blur-sm border-t border-dashed border-[#D4919A]/30 px-6 py-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-[#6B5E5E] hover:text-[#D4919A] py-3 border-b border-dotted border-[#F0E6D8] last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="w-full bg-[#D4919A] hover:bg-[#c07e87] text-white rounded-full mt-3"
          >
            <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
