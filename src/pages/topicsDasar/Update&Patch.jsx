import { Wifi, Shield, ArrowLeft, ChevronRight, ChevronLeft, Target } from 'lucide-react';
import { useState } from 'react';

export const UpdateDanPatchManagement = {
  id: 5,
  title: "Update dan Patch Management",
  icon: <Wifi className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <UpdatePatchContent />
  )
};

function UpdatePatchContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' atau 'quiz'

  if (currentView === 'quiz') {
    return <UpdatePatchQuiz onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-blue-700 to-indigo-900 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Update & Patch Management</h2>
            <p className="text-indigo-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Pembaruan perangkat lunak dan patch keamanan adalah pertahanan kritis terhadap kerentanan yang diketahui. Banyak serangan besar terjadi karena eksploitasi terhadap sistem yang tidak di-patch.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#6366f1" />
          </svg>
        </div>
      </div>

      {/* Jenis Update & Risiko */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center mb-4">
            <Shield className="w-7 h-7 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            <h4 className="font-bold text-lg text-blue-800">Jenis Pembaruan</h4>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Patch Keamanan:</strong> Perbaikan kerentanan spesifik</li>
            <li><strong>Update Minor:</strong> Perbaikan bug dan peningkatan kecil</li>
            <li><strong>Update Major:</strong> Versi baru dengan fitur signifikan</li>
            <li><strong>Driver:</strong> Pembaruan untuk komponen hardware</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-red-50 via-white to-yellow-50 p-7 rounded-2xl border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center mb-4">
            <Shield className="w-7 h-7 mr-3 text-red-500 bg-red-100 p-1 rounded-full" />
            <h4 className="font-bold text-lg text-red-800">Risiko Tidak Update</h4>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Ekspos terhadap kerentanan yang diketahui</li>
            <li>Ketidakkompatibelan dengan sistem lain</li>
            <li>Potensi pelanggaran compliance</li>
            <li>Kehilangan produktivitas karena bug</li>
            <li>Tidak mendapat dukungan vendor</li>
          </ul>
        </div>
      </div>

      {/* Best Practice Update */}
      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200 shadow-lg">
        <h4 className="font-bold text-2xl text-yellow-800 mb-4">Best Practice Update</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Untuk Pengguna Rumah</h5>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li>Aktifkan update otomatis bila tersedia</li>
              <li>Update OS, browser, dan aplikasi penting</li>
              <li>Periksa pembaruan manual secara berkala</li>
              <li>Backup data sebelum update major</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Untuk Bisnis Kecil</h5>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li>Jadwalkan window maintenance rutin</li>
              <li>Uji patch di lingkungan terpisah sebelum deploy</li>
              <li>Prioritaskan patch keamanan kritis</li>
              <li>Dokumentasi semua update yang dilakukan</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Untuk Enterprise</h5>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li>Implementasi sistem patch management terpusat</li>
              <li>Gunakan vulnerability scanning tools</li>
              <li>Buat kebijakan patch management formal</li>
              <li>Monitor threat intelligence untuk patch kritis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Siklus Patch Management */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 rounded-2xl border border-blue-100 shadow-lg">
        <h4 className="font-bold text-xl text-blue-800 mb-6">Siklus Patch Management</h4>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div className="flex items-center">
            <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold text-lg shadow">1</div>
            <span className="font-medium text-gray-700">Identifikasi</span>
          </div>
          <ChevronRight className="w-6 h-6 text-gray-400 hidden md:block" />
          <div className="flex items-center">
            <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold text-lg shadow">2</div>
            <span className="font-medium text-gray-700">Evaluasi</span>
          </div>
          <ChevronRight className="w-6 h-6 text-gray-400 hidden md:block" />
          <div className="flex items-center">
            <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold text-lg shadow">3</div>
            <span className="font-medium text-gray-700">Testing</span>
          </div>
          <ChevronRight className="w-6 h-6 text-gray-400 hidden md:block" />
          <div className="flex items-center">
            <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold text-lg shadow">4</div>
            <span className="font-medium text-gray-700">Deploy</span>
          </div>
          <ChevronRight className="w-6 h-6 text-gray-400 hidden md:block" />
          <div className="flex items-center">
            <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold text-lg shadow">5</div>
            <span className="font-medium text-gray-700">Verifikasi</span>
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
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami materi update dan patch management.
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
function UpdatePatchQuiz({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Apa tujuan utama dari patch keamanan?",
      options: [
        "Menambahkan fitur baru ke sistem",
        "Memperbaiki kerentanan spesifik dalam perangkat lunak",
        "Meningkatkan performa hardware",
        "Mengubah antarmuka pengguna"
      ],
      correct: 1
    },
    {
      q: "Manakah yang BUKAN risiko dari tidak melakukan update?",
      options: [
        "Ekspos terhadap kerentanan yang diketahui",
        "Meningkatkan kompatibilitas dengan sistem lain",
        "Potensi pelanggaran compliance",
        "Tidak mendapat dukungan vendor"
      ],
      correct: 1
    },
    {
      q: "Apa langkah pertama dalam siklus patch management?",
      options: [
        "Testing",
        "Identifikasi",
        "Deploy",
        "Verifikasi"
      ],
      correct: 1
    },
    {
      q: "Mengapa penting untuk menguji patch sebelum deploy di enterprise?",
      options: [
        "Untuk memastikan patch tidak menyebabkan masalah baru",
        "Karena patch selalu bermasalah",
        "Untuk memperlambat proses update",
        "Karena vendor mengharuskan testing"
      ],
      correct: 0
    },
    {
      q: "Apa perbedaan utama antara update minor dan major?",
      options: [
        "Update minor selalu tentang keamanan",
        "Update major biasanya menambahkan fitur signifikan",
        "Update minor lebih besar dari update major",
        "Update major tidak pernah memerlukan backup"
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
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl mb-1">Kuis Pemahaman</h3>
              <h2 className="text-2xl font-bold">Update dan Patch Management</h2>
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
                    className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2.5 rounded-full transition-all duration-500"
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
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full border mr-4 flex items-center justify-center
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
                  className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold hover:from-indigo-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
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
                    ? "Anda menguasai materi tentang Update dan Patch Management dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik, tapi masih ada ruang untuk peningkatan."
                    : "Anda perlu mempelajari kembali materi tentang Update dan Patch Management."}
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