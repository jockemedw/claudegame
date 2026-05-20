import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Level from './pages/Level'
import MyPages from './pages/MyPages'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/level/:id" element={<Level />} />
            <Route path="/my-pages" element={<MyPages />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
