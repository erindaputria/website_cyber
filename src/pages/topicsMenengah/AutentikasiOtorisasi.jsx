import { User, Shield, Lock, Fingerprint } from 'lucide-react';

export const AutentikasiOtorisasi = {
  id: 5,
  title: "Autentikasi dan Otorisasi",
  icon: <Shield className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Konsep Dasar</h4>
        <p className="text-gray-700 leading-relaxed">
          Autentikasi adalah proses verifikasi identitas pengguna, sedangkan otorisasi menentukan hak akses apa yang dimiliki 
          pengguna yang telah diautentikasi. Kedua konsep ini adalah fondasi keamanan sistem informasi modern.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <User className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Metode Autentikasi
          </h4>
          <ul className="space-y-4">
            <div>
              <h5 className="font-medium text-blue-600 mb-1">Faktor Pengetahuan</h5>
              <p className="text-sm text-gray-600">
                Password, PIN, pertanyaan keamanan (something you know)
              </p>
            </div>
            <div>
              <h5 className="font-medium text-blue-600 mb-1">Faktor Kepemilikan</h5>
              <p className="text-sm text-gray-600">
                Token fisik, smartphone, kode OTP (something you have)
              </p>
            </div>
            <div>
              <h5 className="font-medium text-blue-600 mb-1">Faktor Inheren</h5>
              <p className="text-sm text-gray-600">
                Biometrik: sidik jari, pengenalan wajah (something you are)
              </p>
            </div>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Lock className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Model Otorisasi
          </h4>
          <ul className="space-y-3">
            <li>
              <span className="font-medium text-gray-800">RBAC (Role-Based)</span>
              <p className="text-sm text-gray-600">Akses berdasarkan peran pengguna dalam organisasi</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">ABAC (Attribute-Based)</span>
              <p className="text-sm text-gray-600">Akses berdasarkan atribut pengguna, resource, dan lingkungan</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">MAC (Mandatory)</span>
              <p className="text-sm text-gray-600">Akses ditentukan oleh kebijakan pusat (militer/government)</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">DAC (Discretionary)</span>
              <p className="text-sm text-gray-600">Pemilik resource menentukan akses</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-green-50 p-6 rounded-xl border border-green-200 shadow-sm">
        <h4 className="font-bold text-xl text-green-800 mb-3">Standar dan Protokol</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-green-600 mb-2 flex items-center">
              <Fingerprint className="w-5 h-5 mr-2" />
              OAuth 2.0
            </h5>
            <p className="text-sm text-gray-600">
              Framework otorisasi untuk akses terbatas ke resource pengguna
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-green-600 mb-2 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              OpenID Connect
            </h5>
            <p className="text-sm text-gray-600">
              Lapisan identitas di atas OAuth 2.0 untuk autentikasi
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-green-600 mb-2 flex items-center">
              <Lock className="w-5 h-5 mr-2" />
              SAML
            </h5>
            <p className="text-sm text-gray-600">
              Standar pertukaran data autentikasi dan otorisasi berbasis XML
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};