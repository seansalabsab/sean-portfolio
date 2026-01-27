import { BrowserRouter } from "react-router-dom"
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
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App