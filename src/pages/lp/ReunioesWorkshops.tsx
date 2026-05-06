import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { UnitsSection } from "@/components/site/UnitsSection";
import { FormSection } from "@/components/site/FormSection";
import { FinalCta } from "@/components/site/FinalCta";
import { Users, GraduationCap, Presentation, Activity, HeartHandshake, Focus, MessageSquare, ShieldCheck, Sofa, ClipboardCheck, Eye } from "lucide-react";

const ReunioesWorkshops = () => (
  <SiteLayout>
    <Hero
      eyebrow="Landing · Reuniões, workshops e treinamentos"
      title="Espaço para reuniões, workshops e treinamentos com estrutura, privacidade e alimentação inclusas."
      subtitle="Tire sua equipe do escritório e realize encontros mais produtivos em um ambiente reservado, confortável e adaptável para diferentes formatos de trabalho."
      microcopy="Duas unidades em São Paulo · Até 120 pessoas · Layouts flexíveis"
    />

    <FeatureGrid
      title="Layouts flexíveis para o objetivo do seu encontro"
      subtitle="Cada reunião, treinamento ou workshop tem uma dinâmica diferente. O espaço pode ser organizado conforme formato, quantidade e necessidade."
      columns={3}
      items={[
        { icon: Users, title: "Formato U", text: "Ideal para reuniões estratégicas, discussões em grupo e treinamentos interativos." },
        { icon: GraduationCap, title: "Formato escolar", text: "Indicado para treinamentos, capacitações e apresentações com material de apoio." },
        { icon: Presentation, title: "Formato auditório", text: "Para palestras, apresentações institucionais e encontros com mais participantes." },
        { icon: Activity, title: "Dinâmicas de grupo", text: "Espaço adaptável para atividades práticas, integração e exercícios colaborativos." },
        { icon: HeartHandshake, title: "Team building", text: "Estrutura para encontros, integração e desenvolvimento de cultura." },
      ]}
    />

    <section className="bg-secondary/40 py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">Estrutura pronta para sua equipe se reunir fora do escritório</h2>
          <p className="mt-3 text-muted-foreground">Ambiente reservado, amplo e organizado para empresas que precisam realizar encontros presenciais com conforto e praticidade.</p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          {[
            "Salão reservado","Mesas e cadeiras","Layout adaptável","Pé direito alto","Apoio operacional","Espaço para circulação",
            "Estrutura para apresentação","Painel de LED ou telão (sob disponibilidade)","Duas unidades em SP","Capacidade para até 120 pessoas",
          ].map((t) => <li key={t} className="rounded-lg border border-border bg-card px-4 py-3">{t}</li>)}
        </ul>
      </div>
    </section>

    <section className="container py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary max-w-3xl">Alimentação resolvida para manter o encontro fluindo</h2>
      <p className="mt-3 text-muted-foreground max-w-3xl">Reuniões, workshops e treinamentos funcionam melhor quando a alimentação já está planejada — coffee break, brunch, almoço, coquetel, jantar e bebidas, conforme horário e duração.</p>
    </section>

    <FeatureGrid
      title="Um ambiente fora do escritório para gerar mais foco, troca e participação"
      columns={3}
      items={[
        { icon: Focus, title: "Mais foco", text: "Ambiente reservado reduz interrupções e ajuda a equipe a se concentrar." },
        { icon: MessageSquare, title: "Mais participação", text: "Layouts adaptáveis favorecem apresentações, dinâmicas e atividades em grupo." },
        { icon: ShieldCheck, title: "Menos improviso", text: "Espaço, alimentação e atendimento ficam organizados antes do evento." },
        { icon: Sofa, title: "Mais conforto", text: "Salões amplos e alimentação no local melhoram a experiência dos participantes." },
        { icon: ClipboardCheck, title: "Mais praticidade para quem organiza", text: "Você centraliza estrutura, alimentação e apoio em uma única contratação." },
        { icon: Eye, title: "Melhor percepção interna", text: "Você entrega um encontro mais bem estruturado, com menos risco de erro." },
      ]}
    />

    <UnitsSection title="Duas unidades com acesso estratégico em São Paulo" subtitle="Próximas a regiões importantes como Aeroporto de Congonhas, São Paulo Expo, Av. Paulista e eixo Vila Olímpia." />

    <FormSection origem="lp_reunioes_workshops_treinamentos" title="Solicite uma proposta para seu encontro" text="Envie as informações principais e nossa equipe retorna com uma proposta personalizada conforme data, formato e quantidade." />

    <FinalCta title="Quer organizar sua reunião sem depender de restaurante cheio ou evento improvisado?" text="Fale com nossa equipe. Ajudamos você a definir o melhor formato de espaço, alimentação e estrutura." />
  </SiteLayout>
);

export default ReunioesWorkshops;