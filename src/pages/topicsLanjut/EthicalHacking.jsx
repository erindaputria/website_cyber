import { Bug, Shield, Terminal, Wifi, Code, ChevronRight, ChevronLeft, Target, Fingerprint, Key, Search, Zap } from 'lucide-react';
import { useState } from 'react';

export const EthicalHacking = {
  id: 1,
  title: "Teknik Hacking Etis",
  icon: <Bug className="w-5 h-5 mr-3 text-red-500" />,
  content: (
    <EthicalHackingContent />
  )
};

function EthicalHackingContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' or 'quiz'

  if (currentView === 'quiz') {
    return <EthicalHackingQuiz onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Bug className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Teknik Hacking Etis</h2>
            <p className="text-blue-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Ethical hacking dilakukan untuk mengidentifikasi kerentanan sebelum penyerang nyata menemukannya. 
              Mengikuti metodologi terstruktur untuk memastikan cakupan yang komprehensif dan hasil yang dapat ditindaklanjuti.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#2563eb" />
          </svg>
        </div>
      </div>
      
      {/* Pentesting Phases Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Phases Card */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Terminal className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-blue-800 text-lg">
              Fase Penetration Testing
            </h4>
          </div>
          <ol className="list-decimal list-inside space-y-4">
            <li className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h5 className="font-medium text-blue-700 mb-1 flex items-center">
                <Search className="w-4 h-4 mr-2" />
                Reconnaissance
              </h5>
              <p className="text-sm text-gray-600 ml-6">
                Pengumpulan informasi pasif (OSINT) dan aktif (scanning langsung) tentang target
              </p>
            </li>
            <li className="bg-sky-50 p-4 rounded-lg border border-sky-100">
              <h5 className="font-medium text-sky-700 mb-1 flex items-center">
                <Wifi className="w-4 h-4 mr-2" />
                Scanning
              </h5>
              <p className="text-sm text-gray-600 ml-6">
                Identifikasi port terbuka, services, dan kerentanan potensial menggunakan tools seperti Nmap
              </p>
            </li>
            <li className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
              <h5 className="font-medium text-cyan-700 mb-1 flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Gaining Access
              </h5>
              <p className="text-sm text-gray-600 ml-6">
                Eksploitasi kerentanan menggunakan framework seperti Metasploit atau exploit custom
              </p>
            </li>
            <li className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <h5 className="font-medium text-indigo-700 mb-1 flex items-center">
                <Fingerprint className="w-4 h-4 mr-2" />
                Maintaining Access
              </h5>
              <p className="text-sm text-gray-600 ml-6">
                Pemeliharaan akses melalui backdoor atau persistence mechanisms untuk penilaian dampak
              </p>
            </li>
            <li className="bg-blue-100 p-4 rounded-lg border border-blue-200">
              <h5 className="font-medium text-blue-800 mb-1 flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Covering Tracks
              </h5>
              <p className="text-sm text-gray-600 ml-6">
                Analisis kemampuan deteksi sistem dan penghapusan jejak aktivitas testing
              </p>
            </li>
          </ol>
        </div>
        
        {/* Techniques Card */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-blue-800 text-lg">
              Teknik Lanjutan
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h5 className="font-medium text-blue-700 mb-1">Advanced Persistent Threat Simulation</h5>
              <p className="text-sm text-gray-600">
                Meniru taktik, teknik, dan prosedur (TTPs) aktor ancaman tingkat lanjut
              </p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <h5 className="font-medium text-indigo-700 mb-1">Binary Reverse Engineering</h5>
              <p className="text-sm text-gray-600">
                Analisis kode biner untuk menemukan kerentanan zero-day
              </p>
            </div>
            <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
              <h5 className="font-medium text-sky-700 mb-1">Memory Corruption Attacks</h5>
              <p className="text-sm text-gray-600">
                Eksploitasi buffer overflow, use-after-free, dan kerentanan memori lainnya
              </p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
              <h5 className="font-medium text-cyan-700 mb-1">ICS/SCADA System Testing</h5>
              <p className="text-sm text-gray-600">
                Pengujian keamanan sistem kontrol industri dan infrastruktur kritis
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tools Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <Terminal className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="font-bold text-2xl text-blue-900">Tools Hacking Etis</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">Metasploit Framework</h5>
            <p className="text-sm text-gray-600">
              Platform untuk pengembangan dan eksekusi exploit terhadap target remote dengan ribuan modul eksploitasi.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-indigo-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">Burp Suite Pro</h5>
            <p className="text-sm text-gray-600">
              Platform terintegrasi untuk pengujian keamanan aplikasi web dengan scanner kerentanan otomatis.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-cyan-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-cyan-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">Cobalt Strike</h5>
            <p className="text-sm text-gray-600">
              Platform simulasi ancaman untuk tim red team dengan kemampuan post-exploitation dan C2 yang canggih.
            </p>
          </div>
        </div>
      </div>

      {/* Quiz CTA Section */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-200 shadow-md">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-md mx-auto mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-xl md:text-2xl text-gray-800 mb-3">
            Uji Pemahaman Anda
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami konsep hacking etis dan penetration testing.
          </p>
          <button
            onClick={() => setCurrentView('quiz')}
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full group shadow-md hover:shadow-lg transition-all duration-300 text-sm"
          >
            <span className="relative z-10 flex items-center">
              Mulai Tes Pemahaman
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Quiz Component
function EthicalHackingQuiz({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Apa tujuan utama dari ethical hacking?",
      options: [
        "Mengidentifikasi kerentanan sebelum penyerang nyata menemukannya",
        "Mengambil alih sistem untuk keuntungan pribadi",
        "Membuktikan keahlian hacking tanpa izin",
        "Mengumpulkan data sensitif untuk dijual"
      ],
      correct: 0
    },
    {
      q: "Fase mana dalam penetration testing yang melibatkan pengumpulan informasi awal?",
      options: [
        "Reconnaissance",
        "Scanning",
        "Gaining Access",
        "Maintaining Access"
      ],
      correct: 0
    },
    {
      q: "Tool apa yang paling cocok untuk pengujian keamanan aplikasi web?",
      options: [
        "Metasploit Framework",
        "Burp Suite Pro",
        "Cobalt Strike",
        "Wireshark"
      ],
      correct: 1
    },
    {
      q: "Apa yang dimaksud dengan APT simulation dalam konteks ethical hacking?",
      options: [
        "Meniru taktik aktor ancaman tingkat lanjut",
        "Menguji kecepatan jaringan",
        "Mensimulasikan serangan DDoS",
        "Menguji ketahanan firewall"
      ],
      correct: 0
    },
    {
      q: "Mengapa fase 'Covering Tracks' penting dalam penetration testing?",
      options: [
        "Untuk menguji kemampuan deteksi sistem",
        "Untuk menyembunyikan aktivitas ilegal",
        "Untuk mempercepat proses testing",
        "Untuk menghindari pembayaran lisensi tool"
      ],
      correct: 0
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
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Quiz Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl mb-1">Kuis Pemahaman</h3>
              <h2 className="text-2xl font-bold">Teknik Hacking Etis</h2>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <Bug className="w-8 h-8" />
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
                    className="bg-gradient-to-r from-blue-600 to-indigo-700 h-2.5 rounded-full transition-all duration-500"
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
                  className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold hover:from-blue-700 hover:to-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
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
                  correctCount >= 3 ? 'text-blue-600' : 'text-blue-400'
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
                          correctCount >= 3 ? 'text-blue-500' : 'text-blue-400'
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
                    ? "Anda menguasai materi ethical hacking dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik tentang ethical hacking."
                    : "Anda perlu mempelajari kembali materi ethical hacking."}
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
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold hover:from-blue-700 hover:to-indigo-800 transition-colors shadow-md"
                >
                  Kembali ke Materi
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}