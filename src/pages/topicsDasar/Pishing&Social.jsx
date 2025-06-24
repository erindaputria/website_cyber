import { Mail, User, AlertTriangle, ArrowLeft, Shield, Lock, ChevronRight, ChevronLeft, Target } from 'lucide-react';
import { useState } from 'react';

export const PhishingDanSocialEngineering = {
  id: 3,
  title: "Phishing dan Social Engineering",
  icon: <Mail className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <PhishingSocialContent />
  )
};

function PhishingSocialContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' atau 'quiz'

  if (currentView === 'quiz') {
    return <QuizPage onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center mb-4">
          <Shield className="w-8 h-8 mr-3" />
          <h3 className="text-2xl font-bold">Keamanan Digital</h3>
        </div>
        <h2 className="text-3xl font-bold mb-3">Phishing & Social Engineering</h2>
        <p className="text-blue-100 max-w-2xl">
          Pelajari teknik penipuan digital dan cara melindungi diri Anda dari serangan yang mengancam keamanan data pribadi.
        </p>
      </div>
      
      {/* Materi */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200 shadow-sm">
        <div className="flex items-start mb-4">
          <AlertTriangle className="w-6 h-6 mr-3 text-orange-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-xl text-orange-800 mb-2">Apa itu Phishing?</h4>
            <p className="text-gray-700 leading-relaxed">
              Phishing adalah teknik penipuan digital dimana penyerang menyamar sebagai entitas tepercaya untuk mencuri informasi sensitif seperti kredensial login, detail kartu kredit, atau data pribadi lainnya.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-start mb-4">
            <div className="bg-red-100 p-2 rounded-lg mr-4">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Jenis Serangan Phishing
            </h4>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 mr-3">1</span>
              <div>
                <strong className="text-gray-800">Email Phishing:</strong>
                <p className="text-gray-600 text-sm">Email palsu yang meniru organisasi resmi</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 mr-3">2</span>
              <div>
                <strong className="text-gray-800">Spear Phishing:</strong>
                <p className="text-gray-600 text-sm">Target khusus dengan informasi personal</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 mr-3">3</span>
              <div>
                <strong className="text-gray-800">Whaling:</strong>
                <p className="text-gray-600 text-sm">Menargetkan eksekutif level tinggi</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 mr-3">4</span>
              <div>
                <strong className="text-gray-800">Smishing & Vishing:</strong>
                <p className="text-gray-600 text-sm">Phishing via SMS atau panggilan telepon</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-start mb-4">
            <div className="bg-purple-100 p-2 rounded-lg mr-4">
              <User className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Social Engineering
            </h4>
          </div>
          <p className="text-gray-700 mb-4 text-sm">
            Teknik manipulasi psikologis untuk membuat korban membocorkan informasi atau melakukan tindakan tertentu.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <h5 className="font-medium text-gray-800 text-sm mb-1">Pretexting</h5>
              <p className="text-gray-600 text-xs">Membuat skenario palsu</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <h5 className="font-medium text-gray-800 text-sm mb-1">Baiting</h5>
              <p className="text-gray-600 text-xs">Menawarkan umpan menarik</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <h5 className="font-medium text-gray-800 text-sm mb-1">Tailgating</h5>
              <p className="text-gray-600 text-xs">Masuk ke area terbatas</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <h5 className="font-medium text-gray-800 text-sm mb-1">Quid Pro Quo</h5>
              <p className="text-gray-600 text-xs">Pertukaran imbalan</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 shadow-sm">
        <div className="flex items-start mb-5">
          <div className="bg-blue-100 p-2 rounded-lg mr-4">
            <Lock className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-bold text-xl text-blue-800 mb-3">Cara Mengenali dan Mencegah</h4>
            <p className="text-blue-700 mb-4">Ketahui tanda-tanda dan lindungi diri Anda dari serangan phishing</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h5 className="font-bold text-gray-700 mb-3 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">!</span>
              Tanda-tanda Phishing
            </h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-600">Alamat email pengirim tidak resmi</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-600">Salam umum seperti "Pelanggan yang terhormat"</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-600">Permintaan informasi pribadi</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-600">Link atau lampiran mencurigakan</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-600">Rasa urgensi yang dibuat-buat</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h5 className="font-bold text-gray-700 mb-3 flex items-center">
              <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
              Langkah Pencegahan
            </h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-600">Verifikasi pengirim sebelum merespon</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-600">Jangan klik link mencurigakan</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-600">Gunakan autentikasi dua faktor (2FA)</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-600">Laporkan email phishing ke tim IT</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span className="text-gray-600">Ikuti pelatihan keamanan berkala</span>
              </li>
            </ul>
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
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami materi pishing social engineering.
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

// Komponen halaman kuis terpisah
function QuizPage({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Apa itu phishing?",
      options: [
        "Teknik manipulasi psikologis secara langsung",
        "Teknik penipuan digital dengan menyamar sebagai entitas tepercaya",
        "Serangan fisik ke perangkat komputer",
        "Metode enkripsi data"
      ],
      correct: 1
    },
    {
      q: "Contoh social engineering berikut adalah...",
      options: [
        "Mengirim email palsu untuk mencuri data",
        "Menggunakan firewall untuk melindungi jaringan",
        "Mengupdate antivirus secara rutin",
        "Menggunakan password yang kuat"
      ],
      correct: 0
    },
    {
      q: "Tanda-tanda email phishing adalah...",
      options: [
        "Alamat pengirim resmi dan personalisasi",
        "Permintaan informasi pribadi dan link mencurigakan",
        "Tidak ada lampiran",
        "Selalu menggunakan bahasa formal"
      ],
      correct: 1
    },
    {
      q: "Langkah pencegahan phishing yang benar adalah...",
      options: [
        "Membuka semua lampiran email",
        "Mengabaikan pelatihan keamanan",
        "Verifikasi pengirim sebelum merespon",
        "Membagikan password ke teman"
      ],
      correct: 2
    },
    {
      q: "Apa itu spear phishing?",
      options: [
        "Phishing yang menargetkan secara acak",
        "Phishing via telepon",
        "Phishing yang menargetkan individu tertentu dengan informasi personal",
        "Phishing melalui media sosial"
      ],
      correct: 2
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl mb-1">Kuis Pemahaman</h3>
              <h2 className="text-2xl font-bold">Phishing & Social Engineering</h2>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <Shield className="w-8 h-8" />
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
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-500"
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
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full border mr-4 flex items-center justify-center
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
                  className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
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
                    ? "Anda menguasai materi tentang phishing dan social engineering dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik, tapi masih ada ruang untuk peningkatan."
                    : "Anda perlu mempelajari kembali materi tentang phishing dan social engineering."}
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