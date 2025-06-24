import { Search, FileText, HardDrive, Activity } from 'lucide-react';

export const AnalisisLogForensikDigital = {
  id: 7,
  title: "Analisis Log & Forensik Digital",
  icon: <Search className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Investigasi Digital</h4>
        <p className="text-gray-700 leading-relaxed">
          Analisis log dan forensik digital adalah proses mengumpulkan, menganalisis, dan melaporkan data digital 
          untuk tujuan investigasi. Ini mencakup pemulihan data, analisis bukti digital, dan rekonstruksi peristiwa 
          keamanan siber.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <FileText className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Jenis Log Penting
          </h4>
          <ul className="space-y-3">
            <li>
              <span className="font-medium text-gray-800">Log Sistem</span>
              <p className="text-sm text-gray-600">Login attempts, system errors, service starts/stops</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">Log Aplikasi</span>
              <p className="text-sm text-gray-600">Aktivitas aplikasi, error, transaksi</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">Log Keamanan</span>
              <p className="text-sm text-gray-600">Firewall, IDS/IPS, antivirus alerts</p>
            </li>
            <li>
              <span className="font-medium text-gray-800">Log Jaringan</span>
              <p className="text-sm text-gray-600">Flow data, koneksi, bandwidth usage</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <HardDrive className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Teknik Forensik
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Disk imaging - Membuat salinan bit-by-bit media penyimpanan</li>
            <li className="leading-snug">Memory analysis - Menganalisis RAM untuk bukti volatile</li>
            <li className="leading-snug">Timeline analysis - Merekonstruksi urutan peristiwa</li>
            <li className="leading-snug">File carving - Memulihkan file yang dihapus</li>
            <li className="leading-snug">Registry analysis - Memeriksa registri Windows untuk artefak</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 shadow-sm">
        <h4 className="font-bold text-xl text-purple-800 mb-3">Tools dan Praktik</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-purple-600 mb-2 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              SIEM Tools
            </h5>
            <p className="text-sm text-gray-600">
              Splunk, IBM QRadar, ArcSight untuk agregasi dan analisis log
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-purple-600 mb-2 flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Forensik Tools
            </h5>
            <p className="text-sm text-gray-600">
              Autopsy, FTK, Volatility, Wireshark untuk investigasi
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-medium text-purple-600 mb-2 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Chain of Custody
            </h5>
            <p className="text-sm text-gray-600">
              Dokumentasi lengkap untuk memastikan bukti dapat diterima di pengadilan
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};