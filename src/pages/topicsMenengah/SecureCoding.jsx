import { Terminal } from 'lucide-react';

export const SecureCoding = {
  id: 2,
  title: "Secure Coding",
  icon: <Terminal className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Pengembangan Aman</h4>
        <p className="text-gray-700 leading-relaxed">
          Secure coding adalah praktik menulis kode yang meminimalkan kerentanan keamanan. 
          Dengan meningkatnya serangan pada lapisan aplikasi, pengembang harus memahami prinsip-prinsip keamanan sejak fase desain.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 text-lg">OWASP Top 10 2023</h4>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Injection</li>
            <li className="leading-snug">Broken Authentication</li>
            <li className="leading-snug">Sensitive Data Exposure</li>
            <li className="leading-snug">XML External Entities (XXE)</li>
            <li className="leading-snug">Broken Access Control</li>
            <li className="leading-snug">Security Misconfiguration</li>
            <li className="leading-snug">Cross-Site Scripting (XSS)</li>
            <li className="leading-snug">Insecure Deserialization</li>
            <li className="leading-snug">Using Components with Known Vulnerabilities</li>
            <li className="leading-snug">Insufficient Logging & Monitoring</li>
          </ol>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 text-lg">Praktik Pengembangan Aman</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Input validation dan sanitization</li>
            <li className="leading-snug">Parameterized queries untuk mencegah SQLi</li>
            <li className="leading-snug">Prinsip least privilege</li>
            <li className="leading-snug">Secure session management</li>
            <li className="leading-snug">Content Security Policy (CSP)</li>
            <li className="leading-snug">Regular dependency updates</li>
            <li className="leading-snug">Static and dynamic code analysis</li>
            <li className="leading-snug">Secure error handling</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-sm">
        <h4 className="font-bold text-xl text-yellow-800 mb-3">Contoh Kode Rentan vs Aman</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
            <h5 className="font-medium text-red-600 mb-2">Rentan (SQL Injection)</h5>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
              {`// Vulnerable
                String query = "SELECT * FROM users WHERE username = '" 
                              + username + "' AND password = '" 
                              + password + "'";
                Statement stmt = connection.createStatement();
                ResultSet rs = stmt.executeQuery(query);`
              }
            </pre>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
            <h5 className="font-medium text-green-600 mb-2">Aman (Parameterized)</h5>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
              {`// Secure
                String query = "SELECT * FROM users WHERE username = ? 
                              AND password = ?";
                PreparedStatement stmt = connection.prepareStatement(query);
                stmt.setString(1, username);
                stmt.setString(2, password);
                ResultSet rs = stmt.executeQuery();`
              }
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
};