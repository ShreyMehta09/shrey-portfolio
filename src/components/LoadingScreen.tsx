import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  finishLoading: () => void;
}

const LoadingScreen = ({ finishLoading }: LoadingScreenProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter < 100) {
        setCounter(prev => prev + 5);
      } else {
        setTimeout(() => {
          finishLoading();
        }, 500);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [counter, finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          Shrey Mehta's Portfolio
        </motion.div>
        
        <div className="relative h-1 w-64 overflow-hidden rounded-full bg-muted">
          <motion.div 
            className="absolute left-0 top-0 h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${counter}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted-foreground"
        >
          {counter}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
