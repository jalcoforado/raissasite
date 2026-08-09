/**
 * WhatsApp Chat Widget — Floating button + chat popup for questions and scheduling
 * Design: Matches the handcrafted aesthetic with Rosa Antigo accent
 */
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5585981173003";

const quickMessages = [
  "Olá! Gostaria de agendar uma consulta.",
  "Olá! Gostaria de saber mais sobre a orientação parental.",
  "Olá! Tenho dúvidas sobre o atendimento infantil.",
  "Olá! Qual o valor da consulta?",
];

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const sendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleCustomSend = () => {
    if (customMessage.trim()) {
      sendMessage(customMessage.trim());
      setCustomMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleCustomSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]" ref={chatRef}>
      {/* Chat Popup */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border-2 border-dashed border-[#D4919A]/25 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-[#FBF7F0] p-4 border-b border-dashed border-[#D4919A]/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/manus-storage/raissa-logo_e3b768df.jpeg"
                    alt="Raíssa"
                    className="w-10 h-10 rounded-full border border-[#C9A96E]/30"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#A8C9A5] rounded-full border-2 border-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#6B5E5E] text-sm">Raíssa Alcoforado</p>
                  <div className="flex items-center gap-1">
                    <Clock size={10} className="text-[#A8C9A5]" />
                    <p className="text-[10px] text-[#6B5E5E]/60">Responde em até 1h</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-[#D4919A]/10 rounded-full transition-colors"
                aria-label="Fechar chat"
              >
                <X size={18} className="text-[#6B5E5E]/60" />
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
            {/* Welcome message bubble */}
            <div className="bg-[#FBF7F0] rounded-2xl rounded-tl-sm p-3.5 border border-[#F0E6D8] max-w-[85%]">
              <p className="text-sm text-[#6B5E5E] leading-relaxed">
                Olá! 👋 Sou a Raíssa. Como posso ajudar você e sua família? 
                Escolha uma opção abaixo ou escreva sua mensagem.
              </p>
              <p className="text-[10px] text-[#6B5E5E]/40 mt-1.5 flex items-center gap-1">
                <Clock size={9} /> Seg a Sex, 8h às 21h
              </p>
            </div>

            {/* Quick message options */}
            <div className="space-y-2">
              <p className="text-[10px] text-[#6B5E5E]/50 uppercase tracking-wider font-medium">
                Mensagens rápidas
              </p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(msg)}
                  className="w-full text-left p-3 bg-white border-2 border-dashed border-[#8EB4D7]/25 rounded-xl text-sm text-[#6B5E5E] hover:border-[#D4919A]/40 hover:bg-[#FBF7F0] transition-all duration-200 leading-relaxed"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          {/* Input area */}
          <div className="p-3 border-t border-dashed border-[#D4919A]/20 bg-[#FBF7F0]/50">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escreva sua mensagem..."
                className="flex-1 px-4 py-2.5 bg-white border border-[#F0E6D8] rounded-full text-sm text-[#6B5E5E] placeholder:text-[#6B5E5E]/40 focus:outline-none focus:border-[#D4919A]/40 transition-colors"
              />
              <button
                onClick={handleCustomSend}
                disabled={!customMessage.trim()}
                className="w-9 h-9 bg-[#D4919A] hover:bg-[#c07e87] disabled:bg-[#D4919A]/40 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 disabled:hover:scale-100"
                aria-label="Enviar mensagem"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen
            ? "bg-[#6B5E5E] hover:bg-[#5a4f4f]"
            : "bg-[#D4919A] hover:bg-[#c07e87]"
        }`}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat WhatsApp"}
      >
        {isOpen ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#D4919A] animate-ping opacity-20" />
        )}
      </button>

      {/* Tooltip when closed */}
      {!isOpen && (
        <div className="absolute bottom-16 right-0 bg-white px-3 py-1.5 rounded-full shadow-md border border-[#F0E6D8] whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-500 delay-1000">
          <p className="text-xs text-[#6B5E5E]">Tire suas dúvidas aqui! 💬</p>
        </div>
      )}
    </div>
  );
}
