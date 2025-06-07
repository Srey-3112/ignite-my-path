
import { Calendar, MapPin, Building2, ArrowUpRight, Zap, Star } from 'lucide-react';

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
      highlight: "Most Recent",
      color: "from-blue-500 to-cyan-500"
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
      highlight: "Performance Focus",
      color: "from-purple-500 to-pink-500"
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
      highlight: "Academic Excellence",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-background/95 to-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-8">
            <Building2 className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Professional Journey</span>
            <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            My Professional
            <br />
            <span className="gradient-text">Experience</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transforming ideas into reality through innovative solutions and cutting-edge technology
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent transform md:-translate-x-1/2 hidden sm:block"></div>

          {/* Experience Items */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{
                  animation: `slide-up 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-1/2 border-4 border-background shadow-lg hidden sm:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Company Logo Section */}
                <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'} justify-center`}>
                  <div className="group relative">
                    {/* Highlight Badge */}
                    <div className={`absolute -top-4 -right-4 px-3 py-1 bg-gradient-to-r ${experience.color} text-white text-xs font-bold rounded-full shadow-lg z-10 transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                      {experience.highlight}
                    </div>
                    
                    {/* Logo Container with Enhanced Effects */}
                    <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110`}></div>
                      
                      {/* Main Logo Container */}
                      <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-3xl"></div>
                        <div className="relative w-full h-full flex items-center justify-center p-8">
                          <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className="max-w-full max-h-full object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300 group-hover:scale-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = '<Building2 class="w-16 h-16 lg:w-20 lg:h-20 text-blue-400" />';
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Details Section */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent"></div>
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${experience.color} opacity-10 rounded-bl-full`}></div>
                    
                    <div className="relative p-8 lg:p-10 space-y-6">
                      {/* Header */}
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {experience.company}
                          </h3>
                          <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                        </div>
                        <p className="text-lg lg:text-xl font-semibold text-blue-400 flex items-center gap-2">
                          {experience.role}
                          <Zap className="w-5 h-5 animate-pulse" />
                        </p>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 lg:gap-6">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <div className="p-2 bg-blue-500/20 rounded-xl">
                            <Calendar className="w-4 h-4 text-blue-400" />
                          </div>
                          <span className="font-medium text-sm lg:text-base">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <div className="p-2 bg-purple-500/20 rounded-xl">
                            <MapPin className="w-4 h-4 text-purple-400" />
                          </div>
                          <span className="font-medium text-sm lg:text-base">{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                        {experience.description}
                      </p>

                      {/* Achievements Grid */}
                      <div className="space-y-4">
                        <h4 className="text-white font-bold flex items-center gap-2 text-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          Key Achievements
                        </h4>
                        <div className="grid gap-3">
                          {experience.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-3 group/item">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                              <span className="text-muted-foreground group-hover/item:text-white transition-colors duration-300">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-4">
                        <h4 className="text-white font-bold flex items-center gap-2 text-lg">
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={tech}
                              className={`px-4 py-2 bg-gradient-to-r ${experience.color} bg-opacity-20 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium text-sm hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default`}
                              style={{animationDelay: `${i * 0.1}s`}}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20 md:mt-32">
          <div className="inline-flex items-center gap-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-16 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="w-16 h-px bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
