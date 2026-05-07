import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { FormSection } from "@/components/site/FormSection";
import { FinalCta } from "@/components/site/FinalCta";
import {
  BadgeCheck, CalendarDays, CheckCircle2, ChevronLeft, ChevronRight, Coffee, Handshake,
  HelpCircle, LayoutGrid, MapPin, MessageCircle, PartyPopper, Sparkles, Users, Utensils,
} from "lucide-react";

const moments = [
  {
    icon: PartyPopper,
    title: "Confraternização de fim de ano",
    text: "Para reunir a equipe, celebrar conquistas e encerrar o ciclo com conforto e organização.",
  },
  {
    icon: BadgeCheck,
    title: "Celebração de metas e resultados",
    text: "Para reconhecer o time e marcar momentos importantes da empresa.",
  },
  {
    icon: MessageCircle,
    title: "Happy hour corporativo",
    text: "Para criar um encontro mais leve, com comida, bebida e espaço reservado.",
  },
  {
    icon: Users,
    title: "Integração entre equipes",
    text: "Para aproximar áreas, lideranças e colaboradores em um ambiente mais descontraído.",
  },
  {
    icon: CalendarDays,
    title: "Datas comemorativas internas",
    text: "Para aniversários da empresa, campanhas internas, ações de cultura e encontros especiais.",
  },
  {
    icon: Handshake,
    title: "Encontro com clientes ou parceiros",
    text: "Para receber convidados em um formato mais próximo, leve e bem organizado.",
  },
];

const benefits = [
  "Espaço reservado para sua equipe",
  "Alimentação e bebidas conforme o formato",
  "Ambiente leve e confortável",
  "Apoio operacional no evento",
  "Layout adaptado para confraternização",
  "Duas unidades em São Paulo",
  "Capacidade para até 120 pessoas",
  "Proposta personalizada",
];

const foodFormats = [
  "Coffee break",
  "Brunch",
  "Almoço",
  "Coquetel",
  "Jantar",
  "Churrasco, conforme unidade e formato",
  "Bebidas",
  "Mesa de doces",
  "Opções para happy hour",
];

const experienceItems = [
  "Mesas para grupos",
  "Área de circulação",
  "Espaço para fala institucional",
  "Possibilidade de música ambiente",
  "Apoio para buffet e bebidas",
  "Ambiente reservado para a empresa",
  "Estrutura existente de eventos",
];

const faqs = [
  {
    q: "Vocês fazem confraternização de empresa?",
    a: "Sim. O Kids Point Corp recebe empresas para confraternizações, happy hours, celebrações internas, encontros de fim de ano, integração de equipes e eventos de relacionamento.",
  },
  {
    q: "O orçamento é personalizado?",
    a: "Sim. A proposta é montada conforme data, quantidade de pessoas, formato da confraternização, alimentação, bebidas e unidade escolhida.",
  },
  {
    q: "Vocês oferecem alimentação e bebidas?",
    a: "Sim. Podemos incluir diferentes formatos de alimentação e bebidas, como coffee break, brunch, almoço, coquetel, jantar, churrasco e opções para happy hour, conforme o perfil do evento.",
  },
  {
    q: "O espaço é exclusivo para a empresa?",
    a: "Sim. A proposta é oferecer um ambiente reservado para a empresa reunir sua equipe com mais privacidade, conforto e controle do evento.",
  },
  {
    q: "O ambiente funciona para uma confraternização corporativa?",
    a: "Sim. Durante a semana, as unidades são preparadas para receber empresas em formatos como confraternizações, integrações e encontros de equipe. A estrutura conta com salão amplo, alimentação, atendimento e apoio operacional. Dependendo do formato, áreas recreativas podem permanecer como parte do ambiente ou ser isoladas visualmente.",
  },
  {
    q: "Vocês fazem apenas locação do espaço?",
    a: "O foco do Kids Point Corp é oferecer uma solução completa, com espaço, alimentação e apoio operacional. A locação pura pode ser avaliada caso a caso, mas a proposta principal é resolver a confraternização em uma única estrutura.",
  },
];

const units = [
  {
    name: "Unidade Vila Mariana / Padre Machado",
    addr: "Rua Padre Machado, 1.161 — Bosque da Saúde",
    map: "https://www.google.com/maps?q=Rua%20Padre%20Machado%201161%20Bosque%20da%20Saude%20Sao%20Paulo&output=embed",
    photos: ["/images/vm-corp4.png", "/images/vm-corp1.png", "/images/vm-corp2.png", "/images/vm-corp3.png"],
    features: [
      "Até 120 pessoas",
      "500 m²",
      "Pé direito alto",
      "Próxima ao metrô Santos-Imigrantes",
      "Área dedicada de churrasqueira",
      "Boa opção para confraternizações com alimentação, integração e encontros mais descontraídos",
    ],
  },
  {
    name: "Unidade Bosque da Saúde / Tiquatira",
    addr: "Rua Tiquatira, 394 — Bosque da Saúde",
    map: "https://www.google.com/maps?q=Rua%20Tiquatira%20394%20Bosque%20da%20Saude%20Sao%20Paulo&output=embed",
    photos: ["/images/tq-corp1.png", "/images/tq-corp2.png", "/images/tq-corp3.png", "/images/tq-corp4.png"],
    features: [
      "Até 120 pessoas",
      "400 m²",
      "Salão com pé direito alto",
      "Estacionamento ao lado",
      "Boa opção para confraternizações, encontros de equipe e celebrações internas",
    ],
  },
];

const PhotoCarousel = ({ name, photos }: { name: string; photos: string[] }) => {
  const [active, setActive] = useState(0);
  const previous = () => setActive((current) => (current === 0 ? photos.length - 1 : current - 1));
  const next = () => setActive((current) => (current === photos.length - 1 ? 0 : current + 1));

  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-secondary/40">
      <div className="relative aspect-[4/3] bg-secondary sm:aspect-[16/10]">
        <img src={photos[active]} alt={`${name} - foto ${active + 1}`} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent p-4">
          <div className="text-xs font-semibold text-primary-foreground">{String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</div>
          <div className="flex gap-2">
            <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-card/95 text-primary shadow-card transition hover:-translate-y-0.5 hover:bg-card" onClick={previous} aria-label={`Foto anterior de ${name}`}>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-card/95 text-primary shadow-card transition hover:-translate-y-0.5 hover:bg-card" onClick={next} aria-label={`Próxima foto de ${name}`}>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 p-3">
        {photos.map((photo, index) => (
          <button
            key={`${photo}-${index}`}
            type="button"
            aria-label={`Ver foto ${index + 1} de ${name}`}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all ${index === active ? "w-8 bg-accent" : "w-2 bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
};

const Confraternizacoes = () => (
  <SiteLayout>
    <Hero
      title="Confraternização de empresa fora do escritório, com espaço, comida e organização em um só lugar."
      subtitle="Reúna sua equipe em um ambiente reservado, leve e pronto para celebrar, sem depender de restaurante cheio, evento improvisado ou fornecedores separados."
      microcopy="Duas unidades no Bosque da Saúde · Até 120 pessoas · Propostas personalizadas"
      imageSrc="/images/vm-corp4.png"
      imageAlt="Confraternização corporativa em espaço reservado com área de convivência"
    />

    <FeatureGrid title="Ideal para empresas que querem celebrar sem complicação" columns={3} items={moments} />

    <section className="section-band section-py">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="section-kicker mb-3">Estrutura completa</p>
          <h2 className="section-heading">Você cuida da celebração. A gente cuida da estrutura.</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Organizar uma confraternização não precisa virar uma operação complexa. O Kids Point Corp centraliza espaço, alimentação e atendimento para que sua empresa consiga reunir pessoas com menos fornecedores, menos improviso e mais tranquilidade.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-border/80 bg-card px-4 py-3 shadow-card">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm font-medium text-primary">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container section-py">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="section-heading">Mais reservado que restaurante. Mais simples que contratar tudo separado. Mais leve que um evento formal demais.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Restaurantes podem ser barulhentos, compartilhados e pouco flexíveis. Espaços vazios exigem mais fornecedores e mais produção. O Kids Point Corp oferece uma alternativa prática para empresas que querem celebrar com privacidade, alimentação e estrutura já resolvidas.
        </p>
      </div>
    </section>

    <section className="section-band section-py">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="section-kicker mb-3">Alimentação e bebidas</p>
          <h2 className="section-heading">Comida e bebida pensadas para o formato da sua confraternização</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            A proposta é personalizada conforme horário, quantidade de pessoas, perfil da equipe e tipo de celebração.
          </p>
          <p className="mt-5 text-sm font-semibold text-primary">Proposta personalizada, sem exibição de preço.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {foodFormats.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-card ring-1 ring-border/80">
              <Utensils className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm font-medium text-primary">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container section-py">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-elevated">
          <img src="/images/coffee-break.png" alt="Mesa de alimentação para confraternização corporativa" className="h-full min-h-[320px] w-full object-cover sm:min-h-[360px]" loading="lazy" />
        </div>
        <div>
          <p className="section-kicker mb-3">Ambiente e experiência</p>
          <h2 className="section-heading">Um espaço para celebrar, circular e aproximar pessoas</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A confraternização funciona melhor quando as pessoas conseguem conversar, circular, comer bem e se sentir à vontade. As unidades oferecem salão amplo, áreas de apoio, estrutura de alimentação e possibilidade de diferentes montagens conforme o objetivo do evento.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {experienceItems.map((item) => (
              <div key={item} className="flex items-center gap-3 border-b border-border py-3">
                <LayoutGrid className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm font-medium text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="nossos-espacos" className="container scroll-mt-24 section-py">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-kicker mb-3">Nossos espaços</p>
        <h2 className="section-heading">Duas unidades para receber sua confraternização em São Paulo</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          As unidades ficam no Bosque da Saúde, com acesso prático para empresas da região e estrutura para receber equipes de pequeno e médio porte.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {units.map((unit) => (
          <article key={unit.name} className="surface-card overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-primary">{unit.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{unit.addr}</p>
              <PhotoCarousel name={unit.name} photos={unit.photos} />
              <ul className="mt-5 grid gap-3">
                {unit.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 rounded-xl border border-border/60 bg-secondary/55 px-3 py-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-52 border-t border-border/80 bg-secondary sm:h-60">
              <iframe title={`Mapa - ${unit.name}`} src={unit.map} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="section-band section-py">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Perguntas Frequentes</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-3">
          {faqs.map((faq, index) => (
            <details key={faq.q} className="group rounded-xl border border-border/80 bg-card p-5 shadow-card transition duration-200 open:shadow-elevated">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="flex gap-3">
                  <span className="font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-semibold text-primary">{faq.q}</span>
                </span>
                <HelpCircle className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-open:text-accent" />
              </summary>
              <p className="mt-4 border-t border-border/80 pt-4 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <FormSection
      origem="lp_confraternizacoes"
      title="Solicite uma proposta para sua confraternização"
      text="Envie as informações principais e nossa equipe comercial retorna com uma proposta personalizada para o formato da sua empresa. Orçamento personalizado. Sem compromisso."
    />

    <FinalCta
      title="Quer organizar uma confraternização sem depender de restaurante cheio ou evento improvisado?"
      text="Fale com nossa equipe e veja como transformar sua confraternização em um encontro leve, reservado e bem organizado."
    />
  </SiteLayout>
);

export default Confraternizacoes;
