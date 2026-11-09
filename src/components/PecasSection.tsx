import React from "react";
import { Package, Shield, CheckCircle2, MessageSquare, ArrowRight, Camera, Search, HelpCircle } from "lucide-react";
import { DELO_INFO, PECAS_CATEGORIES, getWhatsAppLink } from "../data/deloData";

export const PecasSection: React.FC = () => {
  return (
    <section id="pecas" className="relative bg-slate-900 text-white py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-600/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-500/30">
              <Package className="w-3.5 h-3.5" />
              Comércio de Peças Diesel
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Peças de Reposição para <span className="text-emerald-400">Linha Pesada</span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
              Atendimento em balcão com peças mecânicas, injeção, turbinas, embreagens e elétrica para caminhões, ônibus e utilitários diesel. Peças selecionadas com garantia para máxima durabilidade.
            </p>
          </div>

          <a
            href={getWhatsAppLink("pecas")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide transition shadow"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar Peça no WhatsApp</span>
          </a>
        </div>

        {/* Guia de Cotação Rápida (CRO de Balcão) */}
        <div className="mt-8 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase">1. Envie a Foto ou Código</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Fotografe a peça com defeito ou envie o código gravado para conferência técnica exata.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase">2. Informe Modelo e Ano</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Mencione a montadora, modelo do caminhão/veículo e ano de fabricação para compatibilidade.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase">3. Resposta Imediata</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Nossa equipe de balcão verifica a peça e retorna prontamente pelo WhatsApp no horário comercial.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Categorias de Peças Confirmadas */}
        <div className="mt-12">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
            Principais Linhas de Peças Diesel Comercializadas
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PECAS_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="bg-slate-950/70 border border-slate-800 hover:border-emerald-500/50 rounded-xl p-5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-white mb-2 flex items-center justify-between">
                    <span>{cat.title}</span>
                    <Package className="w-4 h-4 text-emerald-500" />
                  </h4>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">{cat.description}</p>
                </div>

                <div>
                  <div className="space-y-1.5 mb-4">
                    {cat.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={getWhatsAppLink("pecas")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
                  >
                    <span>Cotar esta linha</span>
                    <ArrowRight className="w-3 h-3 text-emerald-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé da Seção */}
        <div className="mt-12 bg-slate-950/60 rounded-xl p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <span>
            * Comércio de peças com atendimento em <strong>horário comercial</strong> na Avenida Resplendor, 587, João Monlevade - MG.
          </span>
          <span className="font-semibold text-slate-300">
            Garantia nos componentes fornecidos
          </span>
        </div>
      </div>
    </section>
  );
};
