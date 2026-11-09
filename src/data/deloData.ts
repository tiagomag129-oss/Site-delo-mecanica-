/**
 * Dados oficiais e constantes consolidadas da Delo Mecânica e Peças Diesel
 * Fundada em 04 de outubro de 1999 - João Monlevade / MG
 */

export const DELO_INFO = {
  name: "Delo Mecânica e Peças Diesel",
  shortName: "Delo Diesel",
  foundationDate: "1999-10-04",
  foundedYear: 1999,
  yearsOfExperience: 25,
  phone: "(31) 3852-5022",
  phoneRaw: "553138525022",
  phoneTel: "+553138525022",
  address: {
    street: "Avenida Resplendor, 587",
    neighborhood: "Teresópolis",
    city: "João Monlevade",
    state: "MG",
    stateFull: "Minas Gerais",
    cep: "35931-155",
    country: "Brasil",
    googleMapsUrl: "https://maps.google.com/?q=Avenida+Resplendor+587+Teresopolis+Joao+Monlevade+MG",
  },
  instagram: {
    handle: "@delomecanica",
    url: "https://www.instagram.com/delomecanica/",
  },
  hours: {
    guincho: "24 horas — Todos os dias (inclusive domingos e feriados)",
    mecanica: "Horário comercial",
    pecas: "Horário comercial",
  },
};

/**
 * Gerador de links seguros para o WhatsApp oficial com mensagens pré-formatadas para CRO
 */
export function getWhatsAppLink(context: "guincho" | "mecanica" | "pecas" | "socorro_externo" | "geral"): string {
  const base = `https://wa.me/${DELO_INFO.phoneRaw}`;
  let text = "";

  switch (context) {
    case "guincho":
      text = "Olá, Delo Guincho 24h! Preciso solicitar um caminhão-prancha com urgência para transportar um veículo. Minha localização é:";
      break;
    case "mecanica":
      text = "Olá! Gostaria de agendar uma avaliação mecânica para meu veículo diesel na Delo Mecânica.";
      break;
    case "socorro_externo":
      text = "Olá! Preciso de socorro mecânico externo com envio de equipe técnica até o meu veículo/máquina que está parado.";
      break;
    case "pecas":
      text = "Olá, Delo Peças! Gostaria de consultar a disponibilidade e cotação de uma peça diesel para meu veículo.";
      break;
    case "geral":
    default:
      text = "Olá! Gostaria de falar com a equipe da Delo Mecânica e Peças Diesel.";
      break;
  }

  return `${base}?text=${encodeURIComponent(text)}`;
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  tags: string[];
}

export const MECANICA_SERVICES: ServiceItem[] = [
  {
    id: "motor",
    name: "Motor Diesel",
    shortDesc: "Retífica, montagem, regulagem e reparos completos em blocos e conjuntos de motores de todas as marcas.",
    tags: ["Bloco", "Pistões", "Virabrequim", "Ajuste fino"],
  },
  {
    id: "injecao",
    name: "Injeção Eletrônica Diesel",
    shortDesc: "Diagnóstico e reparo de sistemas Common Rail e sistemas de injeção de alta pressão para máxima potência e economia.",
    tags: ["Common Rail", "Unidades", "Módulos", "Calibração"],
  },
  {
    id: "bomba",
    name: "Bomba Injetora",
    shortDesc: "Revisão, calibração e teste de vazão e estanqueidade em bombas mecânicas e eletrônicas diesel.",
    tags: ["Bomba rotativa", "Bomba em linha", "Calibração", "Bancada"],
  },
  {
    id: "cabecote",
    name: "Cabeçote",
    shortDesc: "Plainamento, assentamento de válvulas, teste hidrostático para detecção de trincas e troca de retentores.",
    tags: ["Válvulas", "Teste hidrostático", "Plainamento", "Juntas"],
  },
  {
    id: "embreagem",
    name: "Embreagem",
    shortDesc: "Substituição de platô, disco, colar, atuadores e servos de embreagem para caminhões, ônibus e veículos pesados.",
    tags: ["Platô e disco", "Servo embreagem", "Rolamento", "Ajuste"],
  },
  {
    id: "cambio",
    name: "Câmbio e Transmissão",
    shortDesc: "Manutenção preventiva e corretiva em caixas de marchas manuais, sincronizadas e automatizadas.",
    tags: ["Engrenagens", "Sincronizados", "Eixo piloto", "Caixas pesadas"],
  },
  {
    id: "diferencial",
    name: "Diferencial",
    shortDesc: "Ajuste de coroa e pinhão, rolamentos, planetárias e semieixos para tração firme e sem folgas prejudiciais.",
    tags: ["Coroa e Pinhão", "Planetárias", "Rolamentos", "Semieixo"],
  },
  {
    id: "freios",
    name: "Sistemas de Freio",
    shortDesc: "Revisão de freios a ar, tambores, lonas, cuícas, válvulas reguladoras e compressores de freio.",
    tags: ["Freio a ar", "Lonas e tambor", "Válvulas", "Cuícas"],
  },
  {
    id: "diagnostico",
    name: "Diagnóstico Eletrônico Computadorizado",
    shortDesc: "Scanners atualizados para leitura de falhas, sensores, parâmetros em tempo real e reset de módulos multimarcas.",
    tags: ["Scanner multimarcas", "Leitura de falhas", "Parâmetros", "Sensores"],
  },
];

export interface PecasCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const PECAS_CATEGORIES: PecasCategory[] = [
  {
    id: "motor",
    title: "Peças de Motor",
    description: "Componentes para retífica e manutenção de conjuntos mecânicos completos.",
    items: ["Pistões e anéis", "Bronzinas de biela e mancal", "Juntas e retentores", "Válvulas e tuchos", "Kits de reparo"],
  },
  {
    id: "injecao",
    title: "Bombas e Bicos Injetores",
    description: "Elementos de precisão para alimentação e queima eficiente de diesel.",
    items: ["Bicos injetores", "Ponteiras", "Válvulas dosadoras", "Reparos de bomba", "Sensores de pressão"],
  },
  {
    id: "turbinas",
    title: "Turbinas e Sobrealimentação",
    description: "Turbocompressores e conjuntos rotativos para restabelecer a pressão correta do ar.",
    items: ["Conjuntos rotativos", "Válvulas wastegate", "Kits de fixação", "Mangotes de intercooler"],
  },
  {
    id: "embreagens",
    title: "Embreagens e Acionamentos",
    description: "Linha de transmissão com acoplamento seguro para suportar torque elevado.",
    items: ["Discos de embreagem", "Platôs reforçados", "Rolamentos de embreagem", "Servos e cilindros mestres"],
  },
  {
    id: "filtros",
    title: "Filtros Industriais e Automotivos",
    description: "Proteção contra impurezas para a vida útil do motor e sistema de injeção.",
    items: ["Filtros separadores de água", "Filtros de óleo lubrificante", "Filtros de ar primário e secundário", "Filtros de combustível"],
  },
  {
    id: "freios",
    title: "Componentes de Freio",
    description: "Segurança operacional com materiais de alta durabilidade e frenagem precisa.",
    items: ["Lonas de freio", "Tambores", "Válvulas pneumáticas", "Câmaras de freio (cuícas)", "Reparos de compressores"],
  },
  {
    id: "cambio-diferencial",
    title: "Peças de Câmbio e Diferencial",
    description: "Engrenagens e rolamentos para conjuntos de tração e transmissão pesada.",
    items: ["Coroas e pinhões", "Rolamentos cônicos", "Garfos e eixos", "Anéis sincronizados", "Cruzetas"],
  },
  {
    id: "eletrica",
    title: "Componentes Elétricos Diesel",
    description: "Partida e controle confiáveis para sistemas pesados de 12V e 24V.",
    items: ["Motores de partida", "Alternadores", "Relés e sensores", "Chaves de ignição", "Módulos eletrônicos"],
  },
];

export const GUINCHO_MODALIDADES = [
  {
    title: "Automóveis e Veículos Leves",
    description: "Pranchas preparadas para remoção rápida, segura e com ancoragem apropriada sem danificar chassi ou lataria.",
  },
  {
    title: "Caminhões e Frotas Comerciais",
    description: "Capacidade operacional para caminhões trucados, tocos e cavalos mecânicos com equipe qualificada em amarração pesada.",
  },
  {
    title: "Máquinas e Equipamentos Pesados",
    description: "Transporte em caminhão-prancha para retroescavadeiras, tratores, pás-carregadeiras e maquinário industrial.",
  },
];

export const DIFERENCIAIS_LIST = [
  {
    title: "Desde 1999 no Mercado",
    description: "Mais de 25 anos de solidez e conhecimento técnico comprovado na região de João Monlevade e nas principais rodovias de MG.",
  },
  {
    title: "Frota Própria de Caminhões-Prancha",
    description: "Agilidade no despacho do resgate sem intermediários, operando 24 horas por dia com cobertura nacional.",
  },
  {
    title: "Socorro Mecânico Externo",
    description: "Equipe técnica móvel enviada até o local da parada na rodovia ou no pátio para diagnosticar e tentar solucionar o defeito.",
  },
  {
    title: "Atendimento Multimarcas",
    description: "Infraestrutura e equipamentos preparados para motores e sistemas mecânicos de todas as montadoras do mercado.",
  },
  {
    title: "Garantia em Serviços e Peças",
    description: "Compromisso com peças de qualidade e procedimentos mecânicos executados com critério e responsabilidade técnica.",
  },
];
