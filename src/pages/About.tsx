
const About = () => {
  const skillsCount = 16;
  const skillsArray = Array.from({ length: skillsCount }, (_, index) => index);

  // Your actual skills with SVG icons
  const skills = [
    {
      name: "REACT+Vite",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <defs>
            <linearGradient id="reactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#61DAFB" />
              <stop offset="100%" stopColor="#00B5D8" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="#282C34" />
          <circle cx="12" cy="12" r="2.5" fill="url(#reactGradient)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="url(#reactGradient)" strokeWidth="0.8" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="url(#reactGradient)" strokeWidth="0.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="url(#reactGradient)" strokeWidth="0.8" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1" fill="#ffffff" />
        </svg>
      )
    },
    {
      name: "JavaScript",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <defs>
            <linearGradient id="jsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7DF1E" />
              <stop offset="100%" stopColor="#F0DB4F" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#000000" />
          <path d="M20 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2z" fill="url(#jsGradient)" />
          <path d="M12 17.5c.83 0 1.5-.67 1.5-1.5v-4h-2v4c0 .83.67 1.5 1.5 1.5z" fill="#000000" />
          <path d="M8 17.5A1.5 1.5 0 009.5 16v-4h-2v4A1.5 1.5 0 008 17.5z" fill="#000000" />
          <path d="M16 13.5c.83 0 1.5.67 1.5 1.5v1a1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5z" fill="#000000" />
        </svg>
      )
    },
    {
      name: "TypeScript",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <defs>
            <linearGradient id="tsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3178C6" />
              <stop offset="100%" stopColor="#2C6EBB" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="url(#tsGradient)" />
          <path d="M13.5 13.5v-2h-7v2h2v5h2v-5h3z" fill="white" />
          <path d="M20 11.5a2.5 2.5 0 01-2.5 2.5H16v4.5h-2V9h3.5a2.5 2.5 0 012.5 2.5z" fill="white" />
          <path d="M18 11.5c0-.28-.22-.5-.5-.5H16v3h1.5c.28 0 .5-.22.5-.5v-2z" fill="url(#tsGradient)" />
        </svg>
      )
    },
    {
      name: "WPF",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <defs>
            <linearGradient id="wpfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6D59E1" />
              <stop offset="100%" stopColor="#512BD4" />
            </linearGradient>
            <filter id="wpfShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3" />
            </filter>
          </defs>
          <rect x="2" y="3" width="20" height="18" rx="3" fill="url(#wpfGradient)" filter="url(#wpfShadow)" />
          <rect x="4" y="5" width="16" height="3" rx="1" fill="#ffffff" fillOpacity="0.9" />
          <rect x="4" y="10" width="10" height="2" rx="1" fill="#ffffff" fillOpacity="0.7" />
          <rect x="4" y="14" width="16" height="2" rx="1" fill="#ffffff" fillOpacity="0.7" />
          <rect x="4" y="18" width="8" height="1" rx="0.5" fill="#ffffff" fillOpacity="0.5" />
        </svg>
      )
    },
    {
      name: "MVVM",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <defs>
            <linearGradient id="mvvmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9B4F96" />
              <stop offset="100%" stopColor="#68217A" />
            </linearGradient>
            <filter id="mvvmShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodOpacity="0.3" />
            </filter>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#1E1E1E" />
          
          {/* Model */}
          <rect x="3" y="4" width="5" height="4" rx="1" fill="url(#mvvmGradient)" filter="url(#mvvmShadow)" />
          <text x="5.5" y="7" textAnchor="middle" fontSize="3" fontWeight="bold" fill="#fff">M</text>
          
          {/* View */}
          <rect x="9.5" y="4" width="5" height="4" rx="1" fill="url(#mvvmGradient)" filter="url(#mvvmShadow)" />
          <text x="12" y="7" textAnchor="middle" fontSize="3" fontWeight="bold" fill="#fff">V</text>
          
          {/* ViewModel */}
          <rect x="16" y="4" width="5" height="4" rx="1" fill="url(#mvvmGradient)" filter="url(#mvvmShadow)" />
          <text x="18.5" y="7" textAnchor="middle" fontSize="3" fontWeight="bold" fill="#fff">VM</text>
          
          {/* Connections */}
          <path d="M5.5 8 L5.5 12 L12 16 L18.5 12 L18.5 8" stroke="url(#mvvmGradient)" strokeWidth="0.7" fill="none" />
          <path d="M12 8 L12 16" stroke="url(#mvvmGradient)" strokeWidth="0.7" fill="none" />
          
          {/* Data Binding */}
          <circle cx="12" cy="12" r="2" fill="url(#mvvmGradient)" fillOpacity="0.7" />
          <circle cx="12" cy="12" r="1" fill="#1E1E1E" />
        </svg>
      )
    },
    { 
      name: "WinForms", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#0078D4" stroke="#fff" strokeWidth="1"/>
          <rect x="5" y="5" width="14" height="2" fill="#fff"/>
          <rect x="5" y="8" width="6" height="6" fill="#fff" opacity="0.8"/>
          <rect x="12" y="8" width="7" height="2" fill="#fff" opacity="0.6"/>
          <rect x="12" y="11" width="7" height="2" fill="#fff" opacity="0.6"/>
        </svg>
      )
    },
    { 
      name: "Avalonia", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <circle cx="12" cy="12" r="10" fill="#8B5CF6"/>
          <path d="M8 16L12 8L16 16H8Z" fill="#fff"/>
          <circle cx="12" cy="10" r="1.5" fill="#8B5CF6"/>
        </svg>
      )
    },
    { 
      name: "MAUI", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="4" y="2" width="16" height="20" rx="3" fill="#512BD4"/>
          <rect x="6" y="4" width="12" height="8" rx="1" fill="#fff"/>
          <circle cx="12" cy="16" r="1" fill="#fff"/>
          <rect x="10" y="18" width="4" height="1" rx="0.5" fill="#fff"/>
        </svg>
      )
    },
    { 
      name: "ASP.NET", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <circle cx="12" cy="12" r="10" fill="#512BD4"/>
          <path d="M7 8h10v8H7z" fill="#fff"/>
          <path d="M9 10h6M9 12h6M9 14h4" stroke="#512BD4" strokeWidth="1"/>
        </svg>
      )
    },
    { 
      name: "Web API", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="2" y="6" width="20" height="12" rx="2" fill="#FF6B35"/>
          <path d="M6 10h12M6 12h8M6 14h10" stroke="#fff" strokeWidth="1.5"/>
          <circle cx="18" cy="10" r="1" fill="#fff"/>
        </svg>
      )
    },
    { 
      name: "Entity Framework", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="3" y="4" width="18" height="16" rx="2" fill="#67B7DC"/>
          <rect x="5" y="6" width="4" height="3" fill="#fff"/>
          <rect x="10" y="6" width="4" height="3" fill="#fff"/>
          <rect x="15" y="6" width="4" height="3" fill="#fff"/>
          <rect x="5" y="11" width="4" height="3" fill="#fff"/>
          <rect x="10" y="11" width="4" height="3" fill="#fff"/>
          <rect x="15" y="11" width="4" height="3" fill="#fff"/>
          <rect x="5" y="16" width="4" height="2" fill="#fff"/>
          <rect x="10" y="16" width="4" height="2" fill="#fff"/>
        </svg>
      )
    },
    { 
      name: "SQL Server", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#CC2927"/>
          <path d="M7 8h10v2H7zM7 11h8v2H7zM7 14h10v2H7z" fill="#fff"/>
          <circle cx="18" cy="7" r="1" fill="#fff"/>
        </svg>
      )
    },
    { 
      name: "Dapper", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <circle cx="12" cy="12" r="10" fill="#FF8C00"/>
          <path d="M8 10L12 6L16 10L12 14Z" fill="#fff"/>
          <path d="M10 12L12 14L14 12" fill="#FF8C00"/>
        </svg>
      )
    },
    {
      name: "Git",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <defs>
            <linearGradient id="gitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F05133" />
              <stop offset="100%" stopColor="#D83A34" />
            </linearGradient>
            <filter id="gitShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodOpacity="0.3" />
            </filter>
          </defs>
          <circle cx="12" cy="12" r="10" fill="#FFFFFF" />
          <path d="M21.4 11.3l-8.7-8.7a1.3 1.3 0 0 0-1.8 0l-1.8 1.8 2.3 2.3a1.5 1.5 0 0 1 1.9 1.9l2.2 2.2a1.5 1.5 0 1 1-.9.9l-2-2v5.4a1.5 1.5 0 1 1-1.3-.1V8.7a1.5 1.5 0 0 1-.8-2l-2.2-2.2-5.8 5.8a1.3 1.3 0 0 0 0 1.8l8.7 8.7a1.3 1.3 0 0 0 1.8 0l8.7-8.7a1.3 1.3 0 0 0 0-1.8z"
            fill="url(#gitGradient)" filter="url(#gitShadow)" />
          <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
        </svg>
      )
    },
    { 
      name: "DevOps", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <circle cx="12" cy="12" r="10" fill="#0078D4"/>
          <path d="M8 12C8 8 12 8 12 8S16 8 16 12C16 16 12 16 12 16S8 16 8 12Z" fill="#fff"/>
          <circle cx="12" cy="12" r="2" fill="#0078D4"/>
        </svg>
      )
    },
    { 
      name: "Postman", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
          <path d="M12 6L18 12L12 18L6 12Z" fill="#fff"/>
          <path d="M12 9L15 12L12 15L9 12Z" fill="#FF6C37"/>
        </svg>
      )
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-300/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-6">
        {/* Skills Section */}
        <section className="max-w-7xl mx-auto mb-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 animate-gradient-x">
              Skills
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mt-4 rounded-full animate-pulse"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 justify-items-center">
            {skillsArray.map((_, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-3 p-3 w-28 h-32 sm:w-32 sm:h-36 flex flex-col items-center justify-center overflow-hidden animate-fade-in hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-700 dark:hover:to-slate-600"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" 
                     style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white dark:bg-slate-800 rounded-2xl"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <div className="mb-2 group-hover:scale-125 transition-all duration-500 filter drop-shadow-lg group-hover:drop-shadow-xl">
                    {skills[index]?.svg}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {skills[index]?.name || "Skill"}
                  </span>
                  <div className="w-full h-1 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2 rounded-full"></div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 dark:from-pink-400/20 dark:via-purple-400/20 dark:to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
            ))}
          </div>
        </section>

        {/* About Sections */}
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Card Template */}
            {[
              {
                title: "Schooling",
                icon: "🎓",
                gradient: "from-blue-500 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500",
                bg: "bg-blue-100 dark:bg-blue-900/30",
                text: "Completed BE Computer Science Engineering at Sri Shakthi Institute of Engineering and Technology (2018-2022). Strong foundation in programming, algorithms, and software development principles.",
                borderGradient: "from-blue-400 to-purple-500",
              },
              {
                title: "Experience",
                icon: "💼",
                gradient: "from-green-500 via-emerald-500 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-500",
                bg: "bg-green-100 dark:bg-green-900/30",
                text: "3+ years of professional experience as a Software Engineer at Lucid Imaging. Specialized in building scalable applications using .NET technologies, web development, and modern frameworks.",
                borderGradient: "from-green-400 to-teal-500",
              },
              {
                title: "Personal Details",
                icon: "👤",
                gradient: "from-pink-500 via-rose-500 to-red-600 dark:from-pink-400 dark:via-rose-400 dark:to-red-500",
                bg: "bg-pink-100 dark:bg-pink-900/30",
                text: "Located in Coimbatore, Tamil Nadu. Passionate about creating innovative solutions and staying updated with the latest technologies. Contact: +91 9486000198",
                borderGradient: "from-pink-400 to-red-500",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-slate-700/50 hover:border-transparent shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-2 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5 animate-gradient-x`}>
                  <div className="w-full h-full bg-white dark:bg-slate-800 rounded-3xl"></div>
                </div>

                {/* Top gradient bar */}
                <div className={`bg-gradient-to-r ${card.gradient} h-2 relative z-10`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
                
                <div className="p-8 text-center relative z-10">
                  {/* Icon container */}
                  <div className={`w-20 h-20 ${card.bg} border-4 border-white dark:border-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-full"></div>
                    <span className="text-3xl relative z-10 group-hover:scale-110 transition-transform duration-500">{card.icon}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 dark:group-hover:from-pink-400 dark:group-hover:to-blue-400 transition-all duration-500">
                    {card.title}
                  </h2>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                    {card.text}
                  </p>

                  {/* Bottom decoration */}
                  <div className={`w-0 group-hover:w-16 h-1 bg-gradient-to-r ${card.gradient} mx-auto mt-4 rounded-full transition-all duration-500`}></div>
                </div>

                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;