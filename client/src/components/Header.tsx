/**
 * Header — Clean, professional navigation
 * Design: Minimal, warm, with clear hierarchy
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
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="container flex items-center justify-between h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/manus-storage/raissa-logo_e3b768df.jpeg"
            alt="Raíssa Alcoforado"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-stone-100 group-hover:ring-stone-200 transition-all"
          />
          <div className="hidden sm:block">
            <span className="font-serif-display text-xl text-stone-800 block leading-tight">
              Raíssa Alcoforado
            </span>
            <span className="text-[11px] text-stone-500 tracking-wide">
              Psicóloga Infantojuvenil · CRP 11/19565
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors duration-200 rounded-lg hover:bg-stone-50"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="ml-3 bg-stone-800 hover:bg-stone-900 text-white rounded-lg px-5 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <a href="https://wa.me/5585981173003?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-stone-100 px-6 py-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-stone-600 hover:text-stone-900 py-3 border-b border-stone-50 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="w-full bg-stone-800 hover:bg-stone-900 text-white rounded-lg mt-3"
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
