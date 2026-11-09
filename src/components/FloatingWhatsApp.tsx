import React, { useState } from "react";
import { MessageSquare, X, Phone, Truck, Wrench, Package, ShieldAlert } from "lucide-react";
import { DELO_INFO, getWhatsAppLink } from "../data/deloData";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Menu Popup de Opções Contextuais */}
      {isOpen && (
        <div className="mb-3 w-80 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-4 text-white animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h4 className="text-sm font-black uppercase text-amber-400">Atendimento Delo Diesel</h4>
              <p className="text-[11px] text-slate-400">Como podemos ajudar você agora?</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Fechar menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3 space-y-2">
            {/* Opção 1: Guincho 24h Emergencial */}
            <a
              href={getWhatsAppLink("guincho")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-amber-400 text-slate-950 hover:bg-amber-300 transition group shadow"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-950/10 flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4 text-slate-950" />
              </div>
              <div className="text-left">
                <span className="text-xs font-black uppercase block tracking-wide">
                  Guincho 24 Horas
                </span>
                <span className="text-[11px] text-slate-900 font-semibold leading-tight block">
                  Plantão ativo • Caminhões-prancha
                </span>
              </div>
            </a>

            {/* Opção 2: Mecânica Especializada e Socorro */}
            <a
              href={getWhatsAppLink("mecanica")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 hover:text-white transition group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Wrench className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold block">Oficina & Socorro Móvel</span>
                <span className="text-[11px] text-slate-400 block">Diagnóstico e reparo multimarcas</span>
              </div>
            </a>

            {/* Opção 3: Peças Diesel */}
            <a
              href={getWhatsAppLink("pecas")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 hover:text-white transition group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Package className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold block">Balcão de Peças Diesel</span>
                <span className="text-[11px] text-slate-400 block">Cotação rápida por foto ou código</span>
              </div>
            </a>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Prefere ligar?</span>
            <a
              href={`tel:${DELO_INFO.phoneTel}`}
              className="text-amber-400 hover:underline font-bold inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> {DELO_INFO.phone}
            </a>
          </div>
        </div>
      )}

      {/* Botão Flutuante Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95"
        aria-label="Abrir opções de atendimento WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6 text-slate-950 fill-slate-950" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
        </div>
        <span className="text-xs sm:text-sm tracking-wide hidden sm:inline">
          {isOpen ? "Fechar" : "WhatsApp Oficial"}
        </span>
      </button>
    </div>
  );
};
