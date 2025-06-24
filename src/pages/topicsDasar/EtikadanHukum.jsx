import { Scale, Gavel } from 'lucide-react';

export const EtikadanHukum = {
  id: 9,
  title: "Etika dan Hukum Digital",
  icon: <Scale className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-800 opacity-90 z-0" />
        <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl shadow-lg mb-4 sm:mb-0">
            <Scale className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 drop-shadow">Etika dan Hukum Digital</h2>
            <p className="text-indigo-100 max-w-2xl text-base sm:text-lg font-medium drop-shadow">
              Dunia digital membutuhkan pemahaman etika dan hukum agar aktivitas online tetap aman, bertanggung jawab, dan tidak melanggar aturan. Kenali regulasi, hak, dan kewajiban Anda di ruang siber.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
          <svg width="180" height="120">
            <circle cx="90" cy="60" r="60" fill="#6366f1" />
          </svg>
        </div>
      </div>

      {/* Materi Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Regulasi Penting */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-blue-800 mb-4 flex items-center text-lg">
            <Gavel className="w-7 h-7 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Regulasi Penting
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>UU ITE:</strong> Mengatur transaksi elektronik, konten digital, dan sanksi pelanggaran online</li>
            <li><strong>UU PDP:</strong> Perlindungan data pribadi dan hak subjek data</li>
            <li><strong>KUHP:</strong> Kejahatan siber seperti hacking, penipuan, dan pencemaran nama baik</li>
            <li><strong>Peraturan Kominfo:</strong> Registrasi SIM card, pengelolaan konten, dan perlindungan konsumen</li>
            <li><strong>UU Hak Cipta:</strong> Perlindungan karya digital dan sanksi pelanggaran hak cipta</li>
          </ul>
        </div>
        {/* Etika Digital */}
        <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 p-7 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-green-800 mb-4 flex items-center text-lg">
            <Scale className="w-7 h-7 mr-3 text-green-500 bg-green-100 p-1 rounded-full" />
            Etika Digital
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Hormati privasi dan data orang lain</li>
            <li>Verifikasi informasi sebelum menyebarkan</li>
            <li>Hindari cyberbullying, ujaran kebencian, dan doxing</li>
            <li>Berinteraksi sopan dan bertanggung jawab di media sosial</li>
            <li>Gunakan sumber digital secara etis dan hindari plagiarisme</li>
          </ul>
        </div>
        {/* Materi Baru: Hak & Kewajiban Digital */}
        <div className="bg-gradient-to-br from-yellow-50 via-white to-red-50 p-7 rounded-2xl border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <h4 className="font-semibold text-yellow-800 mb-4 flex items-center text-lg">
            <Gavel className="w-7 h-7 mr-3 text-yellow-500 bg-yellow-100 p-1 rounded-full" />
            Hak & Kewajiban Digital
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Hak atas perlindungan data pribadi</li>
            <li>Hak atas kebebasan berekspresi dengan tetap menghormati hak orang lain</li>
            <li>Kewajiban menjaga keamanan akun dan perangkat</li>
            <li>Kewajiban mematuhi hukum dan norma digital</li>
            <li>Kewajiban melaporkan konten ilegal atau berbahaya</li>
          </ul>
        </div>
      </div>

      {/* Kasus Hukum Siber di Indonesia */}
      <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-2xl border border-red-200 shadow-lg">
        <h4 className="font-bold text-xl text-red-800 mb-6">Kasus Hukum Siber di Indonesia</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Pencemaran Nama Baik</h5>
            <p className="text-sm text-gray-600">
              Banyak kasus dilaporkan berdasarkan UU ITE Pasal 27(3) tentang pencemaran nama baik. 
              Menunjukkan pentingnya berhati-hati dalam berkomentar di media sosial.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Kebocoran Data</h5>
            <p className="text-sm text-gray-600">
              Beberapa perusahaan dijerat hukum karena lalai melindungi data pelanggan. 
              UU PDP mewajibkan organisasi untuk melindungi data pribadi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Pelanggaran Hak Cipta Digital</h5>
            <p className="text-sm text-gray-600">
              Penyebaran film, musik, atau software tanpa izin dapat dikenakan sanksi pidana dan denda sesuai UU Hak Cipta.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition">
            <h5 className="font-bold text-blue-600 mb-2">Penipuan Online (Phishing)</h5>
            <p className="text-sm text-gray-600">
              Banyak korban kehilangan data atau uang akibat phishing. Pelaku dapat dijerat UU ITE dan KUHP.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};