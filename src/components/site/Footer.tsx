import { Link } from "react-router-dom";
import { Building2, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export const Footer = () => (
  <footer className="mt-8 border-t border-border/80 bg-primary text-primary-foreground">
    <div className="container grid gap-8 py-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <div className="flex items-center gap-3 font-semibold text-base">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-foreground/10 ring-1 ring-primary-foreground/10">
            <Building2 className="h-5 w-5" />
          </span>
          Kids Point Corp
        </div>
        <p className="mt-4 leading-relaxed text-primary-foreground/70">Espaços para eventos corporativos em São Paulo, com infraestrutura, alimentação e atendimento.</p>
      </div>
      <div>
        <div className="mb-3 font-semibold">Soluções</div>
        <ul className="space-y-2 text-primary-foreground/70">
          <li><Link className="transition-colors hover:text-primary-foreground" to="/eventos-corporativos">Eventos Corporativos</Link></li>
          <li><Link className="transition-colors hover:text-primary-foreground" to="/confraternizacoes">Confraternizações</Link></li>
          <li><Link className="transition-colors hover:text-primary-foreground" to="/reunioes-workshops-treinamentos">Reuniões e Treinamentos</Link></li>
        </ul>
      </div>
      <div>
        <div className="mb-3 font-semibold">Unidades</div>
        <ul className="space-y-2 text-primary-foreground/70">
          <li>Padre Machado, 1.161 - Bosque da Saúde</li>
          <li>Tiquatira, 394 - Bosque da Saúde</li>
        </ul>
      </div>
      <div>
        <div className="mb-3 font-semibold">Contato</div>
        <ul className="space-y-2 text-primary-foreground/70">
          <li>
            <a className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              (11) 97488-6127
            </a>
          </li>
          <li>São Paulo - SP</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/60">
      (c) {new Date().getFullYear()} Kids Point Corp. Todos os direitos reservados.
    </div>
  </footer>
);
