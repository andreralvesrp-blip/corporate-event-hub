import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export const WhatsAppFloat = () => (
  <a
    href={whatsappLink("Olá! Gostaria de informações sobre eventos corporativos no Kids Point Corp.")}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated transition-transform hover:scale-105"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);