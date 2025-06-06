
import { Calendar, MapPin, Building2 } from 'lucide-react';

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
      technologies: ["Selenium", "RPA", "Angular", "Machine Learning", "Python"]
    },
    {
      id: 2,
      company: "Tecrave",
      role: "Software Developer Intern",
      period: "Feb 2024 - May 2024",
      location: "Remote",
      description: "As a Software Developer Intern at Tecrave, I implemented robust user authentication using Django, optimized database performance with Django ORM, and developed high-performance RESTful APIs with automated CI/CD pipelines. These efforts significantly enhanced application security, doubled app responsiveness, and streamlined deployment processes.",
      logo: "/lovable-uploads/3a4892a4-269f-4a1a-ad27-bc10b2161a88.png",
      technologies: ["Django", "Python", "REST APIs", "CI/CD", "Database Optimization"]
    },
    {
      id: 3,
      company: "Gujarat Technological University",
      role: "Software Developer Intern",
      period: "Jan 2023 - Jun 2023",
      location: "Gujarat, India",
      description: "Implemented a Grievance Redressal system using ASP.NET and C#, reducing resolution times by 25%, and led the creation of a user-friendly Android app with enhanced security features at Gujarat Technological University.",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=100&h=100",
      technologies: ["ASP.NET", "C#", "Android", "Mobile Development", "Security"]
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-portfolio-gray to-portfolio-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Impactful contributions across diverse software development roles
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:space-x-8 xl:space-x-12`}
              >
                {/* Timeline Dot - Hidden on mobile */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-portfolio-dark z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-4 xl:pr-8' : 'lg:pl-4 xl:pl-8'
                  } animate-slide-up`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="glass-card p-6 md:p-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
                    {/* Mobile Logo */}
                    <div className="flex items-center space-x-4 mb-6 lg:hidden">
                      <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center overflow-hidden animate-pulse">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = '<Building2 class="w-8 h-8 text-blue-400" />';
                            }
                          }}
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-white">{experience.company}</h3>
                        <p className="text-blue-400 font-medium text-sm md:text-base">{experience.role}</p>
                      </div>
                    </div>

                    {/* Desktop Company Info */}
                    <div className="hidden lg:block text-left mb-6">
                      <h3 className="text-2xl xl:text-3xl font-bold text-white mb-2">{experience.company}</h3>
                      <p className="text-blue-400 font-medium text-lg">{experience.role}</p>
                    </div>

                    {/* Date and Location */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 mb-6 text-left">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm md:text-base">{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm md:text-base">{experience.location}</span>
                      </div>
                    </div>

                    {/* Description - Justified text */}
                    <p className="text-gray-300 leading-relaxed mb-6 text-justify text-sm md:text-base">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 text-left">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="tech-badge text-xs md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Logo Side - Desktop Only */}
                <div className={`hidden lg:flex w-5/12 ${
                  index % 2 === 0 ? 'justify-start pl-4 xl:pl-8' : 'justify-end pr-4 xl:pr-8'
                } items-center`}>
                  <div className="w-40 h-40 xl:w-48 xl:h-48 bg-white/5 rounded-3xl flex items-center justify-center p-8 glass-card hover:scale-110 hover:rotate-3 transition-all duration-500 animate-float shadow-xl hover:shadow-2xl hover:shadow-blue-500/20">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<Building2 class="w-16 h-16 xl:w-20 xl:h-20 text-blue-400" />';
                        }
                      }}
                    />
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
