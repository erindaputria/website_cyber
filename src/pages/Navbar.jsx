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

// Main Section Component
const MainSection = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Tingkatkan Pengetahuan Keamanan Cyber Anda</h1>
              <p className="text-lg mb-8">Pelajari cara melindungi diri dan organisasi Anda dari ancaman digital dengan materi dan komunitas terpercaya.</p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
                <a href="/materi" className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-md hover:bg-indigo-100 transition text-center justify-center">Mulai Belajar</a>
                <a href="/forum" className="px-6 py-3 border border-white rounded-md hover:bg-indigo-700 transition text-center">Gabung Forum</a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/src/assets/profil.jpg" alt="Cyber Security Illustration" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fitur Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <Book className="text-indigo-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Materi Komprehensif</h3>
              <p className="text-gray-600">Akses materi lengkap tentang keamanan cyber yang disusun oleh para ahli di bidangnya.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <Newspaper className="text-indigo-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Berita Terkini</h3>
              <p className="text-gray-600">Dapatkan informasi terbaru tentang ancaman keamanan dan perkembangan teknologi cyber security.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <MessageCircle className="text-indigo-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Forum Diskusi</h3>
              <p className="text-gray-600">Diskusikan topik keamanan cyber dengan komunitas dan dapatkan jawaban dari para ahli.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Materi Populer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src="/api/placeholder/400/200" alt="Pengenalan Keamanan Cyber" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Pemula</span>
                  <span className="text-gray-500 text-sm">10 Modul</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pengenalan Keamanan Cyber</h3>
                <p className="text-gray-600 mb-4">Pelajari dasar-dasar keamanan cyber dan bagaimana melindungi diri secara digital.</p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500">Mulai Belajar →</a>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src="/api/placeholder/400/200" alt="Keamanan Jaringan" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Menengah</span>
                  <span className="text-gray-500 text-sm">8 Modul</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Keamanan Jaringan</h3>
                <p className="text-gray-600 mb-4">Pelajari cara mengamankan jaringan dan melindungi data dari serangan berbahaya.</p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500">Mulai Belajar →</a>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src="/api/placeholder/400/200" alt="Etika Hacking" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Lanjutan</span>
                  <span className="text-gray-500 text-sm">12 Modul</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Etika Hacking</h3>
                <p className="text-gray-600 mb-4">Pelajari teknik ethical hacking untuk mengidentifikasi kerentanan sistem.</p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500">Mulai Belajar →</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="#" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 transition">Lihat Semua Materi</a>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Berita Terkini</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News Item 1 */}
            <div className="flex bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src="/api/placeholder/200/200" alt="News Image" className="w-32 h-32 object-cover" />
              <div className="p-4">
                <span className="text-gray-500 text-sm">14 Mei 2025</span>
                <h3 className="text-lg font-semibold mb-2">Tren Serangan Malware Terbaru yang Perlu Diwaspadai</h3>
                <p className="text-gray-600 line-clamp-2">Pelajari bagaimana melindungi diri dari varian malware terbaru yang menyerang berbagai sektor...</p>
                <a href="#" className="text-indigo-600 mt-2 inline-block hover:text-indigo-500">Baca selengkapnya</a>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="flex bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src="/api/placeholder/200/200" alt="News Image" className="w-32 h-32 object-cover" />
              <div className="p-4">
                <span className="text-gray-500 text-sm">10 Mei 2025</span>
                <h3 className="text-lg font-semibold mb-2">Kebijakan Keamanan Data Indonesia Diperbarui</h3>
                <p className="text-gray-600 line-clamp-2">Pemerintah resmi menetapkan kebijakan baru terkait perlindungan data pribadi warga negara...</p>
                <a href="#" className="text-indigo-600 mt-2 inline-block hover:text-indigo-500">Baca selengkapnya</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="#" className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition">Lihat Semua Berita</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Meningkatkan Keamanan Digital Anda?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Bergabunglah dengan ribuan pengguna yang telah meningkatkan pengetahuan keamanan cyber mereka bersama CyberEdu.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="#" className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-md hover:bg-indigo-100 transition">Daftar Sekarang</a>
            <a href="#" className="px-6 py-3 border border-white rounded-md hover:bg-indigo-600 transition">Pelajari Lebih Lanjut</a>
          </div>
        </div>
      </section>
    </main>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold text-white">CyberEdu</span>
            </div>
            <p className="mb-4">Platform edukasi keamanan cyber terkemuka di Indonesia. Belajar dari para ahli dan tingkatkan keamanan digital Anda.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
              <a href="#" className="hover:text-white transition"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a>
              <a href="#" className="hover:text-white transition"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Beranda</a></li>
              <li><a href="/materi" className="hover:text-white transition">Materi</a></li>
              <li><a href="/berita" className="hover:text-white transition">Berita</a></li>
              <li><a href="#" className="hover:text-white transition">Forum Diskusi</a></li>
              <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kategori Materi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Dasar Keamanan</a></li>
              <li><a href="#" className="hover:text-white transition">Keamanan Jaringan</a></li>
              <li><a href="#" className="hover:text-white transition">Keamanan Aplikasi Web</a></li>
              <li><a href="#" className="hover:text-white transition">Ethical Hacking</a></li>
              <li><a href="#" className="hover:text-white transition">Forensik Digital</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
            <ul className="space-y-2">
              <li>Email: info@cyberedu.id</li>
              <li>Telepon: +62 21 1234 5678</li>
              <li>Alamat: Jl. Cyber No. 123, Jakarta Selatan, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 CyberEdu. Hak Cipta Dilindungi.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-white transition">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// App Component
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
}