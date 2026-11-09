import React from "react";
import { Truck, Clock, Shield, MapPin, Phone, MessageSquare, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { DELO_INFO, GUINCHO_MODALIDADES, getWhatsAppLink } from "../data/deloData";

export const GuinchoSection: React.FC = () => {
  return (
    <section id="guincho" className="relative bg-slate-900 text-white py-16 lg:py-24 border-b border-slate-800">
      {/* Luz âmbar de destaque para atendimento de emergência */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" />
              Operação Ininterrupta 24 Horas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Guincho e Transporte de <span className="text-amber-400">Caminhões-Prancha</span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
              Atendimento emergencial 24 horas todos os dias com frota própria de caminhões-prancha. Resgate seguro e transporte técnico com cobertura em todo o território nacional.
            </p>
          </div>

          {/* Chamada Rápida de Emergência */}
          <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-amber-400/50 shadow-xl flex flex-col gap-2 min-w-[260px]">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 animate-pulse" />
              Central de Plantão 24h
            </span>
            <a
              href={`tel:${DELO_INFO.phoneTel}`}
              className="text-2xl sm:text-3xl font-black text-white hover:text-amber-400 transition-colors tracking-tight"
            >
              {DELO_INFO.phone}
            </a>
            <span className="text-[11px] text-slate-400">Ligação direta com a equipe de plantão</span>
          </div>
        </div>

        {/* 3 Modalidades de Transporte */}
        <div className="mt-12">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
            Tipos de Veículos Transportados pela Frota Própria Delo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GUINCHO_MODALIDADES.map((mod, idx) => (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800 hover:border-amber-400/60 rounded-xl p-6 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{mod.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner de Conversão de Urgência (Passo a Passo de Solicitação) */}
        <div className="mt-12 bg-gradient-to-r from-amber-500/10 via-slate-950 to-slate-950 border border-amber-400/30 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-2.5 py-1 bg-amber-400/20 text-amber-300 text-xs font-bold rounded mb-3">
                Agilidade no Resgate Rodoviário
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                Como solicitar seu caminhão-prancha agora:
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>1. Envie sua localização exata:</strong> Envie o ponto GPS ou referências na rodovia (BR-381 ou outras vias).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>2. Informe o modelo e a carga:</strong> Detalhe se o veículo está carregado, travado ou acidentado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>3. Despacho direto:</strong> Nossa equipe de plantão confirma os detalhes e coordena o transporte com caminhão-prancha.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href={getWhatsAppLink("guincho")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-center text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Solicitar Guincho 24h no WhatsApp</span>
              </a>

              <a
                href={`tel:${DELO_INFO.phoneTel}`}
                className="w-full py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-center text-sm transition border border-slate-700 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Ligar Agora: {DELO_INFO.phone}</span>
              </a>

              <p className="text-[11px] text-center text-slate-400">
                Plantão ativo 24h todos os dias. Atendimento em todo o território nacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
