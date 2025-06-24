import { useState, useEffect } from 'react';
import { submitQuizResult } from './api';

// Quiz data
const quizData = {
  dasar: [
    {
      id: 1,
      question: "Apa yang dimaksud dengan keamanan cyber?",
      options: [
        "Parktik mengembangkan software",
        "Praktik melindungi sistem komputer dan jaringan dari ancaman digital",
        "Praktik meretas sistem komputer",
        "praktik membuat jaringan komputer"
      ],
      answer: "Praktik melindungi sistem komputer dan jaringan dari ancaman digital"
    },
    {
      id: 2,
      question: "Manakah yang BUKAN termasuk prinsip dasar keamanan cyber?",
      options: ["Kerahasiaan (confidentiality)", "Integritas (Integrity)", "Ketersediaan (availability)", "Kecepatan (velocity)"],
      answer: "Kecepatan (velocity)"
    },
    {
      id: 3,
      question: "Menurut statistik, berapa persen pelanggaran keamanan cyber disebabkan oleh kesalahan manusia",
      options: [
        "50%", "75", "95%","25%"
      ],
      answer: "95%"
    },
    {
      id: 4,
      question: "Karakteristik password yang kuat adalah?",
      options: [
        "Menggunakan nama hewan peliharaan", 
        "Panjang minimal 12 karakter dengan kombinasi huruf, angka, dan simbol", 
        "Menggunakan tanggal lahir",
        "Kata yang ada di kamus"
      ],
      answer: "Panjang minimal 12 karakter dengan kombinasi huruf, angka, dan simbol"
    },
    {
      id: 5,
      question: "Manakah yang termasuk praktik buruk dalam mengelola password?",
      options: [
        "Menggunakan password manager", 
        "Mengaktifkan autentikasi dua faktor", 
        "Menggunakan password yang sama untuk banyak akun",
        "Membuat password panjang dengan karakter acak"
      ],
      answer: "Menggunakan password yang sama untuk banyak akun"
    },
    {
      id: 6,
      question: "Contoh password yang paling kuat adalah?",
      options: [
        "password123",
        "12345678",
        "Winter*Is-Coming^22",
        "namaanda1980"
      ],
      answer: "Winter*Is-Coming^22"
    },
    {
      id: 7,
      question: "Apa perbedaan utama antara virus dan worm?",
      options: [
        "Virus menyebar melalui jaringan, worm menginfeksi file",
        "Worm menyebar melalui jaringan, virus menginfeksi file",
        "Virus meminta tebusan, worm mencuri data",
        "Tidak ada perbedaan"
      ],
      answer: "Worm menyebar melalui jaringan, virus menginfeksi file"
    },
    {
      id: 8,
      question: "Manakah yang BUKAN tanda komputer terinfeksi malware?",
      options: [
        "Performa komputer meningkat",
        "Banyak pop-up muncul",
        "Program tidak dikenal berjalan",
        "File hilang atau terenkripsi"
      ],
      answer: "Performa komputer meningkat"
    },
    {
      id: 9,
      question: "Apa yang dilakukan ransomware?",
      options: [
        "Mengenkripsi data dan meminta tebusan",
        "Mencuri data kartu kredit",
        "Mengubah homepage browser",
        "Mempercepat performa komputer"
      ],
      answer: "Mengenkripsi data dan meminta tebusan"
    },
    {
      id: 10,
      question: "Kasus malware WannaCry pada tahun 2017 mengeksploitasi?",
      options: [
        "Kerentanan EternalBlue pada sistem Windows",
        "Kelemahan pada sistem Linux",
        "Bug pada processor Intel",
        "Masalah pada jaringan WiFi"
      ],
      answer: "Kerentanan EternalBlue pada sistem Windows"
    }
  ],
  menengah: [
    {
      id: 1,
      question: "Apa perbedaan utama antara enkripsi simetris dan asimetris?",
      options: [
        "Simetris menggunakan satu kunci, asimetris menggunakan pasangan kunci", 
        "Simetris lebih lambat dari asimetris", 
        "Asimetris hanya digunakan untuk enkripsi disk",
        "Tidak ada perbedaan signifikan"
      ],
      answer: "Simetris menggunakan satu kunci, asimetris menggunakan pasangan kunci"
    },
    {
      id: 2,
      question: "Algoritma enkripsi AES-256 termasuk dalam kategori?",
      options: ["Enkripsi asimetris", "Enkripsi simetris", "Fungsi hash", "Protokol pertukaran kunci"],
      answer: "Enkripsi simetris"
    },
    {
      id: 3,
      question: "Manakah yang BUKAN penggunaan umum enkripsi?",
      options: [
        "Melindungi data dalam penyimpanan (data at rest)", 
        "Mengkompresi data untuk menghemat ruang", 
        "Mengamankan komunikasi jaringan (data in transit)",
        "Melindungi data yang sedang diproses (data in use)"
      ],
      answer: "Mengkompresi data untuk menghemat ruang" 
    },
    {
      id: 4,
      question: "Apa tujuan utama dari segmentasi jaringan?",
      options: [
        "Mempercepat kecepatan internet", 
        "Membatasi penyebaran serangan jika terjadi pelanggaran", 
        "Mengurangi biaya perangkat jaringan",
        "Menyederhanakan manajemen pengguna"
      ],
      answer: "Membatasi penyebaran serangan jika terjadi pelanggaran"
    },
    {
      id: 5,
      question: "Serangan Man-in-the-Middle (MitM) dapat dicegah dengan?",
      options: [
        "Menggunakan enkripsi end-to-end", 
        "Memperbesar bandwidth jaringan", 
        "Menonaktifkan firewall",
        "Menggunakan protokol HTTP"
      ],
      answer: "Teknik manipulasi psikologis untuk mendapatkan informasi pribadi"
    },
    {
      id: 6,
      question: "Kasus pelanggaran data Equifax 2017 terutama disebabkan oleh?",
      options: [
        "Serangan DDoS", 
        "Kerentanan software yang tidak ditambal", 
        "Password yang lemah",
        "Social engineering"
      ],
      answer: "Kerentanan software yang tidak ditambal"
    },
    {
      id: 7,
      question: "Apa yang dimaksud dengan SQL Injection?",
      options: [
        "Teknik mengoptimalkan query database",
        "Serangan dengan menyisipkan perintah SQL melalui input pengguna",
        "Metode backup database otomatis",
        "Cara mengimpor data ke database"
      ],
      answer: "Serangan dengan menyisipkan perintah SQL melalui input pengguna"
    },
    {
      id: 8,
      question: "Manakah yang BUKAN termasuk dalam OWASP Top 10 2023?",
      options: [
        "Broken Access Control",
        "Cross-Site Scripting (XSS)",
        "Slowloris Attack",
        "Security Misconfiguration"
      ],
      answer: "Slowloris Attack"
    },
    {
      id: 9,
      question: "Bagaimana cara terbaik mencegah XSS (Cross-Site Scripting)?",
      options: [
        "Menggunakan parameterized queries",
        "Melakukan input validation dan output encoding",
        "Menonaktifkan JavaScript",
        "Mengenkripsi semua input pengguna"
      ],
      answer: "Melakukan input validation dan output encoding"
    },
    {
      id: 10,
      question: "Apa keuntungan utama menggunakan Prepared Statements dalam pemrograman database?",
      options: [
        "Meningkatkan performa query",
        "Mencegah SQL Injection",
        "Mengurangi ukuran database",
        "Mempermudah debugging"
      ],
      answer: "Mencegah SQL Injection"
    }
  ],
  lanjut: [
    {
      id: 1,
      question: "Dalam model tanggung jawab bersama (shared responsibility model) untuk IaaS, pelanggan bertanggung jawab untuk?",
      options: [
        "Keamanan fisik data center", 
        "Keamanan hypervisor", 
        "Keamanan sistem operasi dan aplikasi",
        "Keamanan jaringan bawah (underlying network)"
      ],
      answer: "Keamanan sistem operasi dan aplikasi"
    },
    {
      id: 2,
      question: "Ancaman keamanan cloud yang paling umum menurut laporan terbaru adalah?",
      options: ["Serangan DDoS", "Konfigurasi yang salah", "Zero-day exploits", "Serangan brute force"],
      answer: "Data carving"
    },
    {
      id: 3,
      question: "Apa tujuan utama dari Cloud Security Posture Management (CSPM)?",
      options: [
        "Mengoptimalkan biaya cloud", 
        "Mengidentifikasi dan memperbaiki konfigurasi yang salah", 
        "Meningkatkan performa aplikasi cloud",
        "Mengelola kuota pengguna cloud"
      ],
      answer: "Mengidentifikasi dan memperbaiki konfigurasi yang salah"
    },
    {
      id: 4,
      question: "Fase pertama dalam metodologi penetration testing adalah?",
      options: ["Scanning", "Exploitation", "Reconnaissance", "Reporting"],
      answer: "Reconnaissance"
    },
    {
      id: 5,
      question: "Apa tujuan fase 'Maintaining Access' dalam penetration testing?",
      options: [
        "Menghapus jejak aktivitas testing", 
        "Mengevaluasi kemampuan deteksi sistem", 
        "Menilai dampak potensial jika penyerang berhasil masuk",
        "Mengumpulkan informasi awal tentang target"
      ],
      answer: "Menilai dampak potensial jika penyerang berhasil masuk"
    },
    {
      id: 6,
      question: "Tool yang khusus digunakan untuk simulasi serangan tim red team adalah?",
      options: ["Wireshark", "Cobalt Strike", "Nessus", "Nmap" ],
      answer: "Cobalt Strike"
    },
    {
      id: 7,
      question: "Teknik social engineering yang menggunakan skenario yang dibuat-buat disebut?",
      options: [
        "Phishing", 
        "Pretexting", 
        "Baiting", 
        "Tailgating"
      ],
      answer: "Pretexting"
    },
    {
      id: 8,
      question: "Kasus Twitter Bitcoin Scam 2020 terutama melibatkan?",
      options: [
        "Exploit zero-day", 
        "Social engineering terhadap karyawan", 
        "Konfigurasi cloud yang salah",
        "Serangan DDoS"
      ],
      answer: "Social engineering terhadap karyawan"
    },
    {
      id: 9,
      question: "Apa bahaya utama dari deepfake technology dalam konteks social engineering?",
      options: [
        "Merusak perangkat keras", 
        "Memanipulasi orang dengan konten audio/video palsu", 
        "Mengenkripsi data korban",
        "Menyebabkan overload jaringan"
      ],
      answer: "Memanipulasi orang dengan konten audio/video palsu"
    },
    {
      id: 10,
      question: "ADalam konteks keylogging, teknik 'form grabbing' terutama menargetkan",
      options: [
        "Input keyboard secara real-time",
        "Data yang dikirim melalui form web sebelum dienkripsi",
        "Screenshot layar pengguna",
        "Memory proses aplikasi"
      ],
      answer: "Data yang dikirim melalui form web sebelum dienkripsi"
    }
  ]
};

export default function CyberEduQuiz() {
  const [activeScreen, setActiveScreen] = useState('welcome'); // welcome, levelSelect, quiz, result
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (activeScreen === 'quiz') {
      console.log(`Pertanyaan ${currentQuestion + 1}/${quizData[selectedLevel].length}`);
    }
  }, [currentQuestion, activeScreen, selectedLevel]);

  useEffect(() => {
    console.log("Total jawaban:", answers.length);
  }, [answers]);

  useEffect(() => {
    console.log("Answers updated:", answers.length);
  }, [answers]);

  useEffect(() => {
    console.log("Quiz Data Validation:", {
      level: selectedLevel,
      totalQuestions: quizData[selectedLevel]?.length,
      lastQuestionId: quizData[selectedLevel]?.[quizData[selectedLevel]?.length - 1]?.id
    });
  }, [selectedLevel]);

  useEffect(() => {
    let timer;
    if (activeScreen === 'quiz' && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
    
    return () => clearTimeout(timer);
  }, [timeLeft, activeScreen]);

  const startQuiz = (level) => {
    setSelectedLevel(level);
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setTimeLeft(30); // 30 seconds per question
    setQuizCompleted(false);
    setActiveScreen('quiz');
  };

  const handleOptionSelect = async (option) => {
    if (selectedOption !== null || quizCompleted) return;

    const currentQ = quizData[selectedLevel][currentQuestion];
    const isCorrect = option === currentQ.answer;

    // Simpan jawaban terlebih dahulu
    const newAnswer = {
      questionId: currentQ.id,
      question: currentQ.question,
      selectedAnswer: option,
      correctAnswer: currentQ.answer,
      isCorrect
    };

    // Update state secara atomic
    await setAnswers(prev => [...prev, newAnswer]);
    setSelectedOption(option);
    if (isCorrect) setScore(prev => prev + 1);

    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => handleNextQuestion(), 1000);
    }, 1000);
  };

  const handleNextQuestion = async () => {
    setSelectedOption(null);
    
    if (currentQuestion < quizData[selectedLevel].length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(30);
    } else {
      // Tunggu semua state benar-benar terupdate
      await new Promise(resolve => setTimeout(resolve, 500));
      
      try {
        // Verifikasi data sebelum dikirim
        console.log("All answers before submit:", answers);
        
        const quizResultData = {
          level: selectedLevel,
          score: score,
          answers: quizData[selectedLevel].map((q, idx) => {
            const answer = answers.find(a => a.questionId === q.id) || {};
            return {
              question_id: q.id.toString(),
              selected_option: answer.selectedAnswer || '',
              is_correct: answer.isCorrect || false
            };
          })
        };

        console.log("Data to be sent:", quizResultData);

        const token = localStorage.getItem("authToken");
        if (!token) throw new Error("No authentication token");

        const response = await submitQuizResult(quizResultData, token);
        console.log("API Response:", response);
        
        setQuizCompleted(true);
        setActiveScreen('result');
      } catch (error) {
        console.error("Submission Error:", {
          error: error.message,
          response: error.response?.data,
          answers: answers
        });
        setQuizCompleted(true);
        setActiveScreen('result');
      }
    }
  };

  const resetQuiz = () => {
    setActiveScreen('levelSelect');
    setSelectedLevel(null);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getTimerColor = () => {
    if (timeLeft > 20) return 'text-green-500';
    if (timeLeft > 10) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getDifficultyColor = (level) => {
    switch(level) {
      case 'dasar': return 'bg-green-500';
      case 'menengah': return 'bg-yellow-500';
      case 'lanjut': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  const getDifficultyText = (level) => {
    switch(level) {
      case 'dasar': return 'Dasar';
      case 'menengah': return 'Menengah';
      case 'lanjut': return 'Lanjut';
      default: return level;
    }
  };

  const renderWelcomeScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="mb-6 text-5xl font-bold">
        <span className="text-blue-300">Cyber</span>
        <span className="text-green-300">Edu</span>
      </div>
      <div className="text-6xl font-extrabold mb-8 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          QUIZ CHALLENGE
        </span>
      </div>
      <p className="text-xl mb-12 text-center max-w-lg">
        Uji pengetahuan keamanan siber Anda melalui kuis interaktif dengan tiga tingkat kesulitan!
      </p>
      <button 
        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xl font-bold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-lg"
        onClick={() => setActiveScreen('levelSelect')}
      >
        Mulai Sekarang
      </button>
    </div>
  );

  const renderLevelSelectScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <h1 className="text-4xl font-bold mb-10">Pilih Tingkat Kesulitan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {['dasar', 'menengah', 'lanjut'].map((level) => (
          <div 
            key={level}
            className={`${getDifficultyColor(level)} bg-opacity-20 border-2 border-opacity-50 ${level === 'dasar' ? 'border-green-500' : level === 'menengah' ? 'border-yellow-500' : 'border-red-500'} rounded-xl p-6 cursor-pointer hover:transform hover:scale-105 transition-all`}
            onClick={() => startQuiz(level)}
          >
            <div className="flex flex-col items-center">
              <div className={`w-20 h-20 ${getDifficultyColor(level)} rounded-full flex items-center justify-center mb-4`}>
                {level === 'dasar' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                ) : level === 'menengah' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-2">{getDifficultyText(level)}</h2>
              <p className="text-center text-sm">
                {level === 'dasar' ? 'Konsep dasar keamanan siber untuk pemula' : 
                 level === 'menengah' ? 'Pengetahuan menengah untuk yang sudah familiar' : 
                 'Topik lanjutan untuk profesional keamanan siber'}
              </p>
              <div className="flex items-center mt-4">
                <div className="flex">
                  {[...Array(level === 'dasar' ? 1 : level === 'menengah' ? 2 : 3)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${level === 'dasar' ? 'text-green-500' : level === 'menengah' ? 'text-yellow-500' : 'text-red-500'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <button 
                className={`mt-6 px-6 py-2 ${level === 'dasar' ? 'bg-green-500 hover:bg-green-600' : level === 'menengah' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-red-500 hover:bg-red-600'} text-white rounded-full font-semibold transform transition-all`}
              >
                Mulai Quiz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderQuizScreen = () => {
    if (!selectedLevel) return null;
    
    const currentQ = quizData[selectedLevel][currentQuestion];
    
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="w-full max-w-3xl bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg">
          <div className="flex justify-between items-center mb-6">
            <div className={`px-4 py-1 ${getDifficultyColor(selectedLevel)} rounded-full text-white font-medium`}>
              {getDifficultyText(selectedLevel)}
            </div>
            <div className={`px-4 py-1 bg-gray-800 rounded-full ${getTimerColor()} font-medium`}>
              {timeLeft} detik
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Pertanyaan {currentQuestion + 1} dari {quizData[selectedLevel].length}</span>
              <span>Skor: {score}</span>
            </div>
            <div className="w-full bg-gray-300 bg-opacity-20 rounded-full h-2.5">
              <div 
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${((currentQuestion + 1) / quizData[selectedLevel].length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <h2 className="text-xl md:text-2xl font-semibold mb-6">{currentQ.question}</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                disabled={selectedOption !== null}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  selectedOption === option 
                    ? option === currentQ.answer 
                      ? 'border-green-500 bg-green-500 bg-opacity-20' 
                      : 'border-red-500 bg-red-500 bg-opacity-20'
                    : 'border-gray-300 border-opacity-50 hover:border-blue-400 hover:bg-blue-500 hover:bg-opacity-10'
                } ${isAnimating && selectedOption === option ? 'animate-pulse' : ''}`}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
                    selectedOption === option 
                      ? option === currentQ.answer 
                        ? 'bg-green-500' 
                        : 'bg-red-500'
                      : 'bg-gray-700'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                  
                  {selectedOption === option && (
                    option === currentQ.answer ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderResultScreen = () => {
    const percentage = (score / quizData[selectedLevel].length) * 100;
    let message, color;
    
    if (percentage >= 80) {
      message = "Luar Biasa! Anda adalah ahli keamanan siber!";
      color = "text-green-400";
    } else if (percentage >= 60) {
      message = "Bagus! Anda memiliki pemahaman yang baik tentang keamanan siber.";
      color = "text-blue-400";
    } else if (percentage >= 40) {
      message = "Cukup baik. Terus pelajari lebih lanjut tentang keamanan siber!";
      color = "text-yellow-400";
    } else {
      message = "Jangan menyerah! Terus belajar untuk meningkatkan pemahaman Anda.";
      color = "text-red-400";
    }
    
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="w-full max-w-3xl bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg">
          <h1 className="text-3xl font-bold mb-2 text-center">Hasil Kuis</h1>
          <p className="text-center mb-8">Tingkat: {getDifficultyText(selectedLevel)}</p>
          
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-48 h-48 mb-6">
              <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center">
                <div className={`text-5xl font-bold ${color}`}>{percentage.toFixed(0)}%</div>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="#374151" 
                  strokeWidth="8"
                />
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke={percentage >= 80 ? "#10B981" : percentage >= 60 ? "#3B82F6" : percentage >= 40 ? "#FBBF24" : "#EF4444"} 
                  strokeWidth="8"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * percentage) / 100}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>
            <p className="text-xl font-semibold mb-2">
              Skor Anda: {score} dari {quizData[selectedLevel].length}
            </p>
            <p className={`text-lg ${color} text-center`}>{message}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Ringkasan Jawaban</h2>
            <div className="space-y-4">
              {answers.map((answer, index) => (
                <div key={index} className={`p-4 rounded-lg ${answer.isCorrect ? 'bg-green-500 bg-opacity-10 border border-green-500' : 'bg-red-500 bg-opacity-10 border border-red-500'}`}>
                  <p className="font-medium mb-2">
                    {index + 1}. {answer.question}
                  </p>
                  <div className="flex items-center">
                    <span className={answer.isCorrect ? 'text-green-400' : 'text-red-400'}>
                      Jawaban Anda: {answer.selectedAnswer}
                    </span>
                    {!answer.isCorrect && (
                      <span className="text-green-400 ml-auto">
                        Jawaban Benar: {answer.correctAnswer}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
              onClick={() => startQuiz(selectedLevel)}
            >
              Ulangi Quiz
            </button>
            <button 
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors"
              onClick={resetQuiz}
            >
              Pilih Level Lain
            </button>
          </div>
        </div>
      </div>
    );
  };
 
  // Main render logic
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      {activeScreen === 'welcome' && renderWelcomeScreen()}
      {activeScreen === 'levelSelect' && renderLevelSelectScreen()}
      {activeScreen === 'quiz' && renderQuizScreen()}
      {activeScreen === 'result' && renderResultScreen()}
    </div>
  );
}