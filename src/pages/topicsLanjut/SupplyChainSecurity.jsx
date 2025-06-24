// src/topics/SupplyChainSecurity.jsx
import { Network, Key, Terminal, Hash } from 'lucide-react';

export const SupplyChainSecurity = {
  id: 5,
  title: "Keamanan Supply Chain",
  icon: <Network className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Keamanan Rantai Pasok Digital</h4>
        <p className="text-gray-700 leading-relaxed">
          60% serangan cyber berasal dari kompromi rantai pasok. Keamanan rantai pasok memerlukan 
          visibilitas ke seluruh ekosistem vendor dan pendekatan zero-trust untuk akses pihak ketiga.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Key className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Ancaman Rantai Pasok
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Kompromi vendor dengan akses istimewa</li>
            <li className="leading-snug">Dependency confusion attacks</li>
            <li className="leading-snug">Typosquatting packages</li>
            <li className="leading-snug">Malicious code injection</li>
            <li className="leading-snug">Compromised build tools</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Terminal className="w-6 h-6 mr-3 text-blue-500 bg-purple-100 p-1 rounded-full" />
            Kerentanan Software
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Log4j vulnerability (Log4Shell)</li>
            <li className="leading-snug">SolarWinds breach</li>
            <li className="leading-snug">Node.js package compromises</li>
            <li className="leading-snug">CI/CD pipeline attacks</li>
            <li className="leading-snug">Compiler-level backdoors</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Hash className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Mitigasi Risiko
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Software Bill of Materials (SBOM)</li>
            <li className="leading-snug">Third-party risk assessments</li>
            <li className="leading-snug">Multi-factor authentication untuk vendor</li>
            <li className="leading-snug">Least privilege access</li>
            <li className="leading-snug">Continuous monitoring</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Framework Keamanan Rantai Pasok</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">NIST SP 800-161</h5>
            <p className="text-sm text-gray-600">
              Panduan manajemen risiko keamanan siber untuk rantai pasok sistem informasi
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">SLSA Framework</h5>
            <p className="text-sm text-gray-600">
              Supply-chain Levels for Software Artifacts - framework untuk memastikan integritas software
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">NTIA SBOM Standards</h5>
            <p className="text-sm text-gray-600">
              Standar untuk Software Bill of Materials dari National Telecommunications and Information Administration
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};