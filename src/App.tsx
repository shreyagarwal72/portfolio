import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import BackToTop from "./components/BackToTop";
import IntroWrapper from "./components/IntroWrapper";
import { SoundProvider } from "./contexts/SoundContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import CV from "./pages/cv";
import YouTube from "./pages/YouTube";
import VanshuBot from "./pages/VanshuBot";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Articles from "./pages/Articles";
import ProcessWorkflow from "./pages/ProcessWorkflow";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(false);
  const [introKey, setIntroKey] = useState(0);

  // Check if we should show intro (first visit or VA click)
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro && location.pathname === '/') {
      setShowIntro(true);
    }
  }, [location.pathname]);

  const handleTriggerIntro = () => {
    localStorage.removeItem('hasSeenIntro');
    setShowIntro(true);
    setIntroKey(prev => prev + 1);
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Only show intro on homepage and when showIntro is true
  if (showIntro && location.pathname === '/') {
    return (
      <IntroWrapper 
        key={introKey}
        forceShowIntro={true} 
        onIntroComplete={handleIntroComplete}
      >
        <div />
      </IntroWrapper>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation onLogoClick={handleTriggerIntro} />
        <main className="flex-grow">
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
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

const App = () => {
  useEffect(() => {
    // Set dark theme as default
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }

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
      <SoundProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CursorGlow />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </SoundProvider>
    </QueryClientProvider>
  );
};

export default App;
