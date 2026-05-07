import { LucideIcon } from "lucide-react";

type Item = { title: string; text: string; icon?: LucideIcon };

export const FeatureGrid = ({
  title, subtitle, items, columns = 3, kicker,
}: { title: string; subtitle?: string; items: Item[]; columns?: 2 | 3 | 4; kicker?: string }) => {
  const cols = columns === 2 ? "md:grid-cols-2" : columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <section className="container section-py">
      <div className="mx-auto max-w-3xl text-center">
        {kicker && <p className="section-kicker mb-3">{kicker}</p>}
        <h2 className="section-heading">{title}</h2>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">{subtitle}</p>}
      </div>
      <div className={`mt-9 grid gap-4 sm:gap-5 ${cols}`}>
        {items.map((it) => (
          <div key={it.title} className="surface-card group p-5 transition duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-elevated sm:p-6">
            {it.icon && (
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </div>
            )}
            <h3 className="text-base font-semibold leading-snug text-primary">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
