import { Lock, Key, Hash, EyeOff, Wifi, Server, Shield, Cpu, Database } from 'lucide-react';

export const TeknikEnkripsi = {
  id: 0,
  title: "Teknik Enkripsi",
  icon: <Lock className="w-5 h-5 mr-3 text-indigo-600" />,
  content: (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-8 rounded-2xl border border-indigo-200 shadow-sm">
        <div className="flex items-start">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <Lock className="w-8 h-8 text-indigo-600" />
          </div>
          <div>
            <h4 className="font-bold text-2xl text-indigo-900 mb-3">Dasar-dasar Enkripsi</h4>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Enkripsi adalah proses mengubah informasi menjadi bentuk yang tidak dapat dibaca tanpa kunci dekripsi yang tepat. 
              Teknologi ini menjadi tulang punggung keamanan digital modern, melindungi data baik dalam penyimpanan maupun transmisi.
            </p>
          </div>
        </div>
      </div>
      
      {/* Encryption Types Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Symmetric/Asymmetric Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Key className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Jenis Enkripsi
            </h4>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
              <h5 className="font-medium text-blue-700 mb-1 flex items-center">
                <Cpu className="w-4 h-4 mr-2" />
                Enkripsi Simetris
              </h5>
              <p className="text-sm text-gray-600">
                Menggunakan kunci yang sama untuk enkripsi dan dekripsi. Contoh: AES, DES, 3DES. 
                Cepat tetapi memerlukan pertukaran kunci yang aman.
              </p>
            </div>
            <div className="bg-purple-50/50 p-4 rounded-lg border border-purple-100">
              <h5 className="font-medium text-purple-700 mb-1 flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Enkripsi Asimetris
              </h5>
              <p className="text-sm text-gray-600">
                Menggunakan pasangan kunci publik dan privat. Contoh: RSA, ECC. 
                Lebih aman tetapi lebih lambat, sering digunakan untuk pertukaran kunci simetris.
              </p>
            </div>
          </div>
        </div>
        
        {/* Algorithms Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 p-2 rounded-lg mr-3">
              <Hash className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Algoritma Modern
            </h4>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>
              <div>
                <span className="font-medium text-gray-800">AES-256</span>
                <p className="text-sm text-gray-600 mt-1">Standard enkripsi simetris yang digunakan pemerintah AS, dianggap sangat aman</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>
              <div>
                <span className="font-medium text-gray-800">RSA-2048</span>
                <p className="text-sm text-gray-600 mt-1">Algoritma asimetris untuk pertukaran kunci dan tanda tangan digital</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>
              <div>
                <span className="font-medium text-gray-800">ECC (Elliptic Curve)</span>
                <p className="text-sm text-gray-600 mt-1">Lebih efisien dari RSA dengan tingkat keamanan sama menggunakan kurva eliptik</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Implementation Section */}
      <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-200 shadow-sm">
        <div className="flex items-center mb-6">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <Database className="w-6 h-6 text-indigo-600" />
          </div>
          <h4 className="font-bold text-2xl text-indigo-900">Implementasi Praktis</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
              <EyeOff className="w-6 h-6 text-blue-600" />
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">Data at Rest</h5>
            <p className="text-sm text-gray-600">
              Enkripsi disk (BitLocker, FileVault), database, dan file sensitif menggunakan AES atau algoritma modern lainnya.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-purple-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
              <Wifi className="w-6 h-6 text-purple-600" />
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">Data in Transit</h5>
            <p className="text-sm text-gray-600">
              TLS/SSL untuk komunikasi, VPN untuk koneksi remote, SSH untuk akses server dengan enkripsi end-to-end.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-indigo-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
              <Server className="w-6 h-6 text-indigo-600" />
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">Data in Use</h5>
            <p className="text-sm text-gray-600">
              Homomorphic encryption memungkinkan komputasi pada data terenkripsi tanpa perlu mendekripsinya terlebih dahulu.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};