// src/topics/WebAppSecurity.jsx
import { Code, EyeOff, Network, ChevronRight, Target } from 'lucide-react';
import { useState } from 'react';

export const WebAppSecurity = {
  id: 8,
  title: "Web Application Security",
  icon: <Code className="w-5 h-5 mr-3 text-blue-500" />,
  content: <WebAppSecurityContent />
};

function WebAppSecurityContent() {
  const [currentView, setCurrentView] = useState('material');

  if (currentView === 'quiz') {
    return <WebAppQuiz onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Code className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Keamanan Aplikasi Web Modern</h2>
            <p className="text-blue-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Dengan 70% serangan cyber menargetkan aplikasi web, pemahaman mendalam tentang OWASP Top 10
              dan teknik mitigasi modern menjadi krusial untuk pengembang dan security engineer.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#2563eb" />
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Code className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            OWASP Top 10 2021
          </h4>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Injection</li>
            <li className="leading-snug">Broken Authentication</li>
            <li className="leading-snug">Sensitive Data Exposure</li>
            <li className="leading-snug">XML External Entities (XXE)</li>
            <li className="leading-snug">Broken Access Control</li>
          </ol>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <EyeOff className="w-6 h-6 mr-3 text-blue-500 bg-purple-100 p-1 rounded-full" />
            Teknik Serangan
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">SQL/NoSQL Injection</li>
            <li className="leading-snug">Cross-Site Scripting (XSS)</li>
            <li className="leading-snug">CSRF & SSRF</li>
            <li className="leading-snug">Business Logic Flaws</li>
            <li className="leading-snug">API Abuse</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Network className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Mitigasi Modern
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Web Application Firewalls (WAF)</li>
            <li className="leading-snug">Content Security Policy (CSP)</li>
            <li className="leading-snug">Secure Coding Practices</li>
            <li className="leading-snug">SAST/DAST tools</li>
            <li className="leading-snug">Zero Trust Architecture</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Framework Keamanan Web</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">OWASP ASVS</h5>
            <p className="text-sm text-gray-600">
              Application Security Verification Standard - standar untuk pengujian keamanan aplikasi
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">NIST SP 800-115</h5>
            <p className="text-sm text-gray-600">
              Panduan pengujian keamanan teknologi informasi dengan fokus pada aplikasi web
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">MITRE ATT&CK</h5>
            <p className="text-sm text-gray-600">
              Knowledge base tentang taktik dan teknik serangan terhadap aplikasi web
            </p>
          </div>
        </div>
      </div>

      {/* Quiz CTA */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-200 shadow-md">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-md mx-auto mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-xl md:text-2xl text-gray-800 mb-3">
            Uji Pemahaman Anda
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami konsep keamanan aplikasi web.
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
  )
}

// Quiz Component
function WebAppQuiz({ onBack }) {
  const questions = [
    {
      q: "Apa tujuan utama Content Security Policy (CSP)?",
      options: [
        "Meningkatkan performa aplikasi web",
        "Mencegah serangan Cross-Site Scripting (XSS)",
        "Mengatur hak akses user",
        "Mengurangi ukuran file JavaScript"
      ],
      answer: 1
    },
    {
      q: "Apa yang dimaksud dengan SQL Injection?",
      options: [
        "Teknik mempercepat query database",
        "Teknik memasukkan perintah SQL berbahaya ke aplikasi",
        "Teknik backup database otomatis",
        "Teknik enkripsi data"
      ],
      answer: 1
    },
    {
      q: "Salah satu mitigasi Broken Authentication adalah...",
      options: [
        "Menggunakan password default",
        "Implementasi multi-factor authentication",
        "Menyimpan password dalam plain text",
        "Menggunakan session tanpa timeout"
      ],
      answer: 1
    },
    {
      q: "Apa manfaat utama Web Application Firewall (WAF)?",
      options: [
        "Mempercepat loading website",
        "Mendeteksi dan memblokir serangan aplikasi web",
        "Menghapus file duplikat",
        "Mengatur hak akses developer"
      ],
      answer: 1
    },
    {
      q: "Apa yang dimaksud dengan Zero Trust Architecture?",
      options: [
        "Semua user dipercaya secara default",
        "Tidak ada user atau perangkat yang dipercaya tanpa verifikasi",
        "Semua data dienkripsi secara otomatis",
        "Aplikasi berjalan tanpa autentikasi"
      ],
      answer: 1
    }
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

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

  const restartQuiz = () => {
    setStep(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
  };

  const correctCount = answers.filter((ans, idx) => ans === questions[idx].answer).length;

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Quiz Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl mb-1">Kuis Pemahaman</h3>
              <h2 className="text-2xl font-bold">Web Application Security</h2>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <Code className="w-8 h-8" />
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
            // Hasil
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
                    ? "Anda menguasai materi keamanan aplikasi web dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik tentang keamanan aplikasi web."
                    : "Anda perlu mempelajari kembali materi keamanan aplikasi web."}
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
  )
}