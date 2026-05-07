import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { whatsappLink, buildLeadMessage, trackConversion } from "@/lib/whatsapp";

const TIPO_OPTIONS = [
  "Evento corporativo", "Confraternização", "Reunião",
  "Workshop", "Treinamento", "Palestra", "Outro",
];
const UNIDADE_OPTIONS = [
  "Unidade Padre Machado", "Unidade Tiquatira", "Ainda não sei",
];

const phoneInvalid = (raw: string) => {
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) return true;
  if (/^(\d)\1+$/.test(digits)) return true; // all same digit
  if (digits === "11999999999") return true;
  return false;
};

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(120),
  empresa: z.string().trim().min(2, "Informe a empresa").max(120),
  whatsapp: z.string().trim().refine((v) => !phoneInvalid(v), "WhatsApp inválido"),
  data_evento: z.string().min(1, "Informe a data do evento"),
  tipo_evento: z.string().min(1, "Selecione o tipo"),
  quantidade_pessoas: z.coerce.number().int().positive("Informe um número válido"),
  unidade_interesse: z.string().min(1, "Selecione a unidade"),
  observacao: z.string().max(1000).optional().or(z.literal("")),
});

type Props = { origem: string };

export const LeadForm = ({ origem }: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    nome: "", empresa: "", whatsapp: "", data_evento: "",
    tipo_evento: "", quantidade_pessoas: "", unidade_interesse: "", observacao: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      nome: parsed.data.nome,
      empresa: parsed.data.empresa,
      whatsapp: parsed.data.whatsapp,
      data_evento: parsed.data.data_evento,
      tipo_evento: parsed.data.tipo_evento,
      quantidade_pessoas: parsed.data.quantidade_pessoas,
      unidade_interesse: parsed.data.unidade_interesse,
      observacao: parsed.data.observacao || null,
      origem_pagina: origem,
      status: "novo_lead",
    });
    setLoading(false);
    if (error) {
      toast({ title: "Erro ao enviar", description: error.message, variant: "destructive" });
      return;
    }
    trackConversion("lead_submit", { origem });
    const msg = buildLeadMessage({
      nome: parsed.data.nome,
      empresa: parsed.data.empresa,
      tipo_evento: parsed.data.tipo_evento,
      data_evento: parsed.data.data_evento,
      quantidade_pessoas: parsed.data.quantidade_pessoas,
      unidade_interesse: parsed.data.unidade_interesse,
    });
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    navigate("/obrigado");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-border/80 bg-card p-5 shadow-elevated ring-1 ring-white/70 sm:p-7">
      <div className="grid gap-1.5">
        <Label htmlFor="nome">Nome *</Label>
        <Input id="nome" className="h-11 rounded-xl bg-background" value={form.nome} onChange={(e) => update("nome", e.target.value)} maxLength={120} />
        {errors.nome && <p className="text-xs text-destructive">{errors.nome}</p>}
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="empresa">Empresa *</Label>
        <Input id="empresa" className="h-11 rounded-xl bg-background" value={form.empresa} onChange={(e) => update("empresa", e.target.value)} maxLength={120} />
        {errors.empresa && <p className="text-xs text-destructive">{errors.empresa}</p>}
      </div>
      <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="whatsapp">WhatsApp *</Label>
          <Input id="whatsapp" className="h-11 rounded-xl bg-background" inputMode="tel" placeholder="(11) 99999-9999" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} />
          {errors.whatsapp && <p className="text-xs text-destructive">{errors.whatsapp}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="data_evento">Data do evento *</Label>
          <Input id="data_evento" className="h-11 rounded-xl bg-background" type="date" value={form.data_evento} onChange={(e) => update("data_evento", e.target.value)} />
          {errors.data_evento && <p className="text-xs text-destructive">{errors.data_evento}</p>}
        </div>
      </div>
      <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-1.5">
          <Label>Tipo de evento *</Label>
          <Select value={form.tipo_evento} onValueChange={(v) => update("tipo_evento", v)}>
            <SelectTrigger className="h-11 rounded-xl bg-background"><SelectValue placeholder="Selecione" /></SelectTrigger>
            <SelectContent>
              {TIPO_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
            </SelectContent>
          </Select>
          {errors.tipo_evento && <p className="text-xs text-destructive">{errors.tipo_evento}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="quantidade_pessoas">Quantidade de pessoas *</Label>
          <Input id="quantidade_pessoas" className="h-11 rounded-xl bg-background" type="number" min={1} value={form.quantidade_pessoas} onChange={(e) => update("quantidade_pessoas", e.target.value)} />
          {errors.quantidade_pessoas && <p className="text-xs text-destructive">{errors.quantidade_pessoas}</p>}
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label>Unidade de interesse *</Label>
        <Select value={form.unidade_interesse} onValueChange={(v) => update("unidade_interesse", v)}>
          <SelectTrigger className="h-11 rounded-xl bg-background"><SelectValue placeholder="Selecione" /></SelectTrigger>
          <SelectContent>
            {UNIDADE_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
          </SelectContent>
        </Select>
        {errors.unidade_interesse && <p className="text-xs text-destructive">{errors.unidade_interesse}</p>}
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="observacao">Observação (opcional)</Label>
        <Textarea id="observacao" className="min-h-[96px] rounded-xl bg-background" rows={3} maxLength={1000} value={form.observacao} onChange={(e) => update("observacao", e.target.value)} />
      </div>
      <Button type="submit" size="lg" disabled={loading} className="h-12 w-full rounded-full text-base shadow-card">
        {loading ? "Enviando..." : "Solicitar orçamento"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">Orçamento personalizado. Sem compromisso.</p>
    </form>
  );
};
