import React, { useState } from "react";
import { Phone, Clock, MapPin, Menu, X, ShieldAlert, ArrowRight } from "lucide-react";
import { DELO_INFO, getWhatsAppLink } from "../data/deloData";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#home" },
    { label: "Mecânica Especializada", href: "#mecanica" },
    { label: "Peças Diesel", href: "#pecas" },
    { label: "Guincho 24h", href: "#guincho" },
    { label: "Sobre a Delo", href: "#sobre" },
    { label: "Contato & Localização", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800 shadow-xl">
      {/* Barra de Alerta Operacional Superior */}
      <div className="bg-amber-400 text-slate-950 font-bold px-4 py-1.5 text-xs sm:text-sm tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-black uppercase bg-slate-950 text-amber-300 animate-pulse">
              Plantão Ativo
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-slate-900">
              <Clock className="w-4 h-4 text-slate-950" />
              Guincho Caminhões-Prancha: <strong>24 Horas</strong> (Todo o Brasil)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-900">
              <Clock className="w-3.5 h-3.5" />
              Mecânica e Peças: Horário Comercial
            </span>
            <a
              href={`tel:${DELO_INFO.phoneTel}`}
              className="inline-flex items-center gap-1.5 bg-slate-950 text-white px-2.5 py-0.5 rounded hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              Ligue: {DELO_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Navegação Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logotipo Oficial Delo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-white p-1 border-2 border-amber-400 shadow-md">
              <img
                src="/assets/aistudio/Screenshot_20261104_133623_Google_1a0e27ff.jpg"
                alt="Logotipo Oficial Delo Mecânica e Peças Diesel"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-white tracking-wider uppercase leading-none">
                DELO <span className="text-amber-400">DIESEL</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-300 font-medium tracking-normal mt-0.5">
                Mecânica, Peças e Guincho 24h
              </span>
              <span className="text-[9px] text-amber-400/90 font-semibold uppercase tracking-wider">
                Desde 1999 • João Monlevade - MG
              </span>
            </div>
          </a>

          {/* Links de navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-amber-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ações Rápidas de Conversão (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${DELO_INFO.phoneTel}`}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg text-slate-200 bg-slate-800 hover:bg-slate-700 transition border border-slate-700"
              title="Ligar agora para a central"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{DELO_INFO.phone}</span>
            </a>

            <a
              href={getWhatsAppLink("guincho")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-black rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 active:scale-95"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Guincho 24h</span>
            </a>
          </div>

          {/* Botão Mobile Menu Hamburger */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
              aria-label="Alternar navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Gaveta Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-amber-400 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={getWhatsAppLink("guincho")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wide shadow-md"
            >
              <ShieldAlert className="w-5 h-5" />
              Solicitar Guincho 24 Horas
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${DELO_INFO.phoneTel}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-800 text-slate-200 text-xs font-bold border border-slate-700"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Ligar Agora
              </a>
              <a
                href={getWhatsAppLink("mecanica")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold"
              >
                Oficina / WhatsApp
              </a>
            </div>

            <p className="text-[11px] text-center text-slate-400 pt-2 flex items-center justify-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              Av. Resplendor, 587 - João Monlevade / MG
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
