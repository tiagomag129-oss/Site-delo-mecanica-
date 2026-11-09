/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { GuinchoSection } from "./components/GuinchoSection";
import { MecanicaSection } from "./components/MecanicaSection";
import { PecasSection } from "./components/PecasSection";
import { SobreSection } from "./components/SobreSection";
import { ContatoSection } from "./components/ContatoSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Cabeçalho Fixo com barra de operação e menu */}
      <Header />

      {/* Conteúdo Principal com as seções da arquitetura */}
      <main className="flex-grow">
        {/* Seção 1: Início / Hero com 3 jornadas de conversão */}
        <Hero />

        {/* Seção 2: Guincho 24 Horas & Caminhões-Prancha (Emergência) */}
        <GuinchoSection />

        {/* Seção 3: Mecânica Diesel Especializada & Socorro Externo */}
        <MecanicaSection />

        {/* Seção 4: Comércio de Peças Diesel */}
        <PecasSection />

        {/* Seção 5: Sobre a Delo (Fundação 1999 e Diferenciais) */}
        <SobreSection />

        {/* Seção 6: Contato, Localização e Mapa */}
        <ContatoSection />
      </main>

      {/* Rodapé Institucional com NAP consistente e links */}
      <Footer />

      {/* Botão Flutuante de WhatsApp com seleção de atendimento */}
      <FloatingWhatsApp />
    </div>
  );
}
