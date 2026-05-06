import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { UnitsSection } from "@/components/site/UnitsSection";
import { FinalCta } from "@/components/site/FinalCta";
import { CtaButtons } from "@/components/site/CtaButtons";
import { FormSection } from "@/components/site/FormSection";
import {
  Users, Presentation, PartyPopper, Building, Sparkles, MapPin, Lock,
  Utensils, LayoutGrid, Headphones, Layers, UserCheck,
} from "lucide-react";

const Index = () => (
  <SiteLayout>
    <Hero
      eyebrow="Eventos corporativos · São Paulo"
      title="Espaços para eventos corporativos, com infraestrutura completa, alimentação e versatilidade no eixo Vila Mariana/Saúde."
      subtitle="O Kids Point Corp ajuda empresas a realizarem confraternizações, reuniões, treinamentos e workshops com praticidade, atendimento e tudo resolvido em um só lugar."
      microcopy="Duas unidades · Até 120 pessoas · Próximo a Congonhas, São Paulo Expo e Av. Paulista"
    />

    <FeatureGrid
      title="Um espaço versátil para diferentes encontros da sua empresa"
      columns={4}
      items={[
        { icon: Users, title: "Reuniões e encontros de equipe", text: "Para tirar o time do escritório e criar um ambiente mais focado." },
        { icon: Presentation, title: "Workshops e treinamentos", text: "Estrutura adaptável para apresentações, dinâmicas e capacitações." },
        { icon: PartyPopper, title: "Confraternizações corporativas", text: "Espaço exclusivo, alimentação e organização para reunir sua equipe sem improviso." },
        { icon: Building, title: "Eventos internos e celebrações", text: "Ideal para encontros com colaboradores, lideranças, clientes ou parceiros." },
      ]}
    />

    <section className="bg-secondary/40 py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">Tudo o que sua empresa precisa para o evento acontecer sem dor de cabeça</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sparkles, title: "Solução 360º", text: "Espaço, alimentação, estrutura e atendimento centralizados em uma única contratação." },
            { icon: MapPin, title: "Localização estratégica", text: "Próximo ao Aeroporto de Congonhas, São Paulo Expo, Av. Paulista e principais eixos." },
            { icon: Lock, title: "Espaço reservado", text: "Ambiente exclusivo para sua empresa reunir a equipe com privacidade e controle." },
            { icon: Utensils, title: "Alimentação inclusa", text: "Opções para coffee break, brunch, almoço, coquetel, jantar e bebidas." },
            { icon: LayoutGrid, title: "Estrutura pronta", text: "Salão, mesas, cadeiras, apoio operacional e estrutura para diferentes formatos." },
            { icon: Headphones, title: "Atendimento comercial", text: "Nossa equipe entende o briefing e monta uma proposta personalizada." },
            { icon: Layers, title: "Duas unidades", text: "Escolha entre as unidades Padre Machado e Tiquatira, no Bosque da Saúde." },
            { icon: UserCheck, title: "Até 120 pessoas", text: "Espaços preparados para grupos pequenos e médios com conforto e organização." },
          ].map((it) => (
            <div key={it.title} className="rounded-2xl bg-card border border-border p-6 shadow-card">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-primary">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container py-16">
      <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-card">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">Mais prático que contratar tudo separado. Mais reservado que restaurante. Mais acessível que muitos espaços corporativos tradicionais.</h2>
        <p className="mt-4 text-muted-foreground max-w-3xl">Para empresas que precisam organizar um evento presencial, o Kids Point Corp oferece uma alternativa prática: você resolve espaço, alimentação e estrutura com uma única equipe, reduzindo fornecedores, tempo de organização e risco de improviso.</p>
      </div>
    </section>

    <UnitsSection />

    <section className="bg-secondary/40 py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">Seu evento corporativo em 4 passos</h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: 1, t: "Você solicita o orçamento", d: "Informe tipo de evento, data, quantidade de pessoas e unidade de interesse." },
            { n: 2, t: "Nossa equipe entende o briefing", d: "Alinhamos formato, alimentação, horário, estrutura e necessidades." },
            { n: 3, t: "Enviamos uma proposta personalizada", d: "O orçamento é montado conforme o tipo de evento e escopo necessário." },
            { n: 4, t: "Sua empresa realiza o evento", d: "Espaço, alimentação e atendimento preparados para receber sua equipe." },
          ].map((s) => (
            <li key={s.n} className="rounded-2xl bg-card border border-border p-6 shadow-card">
              <div className="text-3xl font-bold text-accent">0{s.n}</div>
              <div className="mt-3 font-semibold text-primary">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex justify-center"><CtaButtons /></div>
      </div>
    </section>

    <FormSection
      origem="home"
      title="Solicite uma proposta para o seu evento"
      text="Envie as informações principais e nossa equipe comercial retorna com uma proposta personalizada."
    />

    <FinalCta
      title="Quer organizar um evento corporativo sem contratar tudo separado?"
      text="Conte com o Kids Point Corp para reunir sua equipe com estrutura, alimentação e atendimento em um espaço reservado."
    />
  </SiteLayout>
);

export default Index;
