import { useState, useEffect } from 'react';
import { MessageCircle, Heart, MessageSquare, Send, Search, ChevronDown, Filter, Tag, Bookmark, Bell, User, LogOut, Settings } from 'lucide-react';

// Data dummy untuk forum
const initialTopics = [
  {
    id: 1,
    title: "Keamanan Jaringan untuk Pemula",
    author: "cyberpro99",
    authorImg: "/api/placeholder/40/40",
    date: "14 Mei 2025",
    category: "Keamanan Jaringan",
    tags: ["cybersecurity", "network", "pemula"],
    content: "Bagaimana pendapat kalian tentang langkah-langkah dasar dalam mengamankan jaringan lokal untuk bisnis kecil? Saya baru memulai karir di bidang ini dan ingin mendapat insight dari para profesional.",
    likes: 24,
    comments: 8,
    pinned: true,
  },
  {
    id: 2,
    title: "Tantangan dalam Penerapan Machine Learning untuk Deteksi Anomali",
    author: "datascientist_77",
    authorImg: "/api/placeholder/40/40",
    date: "12 Mei 2025",
    category: "Machine Learning",
    tags: ["AI", "ML", "anomaly-detection"],
    content: "Saat ini saya sedang mengerjakan proyek deteksi anomali menggunakan metode unsupervised learning. Tantangan utama yang saya hadapi adalah false positive yang terlalu tinggi. Ada yang punya pengalaman serupa?",
    likes: 18,
    comments: 15,
    pinned: false,
  },
  {
    id: 3,
    title: "Perbandingan Framework Frontend untuk Aplikasi Cyber Education",
    author: "uiux_master",
    authorImg: "/api/placeholder/40/40",
    date: "10 Mei 2025",
    category: "Frontend Development",
    tags: ["react", "vue", "svelte", "frontend"],
    content: "Dari pengalaman kalian, framework mana yang paling cocok untuk mengembangkan platform edukasi cyber? Saya sedang mempertimbangkan antara React, Vue, dan Svelte. Pertimbangan utama adalah performa dan kemudahan maintenance jangka panjang.",
    likes: 32,
    comments: 21,
    pinned: false,
  }
];

// Kategori untuk filter
const categories = [
  "Semua Kategori",
  "Keamanan Jaringan",
  "Ethical Hacking",
  "Cloud Security",
  "Machine Learning",
  "Data Privacy",
  "Frontend Development",
  "Backend Development",
  "DevSecOps"
];

export default function CyberEduForum() {
  const [topics, setTopics] = useState(initialTopics);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "", tags: "" });
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [currentUser] = useState({
    username: "cyber_learner",
    image: "/api/placeholder/40/40",
    notifications: 3
  });
  
  // Filter topics based on search query and selected category
  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          topic.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "Semua Kategori" || topic.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort topics to show pinned ones first
  const sortedTopics = [...filteredTopics].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return 0;
  });

  // Handle adding a new post
  const handleAddPost = () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      const newTopic = {
        id: topics.length + 1,
        title: newPost.title,
        author: currentUser.username,
        authorImg: currentUser.image,
        date: "14 Mei 2025",
        category: selectedCategory !== "Semua Kategori" ? selectedCategory : "General",
        tags: newPost.tags ? newPost.tags.split(",").map(tag => tag.trim()) : [],
        content: newPost.content,
        likes: 0,
        comments: 0,
        pinned: false
      };
      
      setTopics([newTopic, ...topics]);
      setNewPost({ title: "", content: "", tags: "" });
      setShowNewPostForm(false);
    }
  };

  // Toggle like for a topic
  const handleLike = (id) => {
    setTopics(topics.map(topic => 
      topic.id === id ? { ...topic, likes: topic.likes + 1 } : topic
    ));
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="font-bold text-xl">Cyber<span className="text-green-400">Edu</span> Forum</div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell size={20} className="cursor-pointer" />
              {currentUser.notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {currentUser.notifications}
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-2 cursor-pointer group">
              <img src={currentUser.image} alt="User" className="w-8 h-8 rounded-full" />
              <span>{currentUser.username}</span>
              <ChevronDown size={16} />
              
              <div className="absolute top-12 right-4 bg-white shadow-lg rounded-md p-2 hidden group-hover:block">
                <div className="flex flex-col w-40">
                  <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
                    <User size={16} />
                    <span>Profil</span>
                  </button>
                  <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
                    <Settings size={16} />
                    <span>Pengaturan</span>
                  </button>
                  <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
                    <LogOut size={16} />
                    <span>Keluar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6 flex gap-4">
        {/* Left Sidebar - Navigation */}
        <aside className="w-56 hidden md:block">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold mb-4 text-gray-700">Navigasi</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 p-2 bg-indigo-50 text-indigo-700 rounded-md font-medium">
                <MessageCircle size={18} />
                <span>Forum Diskusi</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md text-gray-700 cursor-pointer">
                <Tag size={18} />
                <span>Tag Populer</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md text-gray-700 cursor-pointer">
                <Bookmark size={18} />
                <span>Diskusi Tersimpan</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md text-gray-700 cursor-pointer">
                <User size={18} />
                <span>Profil Saya</span>
              </li>
            </ul>
            
            <h3 className="font-semibold mb-2 mt-6 text-gray-700">Kategori Populer</h3>
            <ul className="space-y-1">
              {categories.slice(1, 6).map((category, index) => (
                <li key={index} 
                    className="text-sm p-1 cursor-pointer hover:text-indigo-700"
                    onClick={() => setSelectedCategory(category)}>
                  # {category}
                </li>
              ))}
            </ul>
          </div>
        </aside>
        
        {/* Center - Main Forum Content */}
        <div className="flex-grow">
          {/* Search and Filters */}
          <div className="bg-white shadow rounded-lg p-4 mb-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-grow">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Cari diskusi..." 
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                >
                  <Filter size={18} />
                  <span>{selectedCategory}</span>
                  <ChevronDown size={18} />
                </button>
                
                {showCategoryDropdown && (
                  <div className="absolute top-12 left-0 z-10 w-56 bg-white shadow-lg rounded-md overflow-hidden">
                    {categories.map((category, index) => (
                      <div 
                        key={index} 
                        className="px-4 py-2 cursor-pointer hover:bg-indigo-50"
                        onClick={() => {
                          setSelectedCategory(category);
                          setShowCategoryDropdown(false);
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
                onClick={() => setShowNewPostForm(!showNewPostForm)}
              >
                <MessageSquare size={18} className="mr-2" />
                Diskusi Baru
              </button>
            </div>
            
            {/* New Post Form */}
            {showNewPostForm && (
              <div className="mt-4 border-t pt-4">
                <h3 className="font-medium text-lg mb-3">Buat Diskusi Baru</h3>
                <div className="space-y-3">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Judul diskusi" 
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Isi diskusi..." 
                      className="w-full p-2 border rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={newPost.content}
                      onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    ></textarea>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Tag (pisahkan dengan koma)" 
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={newPost.tags}
                      onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button 
                      className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                      onClick={() => setShowNewPostForm(false)}
                    >
                      Batal
                    </button>
                    <button 
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      onClick={handleAddPost}
                    >
                      Posting
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Forum Posts */}
          <div className="space-y-4">
            {sortedTopics.length > 0 ? (
              sortedTopics.map(topic => (
                <div key={topic.id} className={`bg-white shadow rounded-lg p-4 ${topic.pinned ? 'border-l-4 border-indigo-500' : ''}`}>
                  {topic.pinned && (
                    <div className="flex items-center space-x-1 text-xs text-indigo-600 mb-2">
                      <Tag size={12} />
                      <span>Disematkan</span>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <img src={topic.authorImg} alt={topic.author} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-medium">{topic.author}</div>
                      <div className="text-xs text-gray-500">{topic.date}</div>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{topic.title}</h3>
                  <p className="text-gray-600 mb-3">{topic.content}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {topic.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 border-t">
                    <div className="flex space-x-4">
                      <button 
                        className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600"
                        onClick={() => handleLike(topic.id)}
                      >
                        <Heart size={16} className={topic.likes > 0 ? 'text-red-500 fill-current' : ''} />
                        <span>{topic.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                        <MessageSquare size={16} />
                        <span>{topic.comments}</span>
                      </button>
                    </div>
                    <div className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                      {topic.category}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white shadow rounded-lg p-8 text-center">
                <div className="text-gray-500">Tidak ditemukan diskusi yang sesuai dengan pencarian.</div>
              </div>
            )}
          </div>
        </div>
        
        {/* Right Sidebar - Trending and Stats */}
        <aside className="w-64 hidden lg:block">
          <div className="bg-white shadow rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-4 text-gray-700">Trending Topic</h3>
            <ul className="space-y-3">
              <li className="border-l-2 border-indigo-500 pl-3">
                <div className="text-sm font-medium">Keamanan Aplikasi Mobile</div>
                <div className="text-xs text-gray-500">82 diskusi minggu ini</div>
              </li>
              <li className="border-l-2 border-green-500 pl-3">
                <div className="text-sm font-medium">Blockchain untuk Keamanan Data</div>
                <div className="text-xs text-gray-500">67 diskusi minggu ini</div>
              </li>
              <li className="border-l-2 border-yellow-500 pl-3">
                <div className="text-sm font-medium">Zero Trust Architecture</div>
                <div className="text-xs text-gray-500">54 diskusi minggu ini</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold mb-4 text-gray-700">Kontributor Teratas</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <img src="/api/placeholder/40/40" alt="User" className="w-8 h-8 rounded-full" />
                <div>
                  <div className="text-sm font-medium">cyberpro99</div>
                  <div className="text-xs text-gray-500">124 kontribusi</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/api/placeholder/40/40" alt="User" className="w-8 h-8 rounded-full" />
                <div>
                  <div className="text-sm font-medium">datascientist_77</div>
                  <div className="text-xs text-gray-500">98 kontribusi</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/api/placeholder/40/40" alt="User" className="w-8 h-8 rounded-full" />
                <div>
                  <div className="text-sm font-medium">uiux_master</div>
                  <div className="text-xs text-gray-500">87 kontribusi</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 CyberEdu Forum. Semua hak cipta dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}