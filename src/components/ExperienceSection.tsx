
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
      highlight: "Most Recent",
      impact: "High Performance"
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
      impact: "System Optimization"
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
      impact: "Innovation Leader"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Dynamic Background with Consistent Colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s'}}></div>
        
        {/* Curved Lines Background */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800" fill="none">
          <path d="M0,400 Q300,200 600,400 T1200,400" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-pulse"/>
          <path d="M0,200 Q400,100 800,300 T1200,200" stroke="hsl(var(--accent))" strokeWidth="1" className="animate-pulse" style={{animationDelay: '2s'}}/>
          <path d="M0,600 Q500,400 900,600 T1200,500" stroke="hsl(var(--secondary))" strokeWidth="1" className="animate-pulse" style={{animationDelay: '4s'}}/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20 md:mb-32">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-card backdrop-blur-sm rounded-full border border-border mb-12">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <Building2 className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold text-lg">Professional Journey</span>
            <Trophy className="w-5 h-5 text-accent animate-bounce" />
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
            Experience
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              That Matters
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Crafting digital excellence through innovative solutions and strategic thinking
          </p>
        </div>

        {/* Revolutionary Timeline Design */}
        <div className="relative">
          {/* Curved Timeline Path */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 hidden lg:block">
            <svg width="4" height="100%" className="h-full">
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0"/>
                  <stop offset="20%" stopColor="hsl(var(--primary))" stopOpacity="1"/>
                  <stop offset="80%" stopColor="hsl(var(--accent))" stopOpacity="1"/>
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <line x1="2" y1="0" x2="2" y2="100%" stroke="url(#timelineGradient)" strokeWidth="4"/>
            </svg>
          </div>

          {/* Experience Cards with Revolutionary Layout */}
          <div className="space-y-32 md:space-y-40">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative group ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                style={{
                  animation: `slide-up 1s ease-out ${index * 0.3}s both`
                }}
              >
                {/* Floating Timeline Node */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-ping opacity-30"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-bounce"></div>
                  </div>
                </div>

                <div className="lg:grid lg:grid-cols-12 lg:gap-16 space-y-12 lg:space-y-0">
                  {/* Logo Section - Alternating Sides */}
                  <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
                    <div className="group/logo relative">
                      {/* Highlight Badge */}
                      <div className="absolute -top-6 -right-6 z-10">
                        <div className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold rounded-full shadow-xl transform rotate-12 group-hover/logo:rotate-0 transition-all duration-500">
                          {experience.highlight}
                        </div>
                      </div>

                      {/* Impact Badge */}
                      <div className="absolute -bottom-6 -left-6 z-10">
                        <div className="px-4 py-2 bg-card border border-border text-card-foreground text-sm font-semibold rounded-full shadow-xl flex items-center gap-2">
                          <Target className="w-4 h-4 text-accent" />
                          {experience.impact}
                        </div>
                      </div>
                      
                      {/* Revolutionary Logo Container */}
                      <div className="relative w-72 h-72 xl:w-80 xl:h-80">
                        {/* Multi-layered Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-2xl group-hover/logo:blur-3xl transition-all duration-700 group-hover/logo:scale-125"></div>
                        <div className="absolute inset-4 bg-gradient-to-r from-accent/15 via-primary/15 to-accent/15 rounded-full blur-xl group-hover/logo:blur-2xl transition-all duration-700"></div>
                        
                        {/* Main Container with Glass Effect */}
                        <div className="relative w-full h-full bg-card/50 backdrop-blur-xl rounded-full border border-border group-hover/logo:border-primary/50 transition-all duration-700 group-hover/logo:scale-110 group-hover/logo:rotate-3 shadow-2xl overflow-hidden">
                          {/* Inner Glow Ring */}
                          <div className="absolute inset-2 rounded-full border-2 border-gradient-to-r from-primary/30 via-transparent to-accent/30 group-hover/logo:from-primary/50 group-hover/logo:to-accent/50 transition-all duration-700"></div>
                          
                          {/* Logo Display Area */}
                          <div className="relative w-full h-full flex items-center justify-center p-12">
                            <img
                              src={experience.logo}
                              alt={`${experience.company} logo`}
                              className="max-w-full max-h-full object-contain filter group-hover/logo:brightness-125 group-hover/logo:scale-110 transition-all duration-700"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = '<Building2 class="w-24 h-24 xl:w-28 xl:h-28 text-primary" />';
                                }
                              }}
                            />
                          </div>

                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-5 group-hover/logo:opacity-10 transition-opacity duration-700">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-accent rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group/content bg-card/30 backdrop-blur-xl rounded-3xl border border-border hover:border-primary/30 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
                      {/* Background Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50 group-hover/content:opacity-70 transition-opacity duration-700"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full"></div>
                      
                      <div className="relative p-8 lg:p-12 space-y-8">
                        {/* Header Section */}
                        <div className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-3xl lg:text-4xl font-bold text-foreground group-hover/content:text-primary transition-colors duration-500">
                              {experience.company}
                            </h3>
                            <div className="p-3 bg-primary/10 rounded-xl group-hover/content:bg-primary/20 group-hover/content:scale-110 transition-all duration-500">
                              <ArrowUpRight className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <p className="text-xl lg:text-2xl font-bold text-accent">
                              {experience.role}
                            </p>
                            <Zap className="w-6 h-6 text-accent animate-pulse" />
                          </div>
                        </div>

                        {/* Meta Information with Enhanced Design */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex items-center gap-4 p-4 bg-card/50 rounded-2xl border border-border">
                            <div className="p-3 bg-primary/20 rounded-xl">
                              <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Duration</p>
                              <p className="font-semibold text-foreground">{experience.period}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 p-4 bg-card/50 rounded-2xl border border-border">
                            <div className="p-3 bg-accent/20 rounded-xl">
                              <MapPin className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Location</p>
                              <p className="font-semibold text-foreground">{experience.location}</p>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="p-6 bg-card/30 rounded-2xl border border-border">
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {experience.description}
                          </p>
                        </div>

                        {/* Achievements Section */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                              <Star className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold text-foreground">Key Achievements</h4>
                          </div>
                          
                          <div className="grid gap-4">
                            {experience.achievements.map((achievement, i) => (
                              <div key={i} className="group/achievement flex items-start gap-4 p-4 bg-card/40 rounded-xl border border-border hover:border-primary/30 hover:bg-card/60 transition-all duration-300">
                                <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0 group-hover/achievement:scale-150 transition-transform duration-300"></div>
                                <span className="text-muted-foreground group-hover/achievement:text-foreground transition-colors duration-300 font-medium">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies Grid */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-accent/20 rounded-lg">
                              <Zap className="w-5 h-5 text-accent" />
                            </div>
                            <h4 className="text-xl font-bold text-foreground">Technologies</h4>
                          </div>
                          
                          <div className="flex flex-wrap gap-3">
                            {experience.technologies.map((tech, i) => (
                              <span
                                key={tech}
                                className="px-4 py-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-border rounded-xl text-foreground font-semibold hover:from-primary/20 hover:to-accent/20 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default"
                                style={{animationDelay: `${i * 0.1}s`}}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="text-center mt-24 md:mt-32">
          <div className="inline-flex items-center gap-6 p-6 bg-card/30 backdrop-blur-sm rounded-full border border-border">
            <div className="w-4 h-4 bg-primary rounded-full animate-bounce"></div>
            <div className="w-24 h-px bg-gradient-to-r from-primary via-accent to-primary"></div>
            <div className="w-4 h-4 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
            <div className="w-24 h-px bg-gradient-to-r from-accent via-primary to-accent"></div>
            <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
