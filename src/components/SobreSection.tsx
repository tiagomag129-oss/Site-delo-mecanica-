import React from "react";
import { Award, ShieldCheck, Truck, Users, CheckCircle2, History, MapPin, Instagram } from "lucide-react";
import { DELO_INFO, DIFERENCIAIS_LIST } from "../data/deloData";

export const SobreSection: React.FC = () => {
  const publicoAtendido = [
    "Caminhoneiros autônomos",
    "Transportadoras e frotistas",
    "Empresas de máquinas pesadas",
    "Proprietários de ônibus e vans",
    "Produtores rurais e agroindústria",
    "Oficinas mecânicas parceiras",
    "Proprietários de veículos diesel em geral",
  ];

  return (
    <section id="sobre" className="relative bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna de Texto e História */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/30">
              <History className="w-3.5 h-3.5" />
              Fundada em 4 de Outubro de 1999
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Mais de 25 Anos de Tradição e <span className="text-amber-400">Compromisso na Estrada</span>
            </h2>

            <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              Fundada em <strong>04 de outubro de 1999</strong>, a <strong>Delo Mecânica e Peças Diesel</strong> nasceu com o propósito de atender com seriedade, rigor técnico e agilidade as demandas do transporte rodoviário e pesado.
            </p>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Com base instalada em João Monlevade - MG, a empresa consolidou sua reputação ao integrar oficina especializada em diesel multimarcas, amplo comércio de autopeças de reposição e uma central de <strong>guincho 24 horas com frota própria de caminhões-prancha</strong> atuando em todo o território nacional.
            </p>

            {/* Destaque Institucional Oficial */}
            <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white block font-bold mb-1">Responsabilidade Técnica e Garantia</strong>
                Todos os serviços executados em oficina e todas as peças comercializadas pela Delo contam com garantia legal de conformidade e qualidade, assegurando total tranquilidade para quem vive da estrada.
              </div>
            </div>

            {/* Redes e Acompanhamento */}
            <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-slate-400">
              <span>Acompanhe o dia a dia e resgates:</span>
              <a
                href={DELO_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-amber-400 transition"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>{DELO_INFO.instagram.handle}</span>
              </a>
            </div>
          </div>

          {/* Coluna de Diferenciais e Públicos */}
          <div className="lg:col-span-5 space-y-6">
            {/* Box de Diferenciais */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Pilares Operacionais da Delo
              </h3>

              <div className="space-y-4">
                {DIFERENCIAIS_LIST.map((dif, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{dif.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{dif.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Box de Quem Atendemos */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                Público Atendido
              </h3>
              <div className="flex flex-wrap gap-2">
                {publicoAtendido.map((pub, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-medium text-slate-300 border border-slate-700"
                  >
                    {pub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
