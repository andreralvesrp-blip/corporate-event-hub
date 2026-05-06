import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t border-border bg-secondary/40 mt-16">
    <div className="container py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
      <div>
        <div className="font-bold text-primary text-base">Kids Point Corp</div>
        <p className="text-muted-foreground mt-2">Espaços para eventos corporativos em São Paulo, com infraestrutura, alimentação e atendimento.</p>
      </div>
      <div>
        <div className="font-semibold text-primary mb-2">Soluções</div>
        <ul className="space-y-1 text-muted-foreground">
          <li><Link to="/eventos-corporativos">Eventos Corporativos</Link></li>
          <li><Link to="/confraternizacoes">Confraternizações</Link></li>
          <li><Link to="/reunioes-workshops-treinamentos">Reuniões e Treinamentos</Link></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold text-primary mb-2">Unidades</div>
        <ul className="space-y-1 text-muted-foreground">
          <li>Padre Machado, 1.161 — Bosque da Saúde</li>
          <li>Tiquatira, 394 — Bosque da Saúde</li>
        </ul>
      </div>
      <div>
        <div className="font-semibold text-primary mb-2">Contato</div>
        <ul className="space-y-1 text-muted-foreground">
          <li>WhatsApp: (11) 97488-6127</li>
          <li>São Paulo - SP</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Kids Point Corp. Todos os direitos reservados.
    </div>
  </footer>
);