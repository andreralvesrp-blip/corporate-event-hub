import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { UnitsSection } from "@/components/site/UnitsSection";
import { FinalCta } from "@/components/site/FinalCta";
import { FormSection } from "@/components/site/FormSection";
import {
  Users, Presentation, PartyPopper, Building, Lock, Utensils,
  LayoutGrid, Headphones, UserCheck, HelpCircle,
} from "lucide-react";

const solutions = [
  { icon: Lock, title: "Espaço reservado", text: "Ambiente preparado para sua empresa reunir a equipe com mais privacidade." },
  { icon: Utensils, title: "Alimentação inclusa", text: "Opções de A&B conforme o formato, horário e perfil do encontro." },
  { icon: LayoutGrid, title: "Layout conforme o formato", text: "Configuração adaptável para integração, treinamento, workshop ou confraternização." },
  { icon: Headphones, title: "Apoio operacional", text: "Equipe de apoio para ajudar no funcionamento do evento durante a realização." },
  { icon: UserCheck, title: "Atendimento comercial", text: "Briefing, orientação e proposta personalizada para a necessidade da empresa." },
  { icon: Building, title: "Duas unidades em São Paulo", text: "Espaços no Bosque da Saúde com acesso estratégico a regiões importantes." },
  { icon: Users, title: "Capacidade para até 120 pessoas", text: "Estrutura para encontros corporativos de pequeno e médio porte." },
];

const faqs = [
  {
    q: "Vocês fazem locação somente do espaço?",
    a: "Sim.",
  },
  {
    q: "Qual o escopo da atuação de vocês?",
    a: "Ser a solução 360º de todo o seu evento. Além da nossa estrutura, que contempla espaço, alimentação, mão de obra e mobiliário, também temos parceiros para demandas pontuais, como painel de LED, montagem de palco, entre outras.",
  },
  {
    q: "Vocês fazem serviço externo de buffet, locação de mobiliário e outros?",
    a: "Não. Nossa atuação é sempre dentro de nossos espaços de eventos.",
  },
  {
    q: "Como funciona para obter um orçamento?",
    a: "Nossos orçamentos são personalizados. Deixe seu contato prévio, via formulário ou no WhatsApp, que entraremos em contato para entender melhor sua demanda e, assim, formatar um orçamento fechado.",
  },
  {
    q: "O ambiente funciona para eventos de empresa?",
    a: "Sim. Durante a semana, as unidades são preparadas para receber empresas em formatos como integrações, treinamentos, workshops, confraternizações e encontros de equipe. A estrutura conta com salão amplo, alimentação, atendimento e apoio operacional. Dependendo do formato, áreas recreativas podem permanecer como parte do ambiente ou ser isoladas visualmente.",
  },
];

const Index = () => (
  <SiteLayout>
    <Hero
      title="Encontros corporativos fora do escritório, com espaço, alimentação e estrutura em um só lugar."
      subtitle="O Kids Point Corp recebe empresas para integrações, treinamentos, workshops e confraternizações em um ambiente amplo, reservado e preparado para reunir equipes com praticidade."
      microcopy="Duas unidades no Bosque da Saúde · Até 120 pessoas · Propostas personalizadas"
      images={[
        { src: "/images/tq-corp4.png", alt: "Espaço corporativo Kids Point com mesas organizadas para workshop e apresentação" },
        { src: "/images/vm-corp2.png", alt: "Auditório corporativo na unidade Vila Mariana preparado para apresentação" },
        { src: "/images/tq-corp3.png", alt: "Auditório corporativo da unidade Bosque da Saúde preparado para palestra" },
      ]}
    />

    <FeatureGrid
      title="Ideal para empresas que querem reunir pessoas com mais leveza e menos complicação"
      columns={4}
      items={[
        { icon: Users, title: "Integrações e team building", text: "Para criar conexão entre áreas, times e lideranças em um ambiente mais leve." },
        { icon: Presentation, title: "Treinamentos e workshops internos", text: "Para tirar a equipe da rotina do escritório e facilitar foco, troca e participação." },
        { icon: PartyPopper, title: "Confraternizações corporativas", text: "Para celebrar resultados e reunir pessoas com alimentação, conforto e organização." },
        { icon: Building, title: "Offsites e encontros de equipe", text: "Para alinhamentos, planejamentos e momentos importantes fora do ambiente tradicional." },
      ]}
    />

    <section className="section-band section-py">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex flex-col">
          <p className="section-kicker mb-3">Estrutura completa</p>
          <h2 className="section-heading">Você cuida do objetivo do encontro. A gente cuida da estrutura.</h2>
          <div className="mt-8 flex-1 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-elevated">
            <img
              src="/images/coffee-break.png"
              alt="Mesa de coffee break preparada para evento corporativo"
              className="h-full min-h-[340px] w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col border-y border-border/80 bg-card shadow-card">
          {solutions.map((it) => (
            <div key={it.title} className="grid flex-1 gap-4 border-b border-border/80 p-5 last:border-b-0 sm:grid-cols-[auto_1fr] sm:p-6">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container section-py">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="section-heading">Mais prático que contratar tudo separado. Mais reservado que restaurante. Mais leve que uma sala tradicional.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Para empresas que precisam reunir pessoas sem transformar a organização em um projeto complexo, o Kids Point Corp oferece uma estrutura pronta para encontros corporativos com alimentação, apoio e espaço reservado.
        </p>
      </div>
    </section>

    <UnitsSection title="Nossos Espaços" />

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
      origem="home"
      title="Solicite uma proposta para o seu evento"
      text="Envie as informações principais e nossa equipe comercial retorna com uma proposta personalizada."
    />

    <FinalCta
      title="Quer reunir sua equipe fora do escritório com mais praticidade?"
      text="Conte com o Kids Point Corp para organizar um encontro corporativo com espaço, alimentação e apoio em um só lugar."
    />
  </SiteLayout>
);

export default Index;
