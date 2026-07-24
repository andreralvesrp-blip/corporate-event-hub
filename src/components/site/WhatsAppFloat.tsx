import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export const WhatsAppFloat = () => (
  <a
    href={whatsappLink("Olá! Gostaria de informações sobre eventos corporativos no Kids Point Corp.")}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated ring-4 ring-background/85 transition-transform hover:-translate-y-0.5 hover:bg-whatsapp/90 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);
