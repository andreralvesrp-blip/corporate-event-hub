import { MapPin, Users, Maximize, Train, Car, Flame, Building2 } from "lucide-react";

export const UnitsSection = ({
  title = "Duas unidades, em São Paulo",
  subtitle,
}: { title?: string; subtitle?: string }) => (
  <section className="container py-16">
    <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center">{title}</h2>
    {subtitle && <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {[
        {
          name: "Unidade Vila Mariana",
          addr: "Rua Padre Machado, 1.161 — Bosque da Saúde",
          features: [
            { icon: Users, text: "Até 120 pessoas" },
            { icon: Maximize, text: "500 m²" },
            { icon: MapPin, text: "Próxima à Av. Dr. Ricardo Jafet" },
            { icon: Train, text: "Próxima ao metrô Santos-Imigrantes" },
            { icon: Building2, text: "Pé direito alto" },
            { icon: Flame, text: "Área dedicada de churrasqueira" },
          ],
        },
        {
          name: "Unidade Bosque da Saúde",
          addr: "Rua Tiquatira, 394 — Bosque da Saúde",
          features: [
            { icon: Users, text: "Até 120 pessoas" },
            { icon: Maximize, text: "400 m²" },
            { icon: Building2, text: "Salão com pé direito alto" },
            { icon: Car, text: "Estacionamento ao lado" },
          ],
        },
      ].map((u) => (
        <div key={u.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h3 className="text-xl font-bold text-primary">{u.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{u.addr}</p>
          <ul className="mt-5 grid gap-3">
            {u.features.map((f) => (
              <li key={f.text} className="flex items-center gap-3 text-sm">
                <f.icon className="h-4 w-4 text-accent" />
                <span className="text-foreground">{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);