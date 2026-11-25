import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import VideoPage from './pages/VideoPage'
import QuizPage from './pages/QuizPage'
import AboutPage from './pages/AboutPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default function App() {
  const { pathname } = useLocation()
  const isExplore = pathname === '/jelajah'

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jelajah" element={<ExplorePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/kuis" element={<QuizPage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isExplore && <Footer />}
    </div>
  )
}
