
import { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import ProjectCard, { Project } from '@/components/ui/project-card';

const projects: Project[] = [
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
  },
  {
    id: '4',
    title: 'Sports Equipment Fund',
    description: 'Upgrade athletic facilities with professional-grade equipment for all sports teams',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Sports',
    target: 12000,
    raised: 4200,
    daysLeft: 18,
    supporters: 53
  },
  {
    id: '5',
    title: 'Music Program Expansion',
    description: 'Invest in new instruments and equipment for the growing school orchestra and band',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Arts',
    target: 18000,
    raised: 12400,
    daysLeft: 10,
    supporters: 87
  },
  {
    id: '6',
    title: 'Sustainable Garden Project',
    description: 'Create an educational garden for teaching sustainability and natural sciences',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Environment',
    target: 8000,
    raised: 6100,
    daysLeft: 5,
    supporters: 74
  },
  {
    id: '7',
    title: 'Robotics Club Competition',
    description: 'Fund participation in the national robotics competition for our award-winning team',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Technology',
    target: 15000,
    raised: 9800,
    daysLeft: 12,
    supporters: 62
  },
  {
    id: '8',
    title: 'Language Lab Modernization',
    description: 'Upgrade language learning facilities with immersive technology and resources',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Education',
    target: 20000,
    raised: 7500,
    daysLeft: 30,
    supporters: 45
  },
  {
    id: '9',
    title: 'Student Entrepreneurship Hub',
    description: 'Create a dedicated space for students to develop business ideas and startups',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Business',
    target: 30000,
    raised: 15600,
    daysLeft: 22,
    supporters: 104
  }
];

const categories = [
  'All',
  'Technology',
  'Education',
  'Arts',
  'Sports',
  'Environment',
  'Business'
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-sm font-medium text-primary/80 mb-2 block">Browse Projects</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Investment Opportunities</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover and invest in projects that will shape the future of NS School and benefit the entire community.
          </p>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="pb-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                className="input-field pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <button 
                className="flex items-center gap-2 px-4 py-2.5 bg-background border border-border rounded-xl text-sm"
                onClick={() => setFiltersVisible(!filtersVisible)}
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>
              
              <button className="button-primary">
                <Filter size={18} className="mr-2" />
                Sort
              </button>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className={`mt-4 overflow-hidden transition-all duration-300 ${filtersVisible ? 'max-h-36' : 'max-h-0'}`}>
            <div className="flex flex-wrap gap-2 py-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-8 px-4 mb-16">
        <div className="container mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Explore;
