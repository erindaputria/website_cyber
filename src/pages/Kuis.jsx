import { useState, useEffect } from 'react';
import { submitQuizResult, getMyQuizResults, checkLevelCompletion } from './api';
// import { getToken, isAuthenticated } from '../utils/auth';

const API_CONFIG = {
  BASE_URL: 'https://cyber-edu-production.up.railway.app',
  HAS_TAKEN: '/quiz-results/has-taken/{level}',
};


// Expanded quiz data with 25 questions per level
const quizData = {
  dasar: [
    {
      id: 1,
      question: "Apa yang dimaksud dengan keamanan cyber?",
      options: [
        "Parktik mengembangkan software",
        "Praktik melindungi sistem komputer dan jaringan dari ancaman digital",
        "Praktik meretas sistem komputer",
        "praktik membuat jaringan komputer"
      ],
      answer: "Praktik melindungi sistem komputer dan jaringan dari ancaman digital"
    },
    {
      id: 2,
      question: "Apa itu firewall dalam konteks keamanan jaringan?",
      options: [
        "Perangkat untuk memblokir akses fisik ke server",
        "Sistem yang mengontrol lalu lintas jaringan berdasarkan aturan keamanan",
        "Program untuk memindai virus",
        "Alat untuk meningkatkan kecepatan internet"
      ],
      answer: "Sistem yang mengontrol lalu lintas jaringan berdasarkan aturan keamanan"
    },
    {
      id: 3,
      question: "Apa tujuan utama dari enkripsi data?",
      options: [
        "Mempercepat transfer data",
        "Mengurangi ukuran file",
        "Melindungi kerahasiaan informasi",
        "Meningkatkan kinerja sistem"
      ],
      answer: "Melindungi kerahasiaan informasi"
    },
    {
      id: 4,
      question: "Apa yang dimaksud dengan phishing?",
      options: [
        "Teknik meningkatkan kecepatan internet",
        "Metode enkripsi data",
        "Serangan sosial engineering untuk mencuri informasi sensitif",
        "Jenis virus komputer"
      ],
      answer: "Serangan sosial engineering untuk mencuri informasi sensitif"
    },
    {
      id: 5,
      question: "Apa itu malware?",
      options: [
        "Perangkat keras khusus untuk keamanan",
        "Software yang dirancang untuk merusak atau menyusup ke sistem komputer",
        "Protokol jaringan yang aman",
        "Teknik backup data"
      ],
      answer: "Software yang dirancang untuk merusak atau menyusup ke sistem komputer"
    },
    {
      id: 6,
      question: "Apa yang dimaksud dengan VPN?",
      options: [
        "Virtual Private Network - jaringan pribadi yang aman melalui internet",
        "Virus Protection Network - sistem deteksi virus",
        "Visual Programming Network - alat pengembangan software",
        "Video Processing Node - perangkat pemrosesan video"
      ],
      answer: "Virtual Private Network - jaringan pribadi yang aman melalui internet"
    },
    {
      id: 7,
      question: "Apa itu two-factor authentication (2FA)?",
      options: [
        "Metode enkripsi ganda",
        "Sistem keamanan yang membutuhkan dua bentuk identifikasi",
        "Teknik kompresi file",
        "Protokol jaringan tingkat lanjut"
      ],
      answer: "Sistem keamanan yang membutuhkan dua bentuk identifikasi"
    },
    {
      id: 8,
      question: "Apa yang dimaksud dengan patch dalam keamanan siber?",
      options: [
        "Teknik hacking",
        "Perangkat lunak tambahan untuk memperbaiki kerentanan",
        "Metode backup data",
        "Jenis firewall"
      ],
      answer: "Perangkat lunak tambahan untuk memperbaiki kerentanan"
    },
    {
      id: 9,
      question: "Apa itu DDoS attack?",
      options: [
        "Serangan yang membanjiri target dengan lalu lintas dari banyak sumber",
        "Teknik enkripsi data",
        "Metode recovery data",
        "Jenis malware khusus"
      ],
      answer: "Serangan yang membanjiri target dengan lalu lintas dari banyak sumber"
    },
    {
      id: 10,
      question: "Apa yang dimaksud dengan brute force attack?",
      options: [
        "Serangan fisik ke data center",
        "Metode mencoba banyak kombinasi password sampai berhasil",
        "Teknik social engineering",
        "Jenis enkripsi kuat"
      ],
      answer: "Metode mencoba banyak kombinasi password sampai berhasil"
    },
    {
      id: 11,
      question: "Apa itu ransomware?",
      options: [
        "Software antivirus",
        "Malware yang mengenkripsi data korban dan meminta tebusan",
        "Teknik pengamanan jaringan",
        "Protokol komunikasi aman"
      ],
      answer: "Malware yang mengenkripsi data korban dan meminta tebusan"
    },
    {
      id: 12,
      question: "Apa yang dimaksud dengan zero-day vulnerability?",
      options: [
        "Kerentanan yang sudah diketahui dan diperbaiki",
        "Kerentanan yang belum diketahui oleh vendor software",
        "Bug minor tanpa dampak keamanan",
        "Kerentanan pada sistem yang sudah tidak didukung"
      ],
      answer: "Kerentanan yang belum diketahui oleh vendor software"
    },
    {
      id: 13,
      question: "Apa tujuan dari penetration testing?",
      options: [
        "Meretas sistem untuk tujuan jahat",
        "Mengidentifikasi kerentanan sistem dengan cara yang terkendali",
        "Memperbaiki bug pada aplikasi",
        "Meningkatkan kinerja sistem"
      ],
      answer: "Mengidentifikasi kerentanan sistem dengan cara yang terkendali"
    },
    {
      id: 14,
      question: "Apa itu social engineering?",
      options: [
        "Metode pengembangan software kolaboratif",
        "Manipulasi psikologis untuk mendapatkan informasi sensitif",
        "Teknik enkripsi sosial",
        "Sistem keamanan berbasis komunitas"
      ],
      answer: "Manipulasi psikologis untuk mendapatkan informasi sensitif"
    },
    {
      id: 15,
      question: "Apa yang dimaksud dengan HTTPS?",
      options: [
        "Versi aman dari protokol HTTP",
        "Hyper Text Transfer Protocol Standard",
        "High-speed Transfer Protocol System",
        "Hardware-based Transfer Protection System"
      ],
      answer: "Versi aman dari protokol HTTP"
    },
    {
      id: 16,
      question: "Apa itu biometric authentication?",
      options: [
        "Autentikasi berbasis lokasi",
        "Autentikasi menggunakan karakteristik fisik atau perilaku",
        "Sistem password ganda",
        "Teknik enkripsi biometrik"
      ],
      answer: "Autentikasi menggunakan karakteristik fisik atau perilaku"
    },
    {
      id: 17,
      question: "Apa yang dimaksud dengan data breach?",
      options: [
        "Pemecahan data menjadi bagian-bagian kecil",
        "Insiden dimana informasi sensitif diakses tanpa otorisasi",
        "Teknik backup data terdistribusi",
        "Metode kompresi data"
      ],
      answer: "Insiden dimana informasi sensitif diakses tanpa otorisasi"
    },
    {
      id: 18,
      question: "Apa itu spyware?",
      options: [
        "Software untuk memantau aktivitas sistem",
        "Malware yang mengumpulkan informasi tanpa izin",
        "Alat debugging resmi",
        "Protokol jaringan aman"
      ],
      answer: "Malware yang mengumpulkan informasi tanpa izin"
    },
    {
      id: 19,
      question: "Apa yang dimaksud dengan whitelisting aplikasi?",
      options: [
        "Memblokir semua aplikasi kecuali yang diizinkan",
        "Mengizinkan semua aplikasi kecuali yang diblokir",
        "Teknik pengembangan aplikasi",
        "Metode rating aplikasi"
      ],
      answer: "Memblokir semua aplikasi kecuali yang diizinkan"
    },
    {
      id: 20,
      question: "Apa itu honeypot dalam keamanan siber?",
      options: [
        "Teknik enkripsi khusus",
        "Sistem yang dirancang untuk menarik dan mendeteksi peretas",
        "Jenis malware khusus",
        "Protokol jaringan aman"
      ],
      answer: "Sistem yang dirancang untuk menarik dan mendeteksi peretas"
    },
    {
      id: 21,
      question: "Apa yang dimaksud dengan principle of least privilege?",
      options: [
        "Memberikan pengguna hak akses minimum yang diperlukan",
        "Memberikan semua pengguna hak akses penuh",
        "Prinsip enkripsi maksimal",
        "Teknik manajemen password"
      ],
      answer: "Memberikan pengguna hak akses minimum yang diperlukan"
    },
    {
      id: 22,
      question: "Apa itu sandbox dalam konteks keamanan?",
      options: [
        "Teknik backup data",
        "Lingkungan terisolasi untuk menjalankan kode yang tidak terpercaya",
        "Jenis firewall khusus",
        "Metode kompresi file"
      ],
      answer: "Lingkungan terisolasi untuk menjalankan kode yang tidak terpercaya"
    },
    {
      id: 23,
      question: "Apa yang dimaksud dengan end-to-end encryption?",
      options: [
        "Enkripsi yang hanya berlaku di server",
        "Enkripsi data dari pengirim ke penerima tanpa perantara bisa membaca",
        "Teknik enkripsi parsial",
        "Metode kompresi dan enkripsi gabungan"
      ],
      answer: "Enkripsi data dari pengirim ke penerima tanpa perantara bisa membaca"
    },
    {
      id: 24,
      question: "Apa itu CSRF (Cross-Site Request Forgery)?",
      options: [
        "Teknik optimasi website",
        "Serangan yang memaksa pengguna menjalankan aksi yang tidak diinginkan",
        "Metode autentikasi silang",
        "Protokol transfer data aman"
      ],
      answer: "Serangan yang memaksa pengguna menjalankan aksi yang tidak diinginkan"
    },
    {
      id: 25,
      question: "Apa yang dimaksud dengan security policy?",
      options: [
        "Dokumen yang mengatur standar keamanan organisasi",
        "Kebijakan asuransi keamanan",
        "Protokol jaringan khusus",
        "Sistem deteksi intrusi"
      ],
      answer: "Dokumen yang mengatur standar keamanan organisasi"
    }
  ],
  menengah: [
    {
      id: 1,
      question: "Apa perbedaan utama antara enkripsi simetris dan asimetris?",
      options: [
        "Simetris menggunakan satu kunci, asimetris menggunakan pasangan kunci", 
        "Simetris lebih lambat dari asimetris", 
        "Asimetris hanya digunakan untuk enkripsi disk",
        "Tidak ada perbedaan signifikan"
      ],
      answer: "Simetris menggunakan satu kunci, asimetris menggunakan pasangan kunci"
    },
    {
      id: 2,
      question: "Apa itu XSS (Cross-Site Scripting)?",
      options: [
        "Teknik optimasi website",
        "Serangan injeksi kode berbahaya ke halaman web",
        "Metode transfer data antar situs",
        "Protokol keamanan browser"
      ],
      answer: "Serangan injeksi kode berbahaya ke halaman web"
    },
    {
      id: 3,
      question: "Apa yang dimaksud dengan SQL injection?",
      options: [
        "Teknik backup database",
        "Serangan injeksi kode SQL berbahaya melalui input aplikasi",
        "Metode optimasi query SQL",
        "Proses migrasi database"
      ],
      answer: "Serangan injeksi kode SQL berbahaya melalui input aplikasi"
    },
    {
      id: 4,
      question: "Apa itu IDS (Intrusion Detection System)?",
      options: [
        "Sistem yang memantau jaringan untuk aktivitas mencurigakan",
        "Teknik enkripsi data",
        "Metode autentikasi canggih",
        "Protokol transfer file"
      ],
      answer: "Sistem yang memantau jaringan untuk aktivitas mencurigakan"
    },
    {
      id: 5,
      question: "Apa perbedaan antara hashing dan enkripsi?",
      options: [
        "Hashing reversible, enkripsi tidak",
        "Enkripsi reversible, hashing tidak (dalam konteks kriptografi yang baik)",
        "Tidak ada perbedaan",
        "Hashing hanya untuk password"
      ],
      answer: "Enkripsi reversible, hashing tidak (dalam konteks kriptografi yang baik)"
    },
    {
      id: 6,
      question: "Apa itu man-in-the-middle attack?",
      options: [
        "Serangan yang menyusup dalam komunikasi antara dua pihak",
        "Teknik optimasi jaringan",
        "Metode autentikasi pusat",
        "Protokol keamanan lapisan tengah"
      ],
      answer: "Serangan yang menyusup dalam komunikasi antara dua pihak"
    },
    {
      id: 7,
      question: "Apa yang dimaksud dengan salting dalam konteks password hashing?",
      options: [
        "Menambahkan data acak sebelum hashing untuk mencegah rainbow table attacks",
        "Teknik kompresi password",
        "Metode enkripsi ganda",
        "Proses memperpendek password"
      ],
      answer: "Menambahkan data acak sebelum hashing untuk mencegah rainbow table attacks"
    },
    {
      id: 8,
      question: "Apa itu PKI (Public Key Infrastructure)?",
      options: [
        "Sistem untuk mengelola kunci enkripsi asimetris dan sertifikat digital",
        "Protokol jaringan pribadi",
        "Teknik manajemen password",
        "Infrastruktur server fisik"
      ],
      answer: "Sistem untuk mengelola kunci enkripsi asimetris dan sertifikat digital"
    },
    {
      id: 9,
      question: "Apa yang dimaksud dengan defense in depth?",
      options: [
        "Penggunaan lapisan keamanan berganda",
        "Teknik enkripsi dalam-dalam",
        "Metode backup bertingkat",
        "Strategi keamanan perimeter"
      ],
      answer: "Penggunaan lapisan keamanan berganda"
    },
    {
      id: 10,
      question: "Apa itu zero-trust security model?",
      options: [
        "Model yang tidak mempercayai apapun di dalam atau luar jaringan",
        "Sistem tanpa autentikasi",
        "Protokol jaringan tanpa enkripsi",
        "Model keamanan usang"
      ],
      answer: "Model yang tidak mempercayai apapun di dalam atau luar jaringan"
    },
    {
      id: 11,
      question: "Apa perbedaan antara vulnerability assessment dan penetration testing?",
      options: [
        "VA identifikasi kerentanan, pentest eksploitasi kerentanan",
        "Tidak ada perbedaan",
        "VA untuk hardware, pentest untuk software",
        "VA lebih intensif dari pentest"
      ],
      answer: "VA identifikasi kerentanan, pentest eksploitasi kerentanan"
    },
    {
      id: 12,
      question: "Apa itu SIEM (Security Information and Event Management)?",
      options: [
        "Sistem untuk analisis keamanan real-time",
        "Teknik enkripsi khusus",
        "Metode manajemen password",
        "Protokol jaringan aman"
      ],
      answer: "Sistem untuk analisis keamanan real-time"
    },
    {
      id: 13,
      question: "Apa yang dimaksud dengan threat intelligence?",
      options: [
        "Informasi tentang ancaman keamanan yang dikumpulkan dan dianalisis",
        "Kecerdasan buatan untuk keamanan",
        "Teknik pengumpulan data",
        "Metode enkripsi canggih"
      ],
      answer: "Informasi tentang ancaman keamanan yang dikumpulkan dan dianalisis"
    },
    {
      id: 14,
      question: "Apa itu container security?",
      options: [
        "Keamanan fisik data center",
        "Praktik mengamankan lingkungan container seperti Docker",
        "Teknik enkripsi kontainer",
        "Protokol transfer data"
      ],
      answer: "Praktik mengamankan lingkungan container seperti Docker"
    },
    {
      id: 15,
      question: "Apa yang dimaksud dengan OWASP Top 10?",
      options: [
        "10 protokol jaringan teratas",
        "Daftar 10 kerentanan aplikasi web paling kritis",
        "10 teknik enkripsi terbaik",
        "Daftar 10 perusahaan keamanan terbesar"
      ],
      answer: "Daftar 10 kerentanan aplikasi web paling kritis"
    },
    {
      id: 16,
      question: "Apa itu WAF (Web Application Firewall)?",
      options: [
        "Firewall khusus untuk melindungi aplikasi web",
        "Teknik optimasi web",
        "Protokol transfer web",
        "Metode pengembangan web"
      ],
      answer: "Firewall khusus untuk melindungi aplikasi web"
    },
    {
      id: 17,
      question: "Apa yang dimaksud dengan secure coding practices?",
      options: [
        "Praktik pengembangan software yang mengutamakan keamanan",
        "Teknik enkripsi kode",
        "Metode kompresi kode",
        "Proses debugging"
      ],
      answer: "Praktik pengembangan software yang mengutamakan keamanan"
    },
    {
      id: 18,
      question: "Apa itu CASB (Cloud Access Security Broker)?",
      options: [
        "Perantara keamanan antara pengguna dan layanan cloud",
        "Protokol transfer cloud",
        "Teknik enkripsi data cloud",
        "Metode backup cloud"
      ],
      answer: "Perantara keamanan antara pengguna dan layanan cloud"
    },
    {
      id: 19,
      question: "Apa yang dimaksud dengan red team vs blue team dalam keamanan siber?",
      options: [
        "Red team menyerang, blue team bertahan",
        "Dua metode enkripsi berbeda",
        "Strategi jaringan berbeda",
        "Tidak ada perbedaan"
      ],
      answer: "Red team menyerang, blue team bertahan"
    },
    {
      id: 20,
      question: "Apa itu SOAR (Security Orchestration, Automation and Response)?",
      options: [
        "Teknologi untuk mengotomatisasi operasi keamanan",
        "Protokol jaringan baru",
        "Metode enkripsi canggih",
        "Teknik pengembangan software"
      ],
      answer: "Teknologi untuk mengotomatisasi operasi keamanan"
    },
    {
      id: 21,
      question: "Apa yang dimaksud dengan MITRE ATT&CK framework?",
      options: [
        "Kerangka pengetahuan tentang taktik dan teknik serangan",
        "Teknik enkripsi militer",
        "Protokol jaringan pemerintah",
        "Metode pengembangan keamanan"
      ],
      answer: "Kerangka pengetahuan tentang taktik dan teknik serangan"
    },
    {
      id: 22,
      question: "Apa itu DevSecOps?",
      options: [
        "Integrasi keamanan dalam proses DevOps",
        "Teknik pengembangan khusus",
        "Protokol keamanan baru",
        "Metode enkripsi DevOps"
      ],
      answer: "Integrasi keamanan dalam proses DevOps"
    },
    {
      id: 23,
      question: "Apa yang dimaksud dengan ransomware-as-a-service?",
      options: [
        "Model bisnis dimana pelaku jual beli ransomware seperti layanan",
        "Layanan pemulihan ransomware",
        "Teknik pencegahan ransomware",
        "Protokol anti-ransomware"
      ],
      answer: "Model bisnis dimana pelaku jual beli ransomware seperti layanan"
    },
    {
      id: 24,
      question: "Apa itu NIST Cybersecurity Framework?",
      options: [
        "Standar keamanan siber dari National Institute of Standards and Technology",
        "Protokol jaringan pemerintah AS",
        "Teknik enkripsi standar",
        "Metode pengembangan aman"
      ],
      answer: "Standar keamanan siber dari National Institute of Standards and Technology"
    },
    {
      id: 25,
      question: "Apa yang dimaksud dengan zero-day exploit?",
      options: [
        "Eksploitasi kerentanan yang belum diketahui vendor",
        "Teknik hacking tanpa alat",
        "Serangan yang terjadi di hari pertama bulan",
        "Metode pencegahan serangan"
      ],
      answer: "Eksploitasi kerentanan yang belum diketahui vendor"
    }
  ],
  lanjut: [
    {
      id: 1,
      question: "Dalam model tanggung jawab bersama (shared responsibility model) untuk IaaS, pelanggan bertanggung jawab untuk?",
      options: [
        "Keamanan fisik data center", 
        "Keamanan hypervisor", 
        "Keamanan sistem operasi dan aplikasi",
        "Keamanan jaringan bawah (underlying network)"
      ],
      answer: "Keamanan sistem operasi dan aplikasi"
    },
    {
      id: 2,
      question: "Apa itu Advanced Persistent Threat (APT)?",
      options: [
        "Serangan yang dilakukan secara acak tanpa target tertentu",
        "Serangan yang berlangsung lama dan terfokus pada target tertentu",
        "Serangan yang hanya mengeksploitasi kerentanan zero-day",
        "Serangan yang menggunakan teknik social engineering saja"
      ],
      answer: "Serangan yang berlangsung lama dan terfokus pada target tertentu"
    },
    {
      id: 3,
      question: "Apa yang dimaksud dengan reverse engineering dalam konteks malware analysis?",
      options: [
        "Proses menganalisis malware untuk memahami cara kerjanya",
        "Teknik membuat malware",
        "Metode enkripsi malware",
        "Proses menghapus malware"
      ],
      answer: "Proses menganalisis malware untuk memahami cara kerjanya"
    },
    {
      id: 4,
      question: "Apa itu memory forensics?",
      options: [
        "Analisis memori sistem untuk bukti digital",
        "Teknik meningkatkan memori sistem",
        "Metode enkripsi memori",
        "Proses backup memori"
      ],
      answer: "Analisis memori sistem untuk bukti digital"
    },
    {
      id: 5,
      question: "Apa yang dimaksud dengan steganografi?",
      options: [
        "Teknik menyembunyikan data dalam data lain",
        "Metode enkripsi kuat",
        "Protokol transfer data",
        "Teknik analisis data"
      ],
      answer: "Teknik menyembunyikan data dalam data lain"
    },
    {
      id: 6,
      question: "Apa itu homomorphic encryption?",
      options: [
        "Enkripsi yang memungkinkan komputasi pada data terenkripsi",
        "Teknik enkripsi homogen",
        "Metode kompresi data",
        "Protokol jaringan aman"
      ],
      answer: "Enkripsi yang memungkinkan komputasi pada data terenkripsi"
    },
    {
      id: 7,
      question: "Apa yang dimaksud dengan quantum cryptography?",
      options: [
        "Kriptografi berbasis prinsip mekanika kuantum",
        "Teknik enkripsi kuantitatif",
        "Metode analisis kuantum",
        "Protokol jaringan kuantum"
      ],
      answer: "Kriptografi berbasis prinsip mekanika kuantum"
    },
    {
      id: 8,
      question: "Apa itu blockchain security?",
      options: [
        "Praktik mengamankan sistem blockchain dari serangan",
        "Teknik mining blockchain",
        "Metode enkripsi blok",
        "Protokol transfer blockchain"
      ],
      answer: "Praktik mengamankan sistem blockchain dari serangan"
    },
    {
      id: 9,
      question: "Apa yang dimaksud dengan threat hunting?",
      options: [
        "Proaktif mencari ancaman yang lolos dari pertahanan otomatis",
        "Teknik mengumpulkan malware",
        "Metode analisis statis",
        "Proses scanning otomatis"
      ],
      answer: "Proaktif mencari ancaman yang lolos dari pertahanan otomatis"
    },
    {
      id: 10,
      question: "Apa itu deception technology?",
      options: [
        "Teknologi yang menipu penyerang dengan aset palsu",
        "Metode social engineering",
        "Teknik enkripsi menipu",
        "Protokol jaringan menipu"
      ],
      answer: "Teknologi yang menipu penyerang dengan aset palsu"
    },
    {
      id: 11,
      question: "Apa yang dimaksud dengan purple team dalam keamanan siber?",
      options: [
        "Kolaborasi antara red team dan blue team",
        "Tim khusus untuk enkripsi",
        "Metode analisis ungu",
        "Protokol jaringan khusus"
      ],
      answer: "Kolaborasi antara red team dan blue team"
    },
    {
      id: 12,
      question: "Apa itu FIDO (Fast Identity Online) authentication?",
      options: [
        "Standar autentikasi tanpa password",
        "Teknik autentikasi cepat",
        "Metode enkripsi online",
        "Protokol transfer identitas"
      ],
      answer: "Standar autentikasi tanpa password"
    },
    {
      id: 13,
      question: "Apa yang dimaksud dengan AI dalam keamanan siber?",
      options: [
        "Penggunaan kecerdasan buatan untuk deteksi ancaman dan respon",
        "Teknik enkripsi cerdas",
        "Metode analisis internet",
        "Protokol jaringan cerdas"
      ],
      answer: "Penggunaan kecerdasan buatan untuk deteksi ancaman dan respon"
    },
    {
      id: 14,
      question: "Apa itu digital forensics dan incident response (DFIR)?",
      options: [
        "Proses investigasi insiden keamanan dan pengumpulan bukti digital",
        "Teknik enkripsi forensik",
        "Metode respon cepat",
        "Protokol jaringan forensik"
      ],
      answer: "Proses investigasi insiden keamanan dan pengumpulan bukti digital"
    },
    {
      id: 15,
      question: "Apa yang dimaksud dengan secure enclave?",
      options: [
        "Area terisolasi dalam prosesor untuk operasi aman",
        "Teknik enkripsi khusus",
        "Metode isolasi jaringan",
        "Protokol transfer aman"
      ],
      answer: "Area terisolasi dalam prosesor untuk operasi aman"
    },
    {
      id: 16,
      question: "Apa itu TPM (Trusted Platform Module)?",
      options: [
        "Chip khusus untuk operasi kriptografi aman",
        "Teknik manajemen platform",
        "Metode enkripsi platform",
        "Protokol transfer platform"
      ],
      answer: "Chip khusus untuk operasi kriptografi aman"
    },
    {
      id: 17,
      question: "Apa yang dimaksud dengan hardware security module (HSM)?",
      options: [
        "Perangkat fisik untuk mengelola kriptografi digital",
        "Teknik keamanan hardware",
        "Metode analisis hardware",
        "Protokol hardware aman"
      ],
      answer: "Perangkat fisik untuk mengelola kriptografi digital"
    },
    {
      id: 18,
      question: "Apa itu post-quantum cryptography?",
      options: [
        "Algoritma kriptografi yang tahan terhadap komputer kuantum",
        "Teknik enkripsi pasca kuantum",
        "Metode analisis kuantum",
        "Protokol jaringan kuantum"
      ],
      answer: "Algoritma kriptografi yang tahan terhadap komputer kuantum"
    },
    {
      id: 19,
      question: "Apa yang dimaksud dengan secure multiparty computation?",
      options: [
        "Metode untuk komputasi bersama pada data privat tanpa mengungkapkannya",
        "Teknik enkripsi multipihak",
        "Protokol jaringan multipihak",
        "Metode analisis kelompok"
      ],
      answer: "Metode untuk komputasi bersama pada data privat tanpa mengungkapkannya"
    },
    {
      id: 20,
      question: "Apa itu differential privacy?",
      options: [
        "Teknik untuk membagikan data sambil melindungi privasi individu",
        "Metode enkripsi berbeda",
        "Protokol jaringan pribadi",
        "Teknik analisis perbedaan"
      ],
      answer: "Teknik untuk membagikan data sambil melindungi privasi individu"
    },
    {
      id: 21,
      question: "Apa yang dimaksud dengan formal methods dalam keamanan sistem?",
      options: [
        "Penggunaan matematika untuk memverifikasi kebenaran sistem",
        "Teknik enkripsi formal",
        "Metode analisis resmi",
        "Protokol jaringan formal"
      ],
      answer: "Penggunaan matematika untuk memverifikasi kebenaran sistem"
    },
    {
      id: 22,
      question: "Apa itu federated learning dalam konteks keamanan AI?",
      options: [
        "Pembelajaran mesin terdesentralisasi yang melindungi privasi data",
        "Teknik pelatihan gabungan",
        "Metode analisis federasi",
        "Protokol jaringan pembelajaran"
      ],
      answer: "Pembelajaran mesin terdesentralisasi yang melindungi privasi data"
    },
    {
      id: 23,
      question: "Apa yang dimaksud dengan moving target defense?",
      options: [
        "Strategi yang terus mengubah sistem untuk membingungkan penyerang",
        "Teknik enkripsi bergerak",
        "Metode analisis target",
        "Protokol jaringan dinamis"
      ],
      answer: "Strategi yang terus mengubah sistem untuk membingungkan penyerang"
    },
    {
      id: 24,
      question: "Apa itu cyber threat intelligence sharing?",
      options: [
        "Berbagi informasi ancaman antara organisasi untuk meningkatkan keamanan",
        "Teknik enkripsi bersama",
        "Metode analisis ancaman",
        "Protokol jaringan intelijen"
      ],
      answer: "Berbagi informasi ancaman antara organisasi untuk meningkatkan keamanan"
    },
    {
      id: 25,
      question: "Apa yang dimaksud dengan cyber resilience?",
      options: [
        "Kemampuan sistem untuk terus beroperasi meskipun terjadi serangan",
        "Teknik enkripsi tahan lama",
        "Metode analisis ketahanan",
        "Protokol jaringan tangguh"
      ],
      answer: "Kemampuan sistem untuk terus beroperasi meskipun terjadi serangan"
    }
  ]
};

// User progress tracking
const getUserProgress = () => {
  if (typeof window !== 'undefined') {
    const progress = localStorage.getItem('cyberEduProgress');
    return progress ? JSON.parse(progress) : { 
      dasar: { completed: false, score: 0 }, 
      menengah: { completed: false, score: 0 }, 
      lanjut: { completed: false, score: 0 } 
    };
  }
  return { 
    dasar: { completed: false, score: 0 }, 
    menengah: { completed: false, score: 0 }, 
    lanjut: { completed: false, score: 0 } 
  };
};

export default function CyberEduQuiz() {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [activeScreen, setActiveScreen] = useState('welcome');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [userProgress, setUserProgress] = useState({
    dasar: { completed: false, score: 0 },
    menengah: { completed: false, score: 0 },
    lanjut: { completed: false, score: 0 }
  });
  const [email, setEmail] = useState('');
  const [showCertificateMessage, setShowCertificateMessage] = useState(false);
  const [allLevelsCompleted, setAllLevelsCompleted] = useState(false);
  const [passedCurrentLevel, setPassedCurrentLevel] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(true);




  useEffect(() => {
    const handleStorageChange = () => {
      const newToken = localStorage.getItem('authToken');
      setToken(newToken);
      setIsAuthenticated(!!newToken);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        if (token) {
          const results = await getMyQuizResults(token);
          
          const newProgress = {
            dasar: { completed: false, score: 0 },
            menengah: { completed: false, score: 0 },
            lanjut: { completed: false, score: 0 }
          };

          results.forEach(result => {
            if (result.percentage >= 70) {
              newProgress[result.level] = {
                completed: true,
                score: result.percentage
              };
            } else {
              newProgress[result.level] = {
                completed: newProgress[result.level].completed,
                score: Math.max(newProgress[result.level].score, result.percentage)
              };
            }
          });

          setUserProgress(newProgress);
          // Save to localStorage as fallback
          localStorage.setItem('cyberEduProgress', JSON.stringify(newProgress));
        } else {
          // For non-logged in users, use localStorage
          const localProgress = localStorage.getItem('cyberEduProgress');
          if (localProgress) {
            setUserProgress(JSON.parse(localProgress));
          }
        }
      } catch (error) {
        console.error("Failed to load progress:", error);
        // Fallback to localStorage if available
        const localProgress = localStorage.getItem('cyberEduProgress');
        if (localProgress) {
          setUserProgress(JSON.parse(localProgress));
        }
      } finally {
        setLoadingProgress(false);
      }
    };

    loadProgress();
  }, [token]);
  
  useEffect(() => {
    let timer;
    if (activeScreen === 'quiz' && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
    
    return () => clearTimeout(timer);
  }, [timeLeft, activeScreen]);

  useEffect(() => {
    let timer;
    if (activeScreen === 'quiz' && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
    
    return () => clearTimeout(timer);
  }, [timeLeft, activeScreen]);

  useEffect(() => {
    const allPassed = ['dasar', 'menengah', 'lanjut'].every(level => 
      userProgress[level]?.completed && userProgress[level]?.score >= 70
    );
    setAllLevelsCompleted(allPassed);
  }, [userProgress]);

  const updateUserProgress = async (level, newScore) => {
    const passed = newScore >= 70;
    const newProgress = {
      ...userProgress,
      [level]: {
        completed: passed || userProgress[level]?.completed,
        score: Math.max(newScore, userProgress[level]?.score || 0)
      }
    };

    // Simpan ke localStorage (untuk semua user)
    localStorage.setItem('cyberEduProgress', JSON.stringify(newProgress));
    setUserProgress(newProgress);
    setPassedCurrentLevel(passed);

    // Jika user login, kirim ke backend
    if (isAuthenticated && token) {
      try {
        await submitQuizToBackend({
          level,
          score: newScore,
          total_questions: quizData[selectedLevel].length,
          percentage: newScore,
          time_spent: (quizData[selectedLevel].length * 30) - timeLeft,
          answers: answers.map(answer => ({
            question: answer.question,
            selected_option: answer.selectedAnswer,
            correct_option: answer.correctAnswer,
            is_correct: answer.isCorrect
          }))
        });
      } catch (error) {
        console.error("Gagal sync ke backend:", error);
        // Progress tetap tersimpan di localStorage
      }
    }
  };

  const startQuiz = (level) => {
    setSelectedLevel(level);
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setTimeLeft(30);
    setQuizCompleted(false);
    setActiveScreen('quiz');
    setPassedCurrentLevel(false);
  };

  const submitQuizToBackend = async (quizData) => {
    try {
      const response = await fetch('https://cyber-edu-production.up.railway.app/quiz-results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(quizData)
      });

      if (!response.ok) throw new Error('Gagal menyimpan hasil quiz');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const handleOptionSelect = (option) => {
    if (selectedOption !== null || quizCompleted) return;
    setSelectedOption(option);
    
    const isCorrect = option === quizData[selectedLevel][currentQuestion].answer;
    setAnswers([...answers, { 
      question: quizData[selectedLevel][currentQuestion].question,
      selectedAnswer: option,
      correctAnswer: quizData[selectedLevel][currentQuestion].answer,
      isCorrect 
    }]);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        handleNextQuestion();
      }, 500);
    }, 1000);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    if (currentQuestion < quizData[selectedLevel].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      setQuizCompleted(true);
      const finalScore = Math.round((score / quizData[selectedLevel].length) * 100);
      updateUserProgress(selectedLevel, finalScore);
      setActiveScreen('result');
    }
  };

  const resetQuiz = () => {
    setActiveScreen('levelSelect');
    setSelectedLevel(null);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
    setPassedCurrentLevel(false);
  };

  const handleCertificateRequest = () => {
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setShowCertificateMessage(true);
      setTimeout(() => {
        setShowCertificateMessage(false);
      }, 5000);
    }
  };

  const getTimerColor = () => {
    if (timeLeft > 20) return 'text-green-500';
    if (timeLeft > 10) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getDifficultyColor = (level) => {
    switch(level) {
      case 'dasar': return 'bg-green-500';
      case 'menengah': return 'bg-yellow-500';
      case 'lanjut': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  const getDifficultyText = (level) => {
    switch(level) {
      case 'dasar': return 'Dasar';
      case 'menengah': return 'Menengah';
      case 'lanjut': return 'Lanjut';
      default: return level;
    }
  };

  const isLevelLocked = (level) => {
    if (level === 'dasar') return false;
    if (level === 'menengah') return !userProgress.dasar.completed || userProgress.dasar.score < 70;
    if (level === 'lanjut') return !userProgress.menengah.completed || userProgress.menengah.score < 70;
    return false;
  };

  const renderWelcomeScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="mb-6 text-5xl font-bold">
        <span className="text-blue-300">Cyber</span>
        <span className="text-green-300">Edu</span>
      </div>
      <div className="text-6xl font-extrabold mb-8 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          QUIZ CHALLENGE
        </span>
      </div>
      <p className="text-xl mb-12 text-center max-w-lg">
        Uji pengetahuan keamanan siber Anda melalui kuis interaktif dengan tiga tingkat kesulitan!
      </p>
      <button 
        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xl font-bold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-lg"
        onClick={() => setActiveScreen('levelSelect')}
      >
        Mulai Sekarang
      </button>
    </div>
  );

  const renderLevelSelectScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <h1 className="text-4xl font-bold mb-10">Pilih Tingkat Kesulitan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {['dasar', 'menengah', 'lanjut'].map((level) => (
          <div 
            key={level}
            className={`${getDifficultyColor(level)} bg-opacity-20 border-2 border-opacity-50 ${level === 'dasar' ? 'border-green-500' : level === 'menengah' ? 'border-yellow-500' : 'border-red-500'} rounded-xl p-6 cursor-pointer hover:transform hover:scale-105 transition-all ${isLevelLocked(level) ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => !isLevelLocked(level) && startQuiz(level)}
          >
            <div className="flex flex-col items-center">
              {isLevelLocked(level) && (
                <div className="absolute top-2 right-2 bg-gray-800 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              )}
              
              <div className={`w-20 h-20 ${getDifficultyColor(level)} rounded-full flex items-center justify-center mb-4`}>
                {level === 'dasar' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                ) : level === 'menengah' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-2">{getDifficultyText(level)}</h2>
              <p className="text-center text-sm">
                {level === 'dasar' ? 'Konsep dasar keamanan siber untuk pemula' : 
                 level === 'menengah' ? 'Pengetahuan menengah untuk yang sudah familiar' : 
                 'Topik lanjutan untuk profesional keamanan siber'}
              </p>
              <div className="flex items-center mt-4">
                <div className="flex">
                  {[...Array(level === 'dasar' ? 1 : level === 'menengah' ? 2 : 3)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${level === 'dasar' ? 'text-green-500' : level === 'menengah' ? 'text-yellow-500' : 'text-red-500'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {userProgress[level]?.completed && (
                  <span className="ml-2 text-sm">
                    (Skor tertinggi: {userProgress[level].score}%)
                  </span>
                )}
              </div>
              <button 
                className={`mt-6 px-6 py-2 ${level === 'dasar' ? 'bg-green-500 hover:bg-green-600' : level === 'menengah' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-red-500 hover:bg-red-600'} text-white rounded-full font-semibold transform transition-all ${isLevelLocked(level) ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLevelLocked(level)}
              >
                {userProgress[level]?.completed ? 'Coba Lagi' : 'Mulai Quiz'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {allLevelsCompleted && (
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-800 to-blue-800 rounded-xl max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Selamat! Anda Telah Menyelesaikan Semua Level</h2>
          <p className="text-center mb-4">Untuk menerima sertifikat, silakan masukkan alamat email Anda:</p>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda"
              className="flex-grow px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleCertificateRequest}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              Minta Sertifikat
            </button>
          </div>
          
          {showCertificateMessage && (
            <div className="mt-4 p-3 bg-green-700 bg-opacity-50 rounded-lg text-center">
              Terima kasih! Sertifikat akan dikirim ke email Anda dalam waktu maksimal 14 hari kerja.
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderQuizScreen = () => {
    if (!selectedLevel) return null;
    
    const currentQ = quizData[selectedLevel][currentQuestion];
    
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="w-full max-w-3xl bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg">
          <div className="flex justify-between items-center mb-6">
            <div className={`px-4 py-1 ${getDifficultyColor(selectedLevel)} rounded-full text-white font-medium`}>
              {getDifficultyText(selectedLevel)}
            </div>
            <div className={`px-4 py-1 bg-gray-800 rounded-full ${getTimerColor()} font-medium`}>
              {timeLeft} detik
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Pertanyaan {currentQuestion + 1} dari {quizData[selectedLevel].length}</span>
              <span>Skor: {score}</span>
            </div>
            <div className="w-full bg-gray-300 bg-opacity-20 rounded-full h-2.5">
              <div 
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${((currentQuestion + 1) / quizData[selectedLevel].length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <h2 className="text-xl md:text-2xl font-semibold mb-6">{currentQ.question}</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                disabled={selectedOption !== null}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  selectedOption === option 
                    ? option === currentQ.answer 
                      ? 'border-green-500 bg-green-500 bg-opacity-20' 
                      : 'border-red-500 bg-red-500 bg-opacity-20'
                    : 'border-gray-300 border-opacity-50 hover:border-blue-400 hover:bg-blue-500 hover:bg-opacity-10'
                } ${isAnimating && selectedOption === option ? 'animate-pulse' : ''}`}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
                    selectedOption === option 
                      ? option === currentQ.answer 
                        ? 'bg-green-500' 
                        : 'bg-red-500'
                      : 'bg-gray-700'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                  
                  {selectedOption === option && (
                    option === currentQ.answer ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderResultScreen = () => {
    const percentage = Math.round((score / quizData[selectedLevel].length) * 100);
    let message, color;
    
    if (percentage >= 80) {
      message = "Luar Biasa! Anda menguasai level ini!";
      color = "text-green-400";
    } else if (percentage >= 70) {
      message = "Bagus! Anda lulus level ini dengan baik.";
      color = "text-blue-400";
    } else if (percentage >= 50) {
      message = "Hampir berhasil! Anda perlu belajar lebih giat lagi.";
      color = "text-yellow-400";
    } else {
      message = "Anda belum mencapai nilai kelulusan (KKM 70). Silakan coba lagi!";
      color = "text-red-400";
    }
    
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="w-full max-w-3xl bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg">
          <h1 className="text-3xl font-bold mb-2 text-center">Hasil Kuis</h1>
          <p className="text-center mb-8">Tingkat: {getDifficultyText(selectedLevel)}</p>
          
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-48 h-48 mb-6">
              <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center">
                <div className={`text-5xl font-bold ${color}`}>{percentage}%</div>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="#374151" 
                  strokeWidth="8"
                />
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke={percentage >= 80 ? "#10B981" : percentage >= 70 ? "#3B82F6" : percentage >= 50 ? "#FBBF24" : "#EF4444"} 
                  strokeWidth="8"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * percentage) / 100}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>
            <p className="text-xl font-semibold mb-2">
              Skor Anda: {score} dari {quizData[selectedLevel].length}
            </p>
            <p className={`text-lg ${color} text-center`}>{message}</p>
            {percentage >= 70 && (
              <p className="text-green-400 mt-2">✓ Anda telah menyelesaikan level ini!</p>
            )}
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Ringkasan Jawaban</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {answers.map((answer, index) => (
                <div key={index} className={`p-4 rounded-lg ${answer.isCorrect ? 'bg-green-500 bg-opacity-10 border border-green-500' : 'bg-red-500 bg-opacity-10 border border-red-500'}`}>
                  <p className="font-medium mb-2">
                    {index + 1}. {answer.question}
                  </p>
                  <div className="flex flex-col sm:flex-row">
                    <span className={answer.isCorrect ? 'text-green-400' : 'text-red-400'}>
                      Jawaban Anda: {answer.selectedAnswer}
                    </span>
                    {!answer.isCorrect && (
                      <span className="text-green-400 sm:ml-auto mt-2 sm:mt-0">
                        Jawaban Benar: {answer.correctAnswer}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
              onClick={() => startQuiz(selectedLevel)}
            >
              Ulangi Quiz
            </button>
            {percentage >= 70 && (
              <button 
                className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-colors"
                onClick={() => {
                  if (selectedLevel === 'dasar') {
                    startQuiz('menengah');
                  } else if (selectedLevel === 'menengah') {
                    startQuiz('lanjut');
                  } else {
                    resetQuiz();
                  }
                }}
              >
                {selectedLevel === 'lanjut' ? 'Kembali ke Menu' : 'Lanjut ke Level Berikutnya'}
              </button>
            )}
            <button 
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors"
              onClick={resetQuiz}
            >
              Kembali ke Pemilihan Level
            </button>
          </div>
        </div>
      </div>
    );
  };
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      {loadingProgress && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">Memuat progress...</p>
          </div>
        </div>
      )}
      
      {activeScreen === 'welcome' && renderWelcomeScreen()}
      {activeScreen === 'levelSelect' && renderLevelSelectScreen()}
      {activeScreen === 'quiz' && renderQuizScreen()}
      {activeScreen === 'result' && renderResultScreen()}
    </div>
  );
}