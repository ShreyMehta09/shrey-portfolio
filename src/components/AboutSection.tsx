
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg">
                I'm a passionate developer with a strong foundation in full-stack web development and a deep interest in competitive programming and problem-solving.
              </p>
              <p className="text-lg">
                Currently completing my Bachelor of Technology in Information Technology at Charotar University of Science and Technology, I combine academic knowledge with practical skills to build modern, efficient web applications.
              </p>
              <p className="text-lg">
                My technical journey spans front-end technologies like React.js and Next.js, back-end development with Node.js, and database management with MongoDB. I enjoy tackling algorithm challenges and continuously enhancing my coding skills through competitive programming.
              </p>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-accent/20 animate-pulse"></div>
            <div className="bg-card p-8 m-1 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m7 10 3 3 7-7"></path>
                    </svg>
                  </div>
                  <div>
                    <strong>Full-Stack Development</strong>: Proficient in MERN stack with NextJS expertise
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m7 10 3 3 7-7"></path>
                    </svg>
                  </div>
                  <div>
                    <strong>Competitive Programmer</strong>: Active on CodeChef, LeetCode, and Codeforces
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m7 10 3 3 7-7"></path>
                    </svg>
                  </div>
                  <div>
                    <strong>Problem Solver</strong>: Strong analytical skills and algorithmic thinking
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m7 10 3 3 7-7"></path>
                    </svg>
                  </div>
                  <div>
                    <strong>Continuous Learner</strong>: Always exploring new technologies and best practices
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
