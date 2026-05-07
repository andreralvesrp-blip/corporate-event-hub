import { CheckCircle2 } from "lucide-react";
import { LeadForm } from "./LeadForm";

export const FormSection = ({
  origem, title = "Solicite uma proposta",
  text,
}: { origem: string; title?: string; text?: string }) => (
  <section id="orcamento" className="section-band section-py">
    <div className="container grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
      <div className="lg:sticky lg:top-24">
        <p className="section-kicker mb-3">Orçamento</p>
        <h2 className="section-heading">{title}</h2>
        {text && <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">{text}</p>}
        <ul className="mt-7 grid gap-3 text-sm">
          {["Atendimento comercial dedicado", "Resposta rápida via WhatsApp", "Proposta personalizada conforme escopo"].map((item) => (
            <li key={item} className="flex items-center gap-3 rounded-xl border border-border/70 bg-card px-4 py-3 text-foreground shadow-card">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <LeadForm origem={origem} />
    </div>
  </section>
);
