import React from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react';

// Variabel animasi
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function Footer() {
  return (
    <motion.footer 
      className="bg-gray-800 text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Logo and description */}
          <motion.div 
            className="md:col-span-1"
            variants={item}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-2 rounded-lg transform transition-all duration-300 group-hover:scale-110">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white transform transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <span className="text-xl font-bold text-white">CyberEdu</span>
            </div>
            <p className="mb-4">Platform edukasi keamanan cyber terkemuka di Indonesia. Belajar dari para ahli dan tingkatkan keamanan digital Anda.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition">Beranda</a></li>
              <li><a href="/materi" className="hover:text-white transition">Materi</a></li>
              <li><a href="/berita" className="hover:text-white transition">Berita</a></li>
              <li><a href="/tentang" className="hover:text-white transition">Tentang Kami</a></li>
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-white mb-4">Kategori Materi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Pengenalan Cyber Security</a></li>
              <li><a href="#" className="hover:text-white transition">Password Management</a></li>
              <li><a href="#" className="hover:text-white transition">Teknik Hacking</a></li>
              <li><a href="#" className="hover:text-white transition">Cloud Computing</a></li>
              <li><a href="#" className="hover:text-white transition">Teknik Enkripsi</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
            <ul className="space-y-2">
              <li>Email: info@cyberedu.id</li>
              <li>Telepon: +62 21 1234 5678</li>
              <li>Alamat: Jl. Ketintang, Surabaya, Indonesia</li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 CyberEdu. Hak Cipta Dilindungi.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-white transition">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
