import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const link = 'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
  const active = 'bg-gray-800 text-white'
  const inactive = 'text-gray-400 hover:text-white hover:bg-gray-800/50'

  return (
    <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold text-lg tracking-tight flex items-center gap-2">
          <span className="text-blue-400">✦</span>
          Claude Guide
        </Link>
        <div className="flex gap-1">
          <Link to="/" className={`${link} ${pathname === '/' ? active : inactive}`}>Levels</Link>
          <Link to="/my-pages" className={`${link} ${pathname === '/my-pages' ? active : inactive}`}>My Pages</Link>
        </div>
      </div>
    </nav>
  )
}
