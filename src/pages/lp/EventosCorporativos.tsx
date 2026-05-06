import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { UnitsSection } from "@/components/site/UnitsSection";
import { FormSection } from "@/components/site/FormSection";
import { FinalCta } from "@/components/site/FinalCta";
import { Users, Building2, Presentation, GraduationCap, PartyPopper, Handshake, Award, Lock, Utensils, LayoutGrid, Headphones, Monitor, MapPin } from "lucide-react";

const EventosCorporativos = () => (
  <SiteLayout>
    <Hero
      eyebrow="Landing · Eventos corporativos"
      title="Eventos corporativos completos, sem precisar contratar espaço, comida e estrutura separadamente."
      subtitle="O Kids Point Corp reúne espaço reservado, alimentação, atendimento e estrutura pronta e acessível para sua empresa realizar eventos com mais praticidade."
      microcopy="Duas unidades · Até 120 pessoas · Orçamentos personalizados"
    />

    <FeatureGrid
      title="Um espaço versátil para diferentes formatos de evento corporativo"
      subtitle="Se sua empresa precisa reunir pessoas fora do escritório, o Kids Point Corp oferece uma estrutura flexível para adaptar o espaço ao objetivo do encontro."
      columns={3}
      items={[
        { icon: Users, title: "Encontros de equipe", text: "Para alinhamentos, integrações, celebrações internas e momentos de conexão." },
        { icon: Building2, title: "Eventos internos", text: "Para reunir colaboradores, lideranças, áreas ou unidades da empresa em um espaço reservado." },
        { icon: Presentation, title: "Apresentações e reuniões ampliadas", text: "Para encontros com mais pessoas, apresentações institucionais ou comunicações importantes." },
        { icon: GraduationCap, title: "Workshops e treinamentos", text: "Para atividades práticas, dinâmicas, capacitações e desenvolvimento de equipe." },
        { icon: PartyPopper, title: "Confraternizações", text: "Para celebrar resultados, datas especiais e momentos importantes com comida e organização." },
        { icon: Handshake, title: "Ações com clientes ou parceiros", text: "Para receber convidados em um ambiente estruturado, confortável e com atendimento." },
        { icon: Award, title: "Comemorações corporativas", text: "Para metas batidas, encerramento de ciclos e eventos de calendário." },
      ]}
    />

    <section className="bg-secondary/40 py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">Estrutura, alimentação e atendimento em uma única contratação</h2>
          <p className="mt-3 text-muted-foreground">A proposta é simplificar a organização do evento. Em vez de contratar local, buffet, apoio e estrutura separadamente, sua empresa resolve tudo com uma única equipe.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Lock, title: "Espaço reservado", text: "Ambiente exclusivo para sua empresa realizar o evento com mais privacidade." },
            { icon: Utensils, title: "Alimentação e bebidas", text: "Coffee break, brunch, almoço, coquetel, jantar e bebidas conforme o perfil do evento." },
            { icon: LayoutGrid, title: "Mesas, cadeiras e layout adaptável", text: "Estrutura para apresentação, integração, confraternização ou encontro de equipe." },
            { icon: Headphones, title: "Apoio operacional", text: "Equipe para apoiar a organização, recepção e funcionamento do evento." },
            { icon: Monitor, title: "Estrutura audiovisual básica", text: "Possibilidade de uso de painel de LED, telão ou recursos de apresentação, conforme disponibilidade." },
            { icon: MapPin, title: "Duas unidades em São Paulo", text: "Espaços no Bosque da Saúde, com acesso estratégico a importantes regiões da cidade." },
          ].map((it) => (
            <div key={it.title} className="rounded-2xl bg-card border border-border p-6 shadow-card">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><it.icon className="h-5 w-5" /></div>
              <h3 className="font-semibold text-primary">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary max-w-3xl">Uma alternativa prática para empresas que precisam resolver o evento sem complicação</h2>
      <p className="mt-4 text-muted-foreground max-w-3xl">O Kids Point Corp foi pensado para empresas que não querem transformar a organização de um evento em um projeto complexo. Aqui, o foco é oferecer um espaço pronto, reservado e completo para encontros corporativos de pequeno e médio porte.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[
          ["Menos fornecedores para gerenciar", "Espaço, alimentação, atendimento e estrutura ficam centralizados."],
          ["Mais privacidade que restaurantes", "Sua equipe tem um ambiente reservado, sem salão compartilhado ou barulho externo."],
          ["Mais praticidade que espaços tradicionais", "Você não começa do zero: a estrutura já existe e pode ser adaptada."],
          ["Mais racional que soluções premium demais", "Uma opção completa para empresas que buscam custo-benefício e operação simples."],
          ["Experiência em eventos", "O Kids Point tem 24 anos de atuação no segmento, agora com uma frente para empresas."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-semibold text-primary">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>

    <UnitsSection title="Duas unidades, com acesso estratégico em São Paulo" subtitle="As unidades ficam próximas a regiões importantes da cidade, como Aeroporto de Congonhas, São Paulo Expo, Av. Paulista e eixo Vila Olímpia." />

    <FormSection origem="lp_eventos_corporativos" title="Solicite uma proposta para o seu evento corporativo" text="Envie as informações principais e nossa equipe comercial retorna com uma proposta personalizada conforme data, formato, quantidade de pessoas e unidade." />

    <FinalCta title="Ainda não sabe exatamente o formato do evento?" text="Fale com nossa equipe. Ajudamos você a entender qual formato faz mais sentido para o objetivo da sua empresa." />
  </SiteLayout>
);

export default EventosCorporativos;