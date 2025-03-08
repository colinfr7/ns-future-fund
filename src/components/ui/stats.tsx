
import { Users, TrendingUp, Award, School } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      value: '500+',
      label: 'Community Members',
      description: 'Active participants in our platform'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      value: '$125K',
      label: 'Funds Raised',
      description: 'Total investment in school projects'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      value: '45',
      label: 'Completed Projects',
      description: 'Successfully funded and implemented'
    },
    {
      icon: <School className="w-6 h-6 text-yellow-500" />,
      value: '12',
      label: 'School Partnerships',
      description: 'Educational institutions we work with'
    }
  ];

  return (
    <section className="bg-background section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-medium text-primary/80 mb-2 block">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Growing Community Impact</h2>
          <p className="text-muted-foreground">
            Through collaborative investment and community support, we've achieved significant milestones for NS School.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card p-6 flex flex-col items-center text-center card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="font-medium text-foreground mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
