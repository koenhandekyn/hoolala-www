import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from '@/lib/language-context';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Summary from "./pages/Summary";
import UseCasesPage from "./pages/UseCasesPage";
import DPPPage from "./pages/DPPPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import RedirectToSubdomain from "./components/RedirectToSubdomain";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <Router basename="/">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/dpp" element={<DPPPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/p/*" element={<RedirectToSubdomain />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
