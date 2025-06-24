import { Shield, AlertTriangle, BarChart2, Lock, Globe, Target, Users, Clock, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export const PengenalanCyber = {
  id: 0,
  title: "Pengenalan Keamanan Cyber",
  icon: <Shield className="w-5 h-5 mr-3 text-blue-600" />,
  content: (
    <CyberSecurityContent />
  )
};

function CyberSecurityContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' or 'quiz'

  if (currentView === 'quiz') {
    return <QuizPage onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-4 right-4 opacity-10">
          <Shield className="w-24 h-24 text-white" />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-bold text-2xl md:text-3xl mb-4 text-white leading-tight">
            Apa itu Keamanan Cyber?
          </h4>
          <p className="text-blue-100 leading-relaxed text-base md:text-lg max-w-4xl">
            Keamanan cyber adalah praktik melindungi sistem, jaringan, program, dan data dari serangan digital. 
            Di era digital saat ini, keamanan cyber menjadi sangat penting karena hampir semua aspek kehidupan 
            kita terhubung dengan internet dan teknologi digital.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
              🛡️ Perlindungan Data
            </span>
            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
              🔒 Keamanan Sistem
            </span>
            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
              🌐 Keamanan Jaringan
            </span>
          </div>
        </div>
      </div>
      
      {/* Main Content Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Threats Card */}
        <div className="group bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-red-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-xl text-gray-800">Ancaman Umum</h4>
              <p className="text-red-600 text-xs font-medium">Yang perlu diwaspadai</p>
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { name: "Malware", desc: "Virus, worm, trojan yang merusak sistem", icon: "🦠" },
              { name: "Phishing", desc: "Penipuan untuk mencuri informasi pribadi", icon: "🎣" },
              { name: "Serangan DDoS", desc: "Membanjiri server hingga tidak dapat diakses", icon: "⚡" },
              { name: "Eksploitasi Software", desc: "Memanfaatkan celah keamanan program", icon: "🔓" },
              { name: "Brute Force", desc: "Menebak password dengan percobaan berulang", icon: "🔨" }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-3 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-colors duration-200">
                <span className="text-xl mr-3 flex-shrink-0">{item.icon}</span>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-0.5 text-sm">{item.name}</h5>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Principles Card */}
        <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-xl text-gray-800">Prinsip Dasar</h4>
              <p className="text-green-600 text-xs font-medium">Fondasi keamanan cyber</p>
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { name: "Kerahasiaan", desc: "Data hanya dapat diakses oleh pihak yang berwenang", icon: "🔐" },
              { name: "Integritas", desc: "Data tidak berubah atau rusak tanpa otorisasi", icon: "✅" },
              { name: "Ketersediaan", desc: "Sistem dapat diakses saat dibutuhkan", icon: "🔄" },
              { name: "Autentikasi", desc: "Memverifikasi identitas pengguna atau sistem", icon: "👤" },
              { name: "Non-repudiation", desc: "Tidak dapat menyangkal tindakan yang dilakukan", icon: "📝" }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-3 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-colors duration-200">
                <span className="text-xl mr-3 flex-shrink-0">{item.icon}</span>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-0.5 text-sm">{item.name}</h5>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 p-8 rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-4 left-4 opacity-10">
          <BarChart2 className="w-24 h-24 text-white" />
        </div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mb-3">
              <BarChart2 className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-2xl md:text-3xl text-white mb-3">
              Statistik Penting Keamanan Cyber
            </h4>
            <p className="text-purple-100 text-sm max-w-2xl mx-auto">
              Data dan fakta yang menunjukkan pentingnya keamanan cyber di era digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                value: "95%", 
                label: "pelanggaran disebabkan oleh kesalahan manusia", 
                icon: <Users className="w-6 h-6" />,
                color: "from-pink-400 to-red-500"
              },
              {
                value: "70%", 
                label: "pengurangan risiko dengan pelatihan keamanan", 
                icon: <Shield className="w-6 h-6" />,
                color: "from-green-400 to-emerald-500"
              },
              {
                value: "39 detik", 
                label: "frekuensi serangan cyber terjadi di dunia", 
                icon: <Clock className="w-6 h-6" />,
                color: "from-yellow-400 to-orange-500"
              }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]">
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl md:text-3xl text-white mb-1">
                      {stat.value}
                    </div>
                    <p className="text-purple-100 text-xs leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz CTA Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl border-2 border-blue-100 shadow-md">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md mx-auto mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-xl md:text-2xl text-gray-800 mb-3">
            Uji Pemahaman Anda
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami materi pengenalan keamanan cyber.
          </p>
          <button
            onClick={() => setCurrentView('quiz')}
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group shadow-md hover:shadow-lg transition-all duration-300 text-sm"
          >
            <span className="relative z-10 flex items-center">
              Mulai Tes Pemahaman
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Quiz Component
function QuizPage({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Apa definisi keamanan cyber yang paling tepat?",
      options: [
        "Proses membuat program komputer",
        "Praktik melindungi sistem dan data dari serangan digital",
        "Teknik memperbaiki hardware komputer",
        "Metode meningkatkan kecepatan internet"
      ],
      correct: 1
    },
    {
      q: "Manakah yang BUKAN termasuk prinsip dasar keamanan cyber?",
      options: [
        "Kerahasiaan",
        "Integritas",
        "Ketersediaan",
        "Kemudahan Akses"
      ],
      correct: 3
    },
    {
      q: "Apa yang dimaksud dengan serangan DDoS?",
      options: [
        "Mencuri data pribadi pengguna",
        "Membanjiri server dengan permintaan hingga tidak dapat diakses",
        "Menginfeksi komputer dengan virus",
        "Membobol password dengan percobaan berulang"
      ],
      correct: 1
    },
    {
      q: "Berapa persen pelanggaran keamanan cyber yang disebabkan oleh kesalahan manusia?",
      options: [
        "25%",
        "50%",
        "75%",
        "95%"
      ],
      correct: 3
    },
    {
      q: "Apa tujuan utama dari autentikasi dalam keamanan cyber?",
      options: [
        "Mempercepat kinerja sistem",
        "Memverifikasi identitas pengguna atau sistem",
        "Mengenkripsi data yang dikirim",
        "Membuat backup data otomatis"
      ],
      correct: 1
    }
  ];

  const handleAnswer = (idx) => {
    const newAnswers = [...answers];
    newAnswers[step] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const correctCount = answers.filter((ans, i) => ans === questions[i].correct).length;

  const restartQuiz = () => {
    setStep(0);
    setAnswers(Array(5).fill(null));
    setShowResult(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* Header dengan tombol kembali */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-0.5 transition-transform" />
          Kembali ke Materi
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Quiz Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg mb-1">Tes Pemahaman</h3>
              <h2 className="text-xl font-bold">Pengenalan Keamanan Cyber</h2>
            </div>
            <div className="bg-white/20 p-2 rounded-md">
              <Shield className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {!showResult ? (
            <div>
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Pertanyaan {step + 1} dari {questions.length}</span>
                  <span>{Math.round(((step + 1) / questions.length) * 100)}% selesai</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Pertanyaan */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {questions[step].q}
                </h4>
                <div className="space-y-3">
                  {questions[step].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 text-sm
                        ${answers[step] === idx
                          ? 'bg-blue-50 border-blue-300 font-medium text-blue-800 shadow-sm'
                          : 'bg-gray-50 border-gray-200 hover:border-blue-200 hover:bg-blue-50'}
                      `}
                    >
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 w-4 h-4 rounded-full border mr-3 flex items-center justify-center
                          ${answers[step] === idx 
                            ? 'bg-blue-600 border-blue-600 text-white' 
                            : 'bg-white border-gray-300'}
                        `}>
                          {answers[step] === idx && (
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span>{opt}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigasi */}
              <div className="flex justify-between pt-3 border-t border-gray-200">
                <button
                  onClick={handlePrev}
                  disabled={step === 0}
                  className="flex items-center px-5 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors text-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Sebelumnya
                </button>
                <button
                  onClick={handleNext}
                  disabled={answers[step] === null}
                  className="flex items-center px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm text-sm"
                >
                  {step === questions.length - 1 ? "Lihat Hasil" : "Selanjutnya"}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ) : (
            /* Hasil */
            <div className="text-center">
              <div className="mb-6">
                <div className={`text-4xl font-bold mb-3 ${
                  correctCount === questions.length ? 'text-green-600' :
                  correctCount >= 3 ? 'text-blue-600' : 'text-orange-600'
                }`}>
                  {correctCount} / {questions.length}
                </div>
                
                <div className="flex justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        className="text-gray-200 opacity-30"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${(correctCount / questions.length) * 282.6} 282.6`}
                        className={
                          correctCount === questions.length ? 'text-green-500' :
                          correctCount >= 3 ? 'text-blue-500' : 'text-orange-500'
                        }
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-gray-800">
                        {Math.round((correctCount / questions.length) * 100)}%
                      </span>
                      <span className="text-xs text-gray-500 mt-0.5">Skor Anda</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {correctCount === questions.length
                    ? "🎉 Luar Biasa!"
                    : correctCount >= 3
                    ? "👍 Bagus!"
                    : "📚 Tetap Semangat!"}
                </h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm">
                  {correctCount === questions.length
                    ? "Anda menguasai materi pengenalan keamanan cyber dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik, tapi masih ada ruang untuk peningkatan."
                    : "Anda perlu mempelajari kembali materi tentang keamanan cyber."}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={restartQuiz}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-colors shadow-sm text-sm"
                >
                  Coba Lagi
                </button>
                <button
                  onClick={onBack}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 transition-colors shadow-sm text-sm"
                >
                  Pelajari Materi
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}