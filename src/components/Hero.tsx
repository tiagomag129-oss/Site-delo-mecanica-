import React from "react";
import { Truck, Wrench, Package, Shield, Phone, AlertCircle, ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { DELO_INFO, getWhatsAppLink } from "../data/deloData";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-800">
      {/* Background industrial com gradientes e texturas sutis */}
      <div className="absolute inset-0 bg-radial from-slate-900 via-slate-950 to-black opacity-90 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tag de Credibilidade Superior */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>Experiência comprovada desde 1999 • João Monlevade - MG</span>
        </div>

        {/* Título Principal de Alto Impacto */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight sm:leading-none text-white">
            Solução Completa em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              Mecânica Diesel
            </span>
            , Peças e{" "}
            <span className="text-amber-400 underline decoration-amber-500/50 decoration-wavy decoration-2">
              Guincho 24h
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Veículo pesado parado é prejuízo na estrada. Há mais de duas décadas e meia, a <strong>Delo</strong> oferece diagnóstico mecânico especializado multimarcas, peças para linha diesel e <strong>guincho com frota própria de caminhões-prancha 24 horas</strong> em João Monlevade e com cobertura em todo o território nacional.
          </p>

          {/* Badges de Confirmação Rápida */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Frota Própria de Pranchas
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Socorro Mecânico Externo
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Todas as Marcas Diesel
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Garantia em Serviços e Peças
            </span>
          </div>
        </div>

        {/* 3 CARDS ESTRATÉGICOS DE CONVERSÃO (CRO POR JORNADA) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Guincho 24 Horas (Urgência Imediata) */}
          <div className="relative group bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-900 rounded-2xl p-6 border-2 border-amber-400/80 shadow-2xl shadow-amber-950/30 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[11px] tracking-wider uppercase shadow">
              Emergência 24h
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wide flex items-center gap-2">
                Guincho 24 Horas
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Caminhões-prancha com frota própria para automóveis, caminhões e máquinas pesadas. Atendimento emergencial 24h em todo o Brasil.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
              <a
                href={getWhatsAppLink("guincho")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wide hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20"
              >
                <span>Chamar Guincho no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${DELO_INFO.phoneTel}`}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Ligar Direto: {DELO_INFO.phone}
              </a>
            </div>
          </div>

          {/* Card 2: Mecânica Diesel Especializada */}
          <div className="relative group bg-slate-900/90 rounded-2xl p-6 border border-slate-700 hover:border-blue-500/80 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wide">
                Mecânica Diesel
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Motor, injeção eletrônica, câmbio, diferencial, freios e diagnóstico computadorizado. Atendimento em oficina e <strong>socorro mecânico externo</strong> no local.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
              <a
                href="#mecanica"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition-all shadow"
              >
                <span>Ver Serviços & Socorro</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink("mecanica")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
              >
                Agendar Avaliação Mecânica
              </a>
            </div>
          </div>

          {/* Card 3: Peças Diesel */}
          <div className="relative group bg-slate-900/90 rounded-2xl p-6 border border-slate-700 hover:border-emerald-500/80 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Package className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wide">
                Peças Diesel
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Balcão especializado com bombas, bicos, turbinas, embreagens, filtros, componentes de motor, freio e elétrica para caminhões e pesados.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
              <a
                href={getWhatsAppLink("pecas")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide transition-all shadow"
              >
                <span>Consultar Peça no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#pecas"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
              >
                Ver Linhas Disponíveis
              </a>
            </div>
          </div>
        </div>

        {/* Resumo da Localização Estratégica */}
        <div className="mt-10 bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Base Operacional:</strong> Avenida Resplendor, 587, Teresópolis — João Monlevade / MG
            </span>
          </div>
          <a
            href={DELO_INFO.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline font-semibold flex items-center gap-1"
          >
            Abrir rota no Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
