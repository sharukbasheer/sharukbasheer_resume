
const About = () => {
  const skillsCount = 16;
  const skillsArray = Array.from({ length: skillsCount }, (_, index) => index);

  // Your actual skills with SVG icons
  const skills = [
    { 
      name: "REACT+Vite", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <path d="M 210.483 73.824 a 171.49 171.49 0 0 0 -8.24 -2.597 c 0.465 -1.9 0.893 -3.777 1.273 -5.621 c 6.238 -30.281 2.16 -54.676 -11.769 -62.708 c -13.355 -7.7 -35.196 0.329 -57.254 19.526 a 171.23 171.23 0 0 0 -6.375 5.848 a 155.866 155.866 0 0 0 -4.241 -3.917 C 100.759 3.829 77.587 -4.822 63.673 3.233 C 50.33 10.957 46.379 33.89 51.995 62.588 a 170.974 170.974 0 0 0 1.892 8.48 c -3.28 0.932 -6.445 1.924 -9.474 2.98 C 17.309 83.498 0 98.307 0 113.668 c 0 15.865 18.582 31.778 46.812 41.427 a 145.52 145.52 0 0 0 6.921 2.165 a 167.467 167.467 0 0 0 -2.01 9.138 c -5.354 28.2 -1.173 50.591 12.134 58.266 c 13.744 7.926 36.812 -0.22 59.273 -19.855 a 145.567 145.567 0 0 0 5.342 -4.923 a 168.064 168.064 0 0 0 6.92 6.314 c 21.758 18.722 43.246 26.282 56.54 18.586 c 13.731 -7.949 18.194 -32.003 12.4 -61.268 a 145.016 145.016 0 0 0 -1.535 -6.842 c 1.62 -0.48 3.21 -0.974 4.76 -1.488 c 29.348 -9.723 48.443 -25.443 48.443 -41.52 c 0 -15.417 -17.868 -30.326 -45.517 -39.844 Z m -6.365 70.984 c -1.4 0.463 -2.836 0.91 -4.3 1.345 c -3.24 -10.257 -7.612 -21.163 -12.963 -32.432 c 5.106 -11 9.31 -21.767 12.459 -31.957 c 2.619 0.758 5.16 1.557 7.61 2.4 c 23.69 8.156 38.14 20.213 38.14 29.504 c 0 9.896 -15.606 22.743 -40.946 31.14 Z m -10.514 20.834 c 2.562 12.94 2.927 24.64 1.23 33.787 c -1.524 8.219 -4.59 13.698 -8.382 15.893 c -8.067 4.67 -25.32 -1.4 -43.927 -17.412 a 156.726 156.726 0 0 1 -6.437 -5.87 c 7.214 -7.889 14.423 -17.06 21.459 -27.246 c 12.376 -1.098 24.068 -2.894 34.671 -5.345 a 134.17 134.17 0 0 1 1.386 6.193 Z M 87.276 214.515 c -7.882 2.783 -14.16 2.863 -17.955 0.675 c -8.075 -4.657 -11.432 -22.636 -6.853 -46.752 a 156.923 156.923 0 0 1 1.869 -8.499 c 10.486 2.32 22.093 3.988 34.498 4.994 c 7.084 9.967 14.501 19.128 21.976 27.15 a 134.668 134.668 0 0 1 -4.877 4.492 c -9.933 8.682 -19.886 14.842 -28.658 17.94 Z M 50.35 144.747 c -12.483 -4.267 -22.792 -9.812 -29.858 -15.863 c -6.35 -5.437 -9.555 -10.836 -9.555 -15.216 c 0 -9.322 13.897 -21.212 37.076 -29.293 c 2.813 -0.98 5.757 -1.905 8.812 -2.773 c 3.204 10.42 7.406 21.315 12.477 32.332 c -5.137 11.18 -9.399 22.249 -12.634 32.792 a 134.718 134.718 0 0 1 -6.318 -1.979 Z m 12.378 -84.26 c -4.811 -24.587 -1.616 -43.134 6.425 -47.789 c 8.564 -4.958 27.502 2.111 47.463 19.835 a 144.318 144.318 0 0 1 3.841 3.545 c -7.438 7.987 -14.787 17.08 -21.808 26.988 c -12.04 1.116 -23.565 2.908 -34.161 5.309 a 160.342 160.342 0 0 1 -1.76 -7.887 Z m 110.427 27.268 a 347.8 347.8 0 0 0 -7.785 -12.803 c 8.168 1.033 15.994 2.404 23.343 4.08 c -2.206 7.072 -4.956 14.465 -8.193 22.045 a 381.151 381.151 0 0 0 -7.365 -13.322 Z m -45.032 -43.861 c 5.044 5.465 10.096 11.566 15.065 18.186 a 322.04 322.04 0 0 0 -30.257 -0.006 c 4.974 -6.559 10.069 -12.652 15.192 -18.18 Z M 82.802 87.83 a 323.167 323.167 0 0 0 -7.227 13.238 c -3.184 -7.553 -5.909 -14.98 -8.134 -22.152 c 7.304 -1.634 15.093 -2.97 23.209 -3.984 a 321.524 321.524 0 0 0 -7.848 12.897 Z m 8.081 65.352 c -8.385 -0.936 -16.291 -2.203 -23.593 -3.793 c 2.26 -7.3 5.045 -14.885 8.298 -22.6 a 321.187 321.187 0 0 0 7.257 13.246 c 2.594 4.48 5.28 8.868 8.038 13.147 Z m 37.542 31.03 c -5.184 -5.592 -10.354 -11.779 -15.403 -18.433 c 4.902 0.192 9.899 0.29 14.978 0.29 c 5.218 0 10.376 -0.117 15.453 -0.343 c -4.985 6.774 -10.018 12.97 -15.028 18.486 Z m 52.198 -57.817 c 3.422 7.8 6.306 15.345 8.596 22.52 c -7.422 1.694 -15.436 3.058 -23.88 4.071 a 382.417 382.417 0 0 0 7.859 -13.026 a 347.403 347.403 0 0 0 7.425 -13.565 Z m -16.898 8.101 a 358.557 358.557 0 0 1 -12.281 19.815 a 329.4 329.4 0 0 1 -23.444 0.823 c -7.967 0 -15.716 -0.248 -23.178 -0.732 a 310.202 310.202 0 0 1 -12.513 -19.846 h 0.001 a 307.41 307.41 0 0 1 -10.923 -20.627 a 310.278 310.278 0 0 1 10.89 -20.637 l -0.001 0.001 a 307.318 307.318 0 0 1 12.413 -19.761 c 7.613 -0.576 15.42 -0.876 23.31 -0.876 H 128 c 7.926 0 15.743 0.303 23.354 0.883 a 329.357 329.357 0 0 1 12.335 19.695 a 358.489 358.489 0 0 1 11.036 20.54 a 329.472 329.472 0 0 1 -11 20.722 Z m 22.56 -122.124 c 8.572 4.944 11.906 24.881 6.52 51.026 c -0.344 1.668 -0.73 3.367 -1.15 5.09 c -10.622 -2.452 -22.155 -4.275 -34.23 -5.408 c -7.034 -10.017 -14.323 -19.124 -21.64 -27.008 a 160.789 160.789 0 0 1 5.888 -5.4 c 18.9 -16.447 36.564 -22.941 44.612 -18.3 Z M 128 90.808 c 12.625 0 22.86 10.235 22.86 22.86 s -10.235 22.86 -22.86 22.86 s -22.86 -10.235 -22.86 -22.86 s 10.235 -22.86 22.86 -22.86 Z" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
        </svg>
      )
    },
    { 
      name: "JavaScript", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E"/>
          <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#000">JS</text>
        </svg>
      )
    },
    { 
      name: "TypeScript", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6"/>
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">TS</text>
        </svg>
      )
    },
    { 
      name: "WPF", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="3" y="4" width="18" height="16" rx="2" fill="#512BD4" stroke="#fff" strokeWidth="1"/>
          <rect x="5" y="6" width="14" height="2" fill="#fff"/>
          <rect x="5" y="9" width="8" height="1" fill="#fff"/>
          <rect x="5" y="11" width="10" height="1" fill="#fff"/>
          <rect x="5" y="13" width="6" height="1" fill="#fff"/>
        </svg>
      )
    },
    { 
      name: "MVVM", 
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="2" y="4" width="6" height="4" rx="1" fill="#68217A" stroke="#fff"/>
          <rect x="9" y="4" width="6" height="4" rx="1" fill="#68217A" stroke="#fff"/>
          <rect x="16" y="4" width="6" height="4" rx="1" fill="#68217A" stroke="#fff"/>
          <path d="M5 8 L12 12 L19 8" stroke="#68217A" strokeWidth="2" fill="none"/>
          <rect x="9" y="14" width="6" height="4" rx="1" fill="#68217A" stroke="#fff"/>
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
          <path d="M21.62 11.108l-8.731-8.729a1.292 1.292 0 0 0-1.828 0L9.257 4.184l2.319 2.319a1.539 1.539 0 0 1 1.639 1.639l2.236 2.236a1.539 1.539 0 1 1-.821.82l-2.086-2.086v5.487a1.539 1.539 0 1 1-1.231-.123V8.841a1.539 1.539 0 0 1-.834-2.02L7.967 4.309 2.38 9.896a1.292 1.292 0 0 0 0 1.828l8.731 8.729a1.292 1.292 0 0 0 1.828 0l8.681-8.681a1.292 1.292 0 0 0 0-1.828" fill="#F05032"/>
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