
import { Calendar, MapPin, Building2, ArrowUpRight, Zap, Star, Trophy, Target } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Leaniar",
      role: "Software Developer Intern",
      period: "Jun 2024 - Aug 2024",
      location: "Remote",
      description: "Developed a Selenium-based RPA at Leaniar to automate web interactions, reducing manual processing by 53%. Enhanced the automation pipeline by fine-tuning a language model for script generation and created an Angular-based platform for advanced software testing automation.",
      logo: "/lovable-uploads/28cea8f1-9b72-4cf6-8b6c-a2e8e668062b.png",
      technologies: ["Selenium", "RPA", "Angular", "Machine Learning", "Python"],
      achievements: ["53% reduction in manual processing", "AI-powered script generation", "Automated testing platform"],
      highlight: "Most Recent"
    },
    {
      id: 2,
      company: "Tecrave",
      role: "Software Developer Intern",
      period: "Feb 2024 - May 2024",
      location: "Remote",
      description: "As a Software Developer Intern at Tecrave, I implemented robust user authentication using Django, optimized database performance with Django ORM, and developed high-performance RESTful APIs with automated CI/CD pipelines. These efforts significantly enhanced application security, doubled app responsiveness, and streamlined deployment processes.",
      logo: "/lovable-uploads/3a4892a4-269f-4a1a-ad27-bc10b2161a88.png",
      technologies: ["Django", "Python", "REST APIs", "CI/CD", "Database Optimization"],
      achievements: ["2x faster app responsiveness", "Enhanced security implementation", "Streamlined CI/CD pipelines"],
      highlight: "Performance Focus"
    },
    {
      id: 3,
      company: "Gujarat Technological University",
      role: "Software Developer Intern",
      period: "Jan 2023 - Jun 2023",
      location: "Gujarat, India",
      description: "Implemented a Grievance Redressal system using ASP.NET and C#, reducing resolution times by 25%, and led the creation of a user-friendly Android app with enhanced security features at Gujarat Technological University.",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=100&h=100",
      technologies: ["ASP.NET", "C#", "Android", "Mobile Development", "Security"],
      achievements: ["25% faster resolution times", "Enhanced security features", "User-friendly mobile interface"],
      highlight: "Academic Excellence"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-card rounded-full border border-border mb-8">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Professional Experience</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions through strategic development
          </p>
        </div>

        {/* Simple Timeline */}
        <div className="relative">
          {/* Clean vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative group">
                
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block"></div>

                <div className="md:ml-20">
                  <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-all duration-300">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-card border border-border rounded-lg p-3 flex items-center justify-center">
                          <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = '<Building2 class="w-8 h-8 text-primary" />';
                              }
                            }}
                          />
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{experience.company}</h3>
                          <p className="text-lg text-primary font-medium">{experience.role}</p>
                        </div>
                      </div>
                      
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
