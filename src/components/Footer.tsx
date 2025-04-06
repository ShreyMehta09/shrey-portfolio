
import React from 'react';
import { Github, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-8 mt-16 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left animate-fade-in">
            <h3 className="text-xl font-bold mb-2">Shrey Mehta</h3>
            <p className="text-muted-foreground">B.Tech IT | Competitive Programmer | Full-Stack Developer</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/ShreyMehta09/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors hover:scale-110 animate-fade-in"
              style={{ animationDelay: '100ms' }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:shreymehta2023@gmail.com" 
              className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors hover:scale-110 animate-fade-in"
              style={{ animationDelay: '200ms' }}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shreymehta09/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors hover:scale-110 animate-fade-in"
              style={{ animationDelay: '300ms' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '400ms' }}>
          <p>© {new Date().getFullYear()} Shrey Mehta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
