import { Code, Shield, ListChecks, Bug, Target, ChevronRight, ChevronLeft, ArrowLeft, Cpu, Layers, GitMerge, TestTube2, Settings, Monitor } from 'lucide-react';
import { useState } from 'react';

export const SecureSDLC = {
  id: 8,
  title: "Secure SDLC",
  icon: <Code className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <SecureSDLCContent />
  )
};

function SecureSDLCContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' or 'quiz'

  if (currentView === 'quiz') {
    return <SecureSDLCQuiz onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Secure Software Development Lifecycle</h2>
            <p className="text-blue-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Pendekatan pengembangan perangkat lunak yang mengintegrasikan praktik keamanan di setiap fase 
              siklus pengembangan untuk memastikan keamanan dibangun sejak awal (security by design).
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#3b82f6" />
          </svg>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Phases Card */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <ListChecks className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-blue-800 text-lg">
              Fase SSDLC
            </h4>
          </div>
          <ol className="space-y-4 list-decimal pl-5">
            <li className="pl-2">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h5 className="font-medium text-blue-700 mb-1 flex items-center">
                  <Layers className="w-4 h-4 mr-2" />
                  Requirements
                </h5>
                <p className="text-sm text-gray-600">
                  Analisis risiko dan definisi persyaratan keamanan fungsional dan non-fungsional
                </p>
              </div>
            </li>
            <li className="pl-2">
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <h5 className="font-medium text-indigo-700 mb-1 flex items-center">
                  <Cpu className="w-4 h-4 mr-2" />
                  Design
                </h5>
                <p className="text-sm text-gray-600">
                  Arsitektur keamanan, threat modeling, dan desain kontrol keamanan
                </p>
              </div>
            </li>
            <li className="pl-2">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h5 className="font-medium text-purple-700 mb-1 flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  Implementation
                </h5>
                <p className="text-sm text-gray-600">
                  Secure coding practices, peer review, dan analisis kode statis (SAST)
                </p>
              </div>
            </li>
            <li className="pl-2">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h5 className="font-medium text-green-700 mb-1 flex items-center">
                  <TestTube2 className="w-4 h-4 mr-2" />
                  Testing
                </h5>
                <p className="text-sm text-gray-600">
                  Pengujian keamanan dinamis (DAST), penetration testing, dan fuzz testing
                </p>
              </div>
            </li>
            <li className="pl-2">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                <h5 className="font-medium text-yellow-700 mb-1 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Deployment
                </h5>
                <p className="text-sm text-gray-600">
                  Hardening environment, konfigurasi aman, dan verifikasi akhir
                </p>
              </div>
            </li>
            <li className="pl-2">
              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                <h5 className="font-medium text-red-700 mb-1 flex items-center">
                  <Monitor className="w-4 h-4 mr-2" />
                  Maintenance
                </h5>
                <p className="text-sm text-gray-600">
                  Patch management, monitoring keamanan, dan respons insiden
                </p>
              </div>
            </li>
          </ol>
        </div>
        
        {/* Best Practices Card */}
        <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-7 rounded-2xl border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 p-2 rounded-lg mr-3">
              <Shield className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-indigo-800 text-lg">
              Praktik Utama SSDLC
            </h4>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>
              <div>
                <span className="font-medium text-gray-800">Threat Modeling</span>
                <p className="text-sm text-gray-600 mt-1">Identifikasi dan mitigasi potensi ancaman selama fase desain menggunakan STRIDE atau OWASP Threat Dragon</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>
              <div>
                <span className="font-medium text-gray-800">Secure Coding Standards</span>
                <p className="text-sm text-gray-600 mt-1">Mengikuti pedoman seperti OWASP Secure Coding Practices dan CERT Secure Coding Standards</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>
              <div>
                <span className="font-medium text-gray-800">Automated Security Testing</span>
                <p className="text-sm text-gray-600 mt-1">Integrasi SAST, DAST, dan SCA dalam pipeline CI/CD untuk deteksi dini kerentanan</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>
              <div>
                <span className="font-medium text-gray-800">Security Training</span>
                <p className="text-sm text-gray-600 mt-1">Pelatihan rutin untuk pengembang tentang keamanan aplikasi dan praktik terbaru</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>
              <div>
                <span className="font-medium text-gray-800">Incident Response Planning</span>
                <p className="text-sm text-gray-600 mt-1">Persiapan prosedur respons insiden khusus untuk aplikasi yang dikembangkan</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Tools Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <Bug className="w-6 h-6 text-green-600" />
          </div>
          <h4 className="font-bold text-2xl text-green-900">Tools dan Framework SSDLC</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
              <TestTube2 className="w-6 h-6 text-blue-600" />
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">Testing Tools</h5>
            <p className="text-sm text-gray-600">
              OWASP ZAP, Burp Suite, SonarQube, Checkmarx, Snyk, Nessus untuk SAST, DAST, dan SCA
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-purple-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
              <ListChecks className="w-6 h-6 text-purple-600" />
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">Framework</h5>
            <p className="text-sm text-gray-600">
              OWASP SAMM, Microsoft SDL, NIST SSDF, BSIMM untuk maturity model dan best practices
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-green-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
              <GitMerge className="w-6 h-6 text-green-600" />
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">CI/CD Integration</h5>
            <p className="text-sm text-gray-600">
              GitLab SAST, GitHub Advanced Security, Jenkins dengan plugin keamanan untuk otomatisasi
            </p>
          </div>
        </div>
      </div>

      {/* Principles Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-7 rounded-2xl border border-indigo-200 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <Shield className="w-6 h-6 text-indigo-600" />
          </div>
          <h4 className="font-bold text-2xl text-indigo-900">Prinsip Secure by Design</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-500" />
              Least Privilege
            </h5>
            <p className="text-sm text-gray-600">
              Setiap komponen dan pengguna hanya memiliki akses minimal yang diperlukan untuk menjalankan fungsinya
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Layers className="w-5 h-5 mr-2 text-purple-500" />
              Defense in Depth
            </h5>
            <p className="text-sm text-gray-600">
              Lapisan keamanan berlapis untuk memastikan satu celah keamanan tidak membahayakan seluruh sistem
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-green-500" />
              Fail Securely
            </h5>
            <p className="text-sm text-gray-600">
              Sistem harus gagal dalam keadaan yang aman tanpa mengekspos informasi sensitif atau fungsi kritis
            </p>
          </div>
        </div>
      </div>

      {/* Quiz CTA Section */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl border-2 border-blue-200 shadow-md">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md mx-auto mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-xl md:text-2xl text-gray-800 mb-3">
            Uji Pemahaman Anda
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami materi Secure SDLC.
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
function SecureSDLCQuiz({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Pada fase mana threat modeling paling efektif dilakukan dalam SSDLC?",
      options: [
        "Fase Requirements",
        "Fase Design",
        "Fase Testing",
        "Fase Maintenance"
      ],
      correct: 1
    },
    {
      q: "Apa perbedaan utama antara SAST dan DAST?",
      options: [
        "SAST analisis kode statis, DAST analisis aplikasi yang berjalan",
        "SAST lebih murah dari DAST",
        "DAST hanya untuk aplikasi web",
        "SAST tidak memerlukan akses ke kode sumber"
      ],
      correct: 0
    },
    {
      q: "Manakah yang BUKAN prinsip secure by design?",
      options: [
        "Least privilege",
        "Defense in depth",
        "Fail open",
        "Separation of duties"
      ],
      correct: 2
    },
    {
      q: "Framework apa yang dikembangkan oleh OWASP untuk mengukur maturity keamanan proses pengembangan?",
      options: [
        "Microsoft SDL",
        "OWASP SAMM",
        "NIST SSDF",
        "BSIMM"
      ],
      correct: 1
    },
    {
      q: "Apa tujuan utama dari fase maintenance dalam SSDLC?",
      options: [
        "Memastikan keamanan berkelanjutan melalui patch dan monitoring",
        "Melakukan penetration testing",
        "Mendesain arsitektur keamanan",
        "Menulis kode yang aman"
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
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl mb-1">Kuis Pemahaman</h3>
              <h2 className="text-2xl font-bold">Secure SDLC</h2>
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

              {/* Question */}
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

              {/* Navigation */}
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
            /* Results */
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
                    ? "Anda menguasai materi tentang Secure SDLC dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik tentang Secure SDLC."
                    : "Anda perlu mempelajari kembali materi Secure SDLC."}
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