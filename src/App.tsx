  import "./App.css";
  import { Routes, Route, Link, useLocation } from "react-router-dom";
  import Home from "./pages/Home";
  import About from "./pages/About";
  import Contact from "./pages/Contact";

  const SwtichTabColor=
  {
    blue:"block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500",
    gray:"block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  }


  function App() {
    const location = useLocation();
    return (
      <div className="h-screen flex flex-col overflow-hidden">
          <nav className="bg-white border-gray-200 dark:bg-gray-900 flex-shrink-0 sticky top-0 z-50 shadow-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link
                to="/" onClick={()=>{ console.log(location.pathname)}}
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl shadow-lg">
                  <span className="transform -translate-y-0.5">SB</span>
                </div>
                <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white transition-all duration-300">
                  Sharuk Basheer
                </span>
              </Link>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-blue-600 transition-all duration-300 ease-in-out"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={() => {
                  const menu = document.getElementById('navbar-default');
                  menu?.classList.toggle('hidden');
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div
                className="hidden w-full md:block md:w-auto transition-all duration-300 ease-in-out"
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 shadow-md md:shadow-none">
                  <li onClick={()=>{ console.log(location.pathname)}} className="py-2 md:py-0">
                    <Link
                      className={`${location.pathname==="/" ? SwtichTabColor.blue : SwtichTabColor.gray} flex items-center transition-all duration-300 hover:scale-105`}
                      to="/"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      Home
                    </Link>
                  </li>
                  <li onClick={()=>{ console.log(location.pathname)}} className="py-2 md:py-0">
                    <Link
                      className={`${location.pathname==="/About" ? SwtichTabColor.blue : SwtichTabColor.gray} flex items-center transition-all duration-300 hover:scale-105`}
                      to="/About"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="7" r="4"></circle>
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      </svg>
                      About
                    </Link>
                  </li>
                  <li onClick={()=>{ console.log(location.pathname)}} className="py-2 md:py-0">
                    <Link
                      className={`${location.pathname==="/Contact" ? SwtichTabColor.blue : SwtichTabColor.gray} flex items-center transition-all duration-300 hover:scale-105`}
                      to="/Contact"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        
      </div>
    );
  }

  export default App;
  