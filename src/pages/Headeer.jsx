import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        event.target instanceof Element &&
        !event.target.closest('.mobile-menu') &&
        !event.target.closest('.menu-button')
      ) {
        setIsMenuOpen(false);
      }
    };

    // Only add click listener when menu is open
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/', label: 'Beranda' },
    { href: '/materi', label: 'Materi' },
    { href: '/berita', label: 'Berita' },
    { href: '/tentang', label: 'Tentang Kami' }
  ];

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-white/90 backdrop-blur-sm shadow-md py-3'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-2 rounded-lg transform transition-all duration-300 group-hover:scale-110">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white transform transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              CyberEdu
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm sm:text-base text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 rounded-lg hover:bg-indigo-50 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
            <a
              href="/login"
              className="text-sm sm:text-base text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Masuk
            </a>
            <a
              href="/login"
              className="text-sm sm:text-base bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium"
            >
              Daftar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden menu-button p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-5 h-5">
              <Menu 
                className={`absolute inset-0 h-5 w-5 text-gray-700 transition-all duration-200 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                className={`absolute inset-0 h-5 w-5 text-gray-700 transition-all duration-200 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mobile-menu transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="py-4 border-t border-gray-200 space-y-3">
              <a
                href="/login"
                className="block px-4 py-3 text-center text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium border border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Masuk
              </a>
              <a
                href="/login"
                className="block px-4 py-3 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-md transition-all duration-300 font-medium mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Daftar
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;