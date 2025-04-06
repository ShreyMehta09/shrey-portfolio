import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import ScrollProgress from "./components/ScrollProgress";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedRoutes from "./components/AnimatedRoutes";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  // Set up preload for resources if needed
  useEffect(() => {
    // If needed, you can add resource preloading or data fetching here
    // For now, just simulating preloading with the loading screen
    
    // Optionally force minimum loading time (1-2 seconds) for UX purposes
    const minLoadTime = setTimeout(() => {
      // You can add more conditions here if needed
    }, 1000);
    
    return () => clearTimeout(minLoadTime);
  }, []);

  const finishLoading = () => {
    setLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <AnimatePresence mode="wait" initial={false}>
            {loading ? (
              <LoadingScreen finishLoading={finishLoading} key="loading" />
            ) : (
              <div className="app-content" key="content">
                <ScrollProgress />
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <AnimatedRoutes />
                </BrowserRouter>
              </div>
            )}
          </AnimatePresence>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
