import React from "react";
import { Phone, Clock, MapPin, Instagram, ShieldCheck, ArrowUp, Truck } from "lucide-react";
import { DELO_INFO, getWhatsAppLink } from "../data/deloData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      {/* Faixa Superior do Rodapé */}
      <div className="bg-slate-950 py-10 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Bloco 1: Identidade da Empresa */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1 border-2 border-amber-400">
                  <img
                    src="/assets/aistudio/Screenshot_20261104_133623_Google_1a0e27ff.jpg"
                    alt="Delo Diesel"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-white font-black text-base uppercase tracking-wider">
                    DELO <span className="text-amber-400">DIESEL</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Mecânica, Peças e Guincho 24h
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Referência e solidez técnica no transporte pesado desde <strong>4 de outubro de 1999</strong> em João Monlevade - MG.
              </p>

              <div className="pt-2">
                <a
                  href={DELO_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-400 transition text-xs font-semibold"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Siga @delomecanica</span>
                </a>
              </div>
            </div>

            {/* Bloco 2: Navegação Rápida */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
                Navegação
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#home" className="hover:text-amber-400 transition">Início</a>
                </li>
                <li>
                  <a href="#mecanica" className="hover:text-amber-400 transition">Mecânica Especializada Diesel</a>
                </li>
                <li>
                  <a href="#pecas" className="hover:text-amber-400 transition">Comércio de Peças Diesel</a>
                </li>
                <li>
                  <a href="#guincho" className="hover:text-amber-400 transition">Guincho 24 Horas & Pranchas</a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-amber-400 transition">Sobre a Delo (Desde 1999)</a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-amber-400 transition">Contato e Localização</a>
                </li>
              </ul>
            </div>

            {/* Bloco 3: Horários Oficiais */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
                Horários de Atendimento
              </h4>
              <div className="space-y-2.5 text-xs text-slate-400">
                <div className="p-2 rounded bg-slate-900 border border-amber-400/30">
                  <span className="text-amber-400 font-bold block">Guincho Caminhões-Prancha:</span>
                  <span className="text-white font-black text-xs">24 HORAS — TODOS OS DIAS</span>
                  <p className="text-[10px] text-slate-400 mt-0.5">Cobertura nacional.</p>
                </div>
                <div>
                  <span className="text-slate-300 font-semibold block">Oficina Mecânica:</span>
                  <span>Horário comercial</span>
                </div>
                <div>
                  <span className="text-slate-300 font-semibold block">Loja de Peças:</span>
                  <span>Horário comercial</span>
                </div>
              </div>
            </div>

            {/* Bloco 4: Dados de Contato e NAP */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
                Endereço e Contato
              </h4>
              <div className="space-y-2.5 text-xs text-slate-400">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    {DELO_INFO.address.street}, Bairro {DELO_INFO.address.neighborhood} <br />
                    {DELO_INFO.address.city} - {DELO_INFO.address.state} <br />
                    CEP: {DELO_INFO.address.cep}
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href={`tel:${DELO_INFO.phoneTel}`} className="text-white font-bold hover:text-amber-400">
                    {DELO_INFO.phone}
                  </a>
                </p>

                <div className="pt-2">
                  <a
                    href={getWhatsAppLink("guincho")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition shadow"
                  >
                    <Truck className="w-3.5 h-3.5" />
                    Guincho Plantão 24h
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa Inferior de Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          <p>© 1999 – {currentYear} {DELO_INFO.name}. Todos os direitos reservados.</p>
          <p className="text-[11px] text-slate-600 mt-0.5">
            Mecânica especializada, comércio de autopeças e guincho prancha 24 horas em João Monlevade - MG.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          type="button"
          className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800"
          aria-label="Voltar ao topo da página"
        >
          <span>Voltar ao topo</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
