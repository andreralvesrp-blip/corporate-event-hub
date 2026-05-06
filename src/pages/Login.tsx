import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const nav = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) nav("/crm");
    });
  }, [nav]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const fn = mode === "login"
      ? supabase.auth.signInWithPassword({ email, password })
      : supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/crm` } });
    const { error } = await fn;
    setLoading(false);
    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: mode === "login" ? "Login efetuado" : "Conta criada" });
    nav("/crm");
  };

  return (
    <div className="min-h-screen grid place-items-center bg-secondary/40 p-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-elevated">
        <Link to="/" className="text-sm text-muted-foreground hover:text-primary">← Voltar ao site</Link>
        <h1 className="mt-4 text-2xl font-bold text-primary">Acesso interno</h1>
        <p className="mt-1 text-sm text-muted-foreground">Painel comercial Kids Point Corp</p>
        <form onSubmit={submit} className="mt-6 grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" disabled={loading} className="h-11">
            {loading ? "Aguarde..." : mode === "login" ? "Entrar" : "Criar conta"}
          </Button>
          <button type="button" className="text-xs text-muted-foreground hover:text-primary" onClick={() => setMode(mode === "login" ? "signup" : "login")}>
            {mode === "login" ? "Primeiro acesso? Criar conta" : "Já tenho conta — entrar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;