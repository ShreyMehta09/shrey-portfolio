
import React from 'react';
import { 
  Code, 
  Database, 
  Layers, 
  Terminal, 
  Wrench
} from 'lucide-react';

const SkillCategory = ({ title, icon, skills }: { 
  title: string; 
  icon: React.ReactNode; 
  skills: string[] 
}) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-secondary rounded-md text-accent">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={20} />,
      skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Java", "C++", "Python"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers size={20} />,
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Databases",
      icon: <Database size={20} />,
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "Developer Tools",
      icon: <Wrench size={20} />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Webpack"]
    },
    {
      title: "Other",
      icon: <Terminal size={20} />,
      skills: ["RESTful APIs","Vercel", "Netlify", "Linux", "JWT"]
    }
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
