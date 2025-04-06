
import React from 'react';
import { Code2, Trophy, Award, LineChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PlatformCard = ({ 
  platform, 
  handle, 
  rating, 
  solved, 
  icon, 
  color,
  profileLink
}: { 
  platform: string; 
  handle: string; 
  rating: string; 
  solved?: string; 
  icon: React.ReactNode; 
  color: string;
  profileLink: string;
}) => {
  return (
    <Card className="overflow-hidden">
      <div className={`h-2 ${color}`} />
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{platform}</CardTitle>
          <div className="text-muted-foreground">
            {icon}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Handle</div>
            <div className="font-medium">{handle}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Rating</div>
            <div className="font-medium">{rating}</div>
          </div>
          {solved && (
            <div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
              <div className="font-medium">{solved}</div>
            </div>
          )}
        </div>
        <a href={profileLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full mt-2">View Profile</Button>
        </a>
      </CardContent>
    </Card>
  );
};

const CompetitiveProgrammingSection = () => {
  return (
    <section id="competitive-programming">
      <div className="section-container">
        <h2 className="section-heading">Competitive Programming</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PlatformCard
            platform="CodeChef"
            handle="shreymehta"
            rating="3⭐ (1641)"
            solved="200+"
            icon={<Trophy size={24} />}
            color="bg-gradient-to-r from-yellow-600 to-yellow-400"
            profileLink="https://www.codechef.com/users/shreymehta"
          />
          <PlatformCard
            platform="Codeforces"
            handle="_killua1"
            rating="Newbie (1104)"
            solved="230+"
            icon={<LineChart size={24} />}
            color="bg-gradient-to-r from-blue-600 to-blue-400"
            profileLink="https://codeforces.com/profile/_killua1"
          />
          <PlatformCard
            platform="LeetCode"
            handle="shreymehta09"
            rating="Rating: 1400"
            solved="300+"
            icon={<Code2 size={24} />}
            color="bg-gradient-to-r from-yellow-500 to-orange-500"
            profileLink="https://leetcode.com/shreymehta09/"
          />
        </div>
        
        <div className="mt-10 p-6 bg-card rounded-lg border border-border">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award size={20} className="text-accent" />
            Recent Contest Highlights
          </h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">CodeChef Starters 175</div>
                <div className="text-lg font-bold">Rank: 475</div>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">CodeChef Starters 141</div>
                <div className="text-lg font-bold">Rank: 624</div>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">CodeChef Starters 143</div>
                <div className="text-lg font-bold">Rank: 810</div>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              I regularly participate in competitive programming contests to sharpen my problem-solving skills and algorithmic knowledge. My goal is to achieve a 4⭐ rating on CodeChef and reach Specialist level on Codeforces by the end of the year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgrammingSection;
