import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";

const AnimatedRoutes = () => {
  // Get the current location
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          } 
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route 
          path="*" 
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
