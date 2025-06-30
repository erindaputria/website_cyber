import { Key, Lock, Server, Cpu, Database, ChevronRight, ChevronLeft, ArrowLeft, Target, Shield } from 'lucide-react';
import { useState } from 'react';

export const ManajemenKunciKriptografi = {
  id: 3,
  title: "Manajemen Kunci Kriptografi",
  icon: <Key className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <ManajemenKunciKriptografiContent />
  )
};

function ManajemenKunciKriptografiContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' or 'quiz'

  if (currentView === 'quiz') {
    return <ManajemenKunciKriptografiQuiz onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-800 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Key className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Manajemen Kunci Kriptografi</h2>
            <p className="text-blue-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Proses mengelola siklus hidup kunci enkripsi, termasuk pembuatan, distribusi, penyimpanan, rotasi, dan penghapusan.
              Sistem yang aman bergantung pada manajemen kunci yang tepat.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#3b82f6" />
          </svg>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Key Lifecycle Card */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-blue-800 text-lg">Siklus Hidup Kunci</h4>
          </div>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li className="leading-snug">Generasi kunci (Key generation)</li>
            <li className="leading-snug">Distribusi kunci (Key distribution)</li>
            <li className="leading-snug">Penyimpanan kunci (Key storage)</li>
            <li className="leading-snug">Penggunaan kunci (Key usage)</li>
            <li className="leading-snug">Rotasi kunci (Key rotation)</li>
            <li className="leading-snug">Pencabutan kunci (Key revocation)</li>
            <li className="leading-snug">Penghapusan kunci (Key destruction)</li>
          </ol>
        </div>
        
        {/* Key Management Systems Card */}
        <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-7 rounded-2xl border border-indigo-200 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 p-2 rounded-lg mr-3">
              <Server className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-indigo-800 text-lg">Sistem Manajemen Kunci</h4>
          </div>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-800">HSM (Hardware Security Module)</span>
                  <p className="text-sm text-gray-600 mt-1">Perangkat fisik untuk mengamankan proses kriptografi dan mengelola kunci</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-800">KMS (Key Management Service)</span>
                  <p className="text-sm text-gray-600 mt-1">Layanan cloud untuk mengelola kunci enkripsi (AWS KMS, Google Cloud KMS)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-800">PKI (Public Key Infrastructure)</span>
                  <p className="text-sm text-gray-600 mt-1">Kerangka kerja untuk mengelola sertifikat digital dan kunci publik</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Best Practices Section */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-purple-100 p-3 rounded-lg mr-4">
            <Shield className="w-6 h-6 text-purple-600" />
          </div>
          <h4 className="font-bold text-2xl text-purple-900">Praktik Terbaik</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            <h5 className="font-medium text-purple-600 mb-2">Rotasi Kunci</h5>
            <p className="text-sm text-gray-600">
              Rotasi kunci secara berkala (setiap 90 hari) dan setelah insiden keamanan
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="bg-indigo-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-indigo-600" />
            </div>
            <h5 className="font-medium text-purple-600 mb-2">Penyimpanan Aman</h5>
            <p className="text-sm text-gray-600">
              Pisahkan kunci dari data yang dienkripsi, gunakan HSM untuk kunci master
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="bg-purple-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Key className="w-6 h-6 text-purple-600" />
            </div>
            <h5 className="font-medium text-purple-600 mb-2">Least Privilege</h5>
            <p className="text-sm text-gray-600">
              Batasi akses ke kunci hanya untuk entitas yang benar-benar membutuhkan
            </p>
          </div>
        </div>
      </div>

      {/* Quiz CTA Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-200 shadow-md">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md mx-auto mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-xl md:text-2xl text-gray-800 mb-3">
            Uji Pemahaman Anda
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami materi manajemen kunci kriptografi.
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
function ManajemenKunciKriptografiQuiz({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Apa tujuan utama dari rotasi kunci kriptografi?",
      options: [
        "Meningkatkan performa enkripsi",
        "Membatasi dampak jika kunci dikompromikan",
        "Mengurangi ukuran kunci",
        "Membuat kunci lebih mudah diingat"
      ],
      correct: 1
    },
    {
      q: "Manakah yang BUKAN komponen dari Public Key Infrastructure (PKI)?",
      options: [
        "Certificate Authority (CA)",
        "Hardware Security Module (HSM)",
        "Registration Authority (RA)",
        "Certificate Revocation List (CRL)"
      ],
      correct: 1
    },
    {
      q: "Berapa frekuensi yang direkomendasikan untuk rotasi kunci simetris?",
      options: [
        "Setiap tahun",
        "Setiap 90 hari",
        "Hanya saat terjadi insiden keamanan",
        "Tidak perlu dirotasi"
      ],
      correct: 1
    },
    {
      q: "Apa keuntungan utama menggunakan Hardware Security Module (HSM)?",
      options: [
        "Menyediakan penyimpanan dan pemrosesan kunci yang aman",
        "Membuat enkripsi lebih cepat dari software",
        "Menggantikan kebutuhan firewall",
        "Menyederhanakan pengembangan aplikasi"
      ],
      correct: 0
    },
    {
      q: "Prinsip apa yang harus diterapkan untuk akses ke kunci kriptografi?",
      options: [
        "Akses terbuka untuk semua administrator",
        "Least privilege",
        "Akses berdasarkan senioritas",
        "Tidak perlu pembatasan akses"
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
      <div className="flex items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Materi
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Quiz Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl mb-1">Kuis Pemahaman</h3>
              <h2 className="text-2xl font-bold">Manajemen Kunci Kriptografi</h2>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <Key className="w-8 h-8" />
            </div>
          </div>
        </div>
        
        <div className="p-8">
          {!showResult ? (
            <div>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Pertanyaan {step + 1} dari {questions.length}</span>
                  <span>{Math.round(((step + 1) / questions.length) * 100)}% selesai</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Pertanyaan */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">
                  {questions[step].q}
                </h4>
                <div className="space-y-4">
                  {questions[step].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200
                        ${answers[step] === idx
                          ? 'bg-blue-50 border-blue-300 font-medium text-blue-800 shadow-sm'
                          : 'bg-gray-50 border-gray-200 hover:border-blue-200 hover:bg-blue-50'}
                      `}
                    >
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full border mr-4 mt-0.5 flex items-center justify-center
                          ${answers[step] === idx 
                            ? 'bg-blue-600 border-blue-600 text-white' 
                            : 'bg-white border-gray-300'}
                        `}>
                          {answers[step] === idx && (
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="flex justify-between pt-4 border-t border-gray-200">
                <button
                  onClick={handlePrev}
                  disabled={step === 0}
                  className="flex items-center px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Sebelumnya
                </button>
                <button
                  onClick={handleNext}
                  disabled={answers[step] === null}
                  className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
                >
                  {step === questions.length - 1 ? "Lihat Hasil" : "Selanjutnya"}
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          ) : (
            /* Hasil */
            <div className="text-center">
              <div className="mb-8">
                <div className={`text-5xl font-bold mb-4 ${
                  correctCount === questions.length ? 'text-green-600' :
                  correctCount >= 3 ? 'text-blue-600' : 'text-orange-600'
                }`}>
                  {correctCount} / {questions.length}
                </div>
                
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-40">
                    <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200 opacity-30"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="8"
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
                      <span className="text-3xl font-bold text-gray-800">
                        {Math.round((correctCount / questions.length) * 100)}%
                      </span>
                      <span className="text-sm text-gray-500 mt-1">Skor Anda</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {correctCount === questions.length
                    ? "🎉 Luar Biasa!"
                    : correctCount >= 3
                    ? "👍 Bagus!"
                    : "📚 Tetap Semangat!"}
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  {correctCount === questions.length
                    ? "Anda menguasai materi tentang manajemen kunci kriptografi dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik tentang manajemen kunci kriptografi."
                    : "Anda perlu mempelajari kembali materi manajemen kunci kriptografi."}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={restartQuiz}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-colors shadow-md"
                >
                  Coba Lagi
                </button>
                <button
                  onClick={onBack}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-colors shadow-md"
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