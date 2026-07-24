import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export const CtaButtons = ({ formHref = "#orcamento" }: { formHref?: string }) => (
  <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
    <Button asChild size="lg" className="h-12 rounded-full px-6 text-base shadow-card">
      <a href={formHref}>Solicitar orçamento</a>
    </Button>
    <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-transparent bg-whatsapp px-6 text-base text-whatsapp-foreground shadow-card hover:bg-whatsapp/90 hover:text-whatsapp-foreground">
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
      </a>
    </Button>
  </div>
);
