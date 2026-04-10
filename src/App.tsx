import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index.tsx";
import PerformancePage from "./pages/PerformancePage.tsx";
import BrandedPage from "./pages/BrandedPage.tsx";
import SeoPage from "./pages/SeoPage.tsx";
import CrmPage from "./pages/CrmPage.tsx";
import WebBuildPage from "./pages/WebBuildPage.tsx";
import ConsultPage from "./pages/ConsultPage.tsx";
import CasesPage from "./pages/CasesPage.tsx";
import GluePage from "./pages/GluePage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/performance" element={<PerformancePage />} />
          <Route path="/services/branded" element={<BrandedPage />} />
          <Route path="/services/seo" element={<SeoPage />} />
          <Route path="/services/crm" element={<CrmPage />} />
          <Route path="/services/webbuild" element={<WebBuildPage />} />
          <Route path="/consult" element={<ConsultPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/products/glue" element={<GluePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
