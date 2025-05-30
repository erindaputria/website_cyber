import { useState, useEffect } from 'react';
import { Search, Clock, BookOpen, Tag, User, ChevronRight, ArrowRight, Loader2, RefreshCw, AlertTriangle, Shield, Database, Cpu } from 'lucide-react';
import Headeer from './Headeer';
import Footer from './Footer';

const Header = () => (
  <Headeer />
);

// Enhanced API configuration with multiple sources
const API_SOURCES = [
  {
    name: "CNN Indonesia",
    baseUrl: "https://api-berita-indonesia.vercel.app",
    endpoint: "/cnn/teknologi"
  },
  {
    name: "Detik",
    baseUrl: "https://api-berita-indonesia.vercel.app", 
    endpoint: "/detik/detikinet"
  },
  {
    name: "Kompas",
    baseUrl: "https://api-berita-indonesia.vercel.app",
    endpoint: "/kompas/tekno"
  },
  {
    name: "Antara",
    baseUrl: "https://api-berita-indonesia.vercel.app",
    endpoint: "/antara/tekno"
  },
  {
    name: "BSSN",
    baseUrl: "https://api-berita-indonesia.vercel.app",
    endpoint: "/kompas/tekno"
  },
  {
    name: "Kominfo",
    baseUrl: "https://api-berita-indonesia.vercel.app",
    endpoint: "/kompas/tekno"
  },
  {
    name: "CyberNews",
    baseUrl: "https://api-berita-indonesia.vercel.app",
    endpoint: "/cnn/teknologi"
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

// Fetch from multiple API sources
const fetchFromMultipleSources = async () => {
  const allArticles = [];
  
  for (const source of API_SOURCES) {
    try {
      console.log(`Fetching from ${source.name}...`);
      const response = await fetch(`${source.baseUrl}${source.endpoint}`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data && data.data.posts) {
          const articles = data.data.posts.map(article => ({
            ...article,
            source: source.name
          }));
          allArticles.push(...articles);
        }
      }
    } catch (error) {
      console.warn(`Failed to fetch from ${source.name}:`, error);
    }
  }
  
  return allArticles;
};

// Enhanced filtering function
const filterCyberNews = (articles) => {
  return articles.filter(article => {
    const title = (article.title || '').toLowerCase();
    const description = (article.description || '').toLowerCase();
    const content = `${title} ${description}`;
    
    return CYBER_KEYWORDS.some(keyword => content.includes(keyword.toLowerCase()));
  });
};

// Process and format articles
const processArticles = (articles) => {
  return articles.map((article, index) => ({
    id: `${article.link}-${index}` || `article-${index}`,
    title: article.title || 'Judul tidak tersedia',
    summary: article.description || 'Deskripsi tidak tersedia. Klik untuk membaca selengkapnya.',
    author: article.creator || article.source || 'Tim Redaksi',
    date: article.pubDate ? new Date(article.pubDate).toLocaleDateString('id-ID') : new Date().toLocaleDateString('id-ID'),
    category: getEnhancedCategory(article.title || ''),
    readTime: `${Math.max(2, Math.floor((article.title?.length || 50) / 40))} menit`,
    image: article.thumbnail || article.image || "/api/placeholder/400/250",
    url: article.link || '#',
    trending: index < 5,
    featured: index === 0,
    source: article.source || 'Unknown'
  }));
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
  
  return 'Keamanan Digital';
};

const categories = ["Serangan Siber", "Privasi Data", "AI & Keamanan", "Kripto & Blockchain", "IoT Security", "Mobile Security", "Keamanan Digital"];

// Comprehensive fallback articles with current cyber threats
const fallbackArticles = [
  {
    id: "fallback-1",
    title: "Peningkatan Serangan Siber Terhadap Infrastruktur Kritis Indonesia",
    summary: "BSSN melaporkan peningkatan 300% serangan siber terhadap infrastruktur kritis nasional dalam 6 bulan terakhir, terutama sektor energi dan transportasi.",
    author: "BSSN Indonesia",
    date: new Date().toLocaleDateString('id-ID'),
    category: "Serangan Siber",
    readTime: "4 menit",
    image: "/api/placeholder/400/250",
    url: "#",
    trending: true,
    featured: true,
    source: "BSSN"
  },
  {
    id: "fallback-2", 
    title: "Kebocoran Data 15 Juta Pengguna E-wallet Indonesia",
    summary: "Investigasi menunjukkan data pribadi dan finansial jutaan pengguna dompet digital Indonesia bocor akibat kerentanan sistem keamanan.",
    author: "Tim Cyber Security",
    date: new Date().toLocaleDateString('id-ID'),
    category: "Privasi Data",
    readTime: "5 menit", 
    image: "/api/placeholder/400/250",
    url: "#",
    trending: true,
    featured: false,
    source: "CyberNews"
  },
  {
    id: "fallback-3",
    title: "AI Deepfake Digunakan untuk Penipuan di Media Sosial Indonesia",
    summary: "Kepolisian mengungkap modus baru penipuan menggunakan teknologi deepfake untuk meniru tokoh publik dan meminta transfer uang.",
    author: "Polda Metro Jaya",
    date: new Date().toLocaleDateString('id-ID'),
    category: "AI & Keamanan",
    readTime: "3 menit",
    image: "/api/placeholder/400/250", 
    url: "#",
    trending: false,
    featured: false,
    source: "Polri"
  },
  {
    id: "fallback-4",
    title: "Ransomware Baru Sasar UMKM Indonesia Melalui WhatsApp Business",
    summary: "Varian ransomware terbaru menginfeksi sistem UMKM melalui lampiran WhatsApp Business palsu, mengenkripsi data penting bisnis.",
    author: "ID-CERT",
    date: new Date().toLocaleDateString('id-ID'),
    category: "Serangan Siber",
    readTime: "4 menit",
    image: "/api/placeholder/400/250",
    url: "#", 
    trending: true,
    featured: false,
    source: "ID-CERT"
  },
  {
    id: "fallback-5",
    title: "Kominfo Wajibkan Sertifikasi Keamanan untuk Aplikasi Fintech",
    summary: "Regulasi baru mengharuskan semua aplikasi finansial teknologi mengantongi sertifikat keamanan siber sebelum beroperasi di Indonesia.",
    author: "Kementerian Kominfo",
    date: new Date().toLocaleDateString('id-ID'),
    category: "Keamanan Digital",
    readTime: "3 menit",
    image: "/api/placeholder/400/250",
    url: "#",
    trending: false,
    featured: false,
    source: "Kominfo"
  },
  {
    id: "fallback-6",
    title: "Crypto Exchange Indonesia Kehilangan $50 Juta Akibat Hack",
    summary: "Bursa cryptocurrency terbesar di Indonesia mengalami peretasan yang mengakibatkan kerugian miliaran rupiah dan pembekuan akun pengguna.",
    author: "Blockchain Security",
    date: new Date().toLocaleDateString('id-ID'),
    category: "Kripto & Blockchain", 
    readTime: "6 menit",
    image: "/api/placeholder/400/250",
    url: "#",
    trending: true,
    featured: false,
    source: "CryptoNews"
  }
];

export default function CyberEduPortal() {
  const [articles, setArticles] = useState(fallbackArticles);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [apiStatus, setApiStatus] = useState("fallback");

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

  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchTerm === "" || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "" || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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

      {/* kasih jarak */}
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
      <section className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-12">
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
              onClick={() => setSelectedCategory("")}
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
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat} ({count})
                </button>
              );
            })}
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

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan {filteredArticles.length} artikel
            {searchTerm && ` untuk "${searchTerm}"`}
            {selectedCategory && ` dalam kategori "${selectedCategory}"`}
          </p>
        </div>

        {/* Articles */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <AlertTriangle className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-500 mb-4">Tidak ada artikel yang ditemukan dengan filter saat ini</p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("");
              }}
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </main>
      <Futer />
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
      default: return <Shield size={12} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
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
      
      <div className="p-5">
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
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.summary}</p>
        
        <div className="flex justify-between items-center">
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
        </div>
      </div>
    </div>
  );
};

// Enhanced Footer Component
const Futer = () => (
  <footer className="bg-gray-800 text-gray-300 py-12 mt-12">
    <Footer />
  </footer>
);