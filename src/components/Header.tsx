import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Download, Sun, Moon, Monitor, Linkedin } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme, setTheme } = useTheme();
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  const handleDownloadResume = () => {
    // In a real scenario, this would be a link to the actual resume file
    const link = document.createElement('a');
    link.href = '/Shrey_Mehta_April.pdf'; // This would be the actual path to the resume
    link.download = 'Shrey_Mehta_April.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add smooth scroll function for nav items
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Update URL without page jump
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border py-4">
      <div className="section-container flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
          onClick={scrollToTop}
        >
          <div className="font-bold text-xl hover:text-accent transition-colors">Shrey Mehta</div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.name}
            </a>
          ))}
          
          <ToggleGroup type="single" value={theme} onValueChange={(value) => value && setTheme(value as 'dark' | 'light' | 'system')} className="mr-2">
            <ToggleGroupItem value="light" aria-label="Light mode">
              <Sun className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" aria-label="Dark mode">
              <Moon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="system" aria-label="System theme">
              <Monitor className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 mr-2 hover:scale-105 transition-transform"
            onClick={handleDownloadResume}
          >
            <Download size={16} />
            <span>Resume</span>
          </Button>
          
          <a 
            href="https://github.com/ShreyMehta09/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="gap-2 mr-2 hover:scale-105 transition-transform">
              <Github size={16} />
              <span>GitHub</span>
            </Button>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/shreymehta09/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </Button>
          </a>
        </nav>
        
        <div className="flex items-center gap-2 md:hidden">
          <ToggleGroup type="single" value={theme} onValueChange={(value) => value && setTheme(value as 'dark' | 'light' | 'system')} size="sm">
            <ToggleGroupItem value="light" aria-label="Light mode" className="h-8 w-8 p-0">
              <Sun className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" aria-label="Dark mode" className="h-8 w-8 p-0">
              <Moon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="system" aria-label="System theme" className="h-8 w-8 p-0">
              <Monitor className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          
          <Button variant="outline" size="icon" className="h-8 w-8 hover:scale-105 transition-transform" onClick={handleDownloadResume}>
            <Download size={16} />
          </Button>
          
          <a href="https://github.com/ShreyMehta09/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="h-8 w-8 hover:scale-105 transition-transform">
              <Github size={16} />
            </Button>
          </a>
          
          <a href="https://www.linkedin.com/in/shrey-mehta09/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="h-8 w-8 hover:scale-105 transition-transform">
              <Linkedin size={16} />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
