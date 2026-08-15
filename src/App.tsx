import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MobileCallButton } from "./components/MobileCallButton";
import Index from "./pages/Index";
import About from "./pages/About";
import TreeRemovalSurrey from "./pages/TreeRemovalSurrey";
import EmergencyTreeService from "./pages/EmergencyTreeService";
import { ArboristSurrey, TreePruningSurrey } from "./pages/servicePages";
import HedgeTrimmingSurrey from "./pages/HedgeTrimmingSurrey";
import LotClearingSurrey from "./pages/LotClearingSurrey";
import TreeServiceWhiteRock from "./pages/TreeServiceWhiteRock";
import TreeServiceDelta from "./pages/TreeServiceDelta";
import TreeServiceLangley from "./pages/TreeServiceLangley";
import TreeServiceCoquitlam from "./pages/TreeServiceCoquitlam";
import TreeServicePortCoquitlam from "./pages/TreeServicePortCoquitlam";
import TreeServiceSurrey from "./pages/TreeServiceSurrey";
import TreeServiceSouthSurrey from "./pages/TreeServiceSouthSurrey";
import TreeServiceTsawwassen from "./pages/TreeServiceTsawwassen";
// import Resources from "./pages/Resources"; // Temporarily hidden - page content incomplete

import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/resources" element={<Resources />} /> */}
              {/* Resources page temporarily hidden - content incomplete, will be restored later */}
              <Route path="/quote" element={<Quote />} />
              <Route path="/tree-removal-surrey" element={<TreeRemovalSurrey />} />
              <Route path="/emergency-tree-service" element={<EmergencyTreeService />} />
              <Route path="/arborist-surrey" element={<ArboristSurrey />} />
              <Route path="/tree-pruning-surrey" element={<TreePruningSurrey />} />
              <Route path="/hedge-trimming-surrey" element={<HedgeTrimmingSurrey />} />
              <Route path="/lot-clearing-surrey" element={<LotClearingSurrey />} />
              <Route path="/tree-service-white-rock" element={<TreeServiceWhiteRock />} />
              <Route path="/tree-service-delta" element={<TreeServiceDelta />} />
              <Route path="/tree-service-langley" element={<TreeServiceLangley />} />
              <Route path="/tree-service-coquitlam" element={<TreeServiceCoquitlam />} />
              <Route path="/tree-service-port-coquitlam" element={<TreeServicePortCoquitlam />} />
              <Route path="/tree-service-surrey" element={<TreeServiceSurrey />} />
              <Route path="/tree-service-south-surrey" element={<TreeServiceSouthSurrey />} />
              <Route path="/tree-service-tsawwassen" element={<TreeServiceTsawwassen />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <MobileCallButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
