import { useState } from 'react';
import { Shield, Book, Newspaper, MessageCircle, User, Lock, ChevronDown, Menu, X } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8" />
            <span className="text-xl font-bold">CyberEdu</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="hover:text-indigo-200 transition">Beranda</a>
            <a href="/materi" className="hover:text-indigo-200 transition">Materi</a>
            <a href="/berita" className="hover:text-indigo-200 transition">Berita</a>
            <a href="/forum" className="hover:text-indigo-200 transition">Forum Diskusi</a>
            <a href="#" className="hover:text-indigo-200 transition">Tentang Kami</a>
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="/login" className="px-4 py-2 border border-indigo-300 rounded-md hover:bg-indigo-600 transition">Masuk</a>
            <a href="/login" className="px-4 py-2 bg-indigo-500 rounded-md hover:bg-indigo-400 transition">Daftar</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="/beranda" className="block hover:bg-indigo-600 px-3 py-2 rounded-md">Beranda</a>
            <a href="/materi" className="block hover:bg-indigo-600 px-3 py-2 rounded-md">Materi</a>
            <a href="/berita" className="block hover:bg-indigo-600 px-3 py-2 rounded-md">Berita</a>
            <a href="/forum" className="block hover:bg-indigo-600 px-3 py-2 rounded-md">Forum Diskusi</a>
            <a href="#" className="block hover:bg-indigo-600 px-3 py-2 rounded-md">Tentang Kami</a>
            <div className="flex space-x-3 pt-3 border-t border-indigo-600">
              <a href="/login" className="px-4 py-2 border border-indigo-300 rounded-md hover:bg-indigo-600 transition w-full text-center">Masuk</a>
              <a href="/login" className="px-4 py-2 bg-indigo-500 rounded-md hover:bg-indigo-400 transition w-full text-center">Daftar</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
    </div>
  );
}