import { LeadForm } from "./LeadForm";

export const FormSection = ({
  origem, title = "Solicite uma proposta",
  text,
}: { origem: string; title?: string; text?: string }) => (
  <section id="orcamento" className="bg-secondary/40 py-16">
    <div className="container grid gap-10 lg:grid-cols-2 items-start">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">{title}</h2>
        {text && <p className="mt-3 text-muted-foreground max-w-md">{text}</p>}
        <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
          <li>• Atendimento comercial dedicado</li>
          <li>• Resposta rápida via WhatsApp</li>
          <li>• Proposta personalizada conforme escopo</li>
        </ul>
      </div>
      <LeadForm origem={origem} />
    </div>
  </section>
);