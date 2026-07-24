import { CtaButtons } from "./CtaButtons";

export const FinalCta = ({ title, text }: { title: string; text: string }) => (
  <section className="container section-py">
    <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-6 text-center text-primary-foreground shadow-elevated ring-1 ring-primary/10 sm:p-10 lg:p-12">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(0_0%_100%/0.08)_1px,transparent_1px),linear-gradient(0deg,hsl(0_0%_100%/0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35" />
      <div className="relative mx-auto max-w-3xl">
      <p className="section-kicker mb-3">Próxima etapa</p>
      <h2 className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-foreground/80">{text}</p>
      <div className="mt-7 flex justify-center"><CtaButtons /></div>
      </div>
    </div>
  </section>
);
