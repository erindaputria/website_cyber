import { User, Shield, AlertTriangle } from 'lucide-react';

export const KeamananMedsos = {
  id: 8,
  title: "Keamanan Media Sosial",
  icon: <User className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-blue-700 to-indigo-800 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <User className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Keamanan Media Sosial</h2>
            <p className="text-purple-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Media sosial menjadi vektor serangan populer karena sifatnya yang terbuka dan kepercayaan pengguna. 
              Ancaman termasuk social engineering, penyebaran malware, doxxing, dan pencurian identitas.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#a78bfa" />
          </svg>
        </div>
      </div>

      {/* Materi Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ancaman Umum */}
        <div className="bg-gradient-to-br from-red-50 via-white to-yellow-50 p-7 rounded-2xl border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-red-800 mb-4 flex items-center text-lg">
            <AlertTriangle className="w-7 h-7 mr-3 text-red-500 bg-red-100 p-1 rounded-full" />
            Ancaman Umum
          </h4>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>Scam:</strong> Penipuan hadiah atau investasi</li>
            <li><strong>Fake Profiles:</strong> Akun palsu untuk social engineering</li>
            <li><strong>Oversharing:</strong> Membocorkan informasi pribadi</li>
            <li><strong>Malicious Links:</strong> Tautan berbahaya yang menyamar sebagai konten menarik</li>
          </ul>
        </div>
        {/* Perlindungan */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-blue-800 mb-4 flex items-center text-lg">
            <Shield className="w-7 h-7 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Perlindungan
          </h4>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Gunakan privacy settings maksimal</li>
            <li>Hindari login dengan akun media sosial di situs lain</li>
            <li>Aktifkan 2FA untuk akun media sosial</li>
            <li>Waspada terhadap oversharing informasi pribadi</li>
          </ul>
        </div>
        {/* Materi Baru: Tips Aman Berinteraksi */}
        <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 p-7 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-green-800 mb-4 flex items-center text-lg">
            <User className="w-7 h-7 mr-3 text-green-500 bg-green-100 p-1 rounded-full" />
            Tips Aman Berinteraksi
          </h4>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Verifikasi akun sebelum menerima permintaan pertemanan</li>
            <li>Jangan mudah membagikan kode OTP atau password</li>
            <li>Laporkan konten atau akun mencurigakan ke platform</li>
            <li>Hindari klik link tidak dikenal di pesan langsung</li>
            <li>Gunakan nama pengguna dan foto profil yang tidak mudah ditebak</li>
          </ul>
        </div>
      </div>

      {/* Kasus Keamanan Media Sosial */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-100 p-8 rounded-2xl border border-blue-200 shadow-lg">
        <h4 className="font-bold text-xl text-blue-800 mb-6">Kasus Keamanan Media Sosial</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-red-600 mb-2">Twitter Celeb Hack (2020)</h5>
            <p className="text-sm text-gray-600">
              Akun selebritas seperti Obama dan Elon Musk diretas untuk scam Bitcoin. Menunjukkan risiko 
              social engineering terhadap karyawan dan kebutuhan akses terbatas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-red-600 mb-2">Cambridge Analytica</h5>
            <p className="text-sm text-gray-600">
              Penyalahgunaan data jutaan pengguna Facebook untuk targeting politik. Menyoroti pentingnya 
              memahami izin aplikasi dan pembagian data.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};