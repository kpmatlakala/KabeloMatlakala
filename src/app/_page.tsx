"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  ArrowRight,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Download,
  Code,
  Palette,
  Zap,
  Users,
  ChevronDown,
  ExternalLink,
  Play
} from "lucide-react";

export default function HomePage() {
  const [activeProject, setActiveProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [actualTheme, setActualTheme] = useState('light');

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution built with React and Node.js, featuring real-time inventory management and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      year: "2024",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live",
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "UI/UX Design",
      description: "Secure and intuitive mobile banking experience with biometric authentication and advanced financial tracking.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      year: "2023",
      tech: ["Figma", "React Native", "Firebase"],
      status: "In Progress",
      link: "#"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      category: "Data Visualization",
      description: "Real-time analytics dashboard providing comprehensive business insights with interactive data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      year: "2024",
      tech: ["D3.js", "Python", "PostgreSQL"],
      status: "Live",
      link: "#"
    },
    {
      id: 4,
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete brand identity package for tech startup including logo design, brand guidelines, and marketing materials.",
      image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&h=400&fit=crop",
      year: "2023",
      tech: ["Illustrator", "Photoshop", "Figma"],
      status: "Completed",
      link: "#"
    },
    {
      id: 5,
      title: "Task Management Tool",
      category: "Product Design",
      description: "Collaborative task management platform designed for remote teams with advanced project tracking capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      year: "2024",
      tech: ["Vue.js", "Laravel", "MySQL"],
      status: "Beta",
      link: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "Web Design",
      description: "Personal portfolio website featuring modern animations, responsive design, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      year: "2024",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      status: "Live",
      link: "#"
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 95, icon: Code },
    { name: "UI/UX Design", level: 90, icon: Palette },
    { name: "Backend Development", level: 85, icon: Zap },
    { name: "Project Management", level: 88, icon: Users },
  ];

  const workExperience = [
    {
      company: "Creative Minds, New York, USA",
      position: "Senior UX Designer",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Lead design initiatives for Fortune 500 clients, managing a team of 5 designers and driving user-centered design processes.",
      achievements: [
        "Increased user engagement by 40%",
        "Led 15+ successful projects",
        "Mentored junior designers"
      ],
    },
    {
      company: "Innovative Designs Inc, USA",
      position: "Product Designer",
      duration: "2020 - 2022",
      type: "Contract",
      description: "Designed user-centered digital products for startups and established companies, focusing on conversion optimization.",
      achievements: [
        "Launched 8 successful products",
        "95% client satisfaction rate",
        "Reduced design-to-dev handoff time by 60%"
      ],
    },
    {
      company: "Visionary Creations Ltd, UK",
      position: "UI Designer",
      duration: "2018 - 2020",
      type: "Full-time",
      description: "Crafted beautiful and functional user interfaces for web and mobile applications with focus on accessibility.",
      achievements: [
        "Designed 20+ web applications",
        "Improved user satisfaction by 35%",
        "Created design system adopted company-wide"
      ],
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616c99fd84c?w=60&h=60&fit=crop&crop=face",
      quote: "Exceptional work and attention to detail. The designs exceeded our expectations and user engagement increased significantly."
    },
    {
      name: "Michael Chen",
      role: "CEO at StartupXYZ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      quote: "Professional, creative, and always delivered on time. I highly recommend working with this talented designer."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      quote: "The brand identity work was outstanding. It perfectly captured our company's vision and values."
    }
  ];

  const services = [
    {
      title: "Web Design & Development",
      description: "Custom websites built with modern technologies and best practices for optimal performance and user experience.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "CMS Integration"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that drive engagement and conversions through research-backed design decisions.",
      features: ["User Research", "Wireframing & Prototyping", "Usability Testing", "Design Systems"]
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity packages that make your business stand out with memorable visual communication.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-[1px] bg-muted-foreground"></div>
                  <span className="text-sm tracking-wider font-montserrat">2020 → 2024</span>
                </div>
                <p className="text-lg text-muted-foreground font-montserrat">
                  Digital Designer & Developer
                </p>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-audiowide tracking-tight leading-none">
                Hello
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                I'm a passionate digital creator focused on crafting beautiful,
                functional experiences that solve real problems and delight users.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 hover:bg-muted-foreground transition-all duration-300">
                  <span className="font-medium">View My Work</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group flex items-center gap-3 border border-border px-8 py-4 hover:bg-accent transition-all duration-300">
                  <Download className="h-5 w-5" />
                  <span className="font-medium">Download CV</span>
                </button>
              </div>

              <div className="flex items-center gap-6 pt-8">
                <div className="flex gap-4">
                  {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
                    <button
                      key={index}
                      className="w-12 h-12 border border-border flex items-center justify-center hover:bg-accent hover:border-foreground transition-all duration-300"
                    >
                      <Icon className="h-5 w-5" />
                    </button>
                  ))}
                </div>
                <div className="h-8 w-[1px] bg-border"></div>
                <div className="text-sm text-muted-foreground">
                  <p>Available for freelance</p>
                  <p className="text-foreground font-medium">projects@designer.com</p>
                </div>
              </div>
            </div>

            <div
              className={`relative ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Background geometric shapes */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-32 h-32 border border-border rotate-45 opacity-20"></div>
                  <div className="absolute bottom-20 left-10 w-24 h-24 bg-muted rotate-12 opacity-30"></div>
                  <div className="absolute top-20 left-0 w-16 h-16 border border-border opacity-40"></div>
                </div>

                {/* Main profile image */}
                <div className="relative aspect-square bg-gradient-to-br from-muted to-accent rounded-2xl overflow-hidden border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />

                  {/* Overlay stats */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-background/90 backdrop-blur-sm border border-border rounded-lg p-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold">50+</p>
                          <p className="text-xs text-muted-foreground">Projects</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">5+</p>
                          <p className="text-xs text-muted-foreground">Years</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">30+</p>
                          <p className="text-xs text-muted-foreground">Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-sm">
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-6 bw-gradient-bg">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-4xl lg:text-5xl font-audiowide mb-8">About Me</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate digital designer and developer with over 5 years of experience
                    creating meaningful digital experiences. My journey began with a fascination for
                    how design can solve complex problems and create emotional connections.
                  </p>
                  <p>
                    I specialize in user-centered design, modern web development, and brand identity.
                    My approach combines strategic thinking with creative execution, always focusing
                    on delivering measurable results for my clients.
                  </p>
                  <p>
                    When I'm not designing or coding, you'll find me exploring new technologies,
                    reading about design philosophy, mentoring junior designers, or working on
                    personal creative projects.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold mb-8">Skills & Expertise</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <skill.icon className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-foreground h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* Stats */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-foreground text-background rounded-full mb-6">
                  <span className="text-2xl font-bold">5+</span>
                </div>
                <div className="text-6xl font-audiowide mb-4">120%</div>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  Average client satisfaction increase through strategic design solutions
                  and user-centered approach
                </p>
              </div>

              {/* Testimonials */}
              <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bw-card-hover border border-border rounded-lg p-6 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-audiowide mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing different skills and approaches
              to solving complex design challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
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
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Live' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      project.status === 'Beta' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
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
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 px-6 bw-gradient-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-audiowide mb-6">Professional Journey</h2>
            <p className="text-xl text-muted-foreground">
              A timeline of growth, learning, and creative evolution
            </p>
          </div>

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-border">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-foreground rounded-full"></div>
                
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{job.position}</h3>
                      <p className="text-lg text-muted-foreground mb-2">{job.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full mb-2">
                        {job.type}
                      </span>
                      <span className="text-sm text-muted-foreground">{job.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="text-sm text-muted-foreground flex items-center gap-1"
                      >
                        <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-audiowide mb-6">What I Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design and development services to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bw-card-hover border border-border rounded-lg p-8 text-center transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-foreground rounded opacity-60"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 bg-foreground rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bw-gradient-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-audiowide mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate to transform your ideas into stunning digital experiences
            that engage users and drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-foreground text-background px-8 py-4 rounded-lg font-medium hover:bg-muted-foreground transition-colors flex items-center gap-2 justify-center">
              <Mail className="h-5 w-5" />
              Get In Touch
            </button>
            <button className="border border-border px-8 py-4 rounded-lg font-medium hover:bg-accent transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-foreground text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Ready to bring your vision to life? I'm always excited to work on new projects
                and collaborate with passionate teams.
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span className="font-medium">hello@designer.com</span>
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end">
              <div className="flex gap-4 mb-6">
                {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors rounded-lg"
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
              <p className="text-primary-foreground/60 text-sm">
                © 2024 Designer Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}