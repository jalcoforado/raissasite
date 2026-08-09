/**
 * Landing Page - Raíssa Alcoforado - Psicóloga Infantojuvenil
 * Design: "Tecido & Afeto" — Handcraft Warmth
 * Every section includes textile cues: gingham, linen, stitched borders, floral garlands
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import FamilySection from "@/components/FamilySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloralDivider from "@/components/FloralDivider";
import WhatsAppChat from "@/components/WhatsAppChat";
import ProSection from "@/components/ProSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-linen">
      <Header />
      <main>
        <HeroSection />
        <FloralDivider variant="rose" />
        <AboutSection />
        <FloralDivider variant="blue" />
        <ServicesSection />
        <FloralDivider variant="green" />
        <ApproachSection />
        <FloralDivider variant="rose" />
        <FamilySection />
        <FloralDivider variant="blue" />
        <ProSection />
        <FloralDivider variant="green" />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
}
