import { Network, Shield, Cpu, Wifi, HardDrive, AlertTriangle, RefreshCw, Lock, ChevronRight, ChevronLeft, ArrowLeft, Target } from 'lucide-react';
import { useState } from 'react';

export const NetworkSecurity = {
  id: 1,
  title: "Network Security",
  icon: <Network className="w-5 h-5 mr-3 text-indigo-600" />,
  content: (
    <NetworkSecurityContent />
  )
};

function NetworkSecurityContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' or 'quiz'

  if (currentView === 'quiz') {
    return <NetworkSecurityQuiz onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-blue-700 to-indigo-800 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Network className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Network Security</h2>
            <p className="text-indigo-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Keamanan jaringan melibatkan kebijakan, praktik, dan teknologi untuk mencegah dan memantau akses tidak sah, 
              penyalahgunaan, modifikasi, atau penolakan jaringan komputer dan sumber daya yang dapat diakses jaringan.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#6366f1" />
          </svg>
        </div>
      </div>
      
      {/* Three Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Threats Card */}
        <div className="bg-gradient-to-br from-red-50 via-white to-red-50 p-7 rounded-2xl border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-2 rounded-lg mr-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h4 className="font-semibold text-red-800 text-lg">
              Ancaman Jaringan
            </h4>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Man-in-the-Middle attacks</span>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Denial of Service (DoS/DDoS)</span>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Packet sniffing</span>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">IP spoofing</span>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">DNS poisoning</span>
            </li>
          </ul>
        </div>
        
        {/* Security Devices Card */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-blue-800 text-lg">
              Perangkat Keamanan
            </h4>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Firewall (Stateful/Next-gen)</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Intrusion Detection/Prevention Systems</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">VPN concentrators</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Web Application Firewalls</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Network Access Control</span>
            </li>
          </ul>
        </div>
        
        {/* Best Practices Card */}
        <div className="bg-gradient-to-br from-green-50 via-white to-green-50 p-7 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-green-800 text-lg">
              Praktik Terbaik
            </h4>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Segmentasi jaringan (VLANs, subnetting)</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Zero Trust Architecture</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Enkripsi end-to-end</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Pemantauan lalu lintas jaringan</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Pembaruan firmware rutin</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Case Studies Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-8 rounded-2xl border border-indigo-200 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <HardDrive className="w-6 h-6 text-indigo-600" />
          </div>
          <h4 className="font-bold text-2xl text-indigo-900">Studi Kasus</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-red-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h5 className="font-bold text-gray-800 mb-2">Equifax Breach (2017)</h5>
            <div className="space-y-2 text-gray-600 text-sm">
              <p className="leading-relaxed">
                Pelanggaran data besar karena kerentanan Apache Struts yang tidak ditambal.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>147 juta catatan konsumen terekspos</li>
                <li>Termasuk data sensitif seperti SSN</li>
                <li>Kerugian mencapai $700 juta+</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-orange-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
              <Lock className="w-6 h-6 text-orange-600" />
            </div>
            <h5 className="font-bold text-gray-800 mb-2">Target Breach (2013)</h5>
            <div className="space-y-2 text-gray-600 text-sm">
              <p className="leading-relaxed">
                Penyerang mendapatkan akses melalui vendor HVAC, kemudian berpindah ke sistem pembayaran.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>40 juta kartu kredit/debit dicuri</li>
                <li>Kurangnya segmentasi jaringan</li>
                <li>Kerugian $162 juta</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz CTA Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl border-2 border-indigo-200 shadow-md">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md mx-auto mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-xl md:text-2xl text-gray-800 mb-3">
            Uji Pemahaman Anda
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami materi keamanan jaringan.
          </p>
          <button
            onClick={() => setCurrentView('quiz')}
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full group shadow-md hover:shadow-lg transition-all duration-300 text-sm"
          >
            <span className="relative z-10 flex items-center">
              Mulai Tes Pemahaman
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Quiz Component
function NetworkSecurityQuiz({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Apa tujuan utama dari segmentasi jaringan?",
      options: [
        "Mempercepat kecepatan internet",
        "Membatasi penyebaran serangan dalam jaringan",
        "Mengurangi biaya perangkat jaringan",
        "Menyederhanakan konfigurasi jaringan"
      ],
      correct: 1
    },
    {
      q: "Manakah yang BUKAN jenis serangan jaringan?",
      options: [
        "Man-in-the-Middle",
        "Denial of Service",
        "SQL Injection",
        "DNS Spoofing"
      ],
      correct: 2
    },
    {
      q: "Apa fungsi utama dari Intrusion Prevention System (IPS)?",
      options: [
        "Hanya memantau lalu lintas jaringan",
        "Mendeteksi dan memblokir serangan secara aktif",
        "Mengenkripsi semua data yang lewat",
        "Menggantikan kebutuhan firewall"
      ],
      correct: 1
    },
    {
      q: "Kasus Equifax breach menunjukkan pentingnya...",
      options: [
        "Memperbarui sistem dan patch keamanan",
        "Menggunakan firewall generasi terbaru",
        "Memiliki banyak lapisan enkripsi",
        "Mempekerjakan lebih banyak staf IT"
      ],
      correct: 0
    },
    {
      q: "Apa prinsip utama arsitektur Zero Trust?",
      options: [
        "Percaya tetapi verifikasi",
        "Jangan percaya siapa pun, verifikasi semua",
        "Percaya jaringan internal tetapi tidak eksternal",
        "Gunakan password yang kuat"
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
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl mb-1">Kuis Pemahaman</h3>
              <h2 className="text-2xl font-bold">Keamanan Jaringan</h2>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <Network className="w-8 h-8" />
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
                    className="bg-gradient-to-r from-indigo-500 to-blue-600 h-2.5 rounded-full transition-all duration-500"
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
                          ? 'bg-indigo-50 border-indigo-300 font-medium text-indigo-800 shadow-sm'
                          : 'bg-gray-50 border-gray-200 hover:border-indigo-200 hover:bg-indigo-50'}
                      `}
                    >
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full border mr-4 mt-0.5 flex items-center justify-center
                          ${answers[step] === idx 
                            ? 'bg-indigo-600 border-indigo-600 text-white' 
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
                  className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold hover:from-indigo-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
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
                  correctCount >= 3 ? 'text-indigo-600' : 'text-orange-600'
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
                          correctCount >= 3 ? 'text-indigo-500' : 'text-orange-500'
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
                    ? "Anda menguasai materi tentang keamanan jaringan dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik tentang keamanan jaringan."
                    : "Anda perlu mempelajari kembali materi keamanan jaringan."}
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
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-colors shadow-md"
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