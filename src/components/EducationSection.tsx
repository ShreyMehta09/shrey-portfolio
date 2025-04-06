import React from 'react';
import { Book, Calendar, GraduationCap, Award as AwardIcon, Medal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EducationSection = () => {
  return (
    <section id="education" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-heading">Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="bg-card border-border hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
            <CardHeader className="flex flex-row items-start space-x-4">
              <div className="mt-1 bg-blue-500/20 p-2 rounded">
                <GraduationCap size={24} className="text-blue-400" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl">Bachelor of Technology in Information Technology</CardTitle>
                <p className="text-muted-foreground">Charotar University of Science and Technology</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar size={14} className="mr-1" />
                  <span>2023 - 2027</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold flex items-center mb-2">
                    <Book size={16} className="mr-2 text-accent" /> 
                    Relevant Coursework
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 pl-6 list-disc">
                    <li>Data Structures and Algorithms</li>
                    <li>Object-Oriented Programming</li>
                    <li>Web Development</li>
                    <li>Database Management Systems</li>
                    <li>Operating Systems</li>
                    <li>Computer Networks</li>
                    <li>Software Engineering</li>
                    <li>Artificial Intelligence</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold flex items-center mb-2">
                    <Award size={16} className="mr-2 text-accent" /> 
                    Achievements
                  </h4>
                  <ul className="pl-6 list-disc">
                    <li>Maintained a high GPA throughout the program</li>
                    <li>Active member of the university coding club</li>
                    <li>Participated in multiple hackathons and coding competitions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
            <CardHeader className="flex flex-row items-start space-x-4">
              <div className="mt-1 bg-blue-500/20 p-2 rounded">
                <GraduationCap size={24} className="text-blue-400" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl">Higher Secondary Education</CardTitle>
                <p className="text-muted-foreground">Queen Of Angels Convent Higher Secondary School</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar size={14} className="mr-1" />
                  <span>2021 - 2023</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold flex items-center mb-2">
                    <Medal size={16} className="mr-2 text-accent" /> 
                    Academic Performance
                  </h4>
                  <p className="pl-6">
                    Secured <span className="font-semibold">83% marks</span> in 12th standard board examination
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold flex items-center mb-2">
                    <Book size={16} className="mr-2 text-accent" /> 
                    Focus Areas
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 pl-6 list-disc">
                    <li>Mathematics</li>
                    <li>Computer Science</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

const Award = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
