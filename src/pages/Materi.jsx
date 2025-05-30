import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Lock, Shield, Code, Cloud, Star, ArrowRight, Users, Award, Clock } from 'lucide-react';
import Headeer from './Headeer';
import Footer from './Footer';
import Dasar from './Dasar';
import Menengah from './Menengah';
import Lanjut from './Lanjut';

// Main App Component
export default function CyberEduApp() {
  const [activeLevel, setActiveLevel] = useState(null);
  const navigate = useNavigate();
  
  const resetSelections = () => {
    setActiveLevel(null);
  };

  const handleQuizNavigation = () => {
    navigate('/kuis');
  };

  const levels = [
    {
      id: 'basic',
      title: 'Dasar',
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      description: 'Pengenalan keamanan cyber untuk pemula',
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-100",
      component: <Dasar onBack={resetSelections} />,
      difficulty: "Pemula",
      topics: ["Pengenalan Cyber Security", "Password Security", "Virus dan Malware"]
    },
    {
      id: 'intermediate',
      title: 'Menengah',
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      description: 'Pemahaman lebih dalam tentang keamanan cyber',
      gradient: "from-indigo-500 to-indigo-700",
      bgColor: "bg-indigo-100",
      component: <Menengah onBack={resetSelections} />,
      difficulty: "Menengah",
      topics: ["Network Security", "Teknik Enkripsi", "Secure Coding Practices"]
    },
    {
      id: 'advanced',
      title: 'Lanjut',
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      description: 'Teknik dan konsep tingkat lanjut untuk profesional',
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-100",
      component: <Lanjut onBack={resetSelections} />,
      difficulty: "Lanjut",
      topics: ["Cloud Computing", "Teknik Hacking", "SKIM"]
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-2xl">
        <Headeer />
      </header>

      <div className="h-16"></div>
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {!activeLevel && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="text-center mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  <Shield className="w-4 h-4" />
                  Cyber Security Education Platform
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
                  Cyber Security Learning
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Tingkatkan keahlian keamanan cyber Anda dengan pembelajaran terstruktur dari dasar hingga tingkat profesional
                </p>
              </div>
            </div>

            {/* Learning Process Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center shadow-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Pelajari Materi</h3>
                <p className="text-blue-700 mb-6">Akses materi cyber security yang komprehensif dan mudah dipahami. Dari konsep dasar hingga teknik advanced yang dibutuhkan profesional.</p>
                <div className="flex items-center justify-center gap-2 text-sm text-blue-700 font-medium">
                  <Clock className="w-4 h-4" />
                  <span>Belajar sesuai kecepatan Anda</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 text-center shadow-xl border-2 border-indigo-200 hover:border-indigo-300 transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">Uji Kemampuan</h3>
                <p className="text-indigo-700 mb-6">Evaluasi pemahaman Anda dengan kuis interaktif dan soal-soal praktis. Dapatkan feedback langsung untuk mengoptimalkan pembelajaran.</p>
                <div className="flex items-center justify-center gap-2 text-sm text-indigo-700 font-medium">
                  <Award className="w-4 h-4" />
                  <span>Skor real-time setelah kuis</span>
                </div>
              </div>
            </div>

            {/* Learning Levels */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Pilih Level Pembelajaran Anda</h2>
              <p className="text-center text-gray-600 mb-12">Mulai perjalanan pembelajaran keamanan cyber sesuai dengan level keahlian Anda</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {levels.map((level, index) => (
                <div 
                  key={level.id}
                  className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                    index === 1 ? 'lg:scale-105 lg:z-10' : ''
                  }`}
                  onClick={() => setActiveLevel(level)}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${level.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon and Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl ${level.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                        {level.icon}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        level.id === 'basic' ? 'bg-blue-100 text-blue-700' : 
                        level.id === 'intermediate' ? 'bg-indigo-100 text-indigo-700' : 
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {level.difficulty}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      Level {level.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{level.description}</p>

                    {/* Topics */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Topik Utama:</h4>
                      <div className="space-y-2">
                        {level.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className={`w-2 h-2 rounded-full ${
                              level.id === 'basic' ? 'bg-blue-500' : 
                              level.id === 'intermediate' ? 'bg-indigo-500' : 
                              'bg-blue-600'
                            }`}></div>
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${level.gradient} hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md`}>
                      Mulai Belajar
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quiz CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-600/20 backdrop-blur-sm"></div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-indigo-600/20 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Siap Menguji Kemampuan Cyber Security Anda?</h3>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    Setelah mempelajari materi, asah kemampuan Anda dengan kuis interaktif untuk menambah pemahaman terkait cyber security.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                    <div className="flex items-center gap-3 text-white/90">
                      <Book className="w-5 h-5" />
                      <span className="font-medium">Pembelajaran Materi</span>
                    </div>
                    <div className="hidden sm:block w-px h-6 bg-white/30"></div>
                    <div className="flex items-center gap-3 text-white/90">
                      <Shield className="w-5 h-5" />
                      <span className="font-medium">Kuis Interaktif</span>
                    </div>
                  </div>
                  <button 
                    onClick={handleQuizNavigation}
                    className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
                  >
                    <Shield className="w-5 h-5" />
                    Mulai Kuis Sekarang
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeLevel && activeLevel.component}
      </main>
      
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-20">
        <Footer />
      </footer>
    </div>
  );
}