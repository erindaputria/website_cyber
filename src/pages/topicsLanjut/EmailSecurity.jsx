// src/topics/EmailSecurity.jsx
import { Mail, Shield, Lock, EyeOff } from 'lucide-react';

export const EmailSecurity = {
  id: 4,
  title: "Keamanan Email",
  icon: <Mail className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Keamanan Komunikasi Email</h4>
        <p className="text-gray-700 leading-relaxed">
          Email tetap menjadi vektor serangan utama dengan 94% malware dikirim via email. 
          Keamanan email memerlukan pendekatan multi-layer untuk melindungi dari phishing, 
          spoofing, dan serangan berbasis lampiran.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Shield className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Protokol Keamanan
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">SPF (Sender Policy Framework)</li>
            <li className="leading-snug">DKIM (DomainKeys Identified Mail)</li>
            <li className="leading-snug">DMARC (Domain-based Message Authentication)</li>
            <li className="leading-snug">TLS untuk enkripsi transit</li>
            <li className="leading-snug">MTA-STS (Mail Transfer Agent Strict Transport Security)</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Lock className="w-6 h-6 mr-3 text-blue-500 bg-purple-100 p-1 rounded-full" />
            Ancaman Email
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Phishing & spear phishing</li>
            <li className="leading-snug">Business Email Compromise (BEC)</li>
            <li className="leading-snug">Malicious attachments (macros, PDF, etc.)</li>
            <li className="leading-snug">URL-based attacks</li>
            <li className="leading-snug">Email spoofing & domain impersonation</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <EyeOff className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Perlindungan Lanjutan
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Email encryption (PGP, S/MIME)</li>
            <li className="leading-snug">Sandboxing untuk lampiran</li>
            <li className="leading-snug">AI-based threat detection</li>
            <li className="leading-snug">Banner peringatan untuk email eksternal</li>
            <li className="leading-snug">User awareness training</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Studi Kasus Serangan Email</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-blue-600 mb-2">Serangan SolarWinds (2020)</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Penyerang mendapatkan akses awal melalui email phishing yang menargetkan karyawan, 
              menyebabkan salah satu pelanggaran keamanan paling signifikan dalam sejarah.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-blue-600 mb-2">Serangan Colonial Pipeline (2021)</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ransomware masuk melalui email phishing yang berisi kredensial VPN yang bocor, 
              menyebabkan shutdown pipa minyak terbesar di AS selama beberapa hari.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};