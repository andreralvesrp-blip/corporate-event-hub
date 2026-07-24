import { LucideIcon } from "lucide-react";

type Item = { title: string; text: string; icon?: LucideIcon };

export const FeatureGrid = ({
  title, subtitle, items, columns = 3,
}: { title: string; subtitle?: string; items: Item[]; columns?: 2 | 3 | 4 }) => {
  const cols = columns === 2 ? "md:grid-cols-2" : columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <section className="container py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">{title}</h2>
        {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
      </div>
      <div className={`mt-10 grid gap-5 ${cols}`}>
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-shadow">
            {it.icon && (
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary">
                <it.icon className="h-5 w-5" />
              </div>
            )}
            <h3 className="font-semibold text-primary">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};