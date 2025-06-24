import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import Materi from './pages/Materi'
import Berita from './pages/Berita'
import Navbar, { MainSection } from './pages/Navbar'
import Kuis from './pages/Kuis'
import Tentang from './pages/Tentang'
import Forum from './pages/Forum'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('authToken');
  });

  useEffect(() => {
    console.log('isAuthenticated berubah:', isAuthenticated);
  }, [isAuthenticated]);


  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    };

    // Cek ulang saat halaman fokus (misalnya habis login)
    window.addEventListener('focus', checkToken);

    return () => {
      window.removeEventListener('focus', checkToken);
    };
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <Login onLoginSuccess={() => {
                const token = localStorage.getItem('authToken');
                console.log("onLoginSuccess dipanggil");
                setIsAuthenticated(!!token);
              }} />
            )
          }
        />

        {/* Protected routes with Navbar */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navbar setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          >
          <Route index element={<MainSection />} />
          <Route path="materi" element={<Materi />} />
          <Route path="berita" element={<Berita />} />
          <Route path="kuis" element={<Kuis />} />
          <Route path="tentang" element={<Tentang />} />
          <Route path="forum" element={<Forum />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
