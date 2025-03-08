
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80 z-0"></div>
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              NS School Crowdfunding
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Invest in the <span className="text-primary">Future</span> of NS School
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl max-w-lg">
              Fund innovative projects, share tools, and build the infrastructure your community needs through collaborative investment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/explore" className="button-primary flex items-center justify-center gap-2 group">
                Explore Projects 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/create" className="button-outline flex items-center justify-center">
                Start a Project
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 rounded-full blur-3xl"></div>
              
              {/* Main image with glassmorphism effect */}
              <div className="relative z-10 glass rounded-3xl shadow-xl overflow-hidden animate-floating">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                  alt="Students collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 -right-6 glass p-4 rounded-xl shadow-lg animate-floating" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">New Ideas</p>
                    <p className="text-xs text-muted-foreground">18 projects this week</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 -left-6 glass p-4 rounded-xl shadow-lg animate-floating" style={{animationDelay: '1.5s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"/>
                      <path d="M15 7h6v6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">$24,500</p>
                    <p className="text-xs text-muted-foreground">Funds raised this month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
