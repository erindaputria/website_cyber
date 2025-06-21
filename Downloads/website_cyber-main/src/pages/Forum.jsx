import React, { useState, useEffect } from 'react';
import { Search, Plus, MessageCircle, ThumbsUp, ThumbsDown, Eye, Clock, User, Tag, TrendingUp, Award, BookOpen, Shield, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Headeer from './Headeer';
import Footer from './Footer';

const CyberEduForum = () => {
  const [activeTab, setActiveTab] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Cara Melindungi Diri dari Serangan Phishing Terbaru",
      author: "CyberExpert",
      avatar: "CE",
      category: "Security",
      content: "Phishing semakin canggih dengan teknik social engineering yang kompleks. Mari diskusikan cara-cara terbaru untuk mengidentifikasi dan melindungi diri...",
      likes: 24,
      dislikes: 2,
      replies: 15,
      views: 342,
      time: "2 jam lalu",
      tags: ["phishing", "security", "prevention"],
      isPinned: true,
      isHot: true
    },
    {
      id: 2,
      title: "Tutorial: Implementasi Two-Factor Authentication",
      author: "DevSecure",
      avatar: "DS",
      category: "Tutorial",
      content: "Panduan lengkap implementasi 2FA untuk aplikasi web menggunakan TOTP dan SMS verification...",
      likes: 18,
      dislikes: 1,
      replies: 8,
      views: 256,
      time: "5 jam lalu",
      tags: ["2fa", "authentication", "tutorial"],
      isPinned: false,
      isHot: true
    },
    {
      id: 3,
      title: "Diskusi: Tren Cybercrime di Indonesia 2025",
      author: "InfoSecAnalyst",
      avatar: "IA",
      category: "Discussion",
      content: "Berdasarkan data terbaru, ada peningkatan significant dalam kasus ransomware dan data breach. Bagaimana pendapat kalian?",
      likes: 32,
      dislikes: 4,
      replies: 23,
      views: 445,
      time: "1 hari lalu",
      tags: ["cybercrime", "indonesia", "analysis"],
      isPinned: false,
      isHot: false
    },
    {
      id: 4,
      title: "Q&A: Sertifikasi Cyber Security yang Worth It",
      author: "CertMaster",
      avatar: "CM",
      category: "Q&A",
      content: "Newbie di bidang cyber security, mau tanya sertifikasi mana yang paling valuable untuk career path?",
      likes: 15,
      dislikes: 0,
      replies: 12,
      views: 189,
      time: "2 hari lalu",
      tags: ["certification", "career", "beginner"],
      isPinned: false,
      isHot: false
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    content: '',
    tags: ''
  });

  const categories = [
    { id: 'all', name: 'Semua Kategori', icon: BookOpen, color: 'text-blue-600' },
    { id: 'Security', name: 'Security', icon: Shield, color: 'text-blue-700' },
    { id: 'Tutorial', name: 'Tutorial', icon: Code, color: 'text-indigo-600' },
    { id: 'Discussion', name: 'Diskusi', icon: MessageCircle, color: 'text-blue-800' },
    { id: 'Q&A', name: 'Q&A', icon: User, color: 'text-indigo-700' }
  ];

  const stats = [
    { label: 'Total Postingan', value: '1,234', icon: MessageCircle, color: 'bg-blue-600' },
    { label: 'Pengguna Aktif', value: '456', icon: User, color: 'bg-indigo-600' },
    { label: 'Topik Hari Ini', value: '89', icon: TrendingUp, color: 'bg-blue-700' },
    { label: 'Kontributor Ahli', value: '23', icon: Award, color: 'bg-indigo-700' }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (activeTab === 'hot') return b.likes - a.likes;
    if (activeTab === 'popular') return b.views - a.views;
    return b.id - a.id; // recent
  });

  const handleLike = (postId, isLike) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: isLike ? post.likes + 1 : post.likes,
          dislikes: !isLike ? post.dislikes + 1 : post.dislikes
        };
      }
      return post;
    }));
  };

  const handleNewPost = () => {
    if (newPost.title && newPost.content && newPost.category) {
      const post = {
        id: posts.length + 1,
        ...newPost,
        author: "You",
        avatar: "YU",
        likes: 0,
        dislikes: 0,
        replies: 0,
        views: 1,
        time: "Baru saja",
        tags: newPost.tags.split(',').map(tag => tag.trim()),
        isPinned: false,
        isHot: false
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', category: '', content: '', tags: '' });
      setShowNewPostModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-2xl sticky top-0 z-50">
        <Headeer />
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 mt-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-800 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center shadow-md`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Kategori</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    <category.icon className={`w-4 h-4 ${category.color}`} />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {['CyberExpert', 'DevSecure', 'InfoSecAnalyst'].map((user, index) => (
                  <div key={user} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                      {user.slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-blue-900 text-sm font-medium">{user}</p>
                      <p className="text-blue-700 text-xs">{Math.floor(Math.random() * 100)} posts</p>
                    </div>
                    <div className="ml-auto">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-sm ${
                        index === 0 ? 'bg-yellow-400 text-blue-900' :
                        index === 1 ? 'bg-blue-200 text-blue-900' :
                        'bg-indigo-200 text-indigo-900'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-lg mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="w-5 h-5 text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari diskusi, tutorial, atau topik..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex space-x-2">
                  {['recent', 'hot', 'popular'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                          : 'bg-white text-blue-700 border border-blue-200 hover:bg-blue-50'
                      }`}
                    >
                      {tab === 'recent' ? 'Terbaru' : tab === 'hot' ? 'Hot' : 'Populer'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {sortedPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      {post.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-blue-900 hover:text-blue-600 cursor-pointer">
                          {post.title}
                        </h3>
                        {post.isPinned && (
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full border border-blue-200">Pinned</span>
                        )}
                        {post.isHot && (
                          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                            <TrendingUp className="w-3 h-3" />
                            <span>Hot</span>
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-blue-700 mb-3">
                        <span>{post.author}</span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.time}</span>
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs border border-blue-200">{post.category}</span>
                      </div>
                      <p className="text-blue-800 mb-4 line-clamp-2">{post.content}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs flex items-center space-x-1 border border-blue-100">
                            <Tag className="w-3 h-3" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <button
                            onClick={() => handleLike(post.id, true)}
                            className="flex items-center space-x-2 text-blue-700 hover:text-blue-600 transition-colors"
                          >
                            <ThumbsUp className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button
                            onClick={() => handleLike(post.id, false)}
                            className="flex items-center space-x-2 text-blue-700 hover:text-blue-600 transition-colors"
                          >
                            <ThumbsDown className="w-4 h-4" />
                            <span>{post.dislikes}</span>
                          </button>
                          <div className="flex items-center space-x-2 text-blue-700">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-2 text-blue-700">
                            <Eye className="w-4 h-4" />
                            <span>{post.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Post Button */}
      <button 
        onClick={() => setShowNewPostModal(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-40"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* New Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl border border-blue-200 shadow-2xl">
            <h2 className="text-xl font-bold text-blue-900 mb-6">Buat Post Baru</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Judul diskusi..."
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select
                value={newPost.category}
                onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Pilih Kategori</option>
                <option value="Security">Security</option>
                <option value="Tutorial">Tutorial</option>
                <option value="Discussion">Diskusi</option>
                <option value="Q&A">Q&A</option>
              </select>
              <textarea
                placeholder="Tulis konten diskusi Anda..."
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                rows={6}
                className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Tags (pisahkan dengan koma)"
                value={newPost.tags}
                onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowNewPostModal(false)}
                className="px-6 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg transition-colors border border-blue-200"
              >
                Batal
              </button>
              <button
                onClick={handleNewPost}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white mt-20">
        <Footer />
      </footer>
    </div>
  );
};

export default CyberEduForum;