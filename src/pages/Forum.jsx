import { useState, useEffect } from 'react';
import { MessageCircle, ThumbsUp, Send, Search, Filter, Users, Award, Clock, ArrowUp, ArrowDown, BookOpen, Coffee } from 'lucide-react';

// Data sample untuk forum
const initialTopics = [
  {
    id: 1,
    title: "Pengenalan Cybersecurity untuk Pemula",
    author: "securePro",
    avatar: "/api/placeholder/40/40",
    date: "15 Mei 2025",
    content: "Apa saja langkah awal yang harus dilakukan untuk memulai karir di bidang cybersecurity?",
    tags: ["cybersecurity", "pemula", "karir"],
    upvotes: 45,
    comments: 8,
    views: 230,
    pinned: true
  },
  {
    id: 2,
    title: "Pentingnya Enkripsi End-to-End pada Aplikasi Chat",
    author: "cryptoEnthusiast",
    avatar: "/api/placeholder/40/40",
    date: "14 Mei 2025",
    content: "Mari diskusikan mengapa enkripsi end-to-end sangat penting untuk keamanan komunikasi digital.",
    tags: ["enkripsi", "privacy", "aplikasi"],
    upvotes: 32,
    comments: 12,
    views: 145,
    pinned: false
  },
  {
    id: 3,
    title: "Workshop Ethical Hacking - Share Pengalaman",
    author: "whiteHat99",
    avatar: "/api/placeholder/40/40",
    date: "12 Mei 2025",
    content: "Baru selesai mengikuti workshop ethical hacking. Yuk share pengalaman belajar hacking untuk kebaikan!",
    tags: ["ethical-hacking", "workshop", "pengalaman"],
    upvotes: 28,
    comments: 15,
    views: 189,
    pinned: false
  },
  {
    id: 4,
    title: "Keamanan IoT di Rumah Pintar",
    author: "iotExpert",
    avatar: "/api/placeholder/40/40",
    date: "10 Mei 2025",
    content: "Bagaimana cara mengamankan perangkat IoT di rumah dari serangan cyber?",
    tags: ["iot", "smart-home", "keamanan"],
    upvotes: 37,
    comments: 21,
    views: 210,
    pinned: false
  },
];

// Komponen utama Forum
export default function ForumDiskusiCyberEdu() {
  const [topics, setTopics] = useState(initialTopics);
  const [activeTab, setActiveTab] = useState('populer');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewTopicForm, setShowNewTopicForm] = useState(false);
  const [newTopic, setNewTopic] = useState({
    title: '',
    content: '',
    tags: ''
  });
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Filter topics berdasarkan pencarian
  const filteredTopics = topics.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Urutkan topics berdasarkan tab aktif
  const sortedTopics = [...filteredTopics].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    
    switch(activeTab) {
      case 'populer':
        return b.upvotes - a.upvotes;
      case 'terbaru':
        return new Date(b.date) - new Date(a.date);
      case 'aktif':
        return b.comments - a.comments;
      default:
        return 0;
    }
  });

  // Handle submit topik baru
  const handleSubmitNewTopic = (e) => {
    e.preventDefault();
    
    // Buat topik baru
    const newTopicObj = {
      id: topics.length + 1,
      title: newTopic.title,
      author: "currentUser",
      avatar: "/api/placeholder/40/40",
      date: new Date().toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'}),
      content: newTopic.content,
      tags: newTopic.tags.split(',').map(tag => tag.trim()),
      upvotes: 0,
      comments: 0,
      views: 0,
      pinned: false
    };
    
    // Update state
    setTopics([newTopicObj, ...topics]);
    setNewTopic({title: '', content: '', tags: ''});
    setShowNewTopicForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 py-4 px-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="text-white" size={32} />
            <h1 className="text-2xl font-bold text-white">CyberEdu Forum</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition">
              <Coffee size={18} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {selectedTopic ? (
          <TopicDetail 
            topic={selectedTopic} 
            onBack={() => setSelectedTopic(null)} 
          />
        ) : (
          <>
            {/* Search and Create Topic */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Cari diskusi..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                onClick={() => setShowNewTopicForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Mulai Diskusi Baru
              </button>
            </div>

            {/* New Topic Form */}
            {showNewTopicForm && (
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Buat Diskusi Baru</h2>
                <form onSubmit={handleSubmitNewTopic}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Judul</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      value={newTopic.title}
                      onChange={(e) => setNewTopic({...newTopic, title: e.target.value})}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Konten</label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      value={newTopic.content}
                      onChange={(e) => setNewTopic({...newTopic, content: e.target.value})}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Tags (dipisahkan dengan koma)</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="cybersecurity, tutorial, diskusi"
                      value={newTopic.tags}
                      onChange={(e) => setNewTopic({...newTopic, tags: e.target.value})}
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setShowNewTopicForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition"
                    >
                      Publikasikan
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Forum Statistik */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <StatCard icon={<MessageCircle />} title="Total Diskusi" value="1,245" />
              <StatCard icon={<Users />} title="Total Pengguna" value="3,782" />
              <StatCard icon={<Clock />} title="Diskusi Hari Ini" value="42" />
              <StatCard icon={<Award />} title="Kontributor Aktif" value="153" />
            </div>

            {/* Topic Tabs dan Filter */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="flex mb-4 md:mb-0 border-b border-gray-200 w-full md:w-auto">
                <TabButton active={activeTab === 'populer'} onClick={() => setActiveTab('populer')}>Populer</TabButton>
                <TabButton active={activeTab === 'terbaru'} onClick={() => setActiveTab('terbaru')}>Terbaru</TabButton>
                <TabButton active={activeTab === 'aktif'} onClick={() => setActiveTab('aktif')}>Paling Aktif</TabButton>
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                <Filter size={16} />
                Filter Lanjutan
              </button>
            </div>

            {/* Daftar Topik */}
            <div className="space-y-4">
              {sortedTopics.length > 0 ? (
                sortedTopics.map(topic => (
                  <TopicCard 
                    key={topic.id} 
                    topic={topic} 
                    onClick={() => setSelectedTopic(topic)}
                  />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                  <MessageCircle className="mx-auto text-gray-400 mb-3" size={48} />
                  <h3 className="text-xl font-medium text-gray-700 mb-1">Belum ada diskusi</h3>
                  <p className="text-gray-500">Jadilah yang pertama memulai diskusi menarik!</p>
                </div>
              )}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <BookOpen className="text-blue-600 mr-2" size={24} />
              <span className="text-lg font-semibold text-gray-800">CyberEdu Forum</span>
            </div>
            <div className="text-gray-600 text-sm">
              © 2025 Cyber Education Platform. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Komponen Topik Detail
function TopicDetail({ topic, onBack }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "networkSecGuru",
      avatar: "/api/placeholder/40/40",
      content: "Untuk memulai karir di bidang cybersecurity, saya sarankan mulai dengan mempelajari konsep dasar jaringan dan sistem operasi. CompTIA Security+ adalah sertifikasi bagus untuk pemula.",
      date: "16 Mei 2025",
      upvotes: 12
    },
    {
      id: 2,
      author: "ethicalHacker",
      avatar: "/api/placeholder/40/40",
      content: "Jangan lupa praktik! Gunakan platform seperti TryHackMe atau HackTheBox untuk mengasah kemampuan secara langsung dengan lingkungan lab yang aman.",
      date: "16 Mei 2025",
      upvotes: 8
    },
    {
      id: 3,
      author: "cryptoPenguin",
      avatar: "/api/placeholder/40/40",
      content: "Belajar bahasa pemrograman dasar seperti Python sangat penting. Akan membantu kamu dalam otomatisasi tugas dan pengembangan tools keamanan sederhana.",
      date: "17 Mei 2025",
      upvotes: 5
    }
  ]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    const newComment = {
      id: comments.length + 1,
      author: "currentUser",
      avatar: "/api/placeholder/40/40",
      content: comment,
      date: new Date().toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'}),
      upvotes: 0
    };
    
    setComments([...comments, newComment]);
    setComment('');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Topic Header */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={20} className="mr-1" /> Kembali
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 flex items-center">
              <Eye size={16} className="mr-1" /> {topic.views + 1}
            </span>
            <span className="text-gray-600 flex items-center">
              <MessageCircle size={16} className="mr-1" /> {comments.length}
            </span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">{topic.title}</h1>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={topic.avatar} alt={topic.author} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <div className="font-medium">{topic.author}</div>
              <div className="text-sm text-gray-500">{topic.date}</div>
            </div>
          </div>
          <div className="flex space-x-2">
            {topic.tags.map((tag, idx) => (
              <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="prose max-w-none mb-4">
          <p>{topic.content}</p>
        </div>
        
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <ThumbsUp size={18} />
              <span>{topic.upvotes}</span>
            </button>
          </div>
          <div className="text-sm text-gray-500">
            Dilihat {topic.views + 1} kali
          </div>
        </div>
      </div>
      
      {/* Comments Section */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">Komentar ({comments.length})</h2>
        
        <div className="space-y-6 mb-8">
          {comments.map(comment => (
            <div key={comment.id} className="flex space-x-4">
              <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{comment.author}</span>
                    <span className="text-xs text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-800">{comment.content}</p>
                </div>
                <div className="flex items-center mt-2 ml-2 text-sm">
                  <button className="flex items-center text-gray-500 hover:text-blue-600 mr-4">
                    <ThumbsUp size={14} className="mr-1" /> {comment.upvotes}
                  </button>
                  <button className="text-gray-500 hover:text-blue-600">Balas</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Comment Form */}
        <form onSubmit={handleSubmitComment} className="mt-8">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Tambahkan Komentar</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Tulis komentar Anda di sini..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition flex items-center"
            >
              <Send size={16} className="mr-2" /> Kirim Komentar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Komponen Tombol Tab
function TabButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-medium text-sm transition ${
        active 
          ? 'text-blue-600 border-b-2 border-blue-600' 
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {children}
    </button>
  );
}

// Komponen Kartu Topik
function TopicCard({ topic, onClick }) {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <img src={topic.avatar} alt={topic.author} className="w-8 h-8 rounded-full mr-3" />
            <div>
              <span className="font-medium text-sm">{topic.author}</span>
              <span className="text-gray-500 text-xs ml-2">{topic.date}</span>
            </div>
          </div>
          {topic.pinned && (
            <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full flex items-center">
              <Pin size={12} className="mr-1" /> Pinned
            </span>
          )}
        </div>
        
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{topic.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{topic.content}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {topic.tags.map((tag, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-sm text-gray-600">
              <ThumbsUp size={14} className="mr-1" /> {topic.upvotes}
            </span>
            <span className="flex items-center text-sm text-gray-600">
              <MessageCircle size={14} className="mr-1" /> {topic.comments}
            </span>
            <span className="flex items-center text-sm text-gray-600">
              <Eye size={14} className="mr-1" /> {topic.views}
            </span>
          </div>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition">
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}

// Komponen Statistik Card
function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-sm text-gray-600">{title}</h3>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}

// Komponen Ikon yang digunakan tetapi belum diimpor
function ArrowLeft(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || 24} 
      height={props.size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <path d="m12 19-7-7 7-7"/>
      <path d="M19 12H5"/>
    </svg>
  );
}

function Eye(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || 24} 
      height={props.size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function Pin(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || 24} 
      height={props.size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <line x1="12" x2="12" y1="17" y2="22"/>
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/>
    </svg>
  );
}