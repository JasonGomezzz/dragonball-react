import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Entities from './pages/Entities'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entities" element={<Entities />} />
      </Routes>
    </div>
  )
}

export default App