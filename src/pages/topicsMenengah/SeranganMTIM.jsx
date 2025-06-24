import { Network, EyeOff, Wifi, Shield } from 'lucide-react';

export const SeranganMITM = {
  id: 4,
  title: "Serangan MITM (Man-in-the-Middle)",
  icon: <Network className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Apa itu MITM?</h4>
        <p className="text-gray-700 leading-relaxed">
          Serangan Man-in-the-Middle (MITM) terjadi ketika penyerang diam-diam mencegat dan mungkin mengubah komunikasi 
          antara dua pihak yang percaya mereka berkomunikasi langsung satu sama lain. Ini adalah ancaman serius terhadap 
          kerahasiaan dan integritas data.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <EyeOff className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Teknik MITM
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">ARP Spoofing - Memalsukan alamat MAC di jaringan lokal</li>
            <li className="leading-snug">DNS Spoofing - Mengarahkan domain ke IP yang salah</li>
            <li className="leading-snug">SSL Stripping - Menurunkan HTTPS ke HTTP</li>
            <li className="leading-snug">Wi-Fi Eavesdropping - Menyadap jaringan nirkabel</li>
            <li className="leading-snug">Session Hijacking - Mencuri cookie sesi</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Wifi className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Contoh Tools
          </h4>
          <ul className="space-y-3">
            <li>
              <span className="font-medium text-gray-800">Wireshark</span>
              <p className="text-sm text-gray-600">Analisis lalu lintas jaringan</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">Ettercap</span>
              <p className="text-sm text-gray-600">Tool MITM untuk ARP poisoning</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">SSLstrip</span>
              <p className="text-sm text-gray-600">Menghilangkan enkripsi SSL/TLS</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">Bettercap</span>
              <p className="text-sm text-gray-600">Framework MITM modular</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm">
        <h4 className="font-bold text-xl text-red-800 mb-3">Pencegahan MITM</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-red-600 mb-2 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Enkripsi End-to-End
            </h5>
            <p className="text-sm text-gray-600">
              Gunakan TLS/SSL untuk semua komunikasi, validasi sertifikat
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-red-600 mb-2 flex items-center">
              <Network className="w-5 h-5 mr-2" />
              Jaringan Aman
            </h5>
            <p className="text-sm text-gray-600">
              Hindari Wi-Fi publik, gunakan VPN, aktifkan DNSSEC
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-red-600 mb-2 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Autentikasi Kuat
            </h5>
            <p className="text-sm text-gray-600">
              Gunakan MFA dan sertifikat digital untuk verifikasi identitas
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};