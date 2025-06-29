import { Smartphone, Shield, AlertTriangle, ChevronRight, ChevronLeft, ArrowLeft, Target } from 'lucide-react';
import { useState } from 'react';

export const KeamananMobile = {
  id: 7,
  title: "Keamanan Perangkat Mobile",
  icon: <Smartphone className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <KeamananMobileContent />
  )
};

function KeamananMobileContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' atau 'quiz'

  if (currentView === 'quiz') {
    return <KeamananMobileQuiz onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Smartphone className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Keamanan Perangkat Mobile</h2>
            <p className="text-green-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Perangkat mobile menghadapi risiko unik karena sifatnya yang portabel, selalu terhubung, dan menggabungkan data pribadi dan kerja. Ancaman termasuk malware, jaringan tidak aman, pencurian perangkat, dan eksploitasi kerentanan OS.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#34d399" />
          </svg>
        </div>
      </div>

      {/* Materi Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ancaman Utama */}
        <div className="bg-gradient-to-br from-red-50 via-white to-yellow-50 p-7 rounded-2xl border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-red-800 mb-4 flex items-center text-lg">
            <AlertTriangle className="w-7 h-7 mr-3 text-red-500 bg-red-100 p-1 rounded-full" />
            Ancaman Utama
          </h4>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>Malware Aplikasi:</strong> Aplikasi berbahaya di store resmi/tidak resmi</li>
            <li><strong>Jaringan WiFi Publik:</strong> Serangan man-in-the-middle</li>
            <li><strong>OS yang Tidak Diupdate:</strong> Eksploitasi kerentanan dikenal</li>
            <li><strong>Phishing Mobile:</strong> Link mencurigakan di SMS/email</li>
          </ul>
        </div>
        {/* Praktik Terbaik */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-blue-800 mb-4 flex items-center text-lg">
            <Shield className="w-7 h-7 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Praktik Terbaik
          </h4>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Gunakan aplikasi antivirus mobile</li>
            <li>Aktifkan enkripsi perangkat</li>
            <li>Hindari jailbreak/rooting</li>
            <li>Gunakan VPN di jaringan publik</li>
            <li>Backup data secara teratur</li>
          </ul>
        </div>
      </div>

      {/* Keamanan Aplikasi Mobile */}
      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200 shadow-lg">
        <h4 className="font-bold text-xl text-yellow-800 mb-6">Keamanan Aplikasi Mobile</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Untuk Pengguna</h5>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li>Periksa izin aplikasi sebelum install</li>
              <li>Unduh hanya dari store resmi</li>
              <li>Periksa review dan developer</li>
              <li>Hapus aplikasi tidak terpakai</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Untuk Developer</h5>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li>Implementasi code obfuscation</li>
              <li>Gunakan certificate pinning</li>
              <li>Lakukan penetration testing</li>
              <li>Enkripsi data sensitif</li>
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
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami materi keamanan jaringan.
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
function KeamananMobileQuiz({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Mengapa jaringan WiFi publik berisiko untuk perangkat mobile?",
      options: [
        "Karena kecepatannya yang lambat",
        "Karena rentan terhadap serangan man-in-the-middle",
        "Karena tidak bisa digunakan untuk streaming",
        "Karena menghabiskan baterai lebih cepat"
      ],
      correct: 1
    },
    {
      q: "Apa risiko utama dari melakukan jailbreak atau rooting perangkat?",
      options: [
        "Perangkat menjadi lebih cepat",
        "Menghilangkan garansi dan membuka kerentanan keamanan",
        "Membuat baterai lebih awet",
        "Tidak bisa mengupdate sistem operasi"
      ],
      correct: 1
    },
    {
      q: "Manakah yang BUKAN praktik keamanan mobile yang baik?",
      options: [
        "Mengunduh aplikasi dari sumber tidak resmi",
        "Mengaktifkan enkripsi perangkat",
        "Memperbarui sistem operasi secara rutin",
        "Menggunakan VPN di jaringan publik"
      ],
      correct: 0
    },
    {
      q: "Apa tujuan dari certificate pinning dalam pengembangan aplikasi mobile?",
      options: [
        "Mempercepat koneksi internet",
        "Mencegah serangan man-in-the-middle dengan mengunci sertifikat SSL",
        "Mengurangi ukuran aplikasi",
        "Mempermudah proses update aplikasi"
      ],
      correct: 1
    },
    {
      q: "Apa yang harus dilakukan jika perangkat mobile hilang atau dicuri?",
      options: [
        "Menunggu sampai ditemukan",
        "Segera menghapus data secara remote jika memungkinkan",
        "Membeli perangkat baru tanpa melakukan apapun",
        "Memasang aplikasi yang sama di perangkat baru"
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
              <h2 className="text-2xl font-bold">Keamanan Mobile</h2>
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
                    ? "Anda menguasai materi tentang keamanan mobile dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik tentang keamanan mobile."
                    : "Anda perlu mempelajari kembali materi keamanan perangkat mobile."}
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