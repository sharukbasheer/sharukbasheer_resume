import { Link } from "react-router-dom";
import reacticon from "../assets/react.svg";
import dotnet from "../assets/dotnet.png";
import GitIcon from "../assets/GitIcon.png";
import database from "../assets/database.png";
import apiImage from "../assets/apiImage.png";
import azurelogo from "../assets/azurelogo.png";
import pic from "../assets/pic.jpeg";

const Home = () => {
  const techStack = [
    { icon: reacticon, name: "React", alt: "React" },
    { icon: dotnet, name: ".NET", alt: ".NET Core" },
    { icon: GitIcon, name: "Git", alt: "Git Version Control" },
    { icon: database, name: "Database", alt: "Database Management" },
    { icon: apiImage, name: "API", alt: "API Development" },
    { icon: azurelogo, name: "DevOps", alt: "Microsoft Azure" },
  ];

  return (
    <div className="relative h-full bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      {/* Bubble Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-300/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Text Section */}
            <div className="order-2 lg:order-1 space-y-2 lg:space-y-3">
              <div className="space-y-1">
                <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent leading-tight">
                  Hi, I am Sharuk
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  Software Engineer
                </h2>
              </div>
              <div className="space-y-1">
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  I am a passionate and results-driven software developer with over 3 years of experience specializing
                  in .NET technologies. My expertise spans across building robust Web APIs, dynamic desktop
                  applications, and modern web interfaces.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                  I have hands-on experience with frameworks like MAUI, Avalonia, WPF, and WinForms, enabling me to
                  craft cross-platform solutions. I'm also proficient in React, JavaScript, and TypeScript for
                  full-stack development.
                </p>
              </div>
              <div className="pt-3 flex gap-4">
                <Link to="/About" className="inline-block group">
                  <button className="flex items-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                    About Me
                    <svg
                      className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </Link>
                <a href="Sharuk_Basheer_Resume.pdf" download className="inline-block group">
                  <button className="flex items-center gap-3 bg-gradient-to-r from-red-500 to-blue-900 hover:from-red-600 hover:to-blue-900 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                    Download CV
                  </button>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 animate-pulse transition-opacity duration-500"></div>
                <div className="relative">
                  <img
                    src={pic}
                    className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    alt="Sharuk - Software Engineer Profile"
                  />
                  <div className="absolute inset-0 rounded-full border-0 border-gradient-to-r from-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack & Socials */}
        <div className="bg-white/50 pt-20 dark:bg-transparent backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 lg:py-4 h-full">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 h-full">
              {/* Tech Stack */}
              <div className="lg:col-span-2">
                <div className="text-center lg:text-left mb-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Technologies I Work With
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto lg:mx-0 rounded-full"></div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 lg:gap-3">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="group bg-white dark:bg-gray-800 p-3 lg:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                    >
                      <div className="relative">
                        <img
                          src={tech.icon}
                          alt={tech.alt}
                          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="lg:col-span-1">
                <div className="text-center lg:text-left mb-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Let's Connect
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto lg:mx-0 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  {/* GitHub */}

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/sharuk-basheer-056130232/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="group w-full flex items-center gap-3 bg-[#0A66C2] hover:bg-[#004182] text-white px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      <svg
                        className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.8-.8-1.8-1.7 0-1 .8-1.7 1.8-1.7s1.8.8 1.8 1.7c0 .9-.8 1.7-1.8 1.7zm13.5 10.3h-3v-4.7c0-1.1-.4-1.9-1.5-1.9-.8 0-1.3.5-1.5 1.1-.1.2-.1.5-.1.7v4.8h-3v-9h3v1.3c.4-.6 1.2-1.5 2.9-1.5 2.1 0 3.6 1.4 3.6 4.3v5.9z" />
                      </svg>
                      <span className="flex-1 text-left">LinkedIn</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </a>

                  {/* Gmail */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sharukbasheer01@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="group w-full flex items-center gap-3 bg-[#D14836] hover:bg-[#b43728] text-white px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      <svg
                        className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M502.3 190.8L327.4 338.1l-71.4 57.4-71.4-57.4L9.7 190.8A41.4 41.4 0 0 1 0 159.6V456c0 30.9 25.1 56 56 56h400c30.9 0 56-25.1 56-56V159.6c0-11.1-4.8-21.6-13.7-29.2zM256 294.1l237.5-191H18.5L256 294.1z" />
                      </svg>
                      <span className="flex-1 text-left">Gmail</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </a>

                  <a
                    href="https://github.com/sharukbasheer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="group w-full flex items-center gap-3 bg-[#24292F] hover:bg-[#1a1e23] text-white px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      <svg
                        className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.47v-1.63c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.93.68 1.88v2.79c0 .26.17.56.67.47A10.003 10.003 0 0 0 22 12c0-5.52-4.48-10-10-10Z"
                        />
                      </svg>
                      <span className="flex-1 text-left">GitHub</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;