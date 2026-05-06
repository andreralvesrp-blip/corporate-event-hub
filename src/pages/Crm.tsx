import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { LogOut, MessageCircle, GripVertical } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

type Lead = {
  id: string;
  nome: string;
  empresa: string;
  whatsapp: string;
  data_evento: string;
  tipo_evento: string | null;
  quantidade_pessoas: number | null;
  unidade_interesse: string | null;
  observacao: string | null;
  origem_pagina: string | null;
  notas_comercial: string | null;
  status: "novo_lead" | "briefing_entendido" | "orcamento_enviado" | "fechada_ganha" | "fechada_perdida";
  created_at: string;
};

const COLUMNS: { key: Lead["status"]; label: string }[] = [
  { key: "novo_lead", label: "Novo lead" },
  { key: "briefing_entendido", label: "Briefing entendido" },
  { key: "orcamento_enviado", label: "Orçamento enviado" },
  { key: "fechada_ganha", label: "Fechada ganha" },
  { key: "fechada_perdida", label: "Fechada perdida" },
];

const Crm = () => {
  const { user, loading, isAdmin } = useAuth();
  const nav = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [active, setActive] = useState<Lead | null>(null);
  const [notas, setNotas] = useState("");
  const [dragId, setDragId] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) nav("/login");
  }, [loading, user, nav]);

  useEffect(() => {
    if (!user) return;
    supabase.from("leads").select("*").order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) { toast({ title: "Erro ao carregar leads", description: error.message, variant: "destructive" }); return; }
        setLeads((data ?? []) as Lead[]);
      });
  }, [user]);

  const updateStatus = async (id: string, status: Lead["status"]) => {
    setLeads((cur) => cur.map((l) => (l.id === id ? { ...l, status } : l)));
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) toast({ title: "Erro ao atualizar", description: error.message, variant: "destructive" });
  };

  const saveNotas = async () => {
    if (!active) return;
    const { error } = await supabase.from("leads").update({ notas_comercial: notas }).eq("id", active.id);
    if (error) { toast({ title: "Erro", description: error.message, variant: "destructive" }); return; }
    setLeads((cur) => cur.map((l) => l.id === active.id ? { ...l, notas_comercial: notas } : l));
    toast({ title: "Nota salva" });
  };

  const logout = async () => { await supabase.auth.signOut(); nav("/login"); };

  if (loading) return <div className="min-h-screen grid place-items-center text-muted-foreground">Carregando...</div>;
  if (!user) return null;
  if (!isAdmin) {
    return (
      <div className="min-h-screen grid place-items-center p-6 text-center">
        <div>
          <h1 className="text-xl font-bold text-primary">Acesso restrito</h1>
          <p className="text-muted-foreground mt-2">Sua conta ainda não tem permissão de acesso ao CRM.</p>
          <Button variant="outline" className="mt-4" onClick={logout}>Sair</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="bg-card border-b border-border">
        <div className="container flex h-14 items-center justify-between">
          <div className="font-bold text-primary">CRM · Kids Point Corp</div>
          <Button size="sm" variant="ghost" onClick={logout}><LogOut className="mr-2 h-4 w-4" />Sair</Button>
        </div>
      </header>
      <div className="overflow-x-auto">
        <div className="flex gap-4 p-4 min-w-max">
          {COLUMNS.map((col) => {
            const colLeads = leads.filter((l) => l.status === col.key);
            return (
              <div
                key={col.key}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => { if (dragId) { updateStatus(dragId, col.key); setDragId(null); } }}
                className="w-[280px] sm:w-[300px] shrink-0 bg-card border border-border rounded-xl p-3"
              >
                <div className="flex items-center justify-between mb-3 px-1">
                  <h2 className="font-semibold text-primary text-sm">{col.label}</h2>
                  <span className="text-xs text-muted-foreground">{colLeads.length}</span>
                </div>
                <div className="space-y-2 min-h-[40px]">
                  {colLeads.map((l) => (
                    <article
                      key={l.id}
                      draggable
                      onDragStart={() => setDragId(l.id)}
                      onClick={() => { setActive(l); setNotas(l.notas_comercial ?? ""); }}
                      className="cursor-pointer rounded-lg border border-border bg-background p-3 shadow-card hover:shadow-elevated"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-semibold text-primary text-sm">{l.nome}</div>
                          <div className="text-xs text-muted-foreground">{l.empresa}</div>
                        </div>
                        <GripVertical className="h-4 w-4 text-muted-foreground shrink-0" />
                      </div>
                      <dl className="mt-2 grid gap-1 text-xs text-muted-foreground">
                        <div>📞 {l.whatsapp}</div>
                        {l.tipo_evento && <div>🎯 {l.tipo_evento}</div>}
                        <div>📅 {new Date(l.data_evento).toLocaleDateString("pt-BR")}</div>
                        {l.quantidade_pessoas && <div>👥 {l.quantidade_pessoas} pessoas</div>}
                        {l.unidade_interesse && <div>📍 {l.unidade_interesse}</div>}
                        {l.origem_pagina && <div className="text-[10px] uppercase tracking-wider opacity-70">via {l.origem_pagina}</div>}
                      </dl>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle>{active.nome} · {active.empresa}</DialogTitle>
                <DialogDescription>Recebido em {new Date(active.created_at).toLocaleString("pt-BR")}</DialogDescription>
              </DialogHeader>
              <dl className="grid gap-2 text-sm">
                <div><dt className="text-muted-foreground inline">WhatsApp: </dt><dd className="inline font-medium">{active.whatsapp}</dd></div>
                <div><dt className="text-muted-foreground inline">Tipo de evento: </dt><dd className="inline">{active.tipo_evento ?? "-"}</dd></div>
                <div><dt className="text-muted-foreground inline">Data: </dt><dd className="inline">{new Date(active.data_evento).toLocaleDateString("pt-BR")}</dd></div>
                <div><dt className="text-muted-foreground inline">Pessoas: </dt><dd className="inline">{active.quantidade_pessoas ?? "-"}</dd></div>
                <div><dt className="text-muted-foreground inline">Unidade: </dt><dd className="inline">{active.unidade_interesse ?? "-"}</dd></div>
                <div><dt className="text-muted-foreground inline">Origem: </dt><dd className="inline">{active.origem_pagina ?? "-"}</dd></div>
                {active.observacao && (
                  <div className="rounded-lg bg-secondary p-3 mt-2">
                    <div className="text-xs text-muted-foreground mb-1">Observação do cliente</div>
                    <div>{active.observacao}</div>
                  </div>
                )}
              </dl>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Notas internas</label>
                <Textarea rows={3} value={notas} onChange={(e) => setNotas(e.target.value)} />
                <Button size="sm" onClick={saveNotas}>Salvar nota</Button>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Status</label>
                <Select value={active.status} onValueChange={(v) => { updateStatus(active.id, v as Lead["status"]); setActive({ ...active, status: v as Lead["status"] }); }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {COLUMNS.map((c) => <SelectItem key={c.key} value={c.key}>{c.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <Button asChild className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground">
                <a href={whatsappLink(`Olá ${active.nome}, sou da equipe Kids Point Corp.`)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Abrir WhatsApp
                </a>
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Crm;