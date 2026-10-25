import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'

const AboutPage = lazy(() => import('./pages/AboutPage'))

function App() {
  return (
    <div className="relative w-full flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
