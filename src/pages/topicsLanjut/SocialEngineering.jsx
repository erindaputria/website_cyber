// src/topics/SocialEngineering.jsx
import { Users, Monitor, Clipboard } from 'lucide-react';

export const SocialEngineering = {
  id: 2,
  title: "SKIM (Social Engineering)",
  icon: <Users className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
                <h4 className="font-bold text-xl text-blue-800 mb-3">Social Engineering Framework</h4>
                    <p className="text-gray-700 leading-relaxed">
                        SKIM (Social Engineering, Keylogging, and Information Manipulation) memanfaatkan kelemahan manusia sebagai titik masuk. 
                        98% serangan cyber melibatkan social engineering dalam beberapa bentuk.
                    </p>
            </div>
              
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                        <Users className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
                        Teknik Social
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li className="leading-snug">Phishing (email, smishing, vishing)</li>
                        <li className="leading-snug">Pretexting (skenario yang dibuat)</li>
                        <li className="leading-snug">Baiting (umpan fisik/digital)</li>
                        <li className="leading-snug">Quid pro quo (pertukaran palsu)</li>
                        <li className="leading-snug">Tailgating (akses fisik)</li>
                    </ul>
                </div>
                
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                        <Monitor className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
                        Keylogging
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li className="leading-snug">Hardware keyloggers</li>
                        <li className="leading-snug">Software-based keyloggers</li>
                        <li className="leading-snug">Memory injection</li>
                        <li className="leading-snug">Form grabbing</li>
                        <li className="leading-snug">Screen capturing</li>
                    </ul>
                </div>
                
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
                        <Clipboard className="w-6 h-6 mr-3 text-blue-500 bg-purple-100 p-1 rounded-full" />
                        Info Manipulation
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li className="leading-snug">Disinformation campaigns</li>
                        <li className="leading-snug">Fake news propagation</li>
                        <li className="leading-snug">Deepfake technology</li>
                        <li className="leading-snug">Reputation attacks</li>
                        <li className="leading-snug">Psychological operations</li>
                    </ul>
                </div>
             </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
                <h4 className="font-bold text-xl text-blue-800 mb-3">Studi Kasus SKIM</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-blue-600 mb-2">Twitter Bitcoin Scam (2020)</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Akun Twitter terverifikasi tinggi diretas melalui social engineering terhadap karyawan, 
                      memposting scam Bitcoin yang menghasilkan $120,000 dalam beberapa jam.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-blue-600 mb-2">Ubiquiti Breach (2021)</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Penyerang mendapatkan akses ke sistem cloud melalui social engineering canggih, 
                      menyebabkan kerugian $46 juta dari manipulasi informasi keuangan.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
};