// Menengah.jsx
import { Cloud, Code, Lock, ChevronLeft, Shield, Cpu, Network, Key, Terminal, Hash, Server, Wifi, EyeOff } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export default function Menengah({ onBack }) {
  const [activeTopic, setActiveTopic] = useState(0);
  
  const topics = [
    {
      id: 0,
      title: "Teknik Enkripsi",
      icon: <Lock className="w-5 h-5 mr-3 text-blue-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Dasar-dasar Enkripsi</h4>
            <p className="text-gray-700 leading-relaxed">
              Enkripsi adalah proses mengubah informasi menjadi bentuk yang tidak dapat dibaca tanpa kunci dekripsi yang tepat. 
              Teknologi ini menjadi tulang punggung keamanan digital modern, melindungi data baik dalam penyimpanan maupun transmisi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Key className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
                Jenis Enkripsi
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-blue-600 mb-1">Enkripsi Simetris</h5>
                  <p className="text-sm text-gray-600">
                    Menggunakan kunci yang sama untuk enkripsi dan dekripsi. Contoh: AES, DES, 3DES. 
                    Cepat tetapi memerlukan pertukaran kunci yang aman.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-blue-600 mb-1">Enkripsi Asimetris</h5>
                  <p className="text-sm text-gray-600">
                    Menggunakan pasangan kunci publik dan privat. Contoh: RSA, ECC. 
                    Lebih aman tetapi lebih lambat, sering digunakan untuk pertukaran kunci simetris.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Hash className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
                Algoritma Modern
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="font-medium text-gray-800">AES-256</span>
                  <p className="text-sm text-gray-600">Standard enkripsi simetris yang digunakan pemerintah AS</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">RSA-2048</span>
                  <p className="text-sm text-gray-600">Algoritma asimetris untuk pertukaran kunci dan tanda tangan digital</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">ECC (Elliptic Curve)</span>
                  <p className="text-sm text-gray-600">Lebih efisien dari RSA dengan tingkat keamanan sama</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Implementasi Praktis</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-blue-600 mb-2 flex items-center">
                  <EyeOff className="w-5 h-5 mr-2" />
                  Data at Rest
                </h5>
                <p className="text-sm text-gray-600">
                  Enkripsi disk (BitLocker, FileVault), database, dan file sensitif menggunakan AES
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-blue-600 mb-2 flex items-center">
                  <Wifi className="w-5 h-5 mr-2" />
                  Data in Transit
                </h5>
                <p className="text-sm text-gray-600">
                  TLS/SSL untuk komunikasi, VPN untuk koneksi remote, SSH untuk akses server
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-blue-600 mb-2 flex items-center">
                  <Server className="w-5 h-5 mr-2" />
                  Data in Use
                </h5>
                <p className="text-sm text-gray-600">
                  Homomorphic encryption memungkinkan komputasi pada data terenkripsi
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Network Security",
      icon: <Network className="w-5 h-5 mr-3 text-blue-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Keamanan Jaringan</h4>
            <p className="text-gray-700 leading-relaxed">
              Keamanan jaringan melibatkan kebijakan, praktik, dan teknologi untuk mencegah dan memantau akses tidak sah, 
              penyalahgunaan, modifikasi, atau penolakan jaringan komputer dan sumber daya yang dapat diakses jaringan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Shield className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
                Ancaman Jaringan
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Man-in-the-Middle attacks</li>
                <li className="leading-snug">Denial of Service (DoS/DDoS)</li>
                <li className="leading-snug">Packet sniffing</li>
                <li className="leading-snug">IP spoofing</li>
                <li className="leading-snug">DNS poisoning</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Cpu className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
                Perangkat Keamanan
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Firewall (Stateful/Next-gen)</li>
                <li className="leading-snug">Intrusion Detection/Prevention Systems</li>
                <li className="leading-snug">VPN concentrators</li>
                <li className="leading-snug">Web Application Firewalls</li>
                <li className="leading-snug">Network Access Control</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                <Network className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
                Praktik Terbaik
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Segmentasi jaringan (VLANs, subnetting)</li>
                <li className="leading-snug">Zero Trust Architecture</li>
                <li className="leading-snug">Enkripsi end-to-end</li>
                <li className="leading-snug">Pemantauan lalu lintas jaringan</li>
                <li className="leading-snug">Pembaruan firmware rutin</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Studi Kasus</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-bold text-blue-600 mb-2">Equifax Breach (2017)</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pelanggaran data besar karena kerentanan Apache Struts yang tidak ditambal. 
                  147 juta catatan konsumen terekspos, termasuk data sensitif seperti SSN.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-bold text-blue-600 mb-2">Target Breach (2013)</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Penyerang mendapatkan akses melalui vendor HVAC, kemudian berpindah ke sistem pembayaran. 
                  40 juta kartu kredit/debit dicuri karena kurangnya segmentasi jaringan.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Secure Coding",
      icon: <Terminal className="w-5 h-5 mr-3 text-blue-500" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Pengembangan Aman</h4>
            <p className="text-gray-700 leading-relaxed">
              Secure coding adalah praktik menulis kode yang meminimalkan kerentanan keamanan. 
              Dengan meningkatnya serangan pada lapisan aplikasi, pengembang harus memahami prinsip-prinsip keamanan sejak fase desain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">OWASP Top 10 2023</h4>
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
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">Praktik Pengembangan Aman</h4>
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
          
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-sm">
            <h4 className="font-bold text-xl text-yellow-800 mb-3">Contoh Kode Rentan vs Aman</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                <h5 className="font-medium text-red-600 mb-2">Rentan (SQL Injection)</h5>
                <pre className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                  {`// Vulnerable
                    String query = "SELECT * FROM users WHERE username = '" 
                                  + username + "' AND password = '" 
                                  + password + "'";
                    Statement stmt = connection.createStatement();
                    ResultSet rs = stmt.executeQuery(query);`
                  }
                </pre>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
                <h5 className="font-medium text-green-600 mb-2">Aman (Parameterized)</h5>
                <pre className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                  {`// Secure
                    String query = "SELECT * FROM users WHERE username = ? 
                                  AND password = ?";
                    PreparedStatement stmt = connection.prepareStatement(query);
                    stmt.setString(1, username);
                    stmt.setString(2, password);
                    ResultSet rs = stmt.executeQuery();`
                  }
                </pre>
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
              <Code className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Keamanan Cyber Tingkat Menengah</h2>
              <p className="opacity-90 mt-1">Pemahaman lebih dalam tentang teknik keamanan digital</p>
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