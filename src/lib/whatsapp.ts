export const WHATSAPP_NUMBER = "5511974886127";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildLeadMessage(data: {
  nome: string;
  empresa: string;
  tipo_evento?: string;
  data_evento?: string;
  quantidade_pessoas?: number | string;
  unidade_interesse?: string;
}) {
  return `Olá! Tenho interesse em realizar um evento corporativo no Kids Point Corp.
Nome: ${data.nome}
Empresa: ${data.empresa}
Tipo de evento: ${data.tipo_evento ?? "-"}
Data prevista: ${data.data_evento ?? "-"}
Quantidade de pessoas: ${data.quantidade_pessoas ?? "-"}
Unidade de interesse: ${data.unidade_interesse ?? "-"}`;
}

// Tracking helper — placeholders for GA4 / Google Ads. Insira os IDs reais em index.html.
export function trackConversion(eventName: string, params?: Record<string, unknown>) {
  // @ts-expect-error gtag is injected via index.html when configured
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    // @ts-expect-error gtag injected externally
    window.gtag("event", eventName, params || {});
  }
}