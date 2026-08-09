/**
 * AI Chat Widget — Floating button + intelligent chat
 * Uses tRPC to call the LLM backend for AI responses
 * Design: Professional, clean, neutral tones
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
      const result = await chatMutation.mutateAsync({
        messages: updatedMessages,
      });
      const responseContent = typeof result.message === "string" 
        ? result.message 
        : "Desculpe, não consegui processar a resposta.";
      setMessages([...updatedMessages, { role: "assistant", content: responseContent }]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Desculpe, tive um probleminha. Tente novamente ou entre em contato pelo WhatsApp (85) 98117-3003!",
        },
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
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta.")}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]" ref={chatRef}>
      {/* Chat Popup */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-stone-800 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/manus-storage/raissa-logo_e3b768df.jpeg"
                    alt="Raíssa"
                    className="w-10 h-10 rounded-full border-2 border-stone-600"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-stone-800" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Raíssa Alcoforado</p>
                  <p className="text-[10px] text-stone-400">Assistente virtual</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={openWhatsApp}
                  className="p-1.5 hover:bg-stone-700 rounded-full transition-colors"
                  aria-label="Abrir WhatsApp"
                  title="Falar no WhatsApp"
                >
                  <Phone size={16} className="text-stone-400" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-stone-700 rounded-full transition-colors"
                  aria-label="Fechar chat"
                >
                  <X size={18} className="text-stone-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-3 max-h-[350px] overflow-y-auto bg-stone-50">
            {/* Welcome message */}
            <div className="bg-white rounded-2xl rounded-tl-sm p-3.5 border border-stone-100 max-w-[85%] shadow-sm">
              <p className="text-sm text-stone-700 leading-relaxed">
                Olá! Sou a assistente virtual da Raíssa. Posso tirar suas dúvidas sobre os serviços, abordagem terapêutica e como funciona o atendimento. Pergunte o que quiser!
              </p>
              <p className="text-[10px] text-stone-400 mt-1.5 flex items-center gap-1">
                <Clock size={9} /> Seg a Sex, 8h às 21h
              </p>
            </div>

            {/* Quick questions */}
            {showQuickQuestions && messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-[10px] text-stone-400 uppercase tracking-wider font-medium">
                  Perguntas frequentes
                </p>
                {quickQuestions.map((q, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(q)}
                    className="w-full text-left p-3 bg-white border border-stone-150 rounded-xl text-sm text-stone-700 hover:border-stone-300 hover:bg-stone-50 transition-all duration-200 leading-relaxed shadow-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Chat messages */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-stone-800 text-white rounded-br-sm"
                      : "bg-white text-stone-700 rounded-tl-sm border border-stone-100 shadow-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {chatMutation.isPending && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 border border-stone-100 shadow-sm">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp scheduling hint */}
          {messages.length > 2 && (
            <div className="px-4 pb-2 bg-stone-50">
              <button
                onClick={openWhatsApp}
                className="w-full text-center py-2.5 px-3 bg-emerald-50 border border-emerald-100 rounded-xl text-xs text-emerald-700 hover:bg-emerald-100 transition-colors"
              >
                Quer agendar? Fale diretamente com a Raíssa no WhatsApp
              </button>
            </div>
          )}

          {/* Input area */}
          <div className="p-3 border-t border-stone-100 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pergunte algo..."
                disabled={chatMutation.isPending}
                className="flex-1 px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-full text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage(inputValue)}
                disabled={!inputValue.trim() || chatMutation.isPending}
                className="w-9 h-9 bg-stone-800 hover:bg-stone-900 disabled:bg-stone-300 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 disabled:hover:scale-100"
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
            ? "bg-stone-600 hover:bg-stone-700"
            : "bg-stone-800 hover:bg-stone-900"
        }`}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        {isOpen ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}

        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-stone-800 animate-ping opacity-20" />
        )}
      </button>

      {/* Tooltip when closed */}
      {!isOpen && (
        <div className="absolute bottom-16 right-0 bg-white px-3 py-1.5 rounded-full shadow-md border border-stone-100 whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-500 delay-1000">
          <p className="text-xs text-stone-600">Tire suas dúvidas aqui!</p>
        </div>
      )}
    </div>
  );
}
