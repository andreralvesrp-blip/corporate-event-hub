import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export const CtaButtons = ({ formHref = "#orcamento" }: { formHref?: string }) => (
  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
    <Button asChild size="lg" className="h-12 text-base">
      <a href={formHref}>Solicitar orçamento</a>
    </Button>
    <Button asChild size="lg" variant="outline" className="h-12 text-base bg-whatsapp text-whatsapp-foreground border-transparent hover:bg-whatsapp/90 hover:text-whatsapp-foreground">
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
      </a>
    </Button>
  </div>
);