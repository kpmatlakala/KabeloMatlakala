import { Play, ExternalLink, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  tech: string[];
  status: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  onHover: (id: number | null) => void;
  isActive: boolean;
}

export function ProjectCard({ project, onHover, isActive }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Beta': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <Play className="h-6 w-6" />
            </button>
            <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <ExternalLink className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">{project.category}</span>
          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{project.year}</span>
          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
            <span>View Project</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}