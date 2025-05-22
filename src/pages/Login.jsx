import { useState } from 'react';
import { Shield, Lock, User, Eye, EyeOff, Mail, ArrowRight } from 'lucide-react';

export default function CyberSecurityAuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementasi logika login/signup di sini
    console.log(isLogin ? 'Login dengan:' : 'Signup dengan:', { email, password, fullName });
  };
  
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900">
      {/* Left side - Branding */}
      <div className="md:w-1/2 bg-gradient-to-br from-blue-900 to-blue-700 p-8 flex flex-col justify-center items-center text-center">
        <div className="mb-8">
          <Shield size={64} className="text-white mx-auto" />
          <h1 className="text-4xl font-bold text-white mt-6">CyberEdu</h1>
          <p className="text-blue-200 mt-4 text-xl">Platform Pembelajaran Keamanan Siber</p>
        </div>
        
        <div className="bg-blue-800/30 p-6 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-md">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            {isLogin ? "Selamat Datang Kembali!" : "Bergabunglah Dengan Kami"}
          </h2>
          <p className="text-blue-200">
            {isLogin 
              ? "Akses semua materi keamanan siber dan menjadi ahli dalam melindungi dunia digital."
              : ""}
          </p>
        </div>
      </div>
      
      {/* Right side - Auth form */}
      <div className="md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 inline-flex p-1 rounded-xl">
              <button 
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isLogin ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-200'}`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button 
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${!isLogin ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-200'}`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nama Lengkap</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-500" />
                  </div>
                  <input 
                    type="text" 
                    className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Masukkan nama lengkap"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-500" />
                </div>
                <input 
                  type="email" 
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-gray-500 hover:text-gray-300" />
                  ) : (
                    <Eye size={18} className="text-gray-500 hover:text-gray-300" />
                  )}
                </button>
              </div>
            </div>
            
            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                    Ingat saya
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                    Lupa password?
                  </a>
                </div>
              </div>
            )}
            
            <button
              onClick={handleSubmit}
              className="flex w-full justify-center items-center space-x-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              <span>{isLogin ? "Login" : "Daftar Sekarang"}</span>
              <ArrowRight size={16} />
            </button>
            
            {!isLogin && (
              <p className="mt-2 text-center text-sm text-gray-400">
                Dengan mendaftar, Anda menyetujui <a href="#" className="text-blue-400 hover:text-blue-300">Syarat & Ketentuan</a> dan <a href="#" className="text-blue-400 hover:text-blue-300">Kebijakan Privasi</a> kami.
              </p>
            )}
          </div>
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Atau lanjutkan dengan</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
              >
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>Google</span>
              </button>
              <button
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
              >
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span>Facebook</span>
              </button>
            </div>
            
            <p className="mt-6 text-center text-sm text-gray-400">
              {isLogin 
                ? "Belum punya akun? " 
                : "Sudah punya akun? "}
              <button 
                className="font-medium text-blue-400 hover:text-blue-300"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Daftar' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}