import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, Maximize, Train, Car, Flame, Building2, MapPin } from "lucide-react";

const units = [
  {
    name: "Unidade Vila Mariana",
    addr: "Rua Padre Machado, 1.161 - Bosque da Saúde",
    map: "https://www.google.com/maps?q=Rua%20Padre%20Machado%201161%20Bosque%20da%20Saude%20Sao%20Paulo&output=embed",
    photos: [
      "/images/vm-corp1.png",
      "/images/vm-corp2.png",
      "/images/vm-corp3.png",
      "/images/vm-corp4.png",
    ],
    features: [
      { icon: Users, text: "Até 120 pessoas" },
      { icon: Maximize, text: "500 m²" },
      { icon: Train, text: "Próxima ao metrô Santos-Imigrantes" },
      { icon: Building2, text: "Pé direito alto" },
      { icon: Flame, text: "Área dedicada de churrasqueira" },
    ],
  },
  {
    name: "Unidade Bosque da Saúde",
    addr: "Rua Tiquatira, 394 - Bosque da Saúde",
    map: "https://www.google.com/maps?q=Rua%20Tiquatira%20394%20Bosque%20da%20Saude%20Sao%20Paulo&output=embed",
    photos: [
      "/images/tq-corp1.png",
      "/images/tq-corp2.png",
      "/images/tq-corp3.png",
      "/images/tq-corp4.png",
    ],
    features: [
      { icon: Users, text: "Até 120 pessoas" },
      { icon: Maximize, text: "400 m²" },
      { icon: Building2, text: "Salão com pé direito alto" },
      { icon: Train, text: "Próximo ao metrô Alto do Ipiranga" },
      { icon: Car, text: "Estacionamento ao lado" },
    ],
  },
];

const UnitPhotoCarousel = ({ name, photos }: { name: string; photos: string[] }) => {
  const [active, setActive] = useState(0);
  const previous = () => setActive((current) => (current === 0 ? photos.length - 1 : current - 1));
  const next = () => setActive((current) => (current === photos.length - 1 ? 0 : current + 1));

  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-secondary/40">
      <div className="relative aspect-[4/3] bg-secondary sm:aspect-[16/10]">
        <img
          src={photos[active]}
          alt={`${name} - foto ${active + 1}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-primary/72 via-primary/10 to-transparent p-3 sm:p-4">
          <div className="text-xs font-semibold text-primary-foreground">{String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</div>
          <div className="relative z-10 flex gap-2">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-card/95 text-primary shadow-card transition hover:-translate-y-0.5 hover:bg-card"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                previous();
              }}
              aria-label={`Foto anterior de ${name}`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-card/95 text-primary shadow-card transition hover:-translate-y-0.5 hover:bg-card"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                next();
              }}
              aria-label={`Próxima foto de ${name}`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 bg-card p-3">
        {photos.map((photo, index) => (
          <button
            key={photo}
            type="button"
            aria-label={`Ver foto ${index + 1} de ${name}`}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all ${index === active ? "w-8 bg-accent" : "w-2 bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
};

export const UnitsSection = ({
  title = "Duas unidades, em São Paulo",
  subtitle,
}: { title?: string; subtitle?: string }) => (
  <section id="nossos-espacos" className="container scroll-mt-24 section-py">
    <div className="mx-auto max-w-3xl text-center">
      <p className="section-kicker mb-3">Unidades</p>
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {units.map((u) => (
        <div key={u.name} className="surface-card overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
          <div className="p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-primary">{u.name}</h3>
            <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{u.addr}</span>
            </p>
            <UnitPhotoCarousel name={u.name} photos={u.photos} />
            <ul className="mt-5 grid gap-2.5">
              {u.features.map((f) => (
                <li key={f.text} className="flex items-center gap-3 rounded-lg border border-border/60 bg-secondary/55 px-3 py-2.5 text-sm">
                  <f.icon className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-foreground">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-52 border-t border-border/80 bg-secondary sm:h-60">
            <iframe
              title={`Mapa - ${u.name}`}
              src={u.map}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);
