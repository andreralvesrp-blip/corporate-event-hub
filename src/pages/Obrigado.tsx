import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const Obrigado = () => (
  <SiteLayout>
    <section className="container py-20 sm:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-whatsapp/10 text-whatsapp">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-primary">Recebemos sua solicitação.</h1>
        <p className="mt-4 text-muted-foreground">
          Nossa equipe comercial vai analisar as informações e entrar em contato para entender melhor o formato do seu evento.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="h-12 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Falar agora no WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12">
            <Link to="/">Voltar à Home</Link>
          </Button>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Obrigado;