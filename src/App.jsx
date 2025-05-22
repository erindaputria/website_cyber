import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Materi from './pages/Materi'
import Berita from './pages/Berita'
import Forum from './pages/Forum'
import Quiz from './pages/Quiz'
import Dashboard from './pages/Navbar'
import Header from './pages/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/materi" element={<Materi />} />
    <Route path="/berita" element={<Berita />} />
    <Route path="/forum" element={<Forum />} />
    <Route path="/quiz" element={<Quiz />} />
    <Route path="/" element={<Dashboard />} />
      <Route path="/header" element={<Header />} />
    </Routes>
   </Router>
  )
}

export default App


