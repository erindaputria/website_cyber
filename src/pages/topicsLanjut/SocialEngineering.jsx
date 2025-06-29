import { Users, Monitor, Clipboard, ChevronRight, ChevronLeft, Target, AlertTriangle, Mail, Phone, Link, Shield } from 'lucide-react';
import { useState } from 'react';

export const SocialEngineering = {
  id: 2,
  title: "SKIM (Social Engineering)",
  icon: <Users className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <SocialEngineeringContent />
  )
};

function SocialEngineeringContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' or 'quiz'

  if (currentView === 'quiz') {
    return <SocialEngineeringQuiz onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Users className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">SKIM (Social Engineering)</h2>
            <p className="text-blue-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Social Engineering memanfaatkan kelemahan manusia sebagai titik masuk. 
              98% serangan cyber melibatkan teknik ini dalam beberapa bentuk, menggabungkan manipulasi psikologis dengan eksploitasi teknis.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#2563eb" />
          </svg>
        </div>
      </div>
      
      {/* Framework Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Techniques Card */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-blue-800 text-lg">
              Teknik Social Engineering
            </h4>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h5 className="font-medium text-blue-700 mb-1 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Phishing
              </h5>
              <p className="text-sm text-gray-600 ml-6">
                Email, smishing (SMS), vishing (voice) dengan tujuan mencuri kredensial atau menginstal malware
              </p>
            </div>
            <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
              <h5 className="font-medium text-sky-700 mb-1 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Pretexting
              </h5>
              <p className="text-sm text-gray-600 ml-6">
                Membuat skenario palsu untuk mendapatkan informasi sensitif (misal: berpura-pura sebagai IT support)
              </p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
              <h5 className="font-medium text-cyan-700 mb-1 flex items-center">
                <Link className="w-4 h-4 mr-2" />
                Baiting
              </h5>
              <p className="text-sm text-gray-600 ml-6">
                Menawarkan umpan fisik (USB) atau digital (download gratis) yang mengandung malware
              </p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <h5 className="font-medium text-indigo-700 mb-1 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Quid pro quo
              </h5>
              <p className="text-sm text-gray-600 ml-6">
                Menawarkan sesuatu sebagai imbalan (bantuan teknis) untuk mendapatkan akses atau informasi
              </p>
            </div>
          </div>
        </div>
        
        {/* Keylogging & Info Manipulation Card */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Monitor className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-blue-800 text-lg">
              Keylogging & Manipulasi Informasi
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h5 className="font-medium text-blue-700 mb-1">Hardware Keyloggers</h5>
              <p className="text-sm text-gray-600">
                Perangkat fisik yang dipasang antara keyboard dan komputer untuk merekam ketikan
              </p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <h5 className="font-medium text-indigo-700 mb-1">Memory Injection</h5>
              <p className="text-sm text-gray-600">
                Menyuntikkan kode berbahaya ke memori proses untuk menangkap input pengguna
              </p>
            </div>
            <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
              <h5 className="font-medium text-sky-700 mb-1">Deepfake Technology</h5>
              <p className="text-sm text-gray-600">
                Menggunakan AI untuk membuat video atau audio palsu yang meyakinkan
              </p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
              <h5 className="font-medium text-cyan-700 mb-1">Reputation Attacks</h5>
              <p className="text-sm text-gray-600">
                Menyebarkan informasi palsu untuk merusak reputasi individu atau organisasi
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Case Studies Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="font-bold text-2xl text-blue-900">Studi Kasus Social Engineering</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">Twitter Bitcoin Scam (2020)</h5>
            <p className="text-sm text-gray-600">
              Akun Twitter terverifikasi tinggi diretas melalui social engineering terhadap karyawan, memposting scam Bitcoin yang menghasilkan $120,000 dalam beberapa jam.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-indigo-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">Ubiquiti Breach (2021)</h5>
            <p className="text-sm text-gray-600">
              Penyerang mendapatkan akses ke sistem cloud melalui social engineering canggih, menyebabkan kerugian $46 juta dari manipulasi informasi keuangan.
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
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami konsep SKIM dan teknik social engineering.
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
function SocialEngineeringQuiz({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Apa persentase serangan cyber yang melibatkan social engineering dalam beberapa bentuk?",
      options: [
        "98%",
        "75%",
        "50%",
        "25%"
      ],
      correct: 0
    },
    {
      q: "Teknik social engineering mana yang melibatkan pembuatan skenario palsu untuk mendapatkan informasi?",
      options: [
        "Pretexting",
        "Phishing",
        "Baiting",
        "Quid pro quo"
      ],
      correct: 0
    },
    {
      q: "Apa yang dimaksud dengan 'smishing' dalam konteks social engineering?",
      options: [
        "Phishing melalui SMS",
        "Phishing melalui media sosial",
        "Phishing melalui telepon",
        "Phishing melalui surat"
      ],
      correct: 0
    },
    {
      q: "Apa tujuan utama dari serangan baiting?",
      options: [
        "Menginstal malware melalui umpan fisik/digital",
        "Mencuri kredensial melalui email palsu",
        "Mendapatkan akses fisik ke gedung",
        "Memanipulasi informasi keuangan"
      ],
      correct: 0
    },
    {
      q: "Teknologi apa yang digunakan untuk membuat video atau audio palsu yang meyakinkan?",
      options: [
        "Deepfake",
        "Keylogger",
        "Phishing kit",
        "Ransomware"
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
              <h2 className="text-2xl font-bold">Social Engineering (SKIM)</h2>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <Users className="w-8 h-8" />
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
                    ? "Anda menguasai materi social engineering dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik tentang social engineering."
                    : "Anda perlu mempelajari kembali materi social engineering."}
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