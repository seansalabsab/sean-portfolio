import { useEffect, useState } from "react"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [activeLink, setActiveLink] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark")
    setDarkMode(isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }

  const handleNavClick = (sectionRef, linkName, offset = 120) => {
    setActiveLink(linkName)
    setIsMobileMenuOpen(false)
    window.scrollToSection(sectionRef, offset)
  }

  return (
    <nav className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] lg:w-[95%] max-w-6xl z-50 px-2 sm:px-0">
      <div className="bg-white/20 dark:bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 dark:border-white/10 px-3 sm:px-5 py-2 sm:py-2.5 flex justify-between items-center shadow-2xl transition-colors duration-300">

        {/* Title */}
        <h1 className="text-xs sm:text-sm lg:text-lg font-bold text-black dark:text-white tracking-tight flex-shrink-0 truncate">
          {/* Mobile */}
          <span className="sm:hidden">Sean&apos;s Portfolio</span>

          {/* Desktop */}
          <span className="hidden sm:inline">Richard Sean Salabsab&apos;s Portfolio</span>
        </h1>
        {/* Links and Theme Toggle - Right Section */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
          {/* Links - Desktop */}
          <ul className="hidden md:flex gap-1 lg:gap-3 text-xs lg:text-sm font-medium">
            <li 
              onClick={() => handleNavClick(window.sectionRefs?.homeRef, "home")}
              className={`px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeLink === "home"
                  ? "bg-black/20 dark:bg-white/20 text-black dark:text-white"
                  : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
              }`}
            >
              Home
            </li>
            <li 
              onClick={() => handleNavClick(window.sectionRefs?.projectsRef, "projects")}
              className={`px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeLink === "projects"
                  ? "bg-black/20 dark:bg-white/20 text-black dark:text-white"
                  : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
              }`}
            >
              Projects
            </li>
            <li 
              onClick={() => handleNavClick(window.sectionRefs?.aboutRef, "about")}
              className={`px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeLink === "about"
                  ? "bg-black/20 dark:bg-white/20 text-black dark:text-white"
                  : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
              }`}
            >
              About
            </li>
            <li 
              onClick={() => handleNavClick(window.sectionRefs?.contactRef, "contact")}
              className={`px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeLink === "contact"
                  ? "bg-black/20 dark:bg-white/20 text-black dark:text-white"
                  : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
              }`}
            >
              Contact
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 text-black dark:text-white"
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 flex items-center justify-center text-lg sm:text-xl rounded-full bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 hover:scale-105 transition-all duration-300 flex-shrink-0"
            aria-label="Toggle theme"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 mt-3 mx-2 bg-white/20 dark:bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 scale-100' 
            : 'max-h-0 opacity-0 scale-95 pointer-events-none'
        }`}
        style={{
          transformOrigin: 'top center'
        }}
      >
        <ul className="flex flex-col gap-2 text-xs font-medium p-4">
          {[
            { ref: 'homeRef', name: 'home', label: 'Home' },
            { ref: 'projectsRef', name: 'projects', label: 'Projects' },
            { ref: 'aboutRef', name: 'about', label: 'About' },
            { ref: 'contactRef', name: 'contact', label: 'Contact' }
          ].map((item, index) => (
            <li 
              key={item.name}
              onClick={() => handleNavClick(window.sectionRefs?.[item.ref], item.name)}
              className={`px-3 py-2 rounded-lg cursor-pointer text-center transition-all duration-300 ease-out ${
                activeLink === item.name
                  ? "bg-black/20 dark:bg-white/20 text-black dark:text-white scale-105"
                  : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-white/10 active:scale-95"
              }`}
              style={{
                animation: isMobileMenuOpen 
                  ? `slideInBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s both`
                  : 'none'
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      
      <style jsx>{`
        @keyframes slideInBounce {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar