// Dasar.jsx
import { Shield, Lock, ChevronLeft, AlertTriangle, Wifi, Key, Smartphone, User, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import React from 'react';

export default function Dasar({ onBack }) {
  const [activeTopic, setActiveTopic] = useState(0);
  
  const topics = [
    {
      id: 0,
      title: "Pengenalan Keamanan Cyber",
      icon: <Shield className="w-5 h-5 mr-3 text-blue-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Apa itu Keamanan Cyber?</h4>
            <p className="text-gray-700 leading-relaxed">
              Keamanan cyber adalah praktik melindungi sistem, jaringan, program, dan data dari serangan digital. 
              Di era digital saat ini, keamanan cyber menjadi sangat penting karena hampir semua aspek kehidupan 
              kita terhubung dengan internet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <AlertTriangle className="w-6 h-6 mr-3 text-yellow-500 bg-yellow-100 p-1 rounded-full" />
                Ancaman Umum
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Malware (virus, worm, trojan)</li>
                <li className="leading-snug">Phishing dan social engineering</li>
                <li className="leading-snug">Serangan DDoS</li>
                <li className="leading-snug">Eksploitasi kerentanan software</li>
                <li className="leading-snug">Serangan brute force</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Shield className="w-6 h-6 mr-3 text-green-500 bg-green-100 p-1 rounded-full" />
                Prinsip Dasar
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Kerahasiaan (confidentiality)</li>
                <li className="leading-snug">Integritas (integrity)</li>
                <li className="leading-snug">Ketersediaan (availability)</li>
                <li className="leading-snug">Autentikasi (authentication)</li>
                <li className="leading-snug">Non-repudiation</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 shadow-sm">
            <h4 className="font-bold text-xl text-purple-800 mb-3">Statistik Penting</h4>
            <p className="text-gray-700 leading-relaxed">
              Menurut laporan terbaru, <span className="font-semibold text-purple-700">95% pelanggaran keamanan cyber</span> disebabkan oleh kesalahan manusia. 
              Pelatihan kesadaran keamanan dapat mengurangi risiko serangan hingga <span className="font-semibold text-purple-700">70%</span>. Setiap <span className="font-semibold text-purple-700">39 detik</span>, 
              terjadi serangan cyber di suatu tempat di dunia.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Keamanan Password",
      icon: <Key className="w-5 h-5 mr-3 text-blue-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200 shadow-sm">
            <h4 className="font-bold text-xl text-green-800 mb-3">Membuat Password yang Kuat</h4>
            <p className="text-gray-700 leading-relaxed">
              Password adalah garis pertahanan pertama Anda dalam keamanan digital. Password yang lemah 
              dapat dengan mudah dibobol menggunakan teknik brute force atau dictionary attack.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg flex items-center">
                <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
                Yang Harus Dilakukan
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Gunakan minimal 12 karakter</li>
                <li className="leading-snug">Kombinasikan huruf besar, kecil, angka, dan simbol</li>
                <li className="leading-snug">Gunakan frasa sandi (passphrase) yang mudah diingat</li>
                <li className="leading-snug">Gunakan password manager</li>
                <li className="leading-snug">Aktifkan autentikasi dua faktor (2FA)</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg flex items-center">
                <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">✗</span>
                Yang Harus Dihindari
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Jangan gunakan informasi pribadi</li>
                <li className="leading-snug">Jangan gunakan kata-kata umum</li>
                <li className="leading-snug">Jangan gunakan password yang sama untuk banyak akun</li>
                <li className="leading-snug">Jangan simpan password di browser</li>
                <li className="leading-snug">Jangan bagikan password Anda</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200 shadow-sm">
            <h4 className="font-bold text-xl text-yellow-800 mb-4">Contoh Password Kuat</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center font-mono text-sm shadow-inner hover:shadow-md transition-shadow">
                Blu3$kyW!thSun@2023
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center font-mono text-sm shadow-inner hover:shadow-md transition-shadow">
                Coffee!L0ver#Secure
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center font-mono text-sm shadow-inner hover:shadow-md transition-shadow">
                Winter*Is-Coming^22
              </div>
            </div>
            <p className="mt-4 text-sm text-yellow-700 italic">*Gunakan password unik dan jangan gunakan contoh di atas</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Virus dan Malware",
      icon: <AlertTriangle className="w-5 h-5 mr-3 text-blue-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border border-red-200 shadow-sm">
            <h4 className="font-bold text-xl text-red-800 mb-3">Apa itu Malware?</h4>
            <p className="text-gray-700 leading-relaxed">
              Malware (malicious software) adalah program yang dirancang untuk menyusup atau merusak sistem komputer 
              tanpa izin pemilik. Malware dapat mencuri data, memata-matai aktivitas, atau mengendalikan perangkat Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Shield className="w-6 h-6 mr-3 text-red-500 bg-red-100 p-1 rounded-full" />
                Jenis Malware
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Virus - Menyebar dengan menginfeksi file</li>
                <li className="leading-snug">Worm - Menyebar melalui jaringan</li>
                <li className="leading-snug">Trojan - Menyamar sebagai software legit</li>
                <li className="leading-snug">Ransomware - Mengenkripsi data dan meminta tebusan</li>
                <li className="leading-snug">Spyware - Memata-matai aktivitas pengguna</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <AlertTriangle className="w-6 h-6 mr-3 text-orange-500 bg-orange-100 p-1 rounded-full" />
                Tanda Infeksi
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Performa komputer melambat</li>
                <li className="leading-snug">Banyak pop-up muncul</li>
                <li className="leading-snug">Program tidak dikenal berjalan</li>
                <li className="leading-snug">Perubahan pada homepage browser</li>
                <li className="leading-snug">File hilang atau terenkripsi</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Shield className="w-6 h-6 mr-3 text-green-500 bg-green-100 p-1 rounded-full" />
                Pencegahan
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Pasang antivirus terbaru</li>
                <li className="leading-snug">Update sistem operasi rutin</li>
                <li className="leading-snug">Hindari klik link mencurigakan</li>
                <li className="leading-snug">Scan file sebelum dibuka</li>
                <li className="leading-snug">Backup data penting</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-4">Kasus Malware Terkenal</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-bold text-red-600 mb-2">WannaCry (2017)</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ransomware yang menginfeksi 200,000 komputer di 150 negara, menyebabkan kerugian miliaran dolar.
                  Menyerang sistem Windows yang tidak di-update dengan mengeksploitasi kerentanan EternalBlue.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-bold text-red-600 mb-2">Stuxnet (2010)</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Worm canggih yang menyerang fasilitas nuklir Iran, diduga dikembangkan oleh negara.
                  Merupakan malware pertama yang menargetkan sistem kontrol industri secara spesifik.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors group"
      >
        <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Kembali ke semua level</span>
      </button>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Level Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white">
          <div className="flex items-center">
            <div className="mr-5 bg-white/20 p-3 rounded-full">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dasar Keamanan Cyber</h2>
              <p className="opacity-90 mt-1">Pengenalan keamanan cyber untuk pemula</p>
            </div>
          </div>
        </div>

        {/* Topics Navigation and Content */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* Topics List */}
          <div className="bg-gray-50 p-6 border-r border-gray-200">
            <h3 className="font-semibold text-lg mb-5 text-gray-800 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Daftar Materi
            </h3>
            <ul className="space-y-3">
              {topics.map((topic) => (
                <li 
                  key={topic.id}
                  onClick={() => setActiveTopic(topic.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    activeTopic === topic.id 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white hover:bg-gray-100 text-gray-800 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center">
                    {React.cloneElement(topic.icon, {
                      className: `w-5 h-5 mr-3 ${activeTopic === topic.id ? 'text-white' : 'text-blue-500'}`
                    })}
                    <span className="font-medium">{topic.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Topic Content */}
          <div className="md:col-span-3 p-8">
            <div className="flex items-center mb-8">
              <div className="mr-4 bg-blue-100 p-3 rounded-full">
                {React.cloneElement(topics[activeTopic].icon, {
                  className: "w-6 h-6 text-blue-600"
                })}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{topics[activeTopic].title}</h3>
            </div>
            
            {topics[activeTopic].content}
            
            <div className="mt-10 pt-6 border-t border-gray-200 flex justify-between">
              {activeTopic > 0 && (
                <button 
                  onClick={() => setActiveTopic(activeTopic - 1)}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-medium">Sebelumnya</span>
                </button>
              )}
              
              {activeTopic < topics.length - 1 && (
                <button 
                  onClick={() => setActiveTopic(activeTopic + 1)}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group ml-auto"
                >
                  <span className="font-medium">Selanjutnya</span>
                  <ChevronLeft className="w-5 h-5 ml-1 transform rotate-180 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}