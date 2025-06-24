import { Key, Lock, Server, Cpu, Database } from 'lucide-react';

export const ManajemenKunciKriptografi = {
  id: 3,
  title: "Manajemen Kunci Kriptografi",
  icon: <Key className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Dasar Manajemen Kunci</h4>
        <p className="text-gray-700 leading-relaxed">
          Manajemen kunci kriptografi adalah proses mengelola siklus hidup kunci enkripsi, termasuk pembuatan, distribusi, 
          penyimpanan, rotasi, dan penghapusan. Sistem yang aman bergantung pada manajemen kunci yang tepat.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Lock className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Siklus Hidup Kunci
          </h4>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Generasi kunci (Key generation)</li>
            <li className="leading-snug">Distribusi kunci (Key distribution)</li>
            <li className="leading-snug">Penyimpanan kunci (Key storage)</li>
            <li className="leading-snug">Penggunaan kunci (Key usage)</li>
            <li className="leading-snug">Rotasi kunci (Key rotation)</li>
            <li className="leading-snug">Pencabutan kunci (Key revocation)</li>
            <li className="leading-snug">Penghapusan kunci (Key destruction)</li>
          </ol>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Server className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Sistem Manajemen Kunci
          </h4>
          <ul className="space-y-3">
            <li>
              <span className="font-medium text-gray-800">HSM (Hardware Security Module)</span>
              <p className="text-sm text-gray-600">Perangkat fisik untuk mengamankan proses kriptografi dan mengelola kunci</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">KMS (Key Management Service)</span>
              <p className="text-sm text-gray-600">Layanan cloud untuk mengelola kunci enkripsi (AWS KMS, Google Cloud KMS)</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">PKI (Public Key Infrastructure)</span>
              <p className="text-sm text-gray-600">Kerangka kerja untuk mengelola sertifikat digital dan kunci publik</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 shadow-sm">
        <h4 className="font-bold text-xl text-purple-800 mb-3">Praktik Terbaik</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-purple-600 mb-2 flex items-center">
              <Cpu className="w-5 h-5 mr-2" />
              Rotasi Kunci
            </h5>
            <p className="text-sm text-gray-600">
              Rotasi kunci secara berkala (setiap 90 hari) dan setelah insiden keamanan
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-purple-600 mb-2 flex items-center">
              <Database className="w-5 h-5 mr-2" />
              Penyimpanan Aman
            </h5>
            <p className="text-sm text-gray-600">
              Pisahkan kunci dari data yang dienkripsi, gunakan HSM untuk kunci master
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-purple-600 mb-2 flex items-center">
              <Key className="w-5 h-5 mr-2" />
              Prinsip Least Privilege
            </h5>
            <p className="text-sm text-gray-600">
              Batasi akses ke kunci hanya untuk entitas yang benar-benar membutuhkan
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};