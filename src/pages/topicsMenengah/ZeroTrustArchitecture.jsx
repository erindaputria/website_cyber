import { Shield, Lock, Network, User, Server } from 'lucide-react';

export const ZeroTrustArchitecture = {
  id: 6,
  title: "Zero Trust Architecture",
  icon: <Shield className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Paradigma Zero Trust</h4>
        <p className="text-gray-700 leading-relaxed">
          Zero Trust adalah model keamanan yang berasumsi bahwa ancaman bisa berasal dari dalam maupun luar jaringan. 
          Prinsip utamanya adalah "never trust, always verify" - tidak ada entitas yang dipercaya secara implisit, 
          baik di dalam maupun di luar perimeter jaringan.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Lock className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Prinsip Dasar
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Verifikasi eksplisit - Autentikasi dan otorisasi terus-menerus</li>
            <li className="leading-snug">Akses dengan privilege minimal - Hanya akses yang diperlukan</li>
            <li className="leading-snug">Asumsi jaringan terkompromi - Selalu waspada terhadap ancaman internal</li>
            <li className="leading-snug">Micro-segmentation - Membagi jaringan menjadi zona keamanan kecil</li>
            <li className="leading-snug">Pencegahan lateral movement - Membatasi pergerakan penyerang dalam jaringan</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Network className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Komponen Utama
          </h4>
          <ul className="space-y-3">
            <li>
              <span className="font-medium text-gray-800">Identity & Access Management (IAM)</span>
              <p className="text-sm text-gray-600">Autentikasi multi-faktor dan manajemen identitas terpusat</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">Endpoint Security</span>
              <p className="text-sm text-gray-600">Verifikasi kesehatan perangkat sebelum mengizinkan akses</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">Software-Defined Perimeter</span>
              <p className="text-sm text-gray-600">Jaringan yang tidak terlihat sampai pengguna diautentikasi</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">Continuous Monitoring</span>
              <p className="text-sm text-gray-600">Analisis perilaku dan deteksi anomali secara real-time</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
        <h4 className="font-bold text-xl text-indigo-800 mb-3">Implementasi Zero Trust</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-indigo-600 mb-2 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Identitas
            </h5>
            <p className="text-sm text-gray-600">
              Gunakan MFA, SSO, dan prinsip least privilege untuk semua pengguna
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-indigo-600 mb-2 flex items-center">
              <Server className="w-5 h-5 mr-2" />
              Perangkat
            </h5>
            <p className="text-sm text-gray-600">
              Validasi kesehatan perangkat dan terapkan patch management
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-indigo-600 mb-2 flex items-center">
              <Network className="w-5 h-5 mr-2" />
              Jaringan
            </h5>
            <p className="text-sm text-gray-600">
              Micro-segmentation dan enkripsi semua lalu lintas jaringan
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};