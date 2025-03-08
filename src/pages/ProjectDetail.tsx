
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Calendar, Users, Target, Award, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

// Mock project data
const project = {
  id: '1',
  title: 'STEM Innovation Lab',
  description: 'Create a cutting-edge laboratory for advanced science and technology projects that will benefit the entire school community. This lab will enable students to explore robotics, coding, 3D printing, and other emerging technologies. Our goal is to foster innovation and prepare students for future careers in STEM fields.',
  longDescription: `
    <p>The STEM Innovation Lab will be a dedicated space equipped with cutting-edge technology to support student learning in science, technology, engineering, and mathematics. The lab will include:</p>
    
    <ul>
      <li>3D printers and scanners for prototyping</li>
      <li>Robotics kits and components</li>
      <li>Programmable microcontrollers and electronics</li>
      <li>Virtual reality stations for immersive learning</li>
      <li>Collaborative workstations with professional software</li>
    </ul>
    
    <p>This space will support both curriculum-based learning and extracurricular activities, including our award-winning robotics team and coding club. By creating this lab, we'll be able to offer advanced coursework in engineering, computer science, and design thinking.</p>
    
    <p>The benefits of this project extend to the entire school community:</p>
    
    <ul>
      <li>Students will gain hands-on experience with industry-standard tools</li>
      <li>Teachers will have resources to enhance STEM curriculum</li>
      <li>The school will be positioned as a leader in STEM education</li>
      <li>Our students will be better prepared for college and careers in technical fields</li>
    </ul>
  `,
  image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  galleryImages: [
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1566502198964-5e9b15beab2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  ],
  category: 'Technology',
  target: 25000,
  raised: 18750,
  daysLeft: 15,
  supporters: 143,
  createdAt: '2023-10-15',
  creator: {
    name: 'Ms. Johnson',
    role: 'Science Department Head',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  updates: [
    {
      date: 'November 10, 2023',
      title: 'Halfway to our goal!',
      content: 'We\'ve reached the halfway mark! Thank you to everyone who has supported this project so far. We\'re excited to share that we\'ve already begun planning the layout of the new lab space.'
    }
  ],
  rewards: [
    {
      amount: 50,
      title: 'Early Access',
      description: 'Be among the first to experience the new STEM lab with an invitation to our opening event',
      claimed: 68,
      available: 100
    },
    {
      amount: 250,
      title: 'Dedicated Workstation',
      description: 'Sponsor a collaborative workstation that will feature your name or family name on a plaque',
      claimed: 12,
      available: 20
    },
    {
      amount: 1000,
      title: 'Innovation Partner',
      description: 'Become an official Innovation Partner with your name or organization recognized on our donor wall and in all STEM Lab publications',
      claimed: 4,
      available: 10
    }
  ]
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('about');
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const progress = (project.raised / project.target) * 100;
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col gap-2">
            <Link to="/explore" className="text-primary hover:underline flex items-center text-sm">
              &larr; Back to projects
            </Link>
            <span className="text-sm text-muted-foreground">Project #{id}</span>
          </div>
        </div>
      </section>
      
      {/* Project Header */}
      <section className="px-4 pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs">
                  {project.category}
                </span>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full transition-all hover:bg-white">
                  <Heart size={18} className="text-foreground hover:text-destructive transition-colors" />
                </button>
                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full transition-all hover:bg-white">
                  <Share2 size={18} className="text-foreground" />
                </button>
              </div>
            </div>
            
            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={project.creator.image} 
                  alt={project.creator.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">{project.creator.name}</p>
                  <p className="text-sm text-muted-foreground">{project.creator.role}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-primary h-full rounded-full animate-progress" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between">
                  <div>
                    <p className="text-2xl font-bold">${project.raised.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">raised of ${project.target.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{project.daysLeft}</p>
                    <p className="text-sm text-muted-foreground">days left</p>
                  </div>
                </div>
                
                <div className="flex justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-muted-foreground" />
                    <span>{project.supporters} supporters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-muted-foreground" />
                    <span>Started {project.createdAt}</span>
                  </div>
                </div>
              </div>
              
              <button className="button-primary w-full">
                Support this project
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Tabs */}
      <section className="px-4 py-8 border-t border-border">
        <div className="container mx-auto">
          <div className="flex border-b border-border mb-8 overflow-x-auto">
            <button 
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'about' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button 
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'updates' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setActiveTab('updates')}
            >
              Updates ({project.updates.length})
            </button>
            <button 
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'rewards' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setActiveTab('rewards')}
            >
              Rewards
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className={`lg:col-span-2 ${activeTab !== 'about' && 'hidden'}`}>
              <div className="prose max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: showFullDescription 
                      ? project.longDescription 
                      : project.longDescription.split('</p>')[0] + '</p>' 
                  }} 
                />
                
                {!showFullDescription && (
                  <button 
                    className="flex items-center gap-1 text-primary font-medium mt-4"
                    onClick={() => setShowFullDescription(true)}
                  >
                    Read more <ChevronDown size={16} />
                  </button>
                )}
                
                {showFullDescription && (
                  <button 
                    className="flex items-center gap-1 text-primary font-medium mt-4"
                    onClick={() => setShowFullDescription(false)}
                  >
                    Show less <ChevronUp size={16} />
                  </button>
                )}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.galleryImages.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Project image ${index + 1}`}
                        className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={`lg:col-span-2 ${activeTab !== 'updates' && 'hidden'}`}>
              {project.updates.length > 0 ? (
                <div className="space-y-8">
                  {project.updates.map((update, index) => (
                    <div key={index} className="border-b border-border pb-8 last:border-b-0">
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={project.creator.image} 
                          alt={project.creator.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{update.title}</p>
                          <p className="text-sm text-muted-foreground">{update.date}</p>
                        </div>
                      </div>
                      <p>{update.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No updates yet</h3>
                  <p className="text-muted-foreground">Check back soon for project updates</p>
                </div>
              )}
            </div>
            
            <div className={`lg:col-span-2 ${activeTab !== 'rewards' && 'hidden'}`}>
              <div className="space-y-6">
                {project.rewards.map((reward, index) => (
                  <div key={index} className="card p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{reward.title}</h3>
                        <p className="text-2xl font-bold text-primary mt-1">${reward.amount}</p>
                      </div>
                      <div className="bg-primary/10 rounded-full px-3 py-1">
                        <span className="text-sm font-medium text-primary">
                          {reward.claimed} / {reward.available} claimed
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{reward.description}</p>
                    <button className="button-primary w-full">
                      Select Reward
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4">Project Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <div className="flex items-center gap-3">
                      <Target size={18} className="text-primary" />
                      <span>Funding Goal</span>
                    </div>
                    <span className="font-medium">${project.target.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <div className="flex items-center gap-3">
                      <Users size={18} className="text-primary" />
                      <span>Supporters</span>
                    </div>
                    <span className="font-medium">{project.supporters}</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-primary" />
                      <span>Days Left</span>
                    </div>
                    <span className="font-medium">{project.daysLeft}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Award size={18} className="text-primary" />
                      <span>Category</span>
                    </div>
                    <span className="font-medium">{project.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4">Share This Project</h3>
                <div className="flex justify-between">
                  <button className="flex-1 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="mx-auto">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </button>
                  <button className="flex-1 p-3 mx-2 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="mx-auto">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button className="flex-1 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="mx-auto">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar Projects */}
      <section className="px-4 py-16 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Similar Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Digital Library Access"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Digital Library Access</h3>
                <div className="w-full bg-background rounded-full h-2 mb-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: "83%" }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>$8,350 raised</span>
                  <span>7 days left</span>
                </div>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Robotics Club Competition"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Robotics Club Competition</h3>
                <div className="w-full bg-background rounded-full h-2 mb-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: "65%" }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>$9,800 raised</span>
                  <span>12 days left</span>
                </div>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Language Lab Modernization"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Language Lab Modernization</h3>
                <div className="w-full bg-background rounded-full h-2 mb-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: "37%" }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>$7,500 raised</span>
                  <span>30 days left</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
