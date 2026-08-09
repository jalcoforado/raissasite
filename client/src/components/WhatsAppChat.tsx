/**
 * AI Chat Widget — Floating button + intelligent chat
 * Design: Pastel blue accent matching brand
 */
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Clock, Phone } from "lucide-react";
import { trpc } from "@/lib/trpc";

const WHATSAPP_NUMBER = "5585981173003";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const quickQuestions = [
  "Quais serviços a Raíssa oferece?",
  "Como funciona a orientação parental?",
  "Meu filho está com dificuldades na escola, podem ajudar?",
  "Qual o valor da consulta?",
];

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatMutation = trpc.chat.sendMessage.useMutation();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatMutation.isPending]);

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

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMessage: ChatMessage = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue("");
    setShowQuickQuestions(false);

    try {
      const result = await chatMutation.mutateAsync({ messages: updatedMessages });
      const responseContent = typeof result.message === "string" 
        ? result.message 
        : "Desculpe, não consegui processar a resposta.";
      setMessages([...updatedMessages, { role: "assistant", content: responseContent }]);
    } catch {
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Desculpe, tive um probleminha. Tente novamente ou entre em contato pelo WhatsApp (85) 98117-3003!" },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta.")}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]" ref={chatRef}>
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-[#8EA0AD] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src="/manus-storage/raissa-logo_e3b768df.jpeg" alt="Raíssa" className="w-10 h-10 rounded-full border-2 border-white/30" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#8EA0AD]" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Raíssa Alcoforado</p>
                  <p className="text-[10px] text-blue-100">Assistente virtual</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={openWhatsApp} className="p-1.5 hover:bg-white/10 rounded-full transition-colors" aria-label="Abrir WhatsApp">
                  <Phone size={16} className="text-white/70" />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors" aria-label="Fechar chat">
                  <X size={18} className="text-white/70" />
                </button>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-3 max-h-[350px] overflow-y-auto bg-blue-50/20">
            <div className="bg-white rounded-2xl rounded-tl-sm p-3.5 border border-blue-50 max-w-[85%] shadow-sm">
              <p className="text-sm text-slate-700 leading-relaxed">
                Olá! Sou a assistente virtual da Raíssa. Posso tirar suas dúvidas sobre os serviços, abordagem terapêutica e como funciona o atendimento. Pergunte o que quiser!
              </p>
              <p className="text-[10px] text-slate-400 mt-1.5 flex items-center gap-1">
                <Clock size={9} /> Seg a Sex, 8h às 21h
              </p>
            </div>

            {showQuickQuestions && messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Perguntas frequentes</p>
                {quickQuestions.map((q, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(q)}
                    className="w-full text-left p-3 bg-white border border-blue-100 rounded-xl text-sm text-slate-700 hover:border-[#8EA0AD]/40 hover:bg-blue-50/30 transition-all duration-200 leading-relaxed shadow-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#8EA0AD] text-white rounded-br-sm"
                    : "bg-white text-slate-700 rounded-tl-sm border border-blue-50 shadow-sm"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {chatMutation.isPending && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 border border-blue-50 shadow-sm">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2 h-2 bg-[#8EA0AD]/50 rounded-full animate-bounce [animation-delay:0ms]" />
                    <div className="w-2 h-2 bg-[#8EA0AD]/50 rounded-full animate-bounce [animation-delay:150ms]" />
                    <div className="w-2 h-2 bg-[#8EA0AD]/50 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length > 2 && (
            <div className="px-4 pb-2 bg-blue-50/20">
              <button onClick={openWhatsApp} className="w-full text-center py-2.5 px-3 bg-emerald-50 border border-emerald-100 rounded-xl text-xs text-emerald-700 hover:bg-emerald-100 transition-colors">
                Quer agendar? Fale diretamente com a Raíssa no WhatsApp
              </button>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-blue-50 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pergunte algo..."
                disabled={chatMutation.isPending}
                className="flex-1 px-4 py-2.5 bg-blue-50/30 border border-blue-100 rounded-full text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#8EA0AD]/40 transition-colors disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage(inputValue)}
                disabled={!inputValue.trim() || chatMutation.isPending}
                className="w-9 h-9 bg-[#8EA0AD] hover:bg-[#7E98A9] disabled:bg-blue-200 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 disabled:hover:scale-100"
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
          isOpen ? "bg-slate-600 hover:bg-slate-700" : "bg-[#8EA0AD] hover:bg-[#7E98A9]"
        }`}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        {isOpen ? <X size={22} className="text-white" /> : <MessageCircle size={22} className="text-white" />}
        {!isOpen && <span className="absolute inset-0 rounded-full bg-[#8EA0AD] animate-ping opacity-20" />}
      </button>

      {!isOpen && (
        <div className="absolute bottom-16 right-0 bg-white px-3 py-1.5 rounded-full shadow-md border border-blue-100 whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-500 delay-1000">
          <p className="text-xs text-slate-600">Tire suas dúvidas aqui!</p>
        </div>
      )}
    </div>
  );
}

