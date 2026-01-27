// App.jsx
import { HashRouter } from "react-router-dom"
import { useEffect, useState } from "react"
import MainLayout from "./layouts/Mainlayout"
import AppRoutes from "./routes/AppRoutes"
import LoadingScreen from "./components/LoadingScreen"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Minimum display time so it feels intentional
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <HashRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </HashRouter>
  )
}

export default App