
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "CineScore: Neural-Powered Film Review Analyzer",
      description: "Developed a sentiment analysis model for movie reviews using Keras and Python, optimizing text classification with NLP techniques",
      technologies: ["PYTHON", "KERAS", "NLP", "TensorFlow"],
      image: "/lovable-uploads/64bd1504-c855-4a14-b76c-f33edef0c479.png",
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      github: "#",
      demo: "#"
    },
    {
      title: "AI Task Manager",
      description: "Smart task management application with AI-powered priority suggestions and automated scheduling capabilities",
      technologies: ["Next.js", "OpenAI", "PostgreSQL", "Prisma"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Projects That <br />
            <span className="gradient-text">Define My Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center space-x-4 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
