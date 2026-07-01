import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
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