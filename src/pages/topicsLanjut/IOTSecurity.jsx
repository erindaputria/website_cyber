// src/topics/IoTSecurity.jsx
import { Wifi, Server, EyeOff } from 'lucide-react';

export const IOTSecurity = {
  id: 3,
  title: "Keamanan IoT (Internet of Things)",
  icon: <Wifi className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Keamanan Perangkat IoT</h4>
        <p className="text-gray-700 leading-relaxed">
          Perangkat IoT menghadirkan tantangan keamanan unik karena kombinasi keterbatasan komputasi, 
          konektivitas terus-menerus, dan keragaman protokol. 75% serangan IoT mengeksploitasi 
          kredensial default atau kelemahan enkripsi.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Server className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Ancaman IoT
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Kredensial default yang tidak diubah</li>
            <li className="leading-snug">Firmware yang tidak diperbarui</li>
            <li className="leading-snug">Komunikasi tidak terenkripsi</li>
            <li className="leading-snug">Serangan DDoS melalui botnet IoT</li>
            <li className="leading-snug">Physical tampering</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <EyeOff className="w-6 h-6 mr-3 text-blue-500 bg-purple-100 p-1 rounded-full" />
            Kerentanan Umum
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Hardcoded credentials</li>
            <li className="leading-snug">Insecure network services</li>
            <li className="leading-snug">Lack of secure update mechanism</li>
            <li className="leading-snug">Insecure data storage</li>
            <li className="leading-snug">Poor physical security</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Wifi className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Praktik Keamanan
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Network segmentation untuk perangkat IoT</li>
            <li className="leading-snug">Regular firmware updates</li>
            <li className="leading-snug">Disable unused services/ports</li>
            <li className="leading-snug">Implementasi zero-trust architecture</li>
            <li className="leading-snug">Continuous monitoring</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Framework Keamanan IoT</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">OWASP IoT Top 10</h5>
            <p className="text-sm text-gray-600">
              Daftar 10 kerentanan IoT paling kritis menurut Open Web Application Security Project
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">NIST IoT Cybersecurity</h5>
            <p className="text-sm text-gray-600">
              Panduan komprehensif dari NIST untuk manajemen risiko IoT
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">IoT Security Foundation</h5>
            <p className="text-sm text-gray-600">
              Best practice guidelines untuk pengembangan produk IoT yang aman
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};