import { ReactNode } from "react";
import { CtaButtons } from "./CtaButtons";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle: ReactNode;
  microcopy?: string;
};

export const Hero = ({ eyebrow, title, subtitle, microcopy }: Props) => (
  <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
    <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
    <div className="container relative py-16 sm:py-24">
      <div className="max-w-3xl">
        {eyebrow && <p className="text-xs sm:text-sm uppercase tracking-widest text-accent font-semibold mb-4">{eyebrow}</p>}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h1>
        <p className="mt-5 text-base sm:text-lg text-primary-foreground/85 max-w-2xl">{subtitle}</p>
        <div className="mt-8"><CtaButtons /></div>
        {microcopy && <p className="mt-4 text-sm text-primary-foreground/70">{microcopy}</p>}
      </div>
    </div>
  </section>
);