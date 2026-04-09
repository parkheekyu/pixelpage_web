import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/performance" element={<PerformancePage />} />
          <Route path="/services/branded" element={<BrandedPage />} />
          <Route path="/services/seo" element={<SeoPage />} />
          <Route path="/services/crm" element={<CrmPage />} />
          <Route path="/services/webbuild" element={<WebBuildPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
