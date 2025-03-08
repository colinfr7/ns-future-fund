
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  target: number;
  raised: number;
  daysLeft: number;
  supporters: number;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const progress = (project.raised / project.target) * 100;
  
  return (
    <div className="card overflow-hidden card-hover">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs">
            {project.category}
          </span>
        </div>
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full transition-all hover:bg-white">
          <Heart size={18} className="text-foreground hover:text-destructive transition-colors" />
        </button>
      </div>
      
      <div className="p-5">
        <Link to={`/project/${project.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="space-y-3">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div 
              className="bg-primary h-full rounded-full animate-progress" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="font-medium">${project.raised.toLocaleString()}</span>
            <span className="text-muted-foreground">${project.target.toLocaleString()} target</span>
          </div>
          
          <div className="flex justify-between pt-3 border-t border-border text-sm">
            <span className="text-muted-foreground">
              {project.supporters} supporters
            </span>
            <span className={`font-medium ${project.daysLeft < 5 ? 'text-destructive' : ''}`}>
              {project.daysLeft} days left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
