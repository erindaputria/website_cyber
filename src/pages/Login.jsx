import { useState, useEffect } from 'react'; 
import { Shield, Lock, User, Eye, EyeOff, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// API endpoints configuration
const API_CONFIG = {
  BASE_URL: 'https://667f-36-84-38-30.ngrok-free.app',
  LOGIN: '/login',
  REGISTER: '/register'
};

export default function Login({ onLoginSuccess  }) { 
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [full_name, setFullName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  

  useEffect(() => {
      console.log('Component mounted, isAuthenticated:', localStorage.getItem('authToken'));
  }, []);


  // Detect window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Icon sizes based on screen width
  const iconSize = windowWidth < 640 ? 16 : windowWidth < 1024 ? 18 : 20;
  const logoSize = windowWidth < 640 ? 48 : windowWidth < 1024 ? 56 : 64;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        }
      };

      if (isLogin) {
        const loginResponse = await axios.post(
          `${API_CONFIG.BASE_URL}${API_CONFIG.LOGIN}`,
          { email: email.trim(), password },
          config
        );
        console.log('Login response:', loginResponse.data); // <-- cek ini

        if (loginResponse.data.access_token) {
          localStorage.setItem('authToken', loginResponse.data.access_token);
          onLoginSuccess();
          console.log('Login berhasil, token disimpan, auth state akan di-update');
          navigate('/', { replace: true });
        }
      } else {
        const registerResponse = await axios.post(
          `${API_CONFIG.BASE_URL}${API_CONFIG.REGISTER}`,
          {
            full_name: full_name.trim(),
            email: email.trim(),
            password
          },
          config
        );

        if (registerResponse.data.success) {
          setIsLogin(true);
          setPassword('');
          setError('Registrasi berhasil! Silakan login.');
        }
      }
    } catch (err) {
      if (err.response?.status === 422) {
        const errors = err.response.data?.errors;
        setError(errors ? Object.values(errors).flat().join('\n') : 'Validasi gagal.');
      } else {
        setError(err.response?.data?.message || 'Terjadi kesalahan. Silakan coba lagi.');
      }
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 md:flex-row overflow-hidden">
      {/* Left side - Branding */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full p-4 bg-gradient-to-br from-blue-900 to-indigo-900 md:w-1/2 md:p-8 lg:p-12 flex flex-col justify-center items-center text-center"
      >
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="mb-4 md:mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              y: [0, -5, 5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 4 
            }}
          >
            <Shield size={logoSize} className="text-blue-400 mx-auto" />
          </motion.div>
          <motion.h1 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-white mt-3 md:text-3xl lg:text-4xl"
          >
            CyberEdu
          </motion.h1>
          <motion.p 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-200 mt-2 text-sm md:text-base lg:text-lg"
          >
            Platform Pembelajaran Keamanan Siber
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-blue-800/30 p-4 rounded-lg backdrop-blur-sm border border-blue-700/50 w-full max-w-md md:p-6"
        >
          <h2 className="text-lg font-semibold text-blue-300 mb-2 md:text-xl lg:text-2xl">
            {isLogin ? "Selamat Datang Kembali!" : "Bergabunglah Dengan Kami"}
          </h2>
          <p className="text-blue-200 text-xs md:text-sm lg:text-base">
            {isLogin 
              ? "Akses semua materi keamanan siber dan menjadi ahli dalam melindungi dunia digital."
              : "Mulai perjalanan Anda dalam dunia keamanan siber dan pelajari cara melindungi aset digital."}
          </p>
        </motion.div>
      </motion.div>
      
      {/* Right side - Auth form */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full p-4 sm:p-6 flex items-center justify-center md:w-1/2 lg:p-8"
      >
        <div className="w-full max-w-md">
          {/* Error message display */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 p-3 rounded-lg text-sm ${error.includes('successful') ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}
            >
              {error}
            </motion.div>
          )}
          
          <motion.div 
            className="flex justify-center mb-4 md:mb-6"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gray-800 inline-flex p-1 rounded-xl">
              <button 
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 sm:px-4 sm:py-2 md:text-sm ${isLogin ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-gray-200'}`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button 
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 sm:px-4 sm:py-2 md:text-sm ${!isLogin ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-gray-200'}`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>
          </motion.div>
          
          {/* Form container with scroll when needed */}
          <div className="min-h-64 sm:min-h-72 md:min-h-80 lg:min-h-96 flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5 flex-1">
              {/* Full Name Field - Animated when switching */}
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    key="fullname"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <label className="block text-xs font-medium text-gray-400 mb-1 sm:text-sm">Nama Lengkap</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={iconSize} className="text-gray-500" />
                      </div>
                      <input 
                        type="text" 
                        className="block w-full pl-9 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:py-2.5 lg:py-3"
                        placeholder="Masukkan nama lengkap"
                        value={full_name}
                        onChange={(e) => setFullName(e.target.value)}
                        required={!isLogin}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Email Field - Always visible */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-xs font-medium text-gray-400 mb-1 sm:text-sm">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={iconSize} className="text-gray-500" />
                  </div>
                  <input 
                    type="email" 
                    className="block w-full pl-9 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:py-2.5 lg:py-3"
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required              
                  />
                </div>
              </motion.div>
              
              {/* Password Field - Always visible */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-xs font-medium text-gray-400 mb-1 sm:text-sm">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={iconSize} className="text-gray-500" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"}
                    className="block w-full pl-9 pr-9 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:py-2.5 lg:py-3"
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                  <motion.button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? (
                      <EyeOff size={iconSize} className="text-gray-500 hover:text-gray-300" />
                    ) : (
                      <Eye size={iconSize} className="text-gray-500 hover:text-gray-300" />
                    )}
                  </motion.button>
                </div>
              </motion.div>
              
              {/* Remember me & Forgot password - Only in login mode */}
              <AnimatePresence mode="wait">
                {isLogin && (
                  <motion.div
                    key="remember"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          type="checkbox"
                          className="h-3 w-3 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500 sm:h-4 sm:w-4"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-400 sm:text-sm">
                          Ingat saya
                        </label>
                      </div>
                      <div className="text-xs sm:text-sm">
                        <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                          Lupa password?
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Terms text only in signup mode */}
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    key="terms"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-center text-xs text-gray-400 sm:text-sm">
                      Dengan mendaftar, Anda menyetujui <a href="#" className="text-blue-400 hover:text-blue-300">Syarat & Ketentuan</a> dan <a href="#" className="text-blue-400 hover:text-blue-300">Kebijakan Privasi</a> kami.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Submit Button */}
              <motion.button
                type="submit"
                className="flex w-full justify-center items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 sm:py-2.5 md:text-sm lg:py-3 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                disabled={loading}
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>{isLogin ? "Login" : "Daftar Sekarang"}</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight size={iconSize - 4} />
                    </motion.span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
          
          <motion.div 
            className="mt-4 sm:mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Atau lanjutkan dengan</span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              <motion.button
                type="button"
                className="flex w-full items-center justify-center gap-1 rounded-lg border border-gray-700 bg-gray-800 px-2 py-1.5 text-xs font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 sm:px-3 sm:py-2 md:text-sm md:gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>Google</span>
              </motion.button>
              <motion.button
                type="button"
                className="flex w-full items-center justify-center gap-1 rounded-lg border border-gray-700 bg-gray-800 px-2 py-1.5 text-xs font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 sm:px-3 sm:py-2 md:text-sm md:gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span>Facebook</span>
              </motion.button>
            </div>
            
            <p className="mt-4 text-center text-xs text-gray-400 sm:text-sm">
              {isLogin 
                ? "Belum punya akun? " 
                : "Sudah punya akun? "}
              <button 
                type="button"
                className="font-medium text-blue-400 hover:text-blue-300"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Daftar' : 'Login'}
              </button>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}