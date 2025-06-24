import { Smartphone, Shield, AlertTriangle } from 'lucide-react';

export const KeamananMobile = {
  id: 7,
  title: "Keamanan Perangkat Mobile",
  icon: <Smartphone className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-600 to-indigo-700 opacity-90 z-0" />
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
    </div>
  )
};