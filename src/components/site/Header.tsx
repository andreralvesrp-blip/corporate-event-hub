import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/whatsapp";

const links = [
  { to: "/", label: "Eventos Corporativos" },
  { to: "/confraternizacoes", label: "Confraternizações" },
  { to: "/reunioes-workshops-treinamentos", label: "Reuniões & Treinamentos" },
  { to: "/#nossos-espacos", label: "Nossos Espaços" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  const isLinkActive = (to: string, navLinkActive: boolean) => {
    if (to === "/#nossos-espacos") {
      return location.pathname === "/" && location.hash === "#nossos-espacos";
    }

    if (to === "/") {
      return location.pathname === "/" && location.hash !== "#nossos-espacos";
    }

    return navLinkActive;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 shadow-[0_1px_0_hsl(var(--border)/0.55)] backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link to="/" className="flex min-w-0 items-center gap-3 font-semibold text-primary">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft ring-1 ring-primary/10">
            <Building2 className="h-5 w-5" />
          </span>
          <span className="truncate text-base sm:text-lg">Kids Point Corp</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border/70 bg-card/80 p-1 shadow-card">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isLinkActive(l.to, isActive) ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:bg-secondary/80 hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="default" size="sm" className="h-10 rounded-full bg-whatsapp px-4 text-whatsapp-foreground shadow-card hover:bg-whatsapp/90">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>
        <button
          aria-label="Abrir menu"
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-primary shadow-card lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background/98 shadow-soft lg:hidden">
          <nav className="container flex flex-col py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium ${isLinkActive(l.to, isActive) ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="mt-3 h-11 rounded-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Falar no WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
