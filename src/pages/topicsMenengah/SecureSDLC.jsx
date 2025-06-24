import { Code, Shield, ListChecks, Bug } from 'lucide-react';

export const SecureSDLC = {
  id: 8,
  title: "Secure SDLC",
  icon: <Code className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Secure Software Development Lifecycle</h4>
        <p className="text-gray-700 leading-relaxed">
          SSDLC adalah pendekatan pengembangan perangkat lunak yang mengintegrasikan praktik keamanan di setiap fase 
          siklus pengembangan. Ini memastikan keamanan dibangun sejak awal (security by design) daripada ditambahkan 
          sebagai afterthought.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <ListChecks className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Fase SSDLC
          </h4>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Requirements - Analisis risiko dan persyaratan keamanan</li>
            <li className="leading-snug">Design - Arsitektur aman dan threat modeling</li>
            <li className="leading-snug">Implementation - Secure coding dan peer review</li>
            <li className="leading-snug">Testing - Security testing (SAST, DAST, pentest)</li>
            <li className="leading-snug">Deployment - Hardening dan konfigurasi aman</li>
            <li className="leading-snug">Maintenance - Patch management dan monitoring</li>
          </ol>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Shield className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Praktik Utama
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Threat modeling di fase desain</li>
            <li className="leading-snug">Static Application Security Testing (SAST)</li>
            <li className="leading-snug">Dynamic Application Security Testing (DAST)</li>
            <li className="leading-snug">Dependency scanning untuk komponen pihak ketiga</li>
            <li className="leading-snug">Security training untuk pengembang</li>
            <li className="leading-snug">Incident response planning</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-green-50 p-6 rounded-xl border border-green-200 shadow-sm">
        <h4 className="font-bold text-xl text-green-800 mb-3">Tools dan Framework</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-green-600 mb-2 flex items-center">
              <Bug className="w-5 h-5 mr-2" />
              Testing Tools
            </h5>
            <p className="text-sm text-gray-600">
              OWASP ZAP, Burp Suite, SonarQube, Checkmarx
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-green-600 mb-2 flex items-center">
              <ListChecks className="w-5 h-5 mr-2" />
              Framework
            </h5>
            <p className="text-sm text-gray-600">
              OWASP SAMM, Microsoft SDL, NIST SSDF
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-green-600 mb-2 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Secure by Design
            </h5>
            <p className="text-sm text-gray-600">
              Prinsip least privilege, defense in depth, fail securely
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};