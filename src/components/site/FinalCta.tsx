import { CtaButtons } from "./CtaButtons";

export const FinalCta = ({ title, text }: { title: string; text: string }) => (
  <section className="container py-16">
    <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-8 sm:p-12 text-center shadow-elevated">
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
      <p className="mt-3 text-primary-foreground/85 max-w-2xl mx-auto">{text}</p>
      <div className="mt-7 flex justify-center"><CtaButtons /></div>
    </div>
  </section>
);