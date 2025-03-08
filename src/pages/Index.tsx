
import { ArrowRight, Lightbulb, Coins, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Hero from '@/components/ui/hero';
import Stats from '@/components/ui/stats';
import Testimonials from '@/components/ui/testimonial';
import ProjectCard, { Project } from '@/components/ui/project-card';

const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'STEM Innovation Lab',
    description: 'Create a cutting-edge laboratory for advanced science and technology projects',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Technology',
    target: 25000,
    raised: 18750,
    daysLeft: 15,
    supporters: 143
  },
  {
    id: '2',
    title: 'Digital Library Access',
    description: 'Provide students with access to a vast digital library of educational resources',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Education',
    target: 10000,
    raised: 8350,
    daysLeft: 7,
    supporters: 96
  },
  {
    id: '3',
    title: 'Art & Design Studio',
    description: 'Build a modern studio for creative arts, photography, and digital design',
    image: 'https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Arts',
    target: 15000,
    raised: 5800,
    daysLeft: 24,
    supporters: 67
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* How It Works */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-sm font-medium text-primary/80 mb-2 block">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fund, Build, Thrive Together</h2>
            <p className="text-muted-foreground">
              Our platform makes it easy to contribute to educational projects that benefit the entire NS School community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Submit a Project</h3>
              <p className="text-muted-foreground">Create a detailed project proposal with goals, budget, and expected impact on the school.</p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Coins className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Funded</h3>
              <p className="text-muted-foreground">Community members invest in your project, and you receive funds when your target is reached.</p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Share Benefits</h3>
              <p className="text-muted-foreground">Complete your project and share the benefits with the entire school community.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <span className="text-sm font-medium text-primary/80 mb-2 block">Featured Projects</span>
              <h2 className="text-3xl md:text-4xl font-bold">Investment Opportunities</h2>
            </div>
            <Link to="/explore" className="inline-flex items-center text-primary font-medium mt-4 md:mt-0 group">
              View all projects 
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <Stats />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start a project or invest in the future of NS School. Every contribution helps build a better educational experience for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create" className="button-primary">
                Start a Project
              </Link>
              <Link to="/explore" className="button-outline">
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
