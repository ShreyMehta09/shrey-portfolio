
import React, { useState } from 'react';
import { Github, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Project {
  title: string;
  description: string;
  expanded: string;
  features: string[];
  technologies: string[];
  github: string;
  demo?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="bg-card border-border hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {expanded && (
          <>
            <p className="text-muted-foreground">{project.expanded}</p>
            
            <div>
              <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </>
        )}
        
        <div>
          <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="skill-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full mt-2 flex items-center justify-center gap-1"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              <span>Show More</span>
              <ChevronDown size={16} />
            </>
          )}
        </Button>
      </CardContent>
      
      <Separator />
      
      <CardFooter className="flex justify-between pt-6">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="gap-1">
            <Github size={14} />
            <span>Code</span>
          </Button>
        </a>
        
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-1">
              <Globe size={14} />
              <span>Demo</span>
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Voyager - Travel Companion",
      description: "A comprehensive travel companion application to help users plan and track their journeys.",
      expanded: "Voyager is a full-stack application that brings together travel planning, real-time location tracking, and community features to enhance the travel experience.",
      features: [
        "Real-time location tracking with Mapbox APIs",
        "Trip planning and itinerary management",
        "Travel recommendations based on user preferences",
        "Social sharing of travel experiences",
        "Offline mode for accessing saved information"
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Mapbox", "JWT", "Socket.io"],
      github: "https://github.com/ShreyMehta09/voyager",
      demo:"https://voyager-1.onrender.com/listings"
    },
    {
      title: "Music Course Platform",
      description: "A modern platform for music education with interactive lessons and progress tracking.",
      expanded: "This platform connects music teachers with students through a comprehensive course management system, featuring video lessons, interactive exercises, and detailed progress tracking.",
      features: [
        "Interactive video lessons with synchronized sheet music",
        "Practice mode with real-time feedback",
        "Progress tracking and performance analytics",
        "Teacher dashboard for managing courses and students",
        "Subscription-based payment model"
      ],
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth", "Stripe"],
      github: "https://github.com/ShreyMehta09/musicnextjs",
      demo: "https://music-school-pied.vercel.app/"
    },
    {
      title: "Career Guidance Platform",
      description: "An AI-powered career counseling and guidance platform for schools, built with Next.js 15.",
      expanded: "This platform provides AI-driven career assessments, mentorship opportunities, and detailed career exploration tools to help students make informed career choices.",
      features: [
        "AI-powered career assessment for personalized recommendations",
        "Comprehensive career exploration with salary and growth insights",
        "Mentorship program connecting students with industry professionals",
        "Secure email/password authentication with MongoDB",
        "Integration with Google Gemini API for AI-driven guidance"
      ],
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Google Gemini API",
        "MongoDB with Mongoose",
        "bcrypt for password encryption"
      ],
      github: "https://github.com/ShreyMehta09/career-guidance"
    }
    
  ];

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
