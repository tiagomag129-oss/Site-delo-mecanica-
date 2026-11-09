import React from "react";
import { Wrench, Shield, CheckCircle2, Cpu, Settings, Disc, Cog, Gauge, Car, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { DELO_INFO, MECANICA_SERVICES, getWhatsAppLink } from "../data/deloData";

export const MecanicaSection: React.FC = () => {
  return (
    <section id="mecanica" className="relative bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-500/30">
              <Wrench className="w-3.5 h-3.5" />
              Mecânica Especializada Diesel Multimarcas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Precisão Técnica em <span className="text-blue-400">Veículos Pesados</span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
              Diagnósticos computadorizados precisos e reparação pesada para caminhões, ônibus, vans e maquinário diesel. Desde 1999 com atendimento a todas as marcas e garantia em todos os serviços executados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppLink("mecanica")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Agendar Avaliação</span>
            </a>
          </div>
        </div>

        {/* DESTAQUE: SOCORRO MECÂNICO EXTERNO (DIFERENCIAL CHAVE) */}
        <div className="mt-8 bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-900 border border-blue-500/40 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
          <div className="max-w-3xl">
            <span className="inline-block px-2.5 py-0.5 rounded bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-2">
              Atendimento Móvel
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
              Socorro Mecânico Externo na Estrada ou Pátio
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Seu veículo parou na rodovia ou empresa? A <strong>Delo</strong> envia equipe técnica especializada diretamente até o local para avaliar o defeito e realizar reparos imediatos quando possível, reduzindo tempo e custos de reboque.
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5 text-blue-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Diagnóstico no local
              </span>
              <span className="flex items-center gap-1.5 text-blue-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Ferramentas e equipe móvel
              </span>
              <span className="flex items-center gap-1.5 text-blue-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Avaliação para liberação ou guincho
              </span>
            </div>
          </div>

          <a
            href={getWhatsAppLink("socorro_externo")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider transition shadow-lg shadow-amber-400/20"
          >
            <span>Solicitar Socorro Externo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid dos 9 Serviços Confirmados */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Nossos Serviços Mecânicos Especializados (Todas as Marcas)
            </h3>
            <span className="text-xs text-slate-400">Atendimento em Horário Comercial</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MECANICA_SERVICES.map((serv) => (
              <div
                key={serv.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                      Especialidade
                    </span>
                    <Wrench className="w-4 h-4 text-slate-500" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{serv.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{serv.shortDesc}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {serv.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={getWhatsAppLink("mecanica")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                  >
                    Consultar serviço no WhatsApp <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé da Seção com Aviso de Horário */}
        <div className="mt-12 bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <span>
            * A oficina mecânica opera em <strong>horário comercial</strong>. Para resgates de emergência fora do expediente, acione o nosso <strong>Guincho 24 Horas</strong>.
          </span>
          <span className="font-semibold text-slate-300">
            Garantia nos serviços mecânicos executados
          </span>
        </div>
      </div>
    </section>
  );
};
