import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import DotGrid from "../components/DotGrid"
import Footer from "../components/Footer"

const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState("dark")

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    localStorage.setItem("theme", nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="relative min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors">
        {/* DotGrid background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <DotGrid
            dotSize={4}          // smaller = less paint cost
            gap={18}             // larger gap = fewer dots
            proximity={100}      // reduce interaction radius
            shockRadius={200}
            shockStrength={3}    // lower = smoother
            resistance={900}     // slower return = smoother motion
            returnDuration={2}   // stretch easing
          />
        </div>
        {/* Page content */}
        <main className="relative z-10 pt-20">
          {children}
        </main>

      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default MainLayout