import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import EventosCorporativos from "./pages/lp/EventosCorporativos.tsx";
import Confraternizacoes from "./pages/lp/Confraternizacoes.tsx";
import ReunioesWorkshops from "./pages/lp/ReunioesWorkshops.tsx";
import Obrigado from "./pages/Obrigado.tsx";
import Login from "./pages/Login.tsx";
import Crm from "./pages/Crm.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/eventos-corporativos" element={<EventosCorporativos />} />
          <Route path="/confraternizacoes" element={<Confraternizacoes />} />
          <Route path="/reunioes-workshops-treinamentos" element={<ReunioesWorkshops />} />
          <Route path="/obrigado" element={<Obrigado />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crm" element={<Crm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
