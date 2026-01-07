import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CV from "./pages/CV";
import About from "./pages/About";
import Specialties from "./pages/Specialties";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Chatbot />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hakkimda" element={<About />} />
          <Route path="/uzmanlik" element={<Specialties />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/yayinlar" element={<Publications />} />
          <Route path="/iletisim" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
