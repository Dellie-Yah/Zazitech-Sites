import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'

// Layout Component
import Layout from './components/layout/Layout'

// Page Components
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import WebHosting from './pages/WebHosting'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Context
import { ThemeProvider } from './context/ThemeContext'

// ScrollToTop component for handling page transitions
function ScrollToTop() {
  const location = useLocation()
  
  useEffect(() => {
    // Only scroll to top if we're not navigating to contact from home
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary-500 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hosting" element={<WebHosting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App