import { useState, useEffect } from 'react';

// Quiz data
const quizData = {
  dasar: [
    {
      id: 1,
      question: "Apa kepanjangan dari URL?",
      options: [
        "Universal Resource Locator",
        "Uniform Resource Locator", 
        "Universal Reference Link",
        "Uniform Reference Link"
      ],
      answer: "Uniform Resource Locator"
    },
    {
      id: 2,
      question: "Teknik pengiriman email penipuan yang bertujuan untuk mencuri data pribadi disebut?",
      options: ["Malware", "Phishing", "Trojan Horse", "Ransomware"],
      answer: "Phishing"
    },
    {
      id: 3,
      question: "Apa fungsi utama dari firewall?",
      options: [
        "Mengenkripsi data", 
        "Mencegat dan memblokir akses yang tidak sah", 
        "Mempercepat koneksi internet",
        "Membuat backup data"
      ],
      answer: "Mencegat dan memblokir akses yang tidak sah"
    },
    {
      id: 4,
      question: "Apa yang dimaksud dengan malware?",
      options: [
        "Software yang membantu keamanan komputer", 
        "Software berbahaya yang merusak sistem komputer", 
        "Software untuk meningkatkan kinerja komputer",
        "Software untuk membuat backup data"
      ],
      answer: "Software berbahaya yang merusak sistem komputer"
    },
    {
      id: 5,
      question: "Cara terbaik untuk membuat password yang kuat adalah?",
      options: [
        "Menggunakan tanggal lahir", 
        "Menggunakan nama keluarga", 
        "Kombinasi huruf, angka, dan simbol yang acak",
        "Menggunakan password yang sama untuk semua akun"
      ],
      answer: "Kombinasi huruf, angka, dan simbol yang acak"
    }
  ],
  menengah: [
    {
      id: 1,
      question: "Apa yang dimaksud dengan serangan DDoS?",
      options: [
        "Serangan yang mencuri data pribadi", 
        "Serangan yang mengenkripsi data dan meminta tebusan", 
        "Serangan yang membanjiri server dengan traffic berlebih",
        "Serangan yang memanipulasi DNS"
      ],
      answer: "Serangan yang membanjiri server dengan traffic berlebih"
    },
    {
      id: 2,
      question: "Teknik enkripsi asimetris menggunakan berapa kunci?",
      options: ["1 kunci", "2 kunci", "3 kunci", "4 kunci"],
      answer: "2 kunci"
    },
    {
      id: 3,
      question: "Apa yang dimaksud dengan VPN?",
      options: [
        "Virtual Private Network", 
        "Virtual Public Network", 
        "Virtual Protection Network",
        "Virtual Personal Network"
      ],
      answer: "Virtual Private Network"
    },
    {
      id: 4,
      question: "Apa fungsi dari protokol HTTPS?",
      options: [
        "Mempercepat loading website", 
        "Mengamankan transfer data antara browser dan website", 
        "Meningkatkan SEO website",
        "Memblokir iklan di website"
      ],
      answer: "Mengamankan transfer data antara browser dan website"
    },
    {
      id: 5,
      question: "Apa yang dimaksud dengan social engineering dalam konteks keamanan siber?",
      options: [
        "Teknik untuk membangun jejaring sosial", 
        "Teknik manipulasi psikologis untuk mendapatkan informasi pribadi", 
        "Teknik untuk mengoptimalkan media sosial",
        "Teknik untuk membangun tim IT"
      ],
      answer: "Teknik manipulasi psikologis untuk mendapatkan informasi pribadi"
    }
  ],
  lanjut: [
    {
      id: 1,
      question: "Apa yang dimaksud dengan Zero-day vulnerability?",
      options: [
        "Kerentanan yang tidak pernah ditemukan", 
        "Kerentanan yang baru ditemukan dan belum ada perbaikannya", 
        "Kerentanan yang sudah diperbaiki dalam nol hari",
        "Kerentanan yang tidak berbahaya"
      ],
      answer: "Kerentanan yang baru ditemukan dan belum ada perbaikannya"
    },
    {
      id: 2,
      question: "Teknik forensik digital yang digunakan untuk memulihkan data yang telah dihapus disebut?",
      options: ["Data mining", "Data recovery", "Data carving", "Data scraping"],
      answer: "Data carving"
    },
    {
      id: 3,
      question: "Apa fungsi dari Intrusion Detection System (IDS)?",
      options: [
        "Mencegah serangan siber", 
        "Mendeteksi aktivitas mencurigakan pada jaringan", 
        "Mengenkripsi data pada jaringan",
        "Mempercepat kinerja jaringan"
      ],
      answer: "Mendeteksi aktivitas mencurigakan pada jaringan"
    },
    {
      id: 4,
      question: "Teknik untuk menyembunyikan informasi di dalam file lain disebut?",
      options: ["Enkripsi", "Steganografi", "Hashing", "Tokenisasi"],
      answer: "Steganografi"
    },
    {
      id: 5,
      question: "Apa yang dimaksud dengan blockchain dalam konteks keamanan siber?",
      options: [
        "Teknik untuk memblokir serangan", 
        "Database terdistribusi yang aman dan transparan", 
        "Sistem untuk memblokir spam",
        "Firewall generasi terbaru"
      ],
      answer: "Database terdistribusi yang aman dan transparan"
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

  const handleOptionSelect = (option) => {
    if (selectedOption !== null || quizCompleted) return;
    setSelectedOption(option);
    
    const isCorrect = option === quizData[selectedLevel][currentQuestion].answer;
    setAnswers([...answers, { 
      question: quizData[selectedLevel][currentQuestion].question,
      selectedAnswer: option,
      correctAnswer: quizData[selectedLevel][currentQuestion].answer,
      isCorrect 
    }]);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        handleNextQuestion();
      }, 500);
    }, 1000);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    if (currentQuestion < quizData[selectedLevel].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30); // Reset timer for next question
    } else {
      setQuizCompleted(true);
      setActiveScreen('result');
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