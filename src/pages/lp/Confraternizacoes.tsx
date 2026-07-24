import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { UnitsSection } from "@/components/site/UnitsSection";
import { FormSection } from "@/components/site/FormSection";
import { FinalCta } from "@/components/site/FinalCta";
import { Lock, Utensils, Sparkles, Layers, Shield, Users, Coffee, Wine, UtensilsCrossed, Beer, Flame, ChefHat } from "lucide-react";

const Confraternizacoes = () => (
  <SiteLayout>
    <Hero
      eyebrow="Landing · Confraternizações"
      title="Confraternização de empresa com espaço exclusivo, alimentação e organização completa."
      subtitle="Reúna sua equipe em um ambiente reservado, confortável e pronto para celebrar, sem depender de restaurante cheio, evento improvisado ou múltiplos fornecedores."
      microcopy="Duas unidades · Até 120 pessoas · Comida, bebida e estrutura no mesmo lugar"
    />

    <FeatureGrid
      title="Sua confraternização resolvida do espaço à alimentação"
      subtitle="Organizar uma confraternização corporativa não precisa virar uma operação complexa. Sua empresa conta com espaço reservado, alimentação, bebidas, atendimento e estrutura para receber a equipe."
      columns={3}
      items={[
        { icon: Lock, title: "Espaço exclusivo para sua empresa", text: "A equipe se reúne em ambiente reservado, sem salão compartilhado ou restaurante cheio." },
        { icon: Utensils, title: "Comida e bebida resolvidas", text: "Opções de alimentação e bebidas conforme o perfil do evento, horário e quantidade." },
        { icon: Sparkles, title: "Ambiente leve e confortável", text: "Espaço preparado para receber equipes pequenas e médias com conforto." },
        { icon: Layers, title: "Organização mais simples", text: "Você centraliza espaço, alimentação e atendimento em uma única contratação." },
        { icon: Shield, title: "Menos risco de improviso", text: "A estrutura já está pronta para receber eventos, reduzindo decisões de última hora." },
        { icon: Users, title: "Ideal para até 120 pessoas", text: "Capacidade adequada para confraternizações de empresas pequenas e médias." },
      ]}
    />

    <section className="bg-secondary/40 py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">Comida e bebida pensadas para o formato da sua confraternização</h2>
          <p className="mt-3 text-muted-foreground">Cada empresa tem um tipo de celebração. A proposta é personalizada conforme horário, quantidade, perfil e experiência desejada.</p>
        </div>
        <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {[
            { icon: Coffee, t: "Coffee break" }, { icon: ChefHat, t: "Brunch" }, { icon: UtensilsCrossed, t: "Almoço" },
            { icon: Wine, t: "Coquetel" }, { icon: UtensilsCrossed, t: "Jantar" }, { icon: Beer, t: "Bebidas" },
            { icon: Flame, t: "Churrasco" },
          ].map((it) => (
            <div key={it.t} className="rounded-2xl bg-card border border-border p-4 text-center shadow-card">
              <it.icon className="h-6 w-6 mx-auto text-accent" />
              <p className="mt-2 text-sm font-medium text-primary">{it.t}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto">Nossa equipe entende o briefing e sugere o melhor formato — encontro leve, fim de ano, comemoração de metas ou evento interno com a equipe.</p>
      </div>
    </section>

    <section className="container py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary max-w-3xl">Mais privacidade que restaurante. Mais praticidade que organizar tudo separado.</h2>
      <p className="mt-4 text-muted-foreground max-w-3xl">Restaurantes podem ser barulhentos, compartilhados e pouco flexíveis. Espaços tradicionais podem exigir fornecedores separados. O Kids Point Corp oferece uma alternativa prática: ambiente reservado, estrutura pronta e atendimento.</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
        {["Ambiente reservado para a equipe","Layout adaptável","Espaço para circulação","Estrutura pronta","Atendimento durante o evento","Proposta personalizada"].map((t) => (
          <li key={t} className="rounded-lg border border-border bg-card px-4 py-3">{t}</li>
        ))}
      </ul>
    </section>

    <UnitsSection title="Duas unidades com acesso estratégico em São Paulo" subtitle="Próximas a regiões importantes como Aeroporto de Congonhas, São Paulo Expo, Av. Paulista e eixo Vila Olímpia." />

    <FormSection origem="lp_confraternizacoes" title="Solicite uma proposta para sua confraternização" text="Envie as informações principais e nossa equipe comercial retorna com uma proposta personalizada conforme data, quantidade, formato e unidade." />

    <FinalCta title="Quer organizar uma confraternização sem depender de restaurante cheio ou evento improvisado?" text="Fale com nossa equipe. Ajudamos você a definir o melhor formato de espaço, alimentação e estrutura." />
  </SiteLayout>
);

export default Confraternizacoes;