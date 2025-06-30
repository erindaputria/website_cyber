import { User, Shield, Lock, Fingerprint, Target, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export const AutentikasiOtorisasi = {
  id: 5,
  title: "Autentikasi dan Otorisasi",
  icon: <Shield className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <AutentikasiOtorisasiContent />
  )
};

function AutentikasiOtorisasiContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' or 'quiz'

  if (currentView === 'quiz') {
    return <AutentikasiOtorisasiQuiz onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-800 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Autentikasi dan Otorisasi</h2>
            <p className="text-blue-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Autentikasi adalah proses verifikasi identitas pengguna, sedangkan otorisasi menentukan hak akses apa yang dimiliki 
              pengguna yang telah diautentikasi. Kedua konsep ini adalah fondasi keamanan sistem informasi modern.
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
        {/* Authentication Methods Card */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-blue-800 text-lg">Metode Autentikasi</h4>
          </div>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-800">Faktor Pengetahuan</span>
                  <p className="text-sm text-gray-600 mt-1">Password, PIN, pertanyaan keamanan (something you know)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-800">Faktor Kepemilikan</span>
                  <p className="text-sm text-gray-600 mt-1">Token fisik, smartphone, kode OTP (something you have)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-800">Faktor Inheren</span>
                  <p className="text-sm text-gray-600 mt-1">Biometrik: sidik jari, pengenalan wajah (something you are)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-800">Multi-Faktor Autentikasi (MFA)</span>
                  <p className="text-sm text-gray-600 mt-1">Kombinasi dua atau lebih faktor untuk keamanan lebih</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Authorization Models Card */}
        <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-7 rounded-2xl border border-indigo-200 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 p-2 rounded-lg mr-3">
              <Lock className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-indigo-800 text-lg">Model Otorisasi</h4>
          </div>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-800">RBAC (Role-Based)</span>
                  <p className="text-sm text-gray-600 mt-1">Akses berdasarkan peran pengguna dalam organisasi</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-800">ABAC (Attribute-Based)</span>
                  <p className="text-sm text-gray-600 mt-1">Akses berdasarkan atribut pengguna, resource, dan lingkungan</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-800">MAC (Mandatory)</span>
                  <p className="text-sm text-gray-600 mt-1">Akses ditentukan oleh kebijakan pusat (militer/government)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <span className="font-medium text-gray-800">DAC (Discretionary)</span>
                  <p className="text-sm text-gray-600 mt-1">Pemilik resource menentukan akses</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Standards Section */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <Fingerprint className="w-6 h-6 text-green-600" />
          </div>
          <h4 className="font-bold text-2xl text-green-900">Standar dan Protokol</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="bg-green-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Fingerprint className="w-6 h-6 text-green-600" />
            </div>
            <h5 className="font-medium text-green-600 mb-2">OAuth 2.0</h5>
            <p className="text-sm text-gray-600">
              Framework otorisasi untuk akses terbatas ke resource pengguna
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="bg-green-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h5 className="font-medium text-green-600 mb-2">OpenID Connect</h5>
            <p className="text-sm text-gray-600">
              Lapisan identitas di atas OAuth 2.0 untuk autentikasi
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="bg-green-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-green-600" />
            </div>
            <h5 className="font-medium text-green-600 mb-2">SAML</h5>
            <p className="text-sm text-gray-600">
              Standar pertukaran data autentikasi dan otorisasi berbasis XML
            </p>
          </div>
        </div>
      </div>

      {/* Best Practices Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="font-bold text-2xl text-blue-900">Praktik Terbaik</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h5 className="font-medium text-blue-600 mb-2">Multi-Faktor Autentikasi</h5>
            <p className="text-sm text-gray-600">
              Selalu gunakan MFA untuk akun-akun penting dan administratif
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="bg-indigo-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <User className="w-6 h-6 text-indigo-600" />
            </div>
            <h5 className="font-medium text-blue-600 mb-2">Principle of Least Privilege</h5>
            <p className="text-sm text-gray-600">
              Berikan hanya hak akses minimal yang diperlukan untuk menyelesaikan tugas
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h5 className="font-medium text-blue-600 mb-2">Audit Berkala</h5>
            <p className="text-sm text-gray-600">
              Tinjau dan revisi hak akses secara berkala untuk memastikan relevansi
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
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami materi autentikasi dan otorisasi.
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
function AutentikasiOtorisasiQuiz({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Apa perbedaan utama antara autentikasi dan otorisasi?",
      options: [
        "Autentikasi mengatur hak akses, otorisasi memverifikasi identitas",
        "Autentikasi memverifikasi identitas, otorisasi mengatur hak akses",
        "Keduanya memiliki fungsi yang sama",
        "Autentikasi untuk admin, otorisasi untuk pengguna biasa"
      ],
      correct: 1
    },
    {
      q: "Manakah yang BUKAN termasuk faktor autentikasi?",
      options: [
        "Something you know (password)",
        "Something you have (token)",
        "Something you are (biometrik)",
        "Something you want (keinginan)"
      ],
      correct: 3
    },
    {
      q: "Model otorisasi apa yang menggunakan konsep peran pengguna?",
      options: [
        "RBAC (Role-Based Access Control)",
        "ABAC (Attribute-Based Access Control)",
        "MAC (Mandatory Access Control)",
        "DAC (Discretionary Access Control)"
      ],
      correct: 0
    },
    {
      q: "Protokol apa yang digunakan untuk autentikasi berbasis token?",
      options: [
        "OAuth 2.0",
        "FTP",
        "HTTP",
        "TCP/IP"
      ],
      correct: 0
    },
    {
      q: "Apa manfaat utama dari Multi-Faktor Autentikasi (MFA)?",
      options: [
        "Meningkatkan kecepatan login",
        "Mengurangi biaya infrastruktur",
        "Meningkatkan keamanan dengan lapisan verifikasi tambahan",
        "Membuat antarmuka lebih menarik"
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
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Quiz Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl mb-1">Kuis Pemahaman</h3>
              <h2 className="text-2xl font-bold">Autentikasi & Otorisasi</h2>
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
                  correctCount >= 3 ? 'text-blue-600' : 'text-red-600'
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
                          correctCount >= 3 ? 'text-blue-500' : 'text-red-500'
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
                    ? "Anda menguasai materi tentang autentikasi dan otorisasi dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik tentang autentikasi dan otorisasi."
                    : "Anda perlu mempelajari kembali materi autentikasi dan otorisasi."}
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