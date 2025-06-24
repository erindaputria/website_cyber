// src/topics/CloudComputingSecurity.jsx
import { Cloud, Shield, Cpu, Database } from 'lucide-react';

export const CloudComputing = {
  id: 0,
  title: "Cloud Computing Security",
  icon: <Cloud className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Keamanan Cloud Modern</h4>
        <p className="text-gray-700 leading-relaxed">
          Keamanan cloud computing memerlukan pendekatan shared responsibility model antara penyedia cloud dan pengguna. 
          Tantangan utama termasuk konfigurasi yang salah, data exposure, dan akses yang tidak sah.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Shield className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Model Keamanan
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">IaaS: Pelanggan bertanggung jawab dari OS ke atas</li>
            <li className="leading-snug">PaaS: Penyedia mengelola OS dan middleware</li>
            <li className="leading-snug">SaaS: Penyedia mengelola seluruh stack</li>
            <li className="leading-snug">Serverless: Penyedia mengelola infrastruktur</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Database className="w-6 h-6 mr-3 text-blue-500 bg-purple-100 p-1 rounded-full" />
            Ancaman Cloud
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Konfigurasi yang salah (S3 buckets terbuka)</li>
            <li className="leading-snug">Account hijacking</li>
            <li className="leading-snug">Insecure APIs</li>
            <li className="leading-snug">Insider threats</li>
            <li className="leading-snug">Data loss/breach</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Cpu className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Praktik Terbaik
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Prinsip least privilege (IAM)</li>
            <li className="leading-snug">Enkripsi data in-transit dan at-rest</li>
            <li className="leading-snug">Multi-factor authentication</li>
            <li className="leading-snug">Cloud Security Posture Management</li>
            <li className="leading-snug">Logging dan monitoring terpusat</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Tools Cloud Security</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">AWS Security Hub</h5>
            <p className="text-sm text-gray-600">
              Layanan keamanan terpusat untuk AWS dengan pemeriksaan otomatis terhadap best practices
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">Azure Security Center</h5>
            <p className="text-sm text-gray-600">
              Solusi manajemen keamanan terpadu untuk perlindungan workload hybrid cloud
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">Prisma Cloud</h5>
            <p className="text-sm text-gray-600">
              Platform keamanan cloud-native yang komprehensif untuk multi-cloud
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};