import { Scale, Gavel, ChevronRight, ChevronLeft, ArrowLeft, Target } from 'lucide-react';
import { useState } from 'react';

export const EtikadanHukum = {
  id: 9,
  title: "Etika dan Hukum Digital",
  icon: <Scale className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <EtikadanHukumContent />
  )
};

function EtikadanHukumContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' atau 'quiz'

  if (currentView === 'quiz') {
    return <EtikadanHukumQuiz onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-blue-700 to-blue-800 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Scale className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Etika dan Hukum Digital</h2>
            <p className="text-blue-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Dunia digital membutuhkan pemahaman etika dan hukum agar aktivitas online tetap aman, bertanggung jawab, dan tidak melanggar aturan. Kenali regulasi, hak, dan kewajiban Anda di ruang siber.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#3b82f6" />
          </svg>
        </div>
      </div>

      {/* Materi Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Regulasi Penting */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-blue-800 mb-4 flex items-center text-lg">
            <Gavel className="w-7 h-7 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Regulasi Penting
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>UU ITE:</strong> Mengatur transaksi elektronik, konten digital, dan sanksi pelanggaran online</li>
            <li><strong>UU PDP:</strong> Perlindungan data pribadi dan hak subjek data</li>
            <li><strong>KUHP:</strong> Kejahatan siber seperti hacking, penipuan, dan pencemaran nama baik</li>
            <li><strong>Peraturan Kominfo:</strong> Registrasi SIM card, pengelolaan konten, dan perlindungan konsumen</li>
            <li><strong>UU Hak Cipta:</strong> Perlindungan karya digital dan sanksi pelanggaran hak cipta</li>
          </ul>
        </div>
        {/* Etika Digital */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-blue-800 mb-4 flex items-center text-lg">
            <Scale className="w-7 h-7 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Etika Digital
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Hormati privasi dan data orang lain</li>
            <li>Verifikasi informasi sebelum menyebarkan</li>
            <li>Hindari cyberbullying, ujaran kebencian, dan doxing</li>
            <li>Berinteraksi sopan dan bertanggung jawab di media sosial</li>
            <li>Gunakan sumber digital secara etis dan hindari plagiarisme</li>
          </ul>
        </div>
        {/* Hak & Kewajiban Digital */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-blue-800 mb-4 flex items-center text-lg">
            <Gavel className="w-7 h-7 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Hak & Kewajiban Digital
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Hak atas perlindungan data pribadi</li>
            <li>Hak atas kebebasan berekspresi dengan tetap menghormati hak orang lain</li>
            <li>Kewajiban menjaga keamanan akun dan perangkat</li>
            <li>Kewajiban mematuhi hukum dan norma digital</li>
            <li>Kewajiban melaporkan konten ilegal atau berbahaya</li>
          </ul>
        </div>
      </div>

      {/* Kasus Hukum Siber di Indonesia */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-lg">
        <h4 className="font-bold text-xl text-blue-800 mb-6">Kasus Hukum Siber di Indonesia</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Pencemaran Nama Baik</h5>
            <p className="text-sm text-gray-600">
              Banyak kasus dilaporkan berdasarkan UU ITE Pasal 27(3) tentang pencemaran nama baik. 
              Menunjukkan pentingnya berhati-hati dalam berkomentar di media sosial.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Kebocoran Data</h5>
            <p className="text-sm text-gray-600">
              Beberapa perusahaan dijerat hukum karena lalai melindungi data pelanggan. 
              UU PDP mewajibkan organisasi untuk melindungi data pribadi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Pelanggaran Hak Cipta Digital</h5>
            <p className="text-sm text-gray-600">
              Penyebaran film, musik, atau software tanpa izin dapat dikenakan sanksi pidana dan denda sesuai UU Hak Cipta.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Penipuan Online (Phishing)</h5>
            <p className="text-sm text-gray-600">
              Banyak korban kehilangan data atau uang akibat phishing. Pelaku dapat dijerat UU ITE dan KUHP.
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
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami materi etika dan hukum digital.
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
function EtikadanHukumQuiz({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Apa yang diatur dalam UU ITE Pasal 27 ayat 3?",
      options: [
        "Perlindungan data pribadi",
        "Pencemaran nama baik di media digital",
        "Transaksi elektronik",
        "Hak cipta konten digital"
      ],
      correct: 1
    },
    {
      q: "Manakah yang termasuk pelanggaran etika digital?",
      options: [
        "Menyebarkan informasi yang sudah diverifikasi",
        "Memberikan credit saat membagikan karya orang lain",
        "Melakukan doxing (membocorkan data pribadi orang tanpa izin)",
        "Menggunakan password yang kuat untuk akun digital"
      ],
      correct: 2
    },
    {
      q: "Apa kewajiban utama pengguna internet menurut UU PDP?",
      options: [
        "Membagikan data pribadi orang lain",
        "Melindungi data pribadi yang dimilikinya",
        "Mengumpulkan data pribadi sebanyak-banyaknya",
        "Mengabaikan permintaan penghapusan data"
      ],
      correct: 1
    },
    {
      q: "Kasus penyebaran film bajakan termasuk pelanggaran...",
      options: [
        "UU ITE tentang pencemaran nama baik",
        "UU Hak Cipta",
        "UU PDP tentang perlindungan data",
        "KUHP tentang pencurian fisik"
      ],
      correct: 1
    },
    {
      q: "Apa yang harus dilakukan jika menemukan konten ilegal di internet?",
      options: [
        "Membagikan ke lebih banyak orang",
        "Mengabaikan saja",
        "Melaporkan ke platform atau pihak berwenang",
        "Menyimpan konten tersebut"
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
              <h2 className="text-2xl font-bold">Etika & Hukum Digital</h2>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <Scale className="w-8 h-8" />
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
                    ? "Anda menguasai materi tentang etika dan hukum digital dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik tentang etika dan hukum digital."
                    : "Anda perlu mempelajari kembali materi etika dan hukum digital."}
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