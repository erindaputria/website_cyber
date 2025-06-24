import { useState, useEffect } from 'react';
import { Shield, Book, Newspaper, MessageCircle, User, Lock, ChevronDown, Menu, X, Star, Users, Clock, ArrowRight, PlayCircle, Award } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Headeer from './Headeer';
import Footer from './Footer';

// Enhanced Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } }
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 60 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

// Enhanced News Component
const BeritaCyberIndonesia = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBeritaCyber = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Fallback data with better content
        setBerita([
          {
            id: 1,
            title: "Kominfo Tingkatkan Keamanan Cyber Nasional 2024",
            description: "Kementerian Kominfo meluncurkan program baru untuk meningkatkan keamanan siber di Indonesia dengan investasi Rp 500 miliar...",
            link: "/berita/1",
            thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
            category: "Kebijakan",
            date: "2 hari lalu"
          },
          {
            id: 2,
            title: "Serangan Ransomware Meningkat 40% di Asia Tenggara",
            description: "Laporan terbaru menunjukkan peningkatan drastis serangan ransomware yang menargetkan sektor perbankan dan kesehatan...",
            link: "/berita/2",
            thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
            category: "Ancaman",
            date: "1 minggu lalu"
          },
          {
            id: 3,
            title: "Indonesia Luncurkan Sertifikasi Cyber Security Nasional",
            description: "Program sertifikasi baru untuk meningkatkan kompetensi profesional keamanan siber di Indonesia...",
            link: "/berita/3",
            thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
            category: "Pendidikan",
            date: "3 hari lalu"
          },
          {
            id: 4,
            title: "AI dan Machine Learning dalam Deteksi Ancaman Cyber",
            description: "Implementasi teknologi AI terbaru untuk mendeteksi dan mencegah serangan siber secara real-time...",
            link: "/berita/4",
            thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
            category: "Teknologi",
            date: "5 hari lalu"
          }
        ]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBeritaCyber();
  }, []);

  const handleBeritaClick = (id) => {
    navigate(`/berita/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Berita Cyber Terkini
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Dapatkan informasi terbaru tentang perkembangan keamanan siber di Indonesia dan dunia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {berita.map((item) => (
          <div 
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => handleBeritaClick(item.id)}
          >
            <div className="relative overflow-hidden">
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <Clock className="h-4 w-4 mr-1" />
                {item.date}
              </div>
              <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group-hover:gap-2 transition-all duration-300">
                Baca Selengkapnya
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Component
const MainSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <main>
      {/* Enhanced Hero Section */}
      <section class="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white overflow-hidden">
        {/* <!-- Animated background elements --> */}
        <div class="absolute inset-0">
            <div class="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div class="absolute top-1/2 left-1/2 w-16 h-16 md:w-32 md:h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10 py-16 md:py-12 pt-24 md:pt-12">
            <div class="flex flex-col lg:flex-row items-center">
                <div class="lg:w-1/2 mb-8 lg:mb-0 text-center">
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                        Tingkatkan Pengetahuan 
                        <span class="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Keamanan Siber
                        </span>
                        Anda
                    </h1>
                    
                    <p class="text-base md:text-xl mb-8 text-gray-300 max-w-lg mx-auto leading-relaxed"> 
                        Pelajari keamanan siber dari ahli terpercaya. Dapatkan sertifikasi internasional 
                        dan bergabung dengan komunitas profesional cybersecurity.
                    </p>
                    
                    <div class="flex justify-center mb-8 lg:mb-12">
                        <button onClick={() => handleButtonClick('/materi')} class="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                            <i data-lucide="play-circle" class="h-4 w-4 md:h-5 md:w-5 mr-2"></i>
                            Mulai Belajar Gratis
                            <i data-lucide="arrow-right" class="h-4 w-4 md:h-5 md:w-5 ml-2 transition-transform group-hover:translate-x-1"></i>
                        </button>
                    </div>
                </div>
                
                <div class="lg:w-1/2 relative w-full max-w-md lg:max-w-none mx-auto">
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl md:rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop" 
                            alt="Ilustrasi Keamanan Siber" 
                            class="relative rounded-2xl md:rounded-3xl shadow-2xl transform -rotate-2 transition-transform duration-500 hover:rotate-0 w-full"
                        />
                    </div>
                    
                    {/* <!-- Kartu mengambang --> */}
                    <div class="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl cursor-pointer hover:shadow-2xl transition-all">
                        <div class="flex items-center space-x-2 md:space-x-3">
                            <div class="bg-green-500 rounded-full p-1.5 md:p-2">
                                <i data-lucide="shield" class="h-3 w-3 md:h-4 md:w-4 text-white"></i>
                            </div>
                            <div>
                                <div class="text-xs md:text-sm font-semibold text-gray-800">Berita Terkini</div>
                                <div class="text-xs text-gray-600">Dari CyberEdu</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl cursor-pointer hover:shadow-2xl transition-all">
                        <div class="flex items-center space-x-2 md:space-x-3">
                            <div class="bg-blue-500 rounded-full p-1.5 md:p-2">
                                <i data-lucide="award" class="h-3 w-3 md:h-4 md:w-4 text-white"></i>
                            </div>
                            <div>
                                <div class="text-xs md:text-sm font-semibold text-gray-800">Materi CyberEdu</div>
                                <div class="text-xs text-gray-600">Kuis Interaktif</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Enhanced Popular Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Materi Pembelajaran CyberEdu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Pilih materi pembelajaran yang sesuai dengan level dan kebutuhan Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
                level: "Pemula",
                levelColor: "bg-green-100 text-green-800",
                title: "Pengenalan Dasar Keamanan Digital Cyber",
                description: "Pelajari pengenalan cyber security, manajemen password yang aman, dan  virus/malware."
              },
              {
                id: 2,
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
                level: "Menengah",
                levelColor: "bg-yellow-100 text-yellow-800",
                title: "Teknik Enkripsi, Network Security, & Secure Coding",
                description: "Kuasai metode enkripsi data, network security, dan secure coding."
              },
              {
                id: 3,
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
                level: "Lanjut",
                levelColor: "bg-red-100 text-red-800",
                title: "Ethical Hacking & Penetration Testing",
                description: "Teknik hacking etis, SKIM, dan keamanan infrastruktur cloud computing.",
              }
            ].map((course) => (
              <div 
                key={course.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${course.levelColor} text-xs px-3 py-1 rounded-full font-medium`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">5.0</span>
                    </div>
                    <button 
                      className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleButtonClick(`/materi`);
                      }}
                    >
                      Mulai Belajar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => handleButtonClick('/materi')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
            >
              Lihat Semua Materi
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced News Section */}
      <section className="py-20 bg-gray-50">
        <BeritaCyberIndonesia />
        <div className="text-center mt-12">
          <button 
            onClick={() => handleButtonClick('/berita')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
          >
            Lihat Semua Berita
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Menjadi 
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Expert Cyber Security?
              </span>
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Bergabunglah dengan kami untuk mendapatkan akses ke materi pembelajaran dan forum diskusi keamanan siber.
            </p>
          
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button 
                onClick={() => handleButtonClick('/login')}
                className="group bg-gradient-to-r from-blue-400 to-purple-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Daftar Sekarang - Gratis
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
              <div 
                className="flex items-center transition-colors"
              >
                <Star className="h-4 w-4 mr-2 text-blue-400" />
                Berita Terkini
              </div>
              <div 
                className="flex items-center transition-colors"
              >
                <Book className="h-4 w-4 mr-2 text-blue-400" />
                Materi Pembelajaran
              </div>
              <div 
                className="flex items-center transition-colors"
              >
                <Users className="h-4 w-4 mr-2 text-blue-400" />
                Kuis Interaktif
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Main App Component
export default function Navbar({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');  // hapus token di localStorage
    setIsAuthenticated(false);              // update auth state di App.jsx
    navigate('/login', { replace: true });  // redirect ke halaman login
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Headeer />
      
      {/* Wrapper konten, beri padding supaya gak tertutup header */}
      <div className="flex-grow pt-16"> {/* misal pt-16 = padding-top sesuai tinggi header */}
        <div className="p-4 flex justify-end">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <Outlet />
      </div>
      
      <Footer />
    </div>

  );
}

// Export MainSection jika perlu diakses dari luar
export { MainSection };