import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Materi from './pages/Materi'
import Berita from './pages/Berita'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar'
import Kuis from './pages/Kuis'
import Tentang from './pages/Tentang'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/materi" element={<Materi />} />
      <Route path="/berita" element={<Berita />} />
      <Route path="/kuis" element= {<Kuis />} />
      <Route path="/tentang" element={<Tentang />} />
    </Routes>
   </Router>
  )
}

export default App


