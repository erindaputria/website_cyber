// Lanjut.jsx
import { Cloud, Code, Lock, ChevronLeft, Shield, Cpu, Network, Key, Terminal, Hash, Server, Wifi, EyeOff, Users, Monitor, Clipboard, Bug, Fingerprint, Database } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export default function Lanjut({ onBack }) {
  const [activeTopic, setActiveTopic] = useState(0);
  
  const topics = [
    {
      id: 0,
      title: "Cloud Computing Security",
      icon: <Cloud className="w-5 h-5 mr-3 text-blue-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Keamanan Cloud Modern</h4>
            <p className="text-gray-700 leading-relaxed">
              Keamanan cloud computing memerlukan pendekatan shared responsibility model antara penyedia cloud dan pengguna. 
              Tantangan utama termasuk konfigurasi yang salah, data exposure, dan akses yang tidak sah.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Shield className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
                Model Keamanan
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">IaaS: Pelanggan bertanggung jawab dari OS ke atas</li>
                <li className="leading-snug">PaaS: Penyedia mengelola OS dan middleware</li>
                <li className="leading-snug">SaaS: Penyedia mengelola seluruh stack</li>
                <li className="leading-snug">Serverless: Penyedia mengelola infrastruktur</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Database className="w-6 h-6 mr-3 text-blue-500 bg-purple-100 p-1 rounded-full" />
                Ancaman Cloud
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Konfigurasi yang salah (S3 buckets terbuka)</li>
                <li className="leading-snug">Account hijacking</li>
                <li className="leading-snug">Insecure APIs</li>
                <li className="leading-snug">Insider threats</li>
                <li className="leading-snug">Data loss/breach</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Cpu className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
                Praktik Terbaik
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Prinsip least privilege (IAM)</li>
                <li className="leading-snug">Enkripsi data in-transit dan at-rest</li>
                <li className="leading-snug">Multi-factor authentication</li>
                <li className="leading-snug">Cloud Security Posture Management</li>
                <li className="leading-snug">Logging dan monitoring terpusat</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Tools Cloud Security</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-blue-600 mb-2">AWS Security Hub</h5>
                <p className="text-sm text-gray-600">
                  Layanan keamanan terpusat untuk AWS dengan pemeriksaan otomatis terhadap best practices
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-blue-600 mb-2">Azure Security Center</h5>
                <p className="text-sm text-gray-600">
                  Solusi manajemen keamanan terpadu untuk perlindungan workload hybrid cloud
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-blue-600 mb-2">Prisma Cloud</h5>
                <p className="text-sm text-gray-600">
                  Platform keamanan cloud-native yang komprehensif untuk multi-cloud
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Teknik Hacking Etis",
      icon: <Bug className="w-5 h-5 mr-3 text-blue-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Ethical Hacking Framework</h4>
            <p className="text-gray-700 leading-relaxed">
              Ethical hacking dilakukan untuk mengidentifikasi kerentanan sebelum penyerang nyata menemukannya. 
              Mengikuti metodologi terstruktur untuk memastikan cakupan yang komprehensif dan hasil yang dapat ditindaklanjuti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">Fase Penetration Testing</h4>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <span className="font-medium text-gray-800">Reconnaissance</span>
                  <p className="text-sm text-gray-600">Pengumpulan informasi pasif dan aktif</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Scanning</span>
                  <p className="text-sm text-gray-600">Identifikasi port, services, dan kerentanan</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Gaining Access</span>
                  <p className="text-sm text-gray-600">Eksploitasi kerentanan</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Maintaining Access</span>
                  <p className="text-sm text-gray-600">Pemeliharaan akses untuk penilaian dampak</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Covering Tracks</span>
                  <p className="text-sm text-gray-600">Analisis kemampuan deteksi sistem</p>
                </li>
              </ol>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">Teknik Lanjutan</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Advanced Persistent Threat simulation</li>
                <li className="leading-snug">Zero-day exploit research</li>
                <li className="leading-snug">Binary reverse engineering</li>
                <li className="leading-snug">Memory corruption attacks</li>
                <li className="leading-snug">Wireless network exploitation</li>
                <li className="leading-snug">ICS/SCADA system testing</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Tools Hacking Etis</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-blue-600 mb-2">Metasploit Framework</h5>
                <p className="text-sm text-gray-600">
                  Platform untuk pengembangan dan eksekusi exploit terhadap target remote
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-blue-600 mb-2">Burp Suite Pro</h5>
                <p className="text-sm text-gray-600">
                  Platform terintegrasi untuk pengujian keamanan aplikasi web
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-blue-600 mb-2">Cobalt Strike</h5>
                <p className="text-sm text-gray-600">
                  Platform simulasi ancaman untuk tim red team
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "SKIM (Social Engineering)",
      icon: <Users className="w-5 h-5 mr-3 text-blue-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Social Engineering Framework</h4>
            <p className="text-gray-700 leading-relaxed">
              SKIM (Social Engineering, Keylogging, and Information Manipulation) memanfaatkan kelemahan manusia sebagai titik masuk. 
              98% serangan cyber melibatkan social engineering dalam beberapa bentuk.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Users className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
                Teknik Social
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Phishing (email, smishing, vishing)</li>
                <li className="leading-snug">Pretexting (skenario yang dibuat)</li>
                <li className="leading-snug">Baiting (umpan fisik/digital)</li>
                <li className="leading-snug">Quid pro quo (pertukaran palsu)</li>
                <li className="leading-snug">Tailgating (akses fisik)</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Monitor className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
                Keylogging
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Hardware keyloggers</li>
                <li className="leading-snug">Software-based keyloggers</li>
                <li className="leading-snug">Memory injection</li>
                <li className="leading-snug">Form grabbing</li>
                <li className="leading-snug">Screen capturing</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Clipboard className="w-6 h-6 mr-3 text-blue-500 bg-purple-100 p-1 rounded-full" />
                Info Manipulation
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Disinformation campaigns</li>
                <li className="leading-snug">Fake news propagation</li>
                <li className="leading-snug">Deepfake technology</li>
                <li className="leading-snug">Reputation attacks</li>
                <li className="leading-snug">Psychological operations</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Studi Kasus SKIM</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-bold text-blue-600 mb-2">Twitter Bitcoin Scam (2020)</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Akun Twitter terverifikasi tinggi diretas melalui social engineering terhadap karyawan, 
                  memposting scam Bitcoin yang menghasilkan $120,000 dalam beberapa jam.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-bold text-blue-600 mb-2">Ubiquiti Breach (2021)</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Penyerang mendapatkan akses ke sistem cloud melalui social engineering canggih, 
                  menyebabkan kerugian $46 juta dari manipulasi informasi keuangan.
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
              <Cloud className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Keamanan Cyber Tingkat Lanjut</h2>
              <p className="opacity-90 mt-1">Teknik dan konsep tingkat lanjut untuk profesional keamanan</p>
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