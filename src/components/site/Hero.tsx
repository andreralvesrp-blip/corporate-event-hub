import { ReactNode, useState } from "react";
import { Building2, ChevronLeft, ChevronRight, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaButtons } from "./CtaButtons";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle: ReactNode;
  microcopy?: string;
  imageSrc?: string;
  imageAlt?: string;
  images?: { src: string; alt: string }[];
};

const HeroImageCarousel = ({ images }: { images: { src: string; alt: string }[] }) => {
  const [active, setActive] = useState(0);
  const previous = () => setActive((current) => (current === 0 ? images.length - 1 : current - 1));
  const next = () => setActive((current) => (current === images.length - 1 ? 0 : current + 1));

  return (
    <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-elevated ring-1 ring-white/10 sm:min-h-[380px] lg:min-h-[430px]">
      <img
        src={images[active].src}
        alt={images[active].alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 sm:inset-x-4 sm:bottom-4">
        <div className="flex rounded-full bg-primary/50 px-2.5 py-2 backdrop-blur">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              aria-label={`Ver foto ${index + 1} do hero`}
              onClick={() => setActive(index)}
              className={`mx-1 h-2 rounded-full transition-all ${index === active ? "w-7 bg-accent" : "w-2 bg-primary-foreground/60"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Button type="button" size="icon" variant="secondary" className="h-9 w-9 rounded-full bg-card/95 text-primary shadow-card hover:bg-card" onClick={previous} aria-label="Foto anterior do hero">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button type="button" size="icon" variant="secondary" className="h-9 w-9 rounded-full bg-card/95 text-primary shadow-card hover:bg-card" onClick={next} aria-label="Próxima foto do hero">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Hero = ({ eyebrow, title, subtitle, microcopy, imageSrc, imageAlt, images }: Props) => {
  const heroImages = images ?? (imageSrc ? [{ src: imageSrc, alt: imageAlt ?? "" }] : []);

  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(0_0%_100%/0.08)_1px,transparent_1px),linear-gradient(0deg,hsl(0_0%_100%/0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/10 to-transparent" />
      <div className="container relative grid gap-9 py-11 sm:py-14 lg:grid-cols-[1fr_0.96fr] lg:items-center lg:py-20">
        <div className="max-w-3xl">
          {eyebrow && <p className="section-kicker mb-4">{eyebrow}</p>}
          <h1 className="text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">{subtitle}</p>
          <div className="mt-7"><CtaButtons /></div>
          {microcopy && <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/72">{microcopy}</p>}
        </div>

        {heroImages.length > 0 ? (
          <HeroImageCarousel images={heroImages} />
      ) : (
        <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/10 p-5 shadow-elevated sm:min-h-[380px]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(0_0%_100%/0.18),hsl(0_0%_100%/0.02))]" />
          <div className="relative flex items-center justify-between rounded-md border border-white/20 bg-primary/30 px-4 py-3 backdrop-blur">
            <div className="text-sm font-medium">Evento corporativo</div>
            <div className="h-2 w-16 rounded-full bg-accent" />
          </div>
          <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Building2, label: "Espaço reservado" },
              { icon: Users, label: "Até 120 pessoas" },
              { icon: MapPin, label: "São Paulo" },
            ].map((item) => (
              <div key={item.label} className="rounded-md border border-white/20 bg-white/10 p-4 backdrop-blur">
                <item.icon className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm font-medium leading-snug text-primary-foreground/90">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-5 rounded-md border border-white/20 bg-background/95 p-4 text-primary shadow-soft sm:absolute sm:bottom-5 sm:left-5 sm:right-5">
            <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <div className="text-sm font-semibold">Infraestrutura, alimentação e atendimento</div>
                <div className="mt-1 text-xs text-muted-foreground">Placeholder visual pronto para trocar por foto real do espaço.</div>
              </div>
              <div className="rounded-md bg-secondary px-3 py-2 text-xs font-medium text-primary">Proposta sob medida</div>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};
