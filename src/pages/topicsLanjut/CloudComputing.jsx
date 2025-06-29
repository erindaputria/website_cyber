import { Cloud, Shield, Cpu, Database, ChevronRight, ChevronLeft, ArrowLeft, Target, Server, Lock, Users, Key } from 'lucide-react';
import { useState } from 'react';

export const CloudComputing = {
  id: 0,
  title: "Cloud Computing Security",
  icon: <Cloud className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <CloudComputingContent />
  )
};

function CloudComputingContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' or 'quiz'

  if (currentView === 'quiz') {
    return <CloudComputingQuiz onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Cloud className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Cloud Computing Security</h2>
            <p className="text-blue-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Keamanan cloud computing memerlukan pendekatan shared responsibility model antara penyedia cloud dan pengguna. 
              Tantangan utama termasuk konfigurasi yang salah, data exposure, dan akses yang tidak sah.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#3b82f6" />
          </svg>
        </div>
      </div>
      
      {/* Security Models Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Shared Responsibility Card */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-blue-800 text-lg">
              Shared Responsibility Model
            </h4>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h5 className="font-medium text-blue-700 mb-1 flex items-center">
                <Server className="w-4 h-4 mr-2" />
                IaaS (Infrastructure)
              </h5>
              <p className="text-sm text-gray-600">
                Penyedia mengelola fisik, jaringan, dan hypervisor. Pelanggan bertanggung jawab dari OS ke atas termasuk keamanan aplikasi.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h5 className="font-medium text-purple-700 mb-1 flex items-center">
                <Cpu className="w-4 h-4 mr-2" />
                PaaS (Platform)
              </h5>
              <p className="text-sm text-gray-600">
                Penyedia mengelola OS dan middleware. Pelanggan bertanggung jawab untuk aplikasi, data, dan akses.
              </p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <h5 className="font-medium text-indigo-700 mb-1 flex items-center">
                <Cloud className="w-4 h-4 mr-2" />
                SaaS (Software)
              </h5>
              <p className="text-sm text-gray-600">
                Penyedia mengelola seluruh stack aplikasi. Pelanggan hanya bertanggung jawab untuk data dan akses pengguna.
              </p>
            </div>
          </div>
        </div>
        
        {/* Threats & Best Practices Card */}
        <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-7 rounded-2xl border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 p-2 rounded-lg mr-3">
              <Lock className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-indigo-800 text-lg">
              Ancaman & Praktik Terbaik
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
              <h5 className="font-medium text-red-700 mb-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Ancaman Utama
              </h5>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Konfigurasi yang salah (S3 buckets terbuka)</li>
                <li>Account hijacking dan credential theft</li>
                <li>Insecure APIs dan interfaces</li>
                <li>Insider threats dan data breaches</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h5 className="font-medium text-green-700 mb-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Praktik Terbaik
              </h5>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Prinsip least privilege (IAM policies)</li>
                <li>Enkripsi data in-transit dan at-rest</li>
                <li>Multi-factor authentication (MFA)</li>
                <li>Cloud Security Posture Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tools Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <Database className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="font-bold text-2xl text-blue-900">Cloud Security Tools</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">AWS Security Hub</h5>
            <p className="text-sm text-gray-600">
              Layanan keamanan terpusat untuk AWS dengan pemeriksaan otomatis terhadap best practices dan integrasi dengan tools keamanan lainnya.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-purple-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">Azure Security Center</h5>
            <p className="text-sm text-gray-600">
              Solusi manajemen keamanan terpadu untuk perlindungan workload hybrid cloud dengan threat protection dan security management.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-indigo-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">Prisma Cloud</h5>
            <p className="text-sm text-gray-600">
              Platform keamanan cloud-native yang komprehensif untuk multi-cloud dengan CSPM, CWPP, dan cloud network security.
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
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami konsep keamanan cloud computing.
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
function CloudComputingQuiz({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Apa yang dimaksud dengan shared responsibility model dalam cloud computing?",
      options: [
        "Pembagian tanggung jawab keamanan antara penyedia cloud dan pelanggan",
        "Model di mana penyedia cloud bertanggung jawab penuh atas keamanan",
        "Model di mana pelanggan bertanggung jawab penuh atas keamanan",
        "Sistem keamanan yang hanya bergantung pada firewall"
      ],
      correct: 0
    },
    {
      q: "Dalam model IaaS, siapa yang bertanggung jawab untuk mengamankan sistem operasi?",
      options: [
        "Penyedia cloud",
        "Pelanggan",
        "Dibagi antara penyedia dan pelanggan",
        "Tidak perlu diamankan"
      ],
      correct: 1
    },
    {
      q: "Manakah yang BUKAN ancaman umum dalam keamanan cloud?",
      options: [
        "Konfigurasi yang salah",
        "Account hijacking",
        "Enkripsi end-to-end",
        "Insecure APIs"
      ],
      correct: 2
    },
    {
      q: "Apa manfaat utama dari prinsip least privilege dalam IAM?",
      options: [
        "Membatasi akses pengguna hanya pada yang diperlukan",
        "Memberikan akses penuh kepada semua pengguna",
        "Menghilangkan kebutuhan autentikasi",
        "Meningkatkan kecepatan akses data"
      ],
      correct: 0
    },
    {
      q: "Tool mana yang khusus untuk keamanan cloud di Azure?",
      options: [
        "AWS Security Hub",
        "Azure Security Center",
        "Prisma Cloud",
        "Google Cloud SCC"
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
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Quiz Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl mb-1">Kuis Pemahaman</h3>
              <h2 className="text-2xl font-bold">Cloud Computing Security</h2>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <Cloud className="w-8 h-8" />
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
                    ? "Anda menguasai materi keamanan cloud computing dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik tentang keamanan cloud."
                    : "Anda perlu mempelajari kembali materi keamanan cloud computing."}
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