
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Calendar, Users, ChevronRight, Clock, AlertCircle } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

// Mock project data - In a real app, this would be fetched from API
const project = {
  id: '1',
  title: 'STEM Innovation Lab',
  description: 'Create a cutting-edge laboratory for advanced science and technology projects, equipped with 3D printers, robotics kits, and computer workstations for students to explore STEM concepts hands-on.',
  longDescription: `<p>The STEM Innovation Lab aims to create a dedicated space where students can explore science, technology, engineering, and mathematics through hands-on learning experiences. This state-of-the-art facility will foster creativity, critical thinking, and problem-solving skills that are essential for success in the 21st century.</p>
  <p>Our goal is to equip the lab with cutting-edge technology including:</p>
  <ul>
    <li>3D printers and scanners for prototyping and design</li>
    <li>Robotics kits and components for engineering projects</li>
    <li>Computer workstations with specialized software for coding and simulation</li>
    <li>Digital microscopes and scientific measurement tools</li>
    <li>Virtual reality headsets for immersive educational experiences</li>
  </ul>
  <p>The lab will support both curriculum-based learning and extracurricular activities, providing opportunities for:</p>
  <ul>
    <li>Classroom science experiments and demonstrations</li>
    <li>Student-led research projects</li>
    <li>Robotics and coding clubs</li>
    <li>Science fair preparation</li>
    <li>Collaboration with industry professionals and higher education institutions</li>
  </ul>
  <p>By investing in this project, you're helping to prepare our students for future careers in STEM fields and fostering a culture of innovation at NS School.</p>`,
  image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1581094794329-c8112c4133a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1566055909643-89267a9c77ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  ],
  category: 'Technology',
  target: 25000,
  raised: 18750,
  daysLeft: 15,
  supporters: 143,
  creator: {
    name: 'Dr. Sarah Johnson',
    role: 'Science Department Head',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    bio: 'Science educator with 12 years of experience, passionate about bringing hands-on STEM opportunities to students.'
  },
  updates: [
    {
      date: '2023-10-15',
      title: 'Equipment Selection Process',
      content: 'We\'ve begun researching the best equipment options for our budget and educational needs.'
    },
    {
      date: '2023-09-30',
      title: 'Project Kickoff',
      content: 'Excited to announce the launch of our fundraising campaign for the STEM Innovation Lab!'
    }
  ],
  investmentOptions: [
    {
      amount: 50,
      title: 'Supporter',
      perks: ['Name listed on donor wall', 'Project updates']
    },
    {
      amount: 250,
      title: 'Contributor',
      perks: ['All Supporter perks', 'Lab open house invitation', 'Personal thank you note']
    },
    {
      amount: 1000,
      title: 'Innovator',
      perks: ['All Contributor perks', 'Named workstation', 'VIP lab access 2hrs/week', 'Annual recognition event']
    }
  ]
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(project.image);
  const [liked, setLiked] = useState(false);
  const progress = (project.raised / project.target) * 100;
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb navigation */}
          <div className="flex items-center text-sm mb-6 text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/explore" className="hover:text-primary transition-colors">Explore</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-foreground">{project.title}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Project images and description */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={selectedImage} 
                    alt={project.title} 
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button 
                      onClick={() => setLiked(!liked)} 
                      className={`p-2 rounded-full backdrop-blur-md ${liked ? 'bg-primary/80 text-white' : 'bg-white/80 text-foreground'}`}
                    >
                      <Heart size={20} className={liked ? 'fill-white' : ''} />
                    </button>
                    <button className="p-2 rounded-full bg-white/80 backdrop-blur-md text-foreground">
                      <Share2 size={20} />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.gallery.map((image, index) => (
                    <button 
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`rounded-lg overflow-hidden flex-shrink-0 border-2 ${selectedImage === image ? 'border-primary' : 'border-transparent'}`}
                    >
                      <img 
                        src={image} 
                        alt={`Gallery image ${index+1}`} 
                        className="w-20 h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
                
                <p className="text-lg text-muted-foreground">{project.description}</p>
                
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.longDescription }}
                />
              </div>
              
              {/* Project updates */}
              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold mb-6">Project Updates</h2>
                <div className="space-y-6">
                  {project.updates.map((update, index) => (
                    <div key={index} className="glass p-6 rounded-xl">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{update.title}</h3>
                        <span className="text-sm text-muted-foreground">{update.date}</span>
                      </div>
                      <p>{update.content}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Project creator */}
              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold mb-6">About the Creator</h2>
                <div className="glass p-6 rounded-xl flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <img 
                    src={project.creator.avatar} 
                    alt={project.creator.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-center sm:text-left">{project.creator.name}</h3>
                    <p className="text-muted-foreground mb-4 text-center sm:text-left">{project.creator.role}</p>
                    <p>{project.creator.bio}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Funding details and options */}
            <div className="space-y-8">
              {/* Project stats */}
              <div className="card overflow-hidden">
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-2xl">${project.raised.toLocaleString()}</span>
                      <span className="text-muted-foreground">of ${project.target.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full animate-progress" 
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-muted-foreground" />
                      <span>{project.supporters} supporters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className={project.daysLeft < 5 ? 'text-destructive' : 'text-muted-foreground'} />
                      <span className={project.daysLeft < 5 ? 'text-destructive font-medium' : ''}>
                        {project.daysLeft} days left
                      </span>
                    </div>
                  </div>
                  
                  <button className="button-primary w-full">
                    Back This Project
                  </button>
                </div>
              </div>
              
              {/* Investment options */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Investment Options</h2>
                {project.investmentOptions.map((option, index) => (
                  <div key={index} className="card p-6 space-y-4 card-hover">
                    <h3 className="text-lg font-semibold">{option.title}</h3>
                    <div className="text-2xl font-bold text-primary">${option.amount}</div>
                    <ul className="space-y-2">
                      {option.perks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="bg-primary/10 text-primary rounded-full p-1 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="button-outline w-full">
                      Select
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle size={24} className="text-muted-foreground" />
                  <div>
                    <h3 className="font-medium mb-1">Important Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Investments are non-refundable. Funds will be released when the target is reached. The project has been reviewed by NS School administration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
