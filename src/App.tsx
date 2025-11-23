import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, Suspense, lazy } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import ScrollNavigation from "./components/ScrollNavigation";
import PageTransition from "./components/PageTransition";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Footer from "./components/Footer";
import LoadingAnimation from "./components/LoadingAnimation";
import CursorGlow from "./components/CursorGlow";
import BackToTop from "./components/BackToTop";
import WhatsAppChat from "./components/WhatsAppChat";
import MobileCTA from "./components/MobileCTA";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));
const CV = lazy(() => import("./pages/cv"));
const YouTube = lazy(() => import("./pages/YouTube"));
const VanshuBot = lazy(() => import("./pages/VanshuBot"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Articles = lazy(() => import("./pages/Articles"));
const ProcessWorkflow = lazy(() => import("./pages/ProcessWorkflow"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // No loading animation - instant page transitions
    setIsLoading(false);
  }, [location.pathname]);

  return (
    <>
      <ScrollProgressBar />
      <div className="min-h-screen bg-background flex flex-col">
        <ScrollNavigation />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/youtube" element={<YouTube />} />
              <Route path="/vanshu-bot" element={<VanshuBot />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/process" element={<ProcessWorkflow />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppChat />
        <MobileCTA />
      </div>
    </>
  );
};

const App = () => {
  useEffect(() => {
    // Prevent context menu on all images
    const handleContextMenu = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CursorGlow />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
