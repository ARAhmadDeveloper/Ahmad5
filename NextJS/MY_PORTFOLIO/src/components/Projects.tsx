import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      demoUrl: "#",
      githubUrl: "#",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "A responsive dashboard for social media analytics with real-time data visualization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
      technologies: ["React", "Redux", "Chart.js", "CSS Modules"],
      demoUrl: "#",
      githubUrl: "#",
      category: "frontend",
    },
    {
      id: 3,
      title: "RESTful API Service",
      description: "A secure API service with comprehensive documentation, rate limiting, and caching.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      demoUrl: "#",
      githubUrl: "#",
      category: "backend",
    },
    {
      id: 6,
      title: "Content Management System",
      description: "A headless CMS with customizable content types and multi-user collaboration.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
      technologies: ["Node.js", "Express", "MongoDB", "GraphQL"],
      demoUrl: "#",
      githubUrl: "#",
      category: "backend",
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            MY WORK
          </span>
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in building digital products.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-background rounded-full p-1.5 glass">
            {(['all', 'frontend', 'backend', 'fullstack'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  filter === category 
                    ? "bg-primary text-white" 
                    : "text-foreground hover:text-primary"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass rounded-xl overflow-hidden card-hover"
            >
              <AspectRatio ratio={16/9} className="bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </AspectRatio>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-secondary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button-primary flex-1 flex justify-center"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button-secondary flex-1 flex justify-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2">
                  <div className="glass rounded-xl overflow-hidden p-1">
                    <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="lg:-left-12 left-2" />
            <CarouselNext className="lg:-right-12 right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
