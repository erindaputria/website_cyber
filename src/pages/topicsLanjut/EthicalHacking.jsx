// src/topics/EthicalHacking.jsx
import { Bug } from 'lucide-react';

export const EthicalHacking = {
  id: 1,
  title: "Teknik Hacking Etis",
  icon: <Bug className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Ethical Hacking Framework</h4>
            <p className="text-gray-700 leading-relaxed">
              Ethical hacking dilakukan untuk mengidentifikasi kerentanan sebelum penyerang nyata menemukannya. 
              Mengikuti metodologi terstruktur untuk memastikan cakupan yang komprehensif dan hasil yang dapat ditindaklanjuti.
            </p>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">Fase Penetration Testing</h4>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <span className="font-medium text-gray-800">Reconnaissance</span>
                  <p className="text-sm text-gray-600">Pengumpulan informasi pasif dan aktif</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Scanning</span>
                  <p className="text-sm text-gray-600">Identifikasi port, services, dan kerentanan</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Gaining Access</span>
                  <p className="text-sm text-gray-600">Eksploitasi kerentanan</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Maintaining Access</span>
                  <p className="text-sm text-gray-600">Pemeliharaan akses untuk penilaian dampak</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Covering Tracks</span>
                  <p className="text-sm text-gray-600">Analisis kemampuan deteksi sistem</p>
                </li>
              </ol>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">Teknik Lanjutan</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="leading-snug">Advanced Persistent Threat simulation</li>
                <li className="leading-snug">Zero-day exploit research</li>
                <li className="leading-snug">Binary reverse engineering</li>
                <li className="leading-snug">Memory corruption attacks</li>
                <li className="leading-snug">Wireless network exploitation</li>
                <li className="leading-snug">ICS/SCADA system testing</li>
              </ul>
            </div>
        </div>
          
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 shadow-sm">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Tools Hacking Etis</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-blue-600 mb-2">Metasploit Framework</h5>
                <p className="text-sm text-gray-600">
                  Platform untuk pengembangan dan eksekusi exploit terhadap target remote
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-blue-600 mb-2">Burp Suite Pro</h5>
                <p className="text-sm text-gray-600">
                  Platform terintegrasi untuk pengujian keamanan aplikasi web
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-medium text-blue-600 mb-2">Cobalt Strike</h5>
                <p className="text-sm text-gray-600">
                  Platform simulasi ancaman untuk tim red team
                </p>
              </div>
            </div>
        </div>
    </div>
  )
};