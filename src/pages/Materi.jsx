import { useState } from 'react';
import { Book, Lock, Shield, Code, Cloud, Search, ArrowRight, Info } from 'lucide-react';

// Main App Component
export default function CyberEduApp() {
  const [activeLevel, setActiveLevel] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);
  
  // Function to reset selections
  const resetSelections = () => {
    setActiveLevel(null);
    setActiveTopic(null);
  };
  
  // Content data structure
  const levels = [
    {
      id: 'basic',
      title: 'Dasar',
      icon: <Lock className="w-8 h-8 from-blue-900" />,
      description: 'Pengenalan keamanan cyber untuk pemula',
      topics: [
        {
          id: 'password',
          title: 'Password',
          icon: <Lock className="w-6 h-6 text-blue-400" />,
          content: (
            <div>
              <h3 className="text-xl font-bold mb-4">Keamanan Password</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="mb-2">Password adalah kunci digital pertama dalam keamanan cyber. Berikut beberapa praktik terbaik:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Gunakan minimal 12 karakter</li>
                  <li>Kombinasikan huruf besar, huruf kecil, angka, dan simbol</li>
                  <li>Hindari informasi pribadi yang mudah ditebak</li>
                  <li>Jangan gunakan password yang sama untuk beberapa akun</li>
                  <li>Gunakan pengelola password (password manager)</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Bahaya Password Lemah:</h4>
                <p>Password yang lemah dapat menyebabkan:</p>
                <ul className="list-disc pl-5">
                  <li>Pencurian identitas</li>
                  <li>Akses tidak sah ke data pribadi</li>
                  <li>Kerugian finansial</li>
                  <li>Penyalahgunaan akun online</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Tips Autentikasi Dua Faktor (2FA):</h4>
                <p>Tingkatkan keamanan dengan menambahkan lapisan perlindungan ekstra menggunakan:</p>
                <ul className="list-disc pl-5">
                  <li>Aplikasi autentikator</li>
                  <li>SMS atau email verifikasi</li>
                  <li>Token keamanan fisik</li>
                  <li>Biometrik (sidik jari, wajah)</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          id: 'virus',
          title: 'Virus & Malware',
          icon: <Shield className="w-6 h-6 text-red-400" />,
          content: (
            <div>
              <h3 className="text-xl font-bold mb-4">Virus & Malware</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Jenis Malware Umum:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-semibold">Virus</span> - Program yang menyebar dengan menginfeksi file lain</li>
                  <li><span className="font-semibold">Trojan Horse</span> - Menyamar sebagai software sah</li>
                  <li><span className="font-semibold">Spyware</span> - Mengumpulkan informasi pengguna secara diam-diam</li>
                  <li><span className="font-semibold">Ransomware</span> - Mengenkripsi data dan meminta tebusan</li>
                  <li><span className="font-semibold">Adware</span> - Menampilkan iklan yang tidak diinginkan</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Cara Perlindungan:</h4>
                <ul className="list-disc pl-5">
                  <li>Gunakan software antivirus terkini</li>
                  <li>Perbarui sistem operasi dan aplikasi secara rutin</li>
                  <li>Berhati-hati terhadap lampiran email dan tautan mencurigakan</li>
                  <li>Unduh software hanya dari sumber terpercaya</li>
                  <li>Cadangkan data penting secara berkala</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Tanda-tanda Komputer Terinfeksi:</h4>
                <ul className="list-disc pl-5">
                  <li>Kinerja yang lambat tanpa sebab jelas</li>
                  <li>Crash atau restart tiba-tiba</li>
                  <li>File hilang atau berubah</li>
                  <li>Aktivitas disk yang tidak biasa</li>
                  <li>Pop-up iklan yang terus muncul</li>
                  <li>Program yang berjalan sendiri</li>
                </ul>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'intermediate',
      title: 'Menengah',
      icon: <Code className="w-8 h-8 text-blue-900" />,
      description: 'Pemahaman lebih dalam tentang keamanan cyber',
      topics: [
        {
          id: 'encryption',
          title: 'Enkripsi',
          icon: <Shield className="w-6 h-6 text-purple-400" />,
          content: (
            <div>
              <h3 className="text-xl font-bold mb-4">Enkripsi Data</h3>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Prinsip Dasar Enkripsi:</h4>
                <p className="mb-2">Enkripsi adalah proses mengubah data menjadi format yang tidak dapat dibaca tanpa kunci dekripsi yang tepat.</p>
                <div className="flex flex-col md:flex-row gap-4 mt-3">
                  <div className="bg-white p-3 rounded shadow-sm flex-1">
                    <p className="font-semibold text-center mb-2">Data Asli</p>
                    <p className="text-center">"Pesan Rahasia"</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm flex-1">
                    <p className="font-semibold text-center mb-2">Data Terenkripsi</p>
                    <p className="text-center font-mono">"%$#@!&*^#@$"</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Jenis Enkripsi:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-semibold">Enkripsi Simetris</span> - Menggunakan kunci yang sama untuk enkripsi dan dekripsi (AES, DES)</li>
                  <li><span className="font-semibold">Enkripsi Asimetris</span> - Menggunakan pasangan kunci publik dan privat (RSA, ECC)</li>
                  <li><span className="font-semibold">Hashing</span> - Mengubah data menjadi nilai tetap, biasanya untuk memverifikasi integritas (SHA, MD5)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Implementasi Enkripsi:</h4>
                <ul className="list-disc pl-5">
                  <li>HTTPS untuk browsing web yang aman</li>
                  <li>VPN untuk koneksi jaringan terenkripsi</li>
                  <li>Enkripsi perangkat penyimpanan</li>
                  <li>Email terenkripsi (PGP)</li>
                  <li>Aplikasi pesan terenkripsi end-to-end</li>
                </ul>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'advanced',
      title: 'Lanjut',
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      description: 'Teknik dan konsep tingkat lanjut untuk profesional',
      topics: [
        {
          id: 'hacking',
          title: 'Teknik & Etika Hacking',
          icon: <Code className="w-6 h-6 text-green-400" />,
          content: (
            <div>
              <h3 className="text-xl font-bold mb-4">Teknik & Etika Hacking</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Ethical Hacking vs. Black Hat Hacking:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <p className="font-semibold text-center mb-2">Ethical Hacking (White Hat)</p>
                    <ul className="list-disc pl-5">
                      <li>Izin resmi</li>
                      <li>Tujuan keamanan</li>
                      <li>Melaporkan kerentanan</li>
                      <li>Membantu perbaikan sistem</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <p className="font-semibold text-center mb-2">Black Hat Hacking</p>
                    <ul className="list-disc pl-5">
                      <li>Tanpa izin</li>
                      <li>Tujuan merugikan</li>
                      <li>Eksploitasi kerentanan</li>
                      <li>Pencurian data/uang</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Metodologi Penetration Testing:</h4>
                <ol className="list-decimal pl-5 space-y-2">
                  <li><span className="font-semibold">Reconnaissance</span> - Pengumpulan informasi target</li>
                  <li><span className="font-semibold">Scanning</span> - Identifikasi kerentanan potensial</li>
                  <li><span className="font-semibold">Gaining Access</span> - Eksploitasi kerentanan</li>
                  <li><span className="font-semibold">Maintaining Access</span> - Memastikan akses berkelanjutan</li>
                  <li><span className="font-semibold">Covering Tracks</span> - Menghapus jejak</li>
                  <li><span className="font-semibold">Analysis & Reporting</span> - Dokumentasi dan rekomendasi</li>
                </ol>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Aspek Legal & Etika:</h4>
                <ul className="list-disc pl-5">
                  <li>Selalu dapatkan izin tertulis sebelum melakukan pengujian</li>
                  <li>Tentukan batasan pengujian dengan jelas</li>
                  <li>Lindungi data sensitif yang ditemukan</li>
                  <li>Dokumentasikan semua aktivitas secara menyeluruh</li>
                  <li>Patuhi peraturan dan hukum yang berlaku</li>
                  <li>Fokus pada pemecahan masalah, bukan eksploitasi</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          id: 'skim',
          title: 'SKIM',
          icon: <Search className="w-6 h-6 text-yellow-500" />,
          content: (
            <div>
              <h3 className="text-xl font-bold mb-4">SKIM (Security Key Infrastructure Management)</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Prinsip Dasar SKIM:</h4>
                <p>SKIM adalah kerangka kerja untuk mengelola infrastruktur kunci keamanan dalam organisasi, termasuk:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Manajemen kunci kriptografi</li>
                  <li>Pengelolaan sertifikat digital</li>
                  <li>Protokol distribusi kunci</li>
                  <li>Keamanan penyimpanan kunci</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Komponen SKIM:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-semibold">Certificate Authority (CA)</span> - Mengeluarkan dan mengelola sertifikat digital</li>
                  <li><span className="font-semibold">Hardware Security Modules (HSM)</span> - Perangkat keras khusus untuk menyimpan kunci kriptografi</li>
                  <li><span className="font-semibold">Key Management System</span> - Software untuk mengelola siklus hidup kunci</li>
                  <li><span className="font-semibold">Public Key Infrastructure (PKI)</span> - Infrastruktur untuk mengelola kunci publik</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Praktik Terbaik SKIM:</h4>
                <ul className="list-disc pl-5">
                  <li>Rotasi kunci secara berkala</li>
                  <li>Pemisahan tugas dalam manajemen kunci</li>
                  <li>Penggunaan algoritma kriptografi yang kuat</li>
                  <li>Backup dan pemulihan kunci yang aman</li>
                  <li>Audit dan pemantauan akses kunci</li>
                  <li>Rencana respons insiden untuk kompromi kunci</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          id: 'cloud',
          title: 'Keamanan Cloud',
          icon: <Cloud className="w-6 h-6 text-blue-400" />,
          content: (
            <div>
              <h3 className="text-xl font-bold mb-4">Keamanan Cloud</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Model Tanggung Jawab Bersama:</h4>
                <p className="mb-2">Keamanan cloud adalah tanggung jawab bersama antara penyedia layanan cloud dan pelanggan.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <p className="font-semibold text-center mb-2">Tanggung Jawab Penyedia</p>
                    <ul className="list-disc pl-5">
                      <li>Keamanan infrastruktur fisik</li>
                      <li>Virtualisasi</li>
                      <li>Jaringan</li>
                      <li>Hypervisor</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <p className="font-semibold text-center mb-2">Tanggung Jawab Pelanggan</p>
                    <ul className="list-disc pl-5">
                      <li>Keamanan data</li>
                      <li>Manajemen identitas & akses</li>
                      <li>Konfigurasi aplikasi</li>
                      <li>Kepatuhan</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">Risiko Keamanan Cloud:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-semibold">Misconfiguration</span> - Kesalahan konfigurasi layanan cloud</li>
                  <li><span className="font-semibold">Insecure APIs</span> - API yang tidak aman untuk manajemen dan akses</li>
                  <li><span className="font-semibold">Shadow IT</span> - Penggunaan layanan cloud tanpa persetujuan IT</li>
                  <li><span className="font-semibold">Data breach</span> - Kebocoran data sensitif</li>
                  <li><span className="font-semibold">Insufficient identity management</span> - Kontrol akses yang lemah</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Praktik Terbaik Keamanan Cloud:</h4>
                <ul className="list-disc pl-5">
                  <li>Enkripsi data saat istirahat dan dalam transit</li>
                  <li>Implementasi otentikasi multi-faktor</li>
                  <li>Penerapan prinsip hak istimewa paling sedikit</li>
                  <li>Segmentasi jaringan cloud</li>
                  <li>Pemantauan dan pencatatan aktivitas cloud</li>
                  <li>Backup dan pemulihan bencana</li>
                  <li>Pemindaian kerentanan reguler</li>
                </ul>
              </div>
            </div>
          )
        }
      ]
    }
  ];
  
  // Main content rendering
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="w-10 h-10 mr-3" />
              <h1 className="text-3xl font-bold">CyberEdu</h1>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg">Platform Pembelajaran Keamanan Cyber</p>
              <p className="text-sm opacity-75">Tingkatkan keahlian keamanan cyber Anda</p>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Learning Path Navigation */}
        {!activeLevel && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Pilih Jalur Pembelajaran Anda</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {levels.map(level => (
                <div 
                  key={level.id}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-400"
                  onClick={() => setActiveLevel(level)}
                >
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-gray-100 p-4 rounded-full mb-4">
                      {level.icon}
                    </div>
                    <h3 className="text-xl font-bold">{level.title}</h3>
                    <p className="text-gray-600 mt-2">{level.description}</p>
                  </div>
                  <div className="mt-4">
                    <ul className="space-y-2">
                      {level.topics.map(topic => (
                        <li key={topic.id} className="flex items-center text-gray-700">
                          <div className="mr-2">{topic.icon}</div>
                          <span>{topic.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Platform Features */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Fitur Platform CyberEdu</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Book className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Materi Terstruktur</h3>
                  </div>
                  <p className="text-gray-600">Konten pembelajaran disusun dari dasar hingga lanjut untuk membangun pemahaman yang solid.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Code className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Praktik Real-world</h3>
                  </div>
                  <p className="text-gray-600">Contoh dan kasus praktis untuk memahami penerapan keamanan dalam situasi nyata.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Info className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Perbaruan Reguler</h3>
                  </div>
                  <p className="text-gray-600">Materi selalu diperbarui mengikuti perkembangan terbaru di dunia keamanan cyber.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Level Topics */}
        {activeLevel && !activeTopic && (
          <div>
            <div className="flex items-center mb-6">
              <button 
                onClick={resetSelections}
                className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
              >
                <ArrowRight className="w-4 h-4 transform rotate-180 mr-1" />
                Kembali
              </button>
              <h2 className="text-2xl font-bold">{activeLevel.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeLevel.topics.map(topic => (
                <div 
                  key={topic.id}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-400"
                  onClick={() => setActiveTopic(topic)}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      {topic.icon}
                    </div>
                    <h3 className="text-xl font-bold">{topic.title}</h3>
                  </div>
                  <p className="text-gray-600">Klik untuk mempelajari lebih lanjut tentang {topic.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Topic Content */}
        {activeLevel && activeTopic && (
          <div>
            <div className="flex items-center mb-6">
              <button 
                onClick={() => setActiveTopic(null)}
                className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
              >
                <ArrowRight className="w-4 h-4 transform rotate-180 mr-1" />
                Kembali ke {activeLevel.title}
              </button>
              <h2 className="text-2xl font-bold">{activeTopic.title}</h2>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              {activeTopic.content}
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="w-6 h-6 mr-2" />
              <span className="text-xl font-bold">CyberEdu</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm opacity-75">© 2025 CyberEdu. Tingkatkan keamanan cyber Anda sekarang.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}