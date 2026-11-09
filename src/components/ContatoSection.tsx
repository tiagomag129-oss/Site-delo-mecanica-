import React from "react";
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Instagram, ShieldAlert, Navigation } from "lucide-react";
import { DELO_INFO, getWhatsAppLink } from "../data/deloData";

export const ContatoSection: React.FC = () => {
  return (
    <section id="contato" className="relative bg-slate-900 text-white py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="pb-8 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/30">
            <MapPin className="w-3.5 h-3.5" />
            Canais de Atendimento e Localização
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Fale com a <span className="text-amber-400">Delo Diesel</span>
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Estamos prontos para atender você. Um único número para acionar o guincho 24 horas, agendar serviços mecânicos na oficina ou cotar peças de reposição.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna 1: Informações de Contato e Horários */}
          <div className="lg:col-span-6 space-y-6">
            {/* Bloco Central Telefônica */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                Número Único de Atendimento
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <a
                    href={`tel:${DELO_INFO.phoneTel}`}
                    className="text-3xl sm:text-4xl font-black text-white hover:text-amber-400 transition tracking-tight"
                  >
                    {DELO_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">
                    Atende Telefone e WhatsApp Oficial
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${DELO_INFO.phoneTel}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    Ligar Agora
                  </a>
                </div>
              </div>

              {/* Botões contextuais de WhatsApp */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Escolha o atendimento desejado no WhatsApp:
                </span>

                <a
                  href={getWhatsAppLink("guincho")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/40 text-amber-300 hover:text-amber-200 transition text-xs font-bold"
                >
                  <span className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                    Plantão Emergencial Guincho 24h
                  </span>
                  <span className="text-[11px] uppercase bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-black">
                    24h
                  </span>
                </a>

                <a
                  href={getWhatsAppLink("mecanica")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white transition text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    Oficina Mecânica & Socorro Externo
                  </span>
                  <span className="text-[11px] text-slate-400">Comercial</span>
                </a>

                <a
                  href={getWhatsAppLink("pecas")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white transition text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    Balcão e Cotação de Peças Diesel
                  </span>
                  <span className="text-[11px] text-slate-400">Comercial</span>
                </a>
              </div>
            </div>

            {/* Quadro de Horários de Funcionamento (Separação Rigorosa) */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                Horários de Funcionamento
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start justify-between p-2.5 rounded-lg bg-amber-400/10 border border-amber-400/30">
                  <div>
                    <strong className="text-white block font-bold">Guincho e Caminhões-Prancha:</strong>
                    <span className="text-slate-300 text-xs">Atendimento emergencial todos os dias, incluindo feriados.</span>
                  </div>
                  <span className="px-2 py-1 rounded bg-amber-400 text-slate-950 font-black text-xs shrink-0">
                    24 HORAS
                  </span>
                </div>

                <div className="flex items-start justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div>
                    <strong className="text-white block font-bold">Oficina Mecânica Especializada:</strong>
                    <span className="text-slate-400 text-xs">Diagnósticos, socorro móvel e revisões.</span>
                  </div>
                  <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs font-bold shrink-0">
                    Comercial
                  </span>
                </div>

                <div className="flex items-start justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div>
                    <strong className="text-white block font-bold">Loja e Balcão de Peças:</strong>
                    <span className="text-slate-400 text-xs">Consultas, retiradas e cotações.</span>
                  </div>
                  <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs font-bold shrink-0">
                    Comercial
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Endereço Físico e Mapa */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                Sede e Endereço Oficial
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                {DELO_INFO.name}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {DELO_INFO.address.street} <br />
                Bairro {DELO_INFO.address.neighborhood} — {DELO_INFO.address.city} / {DELO_INFO.address.state} <br />
                CEP {DELO_INFO.address.cep}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={DELO_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Traçar Rota no Google Maps
                </a>

                <a
                  href={DELO_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-amber-400 transition text-xs font-medium"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-500" />
                  Instagram {DELO_INFO.instagram.handle}
                </a>
              </div>

              {/* Mapa Incorporado com Localização Real */}
              <div className="mt-6 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video relative">
                <iframe
                  title="Localização Delo Mecânica e Peças Diesel"
                  src="https://maps.google.com/maps?q=Avenida+Resplendor+587+Teresopolis+Joao+Monlevade+MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4 text-xs text-slate-400 flex items-center justify-between">
                <span>Ponto estratégico em João Monlevade - MG</span>
                <a
                  href={DELO_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  Abrir no app de mapas <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
