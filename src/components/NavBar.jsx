import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const linkClass = (path) =>
    `px-4 py-2 rounded transition font-medium ${
      location.pathname === path
        ? 'bg-orange-500 text-white'
        : 'text-gray-300 hover:text-orange-400'
    }`

  return (
    <nav className="bg-gray-900 border-b border-orange-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-orange-400 font-bold text-xl">
          🐉 Dragon Ball Explorer
        </Link>
        <div className="flex gap-2">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/entities" className={linkClass('/entities')}>Entities</Link>
        </div>
      </div>
    </nav>
  )
}