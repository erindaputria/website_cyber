import { Terminal, ChevronRight, ChevronLeft, ArrowLeft, Target, AlertTriangle, Shield } from 'lucide-react';
import { useState } from 'react';

export const SecureCoding = {
  id: 2,
  title: "Secure Coding",
  icon: <Terminal className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <SecureCodingContent />
  )
};

function SecureCodingContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' or 'quiz'

  if (currentView === 'quiz') {
    return <SecureCodingQuiz onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-800 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Terminal className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Secure Coding</h2>
            <p className="text-blue-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Praktik menulis kode yang meminimalkan kerentanan keamanan. Dengan meningkatnya serangan pada lapisan aplikasi, 
              pengembang harus memahami prinsip-prinsip keamanan sejak fase desain.
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
        <div className="bg-gradient-to-br from-red-50 via-white to-red-50 p-7 rounded-2xl border border-red-200 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-2 rounded-lg mr-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h4 className="font-semibold text-red-800 text-lg">OWASP Top 10 2023</h4>
          </div>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Injection</li>
            <li className="leading-snug">Broken Authentication</li>
            <li className="leading-snug">Sensitive Data Exposure</li>
            <li className="leading-snug">XML External Entities (XXE)</li>
            <li className="leading-snug">Broken Access Control</li>
            <li className="leading-snug">Security Misconfiguration</li>
            <li className="leading-snug">Cross-Site Scripting (XSS)</li>
            <li className="leading-snug">Insecure Deserialization</li>
            <li className="leading-snug">Using Components with Known Vulnerabilities</li>
            <li className="leading-snug">Insufficient Logging & Monitoring</li>
          </ol>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 via-white to-green-50 p-7 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-green-800 text-lg">Praktik Pengembangan Aman</h4>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Input validation dan sanitization</li>
            <li className="leading-snug">Parameterized queries untuk mencegah SQLi</li>
            <li className="leading-snug">Prinsip least privilege</li>
            <li className="leading-snug">Secure session management</li>
            <li className="leading-snug">Content Security Policy (CSP)</li>
            <li className="leading-snug">Regular dependency updates</li>
            <li className="leading-snug">Static and dynamic code analysis</li>
            <li className="leading-snug">Secure error handling</li>
          </ul>
        </div>
      </div>
      
      {/* Code Examples */}
      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200 shadow-lg">
        <h4 className="font-bold text-xl text-yellow-800 mb-4">Contoh Kode Rentan vs Aman</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-all">
            <h5 className="font-medium text-red-600 mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Rentan (SQL Injection)
            </h5>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`// Vulnerable
String query = "SELECT * FROM users WHERE username = '" 
              + username + "' AND password = '" 
              + password + "'";
Statement stmt = connection.createStatement();
ResultSet rs = stmt.executeQuery(query);`}
            </pre>
          </div>
          <div className="bg-white p-5 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all">
            <h5 className="font-medium text-green-600 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Aman (Parameterized)
            </h5>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`// Secure
String query = "SELECT * FROM users WHERE username = ? 
              AND password = ?";
PreparedStatement stmt = connection.prepareStatement(query);
stmt.setString(1, username);
stmt.setString(2, password);
ResultSet rs = stmt.executeQuery();`}
            </pre>
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
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami materi secure coding.
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
function SecureCodingQuiz({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Apa cara terbaik untuk mencegah SQL Injection?",
      options: [
        "Menggunakan string concatenation",
        "Parameterized queries",
        "Menonaktifkan validasi input",
        "Menyimpan password dalam plaintext"
      ],
      correct: 1
    },
    {
      q: "Manakah yang termasuk dalam OWASP Top 10?",
      options: [
        "Broken Authentication",
        "Fast Performance",
        "User Experience",
        "Code Readability"
      ],
      correct: 0
    },
    {
      q: "Apa tujuan Content Security Policy (CSP)?",
      options: [
        "Meningkatkan performa website",
        "Mencegah XSS dengan membatasi sumber eksekusi script",
        "Mengenkripsi semua data dalam database",
        "Menggantikan kebutuhan firewall"
      ],
      correct: 1
    },
    {
      q: "Mengapa penting untuk mengupdate dependencies secara rutin?",
      options: [
        "Untuk menghindari menggunakan komponen dengan kerentanan dikenal",
        "Agar kode terlihat lebih modern",
        "Karena versi baru selalu lebih cepat",
        "Karena semua update penting"
      ],
      correct: 0
    },
    {
      q: "Apa risiko dari insecure deserialization?",
      options: [
        "Aplikasi menjadi lebih lambat",
        "Dapat menyebabkan remote code execution",
        "User interface menjadi tidak responsif",
        "Tidak ada risiko signifikan"
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
              <h2 className="text-2xl font-bold">Secure Coding</h2>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <Terminal className="w-8 h-8" />
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
                    ? "Anda menguasai materi tentang secure coding dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik tentang secure coding."
                    : "Anda perlu mempelajari kembali materi secure coding."}
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