import { useState } from 'react';
import { 
  Bell, 
  BookOpen, 
  HelpCircle, 
  Mail, 
  MessageSquare, 
  Shield, 
  User, 
  Lock, 
  AlertTriangle, 
  ChevronRight, 
  CheckCircle,
  TrendingUp,
  Settings
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  // Sample data for the dashboard
  const educationModules = [
    { 
      title: 'Dasar - Keamanan Password', 
      level: 'Dasar', 
      progress: 75, 
      icon: <Lock className="text-blue-500" size={24} /> 
    },
    { 
      title: 'Dasar - Mengenal Virus dan Malware', 
      level: 'Dasar', 
      progress: 60, 
      icon: <AlertTriangle className="text-red-500" size={24} /> 
    },
    { 
      title: 'Menengah - Dasar-dasar Enkripsi', 
      level: 'Menengah', 
      progress: 30, 
      icon: <Shield className="text-green-500" size={24} /> 
    },
    { 
      title: 'Lanjut - Teknik Ethical Hacking', 
      level: 'Lanjut', 
      progress: 10, 
      icon: <Shield className="text-purple-500" size={24} /> 
    }
  ];

  const latestNews = [
    {
      title: 'Serangan Siber Terbaru Menargetkan Sistem Perbankan',
      date: '10 Mei 2025',
      snippet: 'Serangkaian serangan siber baru telah ditemukan menargetkan sistem perbankan di Indonesia...'
    },
    {
      title: 'Kerentanan Kritis Ditemukan pada Sistem Operasi Populer',
      date: '8 Mei 2025',
      snippet: 'Para peneliti keamanan telah mengungkap kerentanan zero-day pada sistem operasi yang banyak digunakan...'
    },
    {
      title: 'Tips Mengamankan Akun Media Sosial Anda',
      date: '5 Mei 2025',
      snippet: 'Dengan meningkatnya pencurian identitas online, berikut adalah cara untuk mengamankan akun media sosial Anda...'
    }
  ];

  const quizzes = [
    { title: 'Keamanan Password', score: '8/10', completed: true },
    { title: 'Mengenal Malware', score: '7/10', completed: true },
    { title: 'Dasar Enkripsi', score: '-', completed: false }
  ];

  const forumTopics = [
    { title: 'Bagaimana cara mengamankan jaringan WiFi rumah?', replies: 12, lastActive: '2 jam lalu' },
    { title: 'Diskusi: Apakah password manager benar-benar aman?', replies: 24, lastActive: '6 jam lalu' },
    { title: 'Bantuan: Komputer terinfeksi ransomware', replies: 8, lastActive: '1 hari lalu' }
  ];

  const dailyTip = {
    title: 'Tip Hari Ini: Verifikasi Dua Faktor',
    content: 'Aktifkan verifikasi dua faktor pada semua akun penting Anda untuk lapisan keamanan tambahan. Ini mengurangi risiko peretasan akun hingga 99%.'
  };

  const userStats = {
    modules: 5,
    quizzes: 2,
    points: 350,
    rank: 'Cyber Defender'
  };

  // Button component for consistency
  const ActionButton = ({ children, primary }) => (
    <button 
      className={`mt-4 w-full py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        primary 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
      }`}
    >
      {children}
    </button>
  );

  // Card Title component for consistency
  const CardTitle = ({ children }) => (
    <div className="p-4 border-b flex justify-between items-center">
      <h3 className="font-semibold text-lg text-gray-800">{children}</h3>
      <ChevronRight size={18} className="text-gray-400" />
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 text-white shadow-lg">
        <div className="p-5 flex items-center border-b border-slate-700">
          <Shield className="mr-3 text-blue-400" size={28} />
          <h1 className="text-xl font-bold">CyberEdu</h1>
        </div>
        
        <div className="p-4">
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4 px-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-medium">
                U
              </div>
              <div>
                <h3 className="font-medium">User123</h3>
                <p className="text-xs text-slate-400">Cyber Defender</p>
              </div>
            </div>
          </div>
          
          <nav className="space-y-1">
            <button 
              className={`w-full flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${activeTab === 'home' ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveTab('home')}
            >
              <Shield className="mr-3" size={18} />
              <span>Beranda</span>
            </button>
            
            <button 
              className={`w-full flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${activeTab === 'modules' ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveTab('modules')}
            >
              <BookOpen className="mr-3" size={18} />
              <span>Materi Edukasi</span>
            </button>
            
            <button 
              className={`w-full flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${activeTab === 'quizzes' ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveTab('quizzes')}
            >
              <HelpCircle className="mr-3" size={18} />
              <span>Kuis</span>
            </button>
            
            <button 
              className={`w-full flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${activeTab === 'news' ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveTab('news')}
            >
              <AlertTriangle className="mr-3" size={18} />
              <span>Artikel & Berita</span>
            </button>
            
            <button 
              className={`w-full flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${activeTab === 'forum' ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveTab('forum')}
            >
              <MessageSquare className="mr-3" size={18} />
              <span>Forum Diskusi</span>
            </button>
            
            <button 
              className={`w-full flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${activeTab === 'tools' ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveTab('tools')}
            >
              <Lock className="mr-3" size={18} />
              <span>Tools Keamanan</span>
            </button>
            
            <button 
              className={`w-full flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${activeTab === 'profile' ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
              onClick={() => setActiveTab('profile')}
            >
              <User className="mr-3" size={18} />
              <span>Profil</span>
            </button>
          </nav>
        </div>
        
        <div className="mt-auto p-4 border-t border-slate-700">
          <button className="w-full flex items-center px-4 py-2 text-sm rounded-lg text-slate-300 hover:bg-slate-700">
            <Settings className="mr-3" size={18} />
            <span>Pengaturan</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top navigation */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                  <Mail size={20} />
                </button>
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">2</span>
              </div>
              <div className="relative">
                <button className="p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                  <Bell size={20} />
                </button>
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">1</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Welcome Banner & Stats */}
          <div className="mb-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Welcome Banner */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold">Selamat Datang di CyberEdu</h2>
                      <p className="mt-2 opacity-90">Platform edukasi keamanan siber terlengkap di Indonesia</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Shield size={40} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Daily Tip */}
                  <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                    <h3 className="font-bold flex items-center">
                      <AlertTriangle size={18} className="mr-2" />
                      {dailyTip.title}
                    </h3>
                    <p className="mt-2 text-sm opacity-90">{dailyTip.content}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Stats */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Progress Belajar</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <p className="text-sm text-gray-600">Modul Selesai</p>
                  <div className="flex items-center mt-1">
                    <BookOpen size={20} className="text-blue-600 mr-2" />
                    <span className="text-xl font-bold text-gray-800">{userStats.modules}</span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-3 rounded-xl">
                  <p className="text-sm text-gray-600">Kuis Lulus</p>
                  <div className="flex items-center mt-1">
                    <CheckCircle size={20} className="text-green-600 mr-2" />
                    <span className="text-xl font-bold text-gray-800">{userStats.quizzes}</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-xl">
                  <p className="text-sm text-gray-600">Poin Keamanan</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp size={20} className="text-purple-600 mr-2" />
                    <span className="text-xl font-bold text-gray-800">{userStats.points}</span>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-3 rounded-xl">
                  <p className="text-sm text-gray-600">Peringkat</p>
                  <div className="mt-1">
                    <span className="text-sm font-bold text-indigo-600">{userStats.rank}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Education Modules */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <CardTitle>Materi Edukasi</CardTitle>
              <div className="p-4">
                <ul className="space-y-4">
                  {educationModules.slice(0, 3).map((module, index) => (
                    <li key={index} className="p-3 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gray-50 rounded-lg">
                          {module.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">{module.title}</h4>
                          <div className="flex justify-between mt-1 text-xs text-gray-500">
                            <span>Level: {module.level}</span>
                            <span>{module.progress}%</span>
                          </div>
                          <div className="mt-2 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-2 rounded-full ${
                                module.level === 'Dasar' ? 'bg-blue-500' : 
                                module.level === 'Menengah' ? 'bg-green-500' : 'bg-purple-500'
                              }`}
                              style={{ width: `${module.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <ActionButton>Lihat Semua Materi</ActionButton>
              </div>
            </div>

            {/* Latest News & Articles */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <CardTitle>Berita & Artikel Terkini</CardTitle>
              <div className="p-4">
                <ul className="space-y-4">
                  {latestNews.map((news, index) => (
                    <li key={index} className="p-3 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                      <h4 className="text-sm font-medium text-gray-800">{news.title}</h4>
                      <p className="text-xs text-blue-600 font-medium mt-1">{news.date}</p>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{news.snippet}</p>
                    </li>
                  ))}
                </ul>
                <ActionButton>Lihat Semua Artikel</ActionButton>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Quizzes */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <CardTitle>Kuis Saya</CardTitle>
                <div className="p-4">
                  <ul className="space-y-2">
                    {quizzes.map((quiz, index) => (
                      <li key={index} className="flex justify-between items-center p-3 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center">
                          {quiz.completed ? 
                            <CheckCircle size={16} className="text-green-500 mr-2" /> : 
                            <HelpCircle size={16} className="text-gray-400 mr-2" />
                          }
                          <span className="text-sm font-medium">{quiz.title}</span>
                        </div>
                        <span className={`text-sm font-medium ${quiz.completed ? 'text-green-600' : 'text-gray-400'}`}>
                          {quiz.score}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ActionButton>Lihat Semua Kuis</ActionButton>
                </div>
              </div>

              {/* Forum Discussions */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <CardTitle>Forum Diskusi</CardTitle>
                <div className="p-4">
                  <ul className="space-y-3">
                    {forumTopics.map((topic, index) => (
                      <li key={index} className="p-3 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                        <h4 className="text-sm font-medium text-gray-800">{topic.title}</h4>
                        <div className="flex justify-between mt-2 text-xs">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{topic.replies} balasan</span>
                          <span className="text-gray-600">Aktif {topic.lastActive}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ActionButton>Ke Forum Diskusi</ActionButton>
                </div>
              </div>
            </div>
          </div>

          {/* Security Tools Section */}
          <div className="mt-6">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <CardTitle>Tools Keamanan</CardTitle>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all cursor-pointer bg-gradient-to-br from-blue-50 to-white">
                    <div className="p-3 bg-blue-100 rounded-lg w-fit mb-3">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <h4 className="font-medium text-gray-800 mb-2">Cek Email Bocor</h4>
                    <p className="text-sm text-gray-600">Periksa apakah email Anda pernah terlibat dalam kebocoran data</p>
                    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                      <span>Periksa Sekarang</span>
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                  
                  <div className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all cursor-pointer bg-gradient-to-br from-green-50 to-white">
                    <div className="p-3 bg-green-100 rounded-lg w-fit mb-3">
                      <Lock className="text-green-600" size={24} />
                    </div>
                    <h4 className="font-medium text-gray-800 mb-2">Password Strength Checker</h4>
                    <p className="text-sm text-gray-600">Uji kekuatan password Anda dan dapatkan rekomendasi</p>
                    <div className="mt-4 flex items-center text-green-600 text-sm font-medium">
                      <span>Coba Sekarang</span>
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                  
                  <div className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all cursor-pointer bg-gradient-to-br from-purple-50 to-white">
                    <div className="p-3 bg-purple-100 rounded-lg w-fit mb-3">
                      <Shield className="text-purple-600" size={24} />
                    </div>
                    <h4 className="font-medium text-gray-800 mb-2">Security Checklist</h4>
                    <p className="text-sm text-gray-600">Panduan langkah demi langkah untuk mengamankan perangkat Anda</p>
                    <div className="mt-4 flex items-center text-purple-600 text-sm font-medium">
                      <span>Lihat Checklist</span>
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-white py-4 px-6 border-t text-center text-sm text-gray-600">
          © 2025 CyberEdu. Platform Edukasi Keamanan Siber Indonesia.
        </footer>
      </div>
    </div>
  );
}