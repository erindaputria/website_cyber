import { Wifi, Shield, Lock, Server } from 'lucide-react';

export const KeamananJaringan = {
  id: 6,
  title: "Keamanan Jaringan Komprehensif",
  icon: <Server className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Server className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Keamanan Jaringan Komprehensif</h2>
            <p className="text-indigo-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Pendekatan berlapis (defense in depth) untuk melindungi jaringan dari ancaman modern, mulai dari perimeter, segmentasi, hingga monitoring dan identitas terpusat.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#6366f1" />
          </svg>
        </div>
      </div>

      {/* Materi Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Teknologi Proteksi */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-blue-800 mb-4 flex items-center text-lg">
            <Shield className="w-7 h-7 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Teknologi Proteksi
          </h4>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>Next-Gen Firewall:</strong> IPS, IDS, dan deep packet inspection</li>
            <li><strong>Zero Trust Network:</strong> Verify before trust</li>
            <li><strong>Network Access Control (NAC):</strong> Autentikasi perangkat sebelum akses</li>
            <li><strong>SD-WAN Security:</strong> Proteksi jaringan terdistribusi</li>
          </ul>
        </div>
        {/* Ancaman Modern */}
        <div className="bg-gradient-to-br from-red-50 via-white to-yellow-50 p-7 rounded-2xl border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-red-800 mb-4 flex items-center text-lg">
            <Wifi className="w-7 h-7 mr-3 text-red-500 bg-red-100 p-1 rounded-full" />
            Ancaman Modern
          </h4>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>APT:</strong> Serangan targeted jangka panjang</li>
            <li><strong>IoT Botnets:</strong> Perangkat IoT yang dikompromikan</li>
            <li><strong>Cloud Misconfiguration:</strong> Kesalahan konfigurasi cloud</li>
            <li><strong>Insider Threats:</strong> Ancaman dari dalam organisasi</li>
          </ul>
        </div>
        {/* Hardening Jaringan */}
        <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 p-7 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-green-800 mb-4 flex items-center text-lg">
            <Lock className="w-7 h-7 mr-3 text-green-500 bg-green-100 p-1 rounded-full" />
            Hardening Jaringan
          </h4>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Disable port dan protokol tidak perlu</li>
            <li>Implementasi VLAN dan mikro-segmentasi</li>
            <li>Enkripsi semua komunikasi internal</li>
            <li>Patch management otomatis</li>
          </ul>
        </div>
      </div>

      {/* Kasus Serangan Jaringan */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 shadow-lg">
        <h4 className="font-bold text-xl text-purple-800 mb-6">Kasus Serangan Jaringan</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-red-600 mb-2">SolarWinds Hack (2020)</h5>
            <p className="text-sm text-gray-600">
              Kompromi rantai pasokan melalui update software yang sah memengaruhi banyak instansi pemerintah AS.
              Menunjukkan pentingnya verifikasi integritas software dan monitoring lalu lintas keluar.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-red-600 mb-2">Target Data Breach (2013)</h5>
            <p className="text-sm text-gray-600">
              Pelanggaran dimulai melalui vendor HVAC yang memiliki akses jaringan, menyebabkan pencurian 40 juta data kartu kredit.
              Menyoroti risiko third-party access dan kebutuhan segmentasi jaringan.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};