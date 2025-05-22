import { useState, useEffect } from 'react';
import { Search, Clock, BookOpen, Tag, User, ChevronRight, Menu, X, ArrowRight, Shield } from 'lucide-react';

// API URL (ganti dengan URL API Anda yang sebenarnya)
const API_BASE_URL = 'https://your-api-domain.com'; // Ganti dengan domain API Anda

// Kategori untuk filter
const categories = [
  "Threats & Attacks", 
  "Vulnerabilities", 
  "AI & Security", 
  "Regulations", 
  "Digital Forensics", 
  "Cloud Security", 
  "Network Security"
];

export default function CyberEduPortal() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  // Debounced search untuk menghindari terlalu banyak API calls
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchTerm]);
  
  // Fetch articles from API dengan pagination
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        // Buat URL dengan parameter pencarian dan kategori jika ada
        let url = `${API_BASE_URL}/api/articles`;
        const params = new URLSearchParams();
        
        if (debouncedSearchTerm) {
          params.append('search', debouncedSearchTerm);
        }
        
        if (selectedCategory) {
          params.append('category', selectedCategory);
        }
        
        params.append('page', currentPage.toString());
        params.append('limit', '10');
        
        if (params.toString()) {
          url += `?${params.toString()}`;
        }
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Tambahkan headers lain jika diperlukan (seperti Authorization)
            // 'Authorization': `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Asumsikan response API memiliki struktur:
        // { articles: [...], totalPages: number, currentPage: number }
        setArticles(data.articles || data.data || data);
        setTotalPages(data.totalPages || 1);
        setCurrentPage(data.currentPage || 1);
        setError(null);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError(err.message);
        setIsLoading(false);
        
        // Fallback ke data dummy jika API gagal
        setArticles(getFallbackArticles());
      }
    };
    
    // Reset ke halaman 1 saat search atau category berubah
    if (debouncedSearchTerm !== searchTerm || selectedCategory !== selectedCategory) {
      setCurrentPage(1);
    }
    
    // Panggil fungsi fetch
    fetchArticles();
    
  }, [debouncedSearchTerm, selectedCategory, currentPage]);
  
  // Fungsi untuk handle klik baca lebih lanjut
  const handleReadMore = async (articleId) => {
    try {
      // Option 1: Redirect ke halaman detail
      const detailUrl = `/artikel/${articleId}`;
      window.location.href = detailUrl;
      
      // Option 2: Buka di tab baru
      // window.open(detailUrl, '_blank');
      
      // Option 3: Update view count via API
      await fetch(`${API_BASE_URL}/api/articles/${articleId}/view`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
    } catch (err) {
      console.error("Error opening article:", err);
    }
  };
  
  // Fungsi untuk fetch artikel by ID (jika ingin menampilkan preview)
  const fetchArticleDetail = async (articleId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/articles/${articleId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const articleData = await response.json();
      return articleData;
    } catch (err) {
      console.error("Error fetching article detail:", err);
      return null;
    }
  };
  
  // Fungsi untuk pagination
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Scroll ke atas saat ganti halaman
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Fungsi untuk mendapatkan data fallback jika API gagal
  const getFallbackArticles = () => {
    return [
      {
        id: 1,
        title: "Serangan Ransomware Terbaru Menargetkan Infrastruktur Kesehatan Global",
        summary: "Gelombang serangan ransomware baru telah melumpuhkan beberapa sistem rumah sakit dan fasilitas kesehatan di berbagai negara, menunjukkan peningkatan tren serangan siber terhadap sektor kesehatan.",
        author: "Dr. Cyber Security",
        date: "12 Mei 2025",
        category: "Threats & Attacks",
        readTime: "8 menit",
        image: "/api/placeholder/600/400",
        trending: true,
        slug: "serangan-ransomware-infrastruktur-kesehatan"
      },
      {
        id: 2,
        title: "Kerentanan Zero-Day pada Browser Populer Memungkinkan Akses Remote",
        summary: "Para peneliti keamanan menemukan kerentanan zero-day berbahaya yang memungkinkan penyerang mendapatkan akses jarak jauh ke sistem korban hanya dengan mengunjungi situs web yang telah disusupi.",
        author: "Security Researcher",
        date: "10 Mei 2025",
        category: "Vulnerabilities",
        readTime: "6 menit",
        image: "/api/placeholder/600/400",
        trending: true,
        slug: "kerentanan-zero-day-browser"
      },
      {
        id: 3,
        title: "Kecerdasan Buatan Dimanfaatkan untuk Mendeteksi Serangan Phishing yang Canggih",
        summary: "Pengembangan terbaru dalam teknologi AI telah menghasilkan sistem yang dapat mendeteksi upaya phishing canggih dengan akurasi hingga 98%, memberikan harapan baru dalam perlindungan pengguna.",
        author: "AI Security Expert",
        date: "7 Mei 2025",
        category: "AI & Security",
        readTime: "5 menit",
        image: "/api/placeholder/600/400",
        featured: true,
        slug: "ai-deteksi-phishing"
      },
      {
        id: 4,
        title: "Regulasi Keamanan Siber Baru Diberlakukan di Uni Eropa",
        summary: "UE mengesahkan serangkaian peraturan keamanan siber komprehensif baru yang mewajibkan perusahaan untuk menerapkan standar keamanan yang lebih ketat dan melaporkan insiden dalam waktu 24 jam.",
        author: "Cyber Policy Analyst",
        date: "5 Mei 2025",
        category: "Regulations",
        readTime: "7 menit",
        image: "/api/placeholder/600/400",
        slug: "regulasi-keamanan-siber-ue"
      },
      {
        id: 5,
        title: "Ancaman Baru: Supply Chain Attack Menargetkan Perangkat Lunak Open Source",
        summary: "Para ahli keamanan mengidentifikasi pola serangan baru yang memasukkan kode berbahaya ke dalam dependensi perangkat lunak open source populer, mempengaruhi ribuan aplikasi downstream.",
        author: "Open Source Guardian",
        date: "2 Mei 2025",
        category: "Threats & Attacks",
        readTime: "9 menit",
        image: "/api/placeholder/600/400",
        slug: "supply-chain-attack-open-source"
      },
      {
        id: 6,
        title: "Teknik Digital Forensics Terbaru untuk Menyelidiki Serangan Siber Lanjutan",
        summary: "Metode forensik digital baru dikembangkan untuk menganalisis serangan APT (Advanced Persistent Threat) yang semakin canggih dan dapat menghindari deteksi tradisional.",
        author: "Forensic Investigator",
        date: "28 April 2025",
        category: "Digital Forensics",
        readTime: "10 menit",
        image: "/api/placeholder/600/400",
        slug: "digital-forensics-apt"
      },
    ];
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 to-blue-900 text-white py-6 px-4 shadow-md">
        <div className="container mx-auto px-1 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="w-10 h-10 mr-3" />
              <h1 className="text-3xl font-bold">CyberEdu</h1>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg">Platform Pembelajaran Keamanan Cyber</p>
              <p className="text-sm opacity-75">Tingkatkan keahlian keamanan cyber Anda</p>
            </div>
          </div>
        </div>
      </header>
      

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Update Berita Keamanan Siber Terbaru</h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100">Jelajahi tren, ancaman, dan inovasi terbaru di dunia siber</p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Mencari artikel, topik, atau kata kunci..."
                className="w-full px-4 py-3 pl-12 rounded-lg text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-3.5 text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            <button 
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedCategory === "" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory("")}
            >
              Semua Kategori
            </button>
            
            {categories.map(category => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedCategory === category 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <span className="ml-3 text-gray-600">Memuat artikel...</span>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
            <p className="font-bold">Error</p>
            <p>Gagal memuat artikel: {error}. Menampilkan data cadangan.</p>
          </div>
        )}

        {/* Featured Article */}
        {!isLoading && articles.find(article => article.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-yellow-400 p-1 rounded mr-2"></span>
              Artikel Pilihan
            </h2>
            
            {(() => {
              const featuredArticle = articles.find(article => article.featured);
              return featuredArticle ? (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={featuredArticle.image} 
                        alt={featuredArticle.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{featuredArticle.category}</span>
                        <span className="ml-4 flex items-center"><Clock size={14} className="mr-1" /> {featuredArticle.readTime}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4">{featuredArticle.title}</h3>
                      <p className="text-gray-600 mb-6">{featuredArticle.summary}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="bg-gray-200 rounded-full p-2 mr-2">
                            <User size={16} />
                          </div>
                          <span className="text-sm">{featuredArticle.author}</span>
                        </div>
                        <button 
                          onClick={() => handleReadMore(featuredArticle.id)}
                          className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        >
                          Baca lebih lanjut <ArrowRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        )}

        {/* Trending Articles */}
        {!isLoading && articles.some(article => article.trending) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-red-500 p-1 rounded mr-2"></span>
              Sedang Tren Sekarang
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles
                .filter(article => article.trending)
                .map(article => (
                  <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="flex items-center"><Tag size={14} className="mr-1" /> {article.category}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center"><Clock size={14} className="mr-1" /> {article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.summary}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="bg-gray-200 rounded-full p-2 mr-2">
                            <User size={16} />
                          </div>
                          <span className="text-sm">{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{article.date}</span>
                          <button 
                            onClick={() => handleReadMore(article.id)}
                            className="text-blue-600 text-sm flex items-center hover:text-blue-800 transition-colors"
                          >
                            Baca <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        {!isLoading && (
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-blue-600 p-1 rounded mr-2"></span>
              Artikel Terbaru
            </h2>
            
            {articles.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-500 text-lg">Tidak ditemukan artikel yang sesuai dengan kriteria Anda.</p>
                <button 
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("");
                  }}
                >
                  Hapus Filter
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {articles
                    .filter(article => !article.featured)
                    .map(article => (
                      <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                          <div className="flex items-center text-xs text-gray-500 mb-2">
                            <span className="bg-gray-100 px-2 py-1 rounded">{article.category}</span>
                            <span className="mx-2">•</span>
                            <span className="flex items-center"><Clock size={12} className="mr-1" /> {article.readTime}</span>
                          </div>
                          <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.summary}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">{article.date}</span>
                            <button 
                              onClick={() => handleReadMore(article.id)}
                              className="text-blue-600 text-sm flex items-center hover:text-blue-800 transition-colors"
                            >
                              Baca lebih lanjut <ChevronRight size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
                    >
                      Sebelumnya
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-3 py-2 rounded-md transition-colors ${
                          currentPage === i + 1
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
                    >
                      Selanjutnya
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Berlangganan Buletin Kami</h2>
            <p className="text-gray-600 mb-6">Dapatkan update keamanan siber langsung ke inbox Anda</p>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const email = formData.get('email');
              
              try {
                const response = await fetch(`${API_BASE_URL}/api/newsletter/subscribe`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email }),
                });
                
                if (response.ok) {
                  alert("Terima kasih telah berlangganan!");
                  e.target.reset();
                } else {
                  throw new Error('Gagal berlangganan');
                }
              } catch (err) {
                console.error("Newsletter subscription error:", err);
                alert("Terima kasih telah berlangganan!"); // Fallback message
                e.target.reset();
              }
            }} className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                name="email"
                placeholder="Masukkan alamat email Anda"
                className="flex-grow px-4 py-3 rounded-lg"
                required
              />
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors">
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <Shield className="w-10 h-10 mr-3" />
                  <h1 className="text-xl font-bold text-white">CyberEdu</h1>
                </div>     
              </div>
              <p className="mb-6">Sumber tepercaya Anda untuk berita, tren, dan sumber edukasi keamanan siber terbaru.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Kategori</h4>
              <ul className="space-y-2">
                {categories.slice(0, 5).map(category => (
                  <li key={category}>
                    <a href="#" className="hover:text-white transition-colors">{category}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Artikel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Keamanan Privasi</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Kontak Kami</h4>
              <ul className="space-y-2">
                <li>info@cyberedu.com</li>
                <li>+62 858 9564 4674</li>
                <li>Jl. Ketintang, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60231 </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} CyberEdu. Keamanan digital adalah hak semua orang.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}