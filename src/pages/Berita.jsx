import { useState, useEffect } from 'react';
import { Search, Clock, BookOpen, Tag, User, ChevronRight, ArrowRight, Loader2, RefreshCw, AlertTriangle, Shield, Database, Cpu } from 'lucide-react';
import Headeer from './Headeer';
import Footer from './Footer';

const Header = () => (
  <header className="bg-blue-900/80 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md">
    <Headeer />
  </header>
);

// Enhanced API configuration with more sources
const API_SOURCES = [
  {
    name: "CNN Indonesia",
    baseUrl: "https://api-berita-indonesia.vercel.app",
    endpoints: ["/cnn/teknologi", "/cnn/ekonomi", "/cnn/nasional"]
  },
  {
    name: "Detik",
    baseUrl: "https://api-berita-indonesia.vercel.app", 
    endpoints: ["/detik/detikinet", "/detik/finance", "/detik/cyberlife"]
  },
  {
    name: "Kompas",
    baseUrl: "https://api-berita-indonesia.vercel.app",
    endpoints: ["/kompas/tekno", "/kompas/edukasi", "/kompas/tren"]
  },
  {
    name: "Antara",
    baseUrl: "https://api-berita-indonesia.vercel.app",
    endpoints: ["/antara/tekno", "/antara/ekonomi", "/antara/nasional"]
  },
  {
    name: "Kumparan",
    baseUrl: "https://api-berita-indonesia.vercel.app",
    endpoints: ["/kumparan/tech", "/kumparan/bisnis"]
  },
  {
    name: "Tempo",
    baseUrl: "https://api-berita-indonesia.vercel.app",
    endpoints: ["/tempo/tekno", "/tempo/bisnis"]
  },
  {
    name: "CNBC Indonesia",
    baseUrl: "https://api-berita-indonesia.vercel.app",
    endpoints: ["/cnbc/tech", "/cnbc/market"]
  }
];

// Enhanced cyber keywords for better filtering
const CYBER_KEYWORDS = [
  'cyber', 'siber', 'hacker', 'hack', 'keamanan', 'security', 'data', 'privasi', 'privacy',
  'peretasan', 'malware', 'virus', 'ransomware', 'phishing', 'breach', 'kebocoran',
  'enkripsi', 'firewall', 'antivirus', 'spam', 'scam', 'fraud', 'penipuan online',
  'digital forensik', 'penetration testing', 'vulnerability', 'exploit', 'botnet',
  'ddos', 'sql injection', 'xss', 'csrf', 'authentication', 'authorization',
  'biometric', 'two factor', '2fa', 'otp', 'ssl', 'tls', 'vpn', 'blockchain',
  'cryptocurrency', 'bitcoin', 'mining', 'wallet', 'exchange hack', 'defi',
  'artificial intelligence', 'machine learning', 'ai security', 'deepfake',
  'iot security', 'smart home', 'connected device', 'industrial control',
  'scada', 'critical infrastructure', 'power grid', 'water system',
  'kominfo', 'bssn', 'csirt', 'cert', 'iso 27001', 'gdpr', 'pci dss'
];

// Enhanced fetch function with timeout
const fetchWithTimeout = async (url, options = {}, timeout = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  const response = await fetch(url, {
    ...options,
    signal: controller.signal  
  });
  
  clearTimeout(id);
  return response;
};

// Fetch from multiple API sources with better error handling
const fetchFromMultipleSources = async () => {
  const allArticles = [];
  
  // Fetch from all endpoints in parallel
  const fetchPromises = API_SOURCES.flatMap(source => 
    source.endpoints.map(async endpoint => {
      try {
        const url = `${source.baseUrl}${endpoint}`;
        console.log(`Fetching from ${source.name} - ${endpoint}`);
        
        const response = await fetchWithTimeout(url);
        
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data?.posts) {
            return data.data.posts.map(article => ({
              ...article,
              source: source.name
            }));
          }
        }
      } catch (error) {
        console.warn(`Failed to fetch from ${source.name} - ${endpoint}:`, error);
        }
        return [];
      })
  );

  // Wait for all fetches to complete
  const results = await Promise.all(fetchPromises);
  return results.flat();
};

// Enhanced filtering function with keyword scoring
const filterCyberNews = (articles) => {
  return articles
    .map(article => {
      const title = (article.title || '').toLowerCase();
      const description = (article.description || '').toLowerCase();
      const content = `${title} ${description}`;
      
      // Calculate relevance score
      const score = CYBER_KEYWORDS.reduce((total, keyword) => {
        return total + (content.includes(keyword.toLowerCase()) ? 1 : 0);
      }, 0);
      
      return { ...article, score };
    })
    .filter(article => article.score > 0)
    .sort((a, b) => b.score - a.score); // Sort by relevance
};

// Enhanced article processing
const processArticles = (articles) => {
  return articles.map((article, index) => ({
    id: `${article.link}-${index}` || `article-${index}-${Date.now()}`,
    title: article.title || 'Judul tidak tersedia',
    summary: article.description || 'Deskripsi tidak tersedia. Klik untuk membaca selengkapnya.',
    author: article.creator || article.source || 'Tim Redaksi',
    date: article.pubDate ? new Date(article.pubDate).toLocaleDateString('id-ID') : new Date().toLocaleDateString('id-ID'),
    category: getEnhancedCategory(article.title || ''),
    readTime: `${Math.max(2, Math.floor((article.title?.length || 50) / 40))} menit`,
    image: article.thumbnail || article.image || getRandomPlaceholderImage(),
    url: article.link || '#',
    trending: index < 5,
    featured: index === 0,
    source: article.source || 'Unknown',
    score: article.score || 0
  }));
};

// Get random placeholder image
const getRandomPlaceholderImage = () => {
  const images = [
    "/placeholder/cyber1.jpg",
    "/placeholder/cyber2.jpg",
    "/placeholder/cyber3.jpg",
    "/placeholder/security1.jpg",
    "/placeholder/security2.jpg"
  ];
  return images[Math.floor(Math.random() * images.length)];
};

// Enhanced category determination
const getEnhancedCategory = (title) => {
  const lcTitle = title.toLowerCase();
  
  if (lcTitle.includes('hacker') || lcTitle.includes('serangan') || lcTitle.includes('attack') || lcTitle.includes('breach')) {
    return 'Serangan Siber';
  }
  if (lcTitle.includes('data') || lcTitle.includes('privasi') || lcTitle.includes('privacy') || lcTitle.includes('kebocoran')) {
    return 'Privasi Data';  
  }
  if (lcTitle.includes('ai') || lcTitle.includes('artificial') || lcTitle.includes('machine learning') || lcTitle.includes('deepfake')) {
    return 'AI & Keamanan';
  }
  if (lcTitle.includes('crypto') || lcTitle.includes('bitcoin') || lcTitle.includes('blockchain') || lcTitle.includes('defi')) {
    return 'Kripto & Blockchain';
  }
  if (lcTitle.includes('iot') || lcTitle.includes('smart') || lcTitle.includes('connected')) {
    return 'IoT Security';
  }
  if (lcTitle.includes('mobile') || lcTitle.includes('android') || lcTitle.includes('ios') || lcTitle.includes('app')) {
    return 'Mobile Security';
  }
  if (lcTitle.includes('cloud') || lcTitle.includes('aws') || lcTitle.includes('azure') || lcTitle.includes('google cloud')) {
    return 'Cloud Security';
  }
  
  return 'Keamanan Digital';
};

const categories = [
  "Serangan Siber", 
  "Privasi Data", 
  "AI & Keamanan", 
  "Kripto & Blockchain", 
  "IoT Security", 
  "Mobile Security",
  "Cloud Security",
  "Keamanan Digital"
];

// Enhanced fallback articles with more variety
const fallbackArticles = [
  // ... (keep existing fallback articles)
  // Add more fallback articles here
  {
    id: "fallback-7",
    title: "Serangan Ransomware Terbesar di Indonesia Tahun 2023",
    summary: "Perusahaan multinasional di Indonesia menjadi korban serangan ransomware yang mengakibatkan kerugian ratusan miliar rupiah.",
    author: "Cyber Security Indonesia",
    date: new Date().toLocaleDateString('id-ID'),
    category: "Serangan Siber",
    readTime: "5 menit",
    image: getRandomPlaceholderImage(),
    url: "#",
    trending: true,
    featured: false,
    source: "CyberSecurityID"
  },
  {
    id: "fallback-8",
    title: "Panduan Keamanan Aplikasi Mobile untuk Developer",
    summary: "BSI merilis panduan terbaru untuk mengamankan aplikasi mobile dari serangan siber yang semakin canggih.",
    author: "BSI Indonesia",
    date: new Date().toLocaleDateString('id-ID'),
    category: "Mobile Security",
    readTime: "6 menit",
    image: getRandomPlaceholderImage(),
    url: "#",
    trending: false,
    featured: false,
    source: "BSI"
  },
  // Add 10 more fallback articles...
];

export default function CyberEduPortal() {
  const [articles, setArticles] = useState(fallbackArticles);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [apiStatus, setApiStatus] = useState("fallback");
  const [page, setPage] = useState(1);
  const [articlesPerPage] = useState(12);

  const loadArticles = async () => {
    setLoading(true);
    setApiStatus("loading");
    
    try {
      console.log("Starting to fetch articles from multiple sources...");
      const allArticles = await fetchFromMultipleSources();
      
      if (allArticles.length > 0) {
        console.log(`Found ${allArticles.length} total articles`);
        const cyberArticles = filterCyberNews(allArticles);
        console.log(`Filtered to ${cyberArticles.length} cyber-related articles`);
        
        if (cyberArticles.length > 0) {
          const processedArticles = processArticles(cyberArticles);
          setArticles(processedArticles);
          setApiStatus("success");
          setLastUpdate(new Date());
          console.log("Successfully loaded API articles");
        } else {
          console.log("No cyber articles found, using fallback");
          setArticles(fallbackArticles);
          setApiStatus("no-cyber-news");
        }
      } else {
        console.log("No articles found from APIs, using fallback");
        setArticles(fallbackArticles);
        setApiStatus("api-failed");
      }
    } catch (error) {
      console.error('Error loading articles:', error);
      setArticles(fallbackArticles);
      setApiStatus("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    loadArticles(); 
  }, []);

  // Get current articles for pagination
  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchTerm === "" || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "" || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const indexOfLastArticle = page * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const paginate = (pageNumber) => setPage(pageNumber);

  const getStatusMessage = () => {
    switch(apiStatus) {
      case "loading": return "Memuat berita terbaru...";
      case "success": return `Berhasil memuat ${articles.length} berita cyber dari berbagai sumber`;
      case "no-cyber-news": return "Tidak ada berita cyber terbaru, menampilkan konten fallback";
      case "api-failed": return "API tidak dapat diakses, menampilkan berita fallback";
      case "error": return "Terjadi kesalahan, menampilkan berita fallback";
      default: return "Menampilkan berita cyber terbaru";
    }
  };

  const getStatusColor = () => {
    switch(apiStatus) {
      case "success": return "text-green-700 bg-green-50 border-green-200";
      case "loading": return "text-blue-700 bg-blue-50 border-blue-200";
      default: return "text-yellow-700 bg-yellow-50 border-yellow-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <div className="h-16"></div>
      
      {/* Enhanced Status Bar */}
      <div className={`border-b ${getStatusColor()}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <div className="text-sm">
              <div className="font-medium">{getStatusMessage()}</div>
              <div className="text-xs opacity-75">
                Update terakhir: {lastUpdate.toLocaleTimeString('id-ID')}
              </div>
            </div>
            <button
              onClick={loadArticles}
              disabled={loading}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm"
            >
              {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : <RefreshCw size={16} className="mr-2" />}
              {loading ? "Memuat..." : "Refresh Berita"}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Portal Berita Keamanan Siber Indonesia</h2>
          <p className="text-blue-100 mb-8 text-lg">Update terkini dunia cybersecurity, privasi data, dan teknologi keamanan digital</p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Cari berita cybersecurity, hacker, data breach..."
              className="w-full px-4 py-3 pl-12 rounded-lg text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Filter Kategori</h3>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === "" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => {
                setSelectedCategory("");
                setPage(1);
              }}
            >
              Semua ({articles.length})
            </button>
            {categories.map(cat => {
              const count = articles.filter(a => a.category === cat).length;
              return (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setPage(1);
                  }}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <p className="text-gray-600 mb-2 sm:mb-0">
            Menampilkan {filteredArticles.length} artikel
            {searchTerm && ` untuk "${searchTerm}"`}
            {selectedCategory && ` dalam kategori "${selectedCategory}"`}
          </p>
          
          {filteredArticles.length > articlesPerPage && (
            <div className="text-sm text-gray-600">
              Halaman {page} dari {totalPages}
            </div>
          )}
        </div>

        {/* Articles */}
        {currentArticles.length === 0 ? (
          <div className="text-center py-12">
            <AlertTriangle className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-500 mb-4">Tidak ada artikel yang ditemukan dengan filter saat ini</p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("");
                setPage(1);
              }}
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <nav className="inline-flex rounded-md shadow">
                  <button
                    onClick={() => paginate(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    &laquo; Prev
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (page <= 3) {
                      pageNum = i + 1;
                    } else if (page >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = page - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => paginate(pageNum)}
                        className={`px-3 py-1 border-t border-b border-gray-300 ${
                          page === pageNum 
                            ? "bg-blue-600 text-white border-blue-600" 
                            : "bg-white text-gray-500 hover:bg-gray-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => paginate(Math.min(totalPages, page + 1))}
                    disabled={page === totalPages}
                    className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next &raquo;
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

// Enhanced Article Card Component
const ArticleCard = ({ article }) => {
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Serangan Siber': return <AlertTriangle size={12} />;
      case 'Privasi Data': return <Database size={12} />;
      case 'AI & Keamanan': return <Cpu size={12} />;
      case 'Kripto & Blockchain': return <Shield size={12} />;
      case 'IoT Security': return <Cpu size={12} />;
      case 'Mobile Security': return <Shield size={12} />;
      case 'Cloud Security': return <Database size={12} />;
      default: return <Shield size={12} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="relative flex-shrink-0">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = getRandomPlaceholderImage();
          }}
        />
        {article.trending && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            TRENDING
          </div>
        )}
        {article.featured && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">
            FEATURED
          </div>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span className="bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1">
            {getCategoryIcon(article.category)}
            {article.category}
          </span>
          <span className="flex items-center">
            <Clock size={12} className="mr-1" /> {article.readTime}
          </span>
        </div>
        
        <h3 className="text-lg font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{article.summary}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <div className="text-xs text-gray-500">
            <div>{article.author}</div>
            <div>{article.date}</div>
          </div>
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center hover:bg-blue-700 transition-colors"
          >
            Baca <ChevronRight size={14} className="ml-1" />
          </a>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-400">Sumber: {article.source}</span>
          {article.score > 0 && (
            <span className="text-xs text-gray-400 ml-2">• Relevansi: {article.score}</span>
          )}
        </div>
      </div>
    </div>
  );
};