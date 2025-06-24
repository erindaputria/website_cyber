import { Network, Shield, Cpu, Wifi, HardDrive, AlertTriangle, RefreshCw, Lock } from 'lucide-react';

export const NetworkSecurity = {
  id: 1,
  title: "Network Security",
  icon: <Network className="w-5 h-5 mr-3 text-indigo-600" />,
  content: (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-8 rounded-2xl border border-indigo-200 shadow-sm">
        <div className="flex items-start">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <Network className="w-8 h-8 text-indigo-600" />
          </div>
          <div>
            <h4 className="font-bold text-2xl text-indigo-900 mb-3">Keamanan Jaringan</h4>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Keamanan jaringan melibatkan kebijakan, praktik, dan teknologi untuk mencegah dan memantau akses tidak sah, 
              penyalahgunaan, modifikasi, atau penolakan jaringan komputer dan sumber daya yang dapat diakses jaringan.
            </p>
          </div>
        </div>
      </div>
      
      {/* Three Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Threats Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-2 rounded-lg mr-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Ancaman Jaringan
            </h4>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Man-in-the-Middle attacks</span>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Denial of Service (DoS/DDoS)</span>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Packet sniffing</span>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">IP spoofing</span>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">DNS poisoning</span>
            </li>
          </ul>
        </div>
        
        {/* Security Devices Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Perangkat Keamanan
            </h4>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Firewall (Stateful/Next-gen)</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Intrusion Detection/Prevention Systems</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">VPN concentrators</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Web Application Firewalls</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Network Access Control</span>
            </li>
          </ul>
        </div>
        
        {/* Best Practices Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Praktik Terbaik
            </h4>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Segmentasi jaringan (VLANs, subnetting)</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Zero Trust Architecture</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Enkripsi end-to-end</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Pemantauan lalu lintas jaringan</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">Pembaruan firmware rutin</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Case Studies Section */}
      <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-200 shadow-sm">
        <div className="flex items-center mb-6">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <HardDrive className="w-6 h-6 text-indigo-600" />
          </div>
          <h4 className="font-bold text-2xl text-indigo-900">Studi Kasus</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-red-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h5 className="font-bold text-gray-800 mb-2">Equifax Breach (2017)</h5>
            <div className="space-y-2 text-gray-600 text-sm">
              <p className="leading-relaxed">
                Pelanggaran data besar karena kerentanan Apache Struts yang tidak ditambal.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>147 juta catatan konsumen terekspos</li>
                <li>Termasuk data sensitif seperti SSN</li>
                <li>Kerugian mencapai $700 juta+</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-orange-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
              <Lock className="w-6 h-6 text-orange-600" />
            </div>
            <h5 className="font-bold text-gray-800 mb-2">Target Breach (2013)</h5>
            <div className="space-y-2 text-gray-600 text-sm">
              <p className="leading-relaxed">
                Penyerang mendapatkan akses melalui vendor HVAC, kemudian berpindah ke sistem pembayaran.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>40 juta kartu kredit/debit dicuri</li>
                <li>Kurangnya segmentasi jaringan</li>
                <li>Kerugian $162 juta</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};