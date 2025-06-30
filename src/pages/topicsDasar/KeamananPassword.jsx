import { Key, Shield, CheckCircle, XCircle, Eye, EyeOff, Lock, Zap, AlertTriangle, ArrowLeft, ChevronRight, ChevronLeft, Target } from 'lucide-react';
import { useState } from 'react';

export const KeamananPassword = {
  id: 1,
  title: "Keamanan Password",
  icon: <Key className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <PasswordSecurityContent />
  )
};

function PasswordSecurityContent() {
  const [currentView, setCurrentView] = useState('material'); // 'material' or 'quiz'

  if (currentView === 'quiz') {
    return <QuizPage onBack={() => setCurrentView('material')} />;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800 p-8 rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-4 right-4 opacity-10">
          <Key className="w-24 h-24 text-white rotate-12" />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
            <Key className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-bold text-2xl md:text-3xl mb-4 text-white leading-tight">
            Membuat Password yang Kuat
          </h4>
          <p className="text-emerald-100 leading-relaxed text-base md:text-lg max-w-4xl">
            Password adalah garis pertahanan pertama Anda dalam keamanan digital. Password yang lemah 
            dapat dengan mudah dibobol menggunakan teknik brute force atau dictionary attack. Mari pelajari 
            cara membuat password yang tidak dapat ditembus!
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
              🔐 Password Kuat
            </span>
            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
              🛡️ Perlindungan Maksimal
            </span>
            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
              ⚡ Mudah Diingat
            </span>
          </div>
        </div>
      </div>
      
      {/* Do's and Don'ts Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Do's Card */}
        <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-xl text-gray-800">Yang Harus Dilakukan</h4>
              <p className="text-green-600 text-xs font-medium">Praktik terbaik password</p>
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { 
                title: "Gunakan minimal 12 karakter", 
                desc: "Semakin panjang, semakin sulit dipecahkan",
                icon: "📏",
                tip: "Rekomendasi: 15+ karakter"
              },
              { 
                title: "Kombinasi karakter beragam", 
                desc: "Huruf besar, kecil, angka, dan simbol",
                icon: "🔤",
                tip: "Contoh: aA1!@#"
              },
              { 
                title: "Gunakan passphrase", 
                desc: "Frasa yang mudah diingat namun unik",
                icon: "💭",
                tip: "Contoh: 'Saya suka makan pizza di hari Minggu'"
              },
              { 
                title: "Password manager", 
                desc: "Tool untuk menyimpan password dengan aman",
                icon: "🗃️",
                tip: "LastPass, 1Password, Bitwarden"
              },
              { 
                title: "Aktifkan 2FA", 
                desc: "Lapisan keamanan tambahan",
                icon: "📱",
                tip: "Google Authenticator, SMS, Email"
              }
            ].map((item, index) => (
              <div key={index} className="group/item bg-white/60 backdrop-blur-sm p-4 rounded-xl hover:bg-white/80 transition-all duration-200 hover:scale-[1.02]">
                <div className="flex items-start">
                  <span className="text-xl mr-3 flex-shrink-0">{item.icon}</span>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</h5>
                    <p className="text-gray-600 text-xs mb-2 leading-relaxed">{item.desc}</p>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      💡 {item.tip}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Don'ts Card */}
        <div className="group bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-2xl border-2 border-red-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <XCircle className="w-6 h-6 text-white" />
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-xl text-gray-800">Yang Harus Dihindari</h4>
              <p className="text-red-600 text-xs font-medium">Kesalahan umum yang berbahaya</p>
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { 
                title: "Informasi pribadi", 
                desc: "Nama, tanggal lahir, nomor telepon",
                icon: "🚫",
                danger: "Mudah ditebak oleh orang yang mengenal Anda"
              },
              { 
                title: "Kata-kata umum", 
                desc: "Password123, admin, qwerty",
                icon: "📖",
                danger: "Ada dalam dictionary attack"
              },
              { 
                title: "Password yang sama", 
                desc: "Satu password untuk semua akun",
                icon: "🔄",
                danger: "Jika satu bocor, semua akun terancam"
              },
              { 
                title: "Simpan di browser", 
                desc: "Auto-save password di browser umum",
                icon: "🌐",
                danger: "Rentan jika komputer diakses orang lain"
              },
              { 
                title: "Membagikan password", 
                desc: "Memberitahu password ke orang lain",
                icon: "🗣️",
                danger: "Kehilangan kontrol akses akun"
              }
            ].map((item, index) => (
              <div key={index} className="group/item bg-white/60 backdrop-blur-sm p-4 rounded-xl hover:bg-white/80 transition-all duration-200 hover:scale-[1.02]">
                <div className="flex items-start">
                  <span className="text-xl mr-3 flex-shrink-0">{item.icon}</span>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</h5>
                    <p className="text-gray-600 text-xs mb-2 leading-relaxed">{item.desc}</p>
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                      ⚠️ {item.danger}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Password Examples Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-600 to-yellow-700 p-8 rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-4 left-4 opacity-10">
          <Lock className="w-24 h-24 text-white" />
        </div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mb-3">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-2xl md:text-3xl text-white mb-3">
              Contoh Password Kuat
            </h4>
            <p className="text-amber-100 text-sm max-w-2xl mx-auto">
              Berikut adalah contoh password yang memenuhi kriteria keamanan tinggi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                password: "Blu3$kyW!thSun@2023",
                strength: "Sangat Kuat",
                features: ["16 karakter", "Huruf besar/kecil", "Angka & simbol", "Mudah diingat"]
              },
              {
                password: "Coffee!L0ver#Secure", 
                strength: "Sangat Kuat",
                features: ["18 karakter", "Passphrase", "Substitusi huruf", "Simbol khusus"]
              },
              {
                password: "Winter*Is-Coming^22",
                strength: "Sangat Kuat",
                features: ["18 karakter", "Referensi budaya", "Tanda baca", "Angka di akhir"]
              }
            ].map((example, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-center mb-3">
                    <div className="bg-gray-900/20 backdrop-blur-sm p-3 rounded-lg font-mono text-white text-xs mb-2 break-all">
                      {example.password}
                    </div>
                    <span className="inline-block px-2 py-1 bg-green-400/20 backdrop-blur-sm text-green-100 text-xs font-bold rounded-full">
                      ✅ {example.strength}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {example.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-amber-100 text-xs">
                        <div className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Important Notice */}
          <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl p-4">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-200 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-red-100 mb-1 text-sm">⚠️ Peringatan Penting</h5>
                <p className="text-red-200 text-xs leading-relaxed">
                  <strong>Jangan gunakan contoh password di atas!</strong> Contoh ini hanya untuk pembelajaran. 
                  Selalu buat password unik Anda sendiri menggunakan prinsip-prinsip yang telah dipelajari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Password Strength Meter Demo */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-100 p-6 rounded-2xl border-2 border-gray-200 shadow-md">
        <div className="text-center mb-6">
          <h4 className="font-bold text-xl text-gray-800 mb-3 flex items-center justify-center">
            <Shield className="w-6 h-6 mr-2 text-blue-600" />
            Tips Mengingat Password Kuat
          </h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              tip: "Metode Akronim",
              desc: "Buat akronim dari kalimat favorit",
              example: "'Saya makan nasi 3 kali sehari!' → Smn3ks!",
              icon: "🔤"
            },
            {
              tip: "Substitusi Karakter", 
              desc: "Ganti huruf dengan angka/simbol",
              example: "Password → P@ssw0rd",
              icon: "🔄"
            },
            {
              tip: "Pola Keyboard",
              desc: "Gunakan pola khusus di keyboard",
              example: "Qwe123!@# (diagonal keyboard)",
              icon: "⌨️"
            },
            {
              tip: "Cerita Pendek",
              desc: "Buat password dari cerita singkat",
              example: "'Kucing hitam lompat 5 meter' → Kh15m!",
              icon: "📖"
            }
          ].map((tip, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-3">
                <span className="text-2xl mb-2 block">{tip.icon}</span>
                <h5 className="font-bold text-gray-800 mb-1 text-sm">{tip.tip}</h5>
                <p className="text-gray-600 text-xs mb-2">{tip.desc}</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-xs text-gray-700 font-mono text-center">
                  {tip.example}
                </p>
              </div>
            </div>
          ))}
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
            Jawab beberapa pertanyaan untuk menguji seberapa baik Anda memahami materi keamanan password.
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
function QuizPage({ onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Berapa panjang minimal password yang direkomendasikan untuk keamanan tinggi?",
      options: [
        "6 karakter",
        "8 karakter",
        "12 karakter", 
        "15 karakter"
      ],
      correct: 2
    },
    {
      q: "Manakah yang merupakan contoh passphrase yang baik?",
      options: [
        "password123",
        "Saya suka makan pizza di hari Minggu",
        "qwertyuiop",
        "Nama saya Budi"
      ],
      correct: 1
    },
    {
      q: "Apa keuntungan utama menggunakan password manager?",
      options: [
        "Membuat password lebih pendek",
        "Menyimpan semua password dengan aman dalam satu tempat",
        "Membagikan password dengan mudah ke orang lain",
        "Mengurangi kebutuhan akan 2FA"
      ],
      correct: 1
    },
    {
      q: "Mengapa menggunakan informasi pribadi dalam password berbahaya?",
      options: [
        "Membuat password terlalu panjang",
        "Mudah ditebak oleh orang yang mengenal Anda",
        "Sulit diingat",
        "Tidak kompatibel dengan semua website"
      ],
      correct: 1
    },
    {
      q: "Apa yang dimaksud dengan 2FA dalam konteks keamanan password?",
      options: [
        "Menggunakan dua password berbeda",
        "Verifikasi dua langkah untuk login",
        "Mengubah password setiap 2 bulan",
        "Membutuhkan 2 jenis karakter dalam password"
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
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Quiz Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg mb-1">Tes Pemahaman</h3>
              <h2 className="text-xl font-bold">Keamanan Password</h2>
            </div>
            <div className="bg-white/20 p-2 rounded-md">
              <Key className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {!showResult ? (
            <div>
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Pertanyaan {step + 1} dari {questions.length}</span>
                  <span>{Math.round(((step + 1) / questions.length) * 100)}% selesai</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Pertanyaan */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {questions[step].q}
                </h4>
                <div className="space-y-3">
                  {questions[step].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 text-sm
                        ${answers[step] === idx
                          ? 'bg-blue-50 border-blue-300 font-medium text-blue-800 shadow-sm'
                          : 'bg-gray-50 border-gray-200 hover:border-blue-200 hover:bg-blue-50'}
                      `}
                    >
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 w-4 h-4 rounded-full border mr-3 flex items-center justify-center
                          ${answers[step] === idx 
                            ? 'bg-blue-600 border-blue-600 text-white' 
                            : 'bg-white border-gray-300'}
                        `}>
                          {answers[step] === idx && (
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="flex justify-between pt-3 border-t border-gray-200">
                <button
                  onClick={handlePrev}
                  disabled={step === 0}
                  className="flex items-center px-5 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors text-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Sebelumnya
                </button>
                <button
                  onClick={handleNext}
                  disabled={answers[step] === null}
                  className="flex items-center px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm text-sm"
                >
                  {step === questions.length - 1 ? "Lihat Hasil" : "Selanjutnya"}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ) : (
            /* Hasil */
            <div className="text-center">
              <div className="mb-6">
                <div className={`text-4xl font-bold mb-3 ${
                  correctCount === questions.length ? 'text-green-600' :
                  correctCount >= 3 ? 'text-blue-600' : 'text-orange-600'
                }`}>
                  {correctCount} / {questions.length}
                </div>
                
                <div className="flex justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        className="text-gray-200 opacity-30"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="6"
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
                      <span className="text-2xl font-bold text-gray-800">
                        {Math.round((correctCount / questions.length) * 100)}%
                      </span>
                      <span className="text-xs text-gray-500 mt-0.5">Skor Anda</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {correctCount === questions.length
                    ? "🎉 Luar Biasa!"
                    : correctCount >= 3
                    ? "👍 Bagus!"
                    : "📚 Tetap Semangat!"}
                </h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm">
                  {correctCount === questions.length
                    ? "Anda menguasai materi keamanan password dengan sangat baik!"
                    : correctCount >= 3
                    ? "Pemahaman Anda sudah cukup baik, tapi masih ada ruang untuk peningkatan."
                    : "Anda perlu mempelajari kembali materi tentang keamanan password."}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={restartQuiz}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-colors shadow-sm text-sm"
                >
                  Coba Lagi
                </button>
                <button
                  onClick={onBack}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 transition-colors shadow-sm text-sm"
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