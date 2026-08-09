/**
 * Landing Page - Raíssa Alcoforado - Psicóloga Infantojuvenil
 * Design: Professional, warm, contemporary
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import FamilySection from "@/components/FamilySection";
import ProSection from "@/components/ProSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ApproachSection />
        <FamilySection />
        <ProSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

