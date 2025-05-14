import { useState, useEffect } from 'react';
import { Search, Clock, BookOpen, Tag, User, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';

// Data dummy untuk artikel cyber security
const cybersecurityArticles = [
  {
    id: 1,
    title: "Serangan Ransomware Terbaru Menargetkan Infrastruktur Kesehatan Global",
    summary: "Gelombang serangan ransomware baru telah melumpuhkan beberapa sistem rumah sakit dan fasilitas kesehatan di berbagai negara, menunjukkan peningkatan tren serangan siber terhadap sektor kesehatan.",
    author: "Dr. Cyber Security",
    date: "12 Mei 2025",
    category: "Threats & Attacks",
    readTime: "8 menit",
    image: "/api/placeholder/600/400",
    trending: true
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
    trending: true
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
    featured: true
  },
  {
    id: 4,
    title: "Regulasi Keamanan Siber Baru Diberlakukan di Uni Eropa",
    summary: "UE mengesahkan serangkaian peraturan keamanan siber komprehensif baru yang mewajibkan perusahaan untuk menerapkan standar keamanan yang lebih ketat dan melaporkan insiden dalam waktu 24 jam.",
    author: "Cyber Policy Analyst",
    date: "5 Mei 2025",
    category: "Regulations",
    readTime: "7 menit",
    image: "/api/placeholder/600/400"
  },
  {
    id: 5,
    title: "Ancaman Baru: Supply Chain Attack Menargetkan Perangkat Lunak Open Source",
    summary: "Para ahli keamanan mengidentifikasi pola serangan baru yang memasukkan kode berbahaya ke dalam dependensi perangkat lunak open source populer, mempengaruhi ribuan aplikasi downstream.",
    author: "Open Source Guardian",
    date: "2 Mei 2025",
    category: "Threats & Attacks",
    readTime: "9 menit",
    image: "/api/placeholder/600/400"
  },
  {
    id: 6,
    title: "Teknik Digital Forensics Terbaru untuk Menyelidiki Serangan Siber Lanjutan",
    summary: "Metode forensik digital baru dikembangkan untuk menganalisis serangan APT (Advanced Persistent Threat) yang semakin canggih dan dapat menghindari deteksi tradisional.",
    author: "Forensic Investigator",
    date: "28 April 2025",
    category: "Digital Forensics",
    readTime: "10 menit",
    image: "/api/placeholder/600/400"
  },
];

// Kategori dan tag untuk filter
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
  const [articles, setArticles] = useState(cybersecurityArticles);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Filter articles based on search and category
  useEffect(() => {
    let filteredArticles = cybersecurityArticles;
    
    if (searchTerm) {
      filteredArticles = filteredArticles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      filteredArticles = filteredArticles.filter(article => 
        article.category === selectedCategory
      );
    }
    
    setArticles(filteredArticles);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-500 p-2 rounded-full">
              <BookOpen size={24} />
            </div>
            <h1 className="text-2xl font-bold">CyberEdu Education bla</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200 font-medium">Home</a>
            <a href="#" className="hover:text-blue-200 font-medium">Articles</a>
            <a href="#" className="hover:text-blue-200 font-medium">Categories</a>
            <a href="#" className="hover:text-blue-200 font-medium">About</a>
            <a href="#" className="hover:text-blue-200 font-medium">Contact</a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-800 px-4 py-2">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-blue-200 py-2 border-b border-blue-700">Home</a>
              <a href="#" className="hover:text-blue-200 py-2 border-b border-blue-700">Articles</a>
              <a href="#" className="hover:text-blue-200 py-2 border-b border-blue-700">Categories</a>
              <a href="#" className="hover:text-blue-200 py-2 border-b border-blue-700">About</a>
              <a href="#" className="hover:text-blue-200 py-2">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Latest Cybersecurity News</h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100">Explore the latest trends, threats, and innovations in the cyber world</p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for articles, topics, or keywords..."
                className="w-full px-4 py-3 pl-12 rounded-lg text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
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
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                selectedCategory === "" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory("")}
            >
              All Categories
            </button>
            
            {categories.map(category => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
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

        {/* Featured Article */}
        {articles.find(article => article.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-yellow-400 p-1 rounded mr-2"></span>
              Featured Article
            </h2>
            
            {(() => {
              const featuredArticle = articles.find(article => article.featured);
              return featuredArticle ? (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
                        <button className="flex items-center text-blue-600 font-medium hover:text-blue-800">
                          Read more <ArrowRight size={16} className="ml-1" />
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
        {articles.some(article => article.trending) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-red-500 p-1 rounded mr-2"></span>
              Trending Now
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
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-blue-600 p-1 rounded mr-2"></span>
            Latest Articles
          </h2>
          
          {articles.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <button 
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                        <button className="text-blue-600 text-sm flex items-center hover:text-blue-800">
                          Read more <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Get the latest cybersecurity news and updates delivered straight to your inbox</p>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-lg"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-blue-500 p-2 rounded-full">
                  <BookOpen size={18} />
                </div>
                <h3 className="text-xl font-bold text-white">CyberEdu</h3>
              </div>
              <p className="mb-6">Your trusted source for the latest cybersecurity news, trends, and educational resources.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                {categories.slice(0, 5).map(category => (
                  <li key={category}>
                    <a href="#" className="hover:text-white">{category}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Articles</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li>info@cyberedu.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Cyber Street, Digital City</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} CyberEdu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}