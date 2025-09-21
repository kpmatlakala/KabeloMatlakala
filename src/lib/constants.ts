// lib/constants.ts - Central data store
export const PORTFOLIO_DATA = {
  profile: {
    name: "Kabelo P. Matlakala",
    title: "Designing and developing with 2+ years of experience, diving into data and AI.", 
    shortBio: "Digital Designer and Developer",
    bio: "I’m a problem-solver at heart, blending 5+ years of design and full-stack development experience to create memorable digital experiences. As a tech enthusiast, I’m always exploring new tools and challenges—whether it’s building a sleek UI, diving into data, or experimenting with AI. Outside of work, I’m all about learning, sharing, and tackling creative side projects.",
    profileImage: "/banner1-enh.png",
    bannerImage: "/banner1-enh.png",
    email: "matlakalakabelo1@gmail.com",
    phone: "+27 (72) 713 8367",
    location: "South Africa | Polokwane",
    stats: [
      { label: "Projects", value: "10+" },
      { label: "Years", value: "2+" },
      { label: "Clients", value: "5+" }
    ],
    socialLinks: [
      { platform: "github", url: "https://github.com/DeLightPlus", label: "GitHub" },
      { platform: "linkedin", url: "https://linkedin.com", label: "LinkedIn" },
      // { platform: "twitter", url: "https://twitter.com", label: "Twitter" },
      { platform: "email", url: "mailto:matlakalakabelo1@gmail.com", label: "Email" }
    ]
  },

  skills: [
    { name: "Frontend Development", level: 95, category: "Development" },
    { name: "UI/UX Design", level: 90, category: "Design" },
    { name: "Backend Development", level: 85, category: "Development" },
    { name: "Project Management", level: 88, category: "Management" }
  ],

  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution built with React and Node.js, featuring real-time inventory management and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      year: "2024",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
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
      liveUrl: null,
      githubUrl: "https://github.com/example",
      featured: true
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
      liveUrl: "https://example.com",
      githubUrl: null,
      featured: false
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
      liveUrl: "https://example.com",
      githubUrl: null,
      featured: false
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
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
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
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      company: "Creative Minds",
      location: "New York, USA",
      position: "Senior UX Designer", 
      duration: "2022 - Present",
      type: "Full-time",
      description: "Lead design initiatives for Fortune 500 clients, managing a team of 5 designers and driving user-centered design processes.",
      achievements: [
        "Increased user engagement by 40%",
        "Led 15+ successful projects",
        "Mentored junior designers"
      ]
    },
    {
      id: 2,
      company: "Innovative Designs Inc",
      location: "San Francisco, USA",
      position: "Product Designer",
      duration: "2020 - 2022", 
      type: "Contract",
      description: "Designed user-centered digital products for startups and established companies, focusing on conversion optimization.",
      achievements: [
        "Launched 8 successful products",
        "95% client satisfaction rate", 
        "Reduced design-to-dev handoff time by 60%"
      ]
    },
    {
      id: 3,
      company: "Visionary Creations Ltd",
      location: "London, UK",
      position: "UI Designer",
      duration: "2018 - 2020",
      type: "Full-time",
      description: "Crafted beautiful and functional user interfaces for web and mobile applications with focus on accessibility.",
      achievements: [
        "Designed 20+ web applications",
        "Improved user satisfaction by 35%",
        "Created design system adopted company-wide"
      ]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616c99fd84c?w=60&h=60&fit=crop&crop=face",
      quote: "Exceptional work and attention to detail. The designs exceeded our expectations and user engagement increased significantly."
    },
    {
      id: 2,
      name: "Michael Chen", 
      role: "CEO at StartupXYZ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      quote: "Professional, creative, and always delivered on time. I highly recommend working with this talented designer."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      quote: "The brand identity work was outstanding. It perfectly captured our company's vision and values."
    }
  ],

  services: [
    {
      id: 1,
      title: "Web Design & Development",
      description: "Custom websites built with modern technologies and best practices for optimal performance and user experience.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "CMS Integration"]
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "User-centered design solutions that drive engagement and conversions through research-backed design decisions.",
      features: ["User Research", "Wireframing & Prototyping", "Usability Testing", "Design Systems"]
    },
    {
      id: 3,
      title: "Brand Identity",
      description: "Complete brand identity packages that make your business stand out with memorable visual communication.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"]
    }
  ]
};