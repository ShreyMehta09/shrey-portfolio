
import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = document.documentElement.scrollTop;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress);
    
    // Initial calculation
    updateScrollProgress();
    
    // Clean up
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[100] w-full h-1 bg-secondary">
      <div 
        className="h-full bg-accent transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
