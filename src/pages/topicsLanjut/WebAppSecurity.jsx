// src/topics/WebAppSecurity.jsx
import { Code, EyeOff, Network } from 'lucide-react';

export const WebAppSecurity = {
  id: 7,
  title: "Web Application Security",
  icon: <Code className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Keamanan Aplikasi Web Modern</h4>
        <p className="text-gray-700 leading-relaxed">
          Dengan 70% serangan cyber menargetkan aplikasi web, pemahaman mendalam tentang OWASP Top 10
          dan teknik mitigasi modern menjadi krusial untuk pengembang dan security engineer.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Code className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            OWASP Top 10 2021
          </h4>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Injection</li>
            <li className="leading-snug">Broken Authentication</li>
            <li className="leading-snug">Sensitive Data Exposure</li>
            <li className="leading-snug">XML External Entities (XXE)</li>
            <li className="leading-snug">Broken Access Control</li>
          </ol>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <EyeOff className="w-6 h-6 mr-3 text-blue-500 bg-purple-100 p-1 rounded-full" />
            Teknik Serangan
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">SQL/NoSQL Injection</li>
            <li className="leading-snug">Cross-Site Scripting (XSS)</li>
            <li className="leading-snug">CSRF & SSRF</li>
            <li className="leading-snug">Business Logic Flaws</li>
            <li className="leading-snug">API Abuse</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Network className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Mitigasi Modern
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Web Application Firewalls (WAF)</li>
            <li className="leading-snug">Content Security Policy (CSP)</li>
            <li className="leading-snug">Secure Coding Practices</li>
            <li className="leading-snug">SAST/DAST tools</li>
            <li className="leading-snug">Zero Trust Architecture</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Framework Keamanan Web</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">OWASP ASVS</h5>
            <p className="text-sm text-gray-600">
              Application Security Verification Standard - standar untuk pengujian keamanan aplikasi
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">NIST SP 800-115</h5>
            <p className="text-sm text-gray-600">
              Panduan pengujian keamanan teknologi informasi dengan fokus pada aplikasi web
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-blue-600 mb-2">MITRE ATT&CK</h5>
            <p className="text-sm text-gray-600">
              Knowledge base tentang taktik dan teknik serangan terhadap aplikasi web
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};