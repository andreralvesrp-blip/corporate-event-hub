import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { FormSection } from "@/components/site/FormSection";
import { FinalCta } from "@/components/site/FinalCta";
import {
  CheckCircle2, ChevronLeft, ChevronRight, Coffee, GraduationCap, HelpCircle,
  LayoutGrid, Lightbulb, MessageSquare, Presentation, Rows3, ScreenShare,
  Table2, Users,
} from "lucide-react";

const formats = [
  {
    icon: Users,
    title: "Reuniões de equipe",
    text: "Para alinhamentos importantes, planejamentos, retrospectivas e conversas fora da rotina do escritório.",
  },
  {
    icon: Lightbulb,
    title: "Workshops internos",
    text: "Para dinâmicas, cocriação, atividades práticas e momentos de troca entre áreas.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos corporativos",
    text: "Para capacitações, onboarding, desenvolvimento de lideranças e formação de times.",
  },
  {
    icon: Presentation,
    title: "Palestras e apresentações",
    text: "Para comunicações internas, encontros com colaboradores e apresentações institucionais.",
  },
  {
    icon: MessageSquare,
    title: "Team building",
    text: "Para fortalecer conexão, confiança e colaboração entre pessoas e equipes.",
  },
  {
    icon: ScreenShare,
    title: "Offsites e encontros de liderança",
    text: "Para tirar o time do ambiente tradicional e criar mais foco em decisões importantes.",
  },
];

const layouts = [
  {
    icon: Table2,
    title: "Formato escolar",
    text: "Mesas e cadeiras voltadas para apresentação, ideal para treinamentos, capacitações e workshops com material de apoio.",
  },
  {
    icon: Presentation,
    title: "Formato auditório",
    text: "Cadeiras organizadas para palestras, apresentações, comunicados internos e encontros com mais participantes.",
  },
  {
    icon: Rows3,
    title: "Formato U",
    text: "Boa opção para reuniões estratégicas, discussões em grupo e encontros com maior interação.",
  },
  {
    icon: Users,
    title: "Mesas em grupos",
    text: "Formato indicado para dinâmicas, atividades colaborativas, team building e trabalhos em equipe.",
  },
  {
    icon: LayoutGrid,
    title: "Formato livre",
    text: "Possibilidade de adaptar o espaço para atividades práticas, circulação e momentos de integração.",
  },
];

const benefits = [
  "Espaço reservado",
  "Layout conforme o formato do encontro",
  "Alimentação inclusa",
  "Apoio operacional",
  "Estrutura para apresentação",
  "Atendimento comercial",
  "Duas unidades em São Paulo",
  "Capacidade para até 120 pessoas",
];

const structureItems = [
  "Salão amplo",
  "Mesas e cadeiras",
  "Formato escolar, auditório, U ou grupos",
  "Apoio para coffee break e alimentação",
  "Espaço para fala institucional",
  "Painel de LED, telão ou apresentação, conforme disponibilidade e necessidade do evento",
  "Apoio operacional durante o evento",
  "Áreas de circulação",
  "Ambiente reservado para a empresa",
];

const foodItems = [
  "Coffee break",
  "Brunch",
  "Almoço",
  "Coquetel",
  "Jantar",
  "Bebidas",
  "Pausas rápidas entre atividades",
];

const faqs = [
  {
    q: "O espaço funciona para reuniões e treinamentos de empresa?",
    a: "Sim. Durante a semana, as unidades são preparadas para receber empresas em formatos como reuniões, workshops, treinamentos, palestras, integrações e encontros de equipe. A estrutura conta com salão amplo, alimentação, atendimento e apoio operacional.",
  },
  {
    q: "Quais layouts vocês conseguem montar?",
    a: "O espaço pode ser organizado em formatos como escolar, auditório, U, mesas em grupos ou formato livre, conforme o objetivo do encontro, quantidade de pessoas e disponibilidade da unidade.",
  },
  {
    q: "Vocês oferecem alimentação durante o evento?",
    a: "Sim. Podemos incluir opções como coffee break, brunch, almoço, coquetel, jantar, bebidas e pausas rápidas, de acordo com o horário e duração do encontro.",
  },
  {
    q: "Vocês têm estrutura para apresentação?",
    a: "Podemos avaliar a necessidade de apresentação, fala institucional, painel de LED, telão ou outros recursos conforme o formato do evento e disponibilidade da unidade.",
  },
  {
    q: "O ambiente funciona mesmo tendo áreas recreativas?",
    a: "Sim. A proposta do Kids Point Corp é adaptar a estrutura das unidades para encontros corporativos durante a semana. Dependendo do formato do evento, áreas recreativas podem permanecer como parte do ambiente ou ser isoladas visualmente.",
  },
  {
    q: "Vocês fazem apenas locação do espaço?",
    a: "O foco do Kids Point Corp é oferecer uma solução completa, com espaço, alimentação e apoio operacional. A locação pura pode ser avaliada caso a caso, mas a proposta principal é simplificar a organização do encontro.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "A proposta é personalizada conforme data, quantidade de pessoas, formato do encontro, alimentação, estrutura necessária e unidade de interesse.",
  },
];

const units = [
  {
    name: "Unidade Vila Mariana / Padre Machado",
    addr: "Rua Padre Machado, 1.161 — Bosque da Saúde",
    map: "https://www.google.com/maps?q=Rua%20Padre%20Machado%201161%20Bosque%20da%20Saude%20Sao%20Paulo&output=embed",
    photos: ["/images/vm-corp2.png", "/images/vm-corp1.png", "/images/vm-corp3.png", "/images/vm-corp4.png"],
    features: [
      "Até 120 pessoas",
      "500 m²",
      "Pé direito alto",
      "Próxima ao metrô Santos-Imigrantes",
      "Boa opção para treinamentos, workshops, reuniões ampliadas e encontros com alimentação",
    ],
  },
  {
    name: "Unidade Bosque da Saúde / Tiquatira",
    addr: "Rua Tiquatira, 394 — Bosque da Saúde",
    map: "https://www.google.com/maps?q=Rua%20Tiquatira%20394%20Bosque%20da%20Saude%20Sao%20Paulo&output=embed",
    photos: ["/images/tq-corp4.png", "/images/tq-corp3.png", "/images/tq-corp1.png", "/images/tq-corp2.png"],
    features: [
      "Até 120 pessoas",
      "400 m²",
      "Salão com pé direito alto",
      "Estacionamento ao lado",
      "Boa opção para reuniões, workshops, treinamentos e encontros de equipe",
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

const ReunioesWorkshops = () => (
  <SiteLayout>
    <Hero
      title="Reuniões, workshops e treinamentos fora do escritório, com estrutura e alimentação em um só lugar."
      subtitle="Receba sua equipe em um ambiente amplo, reservado e preparado para encontros produtivos, com layout adaptável, alimentação e apoio operacional."
      microcopy="Duas unidades no Bosque da Saúde · Até 120 pessoas · Formatos adaptáveis"
      images={[
        { src: "/images/vm-corp2.png", alt: "Auditório preparado para apresentação corporativa" },
        { src: "/images/tq-corp4.png", alt: "Espaço com mesas em formato de treinamento corporativo" },
        { src: "/images/tq-corp3.png", alt: "Salão em formato auditório para encontro corporativo" },
      ]}
    />

    <FeatureGrid title="Ideal para encontros que pedem foco, troca e participação" columns={3} items={formats} />

    <section className="section-band section-py">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker mb-3">Layouts possíveis</p>
          <h2 className="section-heading">Layouts adaptáveis ao objetivo do encontro</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Cada reunião, treinamento ou workshop pede um formato diferente. O espaço pode ser organizado conforme quantidade de pessoas, dinâmica do encontro e necessidade da empresa.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {layouts.map((item) => (
            <div key={item.title} className="surface-card p-5">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/10">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold leading-snug text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container section-py">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="section-kicker mb-3">Estrutura completa</p>
          <h2 className="section-heading">Você cuida do conteúdo. A gente cuida da estrutura.</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Organizar uma reunião, treinamento ou workshop fora do escritório não precisa exigir vários fornecedores. O Kids Point Corp centraliza espaço, alimentação e apoio para que sua equipe tenha uma experiência mais fluida, confortável e produtiva.
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

    <section className="section-band section-py">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="section-kicker mb-3">Estrutura disponível</p>
          <h2 className="section-heading">Estrutura pronta para encontros produtivos</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            A estrutura é definida conforme a necessidade do evento, a disponibilidade da unidade e o formato escolhido para o encontro.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {structureItems.map((item) => (
            <div key={item} className="flex items-start gap-3 border-b border-border py-4">
              <LayoutGrid className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm font-medium leading-relaxed text-primary">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container section-py">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-elevated">
          <img src="/images/coffee-break.png" alt="Coffee break para reunião ou treinamento corporativo" className="h-full min-h-[320px] w-full object-cover sm:min-h-[360px]" loading="lazy" />
        </div>
        <div>
          <p className="section-kicker mb-3">Alimentação durante o encontro</p>
          <h2 className="section-heading">Pausas e alimentação sem sair do espaço</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A alimentação pode ser planejada conforme o horário, duração e perfil do encontro. Isso ajuda a manter a equipe no fluxo do evento e reduz deslocamentos durante o dia.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {foodItems.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/55 px-3 py-2.5">
                <Coffee className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm font-medium text-primary">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-xl border border-border/80 bg-card p-4 text-sm leading-relaxed text-muted-foreground shadow-card">
            Para treinamentos de meio período, encontros de dia inteiro ou workshops com pausas, nossa equipe ajuda a estruturar o melhor formato de alimentação.
          </p>
        </div>
      </div>
    </section>

    <section className="section-band section-py">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-heading">Mais prático que alugar uma sala vazia. Mais leve que uma reunião no escritório. Mais completo que organizar tudo separado.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            O Kids Point Corp é uma alternativa para empresas que precisam reunir pessoas com mais foco e menos complexidade. Em vez de contratar espaço, alimentação e apoio separadamente, sua empresa conta com uma estrutura de eventos já preparada para receber equipes.
          </p>
        </div>
      </div>
    </section>

    <section id="nossos-espacos" className="container scroll-mt-24 section-py">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-kicker mb-3">Nossos espaços</p>
        <h2 className="section-heading">Duas unidades para reuniões, workshops e treinamentos em São Paulo</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          As unidades ficam no Bosque da Saúde, com acesso prático para empresas da região e estrutura para receber encontros corporativos de pequeno e médio porte.
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
      origem="lp_reunioes_workshops_treinamentos"
      title="Solicite uma proposta para sua reunião, workshop ou treinamento"
      text="Envie as informações principais e nossa equipe comercial retorna com uma proposta personalizada para o formato do seu encontro. Orçamento personalizado. Sem compromisso."
    />

    <FinalCta
      title="Precisa tirar sua equipe do escritório para um encontro mais produtivo?"
      text="Fale com nossa equipe e veja como estruturar sua reunião, workshop ou treinamento com espaço, alimentação e apoio em um só lugar."
    />
  </SiteLayout>
);

export default ReunioesWorkshops;
