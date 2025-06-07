
import { Calendar, MapPin, Building2, ArrowRight, ExternalLink } from 'lucide-react';

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
      achievements: ["53% reduction in manual processing", "AI-powered script generation", "Automated testing platform"]
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
      achievements: ["2x faster app responsiveness", "Enhanced security implementation", "Streamlined CI/CD pipelines"]
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
      achievements: ["25% faster resolution times", "Enhanced security features", "User-friendly mobile interface"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-portfolio-dark via-portfolio-gray to-portfolio-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <Building2 className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building impactful solutions across diverse technologies and industries
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 md:space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="group relative"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Connecting Line */}
              {index !== experiences.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 bottom-0 w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent transform -translate-x-1/2 translate-y-full"></div>
              )}
              
              <div className={`flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                
                {/* Company Logo Side */}
                <div className="lg:w-2/5 flex justify-center lg:justify-start items-center">
                  <div className="relative group/logo">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                    
                    {/* Logo Container */}
                    <div className="relative w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="max-w-full max-h-full object-contain filter brightness-110 group-hover/logo:brightness-125 transition-all duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = '<Building2 class="w-20 h-20 xl:w-24 xl:h-24 text-blue-400" />';
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="lg:w-3/5">
                  <div className="glass-card p-8 lg:p-10 xl:p-12 rounded-3xl hover:bg-white/[0.08] transition-all duration-500 group-hover:scale-[1.02] relative overflow-hidden">
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-3xl"></div>
                    
                    <div className="relative z-10">
                      {/* Company & Role */}
                      <div className="mb-6">
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {experience.company}
                        </h3>
                        <p className="text-blue-400 font-semibold text-lg lg:text-xl flex items-center gap-2">
                          {experience.role}
                          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                        </p>
                      </div>

                      {/* Date and Location */}
                      <div className="flex flex-wrap gap-6 mb-8">
                        <div className="flex items-center gap-3 text-gray-300">
                          <div className="p-2 bg-blue-500/20 rounded-lg">
                            <Calendar className="w-4 h-4 text-blue-400" />
                          </div>
                          <span className="font-medium">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <div className="p-2 bg-purple-500/20 rounded-lg">
                            <MapPin className="w-4 h-4 text-purple-400" />
                          </div>
                          <span className="font-medium">{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-8 text-base lg:text-lg">
                        {experience.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-8">
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Key Achievements
                        </h4>
                        <div className="grid gap-3">
                          {experience.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                              <span className="text-sm lg:text-base">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl text-white/90 font-medium text-sm hover:bg-blue-500/30 hover:scale-105 transition-all duration-300 cursor-default"
                              style={{animationDelay: `${i * 0.1}s`}}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
