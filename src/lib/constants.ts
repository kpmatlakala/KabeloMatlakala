// lib/constants.ts - Central data store
export const PORTFOLIO_DATA = {
  profile: {
    name: "Kabelo P. Matlakala",
    title: "Designer & Full-Stack Developer exploring data and AI",
    shortBio: "Digital Designer & Developer",
    bio: "I'm a junior software engineer and designer with over 5 years of combined experience in full-stack development and UI/UX. I thrive on solving complex problems, exploring emerging technologies, and crafting intuitive digital experiences. I'm especially passionate about thoughtful design, clean code, and building with tools like AI. Outside of work, I stay curious through side projects, collaboration, and continuous learning.",
    profileImage: "/uploads/profile1.png",
    bannerImage: "/uploads/banner1-enh.png",
    email: "matlakalakabelo1@gmail.com",
    phone: "+27 (72) 713 8367",
    location: "Polokwane, South Africa",
    stats: [
      { label: "Projects", value: "10+" },
      { label: "Years", value: "2+" },
      { label: "Clients", value: "5+" },
    ],
    socialLinks: [
      {
        platform: "github",
        url: "https://github.com/kpmatlakala",
        label: "GitHub",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        label: "LinkedIn",
      },
      // Uncomment and add more platforms as needed
      // { platform: "twitter", url: "https://twitter.com", label: "Twitter" },
      // { platform: "email", url: "mailto:matlakalakabelo1@gmail.com", label: "Email" }
    ],
  },

  skills: [
    {
      category: "Design",
      skills: [
        {
          name: "UI/UX Design",
          level: 90,
          tools: [
            "Figma",
            "Canva",
            "MS-PowerPoint",
            "CorelDRAW",
            "Photoshop",
            "Blender",
            "Unity",
          ],
        },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        {
          name: "Web Frontend",
          level: 95,
          tools: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "React Native",
            "Unity",
          ],
        },
        {
          name: "Desktop Frontend",
          level: 85,
          tools: ["Windows Forms (C#/.NET)", "Electron", "Unity"],
        },
      ],
    },
    {
      category: "Mobile Development",
      skills: [
        {
          name: "Mobile Development",
          level: 85,
          tools: [
            "Android Studio (Kotlin, Jetpack Compose)",
            "React Native",
            "Unity",
          ],
        },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        {
          name: "Backend",
          level: 85,
          tools: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "MySQL",
            "PostgreSQL",
            "PHP",
            "Python",
            "SQL",
            "SQL Server",
            "SSMS",
          ],
        },
      ],
    },
    {
      category: "Project Management",
      skills: [
        {
          name: "Project Management",
          level: 88,
          tools: [
            "Miro",
            "Trello",
            "Notion",
            "Slack",
            "Agile",
            "Scrum",
            "GitHub Copilot",
          ],
        },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        {
          name: "DevOps & Tools",
          level: 80,
          tools: [
            "Git",
            "GitHub",
            "Docker",
            "GitHub Actions",
            "Vercel",
            "Netlify",
            "Render",
          ],
        },
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "BSc in Mathematical Science",
      institution: "University of Limpopo",
      duration: "2016 – 2024",
      location: "Polokwane, South Africa",
      description: `Focused on Computer Science and Applied Mathematics. Gained strong foundations in algorithms, programming (C++, Java, Python), and full-stack web technologies.`,
    },
    {
      id: 2,
      course: "Software Development Learnership (Full-Stack)",
      institution: "mLab CodeTribe Academy",
      duration: "March 2024 – March 2025",
      location: "Polokwane, South Africa",
      description: `Built web and mobile apps using React, Node.js, and Express. Practiced Agile, REST API design, and version control with Git.`,
    },
    {
      id: 3,
      course: "AI for Software Engineering (Python)",
      institution: "Power Learn Project (PLP) Academy",
      duration: "-- July 2025",
      location: "Remote",
      description: `Covered Python, web tech, and databases before specializing in AI for Software Engineering. Built ML apps with scikit-learn, pandas, and Streamlit.`,
    },
  ],

  projects: [
    {
      id: 1,
      title: "Clock App",
      category: "Web Development",
      description:
        "Real-time clock app with geolocation, WebGL animation, and programming quotes. Includes fullscreen and embedded modes.",
      image:
        "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1740",
      year: "2024",
      tech: ["HTML", "CSS", "JavaScript", "WebGL", "React"],
      status: "Live",
      liveUrl: "/projects/clock-app",
      githubUrl: "https://github.com/DeLightPlus/clock-app",
      featured: true,
    },
    {
      id: 2,
      title: "Weather App",
      category: "Web Development",
      description:
        "A weather app using the OpenWeatherMap API with location-based forecasts and clean responsive UI.",
      image:
        "https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80",
      year: "2024",
      tech: ["React", "CSS", "OpenWeatherMap API"],
      status: "Live",
      liveUrl: "https://auroracast-weather.netlify.app/",
      githubUrl: "https://github.com/kpmatlakala/AuroraCast",
      featured: true,
    },
    {
      id: 3,
      title: "Frontend Mentor Challenges",
      category: "UI/UX Design",
      description:
        "A collection of frontend mini-projects with responsive layouts, CSS animations, and clean UI design.",
      image: "https://th.bing.com/th/id/OIP.IbDTC4_LJDzbVrj-stJIoQHaEK",
      year: "2025",
      tech: ["HTML", "CSS", "Javascript"],
      status: "Live",
      liveUrl:"https://kpm-frontendmentor.vercel.app/",
      githubUrl: "https://github.com/kpmatlakala/Frontend-Mentor",
      featured: true,
    },
    {
      id: 4,
      title: "Todo List App",
      category: "Productivity",
      description:
        "Task management app with local SQLite3 storage. Features filtering, editing, and persistent task tracking.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      year: "2024",
      tech: ["React", "SQLite3", "CSS"],
      status: "Completed",
      liveUrl: null,
      githubUrl: "https://github.com/DeLightPlus/todo-app",
      featured: false,
    },
    {
      id: 5,
      title: "Shopping List App",
      category: "Productivity",
      description:
        "Manage shopping items with Redux Toolkit and localStorage. Features add/edit/delete with persistent state.",
      image:
        "https://img.freepik.com/premium-photo/buy-vegetable-online-concept_121826-1377.jpg",
      year: "2024",
      tech: ["React", "Redux Toolkit", "CSS"],
      status: "Completed",
      liveUrl: null,
      githubUrl: "https://github.com/DeLightPlus/shopping-list",
      featured: false,
    },
    {
      id: 6,
      title: "Online Recipe App",
      category: "Web Development",
      description:
        "Recipe management tool using JSON Server. Supports CRUD operations and client-side persistence.",
      image:
        "https://img.freepik.com/premium-psd/close-up-person-preparing-family-recipes_23-2149292561.jpg",
      year: "2024",
      tech: ["React", "CSS", "JSON Server"],
      status: "Completed",
      liveUrl: null,
      githubUrl: "https://github.com/DeLightPlus/online-recipes",
      featured: false,
    },
    {
      id: 7,
      title: "Restaurant Reservation App",
      category: "Full-Stack Development",
      description:
        "MERN stack app for managing table reservations and orders. Includes Firebase for backend and Redux for state.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      year: "2024",
      tech: ["React", "Redux", "Node.js", "Firebase"],
      status: "In Progress",
      liveUrl: null,
      githubUrl: "https://github.com/DeLightPlus/restaurant-reservation",
      featured: true,
    },
    {
      id: 8,
      title: "Hotel Booking App",
      category: "Full-Stack Development",
      description:
        "Hotel booking system using React, Firebase, and Node.js. Supports user auth and room reservation.",
      image: "/assets/hotelapp_x_shots_so.png",
      year: "2024",
      tech: ["React", "Firebase", "Redux", "Node.js"],
      status: "Beta",
      liveUrl: null,
      githubUrl: "https://github.com/DeLightPlus/hotel-booking",
      featured: false,
    },
    {
      id: 9,
      title: "Travel Planner App",
      category: "Full-Stack Development",
      description:
        "Group project app for planning trips, managing itineraries and syncing travel tasks using Firebase backend.",
      image:
        "https://img.freepik.com/free-vector/real-time-weather-forecast-app_1051-392.jpg",
      year: "2024",
      tech: ["React", "Redux", "Node.js", "Firebase"],
      status: "Completed",
      liveUrl: null,
      githubUrl: "https://github.com/DeLightPlus/travel-planner",
      featured: false,
    },
    
    // {
    //   id: 10,
    //   title: "Web Portfolio Challenge",
    //   category: "Web Design",
    //   description:
    //     "Responsive personal portfolio site with interactive layout, animations, and modern navigation.",
    //   image: "/portfolio-challenge/screenshot/ui-challenge_shots.png",
    //   year: "2025",
    //   tech: ["HTML", "CSS", "JavaScript"],
    //   status: "Live",
    //   liveUrl:
    //     "https://delightplus-portfolio.vercel.app/portfolio-challenge/index.html",
    //   githubUrl: "https://github.com/DeLightPlus/portfolio-challenge",
    //   featured: true,
    // },
    // {
    //   id: 11,
    //   title: "Mini Games Collection",
    //   category: "Game Development",
    //   description:
    //     "Browser game collection including Tetris, Snake, and memory match — all built with vanilla JS.",
    //   image: "/mini-games/banner.jpg",
    //   year: "2025",
    //   tech: ["HTML", "CSS", "JavaScript"],
    //   status: "Live",
    //   liveUrl: "https://delightplus-portfolio.vercel.app/mini-games/index.html",
    //   githubUrl: "https://github.com/DeLightPlus/mini-games",
    //   featured: false,
    // },
  ],

  experience: [
    {
      id: 1,
      company: "University of Limpopo - ICT Department",
      location: "Polokwane, South Africa",
      position: "Computer Lab Student Assistant",
      duration: "July 2022 – December 2022",
      type: "Part-time / Academic",
      description:
        "Supported students in the computer lab with coursework, programming, and basic troubleshooting. Provided technical assistance for academic software and helped maintain lab functionality.",
      achievements: [
        "Assisted 100+ students with practical programming exercises",
        "Supported C++, Java, and Python debugging during labs",
        "Improved student performance by offering one-on-one help",
      ],
    },
    {
      id: 2,
      company: "mLab CodeTribe Academy",
      location: "Polokwane, South Africa",
      position: "Software Developer Trainee",
      duration: "March 2024 – March 2025",
      type: "Full-time Training / Learnership",
      description:
        "Participated in an intensive full-stack development program covering modern web technologies, database systems, and mobile development using Agile workflows.",
      achievements: [
        "Built multiple web and mobile apps using React, React Native, Node.js, and Firebase",
        "Collaborated on group projects and contributed to Git-based workflows",
        "Designed and implemented REST APIs and real-time features",
      ],
    },
    {
      id: 3,
      company: "Power Learn Project (PLP) Academy",
      location: "Remote",
      position: "AI Engineering Intern",
      duration: "July 2025",
      type: "Internship",
      description:
        "Specialized in AI development and machine learning applications using Python and open-source tools. Worked on a range of real-world datasets and built AI-powered web applications.",
      achievements: [
        "Developed ML projects including Iris Classification, MNIST Digit Recognition, NER, and Sentiment Analysis",
        "Created the 'AI Toolkit Mastery' and 'ML Sandbox' web apps using Streamlit",
        "Implemented EDA, time series forecasting, and regression modeling",
      ],
    },
    {
      id: 4,
      company: "Eskom Expo for Young Scientists",
      location: "Polokwane, South Africa",
      position: "Volunteer Mentor",
      duration: "2019",
      type: "Volunteer",
      description:
        "Guided high school students in preparing science and technology projects for competition. Supported research, presentation skills, and scientific method understanding.",
      achievements: [
        "Mentored 3+ student groups through research and prototyping",
        "Helped teams reach regional competition levels",
        "Encouraged interest in STEM among youth",
      ],
    },
    {
      id: 5,
      company: "Frontend Mentor (Freelance)",
      location: "Remote",
      position: "Frontend Developer",
      duration: "May 2025 – Present",
      type: "Freelance",
      description:
        "Built pixel-perfect frontend solutions based on real-world design briefs from Frontend Mentor. Focused on responsive layouts, accessibility, and semantic HTML.",
      achievements: [
        "Completed 10+ frontend challenges (Newbie to Advanced)",
        "Utilized HTML5, CSS3, and JavaScript with clean and reusable code",
        "Improved speed and performance across multiple deployed UIs",
        "Applied mobile-first and accessibility-first design principles",
      ],
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c99fd84c?w=60&h=60&fit=crop&crop=face",
      quote:
        "Exceptional work and attention to detail. The designs exceeded our expectations and user engagement increased significantly.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO at StartupXYZ",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      quote:
        "Professional, creative, and always delivered on time. I highly recommend working with this talented designer.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      quote:
        "The brand identity work was outstanding. It perfectly captured our company's vision and values.",
    },
  ],

  services: [
    {
      id: 1,
      title: "Web Design & Development",
      description:
        "Custom websites built with modern technologies and best practices for optimal performance and user experience.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Friendly",
        "CMS Integration",
      ],
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that drive engagement and conversions through research-backed design decisions.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Usability Testing",
        "Design Systems",
      ],
    },
    {
      id: 3,
      title: "Brand Identity",
      description:
        "Complete brand identity packages that make your business stand out with memorable visual communication.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Marketing Materials",
        "Brand Strategy",
      ],
    },
  ],
};
