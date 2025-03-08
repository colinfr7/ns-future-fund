
import { useState } from 'react';
import { Search, Filter, ArrowDownAZ } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import ProjectCard, { Project } from '@/components/ui/project-card';

const projects: Project[] = [
  {
    id: '1',
    title: 'STEM Innovation Lab',
    description: 'Create a cutting-edge laboratory for advanced science and technology projects with state-of-the-art equipment and resources for students.',
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
    description: 'Provide students with access to a vast digital library of educational resources including e-books, research papers, and multimedia content.',
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
    description: 'Build a modern studio for creative arts, photography, and digital design with professional-grade equipment and software.',
    image: 'https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Arts',
    target: 15000,
    raised: 5800,
    daysLeft: 24,
    supporters: 67
  },
  {
    id: '4',
    title: 'Sports Equipment Upgrade',
    description: 'Replace outdated sports equipment and expand fitness facilities to promote physical wellness and team-building activities.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Sports',
    target: 12000,
    raised: 7200,
    daysLeft: 18,
    supporters: 84
  },
  {
    id: '5',
    title: 'Robotics Competition Fund',
    description: 'Support our school robotics team with new components, travel expenses, and registration fees for national competitions.',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Technology',
    target: 8000,
    raised: 3200,
    daysLeft: 30,
    supporters: 46
  },
  {
    id: '6',
    title: 'Music Department Instruments',
    description: 'Purchase new musical instruments for the school band and orchestra to replace aging equipment and expand the music program.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Music',
    target: 18000,
    raised: 6300,
    daysLeft: 25,
    supporters: 71
  }
];

const categories = [
  'All Categories',
  'Technology',
  'Education',
  'Arts',
  'Sports',
  'Music',
  'Infrastructure'
];

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All Categories' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-sm font-medium text-primary/80 mb-2 block">Browse Projects</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Explore Investment Opportunities</h1>
            <p className="text-muted-foreground">
              Discover projects that need your support and invest in the future of NS School
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full h-12 pl-10 pr-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-3">
              <div className="relative min-w-48">
                <select
                  className="w-full h-12 px-4 pr-10 rounded-lg appearance-none border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
              </div>
              
              <button className="h-12 px-4 rounded-lg border border-border bg-background flex items-center gap-2 hover:bg-muted transition-colors">
                <ArrowDownAZ size={18} />
                <span className="hidden sm:inline">Sort</span>
              </button>
            </div>
          </div>
          
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter to find what you're looking for</p>
            </div>
          )}
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
