import React, { useState, useEffect } from 'react';
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Check if profile image exists
  useEffect(() => {
    const img = new Image();
    img.src = '/profile.jpg'; // This will look for profile.jpg in the public folder
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageLoaded(false);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20" id="hero">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-accent">
                Shrey Mehta
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              B.Tech IT | Competitive Programmer | Full-Stack Developer
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects">
                <Button className="gap-2" size="lg">
                  View Projects
                </Button>
              </a>
              <a href="https://github.com/ShreyMehta09/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2" size="lg">
                  <Github size={20} />
                  <span>GitHub</span>
                </Button>
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600 to-accent/30 p-1 animate-fade-in">
              <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center overflow-hidden">
                {imageLoaded ? (
                  <img 
                    src="/profile.jpg" 
                    alt="Shrey Mehta" 
                    className="w-full h-full object-cover"
                    onError={() => setImageLoaded(false)} 
                  />
                ) : (
                  <div className="font-mono text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-accent">
                    SM
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
