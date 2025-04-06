
import React from 'react';
import { 
  Award, 
  Code, 
  CodeSquare, 
  Star,
  Trophy
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AchievementCard = ({ 
  title, 
  value, 
  icon, 
  description 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  description?: string;
}) => {
  return (
    <Card className="bg-card hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 border-border hover:border-accent/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="text-accent">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-2">{value}</div>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  );
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-heading">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AchievementCard
            title="CodeChef"
            value="3⭐ (1641)"
            icon={<Trophy size={24} />}
            description="Consistently solved complex algorithmic problems"
          />
          <AchievementCard
            title="Codeforces"
            value="Newbie (1104)"
            icon={<Code size={24} />}
            description="Actively participating in competitive contests"
          />
          <AchievementCard
            title="LeetCode"
            value="300+ Problems"
            icon={<CodeSquare size={24} />}
            description="Proficient in data structures and algorithms"
          />
        </div>
        
        <div className="mt-12 bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Star className="text-yellow-500" size={24} />
            <h3 className="text-xl font-bold">Competitive Programming Highlights</h3>
          </div>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="bg-blue-500/20 p-1 rounded-full flex-shrink-0 mt-0.5">
                <Award className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <span className="font-semibold">Top 20%</span> in CodeChef platform
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-500/20 p-1 rounded-full flex-shrink-0 mt-0.5">
                <Award className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <span className="font-semibold">Rank 475</span> in CodeChef Starters 175
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-500/20 p-1 rounded-full flex-shrink-0 mt-0.5">
                <Award className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <span className="font-semibold">Consistent</span> participation in weekly contests across platforms
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
